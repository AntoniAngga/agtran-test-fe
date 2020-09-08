<template>
  <v-card width="400px" class="mt-4 mx-auto">
    <v-card-title>
      <h1>Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field 
        prepend-icon="mdi-account-circle" 
        v-model="login.email"
        label="Email"
        ></v-text-field>
        <v-text-field 
        prepend-icon="mdi-lock"
        v-model="login.password"
        :type="!showPassword ? 'password' : 'text'"
        label="Password"
        :append-icon="!showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="info" @click="loginAuth">Login</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      login: {
        password: "",
        email: ""
      },
      snackbar: {
        display: false,
        text: ""
      },
    }
  },
  methods: {
    getUserData(data) {
      console.log(data);
    },
    loginAuth() {
      this.$store.dispatch('loginUser', this.login)
      .then(data => {
        this.snackbar.display = true;
        this.snackbar.text = data.messages
        this.$store.dispatch('toggleSnackBar', this.snackbar)
        console.log(data);
      }).catch(err => {
        this.snackbar.display = true;
        this.snackbar.text = err
        this.$store.dispatch('toggleSnackBar', this.snackbar)
        console.log(err);
      })
    }
  }
}
</script>