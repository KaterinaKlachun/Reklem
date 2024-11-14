<template>
    <div class="product-card">
        <img :src="product.imgSrc" :alt="product.title" class="product-image" />
        <h3 class="product-title">{{ product.title }}</h3>
        <button @click="viewProduct" class="product-button">Выбрать вид</button>
        <p class="product-price">{{ product.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
      category: String,
      productId: Number,
    },
    methods: {
      viewProduct() {
        this.$router.push({ name: 'ProductPage', params: { category: this.category, id: this.productId } });
      },
    },
  };
  </script>
  
  <style scoped>
.product-card {
    display: flex;
    flex-direction: column; /* Ставим элементы в столбик */
    align-items: center;    /* Выравниваем по центру по горизонтали */
    justify-content: center; /* Выравниваем по центру по вертикали */
    text-align: center;     /* Центруем текст внутри */
    padding: 20px;
    height: 350px;
}

.product-title {
    min-height: 40px; /* Задаем минимальную высоту для выравнивания */
    margin-bottom: 8px;
    font-size: 1rem;
    font-family: bold;
}

.product-button {
    margin-top: auto; /* Поднимает кнопку вверх, если места больше */
    padding: 10px 20px;
    background-color: white;
    color: black;
    border: solid 1px #00b894;
    border-radius: 10px;
    cursor: pointer;
    font-family: regular;
    font-size: 0.8rem;
}

.product-button:hover {
    background-color: #00b894;
    border: none;
    color: white;
}

.product-image {
    height: auto;
    margin-bottom: 10px;
}

.product-price {
    color: #0FAE7D;
    margin-top: 8px;
    font-family: bold;
    font-size: 14px;
}
  </style>