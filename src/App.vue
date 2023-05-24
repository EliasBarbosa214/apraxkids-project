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

h2, p {
    font-family: 'Poppins' ,Arial, Helvetica, sans-serif;
    
}

.text-blue-nuvem {
  color: #67B3E5;
}

.text-green {
  color: rgba(144, 238, 144, 1);
}

.bg-blue-nuvem {
    background-color: #67B3E5;
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


.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}

.bg-image {
    background-image: url('../src/assets/img/fundo-nuvem.png');
    background-position-y: -40vh;
    background-repeat: no-repeat;
}
</style>
