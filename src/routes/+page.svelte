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
    <h2>What is Planetary Intelligence?</h2>
    <p>
        We define planetary intelligence as the ability to understand, predict,
        and navigate planetary dynamics.
        <!-- An example on Earth could be a system
        that measures and forecasts the amount of water on a given area, useful
        for agriculture or resource management. An example on the Moon could be
        a system that monitors the temperature and humidity of a given area,
        useful for habitat construction and astronaut safety. An example on Mars
        could be a system that monitors the atmosphere and weather conditions,
        useful for habitat construction and astronaut safety. -->
    </p>
    <p>
        The following elements are essential to achieve planetary intelligence:
    </p>
    <ul>
        <li>
            Data: This includes data from satellites on orbit and sensors on the
            surface.
        </li>
        <li>
            Networking and storage: This includes the ability to communicate and
            store data in a distributed network.
        </li>
        <li>
            Processing algorithms: This includes the ability to process data
            using algorithms, including machine learning and deep learning.
        </li>
        <li>
            Simulation: This includes the ability to simulate planetary dynamics
            using the data and algorithms for scenario analysis, optimization,
            and decision-making.
        </li>
        <li>
            Delivery: This includes the ability to deliver the results of the
            analysis and decision-making to the users for taking action.
        </li>
    </ul>
    <p>
        Our goal is to engineer a vertical integration of these elements into a
        single system that can be used to achieve planetary intelligence.
    </p>
    <h2>Why it matters</h2>
    <blockquote>for Earth, the Moon, Mars, and beyond</blockquote>
    <p>...</p>
    <h2>What we are building</h2>
    <p>...</p>
    <!-- <h2>Latest blog posts</h2>
    <p></p>
    <h2>Links to tools & GitHub</h2>
    <p></p> -->
</article>
