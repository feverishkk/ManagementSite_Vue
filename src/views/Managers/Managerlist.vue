<template>
    <div class="va-table-responsive">
      <table class="va-table">
        <thead>
        <tr>
          <th>id</th>
          <th>Given Name</th>
          <th>Family Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Department Number</th>
          <th>Member Since</th>
          <th>Role</th>
          <th>Options</th>
          <th>Delete Manager</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, index) in userList" :key="index">
          <td>{{index+1}}</td>
          <td>{{user.givenName}}</td>
          <td>{{user.familyName}}</td>
          <td>{{user.email}}</td>
          <td>{{user.department}}</td>
          <td>{{user.departmentNumber}}</td>
          <td>{{user.memberSince}}</td>
          <td>{{user.role}}</td>
          <td>
            <router-link :to="'/managerlist/updaterole/'+user.id"> Update Role | </router-link>
            <router-link :to="'/managerlist/updateinfo/'+user.id"> Update Info | </router-link>
          </td>
          <td>

            <Button @click="openConfirmation"> Delete User </Button>
            <Dialog header="Confirmation Message" v-model:visible="displayConfirmation"  :modal="true">
                <div class="confirmation-content">
                    <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem"> </i>
                    <span>Are you sure you want to delete this user?</span>
                </div>
                <template #footer>
                    <Button icon="pi pi-check" @click="DeleteConfirmation(index)" class="p-button-text" autofocus > Yes </Button>
                    <Button icon="pi pi-times" @click="closeConfirmation" class="p-button-text"> No </Button>
                </template>
            </Dialog>
          </td>

        </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
import { useRoute } from 'vue-router';

export default ({

  setup(){
    const userList = ref([]);
    const deleteUser = ref(0);
    const displayConfirmation = ref(false);
    const route = useRoute();
    const userId = route.params.id;

    onMounted(async ()=>{
        await axios.post('https://localhost:7072/Managers/GetAllMangers').then((result)=>{
            userList.value = result.data
            console.log(userList.value);
        });
    });

    const DeleteConfirmation = () => {
        axios.post('https://localhost:7072/Managers/DeleteManger?id='+userId)
        .then(
            closeConfirmation,
        );
    };

    const openConfirmation = () => {
        displayConfirmation.value = true;
    };

    const closeConfirmation = () => {
        displayConfirmation.value = false;
    };
    return{
        userList,
        displayConfirmation,
        deleteUser,
        openConfirmation,
        closeConfirmation,
        DeleteConfirmation,
        userId,
    }
  },

})
  </script>
  <style scoped >
  .p-button {
      margin: 0.3rem .5rem;
      min-width: 10rem;
  }
  
  p {
      margin: 0;
  }
  
  .confirmation-content {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  .p-dialog .p-button {
      min-width: 6rem;
  }
  </style>