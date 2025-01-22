import Link from "next/link"
import "../styles.css"

export default function AvisoPrivacidad() {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
      <h1 className="text-3xl font-bold text-primary mb-6">Aviso de Privacidad</h1>

      <p className="text-gray-600">
        De conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los
        Particulares, Mi Tienda de Ropa pone a su disposición el siguiente aviso de privacidad.
      </p>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
        Responsable del tratamiento de sus datos personales
      </h2>
      <p className="text-gray-600">
        Mi Tienda de Ropa, con domicilio en [Dirección completa], es responsable del tratamiento de sus datos
        personales.
      </p>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Datos personales que recopilamos</h2>
      <p className="text-gray-600">
        Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes
        datos personales: Nombre, dirección de correo electrónico, dirección postal, número de teléfono y datos de pago.
      </p>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
        Finalidades del tratamiento de los datos personales
      </h2>
      <p className="text-gray-600">Sus datos personales serán utilizados para las siguientes finalidades:</p>
      <ul className="list-disc list-inside text-gray-600 ml-4">
        <li>Proveer los servicios y productos que ha solicitado</li>
        <li>Procesar sus pagos</li>
        <li>Enviar información sobre nuevos productos o servicios</li>
        <li>Atender sus quejas y solicitudes</li>
        <li>Mejorar nuestro servicio al cliente</li>
      </ul>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Derechos ARCO</h2>
      <p className="text-gray-600">
        Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones
        del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en
        caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros
        registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación);
        así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen
        como derechos ARCO.
      </p>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Cómo ejercer sus derechos ARCO</h2>
      <p className="text-gray-600">
        Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través
        del siguiente medio: [Especificar el medio, por ejemplo, correo electrónico o formulario en el sitio web].
      </p>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Cambios al aviso de privacidad</h2>
      <p className="text-gray-600">
        El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos
        requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras
        prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.
      </p>
      <p className="text-gray-600">
        Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a
        través de: [Especificar el medio, por ejemplo, el sitio web de la empresa].
      </p>

      <p className="text-gray-600 mt-8">Última actualización: [Fecha de la última actualización]</p>

      <div className="mt-12">
        <Link
          href="/"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
        >
          Volver a la página principal
        </Link>
      </div>
    </div>
  )
}

