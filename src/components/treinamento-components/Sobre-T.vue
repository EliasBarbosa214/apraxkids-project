<script>
export default {
  setup() {},
};
</script>

<template>
  <section class="bg-papel1">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="centralizarImagem py-10">
        <iframe width="560" height="460" src="https://www.youtube.com/embed/fYaXJXf60gU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
