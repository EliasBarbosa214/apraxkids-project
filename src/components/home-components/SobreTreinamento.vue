<script>
export default {
  setup() {},
};
</script>

<template>
  <section class="">
    <div class="bg-papel1" id="treinamento-libras">
      <div
        class="bg-cover container mx-auto bg-center 2xl:w-1/2 2xl:m-auto h-auto text-white pt-6 px-10 object-fill bg-image"
      >
        <div class="text-center pt-10">
          <a class="centralizarImagem mb-6">
            <img
              src="../../assets/img/logo.png"
              class="mr-3"
              alt="Logo"
              width="150"
            />
          </a>
          <p class="text-6xl font-bold mb-8">
            <span class="normal-case underline">Treinamento de Libras</span>
          </p>
          <p class="text-xl mb-2 leading-none">
            O treinamento de libras da ApraxKids será uma forma de treinamento de forma rápida para que possa começar a se comunicar com seu parente de forma mais tranquila e dê rapidez.
          </p>
          <!-- <a href="#" class="transition duration-300 bg-amber-950 bg-opacity-80 hover:bg-opacity-40 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-amber-950">Começar!</a> -->
          <div class="mt-10">
            <router-link
            to="/treinamento-libras"
            class="transition duration-300 bg-amber-950 bg-opacity-80 hover:bg-opacity-40 py-4 px-8 text-white font-bold uppercase  text-xs rounded hover:bg-gray-200 hover:text-amber-950"
            >Começar!</router-link
          >
          </div>
        </div>
        <br />
        <div class="centralizarImagem pt-10 -ml-20 mb-0">
          <img
            src="../../assets/img/Libras.png"
            alt="Imagem da Freepik - Mulher falando em Libras"
            title="Imagem da Freepik - Mulher falando em Libras"
            width="800"
            height="190"
            class="transition duration-300 mt-10"
          />
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
