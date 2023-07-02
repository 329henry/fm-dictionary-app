<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query'
  import Input from '$component/TextInput/TextInput.svelte'
  import TopBar from '$component/TopBar/TopBar.svelte'
  import type { TWord } from '$types/word-types'
  import Content from '$component/Content/Content.svelte'
  import { theme } from '$store/theme-toggle'

  $: inputValue = ''
  $: themeClass = $theme === 'dark' ? 'dark' : 'light'

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
    staleTime: 1000 * 60
  })

  const onClickSearch = (event: CustomEvent<string>) => {
    const newInputValue = event.detail.trim()
    if (newInputValue !== '') {
      inputValue = newInputValue
    }
  }

  const handleToggle = (checked: boolean) => {
    if (checked) {
      theme.set('dark')
    } else {
      theme.set('light')
    }
  }
</script>

<div class={themeClass}>
  <TopBar {handleToggle} />
  <Input on:search={onClickSearch} />
</div>

{#if $searchQuery.isLoading}
  Loading...
{:else if $searchQuery.isError}
  Error: {$searchQuery.error.message}
{:else if $searchQuery.isSuccess}
  <Content wordData={$searchQuery?.data[0]} />
{/if}
