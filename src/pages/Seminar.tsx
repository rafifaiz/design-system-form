import React from 'react';
import { Button } from '../components/ui/Button';
import { Marquee } from '../components/ui/Marquee';
import { Collapse } from '../components/ui/Collapse';
import { ScrollReveal } from '../components/ScrollReveal';

const Seminar = () => {
    const openWhatsApp = () => {
        window.open('https://api.whatsapp.com/send/?phone=62895605919551&text=Halo+Kak%2C+Saya+Ingin+Bertanya+mengenai+Invofest+2025...&type=phone_number&app_absent=0', '_blank');
    };

    return (
        <div className="pt-16 md:pt-20">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center px-8 md:px-24 py-12">
                <ScrollReveal direction="left" className="md:w-1/2 z-10 text-left">
                    <h1 className="text-5xl md:text-7xl font-black text-[#4A1D2C] mb-4 tracking-tight">
                        IT Seminar
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-[#802B44] mb-6">
                        "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif"
                    </p>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl font-medium">
                        Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem 
                        di mana manusia dan AI bekerja sebagai mitra yang sinergis. Yang bertujuan mengubah paradigma 
                        dari persaingan menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang 
                        teknologi AI yang berpusat pada manusia.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button label="DAFTAR SEKARANG" variant="primary" onClick={openWhatsApp} />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={200} className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
                    <img 
                        src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png" 
                        alt="Maskot Seminar" 
                        className="w-full max-w-[550px] drop-shadow-2xl animate-bounce-slow" 
                    />
                    <div className="absolute -bottom-20 w-full h-[300px] bg-gradient-to-t from-[#FFF0F3] to-transparent -z-10"></div>
                </ScrollReveal>
            </section>

            {/* 2. TENTANG IT SEMINAR */}
            <section id="tentang" className="bg-[#FFF0F3] py-24 px-8 md:px-24">
                <ScrollReveal className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#802B44] mb-8">Tentang IT Seminar</h2>
                    <p className="text-gray-700 leading-relaxed font-medium">
                        Seminar bertajuk "Human-AI Integration: Merancang Arsitektur Kolaboratif, Di tengah pesatnya kemajuan 
                        kecerdasan buatan (AI), narasi yang sering muncul adalah tentang persaingan antara manusia dan mesin. 
                        Kekhawatiran akan penggantian peran manusia oleh teknologi cerdas menjadi diskusi utama di berbagai sektor. 
                        Namun, bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional Teknologi Informasi ini hadir 
                        untuk menjawab tantangan itu dengan mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, 
                        Bukan Kompetitif." Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi 
                        peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, 
                        dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, 
                        dan produktivitas manusia—bukan sebagai pengganti.
                    </p>
                </ScrollReveal>
            </section>

            {/* 3. PEMBICARA */}
            <section className="bg-white py-24 px-8 md:px-24">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#802B44] mb-4">Temui Pembicara Khusus Kami</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <ScrollReveal delay={0}>
                        <div className="bg-white p-8 rounded-2xl border-r-8 border-b-8 border-[#802B44] shadow-xl text-center hover:-translate-y-2 transition-transform duration-300">
                            <img 
                                src="https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png" 
                                alt="Dery Agung Triyadi" 
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-6 border-4 border-[#802B44]"
                            />
                            <h3 className="font-extrabold text-[#802B44] text-xl mb-2">Dery Agung Triyadi</h3>
                            <p className="text-gray-500 font-medium">AWS Indonesia</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <div className="bg-white p-8 rounded-2xl border-r-8 border-b-8 border-[#802B44] shadow-xl text-center hover:-translate-y-2 transition-transform duration-300">
                            <img 
                                src="https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png" 
                                alt="Sowam Habibi" 
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-6 border-4 border-[#802B44]"
                            />
                            <h3 className="font-extrabold text-[#802B44] text-xl mb-2">Sowam Habibi</h3>
                            <p className="text-gray-500 font-medium">Google Indonesia</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 4. PELAKSANAAN */}
            <section className="bg-[#FFF0F3] py-24 px-8 md:px-24">
                <ScrollReveal className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#802B44] mb-12">Pelaksanaan IT Seminar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <p className="text-[#802B44] font-bold text-lg mb-2">Hari & Tanggal</p>
                            <p className="text-gray-700 text-2xl font-extrabold">Kamis, 27 November 2025</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <p className="text-[#802B44] font-bold text-lg mb-2">Waktu</p>
                            <p className="text-gray-700 text-2xl font-extrabold">08.00 WIB - 12.00 WIB</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <p className="text-[#802B44] font-bold text-lg mb-2">Tempat</p>
                            <p className="text-gray-700 text-2xl font-extrabold">Aula Gedung C</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <p className="text-[#802B44] font-bold text-lg mb-2">Lokasi</p>
                            <p className="text-gray-700 text-2xl font-extrabold">Kampus 1 (Mataram) Universitas Harkat Negeri</p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* 5. FAQ SECTION */}
            <section className="py-24 px-8 md:px-24 bg-white">
                <ScrollReveal className="text-center mb-12">
                    <p className="text-[#802B44] font-bold tracking-widest uppercase mb-2">FAQ</p>
                    <h2 className="text-4xl font-extrabold text-gray-800">
                        Punya Pertanyaan? Lihat <span className="text-[#802B44]">Disini</span>
                    </h2>
                    <p className="text-gray-500 mt-4">Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat daftar pertanyaan di bawah ini.</p>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <ScrollReveal delay={0}>
                        <Collapse title="Apa itu INVOFEST?" description="INVOFEST adalah festival IT tahunan yang diselenggarakan oleh Program Studi Sarjana Terapan Teknik Informatika Universitas Harkat Negeri untuk mewadahi minat dan bakat mahasiswa di bidang teknologi." />
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <Collapse title="Kapan dan dimana INVOFEST dilaksanakan?" description="Rangkaian acara INVOFEST 2025 akan dilaksanakan mulai bulan Oktober 2025 secara hybrid (online dan offline di Kampus UHN Tegal, Jawa Tengah)." />
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <Collapse title="Apakah ada biaya pendaftaran di INVOFEST?" description="Beberapa event seperti seminar dan talkshow gratis, namun untuk workshop dan competition dikenakan biaya pendaftaran sesuai dengan ketentuan masing-masing event." />
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <Collapse title="Bagaimana saya mengetahui pemenang kompetisi?" description="Pengumuman pemenang kompetisi akan diinformasikan melalui website resmi INVOFEST dan media sosial Instagram setelah proses penjurian selesai." />
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <Collapse title="Apa yang didapat pemenang dalam kompetisi?" description="Pemenang kompetisi akan mendapatkan hadiah uang tunai, sertifikat, trophy, kesempatan magang di perusahaan mitra, dan mentoring eksklusif dengan para pakar industri." />
                    </ScrollReveal>
                    <ScrollReveal delay={500}>
                        <Collapse title="Bagaimana cara mendaftar event?" description="Pendaftaran dapat dilakukan melalui website ini dengan membuat akun terlebih dahulu, lalu memilih event yang ingin diikuti dan mengisi formulir pendaftaran." />
                    </ScrollReveal>
                </div>
            </section>

            {/* 6. SPONSOR SECTION */}
            <section className="py-20 border-t border-gray-100 bg-[#FFF0F3]">
                <ScrollReveal className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Sponsor INVOFEST 2025</h2>
                </ScrollReveal>
                <Marquee direction="right">
                    <div className="flex gap-16 items-center px-8">
                        <img src="https://www.invofest-harkatnegeri.com/assets/sponsor/bahari_inn.jpg" alt="Bahari Inn" className="h-16 object-contain" />
                        <img src="https://www.invofest-harkatnegeri.com/assets/sponsor/plaza_hotel_tegal.jpg" alt="Plaza Hotel Tegal" className="h-16 object-contain" />
                        <img src="https://www.invofest-harkatnegeri.com/assets/sponsor/indo_print.jpg" alt="Indo Print" className="h-16 object-contain" />
                        <img src="https://www.invofest-harkatnegeri.com/assets/sponsor/big_berry.png" alt="Big Berry" className="h-16 object-contain" />
                        <img src="https://www.invofest-harkatnegeri.com/assets/sponsor/domainesia.png" alt="Domainesia" className="h-16 object-contain" />
                        <img src="https://www.invofest-harkatnegeri.com/assets/sponsor/dicoding_official.png" alt="Dicoding" className="h-16 object-contain" />
                    </div>
                </Marquee>
            </section>

            {/* 7. MEDIA PARTNER SECTION */}
            <section className="py-20 border-t border-gray-100 bg-white">
                <ScrollReveal className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Media Partner INVOFEST 2025</h2>
                </ScrollReveal>
                <Marquee direction="left">
                    <div className="flex gap-16 items-center px-8">
                        <img src="https://www.invofest-harkatnegeri.com/assets/media_partner/Logo%20warga%20tech.png" alt="Warga Tech" className="h-16 object-contain" />
                        <img src="https://www.invofest-harkatnegeri.com/assets/media_partner/LOGO%20HMP%20TEKNIK%20KOMPUTER%20.png" alt="HMP Teknik Komputer" className="h-16 object-contain" />
                        <img src="https://www.invofest-harkatnegeri.com/assets/media_partner/permikomnas.png" alt="Permikomnas" className="h-16 object-contain" />
                        <img src="https://www.invofest-harkatnegeri.com/assets/media_partner/LOGO%20HMP%20D3%20PERHOTELAN.png" alt="HMP D3 Perhotelan" className="h-16 object-contain" />
                        <img src="https://www.invofest-harkatnegeri.com/assets/media_partner/HMPTI_ITB_STIKOM_BALI.png" alt="HMPTI ITB STIKOM Bali" className="h-16 object-contain" />
                        <img src="https://www.invofest-harkatnegeri.com/assets/media_partner/logo%20hima%20elektro.png" alt="Hima Elektro" className="h-16 object-contain" />
                        <img src="https://www.invofest-harkatnegeri.com/assets/media_partner/LOGO%20HMTIKA.png" alt="HMTIKA" className="h-16 object-contain" />
                    </div>
                </Marquee>
            </section>

            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-[#802B44] w-12 h-12 rounded-full text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
            >
                ↑
            </button>
        </div>
    );
};

export default Seminar;

