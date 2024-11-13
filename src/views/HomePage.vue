<template>
  <div>
    <!-- Main Banner -->
    <section class="main-banner">
      <div class="txt">
        <h1>Планируете сделать <span>принт?</span><br>Вы пришли по адресу</h1>
        <p class="txt_banner">Reklem - только оптовая работа высокого качества с <br>
          индивидуальным подходом. Работаем с 2008 года.</p>
        <button class="catalog" @click="goToCatalog">Перейти в каталог</button>
      </div>
    </section>

    <!-- About Us -->
    <div class="wrapper">
      <section class="about">
        <div class="left">
          <h1><span>Пара слов</span> о нас,<br>
                производстве<br>
                и брендинге</h1>
            <p>В своём стремлении улучшить пользовательский<br>
                опыт мы упускаем, что ключевые особенности<br>
                структуры проекта.</p>
            <p>В своём стремлении улучшить пользовательский<br>
                опыт мы упускаем, что ключевые особенности<br>
                структуры проекта опыт мы упускаем, что<br>
                ключевые особенности структуры проекта.</p>
          <button class="company_button" @click="goToAbout">О компании</button>
        </div>
        <div class="right">
          <img src="@/assets/img/main/key_cup.svg" alt="">
        </div>
      </section>
    </div>
  </div>

  <!-- About Us 2 -->

  <div class="wrapper">

  <section class="about_2">
      <div class="card_about">
          <img src="@/assets/img/main/timer.svg" alt="">
          <p>Принт за 24 часа</p>
          <p id="opis">Некоторые заказы можем<br>
              произвести быстрее<br>
              суток</p>
      </div>
      <div class="card_about">
          <img src="@/assets/img/main/flash.svg" alt="">
          <p>Быстрая доставка</p>
          <p id="opis">Сотрудничаем с<br>
              быстрыми и надежными<br>
              службами</p>
      </div>
      <div class="card_about">
          <img src="@/assets/img/main/box.svg" alt="">
          <p>Только ОПТ</p>
          <p id="opis">Работаем на большие<br>
              объемы брендинга</p>
      </div>
  </section>

  </div>

  <!-- Popular Products -->
  
  <div class="wrapper">
    <div class="popular">
      <div class="txt_popular">
        <h1>Популярные и новые<br><span>товары</span></h1>
      </div>
      <div class="cards">
        <!-- Отображаем товары с помощью v-for -->
        <div
          class="card"
          v-for="(product, index) in randomProducts"
          :key="index"
        >
          <img :src="product.imgSrc" alt="" />
          <p class="product-name">{{ product.name }}</p>
          <div class="card_footer_catalog">
            <!-- Кнопка для перехода на страницу товара -->
            <button @click="goToProduct(product)">Выбрать вид</button>
            <p class="price">{{ product.price }} ₽</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Services -->

<div class="wrapper">

<section class="services">
    <h2>Популярные услуги</h2>

    <div class="service_cards">
        <div class="service_card">
            <img src="@/assets/img/main/gravir.svg" alt="">
            <p id="service_card_heading">Гравировка</p>
            <p>Нанесем на изделия логотип, рисунок или надпись</p>
            <div class="card_footer_service">
                <button>Подробнее <img src="@/assets/img/arrow_right.svg" alt=""> </button>
            </div>
        </div>
        <div class="service_card">
            <img src="@/assets/img/main/shlefov.svg" alt="">
            <p id="service_card_heading">Шелкография</p>
            <p>Изображения высоко качества на любых материалах</p>
            <div class="card_footer_service">
                <button>Подробнее <img src="@/assets/img/arrow_right.svg" alt=""> </button>
            </div>
        </div>
        <div class="service_card">
            <img src="@/assets/img/main/tisnen.svg" alt="">
            <p id="service_card_heading">Тиснение</p>
            <p>Нанесения рельефного рисунка</p>
            <div class="card_footer_service">
                <button>Подробнее <img src="@/assets/img/arrow_right.svg" alt=""> </button>
            </div>
        </div>
        <div class="service_card">
            <img src="@/assets/img/main/tampo.svg" alt="">
            <p id="service_card_heading">Тампопечать</p>
            <p>Перенос изображения с помощью силиконового валика</p>
            <div class="card_footer_service">
                <button>Подробнее <img src="@/assets/img/arrow_right.svg" alt=""> </button>
            </div>
        </div>
    </div>
