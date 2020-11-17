<template>
  <div class="modal">
        <div id="finish-modal" class="modal-overlay">
          <div class="modal-judge">
            <div class="close-judge"><i class="fas fa-times" @click="$emit('close')"></i></div>
            <div class="modal-judgeBody">
               <img src="@/assets/image/default.svg" alt="">
               <p class="font font-display1">預約失敗</p>
               <p class="font-h5">
                  <span>哀呀!晚了一步!您預約的日期已經被預約走了，<br></span>
                  <span>再看看其他房型吧</span>
                </p>
            </div>
          </div>
        </div>
  </div>
</template>
