<template>
 <div class="calendar">
  <div class="font font-h7 fontC-primary calendar-font">空房狀態查詢：{{message}}</div>
  <v-calendar :columns="$screens({ default: 1, lg: 2 })"
    @dayclick='isBooked'>
  </v-calendar>
 </div>
</template>

<script>
// import Calendar from 'v-calendar/lib/components/calendar.umd'
// import DatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
  props: {
    // allBookingData: {
    //   type: Array,
    //   required: true
    // }
  },
  data () {
    return {
      message: ''
    }
  },
  inheritAttrs: false,
  methods: {
    isBooked (day) {
      const now = `${new Date(day.date).getFullYear()}-${new Date(day.date).getMonth() + 1}-${new Date(day.date).getDate()}`
      // console.log(now)
      let book = ''
      const bookArr = []
      this.$attrs.allBookingData.filter(item => {
        book = `${new Date(item.date).getFullYear()}-${new Date(item.date).getMonth() + 1}-${new Date(item.date).getDate()}`
        bookArr.push(book)
      })
      const same = bookArr.some(e => { return e === now })
      same ? this.message = '當天已無空房囉!' : this.message = '尚有空房'
    }
  }
}
</script>
<style lang="scss">
.modal-form .vc-text-base {
  box-sizing: border-box;
  height: 40px;
}

.calendar .vc-border-gray-400 {
  border-color: #38470B;
}

.calendar .vc-rounded-lg {
  border-radius: 0px;
}

.calendar .vc-text-gray-900, .calendar .vc-text-gray-800 {
  color:#38470B;
}
</style>
