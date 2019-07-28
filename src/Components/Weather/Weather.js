import React from 'react'
import classes from './Weather.module.css'
import Input from "../Input/Input";
import Loader from "../Loader/Loader";
import Forecast from "../Forecast/Forecast";
import ModalWindow from "../modalWindow/modalWindow";
class Weather extends React.Component{
    // componentWillUnmount(){
    // }
    state={
        currentInputCity: '',
        currentDate: null
    }
    setCity=() =>{
        this.props.setCityInfo(this.state.currentInputCity)
    }
    setCurrentInputCity=(e) =>{
        this.setState({
            currentInputCity: e.target.value
        })
    }
    getForecast=()=>{
        this.props.setForecastInfo(this.state.currentInputCity)
    }
    imgSkyUrl = (urlPart)=>{
        return `http://openweathermap.org/img/wn/${urlPart}@2x.png`
    }
    closeModalHandler = ()=>{
        this.props.readyForecast(false)

    }
    render() {
        console.log(this.props)
        const mainWeather = this.props.weather
        let offset = this.props.weather.timezone / 3600
        let currentDateStr = new Date( new Date().getTime() + offset * 3600 * 1000).toUTCString().replace( / GMT$/, "" )
        return(
            <section className={classes.Weather}>
                <h1>Check weather in your city!</h1>
                <div className={classes.form}>
                    <Input
                        setCurrentInputCity={this.setCurrentInputCity}
                    />
                    <i onClick={this.setCity} className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className={classes.result_weather}>
                    {this.props.isFetch
                        ?
                        <Loader />
                        :
                        this.props.weather.length !== 0
                            ?
                            <ul>
                                <li>{mainWeather.name}</li>
                                <li>{currentDateStr}</li>
                                <li className={classes.curTemp}>{Math.round(mainWeather.main.temp - 273)} &#8451; </li>
                                <li><span><img src={`${this.imgSkyUrl(mainWeather.weather[0].icon)}`} alt=""/>{mainWeather.weather[0].description}</span></li>
                                <li>{Math.round(mainWeather.main.temp_min - 273)} &#8451; / {Math.round(mainWeather.main.temp_max - 273)} &#8451;</li>
                                <li><b>Pressure: </b> {mainWeather.main.pressure}</li>
                                <li><b>Humidity: </b>  {mainWeather.main.humidity}%</li>
                                <button disabled={this.state.currentInputCity ? false : 'disabled'} onClick={this.getForecast}>Get Forecast!</button>
                            </ul>

                            :
                            this.props.isError
                                ?
                                <b>Error...Enter the correct data in the field.</b>
                                : null
                    }

                    {this.props.forecastInfo && this.props.isReady
                        ?
                            <ModalWindow closeModalHandler={this.closeModalHandler}>
                                <Forecast {...this.props}/>
                            </ModalWindow>
                        :
                        this.props.forecastFetch
                        ?
                            <Loader />
                            : null
                    }
                </div>
            </section>
        )
    }
}

export default Weather