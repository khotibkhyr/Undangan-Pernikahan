/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  Calendar, 
  MapPin, 
  Clock, 
  Music, 
  Music2, 
  ChevronDown,
  Instagram,
  User,
  Info,
  Map,
  X
} from "lucide-react";

// --- Components ---

const LuxuryOrnament = ({ className }: { className?: string }) => (
  <div className={`ornament absolute ${className}`}>
    <svg width="300" height="300" viewBox="0 0 200 200" fill="none" className="text-accent/20">
      <path d="M100 20C110 20 120 30 120 50C120 70 100 90 100 90C100 90 80 70 80 50C80 30 90 20 100 20Z" stroke="currentColor" strokeWidth="0.5" />
      <path d="M20 100C20 90 30 80 50 80C70 80 90 100 90 100C90 100 70 120 50 120C30 120 20 110 20 100Z" stroke="currentColor" strokeWidth="0.5" />
      <path d="M100 180C90 180 80 170 80 150C80 130 100 110 100 110C100 110 120 130 120 150C120 170 110 180 100 180Z" stroke="currentColor" strokeWidth="0.5" />
      <path d="M180 100C180 110 170 120 150 120C130 120 110 100 110 100C110 100 130 80 150 80C170 80 180 90 180 100Z" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="0.5" />
      <path d="M100 40 L100 160 M40 100 L160 100" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" />
    </svg>
  </div>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [guestName, setGuestName] = useState("Bapak/Ibu/Saudara/i");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) setGuestName(to);
  }, []);

  const openInvitation = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-bg-premium text-text-premium overflow-x-hidden selection:bg-accent/20 selection:text-text-premium">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="blur-spot -top-40 -left-40 w-[600px] h-[600px] bg-primary/5" />
        <div className="blur-spot top-1/2 -right-40 w-[700px] h-[700px] bg-accent/5" />
        <div className="blur-spot -bottom-40 left-1/4 w-[800px] h-[400px] bg-white/50" />
      </div>

      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            exit={{ y: "-100vh" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg-premium text-center p-6"
          >
            <LuxuryOrnament className="-top-10 -left-10 w-96 rotate-12" />
            <LuxuryOrnament className="-bottom-10 -right-10 w-96 -rotate-12" />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="relative z-10 space-y-12 max-w-lg w-full"
            >
              <div className="space-y-6">
                <motion.p 
                  initial={{ letterSpacing: "1em", opacity: 0 }}
                  animate={{ letterSpacing: "0.4em", opacity: 1 }}
                  className="font-sans text-accent font-bold uppercase text-[10px] tracking-[0.4em]"
                >
                  Undangan Pernikahan
                </motion.p>
                <h1 className="font-serif italic text-7xl md:text-9xl py-4 text-primary leading-none tracking-tighter">Alfi & Nur</h1>
              </div>

              <div className="space-y-4">
                <p className="text-text-premium/60 font-sans text-[10px] tracking-[0.2em] uppercase font-semibold">Undangan Spesial Untuk:</p>
                <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] py-6 px-10 inline-block shadow-[0_15px_45px_-15px_rgba(10,42,31,0.15)] border border-accent/20">
                  <h2 className="text-2xl font-serif italic text-primary">{guestName}</h2>
                </div>
              </div>

              <button 
                onClick={openInvitation}
                className="group relative px-12 py-5 bg-primary text-accent-light text-[11px] uppercase tracking-[0.3em] font-sans font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto"
              >
                <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <Heart className="w-4 h-4 fill-accent-light" />
                <span className="relative">Buka Undangan</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`${!isOpen ? "h-screen overflow-hidden" : "animate-in fade-in duration-1000"}`}>
        {/* Floating Controls */}
        <div className="fixed bottom-8 right-8 z-40 space-y-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMuted(!isMuted)}
            className="w-14 h-14 bg-primary text-accent-light rounded-full shadow-2xl flex items-center justify-center backdrop-blur-lg border border-accent/30"
          >
            {isMuted ? <Music2 className="w-6 h-6" /> : <Music className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-40 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2.5 }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale contrast-125"
          />
          
          <LuxuryOrnament className="top-20 left-1/2 -translate-x-1/2 scale-150 rotate-45 opacity-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10 space-y-12"
          >
            <div className="space-y-4">
              <p className="font-sans text-[11px] text-accent font-bold uppercase tracking-[0.6em]">Simpan Tanggalnya</p>
              <div className="h-[1px] w-24 bg-accent/30 mx-auto" />
            </div>
            
            <h2 className="font-serif italic text-8xl md:text-[130px] leading-none text-primary drop-shadow-xl gold-shimmer">Alfi & Nur</h2>
            
            <div className="flex flex-col items-center gap-6">
              <p className="font-sans text-sm tracking-[0.4em] uppercase font-semibold text-primary/70">11 . 06 . 2026</p>
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              >
                <ChevronDown className="w-6 h-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Intro Section */}
        <section className="py-32 px-6 max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-10 relative z-10"
          >
            <p className="font-serif text-5xl text-accent italic">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
            <div className="relative">
              <p className="text-primary font-light leading-relaxed max-w-2xl mx-auto italic text-xl border-x-4 border-accent/10 px-12 py-6">
                "Atas nama Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara resepsi pernikahan kami yang InsyaAllah diselenggarakan pada:"
              </p>
              <LuxuryOrnament className="-top-10 -left-10 w-24 -rotate-12 opacity-20" />
              <LuxuryOrnament className="-bottom-10 -right-10 w-24 rotate-12 opacity-20" />
            </div>
          </motion.div>
        </section>

        {/* Couple Section */}
        <section className="py-32 px-6 relative overflow-hidden bg-primary/[0.03]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center text-center">
            {/* Groom */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-10"
            >
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-accent/40 p-4 mx-auto bg-white/50 backdrop-blur-md shadow-2xl overflow-hidden">
                   <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center p-12">
                    <User className="w-full h-full text-primary/30" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif italic text-6xl md:text-7xl text-primary drop-shadow-sm">Alfi Sahri</h3>
                <div className="h-[1px] w-20 bg-accent/30 mx-auto" />
                <p className="text-primary/60 font-medium text-[11px] uppercase tracking-[0.3em]">Putra dari Bapak Sunardi & Ibu Rakini (Almh)</p>
              </div>
            </motion.div>

            {/* Bridge Decoration */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:block z-0 opacity-10">
              <span className="font-serif italic text-[200px] text-accent">&</span>
            </div>

            {/* Bride */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-10"
            >
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700" />
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-accent/40 p-4 mx-auto bg-white/50 backdrop-blur-md shadow-2xl overflow-hidden">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center p-12">
                    <User className="w-full h-full text-primary/30" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif italic text-6xl md:text-7xl text-primary drop-shadow-sm">Nur Isnaini Nafi</h3>
                <div className="h-[1px] w-20 bg-accent/30 mx-auto" />
                <p className="text-primary/60 font-medium text-[11px] uppercase tracking-[0.3em]">Putri dari Bapak Kanapi & Ibu Masudah</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-40 px-6 bg-primary relative text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-10 relative z-10 py-16"
          >
            <div className="inline-block p-4 border border-accent/30 rounded-full mb-4">
              <Heart className="w-6 h-6 text-accent fill-accent/20" />
            </div>
            <p className="text-2xl md:text-3xl font-serif italic text-accent-light leading-relaxed px-8">
              "Cinta sejati bukanlah tentang menemukan seseorang yang sempurna, tetapi tentang menemukan seseorang yang mau menghadapi ketidaksempurnaan bersama."
            </p>
            <div className="h-[1px] w-40 bg-accent/20 mx-auto" />
          </motion.div>
          <LuxuryOrnament className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 text-accent/10" />
        </section>

        {/* Event Section */}
        <section className="py-32 px-6 bg-bg-premium relative">
          <div className="max-w-6xl mx-auto space-y-24">
            <div className="text-center space-y-4">
              <h2 className="font-sans text-[11px] text-accent font-bold uppercase tracking-[0.6em]">Perayaan</h2>
              <h3 className="font-serif italic text-5xl text-primary">Momen Berharga</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              {/* Akad Nikah */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-luxury p-12 space-y-8 group transition-all duration-500 hover:shadow-primary/10"
              >
                <div className="space-y-8 text-center relative z-10">
                  <div className="inline-block px-10 py-3 border-y border-accent/20">
                    <span className="text-[11px] uppercase tracking-[0.4em] font-sans font-bold text-accent">Akad Nikah</span>
                  </div>
                  <div className="space-y-6">
                    <p className="text-4xl font-serif text-primary italic">08:00 — 09:00</p>
                    <div className="space-y-3 text-sm text-primary/70">
                      <p className="font-bold text-primary tracking-widest uppercase text-[12px]">Kamis, 11 Juni 2026</p>
                      <p className="italic leading-relaxed">Ds. Tluwuk Rt 02/Rw 02<br/>Wedarijaksa Pati</p>
                    </div>
                  </div>
                </div>
                <LuxuryOrnament className="-bottom-20 -right-20 w-48 rotate-45 opacity-5" />
              </motion.div>

              {/* Resepsi */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="frosted-premium rounded-[2rem] p-12 space-y-8 relative overflow-hidden scale-105 shadow-2xl transition-all duration-500"
              >
                <div className="space-y-8 text-center relative z-10">
                   <div className="inline-block px-10 py-3 border-y border-accent-light/30">
                    <span className="text-[11px] uppercase tracking-[0.4em] font-sans font-bold text-accent-light">Resepsi Pernikahan</span>
                  </div>
                  <div className="space-y-6">
                    <p className="text-5xl font-serif text-white italic drop-shadow-md">09:00 — Selesai</p>
                    <div className="space-y-3 text-sm text-accent-light/80">
                      <p className="font-bold text-white tracking-widest uppercase text-[12px]">Kamis, 11 Juni 2026</p>
                      <p className="italic leading-relaxed">Kediaman Mempelai Wanita</p>
                    </div>
                  </div>
                </div>
                <LuxuryOrnament className="-top-10 -left-10 w-48 -rotate-45 opacity-20 text-accent/30" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-32 px-6 bg-primary relative overflow-hidden">
          <div className="max-w-5xl mx-auto space-y-16 relative z-10">
            <div className="text-center space-y-6">
              <h2 className="font-serif text-5xl text-accent-light italic tracking-tight">Peta Lokasi</h2>
              <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
            </div>

            <div className="space-y-12">
              <div className="aspect-[21/9] md:aspect-[21/7] w-full bg-primary-light rounded-[3rem] border-2 border-accent/20 overflow-hidden relative group shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover opacity-20 grayscale brightness-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="bg-primary p-6 rounded-full shadow-[0_0_50px_rgba(198,163,79,0.3)] border border-accent"
                  >
                    <MapPin className="w-12 h-12 text-accent fill-accent/10" shrink-0 />
                  </motion.div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-primary/95 backdrop-blur-2xl p-8 rounded-[2rem] border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left space-y-2">
                      <p className="font-serif italic text-2xl text-accent leading-tight">Kediaman Mempelai Wanita</p>
                      <p className="text-[11px] text-accent-light/50 font-sans tracking-widest uppercase">Ds. Tluwuk Rt 02/Rw 02 Wedarijaksa Pati</p>
                    </div>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-10 py-4 bg-accent text-primary rounded-full font-bold text-xs uppercase tracking-widest hover:bg-accent-light transition-all shadow-xl hover:-translate-y-1"
                    >
                      Buka di Peta
                    </a>
                  </div>
                </div>
              </div>

              <div className="max-w-xs mx-auto p-10 bg-white/95 backdrop-blur-xl rounded-[3rem] space-y-6 text-center text-primary shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-accent/20">
                 <div className="aspect-square bg-bg-premium flex items-center justify-center p-6 rounded-3xl shadow-inner group">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://maps.google.com" 
                      alt="Location QR" 
                      className="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                 </div>
                 <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40">Pindai untuk Lokasi</p>
              </div>
            </div>
          </div>
          <LuxuryOrnament className="top-0 right-0 w-96 rotate-12 opacity-5 text-accent" />
          <LuxuryOrnament className="bottom-0 left-0 w-96 -rotate-12 opacity-5 text-accent" />
        </section>

        {/* Footer Section */}
        <footer className="py-32 px-6 bg-bg-premium text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-16 relative z-10">
            <div className="space-y-8">
              <p className="text-primary/40 text-[10px] font-sans tracking-[0.5em] font-bold uppercase italic">
                #AlfiNurJourney — Selamanya & Selalu
              </p>
              <div className="flex items-center justify-center gap-6 text-primary">
                <span className="font-serif italic text-6xl md:text-8xl py-4 gold-shimmer">Alfi & Nur</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 text-[10px] text-primary/40 uppercase tracking-[0.3em] font-sans">
              <div className="space-y-4">
                <p className="text-accent/60 font-bold border-b border-accent/10 pb-2">Keluarga Mempelai Wanita</p>
                <p className="text-primary font-bold text-sm italic">Bapak Kanapi & Ibu Masudah</p>
              </div>
              <div className="space-y-4">
                <p className="text-accent/60 font-bold border-b border-accent/10 pb-2">Keluarga Mempelai Pria</p>
                <p className="text-primary font-bold text-sm italic">Bapak Sunardi & Ibu Rakini (Almh)</p>
              </div>
            </div>

            <div className="pt-20 border-t border-accent/10 space-y-6">
              <p className="text-[9px] text-primary/30 uppercase tracking-[0.4em] font-sans">© 2026 Dibuat dengan Penuh Cinta untuk Alfi & Nur</p>
            </div>
          </div>
          <LuxuryOrnament className="-bottom-20 -left-20 w-96 opacity-10" />
          <LuxuryOrnament className="-bottom-20 -right-20 w-96 opacity-10" />
        </footer>
      </div>
    </div>
  );
}

