import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import UserLogIn from './component/UserLogIn'
import Header from "./component/Header"
import CheckBoxContainer from './component/CheckBoxContainer';


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserLogIn />} />
          <Route path='/dashboard' element={<CheckBoxContainer />} />
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
