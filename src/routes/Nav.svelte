<script>
  import ThemeSwitch from "./ThemeSwitch.svelte";
  // import Discord from "./Discord.svelte";
  // import Twitter from "./Twitter.svelte";
</script>

<nav
  class="flex flex-row justify-end w-full max-w-6xl gap-3 items-center m-auto"
>
  <div
    class="flex flex-row gap-3 p-4 rounded-xl items-center justify-between w-full"
  >
    <div class="flex flex-row items-center gap-3 sm:gap-6 text-xs sm:text-lg">
      <a href="/" class="hover:underline"> HOME </a>
      <a href="/blog" class="hover:underline"> BLOG </a>
    </div>
    <div class="flex flex-row gap-4 items-center">
      <!-- <Discord /> -->
      <!-- <Twitter /> -->
      <ThemeSwitch />
    </div>
  </div>
</nav>
