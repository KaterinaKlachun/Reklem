<template>

<!-- info -->

<div class="info">
    <div class="pagination">
        <a href="main.html">Главная /</a>
    </div>
</div>

<div class="wrapper">

    <div class="cat">
        <h1><span>Услуги</span></h1>
        <p>Следует отметить, что разбавленное
            изрядной долей эмпатии, рациональное
            мышление требует определения и уточнения
            прогресса профессионального сообщества.
            Но глубокий уровень погружения влечет
            за собой процесс внедрения и модернизации
            глубокомысленных рассуждений.</p>
        <img src="@/assets/img/services/back_2.svg" alt="">
    </div> 
</div>

<!-- service -->

<div class="wrapper">
    <div class="service">
        <img src="@/assets/img/services/service.svg" alt="">
    </div>
</div>

</template>
  
<script>

export default {
    name: 'ServicesPage'
}

</script>
  
<style scoped>

.cat {
    width: 100%;
}

.cat p{
    margin-top: 5%;
}

/* info */

.info{
    height: 250px;
    background-image: url('@/assets/img/news/back.svg');
}

/* service */

.service{
    width: 100%;
    margin-top: 10%;
}

</style>