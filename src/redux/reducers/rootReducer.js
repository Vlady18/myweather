import {combineReducers} from "redux";
import weatherReducer from "./weatherReducer";
import forecastReducer from "./forecastReducer";
import newsReducer from "./newsReducer";

export const rootReducer = combineReducers({
    weather: weatherReducer,
    news: newsReducer,
    forecast: forecastReducer
})