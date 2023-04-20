// components
import Header from './Components/HeaderAndNavBar/Header';
import WebsiteIntro from './Components/WebsiteIntro/WebsiteIntro';
// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content-container">
        <WebsiteIntro />
      </div>
    </div>
  );
}

export default App;
