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
  </div> 
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header-T.vue'
import Banner from '@/components/treinamento-components/Banner-T.vue'
import Sobre from '@/components/treinamento-components/Sobre-T.vue'
import SobreTreinamento from '@/components/treinamento-components/SobreTreinamento-T.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Banner,
    Sobre,
    SobreTreinamento
  }
}
</script>
