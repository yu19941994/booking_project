<template>
  <div class="modal">
        <div id="finish-modal" class="modal-overlay">
          <div class="modal-judge">
            <div class="close-judge"><i class="fas fa-times" @click="$emit('close')"></i></div>
            <div class="modal-judgeBody">
               <img src="@/assets/image/success.svg" alt="">
               <p class="font font-display1">預約成功</p>
               <p class="font-h5">
                  <span>請留意簡訊發送訂房通知，入住當日務必出示此訂房通知，<br></span>
                  <span>若未收到簡訊請來電確認，謝謝您</span>
                </p>
            </div>
          </div>
        </div>
  </div>
</template>
