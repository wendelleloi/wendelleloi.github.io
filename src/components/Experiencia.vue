<template lang="pug">
  TheContainer
    #experiencia
      TitleH2 Minhas experiências
      .list-experience
        .about-work
          h3 EJECT
          .info
            p Assesor de projetos
            span -
            em agosto 2019
        .about-work
          h3 SINFO
          .info
            p Desenvolvedor Frond-End
            span -
            em Atual
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
  #section-experience {
    background-color: $cor-branca;
  }
  #experiencia{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .list-experience {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      @include media('<tablet') {
        flex-direction: column;
        align-items: center;
      }
      .about-work {
        @include media('<tablet') {
          margin-bottom: 20px;
        }
        h3 {
          text-align: start;
          margin: 0 0 10px 0;
          padding-left: 15px;
          font-weight: bolder;
          font-size: 25px;
          &::before {
            line-height: 0;
            font-weight: bold;
            font-size: 50px;
            content: ". ";
            color: $cor-verde;
          }
          @include media('<tablet') {
            text-align: center;
            margin-left: -20px;
          }
        }
        .info {
          padding: 15px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          @include media('<tablet') {
            flex-direction: column;
          }
          p {
            margin: 0;
            font-style: italic;
          }
          span {
            margin: 0 10px;
            line-height: 24px;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
