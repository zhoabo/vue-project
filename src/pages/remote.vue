<template>
  <div>
    <p>这是{{title}}页</p>
    <p>{{value}}</p>
    <test2 @changeP="changeP"></test2>
  </div>
</template>

<script>
import Test2 from "../components/test2";
export default {
  components: {
    Test2
  },
  data () {
    return {
      title: "remote",
      value: "我是父组件的值"
    };
  },
  methods: {
    changeP (value) {
      console.log("aaa");
      this.value = value;
    }
  }
};
</script>