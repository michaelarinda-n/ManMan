import React from 'react';
import Link from 'next/link';

const RanselStore = () => {
    const products = [
        { id: 1, name: 'Ransel Dasar Amanah', price: 150000, desc: 'Kualitas Itqan, jahitan sangat kuat.' },
        { id: 2, name: 'Ransel Ergonis (Back-Care)', price: 275000, desc: 'Menjaga tulang punggung sesuai syariat menjaga kesehatan.' },
        { id: 3, name: 'Ransel Storm-Proof', price: 320000, desc: 'Melindungi buku dari hujan, amanah dalam menjaga isi.' },
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <nav className="p-6 bg-white shadow-sm flex justify-between items-center border-b-4 border-indigo-600">
                <h1 className="text-2xl font-bold text-indigo-700">🎒 Amanah Backpack</h1>
                <div className="space-x-4">
                    <Link href="/login" className="text-slate-600 hover:text-indigo-600 font-medium">Masuk</Link>
                    <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">Katalog</button>
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
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-500 transition">Beli Sekarang</button>
                        </div>
                    </div>
                ))}
            </section>

            <footer className="bg-slate-900 text-slate-500 py-10 text-center text-sm">
                <p>&quot;Maka sempurnakanlah takaran dan timbangan...&quot; (QS. Al-A&apos;raf: 85)</p>
                <p className="mt-2">© 2026 Bisnis Tas Ransel Sekolah Syariah</p>
            </footer>
        </div>
    );
};

export default RanselStore;
