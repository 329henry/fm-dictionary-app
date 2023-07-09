<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { theme } from '$store/theme-toggle'
  import SearchIcon from '$component/TextInput/assets/icon-search.svg'

  let inputValue = ''
  let isEmpty = false

  $: isDarkTheme = $theme === 'dark'

  const dispatch = createEventDispatcher()

  const onSearch = () => {
    if (inputValue.trim() === '') {
      isEmpty = true
    } else {
      isEmpty = false
      dispatch('search', inputValue)
    }
  }

  const onEnterSearch = (event: KeyboardEvent) => {
    if (event?.code === 'Enter') {
      onSearch()
    }
  }
</script>

<div class="input-container">
  <div class="input-row">
    <input
      class="text-field {isEmpty ? 'error' : ''}"
      type="text"
      class:dark={isDarkTheme}
      bind:value={inputValue}
      on:keydown={onEnterSearch}
    />
    <div class="search-icon" on:click={onSearch}>
      <img src={SearchIcon} alt="search-icon" />
    </div>
  </div>
  {#if isEmpty}
    <div class="error-message">Whoops, can’t be empty…</div>
  {/if}
</div>

<style lang="scss">
  .input-container {
    position: relative;
    margin: 52px auto 45px;
  }

  .input-row {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
    padding: 0 24px;
    font-size: 20px;
    font-weight: 700;
    outline: none;
    background: var(--gray-200, #f4f4f4);

    &.dark {
      background: #3b3b3b;
      border: 1px solid var(--gray-700, #1f1f1f);
      color: var(--white, #fff);
    }

    &:focus {
      border: 1px solid var(--purple, #a445ed);
    }

    &.error {
      border: var(--error-border, 1px solid #ff5252);
    }
  }

  .search-icon {
    position: absolute;
    top: 20px;
    right: 24px;
    width: 16px;
    height: 16px;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  .error-message {
    text-align: left;
    color: var(--cyan-red, #ff5252);
    font-size: 20px;
  }

  @media screen and (max-width: 767px) {
    .input-container {
      margin: 32px auto 24px;
    }

    .input-row {
      height: 48px;
    }

    input {
      font-size: 16px;
    }

    .error-message {
      font-size: 16px;
    }

    .search-icon {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 16px;
      height: 16px;

      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
