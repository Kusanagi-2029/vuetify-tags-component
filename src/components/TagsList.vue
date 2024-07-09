<template>
  <div class="tags-list" :class="alignmentClass" ref="tagsList">
    <template v-for="(tag, index) in visibleTags">
      <v-chip
        :key="'chip-' + (tag.id || index)"
        class="tags-list__item"
        :class="{ 'tags-list__item--with-icon': tag.icon }"
        :color="getTagColor(tag)"
      >
        <template v-if="tag.icon">
          <v-icon>{{ tag.icon }}</v-icon>
          <span>{{ tag.text }}</span>
        </template>
        <template v-else>
          {{ tag.text }}
        </template>
      </v-chip>

      <!-- Разделитель между элементами -->
      <v-icon
        v-if="shouldShowSeparator(index)"
        :key="'separator-' + index"
        class="tags-list__separator"
      >
        mdi-circle-small
      </v-icon>
    </template>
  </div>
</template>

<script>
export default {
  name: "TagsList",
  props: {
    tags: {
      type: Array,
      required: true,
    },
    alignment: {
      type: String,
      default: "left",
    },
  },
  data() {
    return {
      containerWidth: 0,
      visibleTags: [], // Список видимых тегов
    };
  },
  computed: {
    alignmentClass() {
      return {
        "tags-list--left-aligned": this.alignment === "left",
        "tags-list--full-width": this.alignment === "full-width",
      };
    },
  },
  mounted() {
    this.updateContainerWidth();
    window.addEventListener("resize", this.updateContainerWidth);
    this.updateVisibleTags(); // Вызываем метод для первоначального вычисления видимых тегов
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateContainerWidth);
  },
  methods: {
    updateContainerWidth() {
      this.containerWidth = this.$refs.tagsList.clientWidth;
      this.updateVisibleTags();
    },
    getTagWidth(tag) {
      const tempSpan = document.createElement("span");
      tempSpan.style.visibility = "hidden";
      tempSpan.style.position = "absolute";
      tempSpan.style.whiteSpace = "nowrap";
      tempSpan.innerText = tag.icon ? tag.icon + " " + tag.text : tag.text;
      document.body.appendChild(tempSpan);
      const tagWidth = tempSpan.clientWidth + 40; // 40 - примерное значение, включающее padding и margin
      document.body.removeChild(tempSpan);
      return tagWidth;
    },
    getTagColor(tag) {
      return tag.icon ? "primary" : "info";
    },
    shouldShowSeparator(index) {
      return index < this.visibleTags.length - 1;
    },
    updateVisibleTags() {
      let accumulatedWidth = 0;
      let visibleTags = [];

      for (let i = 0; i < this.tags.length; i++) {
        const tag = this.tags[i];
        const tagWidth = this.getTagWidth(tag);

        if (accumulatedWidth + tagWidth <= this.containerWidth) {
          visibleTags.push(tag);
          accumulatedWidth += tagWidth;
        } else {
          break;
        }
      }

      this.visibleTags = visibleTags;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/tagsList.scss";
</style>
