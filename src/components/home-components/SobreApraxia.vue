<script>
export default {
  setup() {},
};
</script>

<template>
  <section>
    <div class="bg-papel3" id="sobre-oque">
      <div class="centralizarImagem pt-10">
        <img
          src="../../assets/img/Apraxia.png"
          alt="Alguma Imagem"
          width="400"
          height="190"
          class="transition duration-300"
        />
      </div>
      <div
        class="bg-cover container mx-auto bg-center 2xl:w-1/2 2xl:m-auto h-auto text-white pt-6 pb-24 px-10 object-fill bg-image"
      >
        <div class="text-center">
          <p class="font-bold text-sm uppercase">Mas o que</p>
          <p class="text-7xl font-bold mb-8">
            <span class="normal-case underline">Apraxia de Fala?</span>
          </p>
          <p class="text-xl mb-2 leading-none">
            Apraxia de Fala é a dificuldade de realizar movimentos motores,
            mesmo quando a pessoa tem capacidade e vontade de praticá-los.
          </p>
          <p class="text-xl leading-none">
            A apraxia é causada por doenças ou danos cerebrais. O cérebro não
            consegue realizar e instruir movimentos corretos para o corpo.
            Existe vários tipos de apraxia mas focaremos na Apraxia de Fala em
            que o cérebro tem dificuldade para lidar com os movimentos dos
            lábios, da mandíbula e da língua.
          </p>
          <!-- <a href="#" class="transition duration-300 bg-amber-950 bg-opacity-80 hover:bg-opacity-40 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-amber-950">Começar!</a> -->
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
