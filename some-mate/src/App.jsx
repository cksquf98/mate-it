// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './Context/userContext';  // .jsx 확장자는 생략 가능
import MainPage from './pages/MainPage';
import SignPage1 from './pages/SignPage1';
import SignPage2 from './pages/SignPage2';
import SignPage3 from './pages/SignPage3';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/SignPage1" element={<SignPage1 />} />
          <Route path="/SignPage2" element={<SignPage2 />} />
          <Route path="/SignPage3" element={<SignPage3 />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
