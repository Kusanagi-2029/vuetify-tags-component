<template>
  <div id="app">
    <!-- Компонент на всю ширину экрана с выравниванием по левому краю -->
    <h3 class="app-title">
      Компонент на всю ширину экрана с выравниванием по левому краю
    </h3>
    <v-container class="example-1">
      <TagsList :tags="tags" alignment="left" />
    </v-container>

    <!-- Компонент на всю ширину экрана с выравниванием по ширине -->
    <h3 class="app-title">
      Компонент на всю ширину экрана с выравниванием по ширине
    </h3>

    <v-container class="example-2">
      <TagsList :tags="tags" alignment="full-width" />
    </v-container>

    <!-- Компонент на 50% ширины экрана с выравниванием по левому краю -->
    <h3 class="app-title">
      Компонент на 50% ширины экрана с выравниванием по левому краю
    </h3>

    <v-container class="example-3">
      <TagsList :tags="tags" alignment="left" />
    </v-container>

    <!-- Компонент на 50% ширины экрана с выравниванием по ширине -->
    <h3 class="app-title">
      Компонент на 50% ширины экрана с выравниванием по ширине
    </h3>

    <v-container class="example-4">
      <TagsList :tags="tags" alignment="full-width" />
    </v-container>
  </div>
</template>

<script>
import TagsList from "./components/TagsList.vue";

export default {
  name: "App",
  components: {
    TagsList,
  },
  data() {
    return {
      tags: [
        { text: "текст1" },
        { text: "текст2", icon: "mdi-flag" },
        { text: "текст3" },
        { text: "текст4", icon: "mdi-star" },
        { text: "текст5" },
        { text: "текст6", icon: "mdi-heart" },
        { text: "текст7" },
        { text: "текст8" },
        { text: "текст9" },
        { text: "текст10" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_main.scss";
</style>
