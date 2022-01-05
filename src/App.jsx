import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ContinentDescription, AustraliaDescription,
    AsiaDescription, AfricaDescription,
    AntarcticaDescription, NorthAmericaDescription, 
    SouthAmericaDescription, EuropeDescription} from "./description.jsx";
import Carousel from "./carousel.jsx";
import {continents} from "./data.js";

class ContinentOverviewLeft extends React.Component {
  /**
   * @PROPS: name, link, text
   * */
  render() {
    return (
      <div className="mt-6 px-0 rounded-lg bg-white lg:mr-64">
        <img src={"images"+this.props.link+".jpg"} alt={this.props.name} className="w-full h-1/2 rounded-lg" />
        <h1 className="lg:text-left text-center lg:text-5xl text-3xl text-purple-600 lg:py-4 py-2 font-bold ml-4">
          {this.props.name}
        </h1>
        <p className="mt-1 ml-4 text-gray-600 text-xl pr-2 lg:text-xl md:text-xl sm:text-lg">
          {this.props.text}
        </p>
        <br />
        <a href={this.props.link} rel="no-opener no-referer">
          <button className="border-b-4 m-4 p-4 rounded hover:border-purple-200 bg-purple-300 border-purple-500">
            Learn more
          </button>
        </a>
        <br />
      </div>
    );
  }
}

class ContinentOverviewRight extends React.Component {
  /**
   * @PROPS: name, link, text
   * */
  render() {
    return (
      <div className="mt-6 px-0 rounded-lg bg-white lg:ml-64" align="right">
        <img src={"images/"+this.props.link+".jpg"} alt={`${this.props.name}`} className="w-full h-1/2 rounded-lg" />
        <h1 className="lg:text-right text-center lg:text-5xl text-3xl text-purple-600 lg:py-4 py-2 font-bold mr-4">
          {this.props.name}
        </h1>
        <p className="mt-1 mr-4 text-gray-600 text-xl pr-2 lg:text-xl md:text-xl sm:text-l">
          {this.props.text}
        </p>
        <br />
        <a href={this.props.link} rel="no-opener no-referer">
          <button className="border-b-4 m-4 p-4 rounded hover:border-purple-200 bg-purple-300 border-purple-500">
            Learn more
          </button>
        </a>
        <br />
      </div>
    );
  }
}


class ContinentDefinition extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="p-0">
          <div className="lg:w-2/3 bg-purple-300 text-gray-700 rounded mt-8 flex border-b-4 border-purple-500">
            <br />
            <div className="ml-16 mt-6">
              <h1 className="text-4xl text-purple-600 font-bold">
                Continent
              </h1>
              <br/>
              <p className="mt-1 text-gray-600 text-xl pr-6 lg:text-xl md:text-xl sm:text-l">
                A continent is a group of certain countries in a certain area,
                which are divided based on factors such as climate, geographical
                features, culture, flora and fauna, etc. The Earth is divided into seven
                continents: Africa, Antarctica, Asia, Australia, North America
                and South America. 
                The continents add up to about 148 million square kilometers of landmass.
              </p>
              <br />
              <br />
            </div>
          </div>
          <br />
        </div>
        <React.Fragment>
          <br />
          <br />
        </React.Fragment>
      </React.Fragment>
    );
  }
}


  let orderedOverview = [];

  function organiseContinents(item, index, array){
  if (index % 2 === 0){
    orderedOverview.push(
      <React.Fragment>
        <ContinentOverviewRight key={item.name} name={item.name} text={item.text} link={item.link}/>
        <br/>
        <br/>
      </React.Fragment>
      )
  } else {
    orderedOverview.push(
      <React.Fragment>
        <ContinentOverviewLeft key={item.name} name={item.name} text={item.text} link={item.link}/>
        <br/>
        <br/>
      </React.Fragment>
      )
  }
}


continents.map(organiseContinents)


function App(props){
  /**
   * @NOPROPS 
   * */
    return (
      <Router>
      <Routes>
        <Route path="/" element={
          <React.Fragment>
          <Carousel/>
            <div className="relative p-4">
            <ContinentDefinition/>
              {
                orderedOverview.map(component=>component)
              }
            </div>
          </React.Fragment>
        }/>
        <Route path="/africa" element={
          <ContinentDescription description=<AfricaDescription/> 
            image="/africa.jpg" name="AFRICA"/>
        }/>
        <Route path="/antarctica" element={
          <ContinentDescription description=<AntarcticaDescription/>
          image="/antarctica.jpg" name="ANTARCTICA"/>
        }/>
        <Route path="/asia" element={
          <ContinentDescription description=<AsiaDescription/>
          image="/asia.jpg" name="ASIA"/>
        }/>
        <Route path="/australia" element={
          <ContinentDescription description=<AustraliaDescription/>
          image="/australia.jpg" name="AUSTRALIA"/>
        }/>
        <Route path="/north-america" element={
          <ContinentDescription description=<NorthAmericaDescription/>
          image="/north-america.jpg" name="NORTH AMERICA"/>
        }/>
        <Route path="/south-america" element={
          <ContinentDescription description=<SouthAmericaDescription/>
          image="/south-america.jpg" name="SOUTH AMERICA"/>
        }/>
        <Route path="/europe" element={
          <ContinentDescription description=<EuropeDescription/>
          image="/europe.jpg" name="EUROPE"/>
        }/>
      </Routes>
      </Router>
    );
  }



export default App;
