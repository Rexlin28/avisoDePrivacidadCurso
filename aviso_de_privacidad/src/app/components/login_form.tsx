"use client"

import { useState } from "react"
import "../styles.css"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isPrivacyChecked) {
      alert("Debes aceptar el aviso de privacidad para continuar.")
      return
    }
    // Aquí iría la lógica de login (no implementada en este ejemplo)
    console.log("Login attempt:", email, password)
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="form-title">Iniciar Sesión</h2>
      <div className="form-group">
        <div>
          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-checkbox">
          <input
            type="checkbox"
            id="privacy"
            checked={isPrivacyChecked}
            onChange={(e) => setIsPrivacyChecked(e.target.checked)}
            className="checkbox-input"
          />
          <label htmlFor="privacy" className="checkbox-label">
            Acepto el aviso de privacidad
          </label>
        </div>
        <button
          type="submit"
          className="form-button"
        >
          Iniciar Sesión
        </button>
      </div>
    </form>
  )
}

