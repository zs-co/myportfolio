<template>
    <div class="container mx-auto my-4 p-8">
        <div class="flex items-center py-4">
            <h1 class="inline w-fit text-4xl font-bold">Introduction</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="w-full p-4">
                <img src="@/assets/images/my-image.png" alt="My Image">
            </div>
            <p class="tracking-tight text-lg p-4 antialiased">
                <span class="font-roboto font-bold">
                    Change Font abc this is
                </span>
                {{ introduction_para }}
            </p>
        </div>
        <ProjectsView />
    </div>

</template>

<script>
import ProjectsView from "@/views/ProjectsView.vue"
export default {
    name: "HomeView",
    components: {
        ProjectsView
    },
    data: () => {
        return {
            imageURL: "",
            introduction_para: "This is me zain ul abdin blah blah blah ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, vero possimus veritatis quo ex blanditiis quae quis sapiente optio pariatur libero. Necessitatibus nobis debitis nemo, repellendus error nisi temporibus consequatur nostrum laboriosam? "
        }
    }
}
</script>