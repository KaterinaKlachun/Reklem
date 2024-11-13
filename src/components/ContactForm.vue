<template>
    <div class="wrapper">
            <div class="contact_form">
        <div class="contact_txt">
            <h2>Нужна <span>помощь?</span></h2>
            <p>Оставьте свои данные — мы перезвоним
                и решим вопрос. Помните, оставляя
                контакты, вы даёте согласие на
                обработку персональных данных.</p>
        </div>
        <form>
            <label for="name">Имя</label>
            <input type="text" id="name" placeholder="Женя" required>
            <label for="phone">Телефон</label>
            <input type="tel" id="phone" placeholder="+7 000 000 00 00" required>
            <button type="submit">Отправить<img src="@/assets/img/arrow_right_green.svg" alt=""></button>
        </form>
        </div>
    </div>
    
  </template>
  
  <script>
  export default {
    name: "ContactForm",
  };
  </script>
  
  <style scoped>
/* Contact */

.contact_form {
    display: flex;
    background-size: cover;
    background-position: center;
    background-image: url('@/assets/img/main/help.svg'); 
    margin-top: 10%;
    border-radius: 30px;
    padding: 40px 100px; /* Отступы внутри формы */
}

.contact_txt{
    width: 50%;
}
.contact_form h2 {
    font-size: 36px; /* Размер заголовка */
    margin-bottom: 20px; /* Отступ снизу */
    color: white;
}

.contact_form p{
    font-family: regular;
    font-size: 14px;
    color: #487B6C;
    padding-top: 10%;
}

.contact_form h2 span {
    text-decoration: underline 5px;
    text-decoration-color: #487B6C; /* Цвет подчеркивания */
}

.contact_form form{
    margin-left: 10%;
}

.contact_form label {  
    font-family: medium;
    font-size: 12px;
    color: #487B6C;
}

.contact_form input {
    display: flex;
    width: 300px; /* Полная ширина поля */
    padding: 10px; /* Отступы внутри поля */
    margin: 10px 0; /* Отступы сверху и снизу */
    border: none; /* Без границ */
    border-radius: 5px; /* Скругление углов */
}

.contact_form button{
    display: inline-flex;
    align-items: center; /* Центрирует содержимое по вертикали */
    justify-content: center; /* Центрирует содержимое по горизонтали */
    cursor: pointer;
    border: none;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    color: #487B6C; 
    font-family: medium;
}

.contact_form button:hover {
    background-color: #f0f0f0; /* Цвет кнопки при наведении */
}

.contact_form button img{
    margin-left: 25%;
}

.contact_form p {
    font-size: 12px; /* Размер текста для информации */
    margin-top: 15px; /* Отступ сверху */
}
  </style>
  