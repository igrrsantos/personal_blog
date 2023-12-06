// personal_blog/src/tests/useCreatePost.test.js
const useCreatePost = require('../hooks/useCreatePost');
const axios = require('axios');

jest.mock('axios');

describe('useCreatePost', () => {
  it('deve criar um post com os parâmetros fornecidos', async () => {
    const { createPost } = useCreatePost();

    const storedUserInfo = { id: 4 };
    const postContent = 'Conteúdo do post';

    // Mock da chamada axios.post para simular uma resposta rápida
    axios.post.mockResolvedValueOnce({ status: 201 });

    const start = performance.now();

    // Chama a função createPost com os parâmetros específicos
    const result = await createPost({
      user_id: storedUserInfo.id,
      content: postContent,
    });

    const end = performance.now();
    const tempoDeResposta = end - start;

    // Verifica se o post foi criado com sucesso
    expect(result).toBeTruthy();

    // Verifica se o tempo de resposta é aceitável (exemplo: menos de 1000 ms)
    expect(tempoDeResposta).toBeLessThan(1000);

    // Verifica se a chamada axios.post foi feita com os parâmetros corretos
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/api/v1/posts',
      {
        user_id: storedUserInfo.id,
        content: postContent,
      }
    );
  });

  it('deve lidar com erro ao criar um post', async () => {
    const { createPost } = useCreatePost();

    const storedUserInfo = { id: 'usuario123' };
    const postContent = 'Conteúdo do post';

    // Mock da chamada axios.post para simular um erro
    axios.post.mockRejectedValueOnce(new Error('Erro ao criar post'));

    const start = performance.now();

    // Chama a função createPost com os parâmetros específicos
    const result = await createPost({
      user_id: storedUserInfo.id,
      content: postContent,
    });

    const end = performance.now();
    const tempoDeResposta = end - start;

    // Verifica se a função retorna false em caso de erro
    expect(result).toBeFalsy();

    // Verifica se o tempo de resposta é aceitável mesmo em caso de erro (exemplo: menos de 1000 ms)
    expect(tempoDeResposta).toBeLessThan(1000);

    // Verifica se a chamada axios.post foi feita com os parâmetros corretos
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/api/v1/posts',
      {
        user_id: storedUserInfo.id,
        content: postContent,
      }
    );
  });
});
