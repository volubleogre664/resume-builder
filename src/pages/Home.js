import { useState } from "react";
import MakerSteps from "../components/MakerSteps";
import heroImage from "../assets/heroImage.png";

import "../styles/pages/Home.css";

function Home() {
  const [popup, setPopup] = useState(false);

  return (
    <div className="home">
      <main className="home__hero">
        <aside>
          <h1 className="home__heroTitle">
            Build your ultimate resume today free of charge
          </h1>
          <p className="home__heroSubtitle">
            Create your resume in minutes with our easy to use resume builder
            and sweep the recruiters off their feet.
          </p>

          <div className="home__heroCTA">
            <button onClick={() => setPopup(!popup)}>Get Started</button>
          </div>
        </aside>

        <div className="home__heroImage">
          <img src={heroImage} alt="resume illustration" />
        </div>
      </main>

      {popup && <MakerSteps setPopup={setPopup} />}
    </div>
  );
}

export default Home;
