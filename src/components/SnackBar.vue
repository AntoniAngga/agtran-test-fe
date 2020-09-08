<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="this.snackbar.display"
    >
      {{ this.snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    name: "SnackBar",
    // props: {
    //   text: String,
    //   snackbar:{
    //     type: Boolean,
    //     default: false
    //   }
    // },
    computed: {
      snackbar () {
        return this.$store.snackBar
      }
    }
  }
</script>