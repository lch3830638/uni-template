<template>
  <view class="content">
    <image
      class="logo"
      src="/static/img/logo.png"
    />
    <view
      v-if="!getGoodsListLoading"
      class="iconfont iconguanbi"
    />
    <view>
      <text class="title">
        {{ title }}
      </text>
    </view>
  </view>
</template>

<script>
import {
  getGoodsListKey,
  getGoodsList,
} from '@/apis/common'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  computed: {
    ...mapGetters('loading', ['effects']),
    getGoodsListLoading() {
      return !!this.effects[getGoodsListKey]
    },
  },
  onLoad() {
    getGoodsList()
  },
}
</script>

<style>
.content {
  text-align: center;
  height: 400rpx;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
