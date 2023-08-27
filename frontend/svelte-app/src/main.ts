import App from './App.svelte';
import './tailwind.css';
import './styles/theme.postcss';
import './styles/app.postcss';

const app = new App({
    target: document.body,
    props: {
        name: 'app'
    }
});

export default app;