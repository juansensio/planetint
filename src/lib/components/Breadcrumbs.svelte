<script>
    import { onMount } from "svelte";

    let { items } = $props();

    onMount(() => {
        // Add structured data for breadcrumbs
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://planetint.vercel.app/",
                },
                ...items.map((item, index) => ({
                    "@type": "ListItem",
                    position: index + 2,
                    name: item.text,
                    item: `https://planetint.vercel.app${item.url}`,
                })),
            ],
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    });
</script>

<nav
    aria-label="Breadcrumb"
    class="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4"
>
    <a href="/" class="hover:text-green-400 transition-colors">Home</a>

    {#each items as item, index}
        <span class="text-gray-400">/</span>
        {#if index === items.length - 1}
            <span class="text-gray-800 dark:text-gray-200 font-medium"
                >{item.text}</span
            >
        {:else}
            <a href={item.url} class="hover:text-green-400 transition-colors"
                >{item.text}</a
            >
        {/if}
    {/each}
</nav>
