<template lang="pug">
  TheContainer
    #skills
      TitleH2 Minhas principais habilidades
      template(v-for="skill in skills")
        Skill(:progres="skill.level" :skill="skill.label")
      .techs-tool
        .techs-list
          TitleH2 Outras tecnologias que gosto
          .techs
            Techs(v-for="tech in techs" :key="tech.label" :tech="tech.label")
        .tools-list
          TitleH2 Ferramentas e metodologias que gosto
          .tools
            Techs(v-for="tool in tools" :key="tool.label" :tech="tool.label")
</template>

<script>
export default {
  components: {
    TheContainer: () => import('./TheContainer'),
    TitleH2: () => import('./TitleH2'),
    Skill: () => import('./Skill'),
    Techs: () => import('./Techs')
  },
  data () {
    return {
      skills: [
        {
          level: 70,
          label: 'Vue.js'
        },
        {
          level: 60,
          label: 'Nuxt.js'
        },
        {
          level: 50,
          label: 'JavaScript'
        }
      ],
      techs: [
        {
          label: 'Sass'
        },
        {
          label: 'Pug'
        },
        {
          label: 'CSS'
        },
        {
          label: 'HTML'
        },
        {
          label: 'Node.js'
        },
        {
          label: 'React.js'
        }
      ],
      tools: [
        {
          label: 'GIT'
        },
        {
          label: 'Scrum'
        },
        {
          label: 'Trello'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  #skills {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    .techs-tool {
      display: flex;
      width: 100%;
      /* background: $cor-branca; */
      @include media('<tablet') {
        flex-direction: column;
      }
      .techs-list, .tools-list {
        width: 50%;
        margin: 0 10px;
        @include media('>=tablet') {
          .Thetitle h2 {
            padding: 0;
          }
        }
        @include media('<tablet') {
          width: 100%;
        }
      }
    }
    .techs, .tools {
      display: flex;
      flex-wrap: wrap;
      @include media('<tablet') {
        justify-content: center;
      }
    }
  }
</style>
