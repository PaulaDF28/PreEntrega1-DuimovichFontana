import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting="¡Bienvenid@s al fascinante mundo de la naturaleza en tu pantalla! 🌱🌿🌼

En nuestro vivero virtual, te invitamos a explorar la belleza y diversidad de nuestras queridas plantas nativas. Cada hoja, cada flor y cada raíz cuenta una historia única y valiosa sobre nuestro entorno. Adéntrate en este oasis digital donde la biodiversidad es la protagonista y la sostenibilidad es nuestro compromiso.

Pasea por nuestros pasillos virtuales y descubre cómo puedes traer la magia de la flora autóctona a tu hogar. Ya seas un jardinero apasionado, un amante de la ecología o alguien que simplemente busca conectarse con la naturaleza, estás en el lugar adecuado. Nuestro vivero de plantas nativas es más que un sitio web, es un rincón virtual donde las raíces de la tradición se entrelazan con la innovación verde.

Así que, adelante, explora, aprende y déjate inspirar por la riqueza natural que nuestro vivero tiene para ofrecer. ¡Bienvenid@s a un viaje de descubrimiento verde! 🌳🌺🌳"></ItemListContainer>
    </div>
  );
}

export default App;
