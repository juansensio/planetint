<script>
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

    let { data } = $props();

    const breadcrumbItems = [
        { text: "Blog", url: "/blog" },
        { text: data.post.meta.title, url: data.post.meta.slug },
    ];

    const ldJson = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data.post.meta.title,
        description: data.post.meta.description,
        image: `https://planetint.vercel.app${data.post.meta.thumbnail}`,
        url: `https://planetint.vercel.app${data.post.meta.slug}`,
        datePublished: `${data.post.meta.date}`,
        dateModified: `${data.post.meta.date}`,
        author: {
            "@type": "Person",
            name: "Planetary Intelligence",
            url: "https://planetint.vercel.app",
        },
        publisher: {
            "@type": "Organization",
            name: "Planetary Intelligence",
            logo: {
                "@type": "ImageObject",
                url: "https://planetint.vercel.app/logo.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://planetint.vercel.app${data.post.meta.slug}`,
        },
        wordCount: `${data.post.content.split(" ").length}`,
        timeRequired: `PT${data.post.meta.printReadingTime}M`,
        keywords:
            data.post.meta.tags?.join(", ") ||
            "artificial intelligence, planetary intelligence, space, science, technology",
        articleSection: "Blog",
        inLanguage: "en-US",
    };

    const script = `<script type="application/ld+json">
        ${JSON.stringify(ldJson)}
    <\/script>`;
</script>

<svelte:head>
    <title>{data.post.meta.title} - Planetary Intelligence | Blog</title>
    <meta name="description" content={data.post.meta.description} />
    <meta
        name="keywords"
        content={data.post.meta.tags?.join(", ") ||
            "artificial intelligence, planetary intelligence, space, science, technology"}
    />
    <meta name="author" content="Planetary Intelligence" />
    <meta name="date" content={data.post.meta.date} />

    <!-- Open Graph -->
    <meta property="og:title" content={data.post.meta.title} />
    <meta property="og:description" content={data.post.meta.description} />
    <meta
        property="og:url"
        content={`https://planetint.vercel.app${data.post.meta.slug}`}
    />
    <meta property="og:type" content="article" />
    <meta
        property="og:image"
        content={`https://planetint.vercel.app${data.post.meta.thumbnail}`}
    />
    <meta property="article:published_time" content={data.post.meta.date} />
    <meta property="article:author" content="Planetary Intelligence" />
    {#if data.post.meta.tags}
        {#each data.post.meta.tags as tag}
            <meta property="article:tag" content={tag} />
        {/each}
    {/if}

    <!-- Twitter -->
    <meta property="twitter:title" content={data.post.meta.title} />
    <meta property="twitter:description" content={data.post.meta.description} />
    <meta
        property="twitter:image"
        content={`https://planetint.vercel.app${data.post.meta.thumbnail}`}
    />

    <!-- Canonical -->
    <link
        rel="canonical"
        href={`https://planetint.vercel.app${data.post.meta.slug}`}
    />

    <!-- Structured Data -->
    {@html script}
</svelte:head>

<div class="flex flex-col gap-4 w-full max-w-4xl mx-auto px-4 mt-12">
    <Breadcrumbs items={breadcrumbItems} />
</div>

<div
    class="flex flex-col w-full max-w-4xl mx-auto shadow-lg rounded-xl min-h-[200px] items-center justify-around p-4"
    style={`background-image: url(${data.post.meta.thumbnail}); background-size: cover; background-position: center;`}
>
    <div
        class="flex flex-col gap-4 max-w-4xl mx-auto content p-4 bg-black/70 rounded-xl"
    >
        <h1 class="text-2xl font-bold text-white text-center max-w-xl mx-auto">
            {data.post.meta.title}
        </h1>
        <p class="text-white text-center max-w-xl mx-auto">
            {data.post.meta.description}
        </p>
        <div
            class="flex flex-col sm:flex-row gap-2 justify-center items-center text-sm text-gray-300"
        >
            <span>{data.post.meta.printDate}</span>
            <span>•</span>
            <span>{data.post.meta.printReadingTime} min reading time</span>
        </div>
    </div>
</div>

<div class="flex flex-col gap-4 w-full max-w-4xl mx-auto content px-4 mt-12">
    {@html data.post.content}
</div>
