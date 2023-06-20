<script>
export default {
  setup() {},
};
</script>

<template>
<footer id="contato" class="relative bg-papel2 pt-8 pb-6 ">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl fonat-semibold text-white font-bold">Siga nas nossas redes sociais!</h4>
        <h5 class="text-lg mt-0 mb-2 text-gray-200">
          Seguindo em nossas redes sociais poderá ajudar a crescermos e mais pessoas poderem encontrar ajuda para a Apraxia de Fala.
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
          <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-twitter"></i></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-facebook-square"></i></button>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-white text-sm font-semibold mb-2">Navegação:</span>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-gray-200 hover:text-white font-semibold block pb-2 text-sm" >Principal</a>
              </li>
              <li>
                <a href="#sobre" class="text-gray-200 hover:text-white font-semibold block pb-2 text-sm">Sobre</a>
              </li>
              <li>
                <a href="#sobre-oque" class="text-gray-200 hover:text-white font-semibold block pb-2 text-sm" >O que é?</a>
              </li>
              <li>
                <a href="#treinamento-libras" class="text-gray-200 hover:text-white font-semibold block pb-2 text-sm">Treinamento de Libras</a>
              </li>
              <li>
                <a href="#" class="text-gray-200 hover:text-white font-semibold block pb-2 text-sm">Treinamento de Apraxia de Fala</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>


    <hr class="my-6 border-white">

    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-white font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span> -  ApraxKids

        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<style scoped>
.bg-footer {
  background-image: url("../assets/img/bg-footer.png");
}
</style>
