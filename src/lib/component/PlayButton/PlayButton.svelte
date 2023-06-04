<script lang="ts">
  import type { TPhonetic } from 'src/lib/types/types'
    import PlayIcon from './assets/icon-play.svg'
    
    export let audioPathList:TPhonetic[] 

    let audioPath: string
    // const audioContext = new AudioContext()
    
    audioPathList.forEach((element) => {
        if (element.audio !== '') {
            audioPath = element.audio
        }
    })
    
    const playAudio = () => {
        const audio = new Audio(audioPath)
        audio.play()
    }
</script>

<div class="icon-container" on:click={playAudio}>
    <img src={PlayIcon} alt="play-word-pronunciation" />
</div>

<style lang="scss">
    .icon-container {
        width: 75px;
        height: 75px;
        cursor: pointer;   
    }
</style>