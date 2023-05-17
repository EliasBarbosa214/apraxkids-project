<script>
export default {
  setup() {},
};
</script>

<template>
  <section class="bg-white mt-20 md:mt-0 container mx-auto">
    <div>
      <h2 class="text-2xl text-green-600 sm:text-4xl lg:text-5xl" style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4);"><span >Sobre a</span> <br> <img src="../../assets/img/logo-azul.png" alt="" class="mx-auto"></h2>
    </div>
    
    <div class="grid grid-cols-1  lg:grid-cols-3">
      <div class="px-10 py-2 mx-auto lg:hidden">
        <img src="../../assets/img/Apraxia.png" alt="">
      </div>
      <div class="lg:col-span-2 centralizarImagem">
        <div class="p-10 text-justify">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sit quas ut explicabo voluptatum possimus? In iure exercitationem eaque ut, ipsum a consequatur molestiae atque quasi alias ea provident. Culpa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aspernatur perferendis corporis tempora qui quo, neque similique autem dignissimos itaque nihil exercitationem possimus sapiente libero dolore aliquid blanditiis est consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit beatae officiis, et ipsum libero minus eos fugiat non exercitationem accusantium dolorum voluptatibus asperiores consectetur doloribus animi possimus ducimus delectus. Obcaecati.
          </p>
        </div>
      </div>
      <div class="px-10 py-2 mx-auto  hidden lg:block">
        <img src="../../assets/img/Apraxia.png" alt="">
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
