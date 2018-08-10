<template>
  <div class="tabnav">
    <div v-for="(item,index) in tabList" :key="index" @click="select(item.key,index)">
      <div>
        <img v-if="item.selected" :src="item.selectedIcon" alt="">
        <img v-else :src="item.icon" alt="">
      </div>
      <p :class="{selected:item.selected}">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabList: [
        { title: '首页', key: 'home', icon: require('../assets/ic_shouye_default.png'), selectedIcon: require('../assets/ic_shouye_press.png'), selected: true },
        { title: '远程控制', key: 'remote', icon: require('../assets/ic_gouwuche_default.png'), selectedIcon: require('../assets/ic_gouwuche_press.png'), selected: false },
        { title: '消息', key: 'find', icon: require('../assets/ic_liuliang_default.png'), selectedIcon: require('../assets/ic_liuliang_press.png'), selected: false },
        { title: '我', key: 'mine', icon: require('../assets/ic_wo_default.png'), selectedIcon: require('../assets/ic_wo_press.png'), selected: false },
      ]
    };
  },
  methods: {
    select (key, ind) {
      this.tabList = this.tabList.map((item, index) => {
        if (item.key === key) {
          item.selected = true;
        } else {
          item.selected = false;
        }
        return item;
      });
      this.$router.push({name: key});
    }
  }
};
</script>

<style lang="less" scoped>
  .tabnav{
    position: fixed;
    z-index:1;
    bottom:0;
    left: 0;
    background:#fff;
    display: flex;
    width:100%;
    div{
      flex:1;
      align-items: center;
      div{
        display: inline-block;
        text-align: center;
        img{
            width:0.62rem;
            height:0.62rem
          }
      }
      .selected{
        color:red
      }
    }
  }
</style>

