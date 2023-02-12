<template>
    <nav class="w-full flex justify-between items-center drop-shadow bg-sky-400 px-4 py-2 border-b">
        <div class="flex mx-2 w-1/2 cursor-pointer">
            <router-link to="/">
                <div class="flex items-center text-white font-semibold">

                    <img src="@/assets/logo.png" alt="logo" width="48"> Zain ul Abdin

                </div>
            </router-link>

        </div>
        <div class="w-inherit hidden md:flex justify-end items-center" v-for="list in navList" :key="list.name">
            <i :class=list.icon></i>
            <router-link :to="list.link" @click="changeTab(list.name)">
                <span class="text-black mx-2 font-semibold cursor-pointer"
                    :class="[list.isActive ? 'font-bold text-lg' : 'hover:underline']">
                    {{ list.name }}
                </span>
            </router-link>
        </div>
        <div class="w-inherit md:hidden" @click="openMobileNav = !openMobileNav">
            <!-- horizontal lines of menu icon -->
            <font-awesome-icon icon="fa-solid fa-bars" size="2xl" :color="openMobileNav ? 'black' : 'white'" />
            <div class="absolute z-10 right-4 top-15 p-4 w-auto bg-white shadow-2xl rounded-md border"
                :class="!openMobileNav ? 'hidden' : ''">
                <nav class="flex flex-col justify-start items-start">
                    <div class="mx-2" v-for="list in navList" :key="list.name">
                        <router-link :to="list.link" @click="changeTab(list.name)">
                            <span class="text-black mx-3 font-semibold cursor-pointer"
                                :class="[list.isActive ? 'font-bold text-lg' : 'hover:underline']">
                                {{ list.name }}
                            </span>
                        </router-link>
                    </div>
                </nav>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavComponent",
    data: () => {
        return {
            openMobileNav: false,
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
                    "link": "/#projects"
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
        },
        mobileNavHandler() {
            this.openMobileNav = !this.openMobileNav;
        }

    },

    mounted: () => {
        return {
            openMobileNav: false,
        }
    }
}
</script>