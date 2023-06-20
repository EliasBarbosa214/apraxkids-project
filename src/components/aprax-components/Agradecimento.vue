<script>
export default {
  setup() {},
};
</script>

<template>
  <section class="bg-white mt-20 md:mt-0 container mx-auto">
    <div>
      <h2
        class="text-2xl text-green-600 sm:text-4xl lg:text-5xl"
        style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2)"
      >
        <span>Agradecimentos a</span> <br />
        <span
          class="text-3xl sm:text-5xl lg:text-7xl text-blue-nuvem"
          style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2)"
          >Stefanie Garcia</span
        >
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3">
      <div class="px-10 py-2 mx-auto lg:hidden">
        <img src="../../assets/img/fotoagradecimento.png" alt="" />
      </div>
      <div class="lg:col-span-2 centralizarImagem">
        <div class="p-10 text-justify">
          <p>
            Escrevo esta mensagem para expressar meu profundo agradecimento por
            toda a ajuda profissional que você prestou em nosso trabalho. Suas
            contribuições foram inestimáveis e fizeram uma diferença
            significativa em nosso projeto. <br /><br>

            Sua dedicação, experiência e habilidades foram evidentes em cada
            etapa do processo. Sua disposição em compartilhar seu conhecimento e
            orientação foi fundamental para o sucesso do nosso trabalho.
            Gostaria de ressaltar o quanto apreciei sua paciência e seu
            compromisso em me explicar conceitos complexos de forma clara e
            compreensível. Sua capacidade de simplificar informações técnicas
            foi fundamental para o meu aprendizado
          </p>
        </div>
      </div>
      <div class="px-10 py-2 mx-auto hidden lg:block">
        <img
          src="../../assets/img/fotoagradecimento.png"
          alt=""
          class="rounded-full"
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