</section>

</div>

<!-- categories -->

<div class="wrapper">

<div class="category">
    <div class="category_txt">
        <h1>Основные категории</h1>
        <button @click="goToCatalog" 
            @mouseover="changeImage('white')" 
            @mouseout="changeImage('green')">
      <img :src="arrowSrc" alt="arrow">
    </button>
    </div>
    <div class="category_icon">
        <div class="card_icon">
            <img src="@/assets/img/catalog/icon_krysh.svg" alt="">
            <p>Кружки</p>
        </div>
        <div class="card_icon">
            <img src="@/assets/img/catalog/icon_termos.svg" alt="">
            <p>Термосы</p>
        </div>
        <div class="card_icon">
            <img src="@/assets/img/catalog/icon_aksesyar.svg" alt="">
            <p>Аксессуары</p>
        </div>
        <div class="card_icon">
            <img src="@/assets/img/catalog/icon_kanc.svg" alt="">
            <p>Канцелярия</p>
        </div>
    </div>
</div>

</div>

<!-- reviews -->

<div class="company">
    <!-- Первая кнопка "Больше отзывов" -->
    <button class="button_reviews">Больше отзывов <img src="@/assets/img/main/review.svg" alt=""></button>

    <!-- Вторая кнопка "Подробнее" -->
    <button class="button_details" @click="goToPortfolio">Подробнее</button>
</div>

<!-- events -->

<div class="wrapper">
    <div class="events">
        <h1>Оставайтесь <span>в курсе </span><br>
            <span>событий</span>
        </h1>
        <div class="event">
            <div class="event1">
                <h1>Маски теперь в продаже</h1>
                <p>Принимая во внимание показатели успешности, синтетическое
                    тестирование способствует повышению качества анализа
                    существующих паттернов поведения. Противоположная точка
                    зрения подразумевает.</p>
            </div>
            <div class="event2">
                <h1>Обновление сайта и новое позиционирование</h1>
                <p>Мы вынуждены отталкиваться от того, что начало повседневной
                    работы по формированию позиции требует от нас анализа
                    направлений по формированию анализа прогрессивного развития.</p>
            </div>
        </div>
        <div class="button_container">
            <button @click="goToNews">Все новости<img src="@/assets/img/main/new.svg" alt=""></button>
        </div>
    </div>
</div>


</template>


