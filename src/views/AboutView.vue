<template>
  <section >
    <Banner/>
    <Sobre/>
    <SobreTreinamento/>
  </section>  
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/treinamento-components/Banner-T.vue'
import Sobre from '@/components/treinamento-components/Sobre-T.vue'
import SobreTreinamento from '@/components/treinamento-components/SobreTreinamento-T.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Sobre,
    SobreTreinamento
  }
}
</script>
