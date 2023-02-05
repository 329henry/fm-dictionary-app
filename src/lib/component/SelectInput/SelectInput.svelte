<script>
  const optionList = [
    { value: 1, label: 'San Serif' },
    { value: 2, label: 'Serif' },
    { value: 3, label: 'Mono' }
  ]

  let selected = optionList[0].value
</script>

<select bind:value={selected}>
  {#each optionList as option}
    <option value={option.value}>{option.label}</option>
  {/each}
</select>

<style>
  select {
    width: 118px;
    background: url(../../../assets/images/icon-arrow-down.svg) no-repeat right
      transparent;
    font-size: 18px;
    font-weight: 700;
    border: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  option {
    width: 183px;
    height: 152px;
  }
</style>
