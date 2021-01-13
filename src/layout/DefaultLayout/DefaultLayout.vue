<template>
<div class="relative z-10 dark:bg-black-500 dark:text-gray-100">
    <nav class="h-48 lg:h-16 w-full sticky overflow-hidden top-0 z-20 p-4 bg-indigo-900 text-indigo-100 flex flex-col lg:flex-row items-center justify-between">
        <h1 class="logo text-4xl font-bold text-yellow-300">
            <router-link to="/">VITEWIND</router-link>
        </h1>

        <ul class="flex flex-row justify-around w-10/12 sm:w-6/12 lg:w-4/12 text-sm uppercase cursor-pointer">
            <li class="min-w-max">
                <router-link to="/" active-class="text-yellow-300">Home</router-link>
            </li>
            <li class="min-w-max">
                <router-link to="/dashboard" active-class="text-yellow-300">Dashbboard</router-link>
            </li>

        </ul>

        <div class="uppercase text-indigo-200 cursor-pointer flex items-center space-x-4">
            <a href="https://github.com/boussadjra/vite-wind" target="_blank" rel="noopener noreferrer">
                <w-btn>Github
                    <template #prepend>
                        <icon-logo-github />
                    </template>
                </w-btn>
            </a>
            <a href="#">
                <component :is="isLight?'icon-moon':'icon-sun'" class="text-purple-200 dark:text-purple-100" height="24" width="24" @click="isLight = !isLight" />
            </a>
        </div>
    </nav>
    <main class="bg-purple-100 dark:bg-black-500 dark:text-gray-100 min-h-screen transition-all duration-300 rounded-none  z-10">
        <slot></slot>
    </main>
</div>
</template>

<script>
import Button from "../../components/actions/Button.vue";
import IconLogoGithub from "../../components/icons/IconLogoGithub";
import IconSun from "../../components/icons/IconSun";
import IconMoon from "../../components/icons/IconMoon";
export default {
    components: {
        "w-btn": Button,
        IconLogoGithub,
        IconSun,
        IconMoon,
    },
    data() {
        return {
            isLight: true,
        }
    },
    watch: {
        isLight() {
            this.switchMode();
        },
    },
    methods: {
        switchMode() {
            let htmlElem = document.querySelector("html");
            htmlElem.classList[this.isLight ? "remove" : "add"]("dark");
            localStorage.setItem('vwmode-islight', this.isLight)
        },
    },

    mounted() {
        this.isLight = JSON.parse(localStorage.getItem('vwmode-islight'))
    }
};
</script>

<style>
</style>
