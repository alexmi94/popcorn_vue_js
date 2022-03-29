<template>
  <div id="app">
    <HeaderMain/>
    <main>
			<router-view :key="$route.name" />
		</main>
    <FooterMain/>
  </div>
  
</template>

<script>

		import HeaderMain from './components/main/HeaderMain.vue';
    import FooterMain from './components/main/FooterMain.vue';

    export default {
      name: 'App',
      components: {HeaderMain, FooterMain}

    }
</script>
<style src="@/assets/css/style.css"></style>

