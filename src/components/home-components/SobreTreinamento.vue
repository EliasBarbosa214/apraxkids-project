


<template>
  <section class="h-screen bg-cover bg-image">
  <div class="lg:flex h-full w-full items-center justify-center container mx-auto px-8">
    <div class=" text-center">
      <div>
      <h2 class="text-2xl text-blue-nuvem sm:text-4xl lg:text-5xl" style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);"><span >Treinamento de</span> <br> <span class="text-3xl  sm:text-5xl lg:text-7xl text-green-600" style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4);">Libras</span></h2>
    </div>

      <p class="mt-6 lg:text-xl text-white p-4 border-2 border-black rounded bg-blue-nuvem" style="text-shadow: 4px 2px 3px rgba(0,0,0,0.1)">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae dolore, provident repellat sequi dicta blanditiis inventore enim officiis nihil doloremque fuga dolor aliquam id facilis, numquam sapiente, omnis assumenda voluptate!</p>


    <div class="pt-10 mx-auto">
        <img src="../../assets/img/Libras.png" alt="" class="mx-auto">
      </div>
    </div>
  </div>
</section>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');

.bg-image {
    background-image: url('../../assets/img/fundo-nuvem-invertido.png');
    background-position-y: 0vh;
    background-repeat: no-repeat;
}

@media(max-height: 500px) {
    .bg-image {
        background-position-y: 0vh;
    }
}



section {
    font-family: 'Poppins' ,Arial, Helvetica, sans-serif;
}
</style>
