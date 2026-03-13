import React from 'react';
import Link from 'next/link';

export default function Shop() {
    const products = [
        {
            id: 1,
            name: "Classic Leather Tote",
            price: "Rp 450.000",
            image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop",
            category: "Tote Bag"
        },
        {
            id: 2,
            name: "Urban Canvas Backpack",
            price: "Rp 320.000",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
            category: "Backpack"
        },
        {
            id: 3,
            name: "Minimalist Crossbody",
            price: "Rp 250.000",
            image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop",
            category: "Crossbody"
        },
        {
            id: 4,
            name: "Elegant Evening Clutch",
            price: "Rp 180.000",
            image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=600&auto=format&fit=crop",
            category: "Clutch"
        },
        {
            id: 5,
            name: "Adventure Duffel Bag",
            price: "Rp 550.000",
            image: "https://images.unsplash.com/photo-1550801655-b461f855bc7b?q=80&w=600&auto=format&fit=crop",
            category: "Duffel"
        },
        {
            id: 6,
            name: "Business Briefcase",
            price: "Rp 600.000",
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop",
            category: "Briefcase"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">MM</span>
                                </div>
                                <span className="font-bold text-xl tracking-tight text-gray-900">Toko Man Man</span>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Kembali ke POS
                            </Link>
                            <button className="text-gray-500 hover:text-black transition-colors relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                                    <path d="M3 6h18" />
                                    <path d="M16 10a4 4 0 0 1-8 0" />
                                </svg>
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                                    0
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative bg-black text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1491897554428-130a60dd4757?q=80&w=2000&auto=format&fit=crop"
                        alt="Hero Background - Premium Bags"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
                    <span className="text-sm font-semibold tracking-widest uppercase mb-3 text-gray-300">Koleksi Eksklusif</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Tas Premium <br className="hidden md:block" /> Untuk Setiap Gaya
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300 mb-10">
                        Temukan tas sempurna untuk melengkapi penampilan Anda. Dibuat dengan presisi, didesain untuk keindahan dan fungsionalitas di Man Man Store.
                    </p>
                    <a href="#koleksi" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-black bg-white hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Lihat Koleksi
                    </a>
                </div>
            </div>

            {/* Products Section */}
            <div id="koleksi" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Koleksi Terbaru</h2>
                        <p className="mt-2 text-gray-500">Pilihan tas terbaik yang paling diminati minggu ini.</p>
                    </div>
                    <div className="hidden md:flex space-x-2">
                        <button className="px-4 py-2 bg-black text-white text-sm rounded-full font-medium">Semua</button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 text-sm rounded-full font-medium transition-colors">Wanita</button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 text-sm rounded-full font-medium transition-colors">Pria</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="relative w-full h-80 bg-gray-200 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100">
                                        Lihat Detail
                                    </button>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm shadow-sm">
                                        {product.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-amber-700 transition-colors">
                                            {product.name}
                                        </h3>
                                    </div>
                                    <p className="text-lg font-bold text-gray-900 whitespace-nowrap ml-4">{product.price}</p>
                                </div>
                                <button className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-xl font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-black flex justify-center items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="8" cy="21" r="1" />
                                        <circle cx="19" cy="21" r="1" />
                                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                                    </svg>
                                    Tambah Ke Keranjang
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 mt-auto py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">MM</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-gray-900">Toko Man Man</span>
                    </div>
                    <p className="text-gray-500 text-sm">© 2026 Toko Man Man. Semua hak dilindungi.</p>
                    <div className="flex space-x-6 text-gray-400">
                        <a href="#" className="hover:text-gray-900 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Facebook</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
