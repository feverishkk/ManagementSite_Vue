<template>
    <va-form tag="form" @submit.prevent="handleSubmit()" >
      <div class="row "> 
        <!-- <div class="formcentre"> -->
          <va-input class="formdesign" label="family_name" v-model="userInput.FamilyName" />
          <va-input class="formdesign" label="given_name" v-model="userInput.GivenName" />
          <va-input class="formdesign" label="email" v-model="userInput.Email" />
          <va-input class="formdesign" label="confirm_email" v-model="userInput.ConfirmEmail" />
          <va-input class="formdesign" label="password" v-model="userInput.Password" />
          <va-input class="formdesign" label="confirm_password" v-model="userInput.ConfirmPassword" />
          <va-input class="formdesign" label="department" v-model="userInput.Department" />
          <va-input class="formdesign" label="department_number" v-model="userInput.DepartmentNumber" />
          <!-- <va-select class="formdesign" label="Roles" v-model="userInput.UserRole" :options="Roles" clearable />  -->
          <va-select class="formdesign" label="Roles" v-model="userInput.UserRole" :options="userRoles" clearable />             
        </div>
      <!-- </div> -->
      <va-button type="submit" class="mt-3">
        Register
      </va-button>
    </va-form>
  </template>
  
<script>
import { reactive } from '@vue/reactivity'
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    /* eslint-disable */
    name: "RegisterPage",

    setup(){
      const userInput = reactive({
        FamilyName:'',
        GivenName:'',
        Email:'',
        ConfirmEmail:'',
        Password:'',
        ConfirmPassword:'',
        Department:'',
        DepartmentNumber:'',
        UserRole:''
      });
      const userRoles = reactive([
        'SuperAdministrator', 'ServerAdministrator', 'Basic'
      ]);
      const selectedRole = '';

      const router = useRouter();

      const handleSubmit = () => {
        axios.post('https://localhost:7072/ApplicationUser/Register', userInput).then(()=>{
          router.push('/login');
        });
    };

      return {
        userInput, 
        handleSubmit,
        userRoles,
        selectedRole
      }

    }
  }
  </script>

<style scoped>
  .formdesign{
    margin-bottom: 20px;
    flex-wrap : wrap; 
  }
  .formcentre{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
</style>