import axios from '../utils/axios'

const api_all = {
         // Получаем список всех сообщений в блоге
    post_user_login_api(username,password) {
        return axios({
            url: '/api/user/login/',
            method: 'POST',
            data: {
                username: username,
                password: password,
            }
        })
    },
    get_article_list() {
        return axios({
            url: '/api/article/list-article/',
            method: 'GET',
        })
    },
    create_test(dog) {
        return axios({
            url: '/api/test/create/',
            method: 'POST',
            data: {
                dog: dog
            },
        })
    },
};

export default api_all
