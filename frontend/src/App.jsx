/*
   ITZFIZZ — APP
   Main page structure for the landing experience.
*/

import Hero from "./components/Hero";

/*
   APP COMPONENT
   Root layout that mounts the hero and continuation sections.
*/

function App() {

  return (

    <>

      {/*
          HERO EXPERIENCE
          Entry section for the main scroll story.
      */}

      <Hero />

      {/*
          SECOND SECTION
          Continues the digital motion experience below the hero.
      */}

      <section className="next-section">

        {/*
            SECTION LABEL
            Small label introducing the next content block.
        */}

        <span>
          02 / DIGITAL MOTION
        </span>

        {/*
            MAIN STATEMENT
            Primary headline for the continuation of the experience.
        */}

        <h2>
          MOTION
          <br />
          MEETS
          <br />
          EXPERIENCE.
        </h2>

      </section>

    </>

  );

}

/*
   EXPORT
   Send the complete app component to the entry point.
*/

export default App;