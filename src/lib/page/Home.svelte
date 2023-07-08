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
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
      )
      if (res.status === 200) {
        return await res.json()
      } else {
        throw Error()
      }
    } catch (error) {
      throw new Error('no result')
    }
  }

  $: searchQuery = createQuery<TWord[], Error>({
    queryKey: ['search', inputValue],
    queryFn: searchWords,
    enabled: inputValue !== '' && inputValue !== undefined,
    retry: false
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
  <NoDefinition />
{:else if $searchQuery.isSuccess}
  <Content wordData={$searchQuery?.data[0]} />
{/if}
