import './App.css';
import './Global.js';
import { Routes, Route } from 'react-router-dom';
import MyFunction from './Function';
import MyNumber from './Number';
import MyOption from './Option';

function App() {
  console.log("function App");

  // グローバルデータ
  global.calc.init();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MyNumber />} />
        <Route path="/number" element={<MyNumber />} />
        <Route path="/function" element={<MyFunction />} />
        <Route path="/option/number" element={<MyOption returnRoute="number" />} />
        <Route path="/option/function" element={<MyOption returnRoute="function" />} />
      </Routes>
    </div>
  );
}

export default App;
