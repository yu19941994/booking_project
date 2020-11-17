<template>
  <div class="photo">
    <img class="photo-container" :src="imageUrl[0]">
    <div class="photo-layer"></div>
    <div class="backTo" @click="backTo">
      <img src="@/assets/image/greenarrow.svg" alt="">
      <span class="font-h7 fontC-primary">查看其他房型</span>
    </div>
    <div class="photo-info">
      <div class="photo-infoInside">
        <p class="font font-h1 fontC-primary">{{today|currency}}<span class="font-h3">/1晚</span></p>
          <div class="btn btn-primary" @click.prevent="$emit('open')">Booking now</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    roomDetail: {
      type: Object,
      required: true
    },
    imageUrl: {
      type: Array,
      required: true
    }
  },
  methods: {
    backTo () {
      return this.$router.go(-1)
    }
  },
  computed: {
    today () {
      const day = new Date().getDay()
      return day < 5 ? this.roomDetail.normalDayPrice : this.roomDetail.holidayPrice
    }
  }
}
</script>
<style lang="scss">
.photo-layer {
  background: transparent linear-gradient(to bottom, #FFFFFF00 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
}
</style>
