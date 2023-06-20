<script>
export default {
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
  <section class="">
    <div class="" id="passo-a-passo">
      <div
        class="bg-cover container mx-auto bg-center 2xl:w-1/2 2xl:m-auto h-auto px-10 object-fill"
      >
        <div class="text-center pt-10">
          <a class="centralizarImagem mb-6">
            <img
              src="../../assets/img/logo-azul.png"
              class="mr-3"
              alt="Logo"
              width="30%"
            />
          </a>
          <p class="text-6xl font-bold mb-8">
            <span class="normal-case underline text-green-600"
              >VENHAM CONHECER O ABECEDÁRIO</span
            >
          </p>
          <p class="text-xl mb-2 leading-none">
            Informados para conseguir falar a determinada palavra que
            <br />
            esteja abaixo ou informada no vídeo.
          </p>
        </div>
        <br />
        <div>

        <div class="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <section class="flex  p-10 justify-center items-start">
              <button
                onclick="document.getElementById('myModal').showModal()"
                id="btn"
                class="rounded-md px-12 py-4 text-2xl bg-image border-2 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]"
              >
                Palavra <br />
                <span class="text-2xl font-bold"  style="text-shadow: 10px 5px 10px rgba(0,0,0,0.2)">FOME</span>
              </button>
            </section>

            <dialog
              id="myModal"
              class="h-auto w-11/12 p-5 bg-image bg-cover rounded-md"
            >
              <div class="flex flex-col w-full h-auto">
                <div class="flex w-full h-auto justify-center items-center">
                  <div
                    class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold"
                  ></div>
                  <div
                    onclick="document.getElementById('myModal').close();"
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
                        class="text-3xl sm:text-5xl lg:text-7xl text-white"
                        style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4)"
                        >FOME</span
                      >
                    </h2>
                  </div>
                  <!--Header End-->
                </div>
                <!-- Modal Content-->
                <div
                  class="flex w-2/3 mx-auto h-auto py-2 px-2 justify-center items-center bg-white rounded text-center text-gray-500"
                >
                  <video
                    class="shadow-lg"
                    loop
                    controls
                    poster="../../assets/img/palavras/fome.png"
                    style="width: 3000px"
                  >
                    <source
                      src="../../assets/mp4/ApraxKidsTreinamentos.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <!-- End of Modal Content-->
              </div>
            </dialog>
          </div>

          <!--  -->

          <div>
            <section class="flex  p-10 justify-center items-start">
              <button
                onclick="document.getElementById('myModal').showModal()"
                id="btn"
             class="rounded-md px-12 py-4 text-2xl bg-image border-2 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]"
              >
                Palavra <br />
                <span class="text-2xl font-bold"  style="text-shadow: 10px 5px 10px rgba(0,0,0,0.2)">ÁGUA</span>
              </button>
            </section>

            <dialog
              id="myModal"
              class="h-auto w-11/12 p-5 bg-image bg-cover rounded-md"
            >
              <div class="flex flex-col w-full h-auto">
                <div class="flex w-full h-auto justify-center items-center">
                  <div
                    class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold"
                  ></div>
                  <div
                    onclick="document.getElementById('myModal').close();"
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
                        class="text-3xl sm:text-5xl lg:text-7xl text-white"
                        style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4)"
                        >FOME</span
                      >
                    </h2>
                  </div>
                  <!--Header End-->
                </div>
                <!-- Modal Content-->
                <div
                  class="flex w-2/3 mx-auto h-auto py-2 px-2 justify-center items-center bg-white rounded text-center text-gray-500"
                >
                  <video
                    class="shadow-lg"
                    loop
                    controls
                    poster="../../assets/img/palavras/fome.png"
                    style="width: 3000px"
                  >
                    <source
                      src="../../assets/mp4/ApraxKidsTreinamentos.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <!-- End of Modal Content-->
              </div>
            </dialog>
          </div>

          <!--  -->

          <div>
            <section class="flex  p-10 justify-center items-start">
              <button
                onclick="document.getElementById('myModal').showModal()"
                id="btn"
                 class="rounded-md px-12 py-4 text-2xl bg-image border-2 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]"
              >
                Palavra <br />
                <span class="text-2xl font-bold"  style="text-shadow: 10px 5px 10px rgba(0,0,0,0.2)">BRINCAR</span>
              </button>
            </section>

            <dialog
              id="myModal"
              class="h-auto w-11/12 p-5 bg-image bg-cover rounded-md"
            >
              <div class="flex flex-col w-full h-auto">
                <div class="flex w-full h-auto justify-center items-center">
                  <div
                    class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold"
                  ></div>
                  <div
                    onclick="document.getElementById('myModal').close();"
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
                        class="text-3xl sm:text-5xl lg:text-7xl text-white"
                        style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4)"
                        >FOME</span
                      >
                    </h2>
                  </div>
                  <!--Header End-->
                </div>
                <!-- Modal Content-->
                <div
                  class="flex w-2/3 mx-auto h-auto py-2 px-2 justify-center items-center bg-white rounded text-center text-gray-500"
                >
                  <video
                    class="shadow-lg"
                    loop
                    controls
                    poster="../../assets/img/palavras/fome.png"
                    style="width: 3000px"
                  >
                    <source
                      src="../../assets/mp4/ApraxKidsTreinamentos.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <!-- End of Modal Content-->
              </div>
            </dialog>
          </div>

          <!--  -->


          <div>
            <section class="flex  p-10 justify-center items-start">
              <button
                onclick="document.getElementById('myModal').showModal()"
                id="btn"
                 class="rounded-md px-12 py-4 text-2xl bg-image border-2 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]"
              >
                Palavra <br />
                <span class="text-2xl font-bold"  style="text-shadow: 10px 5px 10px rgba(0,0,0,0.2)">CASA</span>
              </button>
            </section>

            <dialog
              id="myModal"
              class="h-auto w-11/12 p-5 bg-image bg-cover rounded-md"
            >
              <div class="flex flex-col w-full h-auto">
                <div class="flex w-full h-auto justify-center items-center">
                  <div
                    class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold"
                  ></div>
                  <div
                    onclick="document.getElementById('myModal').close();"
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
                        class="text-3xl sm:text-5xl lg:text-7xl text-white"
                        style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4)"
                        >FOME</span
                      >
                    </h2>
                  </div>
                  <!--Header End-->
                </div>
                <!-- Modal Content-->
                <div
                  class="flex w-2/3 mx-auto h-auto py-2 px-2 justify-center items-center bg-white rounded text-center text-gray-500"
                >
                  <video
                    class="shadow-lg"
                    loop
                    controls
                    poster="../../assets/img/palavras/fome.png"
                    style="width: 3000px"
                  >
                    <source
                      src="../../assets/mp4/ApraxKidsTreinamentos.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <!-- End of Modal Content-->
              </div>
            </dialog>
          </div>

          <!--  -->

        </div>
        <div class="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <section class="flex  p-10 justify-center items-start">
              <button
                onclick="document.getElementById('myModal').showModal()"
                id="btn"
                class="rounded-md px-12 py-4 text-2xl bg-image border-2 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]"
              >
                Palavra <br />
                <span class="text-2xl font-bold"  style="text-shadow: 10px 5px 10px rgba(0,0,0,0.2)">MAMÃE</span>
              </button>
            </section>

            <dialog
              id="myModal"
              class="h-auto w-11/12 p-5 bg-image bg-cover rounded-md"
            >
              <div class="flex flex-col w-full h-auto">
                <div class="flex w-full h-auto justify-center items-center">
                  <div
                    class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold"
                  ></div>
                  <div
                    onclick="document.getElementById('myModal').close();"
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
                        class="text-3xl sm:text-5xl lg:text-7xl text-white"
                        style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4)"
                        >FOME</span
                      >
                    </h2>
                  </div>
                  <!--Header End-->
                </div>
                <!-- Modal Content-->
                <div
                  class="flex w-2/3 mx-auto h-auto py-2 px-2 justify-center items-center bg-white rounded text-center text-gray-500"
                >
                  <video
                    class="shadow-lg"
                    loop
                    controls
                    poster="../../assets/img/palavras/fome.png"
                    style="width: 3000px"
                  >
                    <source
                      src="../../assets/mp4/ApraxKidsTreinamentos.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <!-- End of Modal Content-->
              </div>
            </dialog>
          </div>

          <!--  -->

          <div>
            <section class="flex  p-10 justify-center items-start">
              <button
                onclick="document.getElementById('myModal').showModal()"
                id="btn"
             class="rounded-md px-12 py-4 text-2xl bg-image border-2 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]"
              >
                Palavra <br />
                <span class="text-2xl font-bold"  style="text-shadow: 10px 5px 10px rgba(0,0,0,0.2)">AJUDA</span>
              </button>
            </section>

            <dialog
              id="myModal"
              class="h-auto w-11/12 p-5 bg-image bg-cover rounded-md"
            >
              <div class="flex flex-col w-full h-auto">
                <div class="flex w-full h-auto justify-center items-center">
                  <div
                    class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold"
                  ></div>
                  <div
                    onclick="document.getElementById('myModal').close();"
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
                        class="text-3xl sm:text-5xl lg:text-7xl text-white"
                        style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4)"
                        >FOME</span
                      >
                    </h2>
                  </div>
                  <!--Header End-->
                </div>
                <!-- Modal Content-->
                <div
                  class="flex w-2/3 mx-auto h-auto py-2 px-2 justify-center items-center bg-white rounded text-center text-gray-500"
                >
                  <video
                    class="shadow-lg"
                    loop
                    controls
                    poster="../../assets/img/palavras/fome.png"
                    style="width: 3000px"
                  >
                    <source
                      src="../../assets/mp4/ApraxKidsTreinamentos.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <!-- End of Modal Content-->
              </div>
            </dialog>
          </div>

          <!--  -->

          <div>
            <section class="flex  p-10 justify-center items-start">
              <button
                onclick="document.getElementById('myModal').showModal()"
                id="btn"
                 class="rounded-md px-12 py-4 text-2xl bg-image border-2 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]"
              >
                Palavra <br />
                <span class="text-2xl font-bold"  style="text-shadow: 10px 5px 10px rgba(0,0,0,0.2)">PAPAI</span>
              </button>
            </section>

            <dialog
              id="myModal"
              class="h-auto w-11/12 p-5 bg-image bg-cover rounded-md"
            >
              <div class="flex flex-col w-full h-auto">
                <div class="flex w-full h-auto justify-center items-center">
                  <div
                    class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold"
                  ></div>
                  <div
                    onclick="document.getElementById('myModal').close();"
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
                        class="text-3xl sm:text-5xl lg:text-7xl text-white"
                        style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4)"
                        >FOME</span
                      >
                    </h2>
                  </div>
                  <!--Header End-->
                </div>
                <!-- Modal Content-->
                <div
                  class="flex w-2/3 mx-auto h-auto py-2 px-2 justify-center items-center bg-white rounded text-center text-gray-500"
                >
                  <video
                    class="shadow-lg"
                    loop
                    controls
                    poster="../../assets/img/palavras/fome.png"
                    style="width: 3000px"
                  >
                    <source
                      src="../../assets/mp4/ApraxKidsTreinamentos.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <!-- End of Modal Content-->
              </div>
            </dialog>
          </div>

          <!--  -->


          <div>
            <section class="flex  p-10 justify-center items-start">
              <button
                onclick="document.getElementById('myModal').showModal()"
                id="btn"
                 class="rounded-md px-12 py-4 text-2xl bg-image border-2 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]"
              >
                Palavra <br />
                <span class="text-2xl font-bold"  style="text-shadow: 10px 5px 10px rgba(0,0,0,0.2)">DOR</span>
              </button>
            </section>

            <dialog
              id="myModal"
              class="h-auto w-11/12 p-5 bg-image bg-cover rounded-md"
            >
              <div class="flex flex-col w-full h-auto">
                <div class="flex w-full h-auto justify-center items-center">
                  <div
                    class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold"
                  ></div>
                  <div
                    onclick="document.getElementById('myModal').close();"
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
                        class="text-3xl sm:text-5xl lg:text-7xl text-white"
                        style="text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.4)"
                        >FOME</span
                      >
                    </h2>
                  </div>
                  <!--Header End-->
                </div>
                <!-- Modal Content-->
                <div
                  class="flex w-2/3 mx-auto h-auto py-2 px-2 justify-center items-center bg-white rounded text-center text-gray-500"
                >
                  <video
                    class="shadow-lg"
                    loop
                    controls
                    poster="../../assets/img/palavras/fome.png"
                    style="width: 3000px"
                  >
                    <source
                      src="../../assets/mp4/ApraxKidsTreinamentos.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <!-- End of Modal Content-->
              </div>
            </dialog>
          </div>

          <!--  -->

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
