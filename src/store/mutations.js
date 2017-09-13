import Vue from 'vue'

export default {
  SET_TESTIMONIALS: (state, {testimonials}) => {
    state.testimonials = testimonials;
  }
}
