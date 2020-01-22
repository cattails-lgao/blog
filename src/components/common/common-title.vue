<template>
  <div :class="['title', Boolean(level) ? className : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'common-title',
  props: {
    level: {
      type: Number,
      default: undefined
    }
  },
  computed: {
    className() {
      return `title-${this.level}`
    }
  },
  mounted() {
    console.log(this.level)
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.375rem;
  padding: 1rem;
  font-weight: bold;
}
.title-1{
  padding: 1rem 0;
}
</style>