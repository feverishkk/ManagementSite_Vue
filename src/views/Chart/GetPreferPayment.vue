<template>

    <div>
        <h5>Customer's Prefer Payment Company</h5>
        <Chart type="bar" :data="basicData" :options="basicOptions" style="width:1000px; height:500px" />
    </div>

</template>

<script>
import axios from 'axios'

export default{
    data(){
        return{
            basicData: {
                labels: [], // 회사
                datasets: [
                    {
                        label: 'Payment Company',
                        backgroundColor: '#42A5F5',
                        data: [] // 인원
                    }
                ]
            },
            basicOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            },
        }  
    },
    mounted:function() {
        this.getData();
    },
    methods: {
        getData:function(){
            axios.get('https://localhost:7072/Chart/GetPreferPayment').then((result)=>{
                const data = result.data;
                for(let i = 0; i <= data.length; i++) {                
                    this.basicData.labels = data.map(x=>x.preferPayment);
                    this.basicData.datasets[i].data = data.map(x=>x.properties);
                }
            })
        }
    },
}

</script>