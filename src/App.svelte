<script>
	export let displayDate;
	export let weekDay;
</script>

<main>
	<h1>Today is</h1>
	<p class="weekDay">{weekDay}</p>
	<date class="displayDate">{displayDate}</date>
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: bold;
	}

	.weekDay {
		font-size: 6em;
		color:#ff3e00;
	}

	.displayDate {
		font-size: 3em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>