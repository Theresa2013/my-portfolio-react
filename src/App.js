import React, { useState } from 'react';
import About from './components/About'
import Footer from './components/Footer';
import ContactForm from './Contact';
import Projects from './components/Projects';
import Navigation from './components/Navigation';

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [projectsSelected, setProjectSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);


  return (
    <div>
      <Navigation
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        projectsSelected={projectsSelected}
        setProjectSelected={setProjectSelected}
      ></Navigation>
      <main>

        {contactSelected ? (
          <>
            <ContactForm></ContactForm>
          </>
        ) : projectsSelected ? (
          <>
            <Projects></Projects>
          </>
        ) : aboutSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <>
          </>
        )}

      </main>
      <Footer />
    </div >
  );
}

export default App;