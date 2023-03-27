<template>
    <HeaderApp />
    <main class="bg-slate-50 min-auto min-h-[calc(100vh-128px)] w-full p-5">
        <router-view />
    </main>
    <FooterApp />
</template>

<script>
import HeaderApp from "../components/HeaderApp.vue";
import FooterApp from "../components/FooterApp.vue";
export default {

    name: 'AppLayout',
    components: {
        HeaderApp,
        FooterApp
    }
}
</script>