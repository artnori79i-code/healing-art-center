// Path: App.tsx
import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Programs from './Programs';
import Reviews from './Reviews';
import Insight from './Insight';
import Footer from './Footer';
import ApplyModal from './ApplyModal';

const App: React.FC = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="relative">
      <Header onApplyClick={() => setIsApplyModalOpen(true)} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="program">
          <Programs />
        </section>
        <section id="review">
          <Reviews />
        </section>
        <section id="insight">
          <Insight />
        </section>
      </main>
      <Footer onApplyClick={() => setIsApplyModalOpen(true)} />
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
};

export default App;