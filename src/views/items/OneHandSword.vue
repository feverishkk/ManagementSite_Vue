<template>
    <div class="va-table-responsive">
      <table class="va-table va-table--striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Damage <br /> Small Monster</th>
          <th>Damage  <br />  Big Monster</th>
          <th>class</th>
          <th>description</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(oneHandSword, index) in oneHandSword" :key="index">
          <td>
            <img v-bind:src="oneHandSword.image" class="image-size" /> 
            <br />
            {{oneHandSword.name}}
          </td>
          <td>{{oneHandSword.damage1}}</td>
          <td>{{oneHandSword.damage2}}</td>
          <td>{{oneHandSword.class}}</td>
          <td>{{oneHandSword.description}}</td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import axios from 'axios'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';

export default {
    /* eslint-disable */
    name:"OneHandSwordPage",
    setup() {
        const oneHandSword = ref([]);
        
        onMounted(async () =>{
            await axios.get('https://localhost:7072/Weapon/GetOneHandSword')
                       .then((result) => {
                        oneHandSword.value = result.data
            });
        })
        
        return {
            oneHandSword
        }
    }
}
</script>