import { mount } from 'svelte';
import App from './App.svelte'
import './style.css'


const appContainer = document.getElementById('app')! as HTMLDivElement
mount(App, { target: appContainer })