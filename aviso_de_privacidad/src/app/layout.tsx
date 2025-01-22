import type { Metadata } from "next"
import { Inter } from "next/font/google"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mi Tienda de Ropa",
  description: "Una tienda de ropa simple con aviso de privacidad",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-100 min-h-screen flex flex-col`}>
        <header className="bg-primary text-primary-foreground shadow-md">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold">Mi Tienda de Ropa</h1>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-200 text-gray-600">
          <div className="container mx-auto px-4 py-6 text-center">
            <p>&copy; 2023 Mi Tienda de Ropa. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

