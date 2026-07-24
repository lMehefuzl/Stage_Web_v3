import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [showPassword, setShowPassword] = useState(false);
    const [eyeHovered, setEyeHovered] = useState(false);
    const navigate = useNavigate();

    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //axios.post('http://localhost:6789/users/reset-password', { token, new_password: newPassword })
        axios.post('http://10.151.128.105:6789/users/reset-password', { token, new_password: newPassword })
            .then(() => {
                alert("Mot de passe réinitialisé !");
                navigate('/login');
            })
            .catch(() => setMessage("Lien invalide ou expiré"));
    };

    return (
        <div className="container-fluid d-flex justify-content-center w-50 bg-light border border-primary border-5 rounded-5 shadow-lg my-4 p-4">
            <form onSubmit={handleSubmit} className="w-100">
                <h2 className="text-center text-primary mb-4">Nouveau mot de passe</h2>
                <div className="position-relative mb-3">
                    <input
                        className="form-control"
                        type={showPassword ? "text" : "password"}
                        placeholder="Nouveau mot de passe"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        style={{ paddingRight: '2.5rem' }}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseEnter={() => setEyeHovered(true)}
                        onMouseLeave={() => setEyeHovered(false)}
                        tabIndex={-1}
                        className="btn position-absolute top-50 end-0 translate-middle-y me-2 p-0 border-0 bg-transparent"
                        style={{ color: eyeHovered ? '#0d6efd' : '#6c757d', transition: 'color 0.2s' }}
                    >
                        <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} fs-5`}></i>
                    </button>
                </div>
                <button className="btn btn-primary w-100" type="submit">Réinitialiser</button>
                {message && <p className="text-center text-danger mt-3">{message}</p>}
            </form>
        </div>
    );
};

export default ResetPassword;