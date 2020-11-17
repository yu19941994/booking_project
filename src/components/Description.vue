<template>
  <div class="description">
        <div class="description-title">
          <p class="font font-display2 fontC-primary">{{roomDetail.name}}</p>
          <p class="font font-h7 fontC-primary">
            <span>{{filterGuest}}人．</span>
            <span>{{bedKind}}床．</span>
            <span v-if="roomDetail.amenities.Breakfast === true">附早餐．</span>
            <span>衛浴{{roomDetail.descriptionShort['Private-Bath']}}間．</span>
            <span>{{roomDetail.descriptionShort.Footage}}平方公尺</span>
          </p>
        </div>
        <div class="description-content">
          <p class="font font-h7 fontC-primary">
            <span>平日（一~四）價格：{{roomDetail.normalDayPrice|currency}}／</span>
            <span>假日（五~日）價格：{{roomDetail.holidayPrice|currency}}</span>
          </p>
          <p class="font font-h7 fontC-primary">
            <span>入住時間：{{roomDetail.checkInAndOut.checkInEarly}}（最早）／</span>
            <span>{{roomDetail.checkInAndOut.checkInLate}}（最晚）</span>
          </p>
          <p class="font font-h7 fontC-primary">退房時間：{{roomDetail.checkInAndOut.checkOut}}</p>
        </div>
        <div class="rules">
          <p class="font font-h7 fontC-primary" v-if="roomDetail.descriptionShort.Bed[0] === 'Single'">．單人間僅供一位客人使用</p>
          <p class="font font-h7 fontC-primary">．臥室配有{{bedKind}}床和私人浴室</p>
          <p class="font font-h7 fontC-primary">．您需要的一切為您準備：床單和毯子，毛巾，肥皂盒洗髮水，吹風機。</p>
          <p class="font font-h7 fontC-primary">．房間裡有AC，當然還有WiFi。</p>
        </div>
        <div class="amenities">
          <div class="amenities-icon">
            <img src="@/assets/image/surface1.png" alt="" v-if="roomDetail.amenities.Breakfast === true" class="icon">
            <img src="@/assets/image/surface1.png" alt="" v-else style="opacity: 0.2;" class="icon">
            <img src="@/assets/image/correct.png" alt="" class="mark" v-if="roomDetail.amenities.Breakfast === true">
            <img src="@/assets/image/false.png" alt="" class="mark" v-else style="opacity: 0.2;">
          </div>
          <div class="amenities-icon">
            <img src="@/assets/image/surface2.png" alt="" v-if="roomDetail.amenities['Mini-Bar'] === true" class="icon">
            <img src="@/assets/image/surface2.png" alt="" v-else style="opacity: 0.2;" class="icon">
            <img src="@/assets/image/correct.png" alt="" class="mark" v-if="roomDetail.amenities['Mini-Bar'] === true">
            <img src="@/assets/image/false.png" alt="" class="mark" v-else style="opacity: 0.2;">
          </div>
          <div class="amenities-icon">
            <img src="@/assets/image/surface3.png" alt="" v-if="roomDetail.amenities['Room-Service'] === true" class="icon">
            <img src="@/assets/image/surface3.png" alt="" v-else style="opacity: 0.2;" class="icon">
            <img src="@/assets/image/correct.png" alt="" class="mark" v-if="roomDetail.amenities['Room-Service'] === true">
            <img src="@/assets/image/false.png" alt="" class="mark" v-else style="opacity: 0.2;">
          </div>
          <div class="amenities-icon">
            <img src="@/assets/image/surface4.png" alt="" v-if="roomDetail.amenities['Wi-Fi'] === true" class="icon">
            <img src="@/assets/image/surface4.png" alt="" v-else style="opacity: 0.2;" class="icon">
            <img src="@/assets/image/correct.png" alt="" class="mark" v-if="roomDetail.amenities['Wi-Fi'] === true">
            <img src="@/assets/image/false.png" alt="" class="mark" v-else style="opacity: 0.2;">
          </div>
          <div class="amenities-icon">
            <img src="@/assets/image/surface5.png" alt="" v-if="roomDetail.amenities['Child-Friendly'] === true" class="icon">
            <img src="@/assets/image/surface5.png" alt="" v-else style="opacity: 0.2;" class="icon">
            <img src="@/assets/image/correct.png" alt="" class="mark" v-if="roomDetail.amenities['Child-Friendly']=== true">
            <img src="@/assets/image/false.png" alt="" class="mark" v-else style="opacity: 0.2;">
          </div>
          <div class="amenities-icon">
            <img src="@/assets/image/surface6.png" alt="" v-if="roomDetail.amenities.Television === true" class="icon">
            <img src="@/assets/image/surface6.png" alt="" v-else style="opacity: 0.2;" class="icon">
            <img src="@/assets/image/correct.png" alt="" class="mark" v-if="roomDetail.amenities.Television=== true">
            <img src="@/assets/image/false.png" alt="" class="mark" v-else style="opacity: 0.2;">
          </div>
          <div class="amenities-icon">
            <img src="@/assets/image/surface7.png" alt="" v-if="roomDetail.amenities['Great-View'] === true" class="icon">
            <img src="@/assets/image/surface7.png" alt="" v-else style="opacity: 0.2;" class="icon">
            <img src="@/assets/image/correct.png" alt="" class="mark" v-if="roomDetail.amenities['Great-View'] === true">
            <img src="@/assets/image/false.png" alt="" class="mark" v-else style="opacity: 0.2;">
          </div>
          <div class="amenities-icon">
            <img src="@/assets/image/surface8.png" alt="" v-if="roomDetail.amenities.Refrigerator === true" class="icon">
            <img src="@/assets/image/surface8.png" alt="" v-else style="opacity: 0.2;" class="icon">
            <img src="@/assets/image/correct.png" alt="" class="mark" v-if="roomDetail.amenities.Refrigerator === true">
            <img src="@/assets/image/false.png" alt="" class="mark" v-else style="opacity: 0.2;">
          </div>
          <div class="amenities-icon">
            <img src="@/assets/image/surface9.png" alt="" v-if="roomDetail.amenities.Sofa === true" class="icon">
            <img src="@/assets/image/surface9.png" alt="" v-else style="opacity: 0.2;" class="icon">
            <img src="@/assets/image/correct.png" alt="" class="mark" v-if="roomDetail.amenities.Sofa  === true">
            <img src="@/assets/image/false.png" alt="" class="mark" v-else style="opacity: 0.2;">
          </div>
          <div class="amenities-icon">
            <img src="@/assets/image/surface10.png" alt="" v-if="roomDetail.amenities['Pet-Friendly'] === true" class="icon">
            <img src="@/assets/image/surface10.png" alt="" v-else style="opacity: 0.2;" class="icon">
            <img src="@/assets/image/correct.png" alt="" class="mark" v-if="roomDetail.amenities['Pet-Friendly']  === true">
            <img src="@/assets/image/false.png" alt="" class="mark" v-else style="opacity: 0.2;">
          </div>
          <div class="amenities-icon">
            <img src="@/assets/image/surface11.png" alt="" v-if="roomDetail.amenities['Smoke-Free'] === true" class="icon">
            <img src="@/assets/image/surface11.png" alt="" v-else style="opacity: 0.2;" class="icon">
            <img src="@/assets/image/correct.png" alt="" class="mark" v-if="roomDetail.amenities['Smoke-Free']  === true">
            <img src="@/assets/image/false.png" alt="" class="mark" v-else style="opacity: 0.2;">
          </div>
          <div class="amenities-icon">
            <img src="@/assets/image/surface12.png" alt="" v-if="roomDetail.amenities['Air-Conditioner'] === true" class="icon">
            <img src="@/assets/image/surface12.png" alt="" v-else style="opacity: 0.2;" class="icon">
            <img src="@/assets/image/correct.png" alt="" class="mark" v-if="roomDetail.amenities['Air-Conditioner']  === true">
            <img src="@/assets/image/false.png" alt="" class="mark" v-else style="opacity: 0.2;">
          </div>
        </div>
        <!-- Calender -->
        <calendar
        v-bind="$attrs"
        ></calendar>
      </div>
</template>
<script>
import Calendar from '@/components/Calendar'
export default {
  components: {
    Calendar
  },
  props: {
    roomDetail: {
      type: Object,
      required: true
    },
    filterGuest: {
      required: true
    },
    bedKind: {
      requird: true
    }
  }
}
</script>
