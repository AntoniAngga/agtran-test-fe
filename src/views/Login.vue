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
      <v-btn class="ma-2" tile color="primary">
        <v-icon left>mdi-facebook</v-icon> Sign In With Facebook
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        showPassword: false
      }
    },
  }
</script>