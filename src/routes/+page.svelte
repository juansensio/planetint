<script>
    // Multiple schema types for comprehensive SEO
    const ldJson = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Planetary Intelligence",
            url: "https://planetint.vercel.app/",
            logo: "https://planetint.vercel.app/logo.png",
            description:
                "We engineer AI-powered planetary intelligence systems that help humanity understand and navigate planets.",
            foundingDate: "2025",
            sameAs: [],
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Planetary Intelligence",
            url: "https://planetint.vercel.app/",
            description:
                "We engineer AI-powered planetary intelligence systems that fuse orbital and surface data with simulation to interpret environments, predict dynamics, and inform autonomous and human-led operations across Earth and other worlds.",
            publisher: {
                "@type": "Organization",
                name: "Planetary Intelligence",
                logo: {
                    "@type": "ImageObject",
                    url: "https://planetint.vercel.app/logo.png",
                },
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Planetary Intelligence",
            description:
                "We engineer AI-powered planetary intelligence systems that fuse orbital and surface data with simulation to interpret environments, predict dynamics, and inform autonomous and human-led operations across Earth and other worlds.",
            url: "https://planetint.vercel.app/",
            isPartOf: {
                "@type": "WebSite",
                url: "https://planetint.vercel.app/",
            },
        },
    ];

    const script = `<script type="application/ld+json">
          ${JSON.stringify(ldJson)}
      <\/script>`;
</script>

<svelte:head>
    <title>Planetary Intelligence</title>
    <meta
        name="description"
        content="Planetary Intelligence. We engineer intelligent systems that help humanity understand and navigate planets."
    />
    <meta
        name="keywords"
        content="planetary intelligence, ai, artificial intelligence, space, science, technology"
    />

    <!-- Open Graph -->
    <meta property="og:title" content="Planetary Intelligence" />
    <meta
        property="og:description"
        content="Planetary Intelligence. Our mission is to engineer AI-powered planetary intelligence systems that fuse orbital and surface data with simulation to interpret environments, predict dynamics, and inform autonomous and human-led operations across Earth and other worlds."
    />
    <meta property="og:url" content="https://planetint.vercel.app/" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://planetint.vercel.app/logo.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter -->
    <meta property="twitter:title" content="Planetary Intelligence" />
    <meta
        property="twitter:description"
        content="Planetary Intelligence. Our mission is to engineer AI-powered planetary intelligence systems that fuse orbital and surface data with simulation to interpret environments, predict dynamics, and inform autonomous and human-led operations across Earth and other worlds."
    />
    <meta
        property="twitter:image"
        content="https://planetint.vercel.app/logo.png"
    />

    <!-- Canonical -->
    <link rel="canonical" href="https://planetint.vercel.app/" />

    <!-- Structured Data -->
    {@html script}
</svelte:head>

<article class="flex flex-col gap-4 w-full max-w-6xl mx-auto px-4">
    <h1>Planetary Intelligence</h1>
    <h2>Our Mission</h2>
    <blockquote>
        “To engineer AI-powered planetary intelligence systems that fuse orbital
        and surface data with simulation to interpret environments, predict
        dynamics, and inform autonomous and human-led operations across Earth
        and other worlds.”
    </blockquote>
</article>
