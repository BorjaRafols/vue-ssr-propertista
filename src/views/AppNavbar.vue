<template>
	<nav class="navbar navbar-inverse">
         <div class="container">
            <div class="row .hidden-md-down">

                <!-- Brand logo -->
                <div class="col-5 col-sm-12">
                    <a class="navbar-brand d-block d-xs-none" href="#">
                        <img src="/public/propertista-logo.png" height="60px" class="d-inline-block align-top" alt="">
                    </a>
                </div>

                <!-- Links in navbar -->
                
                    <div class="col-1" >
                        <a href="#home-pasos" class="mx-auto">Cómo funciona</a>                     
                    </div>
                    <div class="col-1">
                        <a href="#home-pasos" class="allign-middle">Cómo funciona</a>                     
                    </div>
                    <div class="col-1">
                        <a href="#home-pasos" style="padding-bottom: 30px; padding-top: 20px;">Cómo funciona</a>                     
                    </div>
                    <div class="col-1">
                        <a href="#home-pasos" style="padding-bottom: 30px; padding-top: 20px;">Cómo funciona</a>                     
                    </div>
                    <div class="col-1">
                        <a href="#home-pasos" style="padding-bottom: 30px; padding-top: 20px;">Cómo funciona</a>                     
                    </div>
                    <div class="col-1">
                        <a href="#home-pasos" style="padding-bottom: 30px; padding-top: 20px;">Cómo funciona</a>                     
                    </div>

                    <!-- Toggle button -->
                    <div class="col-1">
                        <a href="#menu-toggle" class="btn btn-secondary" id="menu-toggle" v-on:click="toggleMenu" >+</a>                     
                    </div>
                
            </div>
         </div>
    </nav>
</template>

<script>
	
	export default {
        props: ["toggleMenu"],
	}

</script>

<style>
.navbar {
    background-color: #FFFFFF
}

.navbar .navbr-brand {
    background-color: #FFFFFF   
}

.navbar > div.container > div.row > div.col-1 {

}
</style>