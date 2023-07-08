<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'
  import Home from '$page/Home.svelte'
  import { theme } from '$store/theme-toggle'
  import { font } from '$store/font-select'

  const queryClient = new QueryClient()

  $: $theme === 'dark'
    ? document.body.classList.add('dark')
    : document.body.classList.remove('dark')

  $: document.body.style.fontFamily = $font
</script>

<QueryClientProvider client={queryClient}>
  <main>
    <Home />
  </main>
</QueryClientProvider>

<style lang="scss">
  main {
    width: 100vw;
    max-width: 738px;
    height: calc(100vh - 2rem);
  }

  :global(body) {
    background-color: #fff;
    transition: background-color 0.3s;
  }
  :global(body.dark) {
    background-color: #242424;
    color: rgba(255, 255, 255, 0.87);
    color-scheme: light dark;
  }
</style>
