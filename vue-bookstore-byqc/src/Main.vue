<!-- /.vue -->
<template>
    <div>
        <tabs></tabs>
        <div class="content">
            <transition name='slide-fade'>
              <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
  import Tabs from "./components/tabs.vue"
  import "./assets/less/site.less"
  export default {

    components:{Tabs}
  }
</script>


<style>
.slide-fade-enter-active{
  transition:all .3s ease;
}
.silde-fade-leave-active{
  transition:all .3s cubic-bezier(1.0,0.5,0.8,1.0);
}

.slide-fade-enter,.slide-fade-leave-active{
  transform:translateX(-430px);
  opacity:0;
}



</style>