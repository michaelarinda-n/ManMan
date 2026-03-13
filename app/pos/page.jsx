"use client";

import React, { useState } from 'react';

const POSInput = () => {
    const [cart, setCart] = useState([]);

    // Sample products
    const products = [
        { id: 1, name: 'Kurma Ajwa 1kg', price: 120000, category: 'Makanan', stok: 15 },
        { id: 2, name: 'Madu Hutan 500ml', price: 85000, category: 'Kesehatan', stok: 24 },
        { id: 3, name: 'Habbatussauda Kapsul', price: 65000, category: 'Kesehatan', stok: 30 },
        { id: 4, name: 'Air Zamzam 1 Liter', price: 150000, category: 'Minuman', stok: 10 },
        { id: 5, name: 'Sajadah Turki', price: 200000, category: 'Perlengkapan', stok: 8 },
        { id: 6, name: 'Peci Rajut', price: 15000, category: 'Pakaian', stok: 50 },
        { id: 7, name: 'Buku Fiqih Muamalah', price: 95000, category: 'Buku', stok: 12 },
        { id: 8, name: 'Miswak Import', price: 10000, category: 'Kebersihan', stok: 100 },
    ];

    const addToCart = (product) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const updateQty = (id, newQty) => {
        if (newQty < 1) return;
        setCart(cart.map(item => item.id === id ? { ...item, qty: newQty } : item));
    };

    // Calculations
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const zakat = subtotal * 0.025; // 2.5% Zakat Niaga/Mal
    const total = subtotal; // Total debit (zakat bisa dikonfigurasi sebagai potongan atau info tambahan)

    return (
        <div className="min-h-screen bg-gray-100 flex font-sans">
            {/* Left side - Product Grid */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center z-10 w-full">
                    <div>
                        <h1 className="text-2xl font-bold text-emerald-800">Kasir Syariah</h1>
                        <p className="text-sm text-gray-500">Transparan, Jujur, dan Amanah</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-sm border border-emerald-200">
                            <svg className="w-4 h-4 mr-1 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            Audit Syariah Passed
                        </span>
                        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md cursor-pointer hover:bg-emerald-700 transition">
                            K
                        </div>
                    </div>
                </header>

                {/* Categories & Search */}
                <div className="bg-white border-b border-gray-200 px-6 py-3 flex space-x-2 items-center">
                    <input
                        type="text"
                        placeholder="Cari produk halal..."
                        className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg flex-1 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    />
                    <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition shadow-sm font-medium">
                        Pencarian
                    </button>
                </div>

                {/* Product Grid */}
                <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {products.map(product => (
                            <div
                                key={product.id}
                                onClick={() => addToCart(product)}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 cursor-pointer hover:shadow-lg hover:border-emerald-300 transition duration-200 group flex flex-col h-full"
                            >
                                <div className="h-32 bg-emerald-50 rounded-lg mb-4 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-100 transition">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </div>
                                <div className="flex-1">
                                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">{product.category}</span>
                                    <h3 className="font-semibold text-gray-800 text-sm mt-2 line-clamp-2">{product.name}</h3>
                                </div>
                                <div className="flex justify-between items-end mt-4 pt-3 border-t border-dashed border-gray-100">
                                    <span className="text-emerald-700 font-bold">Rp {product.price.toLocaleString('id-ID')}</span>
                                    <span className="text-xs text-gray-500 font-medium">Stok: {product.stok}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right side - Cart & Checkout */}
            <div className="w-96 bg-white shadow-2xl flex flex-col h-screen border-l border-gray-200 z-20">
                <div className="p-5 border-b border-gray-200 bg-white">
                    <h2 className="text-xl font-bold text-gray-800">Pesanan Saat Ini</h2>
                    <p className="text-xs text-gray-500 mt-1">{new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                                <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <p className="font-medium text-gray-500">Belum ada transaksi</p>
                            <p className="text-xs mt-1">Silakan pilih produk di sebelah kiri</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="flex flex-col pb-4 border-b border-dashed border-gray-200 group">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex-1 pr-2">
                                        <h4 className="text-sm font-semibold text-gray-800 leading-tight">{item.name}</h4>
                                        <div className="text-xs text-gray-500 mt-1">Rp {item.price.toLocaleString('id-ID')} / item</div>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                                        <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-3 py-1 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-l-lg transition">-</button>
                                        <span className="px-3 text-sm font-semibold text-gray-800 min-w-[2rem] text-center">{item.qty}</span>
                                        <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-3 py-1 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-r-lg transition">+</button>
                                    </div>
                                    <div className="font-bold text-sm text-gray-800 text-right">
                                        Rp {(item.price * item.qty).toLocaleString('id-ID')}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Summary & Checkout */}
                <div className="p-5 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                    <div className="space-y-3 mb-5 text-sm">
                        <div className="flex justify-between text-gray-600">
                            <span>Total Debit (Subtotal)</span>
                            <span className="font-medium text-gray-800">Rp {subtotal.toLocaleString('id-ID')}</span>
                        </div>

                        <div className="flex justify-between items-center bg-emerald-50/80 p-3 rounded-lg border border-emerald-100">
                            <div className="flex items-center text-emerald-800 font-medium">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Zakat Niaga (2.5%)
                            </div>
                            <span className="text-emerald-700 font-bold">Rp {zakat.toLocaleString('id-ID')}</span>
                        </div>

                        <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t border-gray-200">
                            <span>Total Tagihan</span>
                            <span>Rp {total.toLocaleString('id-ID')}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <button className="py-2.5 bg-white border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 transition outline-none">
                            Simpan Draft
                        </button>
                        <button className="py-2.5 bg-red-50 text-red-600 border border-red-100 rounded-xl font-medium hover:bg-red-100 focus:ring-2 focus:ring-red-200 transition outline-none" onClick={() => setCart([])}>
                            Batalkan
                        </button>
                    </div>

                    <button
                        disabled={cart.length === 0}
                        className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition duration-200 flex items-center justify-center outline-none ${cart.length === 0 ? 'bg-gray-300 cursor-not-allowed shadow-none' : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-200 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-emerald-200'}`}
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        Proses Pembayaran (Kredit)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default POSInput;
