"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from './components/CartProvider';

const RanselStore = () => {
    const products = [
        { id: 1, name: 'Ransel Dasar Amanah', price: 150000, desc: 'Kualitas Itqan, jahitan sangat kuat.' },
        { id: 2, name: 'Ransel Ergonis (Back-Care)', price: 275000, desc: 'Menjaga tulang punggung sesuai syariat menjaga kesehatan.' },
        { id: 3, name: 'Ransel Storm-Proof', price: 320000, desc: 'Melindungi buku dari hujan, amanah dalam menjaga isi.' },
    ];

    const { addToCart, cartCount, isLoaded } = useCart();
    const [addedIds, setAddedIds] = useState([]);

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedIds([...addedIds, product.id]);
        setTimeout(() => {
            setAddedIds(prev => prev.filter(id => id !== product.id));
        }, 2000);
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <nav className="p-6 bg-white shadow-sm flex justify-between items-center border-b-4 border-indigo-600">
                <h1 className="text-2xl font-bold text-indigo-700">🎒 Amanah Backpack</h1>
                <div className="flex items-center space-x-6">
                    <Link href="/login" className="text-slate-600 hover:text-indigo-600 font-medium">Masuk</Link>
                    <Link href="/checkout" className="relative text-slate-600 hover:text-indigo-600 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {isLoaded && cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>

            <header className="py-16 px-6 text-center bg-indigo-900 text-white">
                <h2 className="text-4xl font-extrabold mb-4">Tas Sekolah Kuat &amp; Berkah</h2>
                <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">Membangun generasi penerus dengan perlengkapan yang jujur kualitasnya dan adil harganya.</p>
            </header>

            <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {products.map((p) => (
                    <div key={p.id} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-slate-100 flex flex-col">
                        <div className="h-48 bg-slate-200 rounded-xl mb-4 flex items-center justify-center text-slate-400 font-bold italic">
                            Foto Tas Ransel
                        </div>
                        <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                        <p className="text-slate-500 text-sm mb-4 flex-1">{p.desc}</p>
                        <div className="flex justify-between items-center border-t pt-4">
                            <span className="text-lg font-bold text-indigo-600">Rp {p.price.toLocaleString('id-ID')}</span>
                            <button 
                                onClick={() => handleAddToCart(p)}
                                disabled={addedIds.includes(p.id)}
                                className={`px-4 py-2 rounded-lg text-sm transition font-medium ${
                                    addedIds.includes(p.id) 
                                    ? 'bg-emerald-500 text-white cursor-default'
                                    : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'
                                }`}
                            >
                                {addedIds.includes(p.id) ? '✓ Dimasukkan' : '+ Keranjang'}
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            <footer className="bg-slate-900 text-slate-500 py-10 text-center text-sm">
                <p>&quot;Maka sempurnakanlah takaran dan timbangan...&quot; (QS. Al-A&apos;raf: 85)</p>
                <p className="mt-2">&copy; 2026 Bisnis Tas Ransel Sekolah Syariah</p>
            </footer>
        </div>
    );
};

export default RanselStore;
