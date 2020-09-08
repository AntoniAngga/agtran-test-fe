<template>
  <v-app>
    <v-app-bar app dark color="primary">
      <v-toolbar-title name="agtran-test">Agtran Test</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.name}-navigation`"
        text
        rounded
        :to="link.url"
        >{{ link.name }}</v-btn
      >
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer :links="links"></Footer>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'AppPage',
  components: {
    Footer
  },
   data: () => ({
    links: [
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Signup',
        url: '/signup'
      }
    ]
  })
}
</script>

<style lang="scss">
</style>
