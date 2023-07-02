<script lang="ts">
  import Toggle from '$component/Toggle/Toggle.svelte'

  import LogoSvg from '$component/TopBar/assets/logo.svg'
  import SelectInput from '$component/SelectInput/SelectInput.svelte'
  import { theme } from '$store/theme-toggle'
  import MoonIcon from './MoonIcon.svelte'

  export let handleToggle: (checked: boolean) => void
  $: isDarkTheme = $theme === 'dark'
</script>

<div class="top-container">
  <img class="main-logo" src={LogoSvg} alt="logo" />
  <div class="right-container">
    <div class="topography">
      <SelectInput />
    </div>
    <div class="vertical-line" />
    <div class="theme-switch">
      <Toggle isChecked={isDarkTheme} {handleToggle} />
      <div class="theme-icon">
        <MoonIcon darkThemeColor={isDarkTheme ? '#a445ed' : '#838383'} />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .top-container {
    width: 100%;
    height: 36.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main-logo {
    width: 32px;
    height: 36.5px;
  }

  .right-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .vertical-line {
    width: 1px;
    height: 100%;
    background-color: #e9e9e9;
    margin: 0 26px;
  }

  .theme-switch {
    display: flex;
    align-items: center;
  }

  .theme-icon {
    width: 20px;
    height: 20px;
  }
</style>
