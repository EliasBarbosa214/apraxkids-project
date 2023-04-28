<script>
export default {

};
</script>

<template>
  <section class="bg-papel1">
    <div class="grid grid-cols-1 lg:grid-cols-2" id="ser-feito">
      <div  class="centralizarImagem py-20 bg-papel2">
        <video width="560"    controls class="h-full  rounded">
<source src="../../assets/mp4/ApraxKidsTreinamentos.mp4" type="video/mp4" />
        </video>
      </div>
      <div >
        <div
          class="bg-cover bg-center 2xl:w-1/2 2xl:m-auto h-auto text-white py-24 px-10 object-fill bg-image"
        >
          <div class="text-center">
            <p class="font-bold text-sm uppercase">Mas como o treinamento irá</p>
            <p class="text-7xl font-bold mb-8">
              <span class="normal-case underline">Ser Feito?</span>
            </p>
            <p class="text-xl mb-2 leading-none">
              O treinamento de Libras será feito da seguinte forma, iniciará com passo a passos pequenos como alfabetos e palavras chaves como "Fome", "Comida", entre outras, assim podendo utilizar no dia a dia.
            </p>
            <p class="text-xl leading-none">
              Conforme avança terá todo um entendimento para poder conversar no dia a dia sem precisar ter gastado e poderá se comunicar com seu parente de uma forma tranquila.
            </p>
            <!-- <a href="#" class="transition duration-300 bg-amber-950 bg-opacity-80 hover:bg-opacity-40 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-amber-950">Começar!</a> -->
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.centralizarImagem {
  display: flex;
  display: -webkit-flex; /* Garante compatibilidade com navegador Safari. */

  justify-content: center;
  align-items: center;
}
</style>
