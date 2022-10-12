import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { TopNav } from './component/TopNav';
import Graph from './component/Graph';
import Graph2 from './component/Graph2';
import { Graph1 } from './component/Graph1';
import { GraphB } from './component/GraphB';
import { GraphC } from './component/GraphC';
import { GraphEe } from './component/GraphEe';
import { GraphF } from './component/GraphF';


function App() {
  return (
    <>

      <Router>
        <TopNav />
        <Routes>

        
          <Route path='/' element={<Graph1 />}></Route>
          <Route path='/graph1' element={<Graph1 />}></Route>
          <Route path='/graphB' element={<GraphB />}></Route>
          <Route path='/graphC' element={<GraphC />}></Route>
         
          <Route path='/graphD' element={<Graph/>}></Route>
          <Route path='/graphE' element={<GraphEe/>}></Route>
          <Route path='/graphF' element={<GraphF/>}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
