<script lang="ts">
  import type { TWord } from '$types/word-types'

  export let wordData: TWord
  const meaningList = wordData.meanings
</script>

{#each meaningList as meaning}
  <div class="word-info-container">
    <div class="part-of-speech">
      <div class="pos-detail">{meaning.partOfSpeech}</div>
      <hr />
    </div>
    <div class="meaning">
      <div class="meaning-title">Meaning</div>
      <ul>
        {#each meaning.definitions as definition}
          <li>
            {definition.definition}
          </li>
        {/each}
      </ul>
    </div>
    {#if meaning.synonyms.length > 0}
      <div class="thesaurus">
        <div class="thesaurus-title">Synonyms</div>
        <div class="thesaurus-word">
          {meaning.synonyms}
        </div>
      </div>
    {/if}
    {#if meaning.antonyms.length > 0}
      <div class="thesaurus">
        <div class="thesaurus-title">Antonyms</div>
        <div class="thesaurus-word">
          {meaning.antonyms}
        </div>
      </div>
    {/if}
  </div>
{/each}

<style lang="scss">
  .part-of-speech {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  .pos-detail {
    width: fit-content;
    min-width: 60px;
    padding-right: 20px;
    font-size: 24px;
    font-weight: 700;
    font-style: italic;
    text-align: left;
  }

  hr {
    width: 90%;
    border: none;
    border-top: 1px solid #3a3a3a;
  }

  .meaning {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0;

    .meaning-title {
      padding-bottom: 25px;
      color: #757575;
      font-size: 20px;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      li::marker {
        color: #8f19e8;
      }

      li {
        margin-bottom: 10px;
        padding-left: 10px;
        text-align: left;
      }
    }
  }

  .thesaurus {
    display: flex;
    padding: 20px 0px;
    font-size: 20px;

    .thesaurus-title {
      padding-right: 22px;
      color: #757575;
    }

    .thesaurus-word {
      font-weight: 700;
      color: #a445ed;
    }
  }
</style>
