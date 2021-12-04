import axios from'axios '// импортировать axios в node_modules
import qs from 'qs'

 axios.defaults.baseURL = "http://192.168.1.100:8080/"; // IP интерфейса внутреннего интерфейса: порт

axios.interceptors.request.use((request) => {
         // что-то делаем перед отправкой запроса
    var token = JSON.parse(localStorage.getItem('TOKEN'));
    if (token) {
        token = "TOKEN " + token;
        request.headers.common['Authorization'] = token;
    }
    if(request.method  === 'post'){
        request.data = qs.stringify(request.data);
    }
    return request;
},(error) =>{
         console.log ('Неправильная передача параметров');
    return Promise.reject(error);
});

 export default axios // экспорт аксиомов
