import React from "react";
import {country_by_continent, country_isto_capital} from "./data.js";

class ContinentDescription extends React.Component{
  /**
   * @PROPS: image, name, description
   **/

  render(){
    return (
      <div className="bg-gray-300">
        <div className="text-center pt-16 md:pt-32">
          <h1 className="font-bold text-purple-700 break-normal text-3xl md:text-5xl">{this.props.name}</h1>
        </div>
        {/* image */}
         <div className="bg-size bg-cover bg-gray-300 bg-center bg-fixed container mt-8 w-full max-w-6xl mx-auto rounded"
            style={{backgroundImage: "url('images"+this.props.image+"')", height: '65vh'}}></div>
        {/* Container */}
        <div className="container max-w-5xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
            <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800">
              {/* Post Content */}
              {this.props.description}
            </div>  
          </div>
        </div>
      </div>
      )
  }
}

class Fact extends React.Component{
  /** 
   * @PROPS: fact
   **/

  render(){
    return (
      <div className="my-4">
        <div class="bg-blue-700 text-white font-extrabold rounded-t px-4 py-2">
          FACT
        </div>
        <div class="border border-t-0 border-blue-400 rounded-b bg-blue-300 px-4 py-3 text-black">
          {this.props.fact}
        </div>
      </div>
      )
  }
}

class AfricaDescription extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>
          Africa is the second largest continent and accounts to one-fifth of
          Earth's land area which is approximately 30.37 million square kilometers. It is bulging to the west and is surrounded by
          oceans and seas. However, it is considered underpopulated as about 10%
          of the Earth's population lives here despite of its huge size.
          The continent was much unexplored for a long time
          because of its harsh geographical barriers, such as the Sahara in the West, 
          the harsh coastlines, sea storms, forests, and so on. 
          It was even called the 'Dark Continent' by Henry M. Stanley, 
          a British explorer, to associate a mystery with the continent.
          However, this term ended up entering in the European culture as a  way to
          refer to Africa and it's people as wild, savage and untamed. 
          They tried to justify their inhuman actions by representing Africa with this image that they had created.

        </p>
        <div className="bg-white p-8">
          <img className="object-contain max-h-80 w-full" alt="African Map" src="images/africamap.png"/>
          <div className="text-lg text-center font-extralight">Image source: Wikipedia</div>
        </div>
        <br />
        <Fact fact="It is believed that Africa is the cradle of human race,
        and the first humans originated here."/>
        <br/>
        <p>
        <h1 className="text-4xl font-bold text-purple-500">Countries</h1>
        <br />
        48 countries share the area of mainland Africa, and six island nations,
        are also considered to be part of the continent, the most famous being Madagascar.
        All in all, there are
        54 sovereign African countries and two disputed areas, namely Somaliland
        (autonomous region of Somalia) and Western Sahara (occupied by Morocco
        and claimed by the Polisario).
        <br/>
        <br/>
        <div className="mx-8">
          <table className="min-w-full divide-y divide-purple-300">
            <thead className="bg-purple-50 rounded-lg">
              <tr>
                <th className="px-6 text-center py-3 text-left text-sm font-bold text-gray-500 uppercase">
                  Country
                </th>
                <th className="px-6 text-center py-3 text-left text-sm font-bold text-gray-500 uppercase">
                  Capital
                </th>
              </tr>
            </thead>
            <tbody>
              {
                country_by_continent.filter(c=>c.continent==="Africa").map(x =>         
                  (<tr key={x.country} className="border-b-2 border-purple-100">
                    <td className="text-lg text-center bg-purple-200">{x.country}</td>
                    <td className="text-lg text-center">{country_isto_capital[x.country]}</td>
                  </tr>)
                )
              }
            </tbody>
          </table>
        </div>
        </p>
        <br/>
        <h1 className="text-4xl font-bold text-purple-500">Physical Regions</h1>
        <br />
        Major physical regions in Africa are:
        <br />
        <ul className="list-disc list-inside">
          <br/>
          <li>The Atlas Mountains</li>
          <li>The Sahara Desert</li>
          <li>The semiarid Sahel</li>
          <li>The tropical Sudanian Savanna</li>
          <li>The Nile and the Congo rivers</li>
          <li>The Victoria Falls</li>
          <li>The Ethiopian Highlands</li>
          <li>The Ituri Rainforest</li>
          <li>The African Great Lakes</li>
          <li>The Great Rift Valley</li>
          <li>The Namib and the Kalahari deserts</li>
        </ul>
        <Fact fact="Sahara Desert is the largest desert in the world."/>
      </React.Fragment>
    );
  }
}

