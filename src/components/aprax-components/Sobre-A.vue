<script>
export default {
  setup() {},
};
</script>

<template>
  <section class="bg-white mt-20 md:mt-0 container mx-auto">
    <div>
      <h2 class="text-2xl text-green-600 sm:text-4xl lg:text-5xl" style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);"><span >Como funcionará o Treinamento</span> <br> <span class="text-3xl  sm:text-5xl lg:text-7xl text-blue-nuvem" style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4);">de Apraxia de Fala</span><span class="animate-pulse">?</span></h2>
    </div>
    
    <br>

    <div>
      <div class="mx-auto px-96 p-10">
        <video
                    class="shadow-lg w-full h-full"
                    loop
                    controls
                  >
                    <source
                      src="../../assets/mp4/ApraxKidsTreinamentos.mp4"
                      type="video/mp4"
                    />
                  </video>
      </div>
      <div class="lg:col-span-2 centralizarImagem">
        <div class="py-10 px-40 text-center">
          <p class="text-xl">
              O treinamento de Libras será feito da seguinte forma, iniciará com
              passo a passos pequenos como alfabetos e palavras chaves como
              "Fome", "Comida", entre outras, assim podendo utilizar no dia a
              dia.
            </p>

            <br>


            <p class="text-xl">
              Conforme avança terá todo um entendimento para poder conversar no
              dia a dia sem precisar ter gastado e poderá se comunicar com seu
              parente de uma forma tranquila.
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
