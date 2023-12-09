const axios = require('axios')
const { describe, test, expect } = require('@jest/globals')

// Função para criar um usuário
const createUser = async (email, password, name) => {
  try {
    const start = Date.now()
    const response = await axios.post('http://localhost:3000/api/v1/users', {
      api_v1_user: {
        email,
        password,
        name
      }
    })
    const duration = Date.now() - start
    return { data: response.data, duration }
  } catch (error) {
    console.log('Erro ao criar usuário:', error)
    throw error
  }
}

// Teste para a rota de criação de usuário
describe('POST /api/v1/users', () => {
  it('deve criar um usuário com os parâmetros fornecidos', async () => {
    // Dados de exemplo
    const userEmail = 'teste@gmail.com'
    const userPassword = '123456789'
    const userName = 'Igor Santos'

    // Mock da chamada axios.post para simular uma resposta rápida
    jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: { success: true } })

    // Chama a função createUser com os parâmetros específicos
    const result = await createUser(userEmail, userPassword, userName)

    // Verifica se o usuário foi criado com sucesso
    expect(result.data).toEqual({ success: true })

    // Verifica o tempo de resposta da rota
    expect(result.duration).toBeLessThan(1000)

    // Verifica se a chamada axios.post foi feita com os parâmetros corretos
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/api/v1/users',
      {
        api_v1_user: {
          name: 'Igor Santos',
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
    const userName = 'Igor Santos'

    // Mock da chamada axios.post para simular um erro
    jest.spyOn(axios, 'post').mockRejectedValueOnce(new Error('Erro ao criar usuário'))

    // Chama a função createUser com os parâmetros específicos
    await expect(createUser(userEmail, userPassword, userName)).rejects.toThrow(
      'Erro ao criar usuário'
    )

    // Verifica se a chamada axios.post foi feita com os parâmetros corretos
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/api/v1/users',
      {
        api_v1_user: {
          name: 'Igor Santos',
          email: 'teste@gmail.com',
          password: '123456789',
        }
      }
    )

    // Restaura a implementação original de axios.post
    axios.post.mockRestore()
  })
})
