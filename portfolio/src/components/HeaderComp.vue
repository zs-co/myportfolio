<template>
    <div>
        <h1 class="text-red-300">Header</h1>
        <NavComponent />
    </div>
</template>

<script>
import NavComponent from "@/components/NavComp.vue"
export default {
    name: "HeaderComponent",
    components: {
        NavComponent
    },
}
</script>