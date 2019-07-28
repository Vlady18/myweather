import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/',
})
const instanceNews = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines',
})
export const API = {
    getCurrentWeather(city){
        return instance.get(`data/2.5/weather?q=${city}&APPID=7bb0d4450f7d6addbe608642a58bcf7a`)
    },
    getCurrentForecast(city){
        return instance.get(`data/2.5/forecast?q=${city}&APPID=7bb0d4450f7d6addbe608642a58bcf7a&cnt=5`)
    },
    getNews(country, currentPage){
        return instanceNews.get(`?pageSize=5&page=${currentPage}&country=${country}&apiKey=3344e994d3f34b4887aa777a5fde3aba`).then(response=> response.data)
    },
    changeCurrentPage(country, currentPage){
        return instanceNews.get(`?pageSize=5&page=${currentPage}&country=${country}&apiKey=3344e994d3f34b4887aa777a5fde3aba`).then(response=> response.data)
    }
}

