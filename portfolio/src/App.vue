<template>
    <div id="app">
        <HeaderComponent />
        
        <FooterComponent />

    </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComp.vue"
import FooterComponent from "@/components/FooterComp.vue"

export default {
    name: "App", 
    components: {
        FooterComponent,
        HeaderComponent
    }
}
</script>