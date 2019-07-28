import React from 'react'
import Weather from "./Weather";
import {connect} from "react-redux";
import {weatherAC, weatherThunkCreator} from "../../redux/reducers/weatherReducer";
import {weatherForecasThunkCreator, weatherForecastReadyAC} from "../../redux/reducers/forecastReducer";

class WeatherContainer extends React.Component{
    render(){
        return(
            <Weather {...this.props} />
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        city: state.weather.city,
        weather: state.weather.weather,
        isFetch: state.weather.isFetch,
        isError: state.weather.isError,
        isReady: state.forecast.isReady,
        forecastInfo: state.forecast.forecast,
        forecastFetch: state.forecast.isFetchForecast
    }
}

export default connect(mapStateToProps, {
    setCityInfo: weatherThunkCreator,
    setForecastInfo: weatherForecasThunkCreator,
    readyForecast: weatherForecastReadyAC,
    weatherAC: weatherAC

})(WeatherContainer)