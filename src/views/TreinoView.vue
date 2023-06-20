<template>
<div>
<Header/>
<main>
  <section >
    <Banner/>
    <Sobre/>
    <img src="../assets/img/retangulo.png" alt="" class="mx-auto my-10">
    <Agradecimento/>
    <img src="../assets/img/retangulo.png" alt="" class="mx-auto mt-10">
    <SobreTreinamento />
  </section> 
  <Alert style="z-index: 999"/> 
  </main>
  <Footer style="z-index: 99"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header-A.vue'
import Footer from '@/components/Footer-A.vue'
import Banner from '@/components/aprax-components/Banner-A.vue'
import Sobre from '@/components/aprax-components/Sobre-A.vue'
import Agradecimento from '@/components/aprax-components/Agradecimento.vue'
import SobreTreinamento from '@/components/aprax-components/SobreTreinamento-A.vue'
import Alert from '@/components/aprax-components/Alert.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Banner,
    Sobre,
    Agradecimento,
    SobreTreinamento,
    Alert
  }
}
</script>
