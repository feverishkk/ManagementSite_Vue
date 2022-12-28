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
        <tr v-for="(armor, index) in armors" :key="index">
          <td> 
            <img v-bind:src="armor.image" class="image-size" /> 
            <br /> 
            {{armor.name}} 
          </td>
          <td>{{armor.ac}}</td>
          <td>{{armor.class}}</td>
          <td>{{armor.description}}</td>
        </tr>
        </tbody>
      </table>
     
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
import axios from 'axios';

export default {
    name:"ArmorPage",

    setup(){
        const armors = ref([]);

        onMounted(async () => {
            axios.get('https://localhost:7072/Eqp/GetAllArmors')
                 .then((result)=>{
                    armors.value = result.data
                });
        });

        return{
            armors
        }
    }
}
</script>

<style>

</style>