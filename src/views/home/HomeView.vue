<template>
	<div class="home-view">
		<landing-image></landing-image>
		<landing-collaborators></landing-collaborators>
		<landing-youtube-video url="https://www.youtube.com/embed/2TQPyhHUC-0"></landing-youtube-video>
		<landing-process></landing-process>
		<landing-contact-with-logo></landing-contact-with-logo>
		<landing-press-mentions></landing-press-mentions>
		<landing-price-tables></landing-price-tables>
		<landing-separator-dark></landing-separator-dark>
		<landing-banner-contact></landing-banner-contact>
		<landing-testimonials></landing-testimonials>
		<landing-youtube-video url="https://www.youtube.com/embed/7Ioa7c1Ltsw"></landing-youtube-video>
		<landing-documentation-test></landing-documentation-test>
		<landing-latest-blog-entries></landing-latest-blog-entries>
	</div>
</template>

<script>
	import LandingImage from './LandingImage.vue'
	import LandingCollaborators from './LandingCollaborators.vue'
	import LandingProcess from './LandingProcess.vue'
	import LandingContactWithLogo from './LandingContactWithLogo.vue'
	import LandingPressMentions from './LandingPressMentions.vue'
	import LandingPriceTables from './LandingPricingTables.vue'
	import LandingSeparatorDark from './LandingSeparatorDark.vue'
	import LandingBannerContact from './LandingBannerContact.vue'
	import LandingTestimonials from './../testimonials/TestimonialSlider.vue'
	//import LandingTestimonials from './LandingTestimonials.vue'
	import LandingYoutubeVideo from './LandingYoutubeVideo.vue'
	import LandingDocumentationTest from './LandingDocumentationTest.vue'
	import LandingLatestBlogEntries from './LandingLatestBlogEntries.vue'

	export default {
		name: 'app-landing',
		components: {
			'landing-image': LandingImage,
			'landing-collaborators': LandingCollaborators,
			'landing-process': LandingProcess,
			'landing-contact-with-logo': LandingContactWithLogo,
			'landing-press-mentions': LandingPressMentions,
			'landing-price-tables': LandingPriceTables,
			'landing-separator-dark': LandingSeparatorDark,
			'landing-banner-contact': LandingBannerContact,
			'landing-testimonials': LandingTestimonials,
			'landing-youtube-video': LandingYoutubeVideo,
			'landing-documentation-test': LandingDocumentationTest,
			'landing-latest-blog-entries': LandingLatestBlogEntries

		},
		asyncData({store}) {
			return store.dispatch('FETCH_TESTIMONIALS')
		}
	}
</script>