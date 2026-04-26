import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-[#FFF0F3] text-[#802B44] py-12 px-8 md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
                <div>
                    <img 
                        src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" 
                        alt="INVOFEST" 
                        className="h-12 mb-4"
                    />
                    <p className="text-sm opacity-80">
                        Informatics Vocational Festival - Universitas Harkat Negeri.
                        Beyond Limits, Beyond Intelligence.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Menu Navigasi</h3>
                    <ul className="space-y-2 text-sm opacity-80">
                        <li><Link to="/" className="hover:text-red-700 hover:underline transition-colors">Beranda</Link></li>
                        <li><Link to="/seminar" className="hover:text-red-700 hover:underline transition-colors">Seminar</Link></li>
                        <li><Link to="/competition" className="hover:text-red-700 hover:underline transition-colors">Competition</Link></li>
                        <li><Link to="/workshop" className="hover:text-red-700 hover:underline transition-colors">Workshop</Link></li>
                        <li><Link to="/talkshow" className="hover:text-red-700 hover:underline transition-colors">Talkshow</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Ikuti Kami</h3>
                    <ul className="space-y-2 text-sm opacity-80">
                        <li>
                            <a href="https://www.instagram.com/invofest_harkatnegeri" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 hover:underline transition-colors">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@invofest2024" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 hover:underline transition-colors">
                                Youtube
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4">Alamat</h3>
                    <p className="text-sm opacity-80 mb-2">
                        Jl. Sisingamangaraja No.69, Tegal, Jawa Tengah
                    </p>
                    <a 
                        href="https://www.google.com/maps?ll=-6.868477,109.10792&z=15&t=m&hl=en&gl=ID&mapclient=embed&cid=16421846192122562303" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-[#802B44] hover:text-red-700 underline"
                    >
                        Lihat di Google Maps →
                    </a>
                </div>
            </div>
            <div className="border-t border-[#802B44]/10 mt-12 pt-8 text-center text-xs opacity-50">
                © 2026 INVOFEST. All rights reserved.
            </div>
        </footer>
    );
};

