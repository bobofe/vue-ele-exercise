<!--  -->
<template>
  <div>
    <v-header></v-header>
    <div class="tab-bar border-1px">
      <div class="tab-item">
        <router-link :to="{name:'goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name:'ratings'}">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name:'seller'}">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》'
import header from '@/components/header/header.vue'
export default {
  components: {
    'v-header': header
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  methods: {
  },
  created () {}, // 生命周期 - 创建完成（可以访问当前this实例）
  mounted () {}, // 生命周期 - 挂载完成（可以访问DOM元素）
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="stylus" scoped>
.tab-bar
  display flex
  height 40px
  line-height 40px
  font-size 14px
  border-1px(rgba(7,17,27,0.1))
  .tab-item
    flex-grow 1
    .router-link-active
      color red
</style>
