import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const useCreateUser = () => {
  const API_URL = 'http://localhost:3000/api/v1'
  const navigate = useNavigate()

  const createUser = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/users`, {
        ...userData,
      })

      if (response.status === 200) {
        // A conta foi criada com sucesso
        const { email, id, name } = response?.data ?? {}
        Cookies.set('userInfo', JSON.stringify({ email, id, name }), { expires: 1 })
        navigate('/dashboard')
        return true
      } else {
        // A criação da conta falhou
        return false
      }
    } catch (error) {
      console.error('Erro ao criar conta:', error)
      return false
    }
  }

  return { createUser }
}

export default useCreateUser
