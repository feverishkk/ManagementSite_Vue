<template>
    <div class="row justify-start">
      <div class="flex xs1">
        <h1 class="item">User Equipment</h1>
        <va-divider />
      </div>
    </div>
    <div class="va-table-responsive">
    <table class="va-table">
      <thead>
      <tr>
        <th>Weapon Name</th>
        <th>TShirt Name</th>
        <th>Armor Name</th>
        <th>Cape Name</th>
        <th>Boots Name</th>
        <th>Globe Name</th>
        <th>Ring1 Name</th>
        <th>Ring2 Name</th>
        <th>Guard Name</th>
        <th>Helmet Name</th>
        <th>Belt Name</th>
        <th>EarRing Name</th>
        <th>Neckless Name</th>
      </tr>
      </thead>
      <tbody >
      <tr v-for="(eqp, index) in customerEqp" :key="index"  >
        <td> 
          <img v-bind:src="eqp.weaponImage" class="eqp-image"  /> 
          <br />
          {{eqp.weaponName}}
        </td>
        <td>
          <img v-bind:src="eqp.tShirtImage" class="eqp-image" /> 
          <br />
          {{eqp.tShirtName}}
        </td>
        <td>
          <img v-bind:src="eqp.armorImage" class="eqp-image" />
          <br />
          {{eqp.armorName}}
        </td>
        <td>
          <img v-bind:src="eqp.capeImage" class="eqp-image" />
          <br />
          {{eqp.capeName}}
        </td>
        <td>
          <img v-bind:src="eqp.bootsImage" class="eqp-image" />
          <br />
          {{eqp?.bootsName}}
        </td>
        <td>
          <img v-bind:src="eqp.globeImage" class="eqp-image"/>
          <br />
          {{eqp?.globeName}}
        </td>
        <td>
          <img v-bind:src="eqp.ring1Image" class="eqp-image"/>
          <br />
          {{eqp?.ring1Name}}
        </td>
        <td>
          <img v-bind:src="eqp.ring2Image" class="eqp-image" />
          <br />
          {{eqp.ring2Name}}
        </td>
        <td>
          <img v-bind:src="eqp.guardImage" class="eqp-image"/>
          <br />
          {{eqp.guardName}}
        </td>
        <td>
          <img v-bind:src="eqp.helmetImage" class="eqp-image"/>
          <br />
          {{eqp.helmetName}}
        </td>
        <td>
          <img v-bind:src="eqp.beltImage" class="eqp-image"/>
          <br />
          {{eqp.beltName}}
        </td>
        <td>
          <img v-bind:src="eqp.earRingImage" class="eqp-image"/>
          <br />
          {{eqp.earRingName}}
        </td>
        <td>
          <img v-bind:src="eqp.necklessImage" class="eqp-image"/>
          <br />
          {{eqp.necklessName}}
        </td>
      </tr>
      </tbody>
    </table>
</div>
</template>


<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
  name:"CustomerEquipmentPage",

  setup() {
    const customerEqp = ref([]);
    const route = useRoute();
    const targetId = route.params.id;
      onMounted(()=>{
        axios.get('https://localhost:7072/Customer/GetCustomerEquipment', 
        {
           params:
          {
            id:targetId
          }
        }).then((result)=>{
          customerEqp.value = result.data;
        })
      });
      return {
        customerEqp,
      };
  },
}
</script>

<style>
  .eqp-image {
    height: 50px;
    width: 50px;
  }
</style>