<template>
    <div class="va-table-responsive">
    <table class="va-table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Department</th>
        <th>Department Number</th>
        <th>Password</th>
        <th>Confirm Password</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
            <va-input class="mb-4" v-model="userInput.givenName" label="givenName" placeholder="givenName" />
        </td>
        <td>
            <va-input class="mb-4" v-model="userInput.department" label="department" placeholder="department" /> 
        </td>
        <td>
            <va-input class="mb-4" v-model="userInput.departmentnumber" label="departmentnumber" placeholder="department" /> 
        </td>
        <td>
            <va-input class="mb-4" v-model="userInput.password" label="password" placeholder="password" /> 
        </td>
        <td>
            <va-input class="mb-4" v-model="userInput.confirmpassword" label="confirmpassword" placeholder="confirmpassword" /> 
        </td>
      </tr>
      <va-button @click="onUpdate"> Update </va-button>
      </tbody>
    </table>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
    setup() {
        const userInput = reactive({
            email : '',
            givenName : '',
            department:'',
            departmentNumber:'',
            password: '',
            confirmpassword:''
        });
        const router = useRouter();
        const store = useStore();

        const onUpdate = async () => {
            userInput.email = store.state.userEmail;
            await axios.post('https://localhost:7072/ApplicationUser/UpdateUserInfo', userInput).then(()=>{
                router.push('/');
            });
        };

        return {
            userInput,
            onUpdate,
        }
    },
}
</script>