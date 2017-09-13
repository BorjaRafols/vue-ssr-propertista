<template>

<div class="container">
  <div class="row">
    <div class="col-12">
      
      <!-- !Carrousel -->
      <div id="carouselExampleIndicators" class="carousel slide">

        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            
            <!--           
            -->
            <template v-if="this.testimonials">
              <testimonial-element :testimonial="this.testimonials[this.currentNumber]"></testimonial-element>  
            </template>
            <template v-else>Loading...</template>

            
          </div>
        </div>
      </div>
    </div>  
  </div>
  <div class="row">
    <div class="col-12">
      <ol class="carousel-indicators">
        <li v-for="(testimonial, index) in this.testimonials" v-on:click="currentNumber = index" :class="index == currentNumber ? 'active' : ''"></li>
      </ol>
    </div>
  </div>
</div>

</template>

<script>
  
  import TestimonialSliderElement from './TestimonialSliderElement.vue'

  export default {
    name: 'app-testimonial-slider',
    data: function(){
      return {
        currentNumber: 0,
        timer: '',

      }
    },
    components: {
      'testimonial-element': TestimonialSliderElement
    },
    mounted: function () {
        this.startRotation();
    },
    methods:{
      startRotation: function(){
        this.timer = setInterval(this.next, 5000)
      },
      stopRotation: () => {
        clearTimeout(this.timer)
        this.timer = null;
      },
      next: function(){
        if (this.currentNumber + 1 <= this.testimonials.length - 1) {
          this.currentNumber++;
        }else{
          this.currentNumber = 0;
        }  
      }
    },

    computed: {
      testimonials: function(){
        return this.$store.state.testimonials
      }
    },
  }

</script>

<style>
.carousel-indicators li {
  list-style: none !important;
  cursor: pointer;
  display: inline;
  height: 32px;
}  

.carousel-indicators li {
  background-color: green
}
</style>