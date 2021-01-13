<template>
<div>
    <div class="grid--auto-cols gap-4">
        <card class="bg-white w-64 flex justify-center text-purple-500">
            <IconPerson height="56" width="56" />
            <div class="   flex flex-col ">

                <h1 class="text-5xl font-bold"> {{user.followers}}</h1>

                <span>Followers</span>
            </div>

        </card>
        <card class="bg-white w-64 flex justify-center  text-green-500 ">
            <IconUser height="56" width="56" />
            <div class=" flex flex-col items-center">
                <h1 class="text-5xl font-bold">{{user.following}}</h1>

                <span>Following</span>
            </div>

        </card>
        <card class="bg-white w-64 flex justify-center text-blue-500 ">
            <IconBook height="56" width="56" />
            <div class="   flex flex-col ml-2">
                <h1 class="text-5xl font-bold">{{user.public_repos}}</h1>

                <span>Repositories</span>
            </div>

        </card>

    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";
import IconBook from "../../../components/icons/IconBook";
import IconPerson from "../../../components/icons/IconPerson";
import IconUser from "../../../components/icons/IconUser";

import Card from "../../../components/surface/Card";
export default defineComponent({
    name: 'GitHubStats',
    data() {
        return {
            user: {}
        }
    },
    components: {
        Card,
        IconPerson,
        IconUser,
        IconBook
    },
    created() {
        fetch("https://api.github.com/users/boussadjra").then(res => res.json()).then((result) => {
            this.user = result
            console.log('--------------------')
            console.log(result)
            console.log('--------------------')
        }).catch((err) => {

        });
    }
})
</script>

<style>

</style>
