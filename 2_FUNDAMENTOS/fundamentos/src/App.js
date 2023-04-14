//components
import FirstComponent from "./components/FirstComponent"
import Events from "./components/Events";
import TemplateExpressions from "./components/TemplateExpressions";
// styles / css
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Fundamentos do React</h1>
    <FirstComponent />
    <TemplateExpressions />
    <Events />
    </div>
  );
}

export default App;

