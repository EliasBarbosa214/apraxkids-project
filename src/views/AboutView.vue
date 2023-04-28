<template>
<div>
<Header/>
<main>
  <section >
    <Banner/>
    <Sobre/>
    <SobreTreinamento/>
  </section>  
  </main>
  <Footer/>
  </div> 
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header-T.vue'
import Footer from '@/components/Footer-T.vue'
import Banner from '@/components/treinamento-components/Banner-T.vue'
import Sobre from '@/components/treinamento-components/Sobre-T.vue'
import SobreTreinamento from '@/components/treinamento-components/SobreTreinamento-T.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Banner,
    Sobre,
    SobreTreinamento
  }
}
</script>
