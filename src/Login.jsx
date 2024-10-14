import axios from 'axios';
import Swal from 'sweetalert2';

function Login({ setPage }) {
  const handleLogin = async () => {
    try {
      const response = await axios.post('API_URL/login', { /* credentials */ });
      localStorage.setItem('token', response.data.token);
      Swal.fire('Success', 'Logged in successfully!', 'success');
      setPage('todos');
    } catch (error) {
      Swal.fire('Error', 'Invalid credentials', 'error');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={handleLogin} className="btn">Login</button>
      <button onClick={() => setPage('register')} className="btn">Register</button>
    </div>
  );
}

export default Login;