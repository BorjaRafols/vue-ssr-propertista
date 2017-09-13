<template>
  <div id="app" v-bind:class="{ toggled: toggled }">

    <sidebar-wrapper></sidebar-wrapper>
    <div class="page-content-wrapper" v-on:click="toggleMenuIfSidebarIsActive">
      <app-navbar :toggleMenu="toggleMenu"></app-navbar>      

      <!-- Actual content -->
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
    
  </div>
</template>

<script>

import SidebarWrapper from './views/SidebarWrapper.vue';
import AppNavbar from './views/AppNavbar.vue'
import 'bootstrap/dist/css/bootstrap.css';

  export default {
    data: function(){
      return {
        toggled: false
      }
    },
    components: {
      'sidebar-wrapper': SidebarWrapper,
      'app-navbar': AppNavbar
    },
    methods: {
      toggleMenu(e){
        e.stopPropagation();
        this.toggled = !this.toggled
        
      },
      toggleMenuIfSidebarIsActive(){
        if (this.toggled) {
          this.toggled = !this.toggled
        }
      }
    }

  }  
</script>

<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  color #34495e
  overflow-y scroll

a
  color #34495e
  text-decoration none

.header
  background-color #ff6600
  position fixed
  z-index 999
  height 55px
  top 0
  left 0
  right 0
  .inner
    max-width 800px
    box-sizing border-box
    margin 0px auto
    padding 15px 5px
  a
    color rgba(255, 255, 255, .8)
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    &:hover
      color #fff
    &.router-link-active
      color #fff
      font-weight 400
    &:nth-child(6)
      margin-right 0
  .github
    color #fff
    font-size .9em
    margin 0
    float right

.logo
  width 24px
  margin-right 10px
  display inline-block
  vertical-align middle



// Mine


#app {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#app.toggled {
  padding-right: 0px;
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#app.toggled #page-content-wrapper {
  position: absolute;
  margin-left: -250px;
}

@media(min-width:768px) {
  #app {
    padding-right: 0;
  }
  #app.toggled {
    padding-right: 250px;
  }
  #app.toggled #sidebar-wrapper {
    width: 250px;
  }
  #page-content-wrapper {
    position: relative;
  }
  #app.toggled #page-content-wrapper {
    position: relative;
    margin-left: -250px;
  }
}

</style>
