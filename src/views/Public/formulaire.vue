<template>
    <!-- <div>
        <Form /> 
    </div> -->
    <div class="row gy-4">

        <div class="col-lg-12 col-12 ">
            <div class="nav-align-top ">
                <ul class="nav nav-pills class1 " role="tablist">
                    <li class="nav-item">
                        <div class="btns active" role="tab" data-bs-toggle="tab"
                            data-bs-target="#navs-pills-top-home1" aria-controls="navs-pills-top-home1"
                            aria-selected="true">
                            Formulaire
                        </div>
                    </li>

                    <li class="nav-item">
                        <div class="btns" role="tab" data-bs-toggle="tab"
                            data-bs-target="#navs-pills-top-profile1" aria-controls="navs-pills-top-profile1"
                            aria-selected="false">
                            Classification
                        </div>
                    </li>
                </ul>
                <div class="tab-pane fade show active  contenu" id="navs-pills-top-home1" role="tabpanel">
                    <Form />

                </div>
                <div class="tab-pane fade" id="navs-pills-top-profile1" role="tabpanel">
                    classification

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Form from '../../components/Public/formulaire.vue';
export default {
    name: 'DNPMECLFormulaire',
    components: { Form },
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

<style lang="css" scoped>
.fade:not(.show) {
    display: none;
    opacity: 0;
}
.class1{
background-color: #fafafa;
height: 50px;

}
.btns{

    padding: 0 33px;
    font-weight: 500;
    color: #000;
    border: none;
    cursor: pointer;
    outline: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.btns.active{
background: var(--color-secondary);


}


</style>