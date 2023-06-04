<script lang="ts">
    import NewWindowIcon from './assets/icon-new-window.svg'

    export let url: string

    const onClick = () => {
        window.open(url)
    }
</script>

<div class="window-icon-container" on:click={onClick}>
    <img src={NewWindowIcon} alt="open new window"  />
</div>

<style>
    .window-icon-container {
        width: 12px;
        height: 12px;
        cursor: pointer;
    }
</style>