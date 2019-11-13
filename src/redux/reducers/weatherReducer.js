import {API} from "../../api/Api";

const WEATHER = 'WEATHER'
const TOGGLE_IS_FETCH = 'TOGGLE_IS_FETCH'
const WEATHER_ERROR = 'WEATHER_ERROR'

const initialState = {
    weather: [],
    city: '',
    isFetch: false,
    isError: false
    // coord: null,
    // weather: null,
    // main: null,
    // wind: null,
    // clouds: null
}

const weatherReducer = (state=initialState, action)=>{
    switch (action.type) {
        case WEATHER:
            return{
                ...state,
                weather: action.data,
                // coord: action.data.coord,
                // main: action.data.main,
                // wind: action.data.wind,
            }
        case TOGGLE_IS_FETCH:
            return{
                ...state,
                isFetch: action.fetch
        }
        case WEATHER_ERROR:
            return{
                ...state,
                isError: true
        }
        default:
            return state
    }

}

export const weatherAC =(data) =>{
    return{
        type: WEATHER,
        data
    }
}

const weatherErrorAC =() =>{
    return{
        type: WEATHER_ERROR,
    }
}

const isFetchingAC =(fetch) =>{
    return{
        type: TOGGLE_IS_FETCH,
        fetch
    }
}


export const weatherThunkCreator = (city) => (dispatch)=>{
    dispatch(isFetchingAC(true))
    API.getCurrentWeather(city).then(data=>{
        if(data.status === 200 && data.data.cod === 200){
            dispatch(weatherAC(data.data))
            dispatch(isFetchingAC(false))
        }
    },
        (error) => { dispatch(weatherErrorAC(true))
            dispatch(isFetchingAC(false))
            dispatch(weatherAC([]))

        }
)
}

export default weatherReducer