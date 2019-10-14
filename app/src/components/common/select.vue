<template>
    <div class="select-area">
        <div class="input-area" @click="showList">
            <span class="value-span">{{selectValue}}</span>
            <span class="triangle"></span>
        </div>
        <ul class="select-ul" v-show="showUl">
            <li v-for="(item ,index) of list"
                :class="{'active':selectValue === item.name}"
                :key="index" @click="changeValue(item.name)">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'select',
  data: function () {
    return {
      list: [
        { name: '第一项', value: 1 },
        { name: '第二项', value: 2 },
        { name: '第三项', value: 3 },
        { name: '第四项', value: 4 },
        { name: '第五项', value: 5 }
      ],
      selectValue: '请选择',
      showUl: false
    }
  },
  methods: {
    changeValue (value) {
      this.selectValue = value
      this.hideList()
    },

    hideList () {
      this.showUl = false
    },

    showList () {
      this.showUl = !this.showUl
    }
  },
  mounted() {
    $()
  }
}
</script>

<style scoped>
.select-area {
  width: 200px;
  height: 30px;
  line-height:30px;
  position:relative;
  border:1px solid #dedede;
  border-radius:5px;
  margin:50px auto 0 auto;
}

.select-area:focus{
  outline:none
}
.input-area {
    width:100%;
    height:100%;
  cursor:pointer;
}

.input-area span {
  display:inline-block;
}
.input-area span.value-span {
  width:100%;
  height:100%;
  background:#f5f5f5;
  text-align:left;
  line-height:30px;
  text-indent:10px;
}

.input-area span.triangle {
  width:0;
  height:0;
  line-height:0;
  border-top:6px solid #6a8edd;
  border-left:5px solid transparent;
  border-right:5px solid transparent;
  position:absolute;
  top:10px;
  right:12px;
}

.select-ul {
    width:200px;
    margin:0;
    padding:0;
  position:absolute;
  top:30px;
  left:0;
  border:1px solid #dedede;
  border-radius:5px;
}

.select-ul li {
  width:200px;
  height:30px;
  text-indent:10px;
  color:#6a83dd;
  font-size:14px;
  list-style:none;
  text-align:left;
  cursor:pointer;
}

.select-ul li.active {
  color:#f00
}

</style>
