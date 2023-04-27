<script>

import Footer from './components/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>

<template>
<div>
    <router-view/>
  <Footer/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #cecece;
}

.bg-papel1 {
  background-image: url('./assets/img/fundo-papel.png');
}

.bg-papel2 {
  background-image: url('./assets/img/fundo-papel-escuro.png');
}

.bg-papel3 {
  background-image: url('./assets/img/fundo-papel-claro1.png');
}

.bg-mao {
  background-image: url('./assets/img/fundo-treinamento.png');
}
</style>
