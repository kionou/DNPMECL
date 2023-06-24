<template>

    <div class="container_content" data-aos="fade-up">

        <div class="section-header ">
            <h2>JOURNAL DES APPELS D'OFFRES</h2>    
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

        <div class="contenu d-flex justify-content-center align-items-center flex-wrap" data-aos="fade-up" data-aos-delay="100">
            <div class="task">
                <div class="tag">
                    <h5>
                        Renforcement De La Signalisation Horizontale Sur Certains Axes De La Ville De Conakry
                    </h5>
                   
                    <div class="texte">
                        <p class="texte-content chef"><i class="bi bi-briefcase-fill"></i> <span>Agence Guinéenne de la Sécurité Routière</span></p>
                        <p class="texte-content open"> <i class="bi bi-calendar-plus-fill"></i> <span> Publié : 01 - 01 - 2023</span></p>
                        <p class="texte-content close"> <i class="bi bi-calendar2-x-fill"></i> <span> Expire : 24 - 02 - 2025</span></p>
                        <p class="texte-content maps"><i class="bi bi-geo-alt-fill"></i> <span>Nzérékoré , Macenta</span></p>


                    </div>
                </div>


                <div class="boutton">
                    <a href="#" class="btn"> Detail
                        <span></span>
                    </a>
                </div>


            </div>
            <div class="task">
                <div class="tag">
                    <h5>
                        Renforcement De La Signalisation Horizontale Sur Certains Axes De La Ville De Conakry
                    </h5>
                   
                    <div class="texte">
                        <p class="texte-content chef"><i class="bi bi-briefcase-fill"></i> <span>Agence Guinéenne de la Sécurité Routière</span></p>
                        <p class="texte-content open"> <i class="bi bi-calendar-plus-fill"></i> <span> Publié : 01 - 01 - 2023</span></p>
                        <p class="texte-content close"> <i class="bi bi-calendar2-x-fill"></i> <span> Expire : 24 - 02 - 2025</span></p>
                        <p class="texte-content maps"><i class="bi bi-geo-alt-fill"></i> <span>Nzérékoré , Macenta</span></p>


                    </div>
                </div>


                <div class="boutton">
                    <a href="#" class="btn"> Detail
                        <span></span>
                    </a>
                </div>


            </div>
            <div class="task">
                <div class="tag">
                    <h5>
                        Renforcement De La Signalisation Horizontale Sur Certains Axes De La Ville De Conakry
                    </h5>
                   
                    <div class="texte">
                        <p class="texte-content chef"><i class="bi bi-briefcase-fill"></i> <span>Agence Guinéenne de la Sécurité Routière</span></p>
                        <p class="texte-content open"> <i class="bi bi-calendar-plus-fill"></i> <span> Publié : 01 - 01 - 2023</span></p>
                        <p class="texte-content close"> <i class="bi bi-calendar2-x-fill"></i> <span> Expire : 24 - 02 - 2025</span></p>
                        <p class="texte-content maps"><i class="bi bi-geo-alt-fill"></i> <span>Nzérékoré , Macenta</span></p>


                    </div>
                </div>


                <div class="boutton">
                    <a href="#" class="btn"> Detail
                        <span></span>
                    </a>
                </div>


            </div>
            <div class="task">
                <div class="tag">
                    <h5>
                        Renforcement De La Signalisation Horizontale Sur Certains Axes De La Ville De Conakry
                    </h5>
                   
                    <div class="texte">
                        <p class="texte-content chef"><i class="bi bi-briefcase-fill"></i> <span>Agence Guinéenne de la Sécurité Routière</span></p>
                        <p class="texte-content open"> <i class="bi bi-calendar-plus-fill"></i> <span> Publié : 01 - 01 - 2023</span></p>
                        <p class="texte-content close"> <i class="bi bi-calendar2-x-fill"></i> <span> Expire : 24 - 02 - 2025</span></p>
                        <p class="texte-content maps"><i class="bi bi-geo-alt-fill"></i> <span>Nzérékoré , Macenta</span></p>


                    </div>
                </div>


                <div class="boutton">
                    <a href="#" class="btn"> Detail
                        <span></span>
                    </a>
                </div>


            </div> <div class="task">
                <div class="tag">
                    <h5>
                        Renforcement De La Signalisation Horizontale Sur Certains Axes De La Ville De Conakry
                    </h5>
                   
                    <div class="texte">
                        <p class="texte-content chef"><i class="bi bi-briefcase-fill"></i> <span>Agence Guinéenne de la Sécurité Routière</span></p>
                        <p class="texte-content open"> <i class="bi bi-calendar-plus-fill"></i> <span> Publié : 01 - 01 - 2023</span></p>
                        <p class="texte-content close"> <i class="bi bi-calendar2-x-fill"></i> <span> Expire : 24 - 02 - 2025</span></p>
                        <p class="texte-content maps"><i class="bi bi-geo-alt-fill"></i> <span>Nzérékoré , Macenta</span></p>


                    </div>
                </div>


                <div class="boutton">
                    <a href="#" class="btn"> Detail
                        <span></span>
                    </a>
                </div>


            </div> <div class="task">
                <div class="tag">
                    <h5>
                        Renforcement De La Signalisation Horizontale Sur Certains Axes De La Ville De Conakry
                    </h5>
                   
                    <div class="texte">
                        <p class="texte-content chef"><i class="bi bi-briefcase-fill"></i> <span>Agence Guinéenne de la Sécurité Routière</span></p>
                        <p class="texte-content open"> <i class="bi bi-calendar-plus-fill"></i> <span> Publié : 01 - 01 - 2023</span></p>
                        <p class="texte-content close"> <i class="bi bi-calendar2-x-fill"></i> <span> Expire : 24 - 02 - 2025</span></p>
                        <p class="texte-content maps"><i class="bi bi-geo-alt-fill"></i> <span>Nzérékoré , Macenta</span></p>


                    </div>
                </div>


                <div class="boutton">
                    <a href="#" class="btn"> Detail
                        <span></span>
                    </a>
                </div>


            </div> <div class="task">
                <div class="tag">
                    <h5>
                        Renforcement De La Signalisation Horizontale Sur Certains Axes De La Ville De Conakry
                    </h5>
                   
                    <div class="texte">
                        <p class="texte-content chef"><i class="bi bi-briefcase-fill"></i> <span>Agence Guinéenne de la Sécurité Routière</span></p>
                        <p class="texte-content open"> <i class="bi bi-calendar-plus-fill"></i> <span> Publié : 01 - 01 - 2023</span></p>
                        <p class="texte-content close"> <i class="bi bi-calendar2-x-fill"></i> <span> Expire : 24 - 02 - 2025</span></p>
                        <p class="texte-content maps"><i class="bi bi-geo-alt-fill"></i> <span>Nzérékoré , Macenta</span></p>


                    </div>
                </div>


                <div class="boutton">
                    <a href="#" class="btn"> Detail
                        <span></span>
                    </a>
                </div>


            </div> <div class="task">
                <div class="tag">
                    <h5>
                        Renforcement De La Signalisation Horizontale Sur Certains Axes De La Ville De Conakry
                    </h5>
                   
                    <div class="texte">
                        <p class="texte-content chef"><i class="bi bi-briefcase-fill"></i> <span>Agence Guinéenne de la Sécurité Routière</span></p>
                        <p class="texte-content open"> <i class="bi bi-calendar-plus-fill"></i> <span> Publié : 01 - 01 - 2023</span></p>
                        <p class="texte-content close"> <i class="bi bi-calendar2-x-fill"></i> <span> Expire : 24 - 02 - 2025</span></p>
                        <p class="texte-content maps"><i class="bi bi-geo-alt-fill"></i> <span>Nzérékoré , Macenta</span></p>


                    </div>
                </div>


                <div class="boutton">
                    <a href="#" class="btn"> Detail
                        <span></span>
                    </a>
                </div>


            </div> <div class="task">
                <div class="tag">
                    <h5>
                        Renforcement De La Signalisation Horizontale Sur Certains Axes De La Ville De Conakry
                    </h5>
                   
                    <div class="texte">
                        <p class="texte-content chef"><i class="bi bi-briefcase-fill"></i> <span>Agence Guinéenne de la Sécurité Routière</span></p>
                        <p class="texte-content open"> <i class="bi bi-calendar-plus-fill"></i> <span> Publié : 01 - 01 - 2023</span></p>
                        <p class="texte-content close"> <i class="bi bi-calendar2-x-fill"></i> <span> Expire : 24 - 02 - 2025</span></p>
                        <p class="texte-content maps"><i class="bi bi-geo-alt-fill"></i> <span>Nzérékoré , Macenta</span></p>


                    </div>
                </div>


                <div class="boutton">
                    <a href="#" class="btn"> Detail
                        <span></span>
                    </a>
                </div>


            </div>

           
        </div>
        <div class="container_pagination">
            <ul class="pagination mb-0">
