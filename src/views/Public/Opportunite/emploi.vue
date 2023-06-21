<template>

    <div class="container_content" data-aos="fade-up">

        <div class="section-header ">
            <h2>JOURNAL DES OFFRES EMPLOI</h2>    
        </div>
        <div class="bar_search">

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

                    <P class="type">EMPLOI</P>
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

    };
},

mounted() {

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
.bar_search{

width: 100%;
height: 100px;
border: 1px solid red;
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
.type{

background-color: red;
    color: white;
    width: fit-content;
    padding: 5px 7px;
    border-radius: 8px;
    position: absolute;
    top: 115px;
    right: 70px;
}

</style>