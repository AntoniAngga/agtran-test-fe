<template>
<div>

  <v-card width="400px" class="mx-auto">
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
        <v-row>
          <v-col>
             <v-text-field
             type="date"
            v-model="user.birthDate"
            label="Birthdate"
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
      <v-btn color="error" @click="reset">Reset</v-btn>
    </v-card-actions>
  </v-card>
  <SnackBar :snackbar="this.snackbar" :text="this.text" ></SnackBar>
</div>
</template>


<script>
  import UserServices from '@/services/UserServices.js'
  import SnackBar from '@/components/SnackBar.vue'

  export default {
    name: "Signup",
    components: {
      SnackBar
    },
    data() {
      return {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          birthDate: '',
          password: '',
          icNumber: ''
        },
        text: "",
        snackbar: false,
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
          this.loadingBtn = false
          this.snackbar = true
          this.text = "Registration Complete, Please Sign In"
        }).catch(err => {
          this.snackbar = true
          this.text = err
        })
      },
      reset() {
        this.user.firstName = '';
        this.user.lastName = '';
        this.user.email = '';
        this.user.birthDate = '';
        this.user.password = '';
        this.user.icNumber = '';
      }
    }
  }
</script>