<template>
  <section >
    <Banner/>
    <Sobre/>
    <SobreApraxia/>
    <SobreTreinamento/>
  </section>  
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/home-components/Banner.vue'
import Sobre from '@/components/home-components/Sobre.vue'
import SobreApraxia from '@/components/home-components/SobreApraxia.vue'
import SobreTreinamento from '@/components/home-components/SobreTreinamento.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Sobre,
    SobreApraxia,
    SobreTreinamento
  }
}
</script>
