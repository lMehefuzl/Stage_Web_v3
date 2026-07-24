import React, {useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'  //Bibliothèque pour effectuer des requêtes HTTP vers l'API

// messages d'erreurs soit:
//{ valid ? <></> :<span className="text-danger"> {errors.name} </span>} {/*message erreur */}
//{errors.name && <span className="text-danger">{errors.name}</span>}  (je pense que avc ca on peut enlever le state valide / is valide)
// potentionellemant plus optimale

const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const [loading, setLoading] = useState(false) //pour éviter que l'utilisateur clique plusieurs fois sur le bouton "Valider" et envoie plusieurs requêtes simultanément
    const [showPassword, setShowPassword] = useState(false)
    const [showCPassword, setShowCPassword] = useState(false)
    const [eyeHoveredPwd, setEyeHoveredPwd] = useState(false)
    const [eyeHoveredCPwd, setEyeHoveredCPwd] = useState(false)
    const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault();
   
    if (loading) return; //pour éviter que l'utilisateur clique plusieurs fois sur le bouton "Valider" et envoie plusieurs requêtes simultanément


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
        validationErrors.password = "Votre mot de passe est trop courte, veuillez mettre au moin 5 charactères"
    }

    if (formData.cpassword !== formData.password) {
        isvalid = false;
        validationErrors.cpassword = "vos mot de passes ne sont pas pareille"
    }

    setErrors(validationErrors)
    setValid(isvalid)

    // Si tout est valide, ca crée le compte
    if(isvalid) {
        setLoading(true)

        //axios.post('http://localhost:6789/users', formData)
        axios.post('http://10.151.128.105:6789/users', formData)
        .then(result => {
            alert("Vous avez créé votre compte")
            navigate('/login')
        })
        .catch(err => {
            if(err.response && err.response.status === 400) {
                alert("Cet email est déjà utilisé")
            } else {
                alert("Erreur lors de la création du compte")
                console.log(err)
            }
        })

        .finally(() => {
            setLoading(false)
        })
    }
}
return (
<div className="formulaire">
    <form className="container-fluid d-flex justify-content-center w-50 bg-light border border-primary border-5 rounded-5 shadow-lg my-4" onSubmit={handleSubmit}>
    <div className="rounded-5 py-4 px-5 w-100 ">
        <h1 className="card-title h1 m-3 border-bottom border-primary border-4 text-center text-primary"><b>Connexion</b></h1>
        <div className="row mx-4 my-5">
        <div className="col-md-12">
            <label className="form-label" htmlFor="email">Nom d'utilisateur</label> {/*htmlFor="email" : Relie le label à l'input qui a id="email" (quand on clique sur le texte, l'input est sélectionné) */}
            <input className="form-control border border-secondary border-3 rounded-3" type="text" id="name" name="name" placeholder="Nom d'utilisateur" 
            onChange={(event) => setFormData({...formData, name: event.target.value})} /> {/* {...formData, name takes previous the previous properties and updates the name */}
            { valid ? <></> :<span className="text-danger"> {errors.name} </span>} {/*message erreur "Si valid est vrai (true), alors n'affiche rien. Sinon, affiche le message d'erreur en rouge." */} 
        </div>
        <div className="col-md-12 mt-4">
            <label className="form-label" htmlFor="email">Adresse email</label>
            <input className="form-control border border-secondary border-3 rounded-3" type="text" id="email" name="email" placeholder="Entrez votre email"
            onChange={(event) => setFormData({...formData, email: event.target.value})} />
            { valid ? <></> :<span className="text-danger"> {errors.email} </span>}
        </div>
        <div className="col-md-12 mt-4">
            <label className="form-label" htmlFor="password">Mot de passe</label>
            <div className="position-relative">
                <input className="form-control border border-secondary border-3 rounded-3" type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Entrez votre mot de passe"
                onChange={(event) => setFormData({...formData, password: event.target.value})}
                style={{ paddingRight: '2.5rem' }} />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseEnter={() => setEyeHoveredPwd(true)}
                    onMouseLeave={() => setEyeHoveredPwd(false)}
                    tabIndex={-1}
                    className="btn position-absolute top-50 end-0 translate-middle-y me-2 p-0 border-0 bg-transparent"
                    style={{ color: eyeHoveredPwd ? '#0d6efd' : '#6c757d', transition: 'color 0.2s' }}
                >
                    <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} fs-5`}></i>
                </button>
            </div>
            { valid ? <></> :<span className="text-danger"> {errors.password} </span>}
        </div>
        <div className="col-md-12 mt-4">
            <label className="form-label" htmlFor="cpassword">Confirmez Mot de passe</label>
            <div className="position-relative">
                <input className="form-control border border-secondary border-3 rounded-3" type={showCPassword ? "text" : "password"} id="cpassword" name="cpassword" placeholder="Confirmez votre mot de passe"
                onChange={(event) => setFormData({...formData, cpassword: event.target.value})}
                style={{ paddingRight: '2.5rem' }} />
                <button
                    type="button"
                    onClick={() => setShowCPassword(!showCPassword)}
                    onMouseEnter={() => setEyeHoveredCPwd(true)}
                    onMouseLeave={() => setEyeHoveredCPwd(false)}
                    tabIndex={-1}
                    className="btn position-absolute top-50 end-0 translate-middle-y me-2 p-0 border-0 bg-transparent"
                    style={{ color: eyeHoveredCPwd ? '#0d6efd' : '#6c757d', transition: 'color 0.2s' }}
                >
                    <i className={`bi ${showCPassword ? "bi-eye-slash" : "bi-eye"} fs-5`}></i>
                </button>
            </div>
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


