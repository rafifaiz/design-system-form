import React from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Marquee } from '../components/ui/Marquee';
import { Collapse } from '../components/ui/Collapse';
import { ScrollReveal } from '../components/ScrollReveal';

const Competition = () => {

    const scrollToDeskripsi = () => {
        const element = document.getElementById('deskripsi');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openWhatsApp = () => {
        window.open('https://api.whatsapp.com/send/?phone=62895605919551&text=Halo+Kak%2C+Saya+Ingin+Bertanya+mengenai+Invofest+2025...&type=phone_number&app_absent=0', '_blank');
    };

    return (
        <div className="pt-16 md:pt-20">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center px-8 md:px-24 py-12">
                <ScrollReveal direction="left" className="md:w-1/2 z-10 text-left">
                    <h1 className="text-5xl md:text-7xl font-black text-[#4A1D2C] mb-4 tracking-tight">
                        IT Competition
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-[#802B44] mb-6">
                        "From Creation to Innovation"
                    </p>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl font-medium">
                        Kompetisi dalam INVOFEST ini mengusung tema "From Creation to Innovation", 
                        Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas 
                        guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan 
                        masa depan yang berkelanjutan.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button label="INFO SELENGKAPNYA" variant="primary" onClick={scrollToDeskripsi} />
                        <Button label="HUBUNGI PANITIA" variant="outline" onClick={openWhatsApp} />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={200} className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
                    <img 
                        src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png" 
                        alt="Maskot Competition" 
                        className="w-full max-w-[550px] drop-shadow-2xl animate-bounce-slow" 
                    />
                    <div className="absolute -bottom-20 w-full h-[300px] bg-gradient-to-t from-[#FFF0F3] to-transparent -z-10"></div>
                </ScrollReveal>
            </section>

            {/* 2. DESKRIPSI KOMPETISI */}
            <section id="deskripsi" className="bg-[#FFF0F3] py-24 px-8 md:px-24">
                <ScrollReveal className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#802B44] mb-8">Deskripsi Kompetisi</h2>
                    <p className="text-gray-700 leading-relaxed font-medium">
                        Kompetisi atau perlombaan yang ada dalam kegiatan INVOFEST (Infomatics Vocational Festival) 2025 
                        adalah diantaranya National Poster Design Competition, UI UX Design Competition, dan juga Web Design Competition. 
                        Kompetisi dalam INVOFEST ini mengusung tema "From Creation to Innovation". Tema ini bertujuan mengajak generasi muda 
                        untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, 
                        yang mampu mewujudkan masa depan yang berkelanjutan. Melalui pendekatan ini, diharapkan generasi ini 
                        akan berperan dalam menciptakan solusi-solusi baru untuk tantangan masa kini dan mendatang, 
                        baik dalam hal teknologi, lingkungan, pendidikan, maupun tanggung jawab sosial.
                    </p>
                </ScrollReveal>
            </section>

            {/* 3. DAFTAR KOMPETISI */}
            <section className="bg-white py-24 px-8 md:px-24">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#802B44] mb-4">Daftar Kompetisi</h2>
                    <p className="text-gray-600 text-lg">Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ScrollReveal delay={0}>
                        <Card className="bg-white p-7 rounded-2xl border-r-8 border-b-8 border-[#802B44] shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center">
                            <img 
                                src="https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png" 
                                alt="Poster Design Competition" 
                                className="h-32 mx-auto mb-6 object-contain"
                            />
                            <h3 className="font-extrabold text-[#802B44] text-xl mb-4">Poster Design Competition</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital 
                                yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.
                            </p>
                            <Button label="INFO SELENGKAPNYA" variant="primary" />
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <Card className="bg-white p-7 rounded-2xl border-r-8 border-b-8 border-[#802B44] shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center">
                            <img 
                                src="https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png" 
                                alt="UI/UX Design Competition" 
                                className="h-32 mx-auto mb-6 object-contain"
                            />
                            <h3 className="font-extrabold text-[#802B44] text-xl mb-4">UI/UX Design Competition</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital 
                                yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.
                            </p>
                            <Button label="INFO SELENGKAPNYA" variant="primary" />
                        </Card>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <Card className="bg-white p-7 rounded-2xl border-r-8 border-b-8 border-[#802B44] shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center">
                            <img 
                                src="https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png" 
                                alt="Web Design Competition" 
                                className="h-32 mx-auto mb-6 object-contain"
                            />
                            <h3 className="font-extrabold text-[#802B44] text-xl mb-4">Web Design Competition</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website 
                                yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.
                            </p>
                            <Button label="INFO SELENGKAPNYA" variant="primary" />
                        </Card>
                    </ScrollReveal>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-24 px-8 md:px-24 bg-[#FFF0F3]">
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

            {/* 5. SPONSOR SECTION */}
            <section className="py-20 border-t border-gray-100 bg-white">
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

            {/* 6. MEDIA PARTNER SECTION */}
            <section className="py-20 border-t border-gray-100 bg-[#FFF0F3]">
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

export default Competition;

