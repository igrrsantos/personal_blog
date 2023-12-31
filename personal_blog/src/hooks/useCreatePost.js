import axios from 'axios'

const useCreatePost = () => {
  const API_URL = 'http://localhost:3000/api/v1'
  const createPost = async (params) => {
    try {
      const response = await axios.post(`${API_URL}/posts`, {
        ...params,
      })
      return response.status === 201

    } catch (error) {
      console.error('Erro ao criar novo post:', error)
      return false
    }
  }

  return { createPost }
}

export default useCreatePost
