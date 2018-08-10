<template>
  <div>
    <router-view/>
    <tab-nav></tab-nav>
  </div>
</template>

<script>
import TabNav from "../components/tabNav";
export default {
  components: {
    TabNav
  },
  data () {
    return {
      title: "home"
    };
  }
};
</script>

<style lang="less" scoped>

</style>