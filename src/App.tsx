// import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { Sliderbar } from './components/Sliderbar';
// import { AuthContextProvider } from './context/auth';

// import { Routes } from './routes';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // return (
  //   <BrowserRouter>
  //     <AuthContextProvider>
  //       <Routes />
  //     </AuthContextProvider>
  //   </BrowserRouter>
  // );
  return (
    <Sliderbar isOpen={isOpen} setIsOpen={setIsOpen}>
      Content
    </Sliderbar>
  );
}

export default App;