<script>
export default {
  name: "MainPage", // Имя компонента
  data() {
    return {
      // Массив товаров с информацией о каждом
      products: [
        {name: "Бокал для айриш кофе", price: 214, imgSrc: require("@/assets/img/catalog/icon/1.svg") },
        {name: "Кружка «Sublime Color XL»", price: 324, imgSrc: require("@/assets/img/catalog/icon/2.svg") },
        {name: "Бокал для шампанского «Brut»", price: 664, imgSrc: require("@/assets/img/catalog/icon/3.svg") },
        {name: "Кружка «Cone»", price: 211, imgSrc:require ("@/assets/img/catalog/icon/4.svg") },
        {name: "Кофейная пара классической формы", price: 392, imgSrc:require ("@/assets/img/catalog/icon/5.svg") },
        {name: "Кофейная пара прямой формы", price: 392, imgSrc:require ("@/assets/img/catalog/icon/6.svg") },
        {name: "Кружка «Nancy Line»", price: 294, imgSrc: require("@/assets/img/catalog/icon/7.svg") },
        {name: "Кружка «Countryside S» ", price: 269, imgSrc: require("@/assets/img/catalog/icon/8.svg") },
        {name: "Кружка «Grain» из натуральных волокон", price: 478, imgSrc: require("@/assets/img/catalog/icon/9.svg") },
        {name: "Кружка «Good Day»", price: 235, imgSrc:require ("@/assets/img/catalog/icon/10.svg") },
        {name: "Кружка «Марго»", price: 145, imgSrc:require ("@/assets/img/catalog/icon/11.svg") },
        {name: "Кружка «Oreo»", price: 319, imgSrc: require("@/assets/img/catalog/icon/12.svg") },
        {name: "Кружка «Мерсер»", price: 340, imgSrc:require ("@/assets/img/catalog/icon/13.svg") },
        {name: "Кружка «Марко»", price: 274, imgSrc:require ("@/assets/img/catalog/icon/14.svg") },
        {name: "Кружка «Denpasar» с крышкой", price: 590, imgSrc:require ("@/assets/img/catalog/icon/15.svg") },
        {name: "Керамическая кружка «Pascal»", price: 1121, imgSrc: require("@/assets/img/catalog/icon/16.svg") },
        {name: "Вакуумная герметичная термокружка «Inter»", price: 600,  imgSrc:require ("@/assets/img/catalog/icon2/1.svg") },
        {name: "Вакуумная термокружка «Sense»", price: 700, imgSrc: require("@/assets/img/catalog/icon2/2.svg") },
        {name: "Вакуумная термокружка «Valhalla»", price: 700, imgSrc:require ("@/assets/img/catalog/icon2/3.svg") },
        {name: "Вакуумная термокружка c кнопкой «Waterline»", price: 700, imgSrc:require ("@/assets/img/catalog/icon2/4.svg") },
        {name: "Термокружка с медной изоляцией «Waterline»", price: 700, imgSrc:require ("@/assets/img/catalog/icon2/5.svg") },
        {name: "Вакуумная термокружка с кнопкой «Streamline»", price: 700, imgSrc:require ("@/assets/img/catalog/icon2/6.svg") },
        {name: "Вакуумная термокружка с кнопкой «Upgrade»", price: 700, imgSrc:require ("@/assets/img/catalog/icon2/7.svg") },
        {name: "Кружка с термоизоляцией «Silence»", price: 700, imgSrc: require("@/assets/img/catalog/icon2/8.svg") },
        {name: "Кружка с термоизоляцией треугольная", price: 700, imgSrc:require ("@/assets/img/catalog/icon2/9.svg") },
        {name: "Кружка с термоизоляцией  с металлической крышкой", price: 700, imgSrc:require ("@/assets/img/catalog/icon2/10.svg") },
        {name: "Кружка с термоизоляцией волнистая", price: 700, imgSrc: require("@/assets/img/catalog/icon2/11.svg") },
        {name: "Кружка стальная «Alaska» с крышкой слайдером", price: 700, imgSrc:require ("@/assets/img/catalog/icon2/12.svg") },
        {name: "Пластиковый стакан «Take away»", price: 700, imgSrc: require("@/assets/img/catalog/icon2/13.svg") },
        {name: "Стакан-тамблер «Moment» с кофейной крышкой", price: 700, imgSrc:require ("@/assets/img/catalog/icon2/14.svg") },
        {name: "Термокружка «Jar»", price: 700, imgSrc:require ("@/assets/img/catalog/icon2/15.svg") },
        {name: "Термокружка «Klein» ", price: 700, imgSrc:require ("@/assets/img/catalog/icon2/16.svg") },
        {name: "Брелок «Alen» круглый", price: 81, imgSrc:require ("@/assets/img/catalog/icon3/1.svg") },
        {name: "Брелок прямоугольный «Alen 2.0»", price: 166, imgSrc:require ("@/assets/img/catalog/icon3/2.svg") },
        {name: "Брелок «Mondo»", price: 187, imgSrc:require ("@/assets/img/catalog/icon3/3.svg") },
        {name: "Брелок-открывалка «Dao»", price: 86, imgSrc:require ("@/assets/img/catalog/icon3/4.svg") },
        {name: "Антистресс «Кубик»", price: 176, imgSrc:require ("@/assets/img/catalog/icon3/5.svg") },
        {name: "Антистресс «Каска»", price: 69, imgSrc:require ("@/assets/img/catalog/icon3/6.svg") },
        {name: "Антистресс «Куб»", price: 49, imgSrc:require ("@/assets/img/catalog/icon3/7.svg") },
        {name: "Зеркало складное", price: 450, imgSrc:require ("@/assets/img/catalog/icon3/8.svg") },
        {name: "Брелок «Triangle»", price: 90, imgSrc:require ("@/assets/img/catalog/icon3/9.svg") },
        {name: "Брелок-рулетка «Домик»", price: 90, imgSrc:require ("@/assets/img/catalog/icon3/10.svg") },
        {name: "Брелок-рулетка «Block»", price: 60, imgSrc:require ("@/assets/img/catalog/icon3/11.svg") },
        {name: "Сумка с клапаном", price: 500, imgSrc:require ("@/assets/img/catalog/icon3/12.svg") },
        {name: "Брелок металл «жетон»", price: 65, imgSrc:require ("@/assets/img/catalog/icon3/13.svg") },
        {name: "Брелок из нержавеющей стали «круг»", price: 30, imgSrc:require ("@/assets/img/catalog/icon3/14.svg") },
        {name: "Брелок акрил прямоугольник", price: 50, imgSrc:require ("@/assets/img/catalog/icon3/15.svg") },
        {name: "Зажигалка  бензиновая", price: 250, imgSrc:require ("@/assets/img/catalog/icon3/16.svg") },
        {name: "Алюминиевая шариковая ручка «Joyce»", price: 107, imgSrc:require ("@/assets/img/catalog/icon4/1.svg") },
        {name: "Шариковая ручка «PET PEN PRO»", price: 177, imgSrc:require ("@/assets/img/catalog/icon4/2.svg") },
        {name: "Ручка картонная шариковая «Эко»", price: 30, imgSrc:require ("@/assets/img/catalog/icon4/3.svg") },
        {name: "Ручка soft-touch шариковая «Plane»", price: 40, imgSrc:require ("@/assets/img/catalog/icon4/4.svg") },
        {name: "Ручка soft-touch шариковая «Taper»", price: 50, imgSrc:require ("@/assets/img/catalog/icon4/5.svg") },
        {name: "Ручка soft-touch шариковая «Zorro»", price: 50, imgSrc:require ("@/assets/img/catalog/icon4/6.svg") },
        {name: "Ручка  шариковая «Prodir»", price: 146, imgSrc:require ("@/assets/img/catalog/icon4/7.svg") },
        {name: "Конференц сумка «Session»", price: 686, imgSrc:require ("@/assets/img/catalog/icon4/8.svg") },
        {name: "Конференц сумка для документов «Congress»", price: 667, imgSrc:require ("@/assets/img/catalog/icon4/9.svg") },
        {name: "Конференц сумка для документов «Event»", price: 511, imgSrc:require ("@/assets/img/catalog/icon4/10.svg") },
        {name: "Блокнот «Pocket»", price: 685, imgSrc:require ("@/assets/img/catalog/icon4/11.svg") },
        {name: "Бизнес-блокнот А5 с клапаном «Fabrizio»", price: 1506, imgSrc:require ("@/assets/img/catalog/icon4/12.svg") },
        {name: "Блокнот A6 «Stitch»", price: 112, imgSrc:require ("@/assets/img/catalog/icon4/13.svg") },
        {name: "Блокнот A7 «Rainbow S»", price: 175, imgSrc:require ("@/assets/img/catalog/icon4/14.svg") },
        {name: "Набор стикеров «Expose» с ручкой и блокнотом А7", price: 170, imgSrc:require ("@/assets/img/catalog/icon4/15.svg") },
        {name: "Блокнот «Priestly» с ручкой", price: 417, imgSrc:require ("@/assets/img/catalog/icon4/16.svg") },
      ],
      arrowSrc: require('@/assets/img/arrow_right_green.svg'), // Начальный путь к изображению стрелки
    };
  },
  computed: {
    // Случайные товары, которые будут отображаться
    randomProducts() {
      // Клонируем массив и случайным образом перемешиваем его
      const shuffled = [...this.products].sort(() => 0.5 - Math.random());
      // Возвращаем случайно выбранные 3 товара
      return shuffled.slice(0, 3);
    },
  },
  methods: {
    goToCatalog() {
      this.$router.push("/catalog");
    },
    goToAbout() {
      this.$router.push("/about");
    },
    goToPortfolio() {
      this.$router.push("/portfolio");
    },
    goToNews() {
      this.$router.push("/news");
    },
    changeImage(color) {
      if (color === 'white') {
        this.arrowSrc = require('@/assets/img/arrow_right_white.svg'); // При наведении
      } else {
        this.arrowSrc = require('@/assets/img/arrow_right_green.svg'); // При выходе
      }
    },
    goToProduct(product) {
      this.$router.push(`/product/${product.id}`); // Переход на страницу товара с id
    },
  }
};
</script>

