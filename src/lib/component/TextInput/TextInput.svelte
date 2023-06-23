<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import SearchIcon from '$component/TextInput/assets/icon-search.svg'

  let inputValue = ''
  let isEmpty = false

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
    border: 1px solid #1f1f1f;
    border-radius: 12px;
    padding: 0 24px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    outline: none;

    &:focus {
      border: 1px solid #a445ed;
    }

    &.error {
      border: 1px solid #ff5252;
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
    color: #ff5252;
    font-size: 20px;
  }
</style>
