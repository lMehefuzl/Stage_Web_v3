import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {  // ← MODIFICATION : ajout de la prop
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {}

    if (formData.email === "" || formData.email === null) {
        isvalid = false;
        validationErrors.email = "Veuillez mettre votre mail"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
        isvalid = false;
        validationErrors.email = "Votre mail n'est pas valide"
    }

    if (formData.password === "" || formData.password === null) {
        isvalid = false;
        validationErrors.password = "Veuillez mettre mot de passe"
    } else if(formData.password.length < 4) {
        isvalid = false;
        validationErrors.password = "Votre mot de passe est trop courte, veuillez mettre au moin 4 charactères"
    }

    setErrors(validationErrors)
    setValid(isvalid)

    if (isvalid) {
        axios.post('http://localhost:6789/users/login', {
            email: formData.email,
            password: formData.password
        })
        .then(response => {
            setUser(response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
            alert("vous êtes connecté")
            navigate('/')
        })
        .catch(err => {
            alert("Email ou mot de passe incorrect")
            console.log(err)
        })
    }
}


  return (
    <div classname="formulaire">
      <form
        className="container-fluid d-flex justify-content-center w-50 bg-light border border-primary border-5 rounded-5 shadow-lg my-4"
        onSubmit={handleSubmit}
      >
        <div className="rounded-5 py-4 px-5 w-100 ">
          <h1 className="card-title h1 m-3 border-bottom border-primary border-4 text-center text-primary">
            <b>Connexion</b>
          </h1>
          <div className="row mx-4 my-5">
            <div className="col-md-12 mt-4">
              <label className="form-label" htmlFor="email">
                Adresse email
              </label>
              <input
                className="form-control border border-secondary border-3 rounded-3"
                type="text"
                id="email"
                name="email"
                placeholder="Entrez votre email"
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
              />
              {valid ? (
                <></>
              ) : (
                <span className="text-danger"> {errors.email} </span>
              )}
            </div>
            <div className="col-md-12 mt-4">
              <label className="form-label" htmlFor="password">
                Mot de passe
              </label>
              <input
                className="form-control border border-secondary border-3 rounded-3"
                type="password"    //c t text avant
                id="password"
                name="password"
                placeholder="Entrez votre mot de passe"
                onChange={(event) =>
                  setFormData({ ...formData, password: event.target.value })
                }
              />
              {valid ? (
                <></>
              ) : (
                <span className="text-danger"> {errors.password} </span>
              )}
            </div>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-between">
              <button className="btn btn-primary btn-lg rounded-5 px-4 flex-fill mt-5"type="submit">Se connecter</button>
            </div>
            <p className="text-center small mt-1 text-secondary">
              Si vous n'aviez pas de compte,<Link to="/registration"> Crée votre compte </Link>{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
