import Link from "next/link"
import "../styles.css"

export default function AvisoPrivacidad() {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Aviso de Privacidad</h1>
      <p className="privacy-description">
        En Mi Tienda de Ropa, nos comprometemos a proteger y respetar su privacidad. Este aviso de privacidad describe
        cómo recopilamos, usamos y protegemos su información personal.
      </p>
      <h2 className="privacy-subtitle">Información que recopilamos</h2>
      <p className="privacy-description">
        Recopilamos información que usted nos proporciona directamente, como su nombre, dirección de correo electrónico
        y detalles de pago cuando realiza una compra.
      </p>
      <h2 className="privacy-subtitle">Cómo usamos su información</h2>
      <p className="privacy-description">
        Utilizamos su información para procesar sus pedidos, mejorar nuestros servicios y comunicarnos con usted sobre
        ofertas y nuevos productos.
      </p>
      <h2 className="privacy-subtitle">Protección de su información</h2>
      <p className="privacy-description">
        Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado y uso
        indebido.
      </p>
      <div className="privacy-back-link">
        <Link
          href="/"
          className="back-link"
        >
          Volver a la página principal
        </Link>
      </div>
    </div>
  )
}

