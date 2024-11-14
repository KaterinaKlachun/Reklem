<template>

  <div id="app">
    <!-- Header общий для всех страниц -->
    <Header />

    <!-- Маршруты для разных страниц -->
    <router-view />
    
    <!-- Использование компонентов FAQ и ContactForm -->
    <FAQ />
    <ContactForm />

    <!-- Footer общий для всех страниц -->
    <Footer />
  </div>

</template>

<script>

// Импорт компонентов
import Header from './components/HeaderPage.vue';
import Footer from './components/Footer.vue';
import { defineAsyncComponent } from 'vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    FAQ: defineAsyncComponent(() => import('./components/FAQ.vue')),
    ContactForm: defineAsyncComponent(() => import('./components/ContactForm.vue')),
  },
};

</script>

<style lang="scss">

@font-face {
  font-family: "bold";
  src: url("@/assets/font/Inter-SemiBold.woff2") format("woff2"),
       url("@/assets/font/Inter-SemiBold.woff") format("woff");
}

@font-face {
  font-family: "medium";
  src: url("@/assets/font/Inter-Medium.woff2") format("woff2"),
       url("@/assets/font/Inter-Medium.woff") format("woff");
}

@font-face {
  font-family: "regular";
  src: url("@/assets/font/Inter-Regular.woff2") format("woff2"),
       url("@/assets/font/Inter-Regular.woff") format("woff");
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'regular';
  line-height: 1.6;
  background-color: white;
}

.wrapper {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
}

/* info */

.info{
  display: flex;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
}

.pagination{
  margin-left: 20%;
  margin-top: 2%;
}

.pagination a{
  text-decoration: none;
  font-family: medium;
  font-size: 1rem;
  color: black;
}

.cat{
  position: relative;
  margin-top: 15%;
  width: 450px;
}

.cat h1 span {
  text-decoration: underline 5px;
  text-decoration-color: #FFA630; /* Цвет подчеркивания */
}

.cat h1{
  font-family: bold;
  font-size: 36px;
}

.cat p{
  margin-top: 20%;
  font-family: regular;
  font-size: 1rem;
}

button {
  transition: transform 0.1s ease;
}

button:active {
  transform: scale(0.95);
}

</style>