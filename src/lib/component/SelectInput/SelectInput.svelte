<script lang="ts">
  import ArrowDown from './assets/icon-arrow-down.svg'

  const optionList = [
    { value: 'San Serif', label: 'San Serif' },
    { value: 'Serif', label: 'Serif' },
    { value: 'Mono', label: 'Mono' }
  ]

  let container: HTMLDivElement
  let selected = optionList[0].value
  let isOpenDropdown = false

  function toggleDropdown() {
    isOpenDropdown = !isOpenDropdown
  }

  function onClickOption(value: string) {
    selected = value
    isOpenDropdown = false
  }

  function onWindowClick(e: any) {
    if (!container.contains(e.target)) {
      isOpenDropdown = false
    }
  }
</script>

<svelte:window on:click={onWindowClick} />

<div class="select-container" bind:this={container}>
  <div class="selected" on:click={toggleDropdown}>
    <div
      class:mono={selected === 'Mono'}
      class:serif={selected === 'Serif'}
      class:san_serif={selected === 'San Serif'}
    >
      {selected}
    </div>
    <img class="arrow-down" src={ArrowDown} alt="click-dropdown" />
  </div>
  {#if isOpenDropdown}
    <div class="dropdown">
      {#each optionList as option}
        <div class="option" on:click={() => onClickOption(option.value)}>
          {option.value}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .select-container {
    width: 118px;
    height: 24px;
    position: relative;
  }

  .selected {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
  }

  .selected > div {
    &.mono {
      font-family: 'Inconsolata', monospace;
    }

    &.serif {
      font-family: 'Lora', serif;
    }

    &.san_serif {
      font-family: 'Inter', sans-serif;
    }
  }

  .arrow-down {
    width: 12px;
    height: 6px;
  }

  .dropdown {
    width: 183px;
    height: 152px;
    position: absolute;
    box-sizing: border-box;
    top: 25px;
    right: 0px;
    padding: 24px;
    background-color: #1f1f1f;
    box-shadow: 0px 5px 30px #a445ed;
    border-radius: 16px;
    z-index: 1;
  }

  .option {
    width: 90%;
    height: 24px;
    font-size: 18px;
    font-weight: 700;
    text-align: left;

    &:nth-child(2) {
      font-family: 'Lora', serif;
      padding: 16px 0;
    }

    &:last-child {
      font-family: 'Inconsolata', monospace;
    }
  }
</style>
