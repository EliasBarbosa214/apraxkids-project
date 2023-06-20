<template>
  <div
    class="mx-auto w-full bottom-0 right-0 fixed rounded"
    style="z-index: 9999px"
  >
    <div class="alert">
      <span class="closebtn" onclick="this.parentElement.style.display='none';"
        >&times;</span
      >

      <div class="text-sm font-normal max-w-full text-left flex-initial flex">
              <div slot="avatar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-alert-octagon w-5 h-5 mx-4 mt-2"
        >
          <polygon
            points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
          ></polygon>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <div>Atenção! Antes de iniciar o treinamento de Apraxia de Fala oferecido, saiba que caso não tenha nenhuma melhora, procurar um fonodiologo, enquanto isso,  poderá continuar com o <router-link class="font-bold hover:text-red-200 transition duration-200" to="/">Treinamento de Libras</router-link></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.alert {
  padding: 20px;
  background-color: #f44336; /* Red */
  color: white;
  /* margin-bottom: 15px; */
}

/* The close button */
.closebtn {
  margin-left: 15px;
  margin-top: 5px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

/* When moving the mouse over the close button */
.closebtn:hover {
  color: #cecece;
}

.alert {
  opacity: 1;
  transition: opacity 2s; /* 600ms to fade out */
}
</style>

<script>
// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function () {
    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function () {
      div.style.display = "none";
    }, 600);
  };
}
</script>
