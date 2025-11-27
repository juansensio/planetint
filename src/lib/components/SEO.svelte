<script>
    let {
        title = "Janus Noise - Indie GameDev Studio",
        description = "Indie GameDev Studio. Currently developing Planet Crawlers.",
        keywords = "game development, indie game development, planet crawlers, game, development",
        image = "/janus.png",
        url = "https://janusnoise.com/",
        type = "website",
        author = "Juan Sensio",
        publishedTime = null,
        modifiedTime = null,
        tags = [],
        section = null,
        noindex = false,
        nofollow = false,
    } = $props();

    const fullUrl = url.startsWith("http")
        ? url
        : `https://janusnoise.com${url}`;
    const fullImage = image.startsWith("http")
        ? image
        : `https://janusnoise.com${image}`;
</script>

<svelte:head>
    <!-- Basic Meta Tags -->
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />

    <!-- Robots -->
    {#if noindex || nofollow}
        <meta
            name="robots"
            content="{noindex ? 'noindex' : 'index'}{nofollow
                ? ',nofollow'
                : ',follow'}"
        />
    {:else}
        <meta name="robots" content="index, follow" />
    {/if}

    <!-- Canonical -->
    <link rel="canonical" href={fullUrl} />

    <!-- Open Graph -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={fullUrl} />
    <meta property="og:type" content={type} />
    <meta property="og:image" content={fullImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="Janus Noise" />
    <meta property="og:locale" content="en_US" />

    {#if type === "article"}
        <meta property="article:author" content={author} />
        {#if section}
            <meta property="article:section" content={section} />
        {/if}
        {#if publishedTime}
            <meta property="article:published_time" content={publishedTime} />
        {/if}
        {#if modifiedTime}
            <meta property="article:modified_time" content={modifiedTime} />
        {/if}
        {#each tags as tag}
            <meta property="article:tag" content={tag} />
        {/each}
    {/if}

    <!-- Twitter -->
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={fullImage} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@janusnoise" />
    <meta property="twitter:creator" content="@janusnoise" />

    <!-- Additional Meta Tags -->
    <meta name="twitter:label1" content="Reading time" />
    <meta name="twitter:data1" content="5 min" />

    <!-- Language and Region -->
    <meta property="og:locale:alternate" content="en_US" />
</svelte:head>
