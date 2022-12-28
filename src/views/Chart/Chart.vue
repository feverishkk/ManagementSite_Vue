<template>
    <CustomerGender />
    <br /> <br /> <br />

    <GetGuildProperty />
    <br /> <br /> <br />

    <GetMemberSince />
    <br /> <br /> <br />

    <GetPreferpayment />
    <br /> <br /> <br />


</template>

<script>
import CustomerGender from '@/views/Chart/CustomerGender.vue';
import GetGuildProperty from '@/views/Chart/GetGuildProperty.vue';
import GetPreferpayment from '@/views/Chart/GetPreferPayment.vue';
import GetMemberSince from '@/views/Chart/GetMemberSince.vue';

export default {

    components:{
        CustomerGender,
        GetGuildProperty,
        GetPreferpayment,
        GetMemberSince,
    }
}
</script>