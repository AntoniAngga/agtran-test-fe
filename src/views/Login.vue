<template>
  <v-card width="400px" class="mt-4 mx-auto">
    <v-card-title>
      <h1>Login</h1>
    </v-card-title>
    <v-card-text>
      <v-from>
        <v-text-field 
        prepend-icon="mdi-account-circle" 
        label="Email"
        ></v-text-field>
        <v-text-field 
        prepend-icon="mdi-lock"
        :type="!showPassword ? 'password' : 'text'"
        label="Password"
        :append-icon="!showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-from>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="info">Login</v-btn>
      <v-spacer></v-spacer>
      <facebookLogin class="button"
      appId="1037034013419898"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData"></facebookLogin>
    </v-card-actions>
  </v-card>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs';
  export default {
    name: "Login",
    components: {
      facebookLogin,
    },
    data() {
      return {
        showPassword: false
      }
    },
    method: {
      getUserData(data) {
        console.log(data);
      }
    }
  }
</script>