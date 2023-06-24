<template>
    <div class="container_content" data-aos="fade-up">
        <div class="section-header ">
            <h2>STATISTIQUE DES PME</h2>    
        </div>
        <div class="bar_search">
            <div class="liste-searcher">
                <div class="nsl">
                    <i class="bi bi-search"></i>
                    <input type="text" role="search" placeholder="rechercher un nom ..." />
                </div>
                <div class="nsl">
                    <i class="bi bi-funnel-fill"></i>
                    <select name="speciality" v-model="control.spec">
                        <option value="" selected="true">
                            Filtre
                        </option>
                        <option value="speciality">Spécialité</option>
                        ´
                        <option value="promotion">Promotion</option>
                    </select>
                </div>
                <div class="nsl" style="border-right: none" v-if="showFs">
                    <i class="bi bi-filter"></i>
                    <select name="speciality" v-if="filter" v-model="control.speciality">
                        <option value="" selected="true">
                            choisir la spécialité
                        </option>
                        <option value="javascript">Javascript</option>
                        ´
                        <option value="python">Python</option>
                        <option value="C#">C#</option>
                        <option value="flutter">Flutter</option>
                        <option value="PHP">PHP</option>
                        <option value="front-end">Front end</option>
                        <option value="reseau-voip">Reseau Voip</option>
                        <option value="multimedia">Multimédia</option>
                    </select>
                    <select name="promotion" v-else>
                        <option value="" selected="true">
                            numero de la promotion
                        </option>
                        <option :value="1.18">1.18</option>
                        <option :value="2.19">2.19</option>
                        <option :value="3.2">3.20</option>
                        <option :value="4.21">4.21</option>
                        <option :value="5.22">5.22</option>
                    </select>
                </div>
                <div class="nsl" style="border-right: none" v-else>
                    <i class="bi bi-x-square-fill" @click="
                        control = { name: '', spec: '', speciality: '', promotion: '' }
                        " style="cursor: pointer"></i>
                    <input type="text" placeholder="Aucun filtre selectionné" disabled />
                </div>
            </div>

        </div>

        <div class="graphe">
            <div class="graphe1">
                <Baton/>
            </div>
           

        </div>
    </div>
</template>

<script>
import Baton from '../../components/Public/Statistique/baton.vue';
import Circulaire from '../../components/Public/Statistique/circulaire.vue';

export default {
name: 'DNPMECLStatistique',
components:{
    Baton , Circulaire
},
data() {
    return {
        control: {
                name: '',
                spec: '',
                speciality: '',
                promotion: '',
            },

            askVote: false,

            datas: [],
            isFilter: false,
    };
},


  computed: {
        showFs() {
            return this.control.spec;
        },
        filter() {
            return this.control.spec === 'speciality';
        },
     
    },

};
</script>

<style lang="css" scoped>

.container_content{
max-width: 1140px;
margin: 0 auto;
/* border: 1px solid red; */
background: #fff;

}
.section-header{
    padding: 20px 0 !important;

}
.bar_search {

width: 100%;
/* height: 100px; */
/* border: 1px solid red; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
}


.liste-searcher {
    justify-content: center;
    display: flex;
    width: 100%;
    border-radius: 6px;
    height: 60px;
    background-color: #fff;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
    /* border: 1px solid red; */
}

.liste-searcher div {
    text-align: center;
    font-size: 20px;
    width: 33%;
    vertical-align: middle;
    border-right: 0.5px solid var(--color-primary);
}

.liste-searcher div :nth-child(2) {
    background: none;
    outline: none;
    border: none;
    font-size: 18px;
    margin: 5px;
    padding: 10px;
}

.liste-searcher i {
    color: var(--bg2);
}


.nsl select {
    width: calc(100% - 50px);
    font-size: 18px;
    cursor: pointer;
}

@media screen and (max-width: 768px) {
  .liste-searcher {
    flex-direction: column;
    height: auto;
    margin: 20px auto;
    width: 80%;
  }

  .liste-searcher div {
    align-items: center;
    width: 100%;
    border-bottom: 0.2px solid var(--color-primary);
    border-right: none;
  }

  .nsl select {
    width: 207.5px;
  }
}

.graphe{
    /* border: 1px solid red; */
    /* height: 500px; */
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;

}

.graphe1{
    /* border: 1px solid red; */
    /* height: 500px; */
    width:80%;

}


</style>