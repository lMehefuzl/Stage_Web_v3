import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //axios.post('http://localhost:6789/users/forgot-password', { email })
        axios.post('http://10.151.128.105:6789/users/forgot-password', { email })
            .then(() => setMessage("Si cet email existe, un lien de réinitialisation a été envoyé."))
            .catch(() => setMessage("Une erreur est survenue"));
    };

    return (
        <div className="container-fluid d-flex justify-content-center w-50 bg-light border border-primary border-5 rounded-5 shadow-lg my-4 p-4">
            <form onSubmit={handleSubmit} className="w-100">
                <h2 className="text-center text-primary mb-4">Mot de passe oublié</h2>
                <input
                    className="form-control mb-3"
                    type="email"
                    placeholder="Ton adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button className="btn btn-primary w-100" type="submit">Envoyer le lien</button>
                {message && <p className="text-center mt-3">{message}</p>}
            </form>
        </div>
    );
};

export default ForgotPassword;