<li class="page-item"><a class="page-link" role="button" tabindex="0"><span aria-hidden="true">Previous</span><span class="visually-hidden">Previous</span></a></li>
<li class="page-item"><a class="page-link" role="button" tabindex="0">1</a></li>
<li class="page-item"><a class="page-link" role="button" tabindex="0">10</a></li>
<li class="page-item"><a class="page-link" role="button" tabindex="0">11</a></li>
<li class="page-item active"><span class="page-link">12<span class="visually-hidden">(current)</span></span></li>
<li class="page-item"><a class="page-link" role="button" tabindex="0">13</a></li>
<li class="page-item"><a class="page-link" role="button" tabindex="0">14</a></li>
<li class="page-item"><a class="page-link" role="button" tabindex="0">20</a></li>
<li class="page-item"><a class="page-link" role="button" tabindex="0"><span aria-hidden="true">Next</span><span class="visually-hidden">Next</span></a></li>
</ul>
        </div>
    </div>

</template>

<script>
export default {
name: 'Mpmeoffre',

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

mounted() {

},
computed: {
        showFs() {
            return this.control.spec;
        },
        filter() {
            return this.control.spec === 'speciality';
        },
     
    },

methods: {

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
.contenu{

/* border: 1px solid red; */
padding: 15px 10px;
}
.task {
position: relative;
color: #2e2e2f;
background-color: #fff;
padding: 1rem;
border-radius: 8px;
box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
margin: 0 10px 10px 0;
border: 3px dashed transparent;
max-width: 350px;
}


/* .task:hover {
box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
border-color: rgba(162, 179, 207, 0.2) !important;
background-color: var(--color-primary);
color: white !important;
}
.task:hover .texte-content {
    color: white !important;
} */
.task h5{
    color: #333;
    text-align: center;
}
.texte-content bi{
    font-size: 14px;

}
.texte-content .chef{
    color: #777;

}
.texte-content .open{
    color: #999999;
}

.texte-content .close{
    color: #999999;

}
.texte-content .maps{
    color: #999999;

}
.bi-briefcase-fill{

color: #f5851e;
}

.bi-calendar-plus-fill{

color: rgb(4, 243, 123);

}

.bi-calendar2-x-fill{

color: red;

}
.bi-geo-alt-fill{

color: var(--color-secondary);

}


.texte-content {
/* color: #6f6f6f !important; */
font-weight: bold;
font-size: 13px;

}



p {
margin-bottom: 0 !important;
}



.btn {
  padding: 1em 2em;
  font-size: 10px;
  font-weight: 500;
  color: #000;
  background-color: var(--color-secondary);
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
}

.btn:hover {
  background-color: #fff;
  border: 1px solid var(--color-secondary) ;
 
}
.boutton {

width: 100%;
display: flex;
justify-content: center;
padding-top: 10px;


}

/* .btn {
border: none;
display: block;
position: relative;
padding: 0.4em 2em;
font-size: 11px;
background: transparent;
cursor: pointer;
user-select: none;
overflow: hidden;
color: #008374;
z-index: 1;
font-family: inherit;
font-weight: 500;
}

.btn span {
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
background: transparent;
z-index: -1;
border: 1px solid #008374;
}

.btn span::before {
content: "";
display: block;
position: absolute;
width: 8%;
height: 500%;
background: white;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) rotate(-60deg);
transition: all 0.3s;
}

.btn:hover span::before {
transform: translate(-50%, -50%) rotate(-90deg);
width: 100%;
background: #008374;
}

.btn:hover {
color: white;
}

.btn:active span::before {
background: #008374;
} */
.container_pagination{
/* border: 1px solid red; */
width: auto;
text-align: end;
/* height: 50px; */
display: flex;
align-items: center;
justify-content: flex-end;
padding: 10px;
box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
margin: 5px;

}

</style>