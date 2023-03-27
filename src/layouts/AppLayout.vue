<template>
    <HeaderApp />
    <main class="bg-white mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-auto min-h-[calc(100vh-128px)] w-full p-5">
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