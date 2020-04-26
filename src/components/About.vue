<template lang="pug">
  TheContainer.about-bg
    #about
      TitleH2 Quem sou ?
      .about-me
        .about-img
          img(src="./../assets/foto_perfil.png")
        .sobre-mim
          //- h2 Quem sou eu ?
          p Potiguar, estudante de Ciências e Tecnologia na UFRN, técnico em informática para internet pelo Instituto Metrópole Digital,
            |  amante de Design, UX e principalmente desenvolvimento Web.
</template>

<script>
export default {
  components: {
    TheContainer: () => import('./TheContainer'),
    TitleH2: () => import('./TitleH2')
  }
}
</script>

<style lang="scss">
  .about-bg{
    background-color: #fff;
    height: 100vh;
    display: flex;
    @include media('<=tablet') {
      display: contents;
    }
  }
  #about {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    .about-me {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      @include media('<tablet') {
        flex-direction: column;
        align-items: center;
      }
    }
    .about-img, .sobre-mim {
      width: 50%;
      height: 100%;
      /* padding: 0 10px; */
      @include media('<tablet') {
        width: 90%;
        padding: 0 10px;
      }
    }
    .about-img {
      img {
        border-radius: 100%;
        height: 300px;
        width: 300px;
        @include media('<tablet') {
          height: 70%;
          width: 70%;
        }
      }
    }
    .sobre-mim {
      overflow-wrap: break-word;
      font-size: 22px;
    }
    .coisas-que-gosto {
      overflow-wrap: break-word;
    }
  }
</style>
