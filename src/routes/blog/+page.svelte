<script>
  import Posts from "$lib/components/Posts.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

  let { data } = $props();

  const breadcrumbItems = [{ text: "Blog", url: "/blog" }];

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Planetary Intelligence Blog",
    description: "Planetary Intelligence Blog. Articles, updates and more.",
    url: "https://planetint.vercel.app/blog",
    publisher: {
      "@type": "Organization",
      name: "Planetary Intelligence",
      logo: {
        "@type": "ImageObject",
        url: "https://planetint.vercel.app/logo.png",
      },
    },
    blogPost: data.posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `https://planetint.vercel.app${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: "Planetary Intelligence",
      },
    })),
  };

  const script = `<script type="application/ld+json">
        ${JSON.stringify(ldJson)}
    <\/script>`;
</script>

<svelte:head>
  <title>Blog - Planetary Intelligence</title>
  <meta
    name="description"
    content="Discover articles, updates on Planetary Intelligence and more."
  />
  <meta
    name="keywords"
    content="blog, artificial intelligence, planetary intelligence, space, science, technology"
  />

  <!-- Open Graph -->
  <meta property="og:title" content="Blog - Planetary Intelligence" />
  <meta
    property="og:description"
    content="Discover articles, updates on Planetary Intelligence and more."
  />
  <meta property="og:url" content="https://planetint.vercel.app/blog" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://planetint.vercel.app/logo.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter -->
  <meta property="twitter:title" content="Blog - Planetary Intelligence" />
  <meta
    property="twitter:description"
    content="Discover articles, updates on Planetary Intelligence and more."
  />
  <meta
    property="twitter:image"
    content="https://planetint.vercel.app/logo.png"
  />

  <!-- Canonical -->
  <link rel="canonical" href="https://planetint.vercel.app/blog" />

  <!-- Structured Data -->
  {@html script}
</svelte:head>

<div class="flex flex-col gap-4 w-full max-w-6xl mx-auto px-4 my-12">
  <Breadcrumbs items={breadcrumbItems} />
  <h1 class="text-2xl font-bold dark:text-white">Blog</h1>
  <!-- <div class="flex flex-row gap-4 flex-wrap w-full">
        {#each data.tags as tag}
            <p>{tag}</p>
        {/each}
    </div> -->
  <Posts posts={data.posts} />
</div>
