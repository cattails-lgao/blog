<template>
  <div class="art_detail">

  </div>
</template>

<script>
export default {
  naem: 'art_detail',
  props: {
    art_id: Number
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.art_id);
  }
}
</script>

<style lang="scss" scoped>

</style>