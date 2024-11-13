<template>
  <!-- info -->

  <div class="info">
    <div class="pagination">
          <a href=""><router-link to="/">Главная /</router-link></a>
      </div>
  </div>

  <div class="wrapper">
      <div class="cat">
          <h1><span>Новости</span></h1>
      </div>
  </div>

  <!-- news -->
  <div class="wrapper">
    <div id="news-container" class="news_container">
      <!-- Рендеринг новостей с помощью v-for -->
      <div v-for="(newsItem, index) in newsList" :key="index" class="news-card">
        <h3 class="news-title">{{ newsItem.title }}</h3>
        <p class="news-description">{{ newsItem.description }}</p>
        <p class="news-date">{{ newsItem.date }}</p>
      </div>
    </div>
  </div>


</template>
  
  <script>
  export default {
    name: 'NewsPage',
    data() {
    return {
      newsList: [
        { title: "Маски теперь в продаже", description: "Принимая во внимание показатели успешности, синтетическое тестирование способствует повышению качества анализа существующих паттернов поведения. Противоположная точка зрения подразумевает.", date: "02.10.2024" },
        { title: "Обновление дизайна сайта", description: "Равным образом, сплочённость команды профессионалов в значительной степени обусловливает важность глубокомысленных рассуждений.", date: "13.09.2024" },
        { title: "Открытие нового направления", description: "Господа, постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно фиксирует необходимость как самодостаточных, так и внешне зависимых концептуальных решений.", date: "03.09.2024" },
        { title: "Обновленный конструкор макетов", description: "Современные технологии достигли такого уровня, что курс на социально-ориентированный национальный проект играет важную роль в формировании новых предложений.", date: "22.08.2024" },
        { title: "Эффективная коммуникация в компании", description: "С другой стороны, современная методология разработки напрямую зависит от вывода текущих активов.", date: "21.08.2024" },
        { title: "Флешки не выйдут из моды", description: "Также как новая модель организационной деятельности обеспечивает актуальность первоочередных требований.", date: "01.08.2024" },
        { title: "Поиск новых решений для брендинга", description: "Разнообразный и богатый опыт говорит нам, что разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для своевременного выполнения сверхзадачи.", date: "04.07.2024" },
        { title: "Начало сотрудничиства с РосГосСтрах’ом", description: "Тщательные исследования конкурентов превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.", date: "02.07.2024" }
      ]
    };
  },
  created() {
    // Можно загрузить новости из внешнего источника, если это необходимо
    // Например, с помощью axios, если новостей много и они приходят с сервера
  }
}
  </script>
  
<style scoped>

/* info */

.info{
    height: 250px;
    background-image: url('@/assets/img/news/back.svg');
}

/* news */

.news_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 4 колонки одинаковой ширины */
    grid-template-rows: repeat(1fr);   /* строки с автоматической высотой */
    gap: 20px;
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
}

.news-card {
    display: flex;
    flex-direction: column; /* Ставим элементы в столбик */
    align-items: center;    /* Выравниваем по центру по горизонтали */
    justify-content: center; /* Выравниваем по центру по вертикали */
    text-align: center;     /* Центруем текст внутри */
    height: 170px;
    margin-top: 25%;
}

.news-title {
    min-height: 40px; /* Задаем минимальную высоту для выравнивания */
    margin-bottom: 8px;
    font-size: 1rem;
    font-family: bold;
    margin-top: 5%;
}

.news-description{
    min-height: 40px; /* Задаем минимальную высоту для выравнивания */
    margin-bottom: 8px;
    font-size: 0.9rem;
    font-family: "regular";
    margin-top: 1%;
    color: #B3B3B3;
}

.news-date {
    color: #0FAE7D;
    margin-top: 15%;
    font-family: bold;
    font-size: 0.8rem;
}

</style>