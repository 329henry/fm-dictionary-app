<script lang="ts">
  import type { TWord } from 'src/lib/types/types'
  import PlayButton from '../PlayButton/PlayButton.svelte'
  import WordInfo from './WordInfo/WordInfo.svelte'

  export let wordData: TWord
</script>

<div class="content-container">
  <div class="first-row-container">
    <div class="word-info">
      <div class="search-word">
        <div class="keyword">{wordData.word}</div>
        <div class="phonetic">{wordData.phonetic}</div>
      </div>
    </div>
    <div class="play-button">
      <PlayButton />
    </div>
  </div>
  <WordInfo wordData={wordData} />
</div>

<style lang="scss">
  .content-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .first-row-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search-word{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .keyword {
    height: 55px;
    padding-bottom: 8px;
    font-size: 64px;
    font-weight: 700;
  }

  .phonetic {
    font-size: 24px;
    color: #8f19e8;
  }
</style>
