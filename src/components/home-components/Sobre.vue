<script>
export default {
  setup() {},
};
</script>

<template>
  <section class="bg-white mt-20 md:mt-0 container mx-auto">
    <div>
      <h2 class="text-2xl text-green-600 sm:text-4xl lg:text-5xl" style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);"><span >Mas o que é</span> <br> <span class="text-3xl  sm:text-5xl lg:text-7xl text-blue-nuvem" style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4);">Apraxia de Fala</span><span class="animate-pulse">?</span></h2>
    </div>
    
    <div class="grid grid-cols-1  lg:grid-cols-3">
      <div class="p-10 mx-auto">
        <img src="../../assets/img/Apraxia.png" alt="">
      </div>
      <div class="lg:col-span-2 centralizarImagem">
        <div class="p-10 text-justify">
          <p class="text-xl">
            A apraxia da fala é causada por uma lesão no córtex cerebral responsável pelo controle motor da fala. Os sintomas incluem dificuldade em planejar e coordenar os movimentos necessário,

            <br>

            A apraxia da fala é descrita como um comprometimento da capacidade de programar os movimentos dos articuladores para fins de fala. Pacientes com apraxia da fala podem apresentar uma ampla variedade de sinais clínicos, dependendo da gravidade de seu comprometimento da fala e do padrão de sintomas afásicos associados.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

h2, p {
    font-family: 'Poppins' ,Arial, Helvetica, sans-serif;
    
}


.centralizarImagem {
  display: flex;
  display: -webkit-flex; /* Garante compatibilidade com navegador Safari. */

  justify-content: center;
  align-items: center;
}

  dialog[open] {
  animation: appear .15s cubic-bezier(1, 1.8, 1, 1.8);
}

  dialog::backdrop {
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(54, 54, 54, 0.5));
    backdrop-filter: blur(3px);
  }
  
 
@keyframes appear {
  from {
    opacity: 0;
    transform: translateX(-3rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
} 
</style>
