// import { parseEquations, parseInlieEquation } from './latex.js';
import { Marked } from 'marked';
// import { markedHighlight } from 'marked-highlight';
// import prism from 'prismjs';
// import loadLanguages from 'prismjs/components/index.js';
// loadLanguages(['python', 'bash']);

// Cómo usar marked: https://marked.js.org/using_advanced

export const parseMarkdown = async (content) => {
	// parse block latex equations before parsing the rest since marked will screw up the equations
	// content = await parseEquations(content);
	// code highlighting
	const marked = new Marked(
		// markedHighlight({
		// 	highlight(code, language, info) {
		// 		// const language = hljs.getLanguage(language) ? language : 'plaintext';
		// 		// return hljs.highlight(code, { language }).value;
		// 		const highlightedCode = prism.highlight(
		// 			code,
		// 			prism.languages[language] || prism.languages.html,
		// 			language
		// 		);
		// 		return `<pre class="language-${language}">${highlightedCode}</pre>`;
		// 	}
		// })
	);
	// open links in new tab
	const renderer = new marked.Renderer();
	renderer.link = function ({ href, title, text }) {
		return `<a target="_blank" href="${href}">${text}</a>`;
	};
	marked.use({
		renderer,
		async: true,
		// walkTokens: async (token) => {
		// 	// parse inline equations
		// 	if (token.type === 'text') token.text = await parseInlieEquation(token.text);
		// }
	});
	content = await marked.parse(content);
	return content;
};
