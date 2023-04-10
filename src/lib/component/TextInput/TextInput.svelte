<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import SearchIcon from './assets/icon-search.svg'

  let inputValue = ''

  const dispatch = createEventDispatcher()

  const onSearch = () => {
    dispatch('search', inputValue)
  }

  const onEnterSearch = (event: KeyboardEvent) => {
    if (event?.code === 'Enter') {
      onSearch()
    }
  }
</script>

<div class="input-container">
  <input
    class="text-field"
    type="text"
    bind:value={inputValue}
    on:keydown={onEnterSearch}
  />
  <div class="search-icon" on:click={onSearch}>
    <img src={SearchIcon} alt="search-icon" />
  </div>
</div>

<style lang="scss">
  .input-container {
    position: relative;
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 52px auto 45px;
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
</style>
