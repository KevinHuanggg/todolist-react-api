import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Todos from './components/Todos/Todos'


const API_URL = 'https://todoo.5xcamp.us'


const App = () => {
  // 預設為登入頁面
	const [currentPage, setCurrentPage] = useState('login')

  // 註冊
  const registerUser = async (email, password, nickname) => {
    try {
      const response = await axios.post(`${API_URL}/users`, {
        user: {
          email,
          nickname,
          password
        }
      });
      
      console.log('註冊成功:', response.data);

      Swal.fire({
        icon: 'success',
        title: response.data.message,
        text: '您已成功註冊！',
      });

      setCurrentPage('login');

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '註冊失敗',
        text: error.response.data.error[0],
      });
    }
  };

	const renderPage = () => {
		switch (currentPage) {
			case 'login':
				return <Login setCurrentPage={setCurrentPage} />
			case 'register':
				return <Register registerUser={registerUser} setCurrentPage={setCurrentPage} />
			case 'todos':
				return <Todos setCurrentPage={setCurrentPage} />
			default:
				return <Login setCurrentPage={setCurrentPage} />
		}
	}

	return <div className="min-h-screen bg-primary text-dark">{renderPage()}</div>
}

export default App
