<template>
    <div >
        <div class="row" >
            <h2> Customer By Gender </h2>
            <br />
            <Chart type="pie" :data="chartData" style="height:300px;width:500px" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    // Pie Chart
    data(){
        return{
            number1:[],
            number2:[],
            chartData:
            {
                labels:['men','women'],
                datasets: 
                [
                    {
                        data: [this.number1, this.number2],
                        backgroundColor: ["#AA8178","##F70736 "],
                        hoverBackgroundColor:["grey"]
                    }
                ],
            }  
        };
    },
    
    mounted: function() {
        this.getData();
    },

    methods: {
      getData:async function(){
        axios.get('https://localhost:7072/Chart/GetCustomerGender').then((result)=>{
            this.number1 = result.data;
            this.number2 = result.data;
            this.chartData.datasets[0].data[0] = this.number1.map(x=>x.men);
            this.chartData.datasets[0].data[1] = this.number2.map(x=>x.women);
        });
      }  
    },
}

</script>