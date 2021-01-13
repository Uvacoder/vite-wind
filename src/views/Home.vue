<template>
<section class="dark:bg-black-500 dark:text-gray-100">
    <div class="flex w-full h-full items-center justify-center pt-10">
        <article class="flex flex-col max-w-xl items-center">
            <h1 class="text-6xl text-purple-700 font-bold">VITEWIND</h1>

            <p class="p-4 py-8 text-lg text">
                It's a <a class="text-purple-500" href="https://v3.vuejs.org/" target="_blank" rel="noopener noreferrer">
                    Vue 3 </a> boilerplate based on
                <a class="text-purple-500" href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                    Tailwindcss</a>
                +
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" class="text-purple-500">Typescript</a>
                +
                <a href="http://vitejs.dev/" target="_blank" rel="noopener noreferrer" class="text-purple-500">Vite</a>
                +
                <a href="https://azouaoui-med.github.io/css-pro-layout/" target="_blank" rel="noopener noreferrer" class="text-purple-500">css-pro-layout</a>, You could clone this repository and use the components that are
                available so far, this template supports also the dark mode. if you like it please show some support by leaving a
                star
            </p>
            <div class="flex space-x-2">
                <w-btn size="lg" @click="$router.push('/dashboard')">
                    <router-link to="/dashboard">GET STARTED </router-link>
                </w-btn>

                <a href="https://github.com/boussadjra/vite-wind" target="_blank" rel="noopener noreferrer">
                    <w-btn size="lg" outlined>Github
                        <template #prepend>
                            <IconStar />
                        </template>
                    </w-btn>
                </a>
            </div>
        </article>
    </div>
</section>
</template>

<script>
import Button from "../components/actions/Button.vue";
import IconLogoGithub from "../components/icons/IconLogoGithub";
import IconStar from "../components/icons/IconStar";

export default {
    components: {
        "w-btn": Button,
        IconLogoGithub,
        IconStar,
    },
};
</script>

<style>
</style>
