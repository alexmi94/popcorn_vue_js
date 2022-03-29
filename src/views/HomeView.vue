<template>
	<div 
		class="home-view-component"
	>
		<section>
			<h2>Prêt à regarder? Remplissez le formulaire proposé dans cette page </h2>
			<p>Tous les mois profitez de toutes les nouveautés série et cinéma. A partir du mois
				prochain on vous propose tous les classiques du cinéma. Où que vous soyez. Tous
				le s films en VO, VOST, VF et plus d'options
			</p>
		</section>

		<section class="list_image">
		<ul>				
			<li v-for="item in moviepopular" :key="item.poster_path">
				<img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+item.poster_path" :alt=item.title>
			</li>
		</ul>
		</section>

		<aside>
			<router-link id="inscription" to="/formulaire">Inscription</router-link>
			<a href="" id="connexion">Déjà inscrit ? Connectez vous</a>
		</aside>
	</div>
</template>

<script>

	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'HomeView',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: {
				},
			//

			/*
				[VUE] Data => https://bit.ly/3GdqmXg
				Used to inject data in the Vue.js component
			*/
				data(){
					return{
						moviepopular: this.$store.getters.moviepopular
					}
				},
			//

			/*
				[VUE] Methods => https://bit.ly/3GdqmXg
				Used to add methods in Vue.js component
			*/
				methods:{
				fetchData: function(){
					this.$store.dispatch('PopularMovie', {nb: 10});
					}
				},
			//

			/*
				[VUE] Hooks => https://bit.ly/3s7AwEa
				Used for Vue.js component life cycle
			*/
				/* 
					[HOOK] Created
					Called synchronously after the instance is created
				*/
					created: function(){
						this.$store.subscribe((mutations) => {
							// Check mutation type
							if( mutations.type === "MOVIEPOPULAR" ){ 
								// Update local users value from $store getters
								this.moviepopular = this.$store.getters.moviepopular;
							}
						})
					},
				//
				

				/* 
					[HOOK] Mounted
					Called after the instance has been mounted
				*/
					mounted: function(){
						this.fetchData();
					},
				//

				/* 
					// Called synchronously after the instance has been initialized
					created: async function(){},

					// Called synchronously after the instance is created
					created: async function(){},

					// Called right before the mounting begins
					beforeMount: async function(){},

					// Called after the instance has been mounted
					mounted: async function(){},

					// Called when data changes
					beforeUpdate: async function(){},

					// Called after a data change
					updated: async function(){},

					// Called when a kept-alive component is activated
					

					// Called when a kept-alive component is deactivated
					deactivated: async function(){},

					// Called right before a component instance is unmounted
					beforeUnmount: async function(){},

					// Called after a component instance has been unmounted
					unmounted: async function(){},

					// Called when an error from any descendent component is captured
					errorCaptured: async function(){},

					// Called when virtual DOM re-render is tracked
					renderTracked: async function(){},

					// Called when virtual DOM re-render is triggered
					renderTriggered: async function(){},
				*/
			//
		}
	//
</script>