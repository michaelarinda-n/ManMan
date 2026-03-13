import React, { useState } from 'react';
import Link from 'next/link';

const Register = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        ownerName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.businessName) tempErrors.businessName = "Nama usaha wajib diisi";
        if (!formData.ownerName) tempErrors.ownerName = "Nama pemilik wajib diisi";
        if (!formData.phone) tempErrors.phone = "Nomor handphone wajib diisi";
        if (!formData.email) {
            tempErrors.email = "Email wajib diisi";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Format email tidak valid";
        }
        if (!formData.password) {
            tempErrors.password = "Password wajib diisi";
        } else if (formData.password.length < 6) {
            tempErrors.password = "Password minimal 6 karakter";
        }
        if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = "Password tidak cocok";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Registration data:', formData);
            alert('Alhamdulillah, registrasi berhasil!');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-emerald-700 py-6 px-8 text-center">
                    <h2 className="text-2xl font-bold text-white">Registrasi Vendor Syariah</h2>
                    <p className="text-emerald-100 mt-1">Mari bangun ekosistem ekonomi umat yang berkah</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Usaha</label>
                            <input
                                type="text" name="businessName"
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition ${errors.businessName ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Toko Hasanah"
                                onChange={handleChange}
                            />
                            {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Pemilik</label>
                            <input
                                type="text" name="ownerName"
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition ${errors.ownerName ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Abdullah"
                                onChange={handleChange}
                            />
                            {errors.ownerName && <p className="text-red-500 text-xs mt-1">{errors.ownerName}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Handphone</label>
                            <input
                                type="tel" name="phone"
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="08123456789"
                                onChange={handleChange}
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email" name="email"
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="abdullah@email.com"
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password" name="password"
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="••••••••"
                                onChange={handleChange}
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
                            <input
                                type="password" name="confirmPassword"
                                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="••••••••"
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                        </div>
                    </div>

                    <div className="flex items-start mt-4">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" required className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-emerald-300 cursor-pointer" />
                        </div>
                        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 cursor-pointer">
                            Saya menyetujui <a href="#" className="text-emerald-600 hover:underline">Syarat dan Ketentuan</a> serta bersedia menjalankan akad sesuai Syariat Islam.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] mt-6"
                    >
                        Daftar Vendor
                    </button>

                    <div className="mt-4 text-center text-sm text-gray-600">
                        Sudah punya akun? <Link href="/login" className="text-emerald-600 hover:underline font-bold">Masuk di sini</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
