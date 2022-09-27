import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Audio from './components/audio/audio';
import Video from './components/video/video';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Navbar />
      <Audio />
      <Video />
    </div>
  );
}

export default App;
