import React, { useState } from 'react'
import useCreateSession from '../hooks/useCreateSession'

function Login(isUserLoggedIn) {
  const [params, setParams] = useState({})
  const { createSession } = useCreateSession()

  const handleChange = (e) => {
    const { name, value } = e.target
    setParams({
      api_v1_user: {
        ...params.api_v1_user,
        [name]: value
      },
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    createSession(params)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2 className="my-4">Login</h2>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name='email'
                value={params.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Senha"
                name='password'
                value={params.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button className="btn btn-primary" onClick={handleLogin}>
                Entrar
              </button>
              {/* <button className="btn btn-success" onClick={CreateAccount()}>
                Criar Conta
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
