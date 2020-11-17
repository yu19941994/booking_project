<template>
  <div class="home">
    <div class="swiper">
      <!-- 底層Swipper -->
      <swiper ref="mySwiper" :options="swiperOption" class="swiper-container">
        <swiper-slide class="slide"><img src="@/assets/image/bg1.jpeg" alt="" class="bg"></swiper-slide>
        <swiper-slide class="slide"><img src="@/assets/image/bg2.jpeg" alt="" class="bg"></swiper-slide>
        <swiper-slide class="slide"><img src="@/assets/image/bg3.jpeg" alt="" class="bg"></swiper-slide>
        <swiper-slide class="slide"><img src="@/assets/image/bg4.jpeg" alt="" class="bg"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- 黑色遮罩 -->
      <div class="blackbg">
        <div class="blackbg-inside"></div>
      </div>

      <div class="container">
        <div class="container-inside">
          <!-- left container -->
          <div class="left-container">
            <div class="logo">
              <img src="@/assets/image/logo.svg" alt="">
            </div>
            <div class="title-text">
              <p class="font font-h5 fontC-light">好室旅店。HOUSE HOTEL</p>
              <p class="font-h5 fontC-light">花蓮縣花蓮市國聯一路1號</p>
              <p class="font-h5 fontC-light">03-8321155</p>
              <p class="font-h5 fontC-light">HOUSE@HOTEL.COM</p>
            </div>
          </div>

          <div class="grid-container">
            <div class="grid-button">
              <div class="room1">
                <img src="@/assets/image/room1A.jpeg" alt="" class="room">
              </div>
              <div class="room2">
                <img src="@/assets/image/room2A.jpeg" alt="" class="room">
              </div>
              <div class="room3">
                <img src="@/assets/image/room3A.jpeg" alt="" class="room">
              </div>
              <div class="room4">
                <img src="@/assets/image/room4A.jpeg" alt="" class="room">
              </div>
              <div class="room5">
                <img src="@/assets/image/room5A.jpeg" alt="" class="room">
              </div>
              <div class="room6">
                <img src="@/assets/image/room6A.jpeg" alt="" class="room">
              </div>
            </div>
            <div class="grid-layer">
              <router-link class="grid-text" v-for="item in room" :key="item.id" :to="`roomintroduce/${item.id}`">
                <p class="font font-h4 fontC-light text">{{item.name}}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  components: { Swiper, SwiperSlide },
  directives: {
    swiper: directive
  },
  data () {
    return {
      room: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      imgList: [
        {
          name: '@/assets/image/bg1.jpeg'
        },
        {
          name: '@/assets/image/bg2.jpeg'
        },
        {
          name: '@/assets/image/bg3.jpeg'
        },
        {
          name: '@/assets/image/bg4.jpeg'
        }
      ]
    }
  },
  methods: {
    getRoom () {
      const vm = this
      this.axios({
        method: 'get',
        baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
        headers: {
          Authorization: 'Bearer ZpNjg6fR488qhR6rBqkJUPUxciEgE5JfKKuvTBSEa8WyQu5ifFDykP9yVJQt',
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          vm.room = response.data.items
          console.log(response.data.items)
        })
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 20000, true)
    this.getRoom()
  },
  created () {
    // this.getRoom()
  }
}
</script>
