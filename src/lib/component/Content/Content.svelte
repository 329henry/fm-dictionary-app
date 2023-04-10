<script lang="ts">
  import type { TWord } from 'src/lib/types/types'

  export let wordData: TWord
</script>

<div class="content-container">
  <div class="first-row-container">
    <div class="word-info">
      <div class="search-word">
        <div>{wordData.word}</div>
        <div>{wordData.phonetic}</div>
      </div>
    </div>
    <div class="play-button" />
  </div>
</div>

<style lang="scss">
  .content-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .first-row-container {
    display: flex;
    justify-content: space-between;
  }
</style>
