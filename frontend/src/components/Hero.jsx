/*
   ITZFIZZ — HERO EXPERIENCE
   Final — Synchronized Scroll Story
*/

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./Navbar";
import Stats from "./Stats";
import ScrollVisual from "./ScrollVisual";

/*
   REGISTER GSAP PLUGIN
   Load the ScrollTrigger plugin for the hero motion sequence.
*/

gsap.registerPlugin(ScrollTrigger);

/*
   HERO COMPONENT
   Main animated landing section with layered scroll storytelling.
*/

const Hero = () => {

  /*
     HERO ROOT REF
     Reference for the hero section and GSAP scoping.
  */

  const heroRef = useRef(null);

  /*
     GSAP SETUP
     Create a scoped animation context for the hero experience.
  */

  useLayoutEffect(() => {

    /*
       GSAP CONTEXT
       Keeps all animations scoped to this component instance.
    */

    const ctx = gsap.context(() => {

      /*
         INTRO ANIMATION
         Runs when the page first loads and reveals the hero content.
      */

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });


      /*
         HEADLINE LETTERS
         Reveal the hero title in a staggered motion sequence.
      */

      intro.from(".hero-title span", {
        y: 70,
        opacity: 0,
        rotateX: -60,

        stagger: 0.045,

        duration: 1.1,
      });


      /*
         SUBTITLE
         Ease the supporting copy into view with the headline.
      */

      intro.from(
        ".hero-subtitle",
        {
          y: 20,
          opacity: 0,

          duration: 0.7,
        },
        "-=0.7"
      );


      /*
         MAIN VISUAL
         Scale in the first visual layer to anchor the story.
      */

      intro.from(
        ".visual-wrapper",
        {
          scale: 0.55,
          opacity: 0,

          rotation: -20,

          duration: 1.2,

          ease: "expo.out",
        },
        "-=0.5"
      );


      /*
         STATISTICS
         Bring the stat blocks in after the hero visuals appear.
      */

      intro.from(
        ".stat",
        {
          y: 30,
          opacity: 0,

          stagger: 0.12,

          duration: 0.7,
        },
        "-=0.7"
      );


      /*
         SCROLL INDICATOR
         Introduce the scroll cue as a final finishing action.
      */

      intro.from(
        ".scroll-indicator",
        {
          opacity: 0,
          x: 20,

          duration: 0.6,
        },
        "-=0.4"
      );


      /*
         SCROLL STORY TIMELINE
         Timeline structure:

         0 → 1  = PHASE 1 / INTRO
         1 → 2  = PHASE 2 / MOTION
         2 → 3  = PHASE 3 / EXPERIENCE
      */

      const scrollTimeline = gsap.timeline({

        scrollTrigger: {

          trigger: ".hero",

          start: "top top",

          end: "bottom top",

          scrub: 1.5,

          invalidateOnRefresh: true,
        },

      });


      /*
         PHASE 1
         0 → 1
         Initial motion for the hero visual story.
      */

      /*
         MAIN VISUAL
         Begin the first stage of movement in the visual stack.
      */

      scrollTimeline.to(
        ".visual-wrapper",
        {
          x: 0,

          y: -45,

          scale: 0.95,

          rotation: 55,

          duration: 1,

          ease: "none",
        },
        0
      );

      /*
         MAIN OBJECT
         Rotate the center object as the first motion layer settles.
      */

      scrollTimeline.to(
        ".visual-object",
        {
          rotation: 180,

          scale: 0.95,

          duration: 1,

          ease: "none",
        },
        0
      );

      /*
         ORBIT ONE
         Move the first orbit ring to deepen the 3D illusion.
      */

      scrollTimeline.to(
        ".orbit-one",
        {
          rotation: 130,

          scale: 1.1,

          duration: 1,

          ease: "none",
        },
        0
      );

      /*
         ORBIT TWO
         Balance the motion with the second orbit layer.
      */

      scrollTimeline.to(
        ".orbit-two",
        {
          rotation: -110,

          scale: 0.95,

          duration: 1,

          ease: "none",
        },
        0
      );


      /*
         PHASE 2
         1 → 2
         Shift the visual left and compress its scale for motion.
      */

      /*
         MAIN VISUAL
         Pull the hero canvas sideways into the next story step.
      */

      scrollTimeline.to(
        ".visual-wrapper",
        {
          x: -150,

          y: -10,

          scale: 0.75,

          rotation: 170,

          duration: 1,

          ease: "none",
        },
        1
      );

      /*
         MAIN OBJECT
         Rotate the object further to support the lateral shift.
      */

      scrollTimeline.to(
        ".visual-object",
        {
          rotation: 330,

          scale: 0.9,

          duration: 1,

          ease: "none",
        },
        1
      );

      /*
         ORBIT ONE
         Extend the orbit ring to create a more dynamic depth cue.
      */

      scrollTimeline.to(
        ".orbit-one",
        {
          rotation: 270,

          scale: 1.35,

          x: 30,

          duration: 1,

          ease: "none",
        },
        1
      );

      /*
         ORBIT TWO
         Counterbalance the orbit motion as the scene continues.
      */

      scrollTimeline.to(
        ".orbit-two",
        {
          rotation: -250,

          scale: 0.75,

          x: -30,

          duration: 1,

          ease: "none",
        },
        1
      );


      /*
         PHASE 3
         2 → 3
         Move the scene to the right and shrink it into the finale.
      */

      /*
         MAIN VISUAL
         Finish the story with a reduced, offset visual composition.
      */

      scrollTimeline.to(
        ".visual-wrapper",
        {
          x: 150,

          y: -120,

          scale: 0.58,

          rotation: 290,

          duration: 1,

          ease: "none",
        },
        2
      );

      /*
         MAIN OBJECT
         Continue the rotation as the final motion stage completes.
      */

      scrollTimeline.to(
        ".visual-object",
        {
          rotation: 540,

          scale: 0.75,

          duration: 1,

          ease: "none",
        },
        2
      );

      /*
         ORBIT ONE
         Push the final orbit rotation into the last phase.
      */

      scrollTimeline.to(
        ".orbit-one",
        {
          rotation: 420,

          scale: 1.45,

          duration: 1,

          ease: "none",
        },
        2
      );

      /*
         ORBIT TWO
         Finish the orbit cadence with the closing movement pattern.
      */

      scrollTimeline.to(
        ".orbit-two",
        {
          rotation: -400,

          scale: 0.65,

          duration: 1,

          ease: "none",
        },
        2
      );


      /*
         VISUAL GLOW
         Expand the glow through the full duration of the feature story.
      */

      scrollTimeline.to(
        ".visual-glow",
        {
          scale: 1.5,

          opacity: 0.45,

          duration: 3,

          ease: "none",
        },
        0
      );


      /*
         HEADLINE — PHASE 1
         Position the title at the start of the timeline motion.
      */

      scrollTimeline.to(
        ".hero-title",
        {
          y: -30,

          scale: 0.9,

          letterSpacing: "0.09em",

          opacity: 0.85,

          duration: 1,

          ease: "none",
        },
        0
      );


      /*
         HEADLINE — PHASE 2
         Shift the title more aggressively at the middle timeline point.
      */

      scrollTimeline.to(
        ".hero-title",
        {
          y: -100,

          scale: 0.76,

          letterSpacing: "0.16em",

          opacity: 0.5,

          duration: 1,

          ease: "none",
        },
        1
      );


      /*
         HEADLINE — PHASE 3
         Finish the title motion as the hero reaches the last stage.
      */

      scrollTimeline.to(
        ".hero-title",
        {
          y: -190,

          scale: 0.58,

          letterSpacing: "0.22em",

          opacity: 0.15,

          duration: 1,

          ease: "none",
        },
        2
      );


      /*
         SUBTITLE
         Fade the subtitle out as the first movement phase begins.
      */

      scrollTimeline.to(
        ".hero-subtitle",
        {
          y: -45,

          opacity: 0,

          duration: 1,

          ease: "none",
        },
        0
      );


      /*
         STATISTICS
         Let the stat panels fade away as the motion grows more intense.
      */

      scrollTimeline.to(
        ".stats",
        {
          y: 40,

          opacity: 0,

          duration: 0.65,

          ease: "none",
        },
        0.55
      );


      /*
         SCROLL INDICATOR
         Hide the cue early so the interface remains visually clean.
      */

      scrollTimeline.to(
        ".scroll-indicator",
        {
          opacity: 0,

          y: 20,

          duration: 0.4,

          ease: "none",
        },
        0.35
      );


      /*
         SCROLL PROGRESS + SECTION STATE
         Track progress and highlight the active story section.
      */

      ScrollTrigger.create({

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        onUpdate: (self) => {

          /*
             PROGRESS MATH
             Convert the scroll progress into a visible percentage.
          */

          const progress = Math.round(
            self.progress * 100
          );


          /*
             UPDATE PROGRESS BAR
             Synchronize the visual bar with the scroll state.
          */

          gsap.set(
            ".progress-fill",
            {
              width: `${progress}%`,
            }
          );


          /*
             UPDATE PERCENTAGE
             Refresh the percentage value displayed in the indicator.
          */

          const progressNumber =
            document.querySelector(
              ".progress-number"
            );


          if (progressNumber) {

            progressNumber.textContent =
              `${progress
                .toString()
                .padStart(2, "0")}%`;

          }


          /*
             SECTION INDICATOR
             0 → 33%  = INTRO
             33 → 66% = MOTION
             66 → 100 = EXPERIENCE
          */

          const sectionItems =
            document.querySelectorAll(
              ".section-item"
            );


          let activeIndex = 0;


          if (self.progress < 0.33) {

            activeIndex = 0;

          } else if (self.progress < 0.66) {

            activeIndex = 1;

          } else {

            activeIndex = 2;

          }


          /*
             UPDATE ACTIVE SECTION
             Highlight the matching stage as the user scrolls.
          */

          sectionItems.forEach(
            (item, index) => {

              item.classList.toggle(
                "active",
                index === activeIndex
              );

            }
          );

        },

      });


      /*
         CURSOR ATMOSPHERE
         Creates a subtle glow that follows the user's cursor.
      */

      const atmosphereX = gsap.quickTo(
        ".cursor-atmosphere",
        "x",
        {
          duration: 0.8,

          ease: "power3",
        }
      );


      const atmosphereY = gsap.quickTo(
        ".cursor-atmosphere",
        "y",
        {
          duration: 0.8,

          ease: "power3",
        }
      );


      /*
         MOUSE MOVEMENT HANDLER
         Translate the pointer position into a soft motion response.
      */

      const handleMouseMove = (event) => {

        const x =
          event.clientX -
          window.innerWidth / 2;


        const y =
          event.clientY -
          window.innerHeight / 2;


        atmosphereX(
          x * 0.08
        );


        atmosphereY(
          y * 0.08
        );

      };


      window.addEventListener(
        "mousemove",
        handleMouseMove
      );


      /*
         CLEANUP
         Remove the pointer listener when the component closes.
      */

      return () => {

        window.removeEventListener(
          "mousemove",
          handleMouseMove
        );

      };

    }, heroRef);


    /*
       REVERT ANIMATIONS
       Remove all GSAP animations when the component unmounts.
    */

    return () => ctx.revert();

  }, []);


  /*
     JSX
     Render the full hero layout and motion content.
  */

  return (

    <main
      className="hero"
      ref={heroRef}
    >


      {/*
          CURSOR ATMOSPHERE
          Subtle glow that follows the pointer.
      */}

      <div className="cursor-atmosphere"></div>

      {/*
          NAVBAR
          Top navigation for the landing experience.
      */}

      <Navbar />

      {/*
          HERO CONTENT
          Main content stack for the animated experience.
      */}

      <div className="hero-content">

        {/*
            MAIN HEADLINE
            Primary welcome message with staggered letter motion.
        */}

        <div className="hero-title">

          <span>W</span>

          <span>E</span>

          <span>L</span>

          <span>C</span>

          <span>O</span>

          <span>M</span>

          <span>E</span>

          {/*
              SPACE BETWEEN WORDS
              Creates a visual gap between the two title words.
          */}

          <span className="space"></span>


          <span>I</span>

          <span>T</span>

          <span>Z</span>

          <span>F</span>

          <span>I</span>

          <span>Z</span>

          <span>Z</span>

        </div>


        {/*
            SUBTITLE
            Supporting line for the brand experience.
        */}

        <div className="hero-subtitle">

          DIGITAL EXPERIENCES

        </div>


        {/*
            MAIN VISUAL
            Visual centerpiece for the storytelling motion.
        */}

        <ScrollVisual />

        {/*
            STATISTICS
            Highlights displayed beneath the hero visual.
        */}

        <Stats />

        {/*
            SCROLL INDICATOR
            Cue to invite further exploration of the page.
        */}

        <div className="scroll-indicator">

          <span>
            SCROLL TO EXPLORE
          </span>

          <div className="scroll-line"></div>

          <span>
            ↓
          </span>

        </div>


        {/*
            SCROLL PROGRESS
            Visual readout for the current page progress.
        */}

        <div className="scroll-progress">

          <div className="progress-label">

            <span>
              SCROLL PROGRESS
            </span>

            <span className="progress-number">
              00%
            </span>

          </div>


          <div className="progress-track">

            <div className="progress-fill"></div>

          </div>

        </div>


        {/*
            SECTION INDICATOR
            Shows which phase of the journey is active.
        */}

        <div className="section-indicator">

          {/*
              SECTION 01
              First stage of the hero experience.
          */}

          <div className="section-item active">

            <span>
              01
            </span>

            <span>
              INTRO
            </span>

          </div>


          {/*
              SECTION 02
              Second stage of the hero experience.
          */}

          <div className="section-item">

            <span>
              02
            </span>

            <span>
              MOTION
            </span>

          </div>


          {/*
              SECTION 03
              Final stage of the hero experience.
          */}

          <div className="section-item">

            <span>
              03
            </span>

            <span>
              EXPERIENCE
            </span>

          </div>

        </div>

      </div>

    </main>

  );

};


/*
   EXPORT
   Send the completed hero module to the app entry point.
*/

export default Hero;