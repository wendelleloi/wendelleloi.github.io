<template lang="pug">
  .tech-component
    span {{ tech }}
</template>

<script>
export default {
  props: {
    tech: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .tech-component{
    display: flex;
    flex-direction: row;
    margin: 10px;
    span {
      font-weight: bold;
      color: $cor-branca;
      background-color: $cor-verde;
      padding: 10px 15px;
    }
}
</style>
