<template lang="pug">
  TheContainer
    #skills
      TitleH2 Minhas principais habilidades
      template(v-for="skill in skills" :index="skill.label")
        Skill(:progres="skill.level" :skill="skill.label")
</template>

<script>
export default {
  components: {
    TheContainer: () => import('./TheContainer'),
    TitleH2: () => import('./TitleH2'),
    Skill: () => import('./Skill')
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
  }
</style>
