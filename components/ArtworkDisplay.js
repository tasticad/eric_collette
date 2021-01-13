app.component('artwork-display', {
	props: {
		premium: {
			type: Boolean,
			required: true
		}
	},
	template: 
	/*html*/
	`<div class="artwork-display">
		<div class="container">
			<div class="artwork" v-for="artwork in artworks">
				<img v-bind:src="artwork.image">
				<h4>{{ artwork.title }}</h4>
			</div>
			<!--div class="artwork-info">
				<h1>{{ title }}</h1>
			</div-->
		</div>
	</div>`,
	data() {
		return {
			artist: 'Eric Collette',
			artwork: 'Œuvres',
			selectedArtwork: 0,
			details: ['50% cotton', '30% wool', '20% polyester'],
			artworks: [
				{ image: './assets/images/pictures/oeuvre01.jpg', title: 'Œuvre 1' },
				{ image: './assets/images/pictures/oeuvre02.jpg', title: 'Œuvre 2' },
				{ image: './assets/images/pictures/oeuvre03.jpg', title: 'Œuvre 3' },
				{ image: './assets/images/pictures/oeuvre04.jpg', title: 'Œuvre 4' },
				{ image: './assets/images/pictures/oeuvre05.jpg', title: 'Œuvre 5' },
				{ image: './assets/images/pictures/oeuvre06.jpg', title: 'Œuvre 6' },
				{ image: './assets/images/pictures/oeuvre07.jpg', title: 'Œuvre 7' },
				{ image: './assets/images/pictures/oeuvre08.jpg', title: 'Œuvre 8' },
				{ image: './assets/images/pictures/oeuvre09.jpg', title: 'Œuvre 9' },
				{ image: './assets/images/pictures/oeuvre10.jpg', title: 'Œuvre 10' },
			]
		}
	},
	computed: {
		title() {
				return this.artwork + " d'" + this.artist
		}
	}
})