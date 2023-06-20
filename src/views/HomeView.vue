<template>
  <div>
    <Header />
    <main>
      <section>
        <Banner />
        <Sobre />
        <img src="../assets/img/retangulo.png" alt="" class="mx-auto mb-20" />
        <SobreApraxia />
        <br />
        <img src="../assets/img/retangulo.png" alt="" class="mx-auto mb-20" />
        <br />
        <SobreTreinamento class="mt-10 md:mt-40" />
        <!-- component -->
        
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/home-components/Banner.vue";
import Sobre from "@/components/home-components/Sobre.vue";
import SobreApraxia from "@/components/home-components/SobreApraxia.vue";
import SobreTreinamento from "@/components/home-components/SobreTreinamento.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
    Banner,
    Sobre,
    SobreApraxia,
    SobreTreinamento,
  },
};
</script>
