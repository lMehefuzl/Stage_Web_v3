import React from 'react'

const Navbar = () => {
  return (
    <div class="bg-white border-bottom shadow-sm mb-4">
        <div class="container-fluid py-3 px-4">
            <a href="index.html" class="btn btn-outline-primary btn-sm">
                <i class="bi bi-arrow-left"></i> Accueil
            </a>
            <span class="ms-3 fs-5 fw-semibold text-primary">DOCUMENTATION TECHNIQUE</span>
        </div>
    </div>
  )
}

export default Navbar