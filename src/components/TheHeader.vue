<template lang="pug">
  #the-header
    .title
      h1 Wendell Eloi.
      h2: span Desenvolvedor Web.
</template>

<script>
export default {
}
</script>

<style lang="scss">
  #the-header {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    > .title {
      h1 {
        font-size: 81px;
        @include media('<=tablet') {
          font-size: 61px;
        }
      }
      h2 {
        text-align: end;
        span {
          /* padding-bottom: 10px; */
          border-bottom: 5px solid $cor-verde;
        }
        @include media('<=tablet') {
          text-align: center;
        }
      }
    }
  }
</style>
