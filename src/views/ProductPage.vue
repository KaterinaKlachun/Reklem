<template>

  <!-- info -->

  <div class="info">
  <div class="pagination">
    <router-link to="/">Главная /</router-link>
    <router-link to="/catalog">Каталог</router-link>
  </div>
</div>

<!--  -->

  <div>
    <!-- Проверяем, что product существует, прежде чем рендерить информацию о товаре -->
    <div v-if="product">
      <div class="product-info">
        <img :src="selectedColorImage" :alt="product.name" class="product-image" />
        <h1>{{ product.name }}</h1>
        <p>Арт. {{ product.article }}</p>
        <p>На складе {{ product.stock }} шт.</p>

        <label>Цвет:</label>
        <select @change="updateColorImage($event.target.value)">
          <option
            v-for="color in product.colors"
            :key="color.color"
            :value="color.color"
          >
            {{ color.color }}
          </option>
        </select>

        <p>{{ product.price }} ₽</p>
        <div class="down">
          <div class="quantity">
            <button @click="selectedQuantity = Math.max(1, selectedQuantity - 1)">-</button>
            <span>{{ selectedQuantity }}</span>
            <button @click="selectedQuantity++">+</button>
          </div>
          <button @click="addToCart">В корзину</button>`
        </div>
        
      </div>
    </div>
  </div>

  <div class="product-description">
        <h2>Описание</h2>
        <p>{{ product.description }}</p>
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
.product-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.product-info {
  display: flex;
  gap: 20px;
}
.product-image {
  width: 300px;
  height: auto;
  border: 1px solid #ddd;
}
.product-details {
  flex-grow: 1;
}
.color-selection {
  margin-top: 10px;
}
.price {
  font-size: 24px;
  color: #00b894;
  margin-top: 10px;
}
.cart-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}
.add-to-cart {
  background-color: #00b894;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}
</style>
