// Ricreare lo slider di immagini con Vue

var app = new Vue({
  el: "#app",
  data: {
    imageIndex: 0,
    image: ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg"]
  },
  methods: {
    nextImage: function () {
      this.imageIndex++

      if (this.imageIndex === (this.image.length - 1)) {
        this.imageIndex = 0
      }

    },
    prevImage: function () {
      this.imageIndex--

      if (this.imageIndex === 0) {
        this.imageIndex = (this.image.length - 1)
      }

    }


  }


})

