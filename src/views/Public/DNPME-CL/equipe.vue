<template >
   
    <div id="banner-area" class="banner-area" >
    <div class="banner-text">
      <div class="container">
          <div class="row">
            <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">EQUIPE-DIRECTION</h1>
                  <nav aria-label="breadcrumb">
                      <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                        <li class="breadcrumb-item"><a href="/dnpmecl/formalisations">dnpmecl</a></li>
                        <li class="breadcrumb-item active" aria-current="page">equipe-direction</li>
                      </ol>
                  </nav>
                </div>
            </div><!-- Col end -->
          </div><!-- Row end -->
      </div><!-- Container end -->
    </div><!-- Banner text end -->
  </div>
  <div class="section-header ">
          <h2>EQUIPE DE LA DIRECTION</h2>
      </div>

  <div class="col-md-12">
            <div class="main-container fl-wrap fix-container-init">
                <!--post-related-->
                <div class="post-related fl-wrap" style="margin-top: 10px;margin-bottom: 20px;">
                    <div class=" section-title">
                        <h2>Les Directeurs de Cabinet, le Chef de Cabinet et les Conseillers du Ministre</h2>
                    </div>
                    <!-- post-related -->
                    <div class=" row">
                                                    <!-- 1  -->
                            <div class="item-related-equipe col-md-3 show-reg-form" style="height: 370px; cursor:pointer;">
                                <a ng-click="getEquipe(1)"><img src="@/assets/img/12.jpg" alt=""></a>
                                <div class="item-related_content fl-wrap" style="background-color: white !important;">
                                    <h3 class="srf_btn htact show-reg-form hover"><a ng-click="getEquipe(1)"> M                                            Adama SALL</a></h3>
                                    <h3>Directeur de cabinet</h3>
                                    <ul class="pwic_opt">
                                    </ul>
                                </div>
                            </div>
                            <!-- 1 end-->
                                                    <!-- 1  -->
                            <div class="item-related-equipe col-md-3 show-reg-form" style="height: 370px; cursor:pointer;">
                                <a ng-click="getEquipe(2)"><img src="@/assets/img/12.jpg" alt=""></a>
                                <div class="item-related_content fl-wrap" style="background-color: white !important;">
                                    <h3 class="srf_btn htact show-reg-form hover"><a ng-click="getEquipe(2)"> M                                            Yaya KEHO</a></h3>
                                    <h3>Directeur de Cabinet Adjoint</h3>
                                    <ul class="pwic_opt">
                                    </ul>
                                </div>
                            </div>
                            <!-- 1 end-->
                                                    <!-- 1  -->
                            <div class="item-related-equipe col-md-3 show-reg-form" style="height: 370px; cursor:pointer;">
                                <a ng-click="getEquipe(3)"><img src="@/assets/img/12.jpg" alt=""></a>
                                <div class="item-related_content fl-wrap" style="background-color: white !important;">
                                    <h3 class="srf_btn htact show-reg-form hover"><a ng-click="getEquipe(3)"> M                                            Soiliho GRAMBOUTE</a></h3>
                                    <h3>Chef de Cabinet</h3>
                                    <ul class="pwic_opt">
                                    </ul>
                                </div>
                            </div>
                            <!-- 1 end-->
                                                    <!-- 1  -->
                            <div class="item-related-equipe col-md-3 show-reg-form" style="height: 370px; cursor:pointer;">
                                <a ng-click="getEquipe(4)"><img src="@/assets/img/12.jpg" alt=""></a>
                                <div class="item-related_content fl-wrap" style="background-color: white !important;">
                                    <h3 class="srf_btn htact show-reg-form hover"><a ng-click="getEquipe(4)"> M                                            Paul Assémien KOUA</a></h3>
                                    <h3>Chef de la Cellule de Coordination de la Politique Fiscale (CCPF)</h3>
                                    <ul class="pwic_opt">
                                    </ul>
                                </div>
                            </div>
                            <!-- 1 end-->
                                               
                       
                                                    <!-- 1  -->
                            <!-- 1  -->
                        
                                            </div>
                </div>
                <!-- post-related  end-->
            </div>
</div>
   
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style lang="css" scoped>

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
.section-header {
  padding: 20px 0 !important;

}
.fl-wrap {
    /* float: left; */
    width: 100%;
    position: relative;
}

.section-title {
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    position: relative;
}

.section-title h2 {
    text-transform: uppercase !important;
}

.section-title h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #292929;
}

.item-related-equipe {
    margin-bottom: 20px;
    overflow: hidden;
    border: 1px solid #e5e8ed !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #21ab7f47 !important; */
}

a {
    text-decoration: none;
    position: relative;
    color: #000;
}

.item-related-equipe img {
    width: 205px;
    height: 220px;
}

.item-related_content {
    padding: 15px 20px;
    background: #f9f9f9;
    border: 1px solid #eee;
    border: none;
}

.item-related_content h3 {
    text-transform: uppercase !important;
}

.item-related h3, .item-related-equipe h3 {
    /* float: left; */
    width: 100%;
    font-weight: 600;
    font-size: 12px;
    padding-bottom: 4px;
    text-align: center;
}
.srf_btn, .search_btn {
    margin-left: 0;
    font-size: 14px;
    margin-top: 20px;
}
.show-cart, .srf_btn, .search_btn {
    float: right;
    font-size: 16px;
    /* color: #666; */
    color: #000;
    cursor: pointer;
    position: relative;
    width: 70px;
    margin-left: 24px;
    border-left: 1px solid #eee;
    text-align: center;
    box-sizing: border-box;
    font-weight: 600;
}

ol, ul {
    list-style: none;
}
    
</style>