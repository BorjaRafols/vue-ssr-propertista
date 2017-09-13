import {
  fetchTestimonials
} from '../api'

export default {
  
  FETCH_TESTIMONIALS:  ({commit, state}) => {{

    return state.testimonials.length > 0
      ? Promise.resolve(state.testimonials)
      : fetchTestimonials().then((testimonials) => {
        testimonials = testimonials.data;
         commit('SET_TESTIMONIALS', { testimonials })
      })
  }}
}
