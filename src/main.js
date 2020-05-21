import App from './App.svelte';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const now = new Date();

const app = new App({
  target: document.body,
  props: {
    displayDate: now.toLocaleDateString(),
    weekDay: days[now.getDay()],
  },
});

export default app;
