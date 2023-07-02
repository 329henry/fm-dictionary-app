<script lang="ts">
  import type { TPhonetic } from '$types/word-types'
  import PlayIcon from './assets/icon-play.svg'
  import HoverPlayIcon from './assets/icon-play-hover.svg'

  export let audioPathList: TPhonetic[]

  let audioPath: string
  let isHover = false

  audioPathList.forEach(element => {
    if (element.audio !== '') {
      audioPath = element.audio
    }
  })

  const playAudio = () => {
    const audio = new Audio(audioPath)
    audio.play()
  }
</script>

<div
  class="icon-container"
  on:click={playAudio}
  on:mouseenter={() => (isHover = true)}
  on:mouseleave={() => (isHover = false)}
>
  {#if isHover}
    <img src={HoverPlayIcon} alt="hover-play-word-pronunciation" />
  {:else}
    <img src={PlayIcon} alt="play-word-pronunciation" />
  {/if}
</div>

<style lang="scss">
  .icon-container {
    width: 75px;
    height: 75px;
    cursor: pointer;
  }
</style>
