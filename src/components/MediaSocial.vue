<template lang="pug">
  .midia-option
    a(:href="link" target="_blank" :title="title")
      i(:class="icon").fa
      p {{ label }}
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.midia-option {
  box-shadow: 0 8px 6px -6px black;
  background: #fff;
  display: flex;
  /* align-content: center; */
  align-items: center;
  justify-content: center;
  a {
    padding: 10px 15px;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    color: $cor-cinza;
    p {
      margin-left: 10px;
    }
    i {
      color: $cor-verde;
      font-size: 22px;
    }
  }
  p {
    margin: 0;
  }
}
</style>
