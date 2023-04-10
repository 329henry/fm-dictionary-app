<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'
  import Home from './lib/page/Home.svelte'

  const queryClient = new QueryClient()
</script>

<QueryClientProvider client={queryClient}>
  <main>
    <Home />
  </main>
</QueryClientProvider>

<style>
  main {
    width: 100vw;
    max-width: 738px;
    height: 100vh;
  }
</style>
