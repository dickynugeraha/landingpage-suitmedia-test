import "./App.css";
import Layout from "./components/Layout/Layout";
import Contact from "./components/Contact/Contact";
import OurValues from "./components/OurValues/OurValues";
import Desc from "./components/Desc/Desc";

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Layout>
        <Desc />
        <OurValues />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
