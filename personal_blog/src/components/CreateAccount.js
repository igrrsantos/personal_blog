import React, { useState } from 'react';
import useCreateUser from '../hooks/useCreateUser';

function CreateAccount() {
  const [params, setParams] = useState({});
  const { createUser } = useCreateUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams({
      api_v1_user: {
        ...params.api_v1_user,
        [name]: value
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(params)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2 className="my-4">Criar Conta</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Novo Email"
                name='email'
                value={params.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Nova Senha"
                name='password'
                value={params.password}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-success" type="submit">
              Criar Conta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
