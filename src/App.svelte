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
    padding: 2rem 2rem 0;
  }

  :global(body) {
    background-color: var(--white, #fff);
    transition: background-color 0.3s;
  }
  :global(body.dark) {
    background-color: var(--black, #050505);
    color: var(--white, #fff);
    color-scheme: light dark;
  }

  @media screen and (max-width: 767px) {
    main {
      width: 90vw;
      padding: 2rem 1rem 0;
    }
  }
</style>
