<script>
  import { browser } from "$app/environment";

  let darkMode = false;

  function handleSwitchDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    darkMode
      ? document.documentElement.setAttribute("data-theme", "black")
      : document.documentElement.setAttribute("data-theme", "lofi");
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }

  if (browser) {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.setAttribute("data-theme", "black");
      document.documentElement.classList.add("dark");
      darkMode = true;
    } else {
      document.documentElement.setAttribute("data-theme", "lofi");
      document.documentElement.classList.remove("dark");
      darkMode = false;
    }
  }
</script>

<div class="flex flex-row items-center">
  <input
    class="hidden"
    checked={darkMode}
    on:click={handleSwitchDarkMode}
    type="checkbox"
    id="theme-toggle"
  />
  <label for="theme-toggle"></label>
</div>

<style lang="postcss">
  @reference "tailwindcss";

  #theme-toggle {
    @apply invisible;
  }

  #theme-toggle + label {
    @apply inline-block cursor-pointer h-6 w-6 rounded-full duration-300 content-[''];
  }

  #theme-toggle:not(:checked) + label {
    @apply bg-amber-400;
  }

  #theme-toggle:checked + label {
    @apply bg-transparent;
    box-shadow: inset -9px -8px 1px 1px #ddd;
  }
</style>
