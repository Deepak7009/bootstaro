import './App.css';
import ProductInfo from "./components/SectionOne";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from './components/FAQSection'
import Foot from "./components/Foot";
import "./Style/Section3.css";

function App() {
  return (
    <div className="App">

      <ProductInfo />
      <Section2 />
      <Section3 />
      <Section4 />
      <Foot />
    </div>
  );
}

export default App;
