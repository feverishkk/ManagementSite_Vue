<template>
   <va-form tag="form" @submit.prevent="handleSubmit()">

    <va-input label="Username" v-model="userInput.Email" class="formdesign"/>
    <va-input type="password" label="Password" v-model="userInput.Password" />

    <va-button type="submit" class="mt-3">
      Login
    </va-button>
  </va-form>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

export default {
  setup() {
    const userInfo = ref([]);
    const userInput = reactive({
      Email: '',
      Password : ''
    });
    const router = useRouter();
    
    const handleSubmit = async () => {

      axios.post('https://localhost:7072/ApplicationUser/Login', userInput)
           .then((result)=>{
                  userInfo.value = result.data;
                  const data = JSON.parse(JSON.stringify(userInfo.value));
                  const token = data.value.token;
                  localStorage.setItem("token", token);
                  router.push('/');
                  Swal.fire({
                    title: 'Good Day',
                    text: "Welcome to KIEHYOON's management Site!",
                    icon: 'success'
                  });
              })
           .catch(()=>{
              Swal.fire({
                title:'Wrong...',
                text: 'Something went Wrong, Please check your ID & PW',
                icon:'error'
              });
            });
    };

    return {
      userInput,
      handleSubmit,
    }
  },
}
</script>

<style scoped>
  .formdesign{
    margin-right: 20px;
  }
</style>