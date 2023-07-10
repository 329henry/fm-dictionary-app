<script lang="ts">
  import ArrowDown from '$component/SelectInput/assets/icon-arrow-down.svg'
  import { theme } from '$store/theme-toggle'
  import { font } from '$store/font-select'

  const optionList = [
    { value: 'Inter', label: 'San Serif' },
    { value: 'Lora', label: 'Serif' },
    { value: 'Inconsolata', label: 'Mono' }
  ]

  export let handleSelect: (value: string) => void

  let container: HTMLDivElement
  let isOpenDropdown = false

  $: fontValue = optionList.find(option => option.value === $font)?.label
  $: selected = fontValue ?? optionList[0].label
  $: isDarkTheme = $theme === 'dark'

  function toggleDropdown() {
    isOpenDropdown = !isOpenDropdown
  }

  function onClickOption(option: { value: string; label: string }) {
    selected = option.label
    handleSelect(option.value)
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
    <div class="dropdown" class:dark={isDarkTheme}>
      {#each optionList as option}
        <div class="option" on:click={() => onClickOption(option)}>
          {option.label}
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
    background-color: var(--white, #fff);
    box-shadow: var(--light-box-shadow, 0px 5px 30px rgba(0, 0, 0, 0.1));
    border-radius: 16px;
    z-index: 1;

    &.dark {
      background-color: #050505;
      box-shadow: var(--dark-box-shadow, 0px 5px 30px #a445ed);
    }
  }

  .option {
    width: 90%;
    height: 24px;
    font-size: 18px;
    font-weight: 700;
    text-align: left;

    &:nth-child(1) {
      font-family: 'Inter', sans-serif;
    }

    &:nth-child(2) {
      font-family: 'Lora', serif;
      padding: 16px 0;
    }

    &:last-child {
      font-family: 'Inconsolata', monospace;
    }
  }

  @media screen and (max-width: 767px) {
    .select-container {
      width: 98px;
    }

    .selected {
      font-size: 14px;
    }
  }
</style>
