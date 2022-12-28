<template>
    <div class="va-table-responsive">
      <table class="va-table va-table--striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>ac</th>
          <th>class</th>
          <th>description</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(belt, index) in belts" :key="index">
          <td>
            <img v-bind:src="belt.image" class="image-size" />
            <br />
            {{belt.name}}
          </td>
          <td>{{belt.ac}}</td>
          <td>{{belt.class}}</td>
          <td>{{belt.description}}</td>
        </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script lang="ts">
import { ref } from '@vue/reactivity'
import axios from 'axios';
import { onMounted } from '@vue/runtime-core';

export default{
    name:"BeltPage",
    setup() {
        const belts = ref([]);

        onMounted(async () =>{
            await axios.get('https://localhost:7072/Acc/GetAllBelt')
                       .then((result) => {
                        belts.value = result.data
            });
        })

        return {
            belts
        };
    }
}
</script>