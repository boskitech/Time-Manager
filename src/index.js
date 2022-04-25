import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import './index.css';
import App from './App';
import ViewTodo from './components/ViewTodo';
import Todos from './components/Todos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<Todos />} />
          <Route path="todo/:id" element={<ViewTodo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


