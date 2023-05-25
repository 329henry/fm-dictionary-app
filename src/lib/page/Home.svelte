<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query'
  import Input from '../component/TextInput/TextInput.svelte'
  import TopBar from '../component/TopBar/TopBar.svelte'
  import type { TWord } from '../types/types'
  import Content from '../component/Content/Content.svelte'

  $: inputValue = ''

  const searchWords = async () => {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
    )
    return await res.json()
  }

  $: searchQuery = createQuery<TWord[], Error>({
    queryKey: ['search', inputValue],
    queryFn: searchWords,
    enabled: inputValue !== '' && inputValue !== undefined,
    staleTime: 1000 * 60,
  })

  const onClickSearch = (event: CustomEvent<string>) => {
    const newInputValue = event.detail.trim()
    if (newInputValue !== '') {
      inputValue = newInputValue
    }
  }

</script>

<TopBar />
<Input on:search={onClickSearch} />

{#if $searchQuery.isLoading}
  Loading...
{:else if $searchQuery.isError}
  Error: {$searchQuery.error.message}
{:else if $searchQuery.isSuccess}
  <Content wordData={$searchQuery?.data[0]} />
{/if}
