<template>
    <div style="height:300px">
    <h4>아이템</h4>
    <hr />
    <div class="float-right">
        <img src="https://assets.playnccdn.com/gamedata/powerbook/lineage/91/36/c5be992f55eab14e4a288582.jpg" />
    </div>
    <p class="text-left ">
            리니지에는 헤아리기 어려울 만큼 다양한 아이템이 존재한다.<br />
            이 중 무기와 방어구, 액세서리는 캐릭터의 능력치를 결정하는 중요한 요소로, 대부분의 경우 착용 레벨 제한이 없기 때문에 일단 좋은 장비를 입수하면 저레벨부터 쉽게 성장할 수 있다.<br />
            이 외에도 물약과 주문서 같은 소모성 아이템과 퀘스트 진행에 필요한 퀘스트 아이템, 아이템 제작에 사용되는 다양한 재료 아이템이 있다. <br />
    </p>
</div>
<br/> <br/>
<div class="mt-5 container">
    <h5> Item Classification </h5>
    <hr />
    <p>
        리니지에는 수많은 에피소드가 진행됨에 따라 점차 강력한 몬스터와 새로운 시스템이 등장했고, 이에 맞춰 캐릭터들의 장비나 기타 아이템에도 질적, 양적으로 많은 변화가 있었다. 이런 아이템들은 용도에 따라 다음과 같이 나눌 수 있다.
    </p>
</div>
<br/> <br/>
<table class="container table table-bordered">
    <thead>
        <tr >
            <th class="myTrHeader text-center">
                <img src="https://assets.playnccdn.com/gamedata/powerbook/lineage/49/52/d66ff7e5ed29f1d870b6caa5.jpg" />
                <br />
                <router-link to="/item/OneHandSword"> Weapons </router-link>
            </th>
            <th class="text-left">
                <p>
                    무기 슬롯에 착용하는 아이템  <br />
                    무기를 착용한 상태에서 대상을 공격하면 대미지를 준다.<br />
                    무기 마법 주문서 등으로 인챈트하여 대미지와 명중을 올릴 수 있다.<br />
                </p>
            </th>
        </tr>
        <br/> <br/>
        <tr>
            <th class="text-center">
                <img src="https://assets.playnccdn.com/gamedata/powerbook/lineage/72/32/f2b4001dd34e297ef2a02088.jpg" class="mt-2" />
                <br />
                <router-link to="/item/Armor"> Equipment </router-link>
            </th>
            <th class="text-left">
                <p>
                    투구, 망토, 갑옷, 장갑 등 방어구 슬롯에 착용하는 아이템 <br />
                    착용하면 AC(물리 방어력)가 올라가며 <br />
                    인챈트를 하면 AC가 좋아져 대미지를 덜 입게 된다. <br />
                </p>
            </th>
        </tr>
        <br /><br />
        <tr>
            <th class="text-center">
                <img src="https://assets.playnccdn.com/gamedata/powerbook/lineage/12/43/ff84798eb987a3a569e96bfd.jpg" />
                <br />
                <router-link to="/item/Belt"> Accessories </router-link>
            </th>
            <th class="text-left">
                <p>
                    목걸이, 반지, 귀걸이 슬롯에 착용하는 아이템 <br />
                    HP 회복, MP 회복 등 다양한 옵션을 가지고 있으며 <br />
                    장신구 마법 주문서로 인챈트할 수 있다. <br />
                </p>
            </th>
        </tr>
    </thead>
</table>


</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style>
    .myTrHeader {
        width: 600px;
    }
    .image-size{
        width:100px; 
        height:100px;
    }
</style>