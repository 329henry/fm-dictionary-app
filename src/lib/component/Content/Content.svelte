<script lang="ts">
  import type { TWord } from '$types/word-types'
  import PlayButton from '$component/PlayButton/PlayButton.svelte'
  import WordInfo from '$component/Content/WordInfo/WordInfo.svelte'
  import NewWindowButton from '$component/NewWindowButton/NewWindowButton.svelte'

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
      <PlayButton audioPathList={wordData.phonetics} />
    </div>
  </div>
  <WordInfo {wordData} />
  <hr />
  <div class="source-container">
    <div class="source-title">Source</div>
    <div class="source-content">
      <div class="source">{wordData.sourceUrls}</div>
      <NewWindowButton url={wordData.sourceUrls[0]} />
    </div>
  </div>
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

  .search-word {
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

  .source-container {
    display: flex;
    color: #fff;
    font-size: 14px;

    .source-title {
      padding-right: 20px;
      color: #757575;
    }

    .source-content {
      display: flex;

      & > .source {
        padding-right: 9px;
      }
    }
  }
</style>
