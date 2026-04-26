import React from 'react';
import { Header } from '../components/Header'; // Hapus /ui/
import { Footer } from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow pt-20"> {/* Tambah padding top agar konten tidak tertutup header */}
                {children}
            </main>
            <Footer />
        </div>
    );
};