<style scoped>
/* Main Banner */

.main-banner {
    display: flex;
    height: 768px;
    width: 100%;
    background-image: url('@/assets/img/main/background.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;  
}

.txt {
    position: absolute;       /* Позволяет разместить элемент в произвольном месте */
    top: 35%;                 /* Смещение от верхней части секции */
    left: 50%;                /* Смещение от левой части секции */
    transform: translate(-50%, -50%); /* Центрирование блока относительно его размера */
    text-align: center;       /* Центрирование текста внутри блока */
}

.main-banner h1{
    font-family: bold;
    font-size: 36px;
    line-height: 44px;
}

.txt_banner{
    font-family: regular;
    font-size: 14px;
    margin-top: 10%;
    line-height: 20px;
}

.txt h1 span {
    text-decoration: underline 5px;
    text-decoration-color: #FFA630; /* Цвет подчеркивания */
}

.catalog{
    width: 171px;
    height: 40px;
    background-color: #10BB87;
    border: none;
    border-radius: 10px;
    margin-top: 10%;
    color: white;
    font-family: bold;
    font-size: 12px;
}

/* About Us */

.about {
    margin-top: 10%;
    display: flex;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    border-bottom: solid  #F2F2F2 2px ;
}

.about h1 {
    font-size: 36px;
    font-family: bold;
    line-height: 44px;
    margin-bottom: 15px;
}

.about h1 span {
    text-decoration: underline 5px;
    text-decoration-color: #FFA630; /* Цвет подчеркивания */
}

.about p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 15px;
}

