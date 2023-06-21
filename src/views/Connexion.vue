<template>
    <div>
       <Navbar/>
       <div class="container-fluid vh-100 d-flex justify-content-center align-items-center " data-aos="zoom-out" data-aos-delay="100" style=" background: url('@/assets/img/about.jpg') ;">
        <div class="form-container">
	<p class="title">connexion</p>
    <p class="text-center">Indiquez votre adresse email et votre mot de passe pour vous connecter</p>
	<form class="form">
		<div class="input-group">
			<label for="username">Email <span class="text-danger">*</span></label>
			<input type="text" name="email" id="username" placeholder="">
		</div>
		<div class="input-group">
			<label for="password">Mot de passe <span class="text-danger">*</span></label>
			<input type="password" name="password" id="password" placeholder="">
		</div>
		<button class="sign">Se connecter</button>
	</form>
</div>
       
    </div>

    <footer id="footer" class="footer  ">
        <Footer />
    </footer>
    </div>
</template>

<script>
import Navbar from '../components/loyout/navbar.vue';
import Footer from '../components/loyout/footer.vue';
export default {
    name: 'DNPMECLConnexion',
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

<style lang="css" scoped>

.form-container {
  width: 400px;
  border-radius: 0.75rem;
  background-color: white;
  padding: 2rem;
  color: black;
  max-height: 550px;
  box-shadow:0px 2px 25px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.form {
  margin-top: 1.5rem;
}

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-group label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}

.input-group input {
  width: 100%;
  border-radius: 0.375rem !important;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;

  padding: 14px;
  color: rgb(3, 3, 5);
}

.input-group input:focus {
  border-color: var(--color-primary);
}

.forgot {
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--color-primary);
  margin: 8px 0 14px 0;
}

.forgot a,.signup a {
  color: rgba(243, 244, 246, 1);
  text-decoration: none;
  font-size: 14px;
}

.forgot a:hover, .signup a:hover {
  text-decoration: underline var(--color-primary);
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

.signup {
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
}

</style>