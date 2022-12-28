<template>
  <div class="row mb-3">
    <Weapon class="mr-3" />
    <TShirt class="mr-3" />
    <Armor class="mr-3" />
    <Cape class="mr-3" />
    <Boots class="mr-3" />
  </div>
 
  <div class="row mb-3">
    <Globe class="mr-3" />
    <RingOne class="mr-3" />
    <RingTwo class="mr-3" />
    <Guard class="mr-3" />
    <Helmet class="mr-3" />
  </div>
  <div class="row ">
    <EarRing class="mr-3"/>
    <Belt class="mr-3" />
    <neckless class="mr-3" /> 
  </div>
</template>

<script>
import Weapon from '@/views/Customers/UpdateItems/Weapon.vue';
import TShirt from '@/views/Customers/UpdateItems/TShirt.vue';
import Armor from '@/views/Customers/UpdateItems/Armor.vue';
import Cape from '@/views/Customers/UpdateItems/Cape.vue';
import Boots from '@/views/Customers/UpdateItems/Boots.vue';
import Globe from '@/views/Customers/UpdateItems/Globe.vue';
import RingOne from '@/views/Customers/UpdateItems/RingOne.vue';
import RingTwo from '@/views/Customers/UpdateItems/RingTwo.vue';
import Guard from '@/views/Customers/UpdateItems/Guard.vue';
import Helmet from '@/views/Customers/UpdateItems/Helmet.vue';
import Belt from '@/views/Customers/UpdateItems/Belt.vue';
import EarRing from '@/views/Customers/UpdateItems/EarRing.vue';
import Neckless from '@/views/Customers/UpdateItems/Neckless.vue';


export default {

  components: {
    Weapon,
    TShirt,
    Armor,
    Cape,
    Boots,
    Globe,
    RingOne,
    RingTwo,
    Guard,
    Helmet,
    Belt,
    EarRing,
    Neckless
  }
}
</script>

<style scoped >

</style>