.company_button{
    width: 131px;
    height: 40px;
    background-color: #10BB87;
    border: none;
    border-radius: 10px;
    margin-top: 5%;
    color: white;
    font-family: bold;
    font-size: 12px;
    margin-top: 8%;
}

/* About Us 2 */

.about_2{
    margin-top: 10%;
    display: flex;
    justify-content: space-between;
}

.about_2 p{
    font-family: bold;
    font-size: 14px;
}

#opis{
    font-family: regular;
    font-size: 14px;
    color: #B3B3B3;
}

/* Popular Products */

.popular{
    padding-bottom: 7%;
    border-bottom: solid 2px #F2F2F2;
}

.txt_popular{
    margin-top: 10%;
}

.txt_popular h1{
    font-size: 36px;
    font-family: bold;
    line-height: 44px;
    margin-bottom: 15px;
}

.txt_popular h1 span {
    text-decoration: underline 5px;
    text-decoration-color: #FFA630; /* Цвет подчеркивания */
}

.cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 5%;
}

.card {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;   
}

.product-name {
    font-family: bold;
    font-size: 14px;
    text-align: center;
    margin: 10px 0;
}

.card_footer_catalog {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: auto; /* Выталкивает footer вниз */
}

.card_footer_catalog button {
    background-color: white;
    color: black;
    border: solid 1px #00b894;
    border-radius: 10px;
    width: 100%;
    height: 29px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.card_footer_catalog button:hover {
    background-color: #00b894;
    border: none;
    color: white;
}

.price {
    margin-top: 5%;
    font-size: 16px;
    color: #00b894;
    font-weight: bold;
}

/* Services */

.services{
    margin-top: 10%;
}

.services h2{
    font-family: medium;
    font-size: 24px;
}

.service_cards{
    display: flex;
    justify-content: space-between;
}

.service_card{
    margin-top: 5%;
    width: 200px;
}

#service_card_heading {
    font-family: bold;
    font-size: 14px;
    color: black;
}

