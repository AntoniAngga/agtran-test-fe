<template>
  <v-footer color="primary lighten-1" padless>
    <v-layout justify-center wrap>
      <v-btn
        v-for="link in links"
        :key="`${link.name}-footer`"
        color="white"
        text
        rounded
        :to=link.url
        class="my-2"
      >
        {{ link.name }}
      </v-btn>
      <v-flex primary lighten-2 py-4 text-center white--text xs12>
        {{ new Date().getFullYear() }} — <strong>Agtran Test</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  props: ['links']
}
</script>

<style>

</style>