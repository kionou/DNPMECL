<template>
    <div class="bloc-modale" v-if="revele"  data-aos="zoom-out"
      >
    <div class="overlay" v-on:click="toggleModale"></div>
    <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
    <div class="form-container">
	<p class="title">
    <img src="@/assets/img/success.png" alt="">
  </p>
    <p class="text-center"> 
      Félicitations ! Votre compte a été créé avec succès. Veuillez vous connecter pour commencer
       à utiliser notre plateforme. Bienvenue parmi nous !
      
    </p>
	
        
		<button class="sign" @click="$router.push({ path: '/connexion-mpme', })">Se connecter</button>
	
    </div> 
  </div>
  </template>
  
  <script>

  export default {
      name:'ComponentModal',
      props: ["revele", "toggleModale"],
      data() {
        return {
        }
      },
    
           
      methods: {
        async  submit(){
         
            },
       
        
      },
  
  }
  </script>
  
  <style lang="css" scoped>
  body{
  
  margin: 0;
  }
  
  .bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 10px;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.form-container {
  width: 510px;
  border-radius: 0.75rem;
  background-color: white;
  padding: 2rem;
  color: black;
  /* max-height: 100%; */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
  z-index: 100;

}
.title {
  display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  /* font-size: 1.5rem; */
  /* line-height: 2rem; */
  /* font-weight: 700; */
}

.title img{
  width: 90px;
  height: ç0px;

}

.sign {
  display: block;
  width: 100%;
  background-color: var(--color-secondary);
  padding: 0.75rem;
  text-align: center;
  color: black;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  margin-top: 50px;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}

.sign:hover{

border: 1px solid var(--color-secondary);
color: var(--color-secondary);
background-color: white;

}
 
  </style>

