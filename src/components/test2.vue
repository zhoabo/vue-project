<template>
  <div>
    <button @click="change">改变父组件的值</button>
  </div>
</template>

<script>
export default {
  name: "test2",
  methods: {
    change () {
      this.$emit("changeP", "我是改变的");
    }
  }
};
</script>
