<template>
<div class="section__title">Icons :</div>
<p class="pl-4">
    Vue components based on
    <a class="text-purple-600" href="https://www.npmjs.com/package/@carbon/icons" target="_blank" rel="noopener noreferrer">@carbon/icons</a>
</p>
<div class="flex flex-row justify-around py-4">
    <div class="flex flex-wrap p-2 w-full">
        <div v-for="icon in Object.keys($options.components)" :title="icon" class="p-2 m-1 bg-purple-100 dark:bg-gray-500 dark:text-white w-12 h-12 flex items-center justify-center rounded-full cursor-pointer text-gray-600 hover:text-gray-100 hover:bg-purple-500">
            <component :is="icon"></component>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineAsyncComponent,
    defineComponent,
    VNode
} from "vue";
import IconDashboard from "../../../components/icons/IconDashboard";
import IconFaceActivated from "../../../components/icons/IconFaceActivated";
import IconHome from "../../../components/icons/IconHome";
import IconLogoFacebook from "../../../components/icons/IconLogoFacebook";
import IconLogoInstagram from "../../../components/icons/IconLogoInstagram";
import IconLogoTwitter from "../../../components/icons/IconLogoTwitter";
import IconMailAll from "../../../components/icons/IconMailAll";
import IconMedicationAlert from "../../../components/icons/IconMedicationAlert";
import IconNotification from "../../../components/icons/IconNotification";
import IconTrafficFlow from "../../../components/icons/IconTrafficFlow";

export default defineComponent({
    name: "Icons",
    data() {
        return {

        };
    },
    components: {
        Home: IconHome,
        Bell: IconNotification,
        Dashboard: IconDashboard,
        TrafficFlow: IconTrafficFlow,
        Mail: IconMailAll,
        Alert: IconMedicationAlert,
        Twitter: IconLogoTwitter,
        Facebook: IconLogoFacebook,
        Instagram: IconLogoInstagram,
        IconFaceActivated,

    },

});
</script>

<style>
</style>
