<template>
  <RouterView />
  <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</template>
<script >
  import AOS from "aos/dist/aos"
// import "@/assets/css/style.css"
// import "@/assets/vendor/bootstrap/css/bootstrap.min.css"
// import "@/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "@/assets/vendor/aos/aos.css"
import "aos/dist/aos.css"
// import "@/assets/vendor/glightbox/css/glightbox.min.css"
// import "@/assets/vendor/swiper/swiper-bundle.min.css"
import "@/assets/css/main.css"
// import "@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
// import "@/assets/vendor/glightbox/js/glightbox.min.js"
// import "@/assets/vendor/purecounter/purecounter_vanilla.js"
// import "@/assets/vendor/swiper/swiper-bundle.min.js"
//  import  "@/assets/vendor/aos/aos.js"

// import "@/assets/vendor/isotope-layout/isotope.pkgd.min.js"
import "@/assets/vendor/php-email-form/validate.js"
import "@/assets/js/main.js"
// import "@/assets/js/app.js"



  export default {
    name:'App',
  created() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  },
  watch: {
    $route(to, ){
      const name = to.name.toLowerCase()
      const title = name === 'formation'
        ? `${name} (${to.href.split('/')[2].toLowerCase()})`
        : name
      document.title = `dnpmecl - ${title}`

      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
}

</script>
