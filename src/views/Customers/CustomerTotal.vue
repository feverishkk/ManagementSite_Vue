<template>
    <CustomerInGameInfo />
    <br /> <br />
    <CustomerEquipment />
    <br /> <br />
    <CustomerUpdateItems />
</template>


<script>
import CustomerInGameInfo from '@/views/Customers/CustomerInGameInfo.vue';
import CustomerEquipment from '@/views/Customers/CustomerEquipment.vue';
import CustomerUpdateItems from '@/views/Customers/CustomerUpdateItems.vue';

export default {
    name:"CustomerTotalPage",
    components:{
        CustomerInGameInfo,
        CustomerEquipment,
        CustomerUpdateItems
    }
}
</script>