class AntarcticaDescription extends React.Component{
  render(){
    return (
      <React.Fragment>
       <p>
       Antarctica is the driest, southernmost, windiest and least populated continent on Earth. 
       It has the highest average height above sea level. 
       It has an area of about 14.2 million square kilometers.
       It contains the geographical South Pole and is located entirely in the Southern Hemisphere.
       It was discovered by the Russian expedition of Fabian Gottlieb von Bellingshausen and Mikhail Lazarev.
       It was much neglected in the 19th century because of its harsh climate. 
        </p>
        <br/>
        <p>
        <h1 className="text-4xl font-bold text-purple-500">Countries</h1>
        <br />
        There are no countries in Antarctica and 
        no permanent residents that live on the ice-covered cold-desert.
        It is governed by the Antarctic Treaty System (ATS) 
        which was signed on December 1, 1959 and came into force on 23 June, 1961.
        It was originally signed by twelve countries:
        Argentina, Australia, Belgium, Chile, France, Japan, 
        New Zealand, Norway, South Africa, United Kingdom, United States and USSR (now disintegrated).
        Now, more countries including India have joined making a total of 54 countries.
        The treaty prohibits military activities, mineral mining, nuclear explosions 
        and nuclear waste disposal while, 
        supports scientific research and protects the continent's ecology. 
        </p>
        <br/>
        <p>
        <div className="bg-white p-8">
          <img className="object-contain max-h-80 w-full" alt="Physical Divisions Map" src="images/antarctica_division.jpg"/>
          <div className="text-lg text-center font-extralight">Image source: Wikipedia</div>
        </div>
        <br/>
         <h1 className="text-4xl font-bold text-purple-500">Physical Divisions</h1>
         <br/>
         Antarctica is actually a landmass, but the land is beneath a thick layer of snow.
         The thick snow even goes upto depths of 4 km. The countinent gives an illusion to be flat 
         becuase of the ice, but mountains such as Mt Erebus (the highest mountain in the continent), 
         show that it has a varied terrain. 
         The continent is divided into Western and Eastern Antarctica by the Transantarctic range.
         Eastern Antarctica is also called Greater Antarctica and Western Antarctica is also called Lesser Antarctica.
        </p>
        <br/>
         <Fact fact="There is volcanic activity under the snow in Antarctica"/>
      </React.Fragment>
      )
  }
}

