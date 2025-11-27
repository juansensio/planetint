import { fetchPosts } from '$lib/posts.js';

export async function GET() {
	const posts = await fetchPosts();

	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Plantary Intelligence - Blog</title>
		<link>https://planetint.vercel.app/blog</link>
		<description>We create intelligent systems that help humanity understand and navigate planets.</description>
		<language>en-US</language>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		<atom:link href="https://planetint.vercel.app/feed.xml" rel="self" type="application/rss+xml" />
		${posts
			.map(
				(post) => `
		<item>
			<title><![CDATA[${post.title}]]></title>
			<link>https://planetint.vercel.app${post.slug}</link>
			<guid>https://planetint.vercel.app${post.slug}</guid>
			<pubDate>${new Date(post.date).toUTCString()}</pubDate>
			<description><![CDATA[${post.description}]]></description>
			<author>Plantary Intelligence</author>
			<category>Blog</category>
			${post.tags?.map((tag) => `<category>${tag}</category>`).join('') || ''}
		</item>`
			)
			.join('')}
	</channel>
</rss>`;

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/rss+xml'
		}
	});
}
