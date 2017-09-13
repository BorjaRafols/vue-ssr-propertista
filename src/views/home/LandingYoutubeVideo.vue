<template>
	<div class="container">
		<div class="row">
			<div class="embed-responsive embed-responsive-16by9">
			  	<iframe class="youtube-video-iframe" width="1111" height="625" frameborder="0" allowfullscreen=""></iframe>
			</div>
	  	</div>
	</div>

</template>

<script>
	
	export default {
		props: ['url'],
		name: 'app-landing-youtube-testimonial',
		mounted: function() {
			if (document) {
				this.$el.querySelector(".youtube-video-iframe").src = this.url
			}
		}
	}
	

</script>