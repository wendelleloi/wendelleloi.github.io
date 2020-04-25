<template lang="pug">
  .Thetitle
    h2
      span: slot
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .Thetitle {
    width: 100%;
    text-align: start;
    @include media('<=tablet') {
      text-align: center;
    }
   > h2 {
     @include media('<=tablet') {
        padding: 0;
      }
      padding: 0 150px;
      font-size: 32px;
      line-height: 40px;

      span {
        /* padding-bottom: 10px; */
        border-bottom: 5px solid $cor-verde;
        @include media('<=tablet') {
          padding: 0;
        }
      }
    }
  }
</style>
