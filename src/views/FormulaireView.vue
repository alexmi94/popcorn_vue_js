<template>
	<div 
		class="formulaire-view-component"
	>
		<section class="list_image">
		<ul>				
			<li v-for="item in moviepopular" :key="item.poster_path">
				<img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+item.poster_path" :alt=item.original_title>
			</li>
		</ul>
		</section>

    <section class="form">
        <h2>Inscription</h2>
        <form action="#">
            <label for="pseudo">Pseudo</label>
            <input type="text" id="pseudo" placeholder="Pseudo" aria-required="true" name="pseudo" autofocus>
            <label for="prenom">Prenom</label>
            <input type="text" id="prenom" placeholder="Prenom" aria-required="true" name="prenom">
            <label for="email">E-mail</label>
            <input type="text" id="email" placeholder="E-mail" aria-required="true" name="email">
            <label for="password">Mot de passe</label>
            <input type="password" id="password" placeholder="Mot de passe" aria-required="true" name="password">
            <label for="pays">Pays</label>
            <input type="text" id="pays" placeholder="Pays" aria-required="true" name="pays">
            

            <input type="submit" value="Valider">
        </form>
    </section>
	</div>
</template>

<script>

	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'FormulaireView',

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
					this.$store.dispatch('PopularMovie', {nb: 5});
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