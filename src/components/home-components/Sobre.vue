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

            <button onclick="document.getElementById('myModal').showModal()" id="btn" class="mb-6   text shadow-xl transition duration-300 bg-amber-950 bg-opacity-80  py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200  hover:text-amber-950">Nos ajude por aqui!</button>
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
  <button onclick="document.getElementById('myModal').showModal()" id="btn" class="mb-6   text shadow-xl transition duration-300 bg-amber-950 bg-opacity-80  py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200  hover:text-amber-950">Nos ajude por aqui!</button>

<dialog id="myModal" class="h-auto w-11/12 md:w-1/2 p-5  bg-white bg-opacity-80 rounded-md ">
        
   <div class="flex flex-col w-full h-auto ">
        <!-- Header -->
        <div class="flex w-full h-auto justify-center items-center">
          <div onclick="document.getElementById('myModal').close();" class="flex w-auto ml-auto h-auto justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x "><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </div>
          <!--Header End-->
        </div>
          <!-- Modal Content-->
           <div class="w-full h-auto py-10 px-2 justify-center items-center  rounded text-center">
            <div>
              <h2 class="font-black text-gray-800 md:text-3xl text-xl mb-6 ">Envie-nos uma Doação!</h2>
            </div>
             <div>
              <p class="md:text-lg text-gray-500 text-base">
              Doe qualquer valor que queira, de pouco em pouco podemos continuar a trilhar nosso caminho e continuar a ajudar muitas mais pessoas!
             </p>

             <br>

             <img src="../../assets/img/QR_CODE.png" alt="" class="w-2/3 bg-white rounded centralizarImagem mx-auto">
             </div>
          </div>
          <!-- End of Modal Content-->
          
          
          
        </div>
</dialog>
          </div>
        </div>
      </div>

      <div class="bg-papel1 centralizarImagem pt-10 mb-0">
        <img
          src="../../assets/img/pessoas.png"
          alt="Alguma Imagem"
          width="490"
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
