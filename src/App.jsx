import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Todos from './Todos';

function App() {
  const [page, setPage] = useState('login');

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <Login setPage={setPage} />;
      case 'register':
        return <Register setPage={setPage} />;
      case 'todos':
        return <Todos />;
      default:
        return <Login setPage={setPage} />;
    }
  };

  return <div className="min-h-screen bg-gray-100">{renderPage()}</div>;
}

export default App;
