<template>
    <div id="app">
        <main></main>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  import Main from "./Main.vue"
export default {

  data() {

    return {

    }
  },
  components:{Main}
}


</script>



<style>


</style>
