const gallery = new Vue({
  el: '#gallery',
  data() {
    return {
      imgs: ['1-01.jpg', '1-02.jpg', '1-03.jpg', '1-04.jpg', '1-05.jpg', '1-06.jpg', '1-07.jpg', '1-08.jpg'],
      index: 0,
      show: true
    }
  },
  mounted() {
    setInterval(() => {
      this.nextHandle()
    }, 10000)
  },
  methods: {
    nextHandle() {
      this.show = false
      if (this.index < this.imgs.length - 1) {
        this.index++
      } else {
        this.index = 0
      }
      setTimeout(() => {
        this.show = true
      }, 500)
    }
  }
})
