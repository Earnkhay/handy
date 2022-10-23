<template>
    <div class="container mb-3 col-md-9">
    <div :class="[alertType == 'Success' ? 'bg-success' : 'bg-danger']" class="alertComp p-1" >
        <p class="my-1"><span class="p-2"><i class="fa-solid" :class="[alertType == 'Success' ? 'fa-circle-check' : 'fa-circle-exclamation']"></i></span> {{alertText}}</p>
    </div>
    </div>
    <router-view/>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-class-component"
    @Options({
        props: {
            alertText: String,
            alertType: String
        }
    })

    export default class alert extends Vue {
        
    }
</script>

<style scoped>
    .alertComp{
        border-radius: 10px;
        color: white;
    }
</style>