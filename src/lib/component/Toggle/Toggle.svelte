<script lang="ts">
  export let isChecked = false
  export let handleToggle: (checked: boolean) => void

  const onCheckboxChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    isChecked = target.checked
    handleToggle(target.checked)
  }
</script>

<label class="switch">
  <input
    type="checkbox"
    bind:checked={isChecked}
    on:change={onCheckboxChange}
  />
  <span class="slider" class:active={isChecked} />
</label>

<style lang="scss">
  $width: 40px;
  $height: 20px;
  $thumb-size: $height - 6px;

  .switch {
    position: relative;
    display: inline-block;
    width: $width;
    height: $height;
    margin-right: 20px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.4s;
    border-radius: $height;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: var(--gray-400, #757575);
      transition: 0.4s;
      border-radius: $thumb-size;
    }

    &:after {
      content: '';
      position: absolute;
      width: $thumb-size;
      height: $thumb-size;
      top: 3px;
      left: 3px;
      background: var(--white, #fff);
      box-shadow: 1px 1px 1px var(--black, #050505);
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + .slider {
    background: var(--purple, #a445ed);

    &:before {
      opacity: 0;
    }

    &:after {
      transform: translateX($width - $height);
    }
  }
</style>
