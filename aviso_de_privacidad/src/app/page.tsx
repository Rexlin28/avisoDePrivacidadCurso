import Link from "next/link"
import LoginForm from "./components/login_form"
import "./styles.css"

export default function Home() {
  return (
    <div className="container">
      <section className="welcome-section">
        <h2 className="title">Bienvenido a nuestra tienda</h2>
        <p className="description">Aquí encontrarás las mejores prendas de moda para todas las ocasiones.</p>
      </section>

      <LoginForm />

      <section className="privacy-section">
        <h2 className="title">Aviso de Privacidad</h2>
        <p className="description">
          Para ver nuestro aviso de privacidad completo, haz clic en el siguiente enlace:
        </p>
        <Link
          href="/aviso"
          className="privacy-link"
        >
          Ver Aviso de Privacidad
        </Link>
      </section>
    </div>
  )
}
