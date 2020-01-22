<template>
  <main>
    <div class="main_container">
      <section>
        <div class="container">
          <slot></slot>
        </div>
      </section>
      <asideComponent></asideComponent>
    </div>
  </main>
</template>

<script>
import asideComponent from "@/components/aside/aside";

export default {
  name: "mainComponent",
  components: {
    asideComponent
  }
};
</script>

<style lang="scss" scoped>
main {
  max-width: 1170px;
  height: auto;
  padding: 2vw;
  margin: auto;
  box-sizing: content-box;

  .main_container {
    height: inherit;
    width: inherit;
    display: flex;

    section {
      flex: 1;

      .container {
        height: 100%;
        padding: 0 1rem;
        padding-bottom: 2.5rem;
        position: relative;
      }
    }
  }
}
</style>