class AsiaDescription extends React.Component{
  render(){
    return (
      <React.Fragment>
       <p>
      Asia is the world's largest and most populous continent with an area of 44.58 million square kilometers. 
      It accounts to 30 percent of Earth's surface area. 
      It is called the "Land of Contrasts" and has both the highest and lowest points on Earth.
      The highest and lowest temperature on Asia are 50 degree Celcius and 
      -57 degree Celcius at Jacobabad of Pakistan and Verkhoyansk of Siberia respectively.
       </p>
       <br/>
       <div className="bg-white p-8">
         <img className="object-contain max-h-80 w-full" alt="Asian Map" src="images/asiamap.png"/>
         <div className="text-lg text-center font-extralight">Image source: Wikipedia</div>
       </div>
       <br/>
       <p>
        <h1 className=" text-4xl font-bold text-purple-500">Countries</h1>
        <br/>
          Asia has large countries such as Russia, China and India.
          However, it has numerous other countries as well. 
          The Commonwealth of Independent States(CIS) is a group of nations that became independent
          after the disintegration of the Soviet Union. 
          Most of these are part of Asia, while some of these are part of Europe. 
          Asia has oil rich countries of the Middle-East,
          such as Oman, UAE, Saudi Arabia, Qatar, etc. These countries are part of the OPEC, 
          (Organisation of Petroleum Producing Countries).
          There are South Asian countries such as Sri Lanka, India, Cambodia, etc.,
          East and South East Asian countries such as Japan, Mayanmar, etc., 
          island nations like Indonesia, Maldives, Philippines, 
          Central Asian countries such as Mongolia, Turkeministan, Kyrgyzstan, etc.
          Overall, there are 51 countries in Asia, and three other territories, 
          some of these and transcontinental and extend to Europe, eg: Russia, Turkey.

          <br/>
          <br/>
          <div className="mx-8">
            <table className="min-w-full divide-y divide-purple-300">
              <thead className="bg-purple-50 rounded-lg">
                <tr>
                  <th className="px-6 text-center py-3 text-left text-sm font-bold text-gray-500 uppercase">
                    Country
                  </th>
                  <th className="px-6 text-center py-3 text-left text-sm font-bold text-gray-500 uppercase">
                    Capital
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  country_by_continent.filter(c=>c.continent==="Asia").map(x =>         
                    (<tr key={x.country} className="border-b-2 border-purple-100">
                      <td className="text-lg text-center bg-purple-200">{x.country}</td>
                      <td className="text-lg text-center">{country_isto_capital[x.country]}</td>
                    </tr>)
                  )
                }
              </tbody>
            </table>
          </div>
       </p>
       <br/>
       <p>
        <h1 className="text-4xl font-bold text-purple-500">Physical Divisions</h1>
        <br/>
        Asia can be divided into the following Physical Divisions:
        <div>{/* Only because ul cannot be child of p */}
        <ul className="list-disc list-inside">
          <br/>
          <li>The Northern Lowlands</li>
          <li>The Central Highlands</li>
          <li>The Southern Plateaus</li>
          <li>The Great River Basin</li>
          <li>The Islands</li>
        </ul>
        </div>
       </p>
      </React.Fragment>
      )
  }
}

class AustraliaDescription extends React.Component{
  render(){
    return (
      <React.Fragment>
       <p>
       Australia is the smallest, flattest, lowest and second driest continent.
        It is called the island continent as it is surrounded by water on all sides.
        It lies completely in the Southern Hemisphere. The other surrounding islands,
        New Zealand, Papua New Guinea, etc are also considered part of this continent.
        It has an area of about 7.6 million square kilometers.
       </p>
       <br/>
       <div className="bg-white p-8">
         <img className="object-contain max-h-80 w-full" alt="Australian Map" src="images/australiamap.png"/>
         <div className="text-lg text-center font-extralight">Image source: Wikipedia</div>
       </div>
       <br/>
       <Fact fact="A lot of Australia is dry and deserted, 
       but the South Eastern Coasts are very fertile."/>
       <p>
        <h1 className="  text-4xl font-bold text-purple-500">Countries</h1>
        <br/>
        Australia includes the Commonwealth of Australia, New Zealand, Papua New Guinea and a few other nations.
        The islands along with Commonwealth of Australia are also sometimes called as Oceania collectively.
        <br/>
        <br/>
        <div className="mx-8">
          <table className="min-w-full divide-y divide-purple-300">
            <thead className="bg-purple-50 rounded-lg">
              <tr>
                <th className="px-6 text-center py-3 text-left text-sm font-bold text-gray-500 uppercase">
                  Country
                </th>
                <th className="px-6 text-center py-3 text-left text-sm font-bold text-gray-500 uppercase">
                  Capital
                </th>
              </tr>
            </thead>
            <tbody>
              {
                country_by_continent.filter(c=>c.continent==="Oceania").map(x =>         
                  (<tr key={x.country} className="border-b-2 border-purple-100">
                    <td className="text-lg text-center bg-purple-200">{x.country}</td>
                    <td className="text-lg text-center">{country_isto_capital[x.country]}</td>
                  </tr>)
                )
              }
            </tbody>
          </table>
        </div>
       </p>
       <br/>
       <p>
        <h1 className="text-4xl font-bold text-purple-500">Physical Divisions</h1>
        <br/>
        Australia can be divided into the following Physical Divisions:
        <ul className="list-disc list-inside">
          <br/>
          <li>The Western Plateau</li>
          <li>The Central Lowland</li>
          <li>The Eastern Highlands</li>
          <li>The Eastern Coastal Plains</li>
        </ul>
       </p>
       <br/>
      </React.Fragment>
      )
  }
}

