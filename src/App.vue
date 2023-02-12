<template>
    <div id="app" @click="mobileNavHandler">
        <!-- <nprogress-container> -->
        <NavComponent />
        <router-view />
        <FooterComponent />
        <!-- </nprogress-container> -->


    </div>
</template>

<script>
import FooterComponent from "@/components/FooterComp.vue"
import NavComponent, { mobileNavHandler } from "@/components/NavComp.vue"
// import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

export default {
    name: "App",
    components: {
        FooterComponent,
        NavComponent,
        // NprogressContainer
    }, 
    
    methods: {
        mobileNavHandler,
    }


}
</script>