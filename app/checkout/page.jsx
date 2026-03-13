"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../components/CartProvider';
import { supabase } from '../lib/supabaseClient';

const Checkout = () => {
    const { cart, cartTotal, removeFromCart, updateQuantity, clearCart, isLoaded } = useCart();
    
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        paymentMethod: 'cod'
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const shippingCost = cart.length > 0 ? 15000 : 0;
    const finalTotal = cartTotal + shippingCost;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            console.log("Memulai proses simpan ke Supabase...");
            const { data, error: sbError } = await supabase
                .from('orders')
                .insert([
                    {
                        customer_name: formData.name,
                        customer_phone: formData.phone,
                        customer_address: formData.address,
                        payment_method: formData.paymentMethod,
                        items: cart,
                        total_price: finalTotal,
                        status: 'pending'
                    }
                ]);

            if (sbError) {
                console.error("Supabase Error:", sbError);
                throw sbError;
            }

            console.log("Simpan berhasil!");
            // Show success
            setIsSuccess(true);
            // Clear cart globally
            clearCart();
        } catch (err) {
            console.error("Gagal menyimpan pesanan:", err.message);
            setError(`Gagal memproses pesanan: ${err.message || 'Cek koneksi atau database'}`);
        } finally {
            setLoading(false);
        }
    };

    if (!isLoaded) return <div className="min-h-screen bg-slate-50 flex justify-center items-center">Loading...</div>;

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
                <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center border-t-8 border-indigo-600">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Alhamdulillah!</h2>
                    <p className="text-gray-500 mb-6">Pesanan Anda berhasil dibuat dan sedang kami proses.</p>

                    {formData.paymentMethod === 'transfer' && (
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6 text-left">
                            <p className="text-sm font-bold text-slate-700 mb-2">Instruksi Pembayaran Transfer Bank</p>
                            <p className="text-xs text-slate-500 mb-1">Bank Syariah Indonesia (BSI)</p>
                            <p className="font-mono text-lg font-bold text-indigo-700">7123 4567 890</p>
                            <p className="text-xs text-slate-500 mt-1">a/n Amanah Backpack</p>
                            <p className="text-sm font-bold mt-3">Total: Rp {finalTotal.toLocaleString('id-ID')}</p>
                        </div>
                    )}

                    {formData.paymentMethod === 'qris' && (
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6 flex flex-col items-center">
                            <p className="text-sm font-bold text-slate-700 mb-3">Scan QRIS Berikut</p>
                            <div className="w-48 h-48 bg-white border border-slate-200 shadow-sm rounded flex items-center justify-center text-slate-300 font-bold mb-3">
                                [ GAMBAR QRIS ]
                            </div>
                            <p className="text-sm font-bold">Total: Rp {finalTotal.toLocaleString('id-ID')}</p>
                        </div>
                    )}

                    {formData.paymentMethod === 'cod' && (
                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mb-6 text-amber-800 text-sm">
                            <p className="font-bold mb-1">Bayar di Tempat (COD)</p>
                            <p>Siapkan uang pas senilai <strong>Rp {finalTotal.toLocaleString('id-ID')}</strong> saat kurir tiba di alamat Anda.</p>
                        </div>
                    )}

                    <Link href="/" className="inline-block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition">
                        Kembali Berbelanja
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-12">
            {/* Header */}
            <nav className="bg-white px-6 py-4 shadow-sm border-b-4 border-indigo-600 flex items-center justify-between">
                <Link href="/" className="text-slate-500 hover:text-indigo-600 font-medium flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Kembali
                </Link>
                <h1 className="text-xl font-bold text-indigo-700">Penyelesaian Pesanan</h1>
                <div className="w-20"></div> {/* Spacer */}
            </nav>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Side: Form */}
                <div className="lg:col-span-7 space-y-6">
                    <form id="checkout-form" onSubmit={handleCheckout} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Informasi Pengiriman</h2>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Fulan bin Fulan" />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nomor WhatsApp</label>
                                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="08123456789" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Alamat Lengkap (Beserta Kode Pos)</label>
                                <textarea required name="address" value={formData.address} onChange={handleChange} rows="3" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Jl. Sudirman No 123, Kel. Senayan..."></textarea>
                            </div>
                        </div>

                        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">Metode Pembayaran</h2>
                        <div className="space-y-3 mb-6">
                            <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition ${formData.paymentMethod === 'transfer' ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-200 hover:bg-slate-50'}`}>
                                <input type="radio" name="paymentMethod" value="transfer" checked={formData.paymentMethod === 'transfer'} onChange={handleChange} className="w-4 h-4 text-indigo-600 focus:ring-indigo-500" />
                                <div className="ml-3 flex-1 flex justify-between">
                                    <span className="font-semibold text-slate-800">Transfer Bank</span>
                                    <span className="text-slate-500 text-sm">BCA, Mandiri, BNI, BSI</span>
                                </div>
                            </label>

                            <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition ${formData.paymentMethod === 'qris' ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-200 hover:bg-slate-50'}`}>
                                <input type="radio" name="paymentMethod" value="qris" checked={formData.paymentMethod === 'qris'} onChange={handleChange} className="w-4 h-4 text-indigo-600 focus:ring-indigo-500" />
                                <div className="ml-3 flex-1 flex justify-between">
                                    <span className="font-semibold text-slate-800">QRIS</span>
                                    <span className="text-slate-500 text-sm">Gopay, OVO, Dana, ShopeePay</span>
                                </div>
                            </label>

                            <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition ${formData.paymentMethod === 'cod' ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-200 hover:bg-slate-50'}`}>
                                <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange} className="w-4 h-4 text-indigo-600 focus:ring-indigo-500" />
                                <div className="ml-3 flex-1 flex justify-between">
                                    <span className="font-semibold text-slate-800">Bayar di Tempat (COD)</span>
                                    <span className="text-slate-500 text-sm">Bayar ke kurir</span>
                                </div>
                            </label>
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200 mb-6 text-sm">
                                {error}
                            </div>
                        )}
                    </form>
                </div>

                {/* Right Side: Order Summary */}
                <div className="lg:col-span-5">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 sticky top-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-6">Ringkasan Pesanan</h2>
                        
                        {cart.length === 0 ? (
                            <div className="text-center py-8 text-slate-500">
                                <p>Keranjang Anda masih kosong.</p>
                                <Link href="/" className="text-indigo-600 hover:underline mt-2 inline-block">Mulai Belanja</Link>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                                            <div className="w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center text-xs text-slate-400">Foto</div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-sm text-slate-800 line-clamp-1">{item.name}</h3>
                                                <div className="text-indigo-600 font-bold text-sm mt-1">Rp {item.price.toLocaleString('id-ID')}</div>
                                                
                                                <div className="flex items-center gap-3 mt-2">
                                                    <div className="flex items-center border border-slate-200 rounded-md">
                                                        <button type="button" onClick={() => updateQuantity(item.id, item.qty - 1)} className="px-2 py-0.5 text-slate-500 hover:bg-slate-100">-</button>
                                                        <span className="px-2 text-xs font-medium min-w-[1.5rem] text-center">{item.qty}</span>
                                                        <button type="button" onClick={() => updateQuantity(item.id, item.qty + 1)} className="px-2 py-0.5 text-slate-500 hover:bg-slate-100">+</button>
                                                    </div>
                                                    <button type="button" onClick={() => removeFromCart(item.id)} className="text-red-500 text-xs hover:underline">Hapus</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 pt-4 border-t border-slate-200 mb-6 text-sm">
                                    <div className="flex justify-between text-slate-600">
                                        <span>Subtotal ({cart.reduce((a,b) => a+b.qty, 0)} barang)</span>
                                        <span className="font-semibold text-slate-800">Rp {cartTotal.toLocaleString('id-ID')}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600">
                                        <span>Ongkos Kirim (Estimasi)</span>
                                        <span className="font-semibold text-slate-800">Rp {shippingCost.toLocaleString('id-ID')}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t border-slate-200">
                                        <span>Total Tagihan</span>
                                        <span className="text-indigo-700">Rp {finalTotal.toLocaleString('id-ID')}</span>
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    form="checkout-form"
                                    disabled={loading}
                                    className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl transition shadow-md hover:shadow-lg active:scale-[0.98] flex justify-center items-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? 'Memproses...' : 'Buat Pesanan Sekarang'}
                                    {!loading && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
                                </button>
                                <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                    Pembayaran Aman 100%
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