class NorthAmericaDescription extends React.Component{
  render(){
    return (
      <React.Fragment>
       <p>
       North America is the third-largest continent by area, and 
      the fourth-largest continent by population. It has an area of about 24.71 million square kilometers.
      The continent lies in the Northern Hemisphere and mostly in the western hemisphere.
      It is bordered by the Pacific, Atlantic, and Arctic Oceans in the West, South and North respectively.
       </p>
       <br/>
       <div className="bg-white p-8">
         <img className="object-contain max-h-80 w-full" alt="North American Map" src="images/north-americamap.png"/>
         <div className="text-lg text-center font-extralight">Image source: Wikipedia</div>
       </div>
       <br/>
       <p>
        <h1 className="  text-4xl font-bold text-purple-500">Countries</h1>
        <br/>
        In all, there are 23 countries in all of North America.
        The three major and largest continents of North America are, the USA, Canada and Mexico, in order.
        It consists of mainly three large countries which is the USA, Canada, and Mexico. 
        The other countries are much smaller in size, and are located in 
        much Southern part of the continent. 
        These include Cuba, El Salvador, Antigua and Barbuda, Haiti, and other nations.

        <br/>
        <br/>
        <div className="mx-8">
          <table className="min-w-full divide-y divide-purple-300">
            <thead className="bg-purple-50 rounded-lg">
              <tr>
                <th className="px-6 text-center py-3 text-left text-sm font-bold text-gray-500 uppercase">
                  Country
                </th>
                <th className="px-6 text-center py-3 text-left text-sm font-bold text-gray-500 uppercase">
                  Capital
                </th>
              </tr>
            </thead>
            <tbody>
              {
                country_by_continent.filter(c=>c.continent==="North America").map(x =>         
                  (<tr key={x.country} className="border-b-2 border-purple-100">
                    <td className="text-lg text-center bg-purple-200">{x.country}</td>
                    <td className="text-lg text-center">{country_isto_capital[x.country]}</td>
                  </tr>)
                )
              }
            </tbody>
          </table>
        </div>
       </p>
       <br/>
       <p>
        <h1 className="text-4xl font-bold text-purple-500">Physical Divisions</h1>
        <br/>
        North America can be divided into the following Physical Divisions:
        <ul className="list-disc list-inside">
          <br/>
          <li>The Great Lakes</li>
          <li>The Western Cordilleras</li>
          <li>The Great Plains</li>
          <li>The Canadian Shield</li> 
          <li>The Eastern region</li>
          <li>The Caribbean</li>
        </ul>
       </p>
        <Fact fact="North America is has very large animals such as Black Bears, Mooses, etc."/>
      </React.Fragment>
      )
  }
}

