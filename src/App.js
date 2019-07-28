import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {weatherThunkCreator} from "./redux/reducers/weatherReducer";
import Layout from "./Components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import WeatherContainer from "./Components/Weather/WeatherContainer";
import News from "./Components/News/News";
import NewsContainer from "./Components/News/NewsContainer";

class App extends React.Component{

  render(){
  return (
    <Layout>
      <Switch>

        <Route exact render={() => (<NewsContainer />)}  path={'/news/:userId?'}/>
          <Route exact render={() => (<WeatherContainer />)}/>

          {/*<Route exact render={() => (<WeatherContainer />)}/>*/}
        {/*<Route render={()=>(<h1>Not found</h1>)}/>*/}
      </Switch>
    </Layout>
  );
  }
}

export default App;
