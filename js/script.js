// Ricreare lo slider di immagini con Vue

var app = new Vue({
  el: "#app",
  data: {
    imageIndex: 0,
    image: ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg"],
  },
  methods: { // next
    nextImage: function () {
      this.imageIndex++

      if (this.imageIndex > (this.image.length - 1)) {
        this.imageIndex = 0
      }
      console.log("next", this.imageIndex);

    }, // prev
    prevImage: function () {
      this.imageIndex--

      if (this.imageIndex < 0) {
        this.imageIndex = (this.image.length - 1)
      }
      console.log("prev", this.imageIndex);
    }, // circle
    circle: function (i) {
      this.imageIndex = i
    }

  }

})

