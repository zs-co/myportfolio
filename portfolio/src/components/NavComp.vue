<template>
    <nav>
        <div class="flex" v-for="list in navList" :key="list.id">
            <i :class=list.icon></i>
            <router-link :to="list.link">
                <span class="text-blue-400 mx-2 font-semibold hover:text-blue-500 hover:text-underline cursor-pointer"
                    :class="[list.isActive ? 'font-bold text-blue-700' : '']" @click="changeTab(list.name)">
                    {{ list.name }}
                </span>
            </router-link>

        </div>
    </nav>
    <router-view></router-view>
</template>

<script>
export default {
    name: "NavComponent",
    data: () => {
        return {
            navList: [
                {
                    "name": "Home",
                    "icon": "icon-class-here",
                    "isActive": true,
                    "link": "/"

                },
                {
                    "name": "Hobbies",
                    "icon": "icon-class-here",
                    "isActive": false,
                    "link": "/about"
                },
                {
                    "name": "Projects",
                    "icon": "icon-class-here",
                    "isActive": false,
                    "link": "/projects"
                },
                {
                    "name": "Skills",
                    "icon": "icon-class-here",
                    "isActive": false, 
                    "link": "/projects"
                },
                {
                    "name": "Certificates",
                    "icon": "icon-class-here",
                    "isActive": false, 
                    "link": "/"
                },
                {
                    "name": "Education",
                    "icon": "icon-class-here",
                    "isActive": false, 
                    "link": "/"
                },
                {
                    "name": "About",
                    "icon": "icon-class-here",
                    "isActive": false,
                    "link": "/about"
                }
            ]
        }
    },

    methods: {
        changeTab(tab_name) {
            this.navList.forEach(element => {
                if (element.name !== tab_name) {
                    element.isActive = false;
                } else {
                    element.isActive = true;
                }
            });

        }
    }
}
</script>