import fs from 'fs';
import { format } from 'date-fns';
import readingTime from 'reading-time';
import matter from 'gray-matter';
import { parseMarkdown } from './parseMarkdown';

export const fetchPost = async (post) => {
	// read markdown file as string
	const fileContents = fs.readFileSync(`src/routes/blog/${post}`, 'utf8');
	// get metadata
	const matterResult = matter(fileContents);
	const readingStats = readingTime(matterResult.content);
	const printReadingTime = Math.ceil(readingStats.minutes);
	const printDate = format(new Date(matterResult.data.date), 'MMMM d, yyyy');
	const content = await parseMarkdown(matterResult.content);
	return {
		meta: {
			...matterResult.data,
			tags: matterResult.data.tags?.split(',').map((tag) => tag.toLowerCase().trimStart()) || [],
			printReadingTime,
			printDate,
			slug: `/blog/${post?.replace('.md', '')}`
		},
		content
	};
};

export const fetchPostMetadata = async (post) => {
	const { meta } = await fetchPost(post);
	return meta;
};

export const fetchPosts = async () => {
	const files = fs.readdirSync('src/routes/blog');
	const posts = files.filter((file) => file.endsWith('.md'));
	const allPosts = await Promise.all(posts.map((post) => fetchPostMetadata(post)));
	return allPosts.sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});
};
