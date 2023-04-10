<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query'
  import Input from '../component/TextInput/TextInput.svelte'
  import TopBar from '../component/TopBar/TopBar.svelte'
  import type { TWord } from '../types/types'
  import Content from '../component/Content/Content.svelte'

  $: inputValue = ''

  const searchWords = async () => {
    console.log('api', inputValue, typeof inputValue)
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
    )
    return await res.json()
  }

  const searchQuery = createQuery<TWord[], Error>({
    queryKey: ['search', inputValue],
    queryFn: searchWords
  })

  const onClickSearch = (event: CustomEvent<string>) => {
    console.log('event', event)
    inputValue = event.detail
  }
  $: console.log('inputValue', inputValue)
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
