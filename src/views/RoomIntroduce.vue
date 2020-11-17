<template>
  <div class="detail">
    <template v-if="isloaded">
      <photo
      :imageUrl = "imageUrl"
      :roomDetail = "roomDetail"
      @open = "onModalFormOpen"
      ></photo>
      <description
      :allBookingData = "allBookingData"
      :roomDetail = "roomDetail"
      :filterGuest = "filterGuest"
      :bedKind = 'bedKind'
      ></description>
      <!-- Modal -->
      <transition name="slide-fade">
        <modal
        v-if="modalShow"
        :roomDetail = "roomDetail"
        :filterGuest = "filterGuest"
        :bedKind = 'bedKind'
        @close = "onModalFormClose"
        @open-success = "onModalSuccessOpen"
        @open-default = "onModalDefaultOpen"
        ></modal>
      </transition>
      <transition name="slide-fade">
        <success
        v-if="isSuccess"
        @close = "onModalSuccessClose"
        ></success>
      </transition>
      <transition name="slide-fade">
        <default
        v-if="isDefault"
        @close = "onModalDefaultClose"
        ></default>
      </transition>
    </template>
  </div>
</template>
<script>
import Success from '@/components/Success'
import Default from '@/components/Default'
// import Calendar from '@/components/Calendar'
import Photo from '@/components/Photo'
import Description from '@/components/Description'
import Modal from '@/components/Modal'
// import DatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
  components: {
    Success,
    Default,
    // Calendar,
    // DatePicker,
    Photo,
    Description,
    Modal
  },
  data () {
    return {
      roomId: '',
      roomDetail: {},
      imageUrl: [],
      isloaded: false,
      modalShow: false,
      isSuccess: false,
      isDefault: false,
      bedKind: '',
      allBookingData: []
    }
  },
  methods: {
    gotoRoom () {
      const roomId = this.$route.params.id
      return this.axios({
        method: 'get',
        baseURL: `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${roomId}`,
        headers: {
          Authorization: 'Bearer ZpNjg6fR488qhR6rBqkJUPUxciEgE5JfKKuvTBSEa8WyQu5ifFDykP9yVJQt',
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          // console.log(response.data.room[0])
          // vm.roomName = response.data.room.name
          this.allBookingData = response.data.booking
          this.roomDetail = response.data.room[0]
          this.imageUrl = this.roomDetail.imageUrl.filter((item, index) => { return index === 1 })
          // console.log(this.imageUrl)
          console.log(this.allBookingData)
        })
        .finally(() => {
          this.isloaded = true
        })
      // this.$router.push('/SingleRoom')
    },
    onModalFormOpen () {
      this.modalShow = true
    },
    onModalFormClose () {
      this.modalShow = false
    },
    onModalSuccessOpen () {
      this.isSuccess = true
    },
    onModalSuccessClose () {
      this.isSuccess = false
      this.modalShow = false
      this.gotoRoom()
    },
    onModalDefaultOpen () {
      this.isDefault = true
    },
    onModalDefaultClose () {
      this.isDefault = false
      this.modalShow = false
    },
    filterBed () {
      if (this.roomDetail && this.roomDetail.descriptionShort) {/**/}
      switch (this.roomDetail.descriptionShort.Bed[0]) {
        case 'Single':
          this.bedKind = '單人'
          break
        case 'Double':
          this.bedKind = '雙人'
          break
        case 'Small Double':
          this.bedKind = '小雙人'
          break
        case 'Queen':
          this.bedKind = '大雙人'
      }
    }
  },
  computed: {
    filterGuest () {
      return this.roomDetail.descriptionShort.GuestMin === this.roomDetail.descriptionShort.GuestMax ? this.roomDetail.descriptionShort.GuestMin : `${this.roomDetail.descriptionShort.GuestMin}-${this.roomDetail.descriptionShort.GuestMax}`
    }
  },
  async created () {
    await this.gotoRoom()
    // this.calculateDate()
    this.filterBed()
  }
}
</script>
