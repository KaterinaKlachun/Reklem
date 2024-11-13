<template>
  
  <!-- info -->

  <div class="info">
    <div class="pagination">
          <a href=""><router-link to="/">Главная /</router-link></a>
      </div>
  </div>
  <div class="wrapper">

      <div class="cat">
          <h1><span>О компании</span></h1>
          <div class="cat_txt">
              <p>В своём стремлении улучшить пользовательский
              опыт мы упускаем, что ключевые особенности
              структуры проекта.</p>
          <p>В своём стремлении улучшить пользовательский опыт
              мы упускаем, что ключевые особенности структуры
              проекта опыт мы упускаем, что ключевые особенности
              структуры проекта.</p>
          <p>Значимость этих проблем настолько очевидна, что
              реализация намеченных плановых заданий, а также
              свежий взгляд на привычные вещи - безусловно
              открывает новые горизонты для системы массового
              участия. Учитывая ключевые сценарии поведения,
              выбранный нами инновационный путь способствует
              повышению качества первоочередных требований.
              Имеется спорная точка зрения, гласящая примерно
              следующее.</p>
          </div>
          
      </div> 

  </div>

  <!-- partners -->

  <div class="wrapper">
      <div class="partners">
          <img src="@/assets/img/about/brand.svg" alt="">
          <img src="@/assets/img/about/brand2.svg" alt="">
          <img src="@/assets/img/about/brand3.svg" alt="">
          <img src="@/assets/img/about/brand4.svg" alt="">
      </div>
  </div>

  <!-- production -->

  <div class="wrapper">
      <div class="production">
          <h1><span>Производство</span></h1>
          <p>Значимость этих проблем настолько очевидна, что
              реализация намеченных плановых заданий, а также
              свежий взгляд на привычные вещи - безусловно
              открывает новые горизонты для системы массового
              участия. Учитывая ключевые сценарии поведения,
              выбранный нами инновационный путь способствует
              повышению качества первоочередных требований.
              Имеется спорная точка зрения, гласящая примерно
              следующее.</p>
              <img src="@/assets/img/about/production.svg" alt="">
      </div>
  </div>

  <!-- Company history -->

  <div class="wrapper">
      <div class="history">
          <h1><span>История</span> компании</h1>
          <p>Значимость этих проблем настолько очевидна, что
              реализация намеченных плановых заданий, а также
              свежий взгляд на привычные вещи - безусловно
              открывает новые горизонты для системы массового
              участия. Учитывая ключевые сценарии поведения,
              выбранный нами инновационный путь способствует
              повышению качества первоочередных требований.
              Имеется спорная точка зрения, гласящая примерно
              следующее.</p>
      </div>
  </div> 
      
  <div class="chronology">
      <div class="wrapper">
          <p id="one">Коммуникабельность‚ аккуратность‚ внимательность,
              позитивный настрой‚ легкая обучаемость‚ самозадачность,
              стрессоустойчивость.</p>
          <p id="two">Независимые государства рассмотрены исключительно в
              разрезе маркетинговых и финансовых предпосылок.
              Внезапно, интерактивные прототипы и по сей день
              остаются уделом либералов, которые жаждут быть
              заблокированы в рамках своих собственных рациональных
              ограничений.</p>
          <p id="three">Значимость этих проблем настолько очевидна, что базовый
              вектор развития требует определения и уточнения новых
              принципов формирования материально-технической и кадровой
              базы. Господа, понимание сути ресурсосберегающих технологий
              говорит о возможностях приоритизации разума над эмоциями.</p>
          <p id="four">Идейные соображения высшего порядка, а также понимание сути
              ресурсосберегающих технологий предопределяет высокую
              востребованность направлений прогрессивного развития.
              Повседневная практика показывает, что разбавленное изрядной
              долей эмпатии, рациональное мышление в значительной степени
              обусловливает.</p>
          <p id="five">Как уже неоднократно упомянуто, представители современных
              социальных резервов ассоциативно распределены по отраслям.</p>
      </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  }
  </script>
  
  <style scoped>

/* info */

.info{
    height: 590px;
    background-image: url('@/assets/img/about/back.svg');
}

/* partners */

.partners{
    display: flex;
    justify-content: space-between;
    margin-top: 10%;
    padding-bottom: 5%;
    border-bottom: solid 2px #F2F2F2;
}

/* production */

.production{
    margin-top: 10%;
}

.production h1{
    font-size: 2.25rem;
    font-family: bold;
}

.production span{
    text-decoration: underline 5px;
    text-decoration-color: #FFA630;
}

.production p{
    margin-top: 5%;
    font-family: regular;
    font-size: 0.8rem; 
}

.production img{
    margin-top: 5%;
    width: 100%;
}

/* Company history */

.history{
    margin-top: 10%;
}

.history h1{
    font-size: 2.25rem;
    font-family: bold;
}

.history span{
    text-decoration: underline 5px;
    text-decoration-color: #FFA630;
}

.history p{
    margin-top: 5%;
    font-family: regular;
    font-size: 0.8rem;
}

.chronology{
    margin-top: 5%;
    height: 864px;
    width: 100%;
    background-image: url('@/assets/img/about/chronology.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.chronology p{
    font-family: medium;
    font-size: 0.75rem;
    color:#B3B3B3 ;
    
}

p#one, p#five{
    width: 195px;
}

p#two, p#three, p#four{
    width: 450px;
}

p#two, p#four{
    margin-top: 10%;
}

p#three{
    margin-left: 30%;
    margin-top: 5%;
}

p#five{
    margin-top: 8%;
}
  </style>
  