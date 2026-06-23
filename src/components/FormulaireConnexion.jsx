import React from "react";

const FormulaireConnexion = () => {
  return (
    <div className="container-fluid d-flex justify-content-center w-50 bg-light border border-primary border-5 rounded-5 shadow-lg">
      <div className="rounded-5 py-5 px-5 w-100 ">
        <h1 className="card-title h1 m-3 border-bottom border-primary border-4 text-center text-primary">
          <b>Connexion</b>
        </h1>
        <div className="row mx-4 my-5">
          <div className="col-md-12">
            <label className="form-label" htmlFor="email">
              Adresse email
            </label>
            <input
              className="form-control border border-secondary border-3 rounded-3"
              type="email"
              id="email"
              name="email"
              placeholder="Entrez votre email"
            />
          </div>
          <div className="col-md-12 mt-4">
            <label className="form-label" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="form-control border border-secondary border-3 rounded-3"
              type="password"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
            />
          </div>
          <div className="col-md-12 mt-4"></div>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-between">
            <button
              className="btn btn-primary btn-lg rounded-5 px-4 flex-fill"
              type="submit"
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaireConnexion;