.service_card p{
    font-size: 14px;
    color: #B3B3B3;
    height: 40px;
}

.card_footer_service{
    margin-top: auto; /* Отправляет footer вниз карточки */
    width: 100%;
    display: flex;
    justify-content: center;
}

.card_footer_service button {
    display: inline-flex;
    align-items: center; /* Центрирует содержимое по вертикали */
    justify-content: center; /* Центрирует содержимое по горизонтали */
    background-color: white;
    color: black;
    border: solid 1px #00b894;
    border-radius: 10px;
    width: 100%;
    height: 40px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 35%;
}

.card_footer_service button:hover {
    background-color: #00b894;
    border: none;
    color: white;
}

.card_footer_service button img {
    margin-left: 8px; /* Отступ между текстом и иконкой */
}

/* categories */

.category{
    margin-top: 20%;
}

.category_txt{
    display: flex;
}

.category_txt button{
    margin-left: 5%;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
}

.category_txt button:hover {
    background-color: #00997a;
}

.category_txt h1{
    font-family: medium;
    font-size: 24px;
}

.category_icon{
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
    text-align: center;
}

/* reviews */

.company{
    margin-top: 10%;
    background-image: url('@/assets/img/main/company.svg'); /* Путь к вашему изображению */
    background-size: cover;
    background-position: center;
    width: 1500px;
    height: 577px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button_reviews {
    position: absolute;
    top: 30%; /* Настройте отступ сверху */
    right: 1%; /* Настройте отступ справа */
    padding: 5px 40px;
    background-color: white;
    color: black;
    border: #0FAE7D solid 2px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    font-family: regular;
    height: 40px;
    display: inline-flex;
    align-items: center; /* Центрирует содержимое по вертикали */
    justify-content: center;
}

.button_reviews img {
    margin-left: 15px; /* Отступ между текстом и иконкой */
}

.button_reviews:hover {
    background-color: #00997a;
    color: white;
}

.button_details {
    position: absolute;
    bottom: -5%; /* Настройте отступ снизу */
    left: 73%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #00b894;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 12px;
    font-family: bold;
    height: 40px;
}

.button_details:hover {
    background-color: white;
    border: solid 2px #00997a;
    color: black;
}

/* events */

.events{
    margin-top: 15%;
}

.events h1{
    font-family: bold;
    font-size: 36px;
}

.events h1 span {
    text-decoration: underline 5px;
    text-decoration-color: #FFA630; /* Цвет подчеркивания */
}

.event{
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
}

.event1, .event2{
    width: 400px;
}

.event1 h1, .event2 h1{
    font-family: bold;
    font-size: 14px;
}

.event1 p, .event2 p{
    font-family: regular;
    font-size: 14px;
    color: #B3B3B3;
}

.button_container{
    text-align: right;
}

.button_container button{
    margin-top: 5%;
    border: 2px #00997a solid;
    background-color: white;
    border-radius: 10px;
    font-size: 12px;
    padding: 10px 20px;
    display: inline-flex;
    align-items: center; /* Центрирует содержимое по вертикали */
    justify-content: center;
    margin-left: auto;
}

.button_container img {
    margin-left: 15px; /* Отступ между текстом и иконкой */
}
</style>
