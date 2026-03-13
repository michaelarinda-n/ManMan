import './globals.css'

export const metadata = {
    title: 'POS Syariah',
    description: 'Sistem Kasir Syariah Transparan, Jujur, dan Amanah',
}

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body>{children}</body>
        </html>
    )
}
