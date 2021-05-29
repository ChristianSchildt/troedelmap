import Button from './Components/Button';
import PopupBackground from './Components/PopupBackground';
import Picture from './Components/Picture';
import ImageButton from './Components/ImageButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="orangeBackground" id="regis" value="Registrieren" onClick = {() => console.log("Registriert!")}></Button>
        <Button className="whiteBackground" id="auswaehlen" value="Auswählen" onClick = {() => console.log("Auswählen!")}></Button>
        <PopupBackground id1="svgrect" id2="popupAllInformations"></PopupBackground>
        <Picture id="piclaptop" src="./images/laptop.jpg" ></Picture>
        <ImageButton id="ausloggen" onClick = {() => console.log("Ausgeloggt!")} src="./images/ausloggen.jpg"></ImageButton>
        {/* <ImageButton id="ausloggen" onClick = {() => console.log("Laptop!")} src="./images/laptop.jpg"></ImageButton> */}
        {/* <ImageButton id="ausloggen" onClick = {() => console.log("Lupe!")} src="./images/lupe.jpg"></ImageButton> */}
        {/* <ImageButton id="ausloggen" onClick = {() => console.log("Hinzugefügt!")} src="./images/plus.jpg"></ImageButton> */}
        {/* <ImageButton id="ausloggen" onClick = {() => console.log("Geschlossen!")} src="./images/schließen.jpg"></ImageButton> */}
        {/* <ImageButton id="ausloggen" onClick = {() => console.log("Übersicht aufgerufen!")} src="./images/uebersicht.jpg"></ImageButton> */}
        {/* <ImageButton id="ausloggen" onClick = {() => console.log("User bearbeitet!")} src="./images/userBearbeiten.jpg"></ImageButton> */}
      </header>
    </div>
  );
}

export default App;
