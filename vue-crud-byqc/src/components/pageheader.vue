<template>
    <div class="message">
        {{header}}
        <small v-if="subHeader"> {{subHeader}} </small>
    </div>
</template>




<script>

export default{
 props:['header','subHeader']
}
</script>



<style>

.message{
    text-align:center;
    background-color: rgb(64, 158, 255);
    color:rgb(255,255,255);
    font-size:18px;
}


</style>