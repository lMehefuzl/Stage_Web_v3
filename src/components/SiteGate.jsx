import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "http://10.151.128.105:6789";

const SiteGate = ({ children }) => {
  const [status, setStatus] = useState("checking");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("mlf_site_token");
    if (!token) return setStatus("locked");
    axios.post(`${API_BASE}/site-access/verify`, { token })
      .then(() => setStatus("unlocked"))
      .catch(() => {
        sessionStorage.removeItem("mlf_site_token");
        setStatus("locked");
      });
  }, []);

  useEffect(() => {
    const blockMenu = (e) => e.preventDefault();
    const blockKeys = (e) => {
      if (e.key === "F12" ||
          (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
          (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", blockMenu);
    document.addEventListener("keydown", blockKeys);
    return () => {
      document.removeEventListener("contextmenu", blockMenu);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    axios.post(`${API_BASE}/site-access/login`, { password })
      .then((res) => {
        sessionStorage.setItem("mlf_site_token", res.data.token);
        setStatus("unlocked");
      })
      .catch(() => setError("Mot de passe incorrect"));
  };

  if (status === "checking") return <div style={{ minHeight: "100vh" }} />;

  if (status === "locked") {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <form onSubmit={handleSubmit} style={{ width: 320, textAlign: "center" }}>
          <p style={{ marginBottom: 16, fontWeight: 600 }}>
            Veuillez entrer le mot de passe d'accès pour le site MLF
          </p>
          <input type="password" className="form-control mb-3" autoFocus
            value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="btn btn-primary w-100">Valider</button>
          {error && <p className="text-danger mt-2">{error}</p>}
        </form>
      </div>
    );
  }

  return children;
};

export default SiteGate;