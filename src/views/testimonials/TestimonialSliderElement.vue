<template>
	<div class="container">
        <div class="row">
            <div class="col-md-12 p-4">
                <img class="img-fluid d-block rounded-circle mx-auto" width="64px" src="https://pingendo.github.io/templates/sections/assets/test_meow.jpg">
                <p class="my-4"><i>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</i></p>
                <p>	
                	<b>{{this.testimonial.name}}</b><br>{{ this.testimonial.email}}
                </p>
            </div>
        </div>
    </div>	
</template>

<script>
	
	export default {
		name: 'app-testimonial-slider-element',
		props: ['testimonial'],
	}

</script>