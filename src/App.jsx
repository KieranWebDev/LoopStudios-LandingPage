// components
import Header from './Components/HeaderAndNavBar/Header';
import WebsiteIntro from './Components/WebsiteIntro/WebsiteIntro';
// styles
import './App.css';
import OurCreations from './Components/OurCreations/OurCreations';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content-container">
        <WebsiteIntro />
        <OurCreations />
      </div>
    </div>
  );
}

export default App;
