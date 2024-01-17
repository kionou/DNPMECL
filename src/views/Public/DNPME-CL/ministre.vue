<template>
    <div id="banner-area" class="banner-area" >
     <div class="banner-text">
       <div class="container">
           <div class="row">
             <div class="col-lg-12">
                 <div class="banner-heading">
                   <h1 class="banner-title">mot de la ministre</h1>
                   <nav aria-label="breadcrumb">
                      
                     <ol class="breadcrumb justify-content-center">
                     <li class="breadcrumb-item"><a href="/">accueil</a></li>
                     <li class="breadcrumb-item"><a href="/dnpmecl/mot-de-la-dn">Dnpmecl</a></li>
                     <li class="breadcrumb-item active" aria-current="page">mot de la ministre</li>
                     </ol>
                   </nav>
                 </div>
             </div><!-- Col end -->
           </div><!-- Row end -->
       </div><!-- Container end -->
     </div><!-- Banner text end -->
        </div>
     <div style="padding: 70px 0;">
         <div class="container">
 
 <div class="row">
   <div class="col-lg-8">
       
     <p class="text-justify mb-4">Cher(e)s toutes et tous, <br><br>
     En dépit de l’austérité qui frappe durement l’économie nationale, à cause de la baisse continue des cours 
     de pétrole sur le marché international, ponctuées par la pandémie de la covid-19 , la Direction Générale 
     par son ministère de tutelle (le Ministère des Petites, Moyennes entreprises, de l’artisanat et du 
     secteur informel) tient à jouer pleinement son rôle de moteur dans l’économie par l’application 
     scrupuleuse des mesures de promotion et de développement des TPE et PME, contenues dans la loi n°46-2014 
     du 13 novembre 2014.</p>
 
     <p class="text-justify">En prenant ces dispositions, l’objectif est de créer des conditions propices au développement du secteur 
         des PME afin de donner un coup de pouce à la diversification de l’économie.</p>
 
     <p class="text-justify">Comme nous le savons, Les PME représentent la majeure partie de l'économie africaine car c’est son 
         épine dorsale, représentant plus de 90 % des entreprises et employant approximativement 60 % des 
         travailleurs, dont beaucoup de femmes et de jeunes.</p>
 
     <p class="text-justify">La PME est donc devenue une composante essentielle du tissu économique en contribuant à la création 
         d’emploi et de richesse et en impulsant la croissance économique. </p>
 
     <p class="text-justify">Tout cela dans un contexte de tension économique globale : la valeur totale des investissements dans de 
         nouveaux projets en Afrique au cours des trois premiers mois de 2020 a chuté de 58% par rapport à 2019, 
         selon la Conférence des Nations Unies sur le Commerce et le développement (CNUCED).</p>
 
     <p class="text-justify">Créer davantage des PME ainsi que les aider à se relier aux marchés internationaux permettrait de 
         s'assurer que les bénéfices du commerce soient plus équitablement répartis entre l'ensemble des salariés. 
         De plus, parce que les PME créent la majorité des nouveaux emplois dans la plupart des économies, elles 
         ont un rôle essentiel à jouer pour absorber les 900 millions d'Africains qui doivent venir gonfler la 
         population active d'ici 2050.</p>
 
     <p class="text-justify">La croissance économique future dépend donc en grande partie d'une plus grande productivité des PME.</p>
 
     <p class="text-justify"><i>« Notre ambition est qu'au terme de ce passage par ces moules de bonnes pratiques internationales se renforce sur le fond d’un épanouissement de l’initiative privée, la symbiose de la culture entrepreneuriale et managériale dans la société congolaise. Ainsi vont émerger les nouvelles générations d’entrepreneurs professionnels et modèles dotés d’une forte capacité d’entraînement »</i>, comme ne cesse de le marteler Madame Yvonne Adélaïde MOUGANY, Ministre des Petites et Moyennes Entreprises, de l’Artisanat et du Secteur Informel.</p>
 
     <p class="text-justify">En espérant que nous serions être à la hauteur de vos attentes ainsi que des défis énormes à relever, la direction générale des Petites et Moyennes Entreprises ainsi que toute son équipe vous invitent à entreprendre davantage et se tiennent à votre entière disposition.</p>
 
     <p><strong>RÉINVENTONS-NOUS !</strong></p>
     <p class="text-right">
       <!-- <img src="assets/images/signature-dg.png" class="img-fluid" width="30%;"> -->
     </p>
 
 
   </div><!-- Col end -->
 
   <div class="col-lg-4 mt-5 mt-lg-0">
 
     <div class="sidebar text-center sidebar-right">
       <img src="../../../assets/img/ministre1.jpeg" alt="Mme Fanta BERETE" class="img-fluid" style="border:2px solid #ededed; padding:3px;"><br>
       <h4>Mme Louopou LAMAH</h4>
       <hr style="width:10%;border:4px;height:4px;background:#056839;margin:0 auto;">
       <p>Ministre du commerce de l'industrie et des petites et moyennes entreprises </p>
     </div><!-- Sidebar end -->
 
   </div><!-- Col end -->
 
 </div><!-- Content row end -->
 
 </div>
     </div>
 </template>
 
 <script>
 export default {
     name: 'DNPMECLMot',
 
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
 
 
 /* debut banier */
 .banner-area {
     position: relative;
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     background-color: #266486;
     min-height: 250px;
     background-image: url('@/assets/img/img1.webp'); 
     box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 10%);
  
 }
 .banner-area:before {
     content: "";
     position: absolute;
     top: 0;
     bottom: 0;
     right: 0;
     left: 0;
     background: rgba(0, 0, 0, .45);
 }
 .breadcrumb-item , .breadcrumb-item a{
     color: #fff !important;
 }
 .banner-text {
     position: absolute;
     top: 50%;
     left: 0;
     right: 0;
     max-width: 1170px;
     margin: 0 auto;
     width: 100%;
     z-index: 1;
     /* -webkit-transform: translateY(-50%); */
     transform: translateY(-50%);
 }
 .banner-heading {
     text-align: center;
 }
 .banner-title {
     color: #fff;
     text-transform: uppercase;
     font-size: 58px;
     font-weight: 900;
 }
 .breadcrumb {
     padding: 0;
     background: none;
     font-weight: 700;
     text-transform: uppercase;
     font-size: 12px;
     color: #fff !important;
 }
 
 @media (max-width: 992px) {
     .banner-title {
     
     font-size: 40px;
     
 }
 }
 @media (max-width: 768px) {
     .banner-title {
     
     font-size: 30px;
     
 }
 }
 
 @media (max-width: 500px) {
     .banner-title {
     
     font-size: 25px;
     
 }
 }
 /* fin banier */
 
 </style>