import './globals.css'
import { CartProvider } from './components/CartProvider'

export const metadata = {
    title: 'POS Syariah',
    description: 'Sistem Kasir Syariah Transparan, Jujur, dan Amanah',
}

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body>
                <CartProvider>
                    {children}
                </CartProvider>
            </body>
        </html>
    )
}
