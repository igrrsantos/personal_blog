// import { useState } from 'react';
import axios from 'axios';

const useCreateUser = () => {
  const API_URL = 'http://localhost:3000/api/v1'

  const createUser = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/users`, {
        ...userData,
      });

      if (response.status === 200) {
        // A conta foi criada com sucesso
        return true;
      } else {
        // A criação da conta falhou
        return false;
      }
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      return false;
    }
  };

  return { createUser };
};

export default useCreateUser;
