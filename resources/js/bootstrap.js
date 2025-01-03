import axios from 'axios';
window.axios = axios;

let token = document.querySelector('input[name="_token"]').getAttribute('content');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
