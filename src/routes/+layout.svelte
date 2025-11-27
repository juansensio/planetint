<script>
	import "../app.css";
	import Nav from "./Nav.svelte";
	// import Footer from "./Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<script>
		if (localStorage.theme === "dark") {
			// User has explicitly chosen dark mode
			document.documentElement.setAttribute("data-theme", "black");
			document.documentElement.classList.add("dark");
			darkMode = true;
		} else if (
			localStorage.theme === "light" ||
			!("theme" in localStorage)
		) {
			// User has explicitly chosen light mode OR no preference is set in local storage
			document.documentElement.setAttribute("data-theme", "lofi");
			document.documentElement.classList.remove("dark");
			darkMode = false;
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			// User's system-wide color scheme preference is dark mode
			document.documentElement.setAttribute("data-theme", "black");
			document.documentElement.classList.add("dark");
			darkMode = true;
		} else {
			// Default to light mode
			document.documentElement.setAttribute("data-theme", "lofi");
			document.documentElement.classList.remove("dark");
			darkMode = false;
		}
	</script>
</svelte:head>

<main class="flex flex-col min-h-screen justify-between">
	<div class="h-full flex-1">
		<Nav />
		<div class="flex flex-col gap-3 py-3 items-center">
			{@render children()}
		</div>
	</div>
	<!-- <Footer /> -->
</main>
