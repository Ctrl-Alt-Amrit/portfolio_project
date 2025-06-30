const ProjectsPage = () => {
  return (
    <div className="text-center p-5">
      <h1>Projects</h1>
      <div>
        <h3>Boardzilla – Smart IoT Noticeboard</h3>
        <p>
          Built with ESP32, hosted a local web server to update LCD messages wirelessly.
          Real-time updates,<br/>power-efficient design.
        </p>
      </div>

      <div>
        <h3>Classic Snake Game</h3>
        <p>
          Build with using python and pygame. A classic snake game with a twist.
          Features include score tracking, increasing difficulty,<br/> and a fun retro feel.
        </p>
      </div>

     <div>
        <h3>Multiplayer Shooting Kart Game</h3>
        <p>
          Created using Python and Pygame. A fun multiplayer kart racing game
          with shooting mechanics taking inspriration from Smash Karts,<br/> a game me and my friends love to play. 
        </p>
      </div>

     <div>
        <h3>Moving Car Simulation</h3>
        <p>
          Build with C with graphics.h. A simple moving car simulation
          that demonstrates basic graphics programming concepts.
        </p>
      </div>

      <div>
        <h3>Portfolio Website (This One)</h3>
        <p>
          Created using Next.js and React Bootstrap. Modular, responsive, clean code.
          Designed to represent my dev style.
        </p>
      </div>

      <div>
        <h3>And many more to go...</h3>
      </div>
    </div>
  );
};

export default ProjectsPage;
