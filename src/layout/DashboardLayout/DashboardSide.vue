<template>
<div class="h-full w-full bg-gray-200 dark:bg-black-700 text-black-700 dark:text-black-100">
    <h1 class="text-4xl font-bold text-purple-900 bg-gray-300 dark:bg-black-700 h-16 flex items-center justify-center">
        <router-link to="/">VITEWIND</router-link>
    </h1>

    <div class="p-2">
        <vue3-router-tree :items="routes">
            <template #item="{ item }">
                <div class="flex space-x-3 items-center">
                    <component :is="item.name.replace(' ', '')" />
                    <router-link exact-active-class="text-purple-700" :to="item.path"><span class="text-md font-light"> {{ item.name }}</span></router-link>
                </div>
            </template>
        </vue3-router-tree>
    </div>
</div>
</template>

<script>
import {
    defineComponent
} from "vue";

import Vue3RouterTree from "vue3-router-tree";
import IconDashboard from "../../components/icons/IconDashboard";
import IconDirectionSharpTurn from "../../components/icons/IconDirectionSharpTurn";
import IconEmail from "../../components/icons/IconEmail";
import IconEmailNew from "../../components/icons/IconEmailNew";
import IconLicenseDraft from "../../components/icons/IconLicenseDraft";
import IconModel from "../../components/icons/IconModel";
import IconRadioButton from "../../components/icons/IconRadioButton";
import IconSend from "../../components/icons/IconSend";
import IconUserAvatar from "../../components/icons/IconUserAvatar";
import IconWarningAlt from "../../components/icons/IconWarningAlt";

export default defineComponent({
    data: () => ({
        routes: [{
                path: "/dashboard",
                name: "Dashboard",
                hasIcon: true,

                info: "updated",
            },
            {
                path: "/dashboard/components",
                name: "Components",
                info: "+5",
                hasIcon: true,
                children: [{
                        path: "/dashboard/components/alerts",
                        name: "Alerts",
                    },
                    {
                        path: "/dashboard/components/avatars",
                        name: "Avatars",
                    },
                    {
                        path: "/dashboard/components/badges",
                        name: "Badges",
                    },
                    {
                        path: "/dashboard/components/breadcrumbs",
                        name: "Breadcrumbs",
                    },
                    {
                        path: "/dashboard/components/buttons",
                        name: "Buttons",
                    },
                    {
                        path: "/dashboard/components/cards",
                        name: "Cards",
                    },
                    {
                        path: "/dashboard/components/chips",
                        name: "Chips",
                    },
                    {
                        path: "/dashboard/components/icons",
                        name: "Icons",
                    },
                    {
                        path: "/dashboard/components/tabs",
                        name: "Tabs",
                    },

                ],
            },
            {
                path: "/dashboard/mail",
                name: "Mail",
                hasIcon: true,

                children: [{
                        path: "/dashboard/mailinbox",
                        name: "Inbox",
                    },
                    {
                        path: "/dashboard/mail/sent",
                        name: "Sent",
                    },
                    {
                        path: "/dashboard/mail/draft",
                        name: "Draft",
                    },
                ],
            },
        ],
    }),
    computed: {},
    methods: {},
    components: {
        Vue3RouterTree,
        Dashboard: IconDashboard,
        Components: IconModel,
        Mail: IconEmail,
        Inbox: IconEmailNew,
        Sent: IconSend,
        Draft: IconLicenseDraft,
    },
    mounted() {
        console.log("--------------------");
        console.log(this.$router.getRoutes());
        console.log("--------------------");
    },
});
</script>

<style>
</style>
