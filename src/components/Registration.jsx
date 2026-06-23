import React, {useState}from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Login from './Login';

// messages d'erreurs soit:
//{ valid ? <></> :<span className="text-danger"> {errors.name} </span>} {/*message erreur */}
//{errors.name && <span className="text-danger">{errors.name}</span>}

const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {}
    if (formData.name === "" || formData.name === null) {
        isvalid = false;
        validationErrors.name = "Veuillez mettre votre nom d'utilisateur"
    }
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

    if (formData.cpassword !== formData.password) {
        isvalid = false;
        validationErrors.cpassword = "vos mot de passes ne sont pas pareille"
    }

    setErrors(validationErrors)
    setValid(isvalid)

    // Vérifier si l'email existe déjà
    if(Object.keys(validationErrors).length === 0) {
        axios.get(`http://localhost:6789/users?email=${formData.email}`)
        .then(response => {
            if(response.data.length > 0) {
                // L'email existe déjà
                setErrors({...validationErrors, email: "Cet email est déjà utilisé"})
                setValid(false)
            } else {
                // L'email n'existe pas, on peut créer le compte
                axios.post('http://localhost:6789/users', formData)
                .then(result => {
                    alert("Vous avez créé votre compte")
                    navigate('/login')
                })
                .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
    }
}
return (
<div classname="formulaire">
    <form className="container-fluid d-flex justify-content-center w-50 bg-light border border-primary border-5 rounded-5 shadow-lg my-4" onSubmit={handleSubmit}>
    <div className="rounded-5 py-4 px-5 w-100 ">
        <h1 className="card-title h1 m-3 border-bottom border-primary border-4 text-center text-primary"><b>Connexion</b></h1>
        <div className="row mx-4 my-5">
        <div className="col-md-12">
            <label className="form-label" htmlFor="email">Nom d'utilisateur</label>
            <input className="form-control border border-secondary border-3 rounded-3" type="text" id="name" name="name" placeholder="Nom d'utilisateur" 
            onChange={(event) => setFormData({...formData, name: event.target.value})} /> {/* {...formData, name takes previous the previous properties and updates the name */}
            { valid ? <></> :<span className="text-danger"> {errors.name} </span>} {/*message erreur */}
        </div>
        <div className="col-md-12 mt-4">
            <label className="form-label" htmlFor="email">Adresse email</label>
            <input className="form-control border border-secondary border-3 rounded-3" type="text" id="email" name="email" placeholder="Entrez votre email"
            onChange={(event) => setFormData({...formData, email: event.target.value})} />
            { valid ? <></> :<span className="text-danger"> {errors.email} </span>}
        </div>
        <div className="col-md-12 mt-4">
            <label className="form-label" htmlFor="password">Mot de passe</label>
            <input className="form-control border border-secondary border-3 rounded-3" type="text" id="password" name="password" placeholder="Entrez votre mot de passe"
            onChange={(event) => setFormData({...formData, password: event.target.value})} />
            { valid ? <></> :<span className="text-danger"> {errors.password} </span>}
        </div>
        <div className="col-md-12 mt-4">
            <label className="form-label" htmlFor="password">Confirmez Mot de passe</label>
            <input className="form-control border border-secondary border-3 rounded-3" type="text" id="cpassword" name="cpassword" placeholder="Confirmez votre mot de passe"
            onChange={(event) => setFormData({...formData, cpassword: event.target.value})} />
            { valid ? <></> :<span className="text-danger"> {errors.cpassword} </span>}
        </div>
        <div className="col-md-12 mt-4">
        </div>
        <div className="d-flex flex-column flex-md-row gap-3 justify-content-between">
            <button className="btn btn-primary btn-lg rounded-5 px-4 flex-fill" type="submit">Valider</button>
        </div>
        <p className="text-center small mt-1 text-secondary">Si vous aviez déja une compte, <Link to="/login"> Se connecter </Link> </p>
        </div>
    </div>
    </form>
</div>
  )
}

export default Registration