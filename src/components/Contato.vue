<template lang="pug">
  #contato
    TitleH2 Meu Contato
    .about-me
      .sobre-mim
        h2 Quem sou eu ?
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
  #contato {
    padding: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(66,185,131);
    /* background: linear-gradient(180deg, rgba(66,185,131,1) 0%, rgba(255,255,255,1) 95%); */
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
      padding: 0 10px;
      @include media('<tablet') {
        width: 100%;
      }
    }
    .about-img {
      img {
        border-radius: 100%;
        height: 300px;
        width: 300px;
        @include media('<tablet') {
          height: 100%;
          width: 100%;
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
