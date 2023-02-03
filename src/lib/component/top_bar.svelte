<script lang="ts">
  import Toggle from './toggle.svelte'

  import LogoSvg from '../../assets/images/logo.svg'
  import ThemeIconSvg from '../../assets/images/icon-moon.svg'

  let isDarkTheme = true
</script>

<div class="top-container">
  <img class="main-logo" src={LogoSvg} alt="logo" />
  <div class="right-container">
    <div class="topography">
      <div>Sans Serif</div>
    </div>
    <div class="vertical-line" />
    <div class="theme-switch">
      <Toggle isChecked={isDarkTheme} />
      <img class="theme-icon" src={ThemeIconSvg} alt="theme-icon" />
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
