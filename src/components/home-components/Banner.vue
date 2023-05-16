


<template>
  <section class="h-96 md:h-screen bg-cover bg-image">
  <div class="flex h-full w-full items-center justify-center container mx-auto px-8">
    <div class="max-w-2xl text-center">
      <h1 class="text-3xl  sm:text-5xl font-bold capitalize tracking-widest text-white lg:text-7xl"><span style="text-shadow: 10px 10px 10px rgba(0,0,0,0.4)">ApraxKids</span></h1>

      <p class="mt-6 lg:text-3xl text-white p-4 border-2 border-black rounded bg-blue-nuvem" style="text-shadow: 4px 2px 3px rgba(0,0,0,0.1)">You can subscribe to our newsletter, and let you know when we are back</p>

    </div>
  </div>
</section>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');

.bg-image {
    background-image: url('../../assets/img/fundo-nuvem.png');
    background-position-y: -40vh;
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
