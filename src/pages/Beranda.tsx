import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Marquee } from '../components/ui/Marquee';
import { Collapse } from '../components/ui/Collapse';
import { ScrollReveal } from '../components/ScrollReveal';

const Beranda = () => {
    const navigate = useNavigate();

    const scrollToTentang = () => {
        const element = document.getElementById('tentang');
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
                        INVOFEST
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl font-medium">
                        Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan 
                        untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. 
                        Dengan mengusung tema <span className="font-bold italic text-[#802B44]">"Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow"</span>.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button label="INFO SELENGKAPNYA" variant="primary" onClick={scrollToTentang} />
                        <Button label="HUBUNGI PANITIA" variant="outline" onClick={openWhatsApp} />
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={200} className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
                    <img 
                        src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" 
                        alt="Mascot" 
                        className="w-full max-w-[550px] drop-shadow-2xl animate-bounce-slow" 
                    />
                    <div className="absolute -bottom-20 w-full h-[300px] bg-gradient-to-t from-[#FFF0F3] to-transparent -z-10"></div>
                </ScrollReveal>
            </section>

            {/* 2. TENTANG & KATEGORI */}
            <section id="tentang" className="bg-[#FFF0F3] py-24 px-8 md:px-24">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#802B44] mb-8">Tentang INVOFEST</h2>
                    <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium">
                        Invofest 2025 merupakan festival tahunan bergengsi yang diselenggarakan oleh Program Studi Sarjana Terapan Teknik Informatika Universitas Harkat Negeri. 
                        Tahun ini, kami hadir untuk mendorong inovasi tanpa batas melalui integrasi teknologi AI yang humanis. Kami mengundang seluruh talenta muda 
                        untuk berkompetisi, belajar, dan berkolaborasi menciptakan solusi cerdas bagi tantangan masa depan global.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { t: 'IT Seminar', d: 'Seminar nasional eksklusif yang menghadirkan pakar industri untuk membahas integrasi AI dan kreativitas manusia.' },
                        { t: 'IT Talkshow', d: 'Diskusi interaktif mengenai peluang karir dan perkembangan teknologi terbaru di era transformasi digital.' },
                        { t: 'IT Competition', d: 'Ajang kompetisi inovasi teknologi bagi mahasiswa seluruh Indonesia untuk memamerkan karya terbaik mereka.' },
                        { t: 'IT Workshop', d: 'Sesi pelatihan praktis (hands-on) untuk meningkatkan skill teknis di bidang coding, UI/UX, dan AI tools.' }
                    ].map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 100}>
                            <Card className="bg-white p-7 rounded-2xl border-r-8 border-b-8 border-[#802B44] shadow-xl hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="font-extrabold text-[#802B44] text-2xl mb-4">{item.t}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed mb-8">{item.d}</p>
                                <Button label="INFO SELENGKAPNYA" variant="primary" />
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* 3. IT SEMINAR SECTION */}
            <section className="bg-white py-24 px-8 md:px-24">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <ScrollReveal direction="left" className="md:w-1/2 text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#802B44] mb-6">IT Seminar</h2>
                        <p className="text-gray-700 leading-relaxed font-medium mb-8">
                            Seminar Nasional Teknologi Informasi ini mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif." Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
                        </p>
                        <Button label="DAFTAR IT SEMINAR" variant="primary" onClick={() => navigate('/seminar')} />
                    </ScrollReveal>
                    <ScrollReveal direction="right" delay={200} className="md:w-1/2 flex justify-center">
                        <img 
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png" 
                            alt="Maskot Seminar" 
                            className="w-full max-w-[400px] drop-shadow-xl" 
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* 4. IT TALKSHOW SECTION */}
            <section className="bg-[#FFF0F3] py-24 px-8 md:px-24">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
                    <ScrollReveal direction="right" className="md:w-1/2 text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#802B44] mb-6">IT Talkshow</h2>
                        <p className="text-gray-700 leading-relaxed font-medium mb-8">
                            Talkshow berskala nasional: "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan." Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.
                        </p>
                        <Button label="DAFTAR IT TALKSHOW" variant="primary" onClick={() => navigate('/talkshow')} />
                    </ScrollReveal>
                    <ScrollReveal direction="left" delay={200} className="md:w-1/2 flex justify-center">
                        <img 
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png" 
                            alt="Maskot Talkshow" 
                            className="w-full max-w-[400px] drop-shadow-xl" 
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* 5. IT WORKSHOP SECTION */}
            <section className="bg-white py-24 px-8 md:px-24">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <ScrollReveal direction="left" className="md:w-1/2 text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#802B44] mb-6">IT Workshop</h2>
                        <p className="text-gray-700 leading-relaxed font-medium mb-8">
                            Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era" ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
                        </p>
                        <Button label="DAFTAR IT WORKSHOP" variant="primary" onClick={() => navigate('/workshop')} />
                    </ScrollReveal>
                    <ScrollReveal direction="right" delay={200} className="md:w-1/2 flex justify-center">
                        <img 
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png" 
                            alt="Maskot Workshop" 
                            className="w-full max-w-[400px] drop-shadow-xl" 
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* 6. IT COMPETITION SECTION */}
            <section className="bg-[#FFF0F3] py-24 px-8 md:px-24">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
                    <ScrollReveal direction="right" className="md:w-1/2 text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#802B44] mb-6">IT Competition</h2>
                        <p className="text-gray-700 leading-relaxed font-medium mb-8">
                            "From Creation to Innovation" adalah sebuah kompetisi IT yang dirancang untuk menjembatani jurang antara ide kreatif dan inovasi nyata. Ajang ini menantang para talenta digital untuk tidak hanya menciptakan sesuatu yang baru, tetapi juga mengembangkannya menjadi solusi yang berdampak, berkelanjutan, dan bernilai guna tinggi.
                        </p>
                        <Button label="DAFTAR IT COMPETITION" variant="primary" onClick={() => navigate('/competition')} />
                    </ScrollReveal>
                    <ScrollReveal direction="left" delay={200} className="md:w-1/2 flex justify-center">
                        <img 
                            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png" 
                            alt="Maskot Competition" 
                            className="w-full max-w-[400px] drop-shadow-xl" 
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* 7. FAQ SECTION */}
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

            {/* 8. SPONSOR SECTION */}
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

            {/* 9. MEDIA PARTNER SECTION */}
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

            <button className="fixed bottom-8 right-8 bg-[#802B44] w-12 h-12 rounded-full text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                ↑
            </button>
        </div>
    );
};

export default Beranda;

