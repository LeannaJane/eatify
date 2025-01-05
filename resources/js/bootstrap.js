import axios from 'axios';
window.axios = axios;

let token = document.querySelector('input[name="_token"]').getAttribute('content');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

if (location.hostname == "localhost") {
    window.axios.defaults.baseURL = 'http://localhost/api/';
} else {
    window.axios.defaults.baseURL = 'http://localhost/api/';
}
