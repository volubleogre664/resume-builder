// import { useStore } from "../context/getStore";
// import { useForm } from "../utils/useForm";
import MakerSteps from "../components/MakerSteps";
import heroImage from "../assets/heroImage.png";

import "../styles/pages/Home.css";

function Home() {
  //   const [state, dispatch] = useStore();
  //   const { values, onChange, onSubmit } = useForm(
  //     { name: "", password: "" },
  //     updateState
  //   );

  //   function updateState() {
  //     dispatch({
  //       type: "SET_STATE",
  //       payload: {
  //         name: values.name,
  //       },
  //     });
  //   }

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
            <button>Get Started</button>
          </div>
        </aside>

        <div className="home__heroImage">
          <img src={heroImage} alt="resume illustration" />
        </div>
      </main>

      <MakerSteps />
    </div>
  );
}

export default Home;
