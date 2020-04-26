<template lang="pug">
  .skill-component
    p {{ skill }}
    .skill-bar
      .skill-progres(
        :style="{width: progres + '%'}"
      )
</template>

<script>
export default {
  props: {
    progres: {
      type: Number,
      required: true
    },
    skill: {
      type: String
    }
  }
}
</script>

<style lang="scss">
  .skill-component{
    font-size: 22px;
    text-align: start;
    font-weight: bold;
    margin-bottom: 20px;
    width: 100%;
    .skill-bar {
      width: 100%;
      height: 22px;
      background-color: $cor-cinza;
      box-shadow: 0 8px 6px -6px $cor-sombra;
      .skill-progres {
        display: flex;
        justify-content: center;
        height: 100%;
        background-color: $cor-verde;
      }
  }
}
</style>
