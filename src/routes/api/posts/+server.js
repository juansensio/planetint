// src/routes/api/posts/+server.js
import { fetchPosts } from '$lib/posts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchPosts();
	return json(allPosts);
};
