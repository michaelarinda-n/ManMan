import Link from 'next/link';

export default function Home() {
    const products = [
        {
            id: 1,
            name: "Standard School Backpack",
            price: "Rp 150.000",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
            description: "Tahan air, 2 ruang utama, cocok untuk SD-SMP."
        },
        {
            id: 2,
            name: "Premium Laptop Backpack",
            price: "Rp 280.000",
            image: "https://images.unsplash.com/photo-1491897554428-130a60dd4757?q=80&w=600&auto=format&fit=crop",
            description: "Slot laptop 15 inch terpisah, bahan kanvas tebal, USB port."
        },
        {
            id: 3,
            name: "Orthopedic Ergonomic Bag",
            price: "Rp 350.000",
            image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=600&auto=format&fit=crop",
            description: "Bantalan punggung khusus menjaga postur tulang belakang anak."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
            {/* Header / Navigation */}
            <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-indigo-600/30 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m4 10 1-5h14l1 5" /><path d="M3 10h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="M11 16h2" /><path d="M12 10v4" /></svg>
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-indigo-900">Amanah Backpack</span>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#koleksi" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Koleksi</a>
                            <a href="#nilai" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Nilai Kami</a>
                        </nav>
                        <div className="flex items-center gap-4">
                            <Link href="/login" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors hidden sm:block">Login Vendor</Link>
                            <Link href="/pos" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md shadow-indigo-600/20">
                                Dashboard POS
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1546955870-f8a4425dd959?q=80&w=2000&auto=format&fit=crop"
                        alt="Anak sekolah ceria dengan tas punggung"
                        className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-6 backdrop-blur-sm">
                            ✨ Koleksi Tahun Ajaran Baru
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                            Tas Ransel Pintar, <br />
                            <span className="text-indigo-400">Kuat &amp; Berkah.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                            Mendukung perjalanan menuntut ilmu anak Anda dengan ransel ergonomis, awet, dan dibandrol dengan harga yang transparan tanpa biaya tersembunyi.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#koleksi" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 hover:-translate-y-1">
                                Beli Sekarang
                            </a>
                            <a href="#nilai" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all">
                                Pelajari Nilai Kami
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sharia Values Section */}
            <section id="nilai" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Nilai Syariah Kami</h2>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Kami berpegang teguh pada prinsip muamalah yang benar dalam setiap interaksi dan penjualan.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center group hover:bg-slate-100 transition-colors">
                            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Honest Pricing</h3>
                            <p className="text-slate-600 leading-relaxed">Harga transparan tanpa biaya tersembunyi. Keuntungan wajar yang membawa keberkahan bagi pembeli dan penjual.</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center group hover:bg-slate-100 transition-colors">
                            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Durable Quality (Itqan)</h3>
                            <p className="text-slate-600 leading-relaxed">Dibuat dengan kesungguhan (Itqan). Ransel kuat yang awet bertahun-tahun, mencegah gaya hidup konsumtif berlebihan.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid Section */}
            <section id="koleksi" className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Koleksi Ransel Pilihan</h2>
                            <p className="text-slate-500">Pilih ransel terbaik sesuai kebutuhan ananda tercinta.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                                <div className="relative h-64 overflow-hidden bg-slate-200">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-slate-900 leading-tight">{product.name}</h3>
                                    </div>
                                    <p className="text-slate-600 mb-6 text-sm flex-1">{product.description}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-2xl font-black text-indigo-700">{product.price}</span>
                                        <button className="bg-slate-900 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold transition-colors shadow-md flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                                            Beli
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m4 10 1-5h14l1 5" /><path d="M3 10h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="M11 16h2" /><path d="M12 10v4" /></svg>
                                </div>
                                <span className="font-bold text-2xl tracking-tight text-white">Amanah Backpack</span>
                            </div>
                            <p className="text-slate-400 leading-relaxed mb-6 max-w-xs">
                                Mitra terpercaya untuk perlengkapan sekolah anak Anda. Mengutamakan kualitas, keberkahan, dan harga yang transparan.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-white mb-6">Kontak Kami</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 mt-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    <span>WhatsApp: 0812-3456-7890</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 mt-1"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    <span>Email: info@amanahbackpack.com</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 mt-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <span>Jl. Pendidikan No. 1, Jakarta</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-white mb-6">Sosial Media</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
                        <p className="text-slate-500 text-sm">© 2026 Amanah Backpack. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-500">
                            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
                            <a href="#" className="hover:text-white transition-colors">Syarat &amp; Ketentuan</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
