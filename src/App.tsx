import Header from "./components/Header";
import Form from "./components/Form";
import Results from "./components/Results";

const App = () => {
  const getWeatherData = async () => {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=34b3480469844e629d1155210240208&q=nara&aqi=no");
    const jsonData = await response.json();
    console.log(jsonData);
  };
  

  return (
    <>
      <Header/>
      <Form getWeatherData={getWeatherData}/>
      <Results/>
    </>
  );
};

export default App;

