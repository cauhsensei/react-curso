import { Fragment, useState } from 'react';
import './App.css';
import City from "./assets/city.jpg"
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragmento from './components/Fragmento';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Mercedes", color: "Preta", newCar: false, km: 9998 },
    { id: 3, brand: "Nissan", color: "Cinza", newCar: false, km: 54555 }
  ];

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("");

  const handleMassage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        {/* Imagem em assest*/}
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="Matheus" />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={true} />
      {/* reaproveitamento */}
      <CarDetails brand="Fiat" km={3000} color="Preto" newCar={false} />
      <CarDetails brand="BMW" km={30090} color="Branco" newCar={true} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        /> 
      ))}
      {/* Fragmento */}
      <Fragmento />
      {/* children */}
      <Container myValue="testing">
        <p>e este é o conteudo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMassage} />    

    </div>
  );
}

export default App;
