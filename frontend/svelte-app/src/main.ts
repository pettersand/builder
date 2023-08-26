import App from './App.svelte';
import './tailwind.css';
import './styles/app.postcss';
import './styles/theme.postcss';

const app = new App({
    target: document.body,
    props: {
        name: 'world'
    }
});

export default app;