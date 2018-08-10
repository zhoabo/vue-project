<template>
  <div>
    <p>这是{{title}}页</p>
    <button @click="change">改变组件</button>
    <component :is="name"></component>
    <div class="wrap">
      <div v-for="(item,index) in list" class="item" ref="list" @touchstart="start" @touchmove="move" @touchend="end" :style="{left:(1.5)*(index%4)+'rem',top:0.8*Math.floor(index/4)+'rem'}">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
import Test3 from "../components/test3";
import Test4 from "../components/test4";
export default {
  components: {
    Test3, Test4
  },
  data () {
    return {
      title: "mine",
      name: "test3",
      list: [1, 2, 3, 4],
      width: "",
      height: "",
      firstLeft: "",
      firstTop: "",
      ind: 0,
      domList: []
    };
  },
  mounted () {
    this.domList = this.$refs.list;
  },
  methods: {
    change () {
      this.name = "test4";
    },
    start (e) {
      this.width = e.target.clientWidth;
      this.height = e.target.clientHeight;
      this.firstLeft = e.target.offsetLeft;
      this.firstTop = e.target.offsetTop;
      this.ind = this._getIndex(this.firstLeft, this.firstTop);
      console.log(this.ind);
    },
    move (e) {
      let dom = e.target;
      let touch = e.touches[0];
      let width = this.width;
      let height = this.height;
      let clientX = touch.clientX;
      let clientY = touch.clientY;
      let left = clientX - width / 2;
      let top = clientY - height / 2;
      dom.style.left = left + "px";
      dom.style.top = top + "px";
      if (clientX < width && clientY < height) {
        this._change(0);
      }
      if (clientX > width && clientX < 2 * width && clientY < height) {
        this._change(1);
      }
      if (clientX > 2 * width && clientX < 3 * width && clientY < height) {
        this._change(2);
      }
      if (clientX > 3 * width && clientX < 4 * width && clientY < height) {
        this._change(3);
      }
    },
    end (e) {
      e.target.style.left = this.firstLeft + "px";
      e.target.style.top = this.firstTop + "px";
      // console.log(this.firstLeft, this.firstTop);
    },
    _change (index) {
      if (this.ind === index) {
        return;
      }
      let lastLeft = this.domList[index].offsetLeft;
      let lastTop = this.domList[index].offsetTop;
      this.domList[index].style.left = this.firstLeft + "px";
      this.domList[index].style.top = this.firstTop + "px";
      this.firstLeft = lastLeft;
      this.firstTop = lastTop;
      // console.log(lastLeft, lastTop);
      // let temp = this.domList[this.ind];
      // this.domList[this.ind] = this.domList[index];
      // this.domList[index] = temp;
    },
    _getIndex (clientX, clientY) {
      const {width, height} = this;
      let index;
      if (clientX <= width && clientY < height) {
        index = 0;
      }
      if (clientX >= width && clientX < 2 * width && clientY < height) {
        index = 1;
      }
      if (clientX >= 2 * width && clientX < 3 * width && clientY < height) {
        index = 2;
      }
      if (clientX >= 3 * width && clientX < 4 * width && clientY < height) {
        index = 3;
      }
      return index;
    }
  }
};
</script>

<style lang="less" scoped>
.wrap{
  .item{
    width:1.5rem;
    height: 0.8rem;
    background: red;
    line-height: 0.8rem;
    position: absolute;
  }
}

</style>
