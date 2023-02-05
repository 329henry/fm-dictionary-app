<script lang="ts">
  import SearchIcon from '../../../assets/images/icon-search.svg'

  const onInputChange = (event: any) => {
    console.log(event.target.value)
  }

  const onClickSearch = () => {
    console.log('search')
  }
</script>

<div class="input-container">
  <input class="text-field" type="text" on:change={onInputChange} />
  <div class="search-icon" on:click={onClickSearch} on:keydown={onClickSearch}>
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
