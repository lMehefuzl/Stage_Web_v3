import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { data } from '../assets/data';

const Quiz = () => {


    const navigate = useNavigate();

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);
    let [savedScore, setSavedScore] = useState(null);


    {/*Pour afficher qui est la bonne mm si c mauvais */}
    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let option_array = [option1,option2,option3,option4];

    useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.score !== undefined) {
      setSavedScore(user.score);
    }
  }, []);

    const checkAns = (e,ans) => {
      if (lock === false) {                 {/*pour désautoriser la prise d'une autre option apres avoir répondue */}
        if (question.ans===ans) {
          e.target.classList.add("bg-success", "text-white");
          setLock(true)

          // je met ici les explications

          setScore(prev=>prev+1);
        }
        else {
          e.target.classList.add("bg-danger", "text-white");
          setLock(true)
          option_array[question.ans-1].current.classList.add("bg-success", "text-white");
        }
      }
    }

    {/*Pour aller au prochain question */}
    const next = ()=>{
      if (lock===true) {
        if (index === data.length -1) {
          setResult(true);
          return 0;
        }

        setIndex(++index); //mettre index + 1 peutetre
        setQuestion(data[index]);

        setLock(false);
        option_array.map((option)=>{
          option.current.classList.remove("bg-success", "bg-danger", "text-white");
          return null;
        })
      }
    }

    const reset = () => {
      setIndex(0);
      setQuestion(data[0]);
      setScore(0);
      setLock(false);
      setResult(false);
    }

    const handleSaveScore = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
      navigate('/registration');
    } else {
      axios.patch(`http://localhost:6789/users/${user._id}`, {   //patch pour modifier (ca écrase l'ancien donné)
        score: score
      })
      .then(() => {
        user.score = score;
        localStorage.setItem('user', JSON.stringify(user));
        setSavedScore(score);
      })
      .catch(err => console.log(err));
    }
  }


  return (
    <div className='container my-4 p-3 bg-white rounded shadow-sm'>
      {result?<></>:<>
      <h4>{index+1}. {question.question}</h4> {/* displays question 1 then 2 ... */}
      <div className="index fw-bold text-primary fs-5 mb-3">{index+1} sur {data.length} questions</div>
      {/* 1. CHANGEMENT : Remplacement de <ul> par une grille Bootstrap "row" avec un écartement (g-3) */}
      <div className="row g-3 mb-4">
        {/* Chaque option est maintenant enveloppée dans un "col-md-6" (2 par ligne sur PC) */}
        {/* Le style des options a été épuré avec "border rounded p-3" au lieu de "list-group-item" seul */}
        <div className="col-6">
          <div ref={option1} className="list-group-item p-3 border rounded" style={{ cursor: 'pointer' }} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</div>
        </div>
        <div className="col-6">
          <div ref={option2} className="list-group-item p-3 border rounded" style={{ cursor: 'pointer' }} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</div>
        </div>
        <div className="col-6">
          <div ref={option3} className="list-group-item p-3 border rounded" style={{ cursor: 'pointer' }} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</div>
        </div>
        <div className="col-6">
          <div ref={option4} className="list-group-item p-3 border rounded" style={{ cursor: 'pointer' }} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</div>
        </div>
      </div>

      {lock && question.explications && (
        <div className="alert alert-info my-3 p-3 rounded" role="alert">
          <strong>Explication :</strong> {question.explications}
        </div>
      )}

      {/* 2. CHANGEMENT : Création d'une ligne pour séparer le bouton (gauche) et le compteur (droite) */}
      <div className="row align-items-center">
        {/* Colonne de gauche (col-6) : Bouton agrandi avec "btn-lg" et élargi avec "px-5" */}
        <div className="col-6">
          <button className="btn btn-primary btn-lg px-5" onClick={next}>Prochain</button>
        </div>
        <div className="col-6 ">
          {savedScore !== null && (
            <span className="text-primary fw-bold">
              <i className="bi bi-trophy me-1"></i>
              Score enregistré : {savedScore}
            </span>
          )}
        </div>
      </div>
      </>}
      {result?<>
      <h2>Vous avez {score} sur {data.length}</h2>
      {/* Opérateur ternaire pour remplacer le if/else dans le JSX */}
      {score >= data.length / 2 ? (
        <div className="alert alert-success my-3 p-3 rounded" role="alert">
          <strong>gg t un bg</strong> 
        </div>
      ) : (
        <div className="alert alert-warning my-3 p-3 rounded" role="alert">
          <strong>t mauvais jack</strong> 
        </div>
      )}
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3">
          <button className="btn btn-primary" onClick={reset}>Refaire</button>
          <button className="btn btn-success" onClick={handleSaveScore}>Enregistrer le score</button>
        </div>
        {savedScore !== null && (
          <span className="text-success fw-bold">
            <i className="bi bi-trophy me-1"></i>
            Score enregistré : {savedScore}
          </span>
        )}
      </div>
      </>:<></>}
      
    </div>
  )
}

export default Quiz