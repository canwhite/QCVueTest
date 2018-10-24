<template>
    <div id="app">
        <main></main>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Main from "./Main.vue"
  import "./assets/less/site.less"
  export default {
    components:{Main}
  }
</script>

