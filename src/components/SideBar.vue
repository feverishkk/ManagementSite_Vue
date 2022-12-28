<template>
    <div class="SideBar">
      <va-sidebar>
        <va-sidebar-item>
          <va-sidebar-item-content>
            <va-icon name="home" />
            <!-- User can hide item with css if he wants -->
            <router-link to="/">
                <va-sidebar-item-title class="">Home</va-sidebar-item-title>
            </router-link>
          </va-sidebar-item-content>
        </va-sidebar-item>

        <va-sidebar-item>
          <va-sidebar-item-content>
            <va-icon name="face" />
            <router-link to="/personalinfo">
            <va-sidebar-item-title>Profile</va-sidebar-item-title>
            </router-link>
          </va-sidebar-item-content>
        </va-sidebar-item>

        <va-sidebar-item>
          <va-sidebar-item-content>
            <va-icon name="person" />
            <router-link to="/managerList">
            <va-sidebar-item-title>Manager List</va-sidebar-item-title>
            </router-link>
          </va-sidebar-item-content>
        </va-sidebar-item>
  
        <va-sidebar-item>
          <va-sidebar-item-content>
            <va-icon name="group" />
            <router-link to="/customer/customerlist">
            <va-sidebar-item-title>Customer List</va-sidebar-item-title>
        </router-link>
          </va-sidebar-item-content>
        </va-sidebar-item>

        <va-sidebar-item>
          <va-sidebar-item-content>
            <va-icon name="analytics" />
            <router-link to="/chart">
            <va-sidebar-item-title>Chart</va-sidebar-item-title>
            </router-link>
          </va-sidebar-item-content>
        </va-sidebar-item>
  
        <va-sidebar-item>
          <va-sidebar-item-content>
            <va-icon name="category" />
            <router-link to="/item">
            <va-sidebar-item-title>Item</va-sidebar-item-title>
            </router-link>
          </va-sidebar-item-content>
        </va-sidebar-item>

      <va-sidebar-item>
          <va-sidebar-item-content>
            <va-icon name="plagiarism" />
            <router-link to="/log">
            <va-sidebar-item-title>Log</va-sidebar-item-title>
            </router-link>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </va-sidebar>

    </div>
</template>


<script>
export default {
  name:"SideBar",
    setup() {  
    },
}
</script>

<style scoped>
  .SideBar{
    float: left; 
    margin-right: 20px; 
    height: 1000px;
    }
</style>