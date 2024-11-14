<template>
  <!-- info -->

  <div class="info">
  <div class="pagination">
    <router-link to="/">Главная / </router-link>
    <router-link to="/catalog">Каталог /</router-link>
  </div>
</div>

<!-- product -->

<div class="wrapper">
    <div class="product">
        <div class="product_left">
            <img :src="selectedColorImage" :alt="product.name" class="product-image" />
        </div>
        <div class="product_right">
            <p>{{ product.name }}</p>
            <div class="stock_info">
                <p id="art">Арт. {{ product.article }}</p>
                <p>На складе {{ product.stock }} шт.</p>
            </div>
            <div class="custom-select">
                <div class="options">
                  <p>Цвет</p>
                  <select @change="updateColorImage($event.target.value)">
                    <option
                      v-for="color in product.colors"
                      :key="color.color"
                      :value="color.color"
                    >
                      {{ color.color }}
                    </option>
                  </select>
                </div>
            </div>
            <p id="product-price" class="product-price">{{ product.price }} ₽</p>
            <div class="add-to-cart-container">
                <button class="add-to-cart-button" @click="addToCart">В корзину</button>
                
                <div class="quantity-counter">
                    <button @click="selectedQuantity = Math.max(1, selectedQuantity - 1)" class="decrement-button">
                        <img src="@/assets/img/product/minus.svg" alt="Уменьшить количество">
                    </button>
                    <span>{{ selectedQuantity }}</span>
                    <button  @click="selectedQuantity++" class="increment-button">
                        <img src="@/assets/img/product/plus.svg" alt="Увеличить количество">
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="wrapper">
    <div class="product_info">
        <h1>Описание</h1>
        <p>{{ product.description }}</p>  
    </div>
</div>
  
</template>

<script>

import productCatalogData from "@/assets/data/productCatalogData.js";

export default {
  name: 'ProductPage',
  props: ['category', 'id'],
  data() {
    return {
      product: null,  // Данные выбранного продукта
      selectedColorImage: null, // Изображение для выбранного цвета
      selectedQuantity: 1, // Начальное количество товара
    };
  },
  methods: {
      loadProduct() {
        const categoryProducts = productCatalogData[this.category];
        if (categoryProducts) {
          const productIndex = parseInt(this.id, 10) - 1; // Преобразование `id` в число
          this.product = categoryProducts[productIndex] || null;

          if (this.product && this.product.colors && this.product.colors.length > 0) {
            this.selectedColorImage = this.product.colors[0].image;
          }
        }
      },
      updateColorImage(selectedColor) {
        const selectedColorData = this.product.colors.find(color => color.color === selectedColor);
        this.selectedColorImage = selectedColorData ? selectedColorData.image : '';
      },
      addToCart() {
        // Логика добавления товара в корзину
      },
    },
    created() {
      this.loadProduct();
    },
    watch: {
      // Обновляем продукт при изменении маршрута
      '$route.params': 'loadProduct',
    },
  };
</script>

<style scoped>

.product{
    display: flex;
    margin-top: 10%;
    justify-content:space-between;
}

.product_left img{
    width: 450px;
}

.product_right{
    width: 50%;
}

.product_right p{
    font-family: medium;
    font-size: 1.5rem;
}

.stock_info{
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
}

.stock_info p{
    font-family: medium;
    font-size: 0.75rem;
    color: #FFA630;
}

#product-art{
    color: #10BB87;
}

.options{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  margin-top: 5%;
}

.options p{
  font-family: medium;
  font-size: 0.85rem
}

.options select{
  background-color: #FAFAFA;
  border: 1px solid #F2F2F2;
  border-radius: 4px;
  width: 70%;
  height: 40px;
}

.product-price{
    margin-top: 5%;
    width: 275px;
    height: 70px;
    background-image: url("@/assets/img/product/back.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center; /* горизонтальное выравнивание */
    align-items: center; /* вертикальное выравнивание */
    text-align: center;
    color: white;
    font-family: medium;
}

.add-to-cart-container{
    display: flex;
    margin-top: 10%;
    justify-content: space-between;
}

.add-to-cart-button{
    width: 300px;
    background-color: white;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
}

.quantity-counter {
    display: flex;
    align-items: center; 
    width: 30%;
}

.decrement-button,
.increment-button {
    background-color: white;
    border: none;
    padding: 5px;
}

.quantity-counter span {
    margin: 0 10px;
    font-size: 16px;
    color: #00A860;
}

.product_info{
    margin-top: 10%;
}

.product_info h1{
    color: #10BB87;
    font-family: medium;
    font-size: 1.5rem;
    margin-bottom: 5%;
}

.product_info p{
  font-family: regular;
  font-size: 0.875rem;
}

</style>
