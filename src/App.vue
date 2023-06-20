<script>
import Footer from "./components/Footer.vue";
export default {
  components: {
    Footer,
  },

  data() {
    return {
      isOpen: true,
    };
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    },
  },

  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<template>
  <div>
    <router-view />

    <section class="flex justify-center items-start">
      <div class="bottom-0 right-0  fixed rounded" style="z-index: 80">
        <div class="flex items-center justify-center">
          <div class="m-5">
            <button
              class="flex p-2.5 bg-green-600 rounded-xl hover:rounded-3xl hover:bg-green-800 transition-all duration-300 text-white"
              onclick="document.getElementById('myModalDoe').showModal()"
              id="btndoe"
            >
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <dialog
      id="myModalDoe"
      class="h-auto w-11/12 p-5 bg-image bg-cover rounded-md"
    >
      <div class="flex flex-col w-full h-auto">
        <div class="flex w-full h-auto justify-center items-center">
          <div
            class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold"
          ></div>
          <div
            onclick="document.getElementById('myModalDoe').close();"
            class="flex w-1/12 h-auto justify-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </div>

        <!-- Header -->
        <div class="flex w-full h-auto justify-center items-center">
          <div
            class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold"
          >
            <h2
              class="text-2xl text-yellow-400 sm:text-4xl lg:text-5xl"
              style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1)"
            >
              <span>ApraxKids</span> <br />
              <span
                class="text-xl lg:text-2xl text-white"
                style="text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2)"
                >Doe qualquer valor que deseje para que possamos melhorar e
                continuar nessa caminhada!
              </span>
            </h2>
          </div>
          <!--Header End-->
        </div>
        <!-- Modal Content-->
        <div
          class="flex w-2/3 mx-auto h-auto py-2 px-2 justify-center items-center rounded text-center text-gray-500"
        >
          <img src="./assets/img/QR_CODE.png" alt="" class="h-80 bg-white" />
        </div>
        <!-- End of Modal Content-->
      </div>
    </dialog>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #fff;
}

h2,
p {
  font-family: "Poppins", Arial, Helvetica, sans-serif;
}

.text-blue-nuvem {
  color: #67b3e5;
}

.text-green {
  color: rgba(144, 238, 144, 1);
}

.bg-blue-nuvem {
  background-color: #67b3e5;
}

.bg-papel1 {
  background-image: url("./assets/img/fundo-papel.png");
}

.bg-papel2 {
  background-image: url("./assets/img/fundo-papel-escuro.png");
}

.bg-papel3 {
  background-image: url("./assets/img/fundo-papel-claro1.png");
}

.bg-mao {
  background-image: url("./assets/img/fundo-treinamento.png");
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}

.bg-image {
  background-image: url("../src/assets/img/fundo-nuvem.png");
  background-position-y: -40vh;
  background-repeat: no-repeat;
}

.centralizarImagem {
  display: flex;
  display: -webkit-flex; /* Garante compatibilidade com navegador Safari. */

  justify-content: center;
  align-items: center;
}

dialog[open] {
  animation: appear 0.15s cubic-bezier(0, 1.8, 1, 1.8);
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
