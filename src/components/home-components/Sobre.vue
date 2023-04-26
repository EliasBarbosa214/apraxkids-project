<script>
export default {
  setup() {},
};
</script>

<template>
  <section>
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="bg-papel1 centralizarImagem py-10">
        <img
          src="../../assets/img/baloes.png"
          alt="Alguma Imagem"
          width="400"
          height="190"
          class="transition duration-300 animate-pulse hover:-rotate-12"
        />
      </div>
      <div class="bg-papel2">
        <div
          class="bg-cover bg-center 2xl:w-1/2 2xl:m-auto h-auto text-white py-24 px-10 object-fill bg-image"
        >
          <div class="text-center">
            <p class="font-bold text-sm uppercase">Conheça o</p>
            <p class="text-7xl font-bold mb-8">
              <span class="normal-case underline">ApraxKids</span>
            </p>
            <p class="text-xl mb-2 leading-none">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              odio, unde nostrum quo, atque iure voluptatum possimus itaque nemo
              eius aliquam, rem error quis fugiat deleniti magnam facilis
              consequatur! Omnis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <p class="text-xl leading-none">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              odio, unde nostrum quo, atque iure voluptatum possimus itaque nemo
              eius aliquam, rem error quis fugiat deleniti magnam facilis
              consequatur! Omnis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <!-- <a href="#" class="transition duration-300 bg-amber-950 bg-opacity-80 hover:bg-opacity-40 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-amber-950">Começar!</a> -->
          </div>
        </div>
      </div>
    </div>

    <!-- VERSÃO MOBILE -->

    <div class="grid lg:hidden grid-cols-1 lg:grid-cols-2">
      <div class="bg-papel1 centralizarImagem pt-10 mb-0">
        <img
          src="../../assets/img/pessoas.png"
          alt="Alguma Imagem"
          width="400"
          height="190"
          class="transition duration-300 animate-pulse mt-10"
        />
      </div>

      <div class="bg-papel2">
        <div
          class="bg-cover bg-center h-auto text-white pt-24 pb-10 px-10 object-fill bg-image"
        >
          <div class="text-center">
            <p class="font-bold text-sm uppercase">Ajude o ApraxKids a</p>
            <p class="text-7xl font-bold mb-8">
              <span class="normal-case underline">Continuar</span>
            </p>
            <p class="text-xl mb-10 leading-none">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              odio, unde nostrum quo, atque iure voluptatum possimus itaque nemo
              eius aliquam, rem error quis fugiat deleniti magnam facilis
              consequatur! Omnis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <a
              href="#"
              class="transition duration-300 bg-amber-950 bg-opacity-80 hover:bg-opacity-40 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-amber-950"
              >Começar!</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- VERSÃO PC -->
    <div class="hidden lg:grid grid-cols-1 lg:grid-cols-2">
      <div class="bg-papel2">
        <div
          class="bg-cover bg-center  h-auto text-white pt-24 px-10 object-fill bg-image"
        >
          <div class="text-center">
            <p class="font-bold text-sm uppercase">Ajude o ApraxKids a</p>
            <p class="text-7xl font-bold mb-8">
              <span class="normal-case underline">Continuar</span>
            </p>
            <p class="text-xl mb-10 leading-none">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              odio, unde nostrum quo, atque iure voluptatum possimus itaque nemo
              eius aliquam, rem error quis fugiat deleniti magnam facilis
              consequatur! Omnis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <a
              href="#"
              class="transition duration-300 bg-amber-950 bg-opacity-80 hover:bg-opacity-40 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-amber-950"
              >Começar!</a
            >
          </div>
        </div>
      </div>

      <div class="bg-papel1 centralizarImagem pt-10 mb-0">
        <img
          src="../../assets/img/pessoas.png"
          alt="Alguma Imagem"
          width="400"
          height="190"
          class="transition duration-300 animate-pulse mt-10"
        />
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
