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
		font-size: 8vw;
		font-weight: bold;
	}

	.weekDay {
		font-size: 16vw;
		color:#ff3e00;
	}

	.displayDate {
		font-size: 6vw;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>