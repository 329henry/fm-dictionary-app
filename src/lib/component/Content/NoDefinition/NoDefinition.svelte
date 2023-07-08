<script lang="ts">
  import NoResultIcon from '$component/Content/NoDefinition/assets/no-result.png'
</script>

<div class="no-definition-container">
  <div class="icon-container">
    <img src={NoResultIcon} alt="no-result-icon" />
  </div>
  <div class="title">No Definitions Found</div>
  <div class="description">
    Sorry pal, we couldn't find definitions for the word you were looking for.
    You can try the search again at later time or head to the web instead.
  </div>
</div>

<style lang="scss">
  .icon-container {
    width: 64px;
    height: 64px;
    margin: auto;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    margin: 44px auto 24px;
    font-size: 20px;
    font-weight: 700;
  }

  .description {
    font-size: 18px;
    color: #757575;
  }
</style>
