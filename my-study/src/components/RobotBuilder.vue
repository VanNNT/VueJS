<template>
  <div>
    <div class="top-row">
      <div class="top part">
        <img v-bind:src="availableParts.heads[headIndex].src" title="head"/>
        <button v-on:click="selectPrev(headIndex, availableParts.heads.length, constants.HEAD)" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNext(headIndex, availableParts.heads.length, constants.HEAD)" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="availableParts.arms[armLeftIndex].src" title="left arm"/>
        <button v-on:click="selectPrev(armLeftIndex, availableParts.arms.length, constants.ARM_LEFT)" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNext(armLeftIndex, availableParts.arms.length, constants.ARM_LEFT)" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="availableParts.torsos[torsoIndex].src" title="center arm"/>
        <button v-on:click="selectPrev(torsoIndex, availableParts.torsos.length, constants.TOSROS)" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNext(torsoIndex, availableParts.torsos.length, constants.TOSROS)" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="availableParts.arms[armRightIndex].src" title="right arm"/>
        <button v-on:click="selectPrev(armRightIndex, availableParts.arms.length, constants.ARM_RIGHT)" class="prev-selector">&#9650;</button>
        <button v-on:click="selectNext(armRightIndex, availableParts.arms.length, constants.ARM_RIGHT)" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="availableParts.bases[baseIndex].src" title="wheel"/>
        <button v-on:click="selectPrev(baseIndex, availableParts.bases.length, constants.BASE)" class="prev-selector">&#9668;</button>
        <button v-on:click="selectNext(baseIndex, availableParts.bases.length, constants.BASE)" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';
import constants from '../data/constants';

function getPrevValidIndex(index, length) {
    const prevIndex = index - 1;
    return prevIndex < 0 ? length - 1 : prevIndex;
}

function getNextValidIndex(index, length) {
    const nextIndex = index + 1;
    return nextIndex > length - 1 ? 0 : nextIndex;
}

export default {
  name: 'RobotBuilder',
  props: {
    msg: String
  },
  data() {
      return {
          availableParts,
          headIndex : 0,
          armLeftIndex: 0,
          torsoIndex: 0,
          armRightIndex: 0,
          baseIndex: 0,
          constants
      }
  },
  methods: {
      selectNext: function(index, length, type) {
         switch(type){
            case constants.HEAD:
                this.headIndex = getPrevValidIndex(index, length);
                break;
            case constants.ARM_LEFT:
                this.armLeftIndex = getPrevValidIndex(index, length);
                break;
            case constants.ARM_RIGHT:
                this.armRightIndex = getPrevValidIndex(index, length);
                break;
            case constants.TOSROS:
                this.torsoIndex = getPrevValidIndex(index, length);
                break;
            case constants.BASE:
                this.baseIndex = getPrevValidIndex(index, length);
                break;
        }
      },
      selectPrev(index, length, type) {
          switch(type){
            case constants.HEAD:
                this.headIndex = getNextValidIndex(index, length);
                break;
            case constants.ARM_LEFT:
                this.armLeftIndex = getNextValidIndex(index, length);
                break;
            case constants.ARM_RIGHT:
                this.armRightIndex = getNextValidIndex(index, length);
                break;
            case constants.TOSROS:
                this.torsoIndex = getNextValidIndex(index, length);
                break;
            case constants.BASE:
                this.baseIndex = getNextValidIndex(index, length);
                break;
        }
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
} 
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;    
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;  
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;    
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}

</style>
