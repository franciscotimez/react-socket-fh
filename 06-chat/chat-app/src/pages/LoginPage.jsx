import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

import Swal from 'sweetalert2';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberme: true
  });

  useEffect(() => {
    const email = localStorage.getItem('email');

    if (email) {
      setForm((form) => ({
        ...form,
        email,
        rememberme: true
      }));
    }
  }, []);

  const onChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const toogleCheck = () => {
    setForm({
      ...form,
      rememberme: !form.rememberme
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    (form.rememberme)
      ? localStorage.setItem("email", form.email)
      : localStorage.removeItem("email");

    const { email, password } = form;
    const ok = await login(email, password);

    if (!ok) {
      Swal.fire('Error', 'Verifique su usuario y contrasenia.', 'error');
    }
    console.log(ok);
  };

  const formOk = () => {
    return (form.email.length > 0 && form.password.length > 0);
  };
  
  return (
    <form
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={onSubmit}
    >
      <span className="login100-form-title mb-3">
        Chat - Ingreso
      </span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>


      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div
          className="col"
          onClick={() => toogleCheck()}
        >
          <input
            className="input-checkbox100"
            id="ckb1"
            type="checkbox"
            name="rememberme"
            checked={form.rememberme}
            readOnly
          />
          <label className="label-checkbox100">
            Recordarme
          </label>
        </div>

        <div className="col text-right">
          <Link to="/auth/register" className="txt1">
            Nueva cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button
          type="submit"
          className="login100-form-btn"
          disabled={!formOk()}
        >
          Ingresar
        </button>
      </div>

    </form>
  );
};
