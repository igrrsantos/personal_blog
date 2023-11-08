// import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useCreateSession = () => {
  const API_URL = 'http://localhost:3000/api/v1'
  const navigate = useNavigate()

  const createSession = async (userData) => {
    console.log('userData')
    console.log(userData)
    console.log('userData')
    try {
      const response = await axios.post(`${API_URL}/users/sign_in`, {
        ...userData,
      });

      if (response.status === 200) {
        console.log(response)
        // A conta foi criada com sucesso
        navigate('/dashboard')
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

  return { createSession };
};

export default useCreateSession;
