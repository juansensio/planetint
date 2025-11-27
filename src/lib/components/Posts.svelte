<script>
    let { posts } = $props();
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
    {#each posts as post}
        <a
            href={post.slug}
            class="w-full rounded-lg shadow-lg transition-transform duration-200 hover:scale-102 flex flex-col bg-white dark:bg-gray-900 overflow-hidden"
        >
            <div class="flex flex-col justify-between p-4">
                <h2
                    class="font-bold text-lg text-gray-900 dark:text-white mb-1"
                >
                    {post.title}
                </h2>
                <p class="text-gray-700 dark:text-gray-300 text-sm">
                    {post.description}
                </p>
            </div>
            <div
                class="flex flex-row justify-between p-4 text-slate-500 dark:text-slate-400 mt-auto text-sm"
            >
                <p>
                    {post.printDate}
                </p>
                <p>
                    {post.printReadingTime} min
                </p>
            </div>
        </a>
    {/each}
</div>
