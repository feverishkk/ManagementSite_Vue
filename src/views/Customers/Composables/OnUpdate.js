import axios from 'axios';
import { getCurrentInstance } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { reactive } from 'vue';
import Swal from 'sweetalert2';

export default function useOnUpdateButton(selectedItemNumber) {

    const router = useRouter();
    const route = useRoute();
    const componentName = getCurrentInstance()?.type.name.toString();
    const store = useStore();

    const model = reactive({
      CustomerId: '',
      ItemName:'',
      SelectedItem : -1,
      ManagerId : '',
    });

    function CheckItemName() {
      if(componentName === 'TotalWeapon') {
        return model.SelectedItem = selectedItemNumber.value.totalWeaponId;
      }
      if(componentName === "TShirt") {
        return model.SelectedItem = selectedItemNumber.value.tShirtId;
      }
      if(componentName === "Ring2") {
        return model.SelectedItem = selectedItemNumber.value.ring2Id;
      }
      if(componentName === "Ring1") {
        return model.SelectedItem = selectedItemNumber.value.ring1Id;
      }
      if(componentName === "Neckless") {
        return model.SelectedItem = selectedItemNumber.value.necklessId;
      }
      if(componentName === "Helmet") {
        return model.SelectedItem = selectedItemNumber.value.helmetId;
      }
      if(componentName === "Guard") {
        return model.SelectedItem = selectedItemNumber.value.guardId;
      }
      if(componentName === "Globe") {
        return model.SelectedItem = selectedItemNumber.value.globeId;
      }
      if(componentName === "EarRing") {
        return model.SelectedItem = selectedItemNumber.value.earRingId;
      }
      if(componentName === "Cape") {
        return model.SelectedItem = selectedItemNumber.value.capeId;
      }
      if(componentName === "Boots") {
        return model.SelectedItem = selectedItemNumber.value.bootsId;
      }
      if(componentName === "Belt") {
        return model.SelectedItem = selectedItemNumber.value.beltId;
      }
      if(componentName === "Armor") {
        return model.SelectedItem = selectedItemNumber.value.armorId;
      }
    }

    function OnUpdateButton(){
        model.SelectedItem = CheckItemName();
        model.CustomerId = route.params.id.toString();
        model.ItemName = componentName.toString();
        model.ManagerId = store.state.userEmail.toString();

        if(model.ManagerId === '' || model.ManagerId === undefined || model.SelectedItem === undefined || model.SelectedItem == -1){
          store.dispatch('setAuth',false);
          localStorage.clear();
          router.push('/login');
        }

        axios.post('https://localhost:7072/Customer/UpdateCustomerEquipment', model)
             .then(()=>
            { 
              router.push('/customer/customerlist');
              Swal.fire({
                title:"Confirm Message",
                text: 'Succeed to change',
                icon: 'success'
              })
            }
          );
    }

    return {
      OnUpdateButton,
    }

}