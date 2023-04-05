import { useRouter } from "next/router";
import { useState } from "react";

import config from "../config/config";

const { appUrl, serverPort } = config;

export default function Registration() {
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    patronymic: "",
    login: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onRegistration = async (e) => {
    e.preventDefault();

    if (
      form.lastname &&
      form.firstname &&
      form.patronymic &&
      form.login &&
      form.password
    ) {
      try {
        const res = await fetch(`${appUrl}/api/auth/registration`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lastname: form.lastname,
            firstname: form.firstname,
            patronymic: form.patronymic,
            login: form.login,
            password: form.password,
          }),
        });

        const data = await res.json();

        if (data.success) {
          router.push("/login");
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert("Ошибка)");
      }
    }
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row no-gutters">
          <div className="col-md-12 p-5 bg-white full-height">
            <div className="login-main-left">
              <div className="text-center login-main-left-header">
                <img src="img/favicon.png" className="img-fluid" alt="LOGO" />
                <h5 className="mt-3 mb-3">Добро пожаловать в Vidoe</h5>
                <p>Регистрация</p>
              </div>
              <form action="index.html">
                <div className="form-group">
                  <label>Фамилия</label>
                  <input
                    name="lastname"
                    type="text"
                    className="form-control"
                    placeholder="Введите фамилию"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Имя</label>
                  <input
                    name="firstname"
                    type="text"
                    className="form-control"
                    placeholder="Введите имя"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Отчество</label>
                  <input
                    name="patronymic"
                    type="text"
                    className="form-control"
                    placeholder="Введите отчество"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Логин</label>
                  <input
                    name="login"
                    type="text"
                    className="form-control"
                    placeholder="Введите логин"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Пароль</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Пароль"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-outline-primary btn-block btn-lg"
                        onClick={onRegistration}
                      >
                        Регистрация
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
