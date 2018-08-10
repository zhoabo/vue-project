<template>
  <div>
    <p>这是{{title}}页</p>
    <h1>{{name}}</h1>
    <div class="wrap">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  data () {
    return {
      title: "find"
    };
  },
  computed: {
    ...mapState("find", ["name"])
  }
};
</script>

<style lang="less" scoped>
.wrap{
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  div{
    height: 1rem;
    background: red;
    // border:1px solid blue;
    flex:25%;
  }
}
</style>