class SouthAmericaDescription extends React.Component{
  render(){
    return (
      <React.Fragment>
       <p>
            South America is roughly a triangular continent. 
            It has an area of about 6.9 million square kilometers and is slightly smaller than North America.
            It is connected by the Isthmus of Panama to North America. 
            In the south, it is separated from Antarctica by the Drake passage.
            The continent has a regular coastline and relatively few islands. 
            Relative to Europe, Asia and Africa, 20th-century South America has been a peaceful continent with few wars.
       </p>
       <br/>
       <div className="bg-white p-8">
         <img className="object-contain max-h-80 w-full" alt="South American Map" src="images/south-americamap.png"/>
         <div className="text-lg text-center font-extralight">Image source: Wikipedia</div>
       </div>
       <br/>
       <p>
        <h1 className="  text-4xl font-bold text-purple-500">Countries</h1>
        <br/>
        South America has 14 countries in all. 
        Brazil being the largest country in South America has an area of about 8 million square kilometers.
        It is followed by Argentina 
        and Peru with an area of about 2 million square kilometers and 1 million square kilometers respectively.
        The other countries include Colombia, Ecuador, Venezuela,
        Chile, Bolivia, Paraguay, Uruguay, Guyana, Suriname, French Guiana and Falkland Islands.
        <br/>
        <br/>
        <div className="mx-8">
          <table className="min-w-full divide-y divide-purple-300">
            <thead className="bg-purple-50 rounded-lg">
              <tr>
                <th className="px-6 text-center py-3 text-left text-sm font-bold text-gray-500 uppercase">
                  Country
                </th>
                <th className="px-6 text-center py-3 text-left text-sm font-bold text-gray-500 uppercase">
                  Capital
                </th>
              </tr>
            </thead>
            <tbody>
              {
                country_by_continent.filter(c=>c.continent==="South America").map(x =>         
                  (<tr key={x.country} className="border-b-2 border-purple-100">
                    <td className="text-lg text-center bg-purple-200">{x.country}</td>
                    <td className="text-lg text-center">{country_isto_capital[x.country]}</td>
                  </tr>)
                )
              }
            </tbody>
          </table>
        </div>
       </p>
       <br/>
       <p>
        <h1 className="text-4xl font-bold text-purple-500">Physical Divisions</h1>
        <br/>
        South America mainly has three Physical Divisions:
        <ul className="list-disc list-inside">
          <br/>
          <li>The Andes Mountains</li>
          <li>The River Basins</li>
          <li>The Coastal Plains</li>
        </ul>
        The Andes Mountains are a part of the Western Cordilleras.
        The River Basins mainly constitute of the Amazon river basin and other rivers.
        The Coastal Plains are the regions near the coast, these are very fertile.
        The climate however, is more or less constant.
       </p>
       <br/>
        <Fact fact="The city of Machu Pichhu was lost until it was rediscovered in the 19th century. 
        It used to be important in the Mayan Empire and was set in the hills for safety. 
        It is now a UNESO world heritage site. "/>
      </React.Fragment>
      )
  }
}

class EuropeDescription extends React.Component{
  render(){
    return (
      <React.Fragment>
       <p>
       Europe is the world's second smallest continent with an area of 4.233 square kilometers. 
       It is a cluster of peninsulas and islands that extends North-West of Asia.
       Despite of it's northern location, most of Europe enjoys mild climate tempered 
       by warm ocean currents.
       </p>
       <br/>
       <div className="bg-white p-8">
         <img className="object-contain max-h-80 w-full" alt="European Map" src="images/europemap.png"/>
         <div className="text-lg text-center font-extralight">Image source: Wikipedia</div>
       </div>
       <br/>
       <p>
        <h1 className="text-4xl font-bold text-purple-500">Countries</h1>
        <br/>
        Europe has 48 countries, and most of them are part of the European Union (EU).
        It also includes the Russian part that extends into the continent.
        The largest economies of the continent are the UK, Germany, France, etc.
        <br/>
        <br/>
        <div className="mx-8">
          <table className="min-w-full divide-y divide-purple-300">
            <thead className="bg-purple-50 rounded-lg">
              <tr>
                <th className="px-6 text-center py-3 text-left text-sm font-bold text-gray-500 uppercase">
                  Country
                </th>
                <th className="px-6 text-center py-3 text-left text-sm font-bold text-gray-500 uppercase">
                  Capital
                </th>
              </tr>
            </thead>
            <tbody>
              {
                country_by_continent.filter(c=>c.continent==="Europe").map(x =>         
                  (<tr key={x.country} className="border-b-2 border-purple-100">
                    <td className="text-lg text-center bg-purple-200">{x.country}</td>
                    <td className="text-lg text-center">{country_isto_capital[x.country]}</td>
                  </tr>)
                )
              }
            </tbody>
          </table>
        </div>
       </p>
       <br/>
       <p>
        <h1 className="text-4xl font-bold text-purple-500">Physical Divisions</h1>
        <br/>
        Europe can be divided into the following Physical Divisions:
        <ul className="list-disc list-inside">
          <br/>
          <li>The Fjords</li>
          <li>The Alps</li>
          <li>Scandinavian Highlands</li>
          <li>Central Uplands</li>
          <li>Northern Lowlands</li>
        </ul>
       </p>
       <br/>
      </React.Fragment>
      )
  }
}

export {
  ContinentDescription, AustraliaDescription,
  AsiaDescription, AfricaDescription,
  AntarcticaDescription, NorthAmericaDescription, 
  SouthAmericaDescription, EuropeDescription
}