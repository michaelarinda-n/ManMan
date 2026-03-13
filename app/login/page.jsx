"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
    };

    return (
        <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-emerald-600 p-6 text-center">
                    <h1 className="text-3xl font-bold text-white mb-2">POS Syariah</h1>
                    <p className="text-emerald-100 text-sm italic">
                        &quot;Sesungguhnya Allah menyuruh kamu menyampaikan amanat kepada yang berhak menerimanya.&quot;
                    </p>
                </div>

                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email / Username</label>
                            <input
                                type="text"
                                name="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition outline-none"
                                placeholder="Masukkan email atau username"
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition outline-none"
                                placeholder="••••••••"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" type="checkbox" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Ingat saya</label>
                            </div>
                            <a href="#" className="text-sm font-medium text-emerald-600 hover:text-emerald-500">Lupa password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02]"
                        >
                            Masuk dengan Bismillah
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        Belum memiliki akun vendor? <Link href="/register" className="text-emerald-600 hover:underline font-medium">Daftar sekarang</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
