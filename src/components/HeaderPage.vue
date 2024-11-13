<template>
    <header>
      <div class="wrapper">
        <nav id="head">
          <div class="logo"><router-link to="/"><img src="@/assets/img/header/logo.svg" alt="Logo"></router-link></div>
          <ul class="nav-links">
            <li><router-link to="/about"><p>О компании</p></router-link></li>
            <li><router-link to="/catalog"><p>Каталог</p></router-link></li>
            <li><router-link to="/services"><p>Услуги</p></router-link></li>
            <li><router-link to="/contacts"><p>Контакты</p></router-link></li>
            <li><img src="@/assets/img/header/search.svg" alt="Поиск"></li>
          </ul>
          <div class="icons">
            <a href="#"><img src="@/assets/img/header/user.svg" alt="Личный кабинет"></a>
            <a href="#"><img src="@/assets/img/header/shop.svg" alt="Корзина"></a>
          </div>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderPage",
  };
  </script>
  
  <style scoped>

/* Header */

header{
    background-color: #F2F2F2;
    border-bottom: solid  #E5E5E5 2px ;
}

header a{
    font-family: medium;
}

.wrapper {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
}

#head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
}

.logo img {
    width: 100%;
}

.nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
}

.nav-links li {
    display: flex;
    align-items: center;
}

.nav-links a {
    text-decoration: none;
}

.nav-links p{
    font-family: medium;
    font-size: 1rem;
    color: black;
}

.icons {
    display: flex;
    gap: 10px;
}

.icons img {
    width: 50px;
}
</style>
  