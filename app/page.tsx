import {Hero} from '@/components/Hero';
import {About} from '@/components/About';
import {Skills} from '@/components/Skills';
import {Stats} from '@/components/Stats';
import {Services} from '@/components/Services';
import {Contact} from '@/components/Contact';
import {Navbar} from '@/components/Navbar';
import {Footer} from '@/components/Footer';
import {WhatsAppButton} from '@/components/WhatsAppButton';
import {CursorTrail} from '@/components/CursorTrail';
import {LoadingScreen} from '@/components/LoadingScreen';

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <CursorTrail />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

