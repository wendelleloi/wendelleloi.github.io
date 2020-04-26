<template lang="pug">
  .skill-component
    p {{ skill }}
    .skill-bar
      transition(name="slide-fade")
        .skill-progres(
          :style="{width: anime + '%'}"
          v-show="enter"
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
    },
    enter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    anime () {
      let value = this.progres
      // const newProgess = this.progres
      if (this.enter) {
        value = this.progres
        return value
      } else {
        value = 0
        return value
      }
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
  .slide-fade-enter-active{
    transition: all .8s ease-out;
    opacity: 0;
    width: 0;
  }
  .slide-fade-enter-to {
    opacity: .5;
    width: 50%;
    transition: all .8s ease-out;
  }
  .slide-fade-enter {
    transition: all .8s ease-out;
  }
  .slide-fade-leave-active {
    transition: all .8s ease-out;
  }
}
</style>
