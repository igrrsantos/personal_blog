const axios = require('axios')

// Função para criar um usuário
const createSession = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/users/sign_in', {
      api_v1_user: {
        email,
        password
      }
    })
    return response.data
  } catch (error) {
    console.log('Erro ao criar sessão:', error)
    throw error // Você pode ajustar como desejar em caso de erro
  }
}

// Teste para a rota de criação de usuário
describe('POST /api/v1/users/sign_in', () => {
  it('deve criar um usuário com os parâmetros fornecidos', async () => {
    // Dados de exemplo
    const userEmail = 'teste@gmail.com'
    const userPassword = '123456789'

    // Mock da chamada axios.post para simular uma resposta rápida
    jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: { success: true } })

    // Chama a função createSession com os parâmetros específicos
    const result = await createSession(userEmail, userPassword)

    // Verifica se o usuário foi criado com sucesso
    expect(result).toEqual({ success: true })

    // Verifica se a chamada axios.post foi feita com os parâmetros corretos
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/api/v1/users/sign_in',
      {
        api_v1_user: {
          email: 'teste@gmail.com',
          password: '123456789',
        }
      }
    )

    // Restaura a implementação original de axios.post
    axios.post.mockRestore()
  })

  it('deve lidar com erro ao criar um usuário', async () => {
    // Dados de exemplo
    const userEmail = 'teste@gmail.com'
    const userPassword = '123456789'

    // Mock da chamada axios.post para simular um erro
    jest.spyOn(axios, 'post').mockRejectedValueOnce(new Error('Erro ao criar sessão'))

    // Chama a função createSession com os parâmetros específicos
    await expect(createSession(userEmail, userPassword)).rejects.toThrow(
      'Erro ao criar sessão'
    )

    // Verifica se a chamada axios.post foi feita com os parâmetros corretos
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/api/v1/users/sign_in',
      {
        api_v1_user: {
          email: 'teste@gmail.com',
          password: '123456789',
        }
      }
    )

    // Restaura a implementação original de axios.post
    axios.post.mockRestore()
  })
})
