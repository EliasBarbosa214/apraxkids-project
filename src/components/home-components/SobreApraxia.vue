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
        style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4)"
      >
        <span>Sobre a</span> <br />
        <img src="../../assets/img/logo-azul.png" alt="" class="mx-auto" />
      </h2>
    </div>

    <div class="">
      <div class="px-10 py-2 mx-auto">
        <img src="../../assets/img/Apraxia.png" alt=""  class="mx-auto h-96"/>
      </div>
      <div class="lg:col-span-2 centralizarImagem">
        <div class="p-10 text-center">
          <p>
            A ApraxKids é uma empresa inovadora que se dedica a desenvolver
            soluções tecnológicas avançadas para auxiliar no tratamento e no dia
            a dia das pessoas que sofrem com a apraxia da fala. A ApraxKids
            busca proporcionar uma abordagem abrangente e eficaz para superar as
            dificuldades associadas a essa condição.
            <br />
            A apraxia da fala é um distúrbio neurológico que afeta a capacidade
            de planejar e executar os movimentos necessários para falar
            corretamente. Pessoas com apraxia da fala enfrentam desafios
            significativos na comunicação verbal, o que pode impactar
            negativamente suas vidas pessoais.
            <br />
            Além disso, a ApraxKids oferece vídeos de fonoaudiologia, conectando
            os usuários com tecnicas especializadas no tratamento da apraxia da
            fala. Nosso site utiliza uma abordagem global, adaptada às
            necessidades do grande público em geral, para ajudá-los a
            desenvolver habilidades de fala mais claras e precisas. Se você ou
            alguém que você conhece está lidando com a apraxia da fala,
            convidamos você a conhecer a ApraxKids e descobrir como nossas
            soluções podem fazer a diferença. Juntos, podemos abrir novas
            possibilidades e promover a inclusão para todos.
          </p>
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
