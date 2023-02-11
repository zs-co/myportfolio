<template>
    <div class="projects">
        <h1>Projects</h1>
        <div class="projects__list">
            <div class="flex flex-col" v-for="project in projects" :key="project.id">
                <h5 class="font-bold">{{ project["index"] }} : </h5>
                <h3 class="font-bold">{{ project["title"] }}</h3>
                <p>{{ project["description"] }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectsView",
    data: () => {
        return {
            projects: [
                {
                    "title": "Riphah Alumnus System",
                    "description": "I've been working on the project of Riphah Alumni System to manage the graduates of Riphah International University", 
                    "index": 1
                },
                {
                    "title": "Riphah Alumnus System 02",
                    "description": "I've been working on the project of Riphah Alumni System to manage the graduates of Riphah International University", 
                    "index": 2
                },
                {
                    "title": "Riphah Alumnus System 03",
                    "description": "I've been working on the project of Riphah Alumni System to manage the graduates of Riphah International University", 
                    "index": 3
                }
            ]
        }
    }
}
</script>