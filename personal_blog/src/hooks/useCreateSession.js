import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const useCreateSession = () => {
  const API_URL = 'http://localhost:3000/api/v1'
  const navigate = useNavigate()

  const createSession = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/users/sign_in`, {
        ...userData,
      })

      if (response.status === 200) {
        // A sessão foi criada com sucesso
        const { email, id, name } = response?.data;
        Cookies.set('userInfo', JSON.stringify({ email, id, name }), { expires: 1 });
        navigate('/dashboard')
        return true
      } else {
        // A criação da sessão falhou
        return false
      }
    } catch (error) {
      console.error('Erro ao criar sessão:', error)
      return false
    }
  }

  return { createSession }
}

export default useCreateSession
