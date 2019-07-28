import {API} from '../../api/Api'

const WEATHER_FORECAST = 'WEATHER_FORECAST'
const WEATHER_FORECAST_READY = 'WEATHER_FORECAST_READY'
const WEATHER_FORECAST_FETCH = 'WEATHER_FORECAST_FETCH'


const initialState = {
    forecast: [],
    isReady: false,
    isFetchForecast: false
}

const forecastReducer = (state=initialState, action)=>{
    switch (action.type) {
        case WEATHER_FORECAST:
            return{
                ...state,
                forecast: action.data,
            }
        case WEATHER_FORECAST_READY:
            return{
                ...state,
                isReady: action.ready,
            }
        case WEATHER_FORECAST_FETCH:
            return{
                ...state,
                isFetchForecast: action.fetch,
            }
        default:
            return state
    }

}

const weatherForecastAC =(data) =>{
    return{
        type: WEATHER_FORECAST,
        data
    }
}
export const weatherForecastReadyAC =(ready) =>{
    return{
        type: WEATHER_FORECAST_READY,
        ready
    }
}
export const weatherForecastFetchAC =(fetch) =>{
    return{
        type: WEATHER_FORECAST_FETCH,
        fetch
    }
}



export const weatherForecasThunkCreator = (city)=>(dispatch)=>{
    dispatch(weatherForecastFetchAC(true))
    // debugger
    API.getCurrentForecast(city).then((data) =>{
        dispatch(weatherForecastAC(data.data))
        dispatch(weatherForecastFetchAC(false))
        dispatch(weatherForecastReadyAC(true))
    })
}
export default forecastReducer