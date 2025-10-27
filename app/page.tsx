import {Hero} from '@/components/Hero';
import {About} from '@/components/About';
import {Skills} from '@/components/Skills';
import {Stats} from '@/components/Stats';
import {Services} from '@/components/Services';
import {Portfolio} from '@/components/Portfolio';
import {Testimonials} from '@/components/Testimonials';
import {Contact} from '@/components/Contact';
import {Navbar} from '@/components/Navbar';
import {Footer} from '@/components/Footer';
import {WhatsAppButton} from '@/components/WhatsAppButton';
import {CursorTrail} from '@/components/CursorTrail';

export default function HomePage() {
  return (
    <>
      <CursorTrail />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

