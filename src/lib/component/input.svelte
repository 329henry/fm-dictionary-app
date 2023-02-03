<script lang="ts">
  const onInputChange = (event: any) => {
    console.log(event.target.value)
  }
</script>

<div class="input-container">
  <input class="text-field" type="text" on:change={onInputChange} />
</div>

<style lang="scss">
  .input-container {
    position: relative;
    width: 100%;
    height: 36.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 52px auto 45px;
  }

  input {
    width: 100%;
    height: 100%;
    border: 1px solid #1f1f1f;
    border-radius: 12px;
    padding: 0 10px;
    font-size: 14px;
    color: #fff;
    outline: none;

    &:focus {
      border: 1px solid #a445ed;
    }
  }
</style>
