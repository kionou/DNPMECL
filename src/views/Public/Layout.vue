<template>
    <div>
        <Navbar />
        <RouterView />
        <footer id="footer" class="footer  ">
            <Footer />
        </footer>

    </div>
</template>

<script>
import Navbar from '../../components/loyout/navbar.vue';
import Footer from '../../components/loyout/footer.vue';
export default {
    name: 'DNPMECLLayout',
    components:{
        Navbar , Footer
    },

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>