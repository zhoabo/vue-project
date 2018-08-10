<template>
  <div>
    <p>这是{{title}}页</p>
    <p>{{num}}</p>
    <p>{{total}}</p>
    <p>{{city}}</p>
    <button @click="flag=!flag">点击</button>
    <button @click='changeCity({city:"武汉",name:"张肉猪"})'>改变城市</button>
    <button @click='changeName({city:"嘉鱼",name:"肉猪"})'>改变名字</button>
    <test1 :test="test" :click="click"></test1>
    <transition name="move">
      <div class="ball" v-show="flag"></div>
    </transition>
    
  </div>
</template>

<script>
import Test1 from "../components/test1";
import {mapState, mapMutations, mapGetters, mapActions} from "vuex";
export default {
  components: {Test1},
  data () {
    return {
      title: "home",
      test: "传过来的值",
      flag: false
    };
  },
  computed: {
    ...mapState("home", ["city", "num"]),
    ...mapGetters("home", ["total"])
  },
  methods: {
    click () {
      this.test = "改变了";
    },
    ...mapMutations("home", ["changeCity"]),
    ...mapActions("home", ["changeName"])
  },
  mounted () {
    console.log("mounted执行了");
    console.log(this.title);
  },
  created () {
    console.log("created执行了");
    console.log(this.title);
  },
  beforeCreate () {
    console.log("beforeCreate执行了");
    console.log(this.title);
  },
  beforeUpdate () {
    console.log("beforeUpdate执行了");
    console.log(this.city);
  },
  updated () {
    console.log("update执行了");
    console.log(this.city);
  },
  beforeDestroy () {
    console.log("beforeDestroy执行了");
  }
};
</script>
<style lang="less" scoped>
  .ball{
    height: 0.8rem;
    width:0.8rem;
    background: red;
  }
  .move-enter-active, .move-leave-active{
    transition: all 0.4s linear
  }
        
  .move-enter, .move-leave-active{
    opacity: 0;
    transform: translate3d(24px, 0, 0)
  }
       
</style>


