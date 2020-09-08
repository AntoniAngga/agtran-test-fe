<template>
  <v-card width="400px" class="mt-4 mx-auto">
    <v-card-title>
      <h1>Register Account</h1>
    </v-card-title>
    <v-card-text>
      <v-container>
      <v-form>
        <v-row>
          <v-col md=6>
            <v-text-field 
            v-model="user.firstName"
            label="First Name"
            ></v-text-field>
          </v-col>
          <v-col md=6>
            <v-text-field  
            v-model="user.lastName"
            label="Last Name"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row md=6>
          <v-col>
            <v-text-field
            v-model="user.email"
            label="Email"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field 
              :type="!showPassword ? 'password' : 'text'"
              label="Password"
              v-model="user.password"
              :append-icon="!showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field 
            prepend-icon="mdi-card-account-details" 
            v-model="user.icNumber"
            label="IC Number"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
      </v-container>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="info" :loading="this.loadingBtn" @click="submitForm">Create Account</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="error">Reset</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
  import UserServices from '@/services/UserServices.js'
  export default {
    name: "Signup",
    data() {
      return {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          icNumber: ''
        },
        showPassword: false,
        loadingBtn: false,
      }
    },
    methods: {
      submitForm() {
        this.loadingBtn = true
        UserServices.createUser(this.user)
        .then( data => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>