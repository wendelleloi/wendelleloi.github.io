<template lang="pug">
  TheContainer.contato-bg
    #contato
      TitleH2 Meu Contato
      h2 Encontre-me na rede e vamos conversar.
      .contact-info
        .contact-option(v-for="(social, index) in socialMidia" :key="index")
          MediaSocial(:title="social.title" :icon="social.icon" :link="social.link" :label="social.label")
      .back-top
        a(href="#" @click.prevent="scrollTop" title="Voltar ao topo")
          i.fa.fa-angle-up
      .copyright
        p Desenvolvido por
        | <span> <a href="https://github.com/wendelleloi" target="_blank" title="Wendell Eloi">Wendell Eloi.</a></span>
</template>

<script>
export default {
  components: {
    TheContainer: () => import('./TheContainer'),
    TitleH2: () => import('./TitleH2'),
    MediaSocial: () => import('./MediaSocial')
  },
  data () {
    return {
      socialMidia: [
        {
          title: 'clique aqui para me mandar um Whats',
          icon: 'fa-whatsapp',
          label: '(84) 99457-8751',
          link: 'https://api.whatsapp.com/send?phone=5584994875751&text=Olá,%20Vamos%20conversar.'
        },
        {
          title: 'clique aqui para acessar meu Instagram',
          icon: 'fa-instagram',
          label: 'wendell_eloi',
          link: 'https://www.instagram.com/wendell_eloi/'
        },
        {
          title: 'clique aqui para acessar meu Lindekin',
          icon: 'fa-linkedin',
          label: 'wendell eloi',
          link: 'https://www.linkedin.com/in/wendell-eloi-1a5324168/'
        },
        {
          title: 'clique aqui para acessar meu Github',
          icon: 'fa-github',
          label: 'wendelleloi',
          link: 'https://github.com/wendelleloi'
        }
      ]
    }
  },
  methods: {
    scrollTop () {
      window.scroll(0, 0)
    }
  }
}
</script>

<style lang="scss">
  .contato-bg{
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 36%, rgba(66,185,131,1) 100%);
  }
  #contato {
    padding: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @include media('<tablet') {
      height: auto;
    }
    .contact-info {
      display: flex;
      flex-wrap: wrap;
      .contact-option {
        margin: 10px;
        @include media('<tablet') {
          width: 100%;
        }
      }
    }
    .copyright {
      margin: 1rem auto 0;
      span {
        font-weight: bold;
        a {
          color: $cor-cinza;
          text-decoration: none;
        }
      }
    }
    .back-top {
      margin: 10rem auto 0;
      a {
        padding: 20px;
        i {
          color: $cor-cinza;
          font-size: 22px;
          font-weight: bold;
        }
      }
    }
  }
</style>
