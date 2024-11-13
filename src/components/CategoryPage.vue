<template>
    <div class="category_1" @click.prevent="selectCategory" :data-category="categoryKey">
      <img :src="image" :alt="name" />
      <p>{{ name }}</p>
    </div>
</template>
  
  <script>
  export default {
    name: "CategoryPage",
    props: {
      name: String,
      image: String,
      categoryKey: String,
    },
    methods: {
      selectCategory() {
        this.$emit("categorySelected", this.categoryKey);
      },
    },
  };
  </script>
  
  <style scoped>
  /* стили для категории */
  </style>