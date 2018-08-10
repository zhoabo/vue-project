<template>
  <div @click="click">
    <input type="text" :placeholder="txt" v-model="value">
    <p>{{value}}</p>
    <p>{{test}}</p>
  </div>
</template>

<script>
export default {
  name: "test1",
  props: ["test", "click"],
  data () {
    return {
      txt: "请输入",
      value: ""
    };
  },
};
</script>

<style lang="less" scoped>
input{
  height: 0.5rem;
  font-size: 0.24rem;
}
</style>
