const axios = require('axios')

// Função para criar um post
const createPost = async (user_id, content) => {
  try {
    const start = Date.now()
    const response = await axios.post('http://localhost:3000/api/v1/posts', {
      user_id,
      content,
    })
    const duration = Date.now() - start
    return { data: response.data, duration }
  } catch (error) {
    console.log('Erro ao criar post:', error)
    throw error // Você pode ajustar como desejar em caso de erro
  }
}

// Teste para a rota de criação de post
describe('POST /api/v1/posts', () => {
  it('deve criar um post com os parâmetros fornecidos', async () => {
    // Dados de exemplo
    const storedUserInfo = { id: 4 }
    const postContent = 'Conteúdo do post'

    // Mock da chamada axios.post para simular uma resposta rápida
    jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: { success: true } })

    // Chama a função createPost com os parâmetros específicos
    const result = await createPost(storedUserInfo.id, postContent)

    // Verifica o tempo de resposta da rota
    expect(result.duration).toBeLessThan(1000)

    // Verifica se o post foi criado com sucesso
    expect(result.data).toEqual({ success: true })

    // Verifica se a chamada axios.post foi feita com os parâmetros corretos
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/api/v1/posts',
      {
        user_id: storedUserInfo.id,
        content: postContent,
      }
    )

    // Restaura a implementação original de axios.post
    axios.post.mockRestore()
  })

  it('deve lidar com erro ao criar um post', async () => {
    // Dados de exemplo
    const storedUserInfo = { id: 'usuario123' }
    const postContent = 'Conteúdo do post'

    // Mock da chamada axios.post para simular um erro
    jest.spyOn(axios, 'post').mockRejectedValueOnce(new Error('Erro ao criar post'))

    // Chama a função createPost com os parâmetros específicos
    await expect(createPost(storedUserInfo.id, postContent)).rejects.toThrow(
      'Erro ao criar post'
    )

    // Verifica se a chamada axios.post foi feita com os parâmetros corretos
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/api/v1/posts',
      {
        user_id: storedUserInfo.id,
        content: postContent,
      }
    )

    // Restaura a implementação original de axios.post
    axios.post.mockRestore()
  })
})
