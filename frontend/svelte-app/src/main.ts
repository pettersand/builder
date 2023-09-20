import App from './App.svelte';
import './styles/main.css';
import './utilities/axiosConfig'

const app = new App({
    target: document.querySelector('#app'),
    props: {
        name: 'World'
    }
});

export default app;