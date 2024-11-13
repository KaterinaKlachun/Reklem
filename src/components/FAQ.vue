<template>
    <div class="wrapper">
            <div class="faq">
        <h1>Часто задаваемые<br><span>вопросы</span></h1>
        <div class="faq_section">
            <div class="faq_section1">
                        <details>
                            <summary>
                                <span>Вы доставляете по всей России?</span>
                                <img class="icon" src="@/assets/img/arrow_down.svg" alt="plus icon" />
                            </summary>
                            <p>Да, мы организуем доставку по всей территории России с помощью надёжных курьерских служб. Вы также можете выбрать способ доставки, который лучше всего вам подходит.</p>
                        </details>
                        <details>
                            <summary>
                                <span>А на бумаге печатаете?</span>
                                <img class="icon" src="@/assets/img/arrow_down.svg" alt="plus icon" />
                            </summary>
                            <p>Нет, мы не выполняем печать на бумаге — такие услуги обычно предоставляют типографии. Мы специализируемся на печати на кружках, термосах, канцелярии, флешках и других подобных поверхностях.</p>
                        </details>
                        <details>
                            <summary>
                                <span>Можно сделать принт на своей вещи?</span>
                                <img class="icon" src="@/assets/img/arrow_down.svg" alt="plus icon" />
                            </summary>
                            <p>Да, вы можете принести свою вещь для нанесения принта. Обратите внимание, что материал должен соответствовать нашим требованиям для наилучшего результата печати. Рекомендуем уточнить детали у менеджера.</p>
                        </details>
                        <details>
                            <summary>
                                <span>Как быстро сможете произвести заказ?</span>
                                <img class="icon" src="@/assets/img/arrow_down.svg" alt="plus icon" />
                            </summary>
                            <p>Сроки выполнения зависят от сложности и объема заказа. Обычно стандартные заказы выполняются в течение 3-5 рабочих дней. Для срочных заказов у нас также предусмотрены ускоренные опции.</p>
                        </details>
                    </div>
                    <div class="faq_section1">
                        <details>
                            <summary>
                                <span>Можно заказать одну какую-то позицию?</span>
                                <img class="icon" src="@/assets/img/arrow_down.svg" alt="plus icon" />
                            </summary>
                            <p>Конечно! Мы выполняем заказы в любом объеме — от одной единицы до крупных партий. Вы всегда можете заказать один экземпляр для проверки качества.</p>
                        </details>
                        <details>
                            <summary>
                                <span>Из-за заграницы можно заказать?</span>
                                <img class="icon" src="@/assets/img/arrow_down.svg" alt="plus icon" />
                            </summary>
                            <p>К сожалению, мы работаем только с заказами внутри России и не предоставляем международную доставку. Если вы находитесь за границей, вы можете оформить заказ через друзей или родственников, проживающих в России, и они смогут получить его для вас. Мы предлагаем несколько удобных способов доставки по стране, чтобы ваш заказ был доставлен быстро и надёжно.</p>
                        </details>
                        <details>
                            <summary>
                                <span>Можно организовать самовывоз?</span>
                                <img class="icon" src="@/assets/img/arrow_down.svg" alt="plus icon" />
                            </summary>
                            <p>К сожалению, у нас не предусмотрен самовывоз. Мы осуществляем только доставку по всей России, чтобы обеспечить удобство и безопасность получения вашего заказа.</p>
                        </details>
                        <details>
                            <summary>
                                <span>А если я не юр лицо, будем сотрудничать?</span>
                                <img class="icon" src="@/assets/img/arrow_down.svg" alt="plus icon" />
                            </summary>
                            <p>Конечно! Мы работаем как с юридическими, так и с физическими лицами. Независимо от статуса, вы можете рассчитывать на качественное обслуживание и поддержку.</p>
                        </details>
                    </div>
        </div>
        </div>
    </div>
    
  </template>
  
  <script>
  export default {
    name: "FAQ",
  };
  </script>
  
  <style scoped>
/* FAQ */

.faq{
    margin-top: 10%;
}

.faq h1{
font-family: bold;
font-size: 36px;
}

.faq h1 span {
    text-decoration: underline 5px;
    text-decoration-color: #FFA630; /* Цвет подчеркивания */
}

.faq_section{
    display: flex;
    justify-content: space-between;
}

.faq_section1{
    width: 45%;
    margin-top: 5%;
}

.faq_section1 details[open] .icon {
    content: url('@/assets/img/arrow_up.svg'); /* Замена иконки на "минус" */
}

.faq_section1 summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5%;
    padding-top: 5%;
    border-top: 2px solid #B3B3B3;
}

.faq_section1 span{
    font-family: bold;
    font-size: 1.13rem;
}

.faq_section1 p{
    font-family: regular;
    font-size: 1.13rem;
    color: #B3B3B3;
    margin-top: 5%;
}
  </style>
  