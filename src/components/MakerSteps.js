import stepsImage from "../assets/steps.png";

import "../styles/components/MakerSteps.css";

function MakerSteps({ setPopup }) {
  const cancelClicked = () => setPopup(false);

  return (
    <div className="steps">
      <div className="steps__main">
        <aside className="steps__mainAside">
          <img src={stepsImage} alt="few steps and you are done" />
        </aside>

        <main className="steps__mainBody">
          <header>
            <h1 className="steps__mainBodyTitle">
              Just a few steps and you are done
            </h1>
            <p className="steps__mainBodySubtitle">
              Just complete the steps below and you have your pdf resume and you
              can preview your resume on each step
            </p>
          </header>

          <div className="steps__mainBodySteps">
            <div className="steps__mainBodyStepsStep">
              <div className="steps__mainBodyStepsStepNumber">
                <span>1.</span>
              </div>
              <div className="steps__mainBodyStepsStepContent">
                <h3>Opening paragraph</h3>
                {/* <small>
                  Tell the recruiters about who you are and what value you bring
                  to the team and company.
                </small> */}
              </div>
            </div>

            <div className="steps__mainBodyStepsStep">
              <div className="steps__mainBodyStepsStepNumber">
                <span>2.</span>
              </div>
              <div className="steps__mainBodyStepsStepContent">
                <h3>Personal information</h3>
                {/* <small>
                  Your name, email, social accounts and other contact details
                  for them to reach you
                </small> */}
              </div>
            </div>

            <div className="steps__mainBodyStepsStep">
              <div className="steps__mainBodyStepsStepNumber">
                <span>3.</span>
              </div>
              <div className="steps__mainBodyStepsStepContent">
                <h3>Education history</h3>
                {/* <small>
                  Where did you study and what did you study? Tell them about
                  all of it. Remember, completed or not, education is still
                  education.
                </small> */}
              </div>
            </div>

            <div className="steps__mainBodyStepsStep">
              <div className="steps__mainBodyStepsStepNumber">
                <span>3.</span>
              </div>
              <div className="steps__mainBodyStepsStepContent">
                <h3>Your skills</h3>
                {/* <small>
                  This is where you shine. List your skills and show them what
                  you got. Skills related to the job will always grab their
                  attention.
                </small> */}
              </div>
            </div>

            <div className="steps__mainBodyStepsStep">
              <div className="steps__mainBodyStepsStepNumber">
                <span>4.</span>
              </div>
              <div className="steps__mainBodyStepsStepContent">
                <h3>Work experience</h3>
                {/* <small>
                  All experience is good experience. List your most recent work
                  experience and be sure to include your responsibilities and
                  the skills you used and learned.
                </small> */}
              </div>
            </div>

            <div className="steps__mainBodyStepsStep">
              <div className="steps__mainBodyStepsStepNumber">
                <span>5.</span>
              </div>
              <div className="steps__mainBodyStepsStepContent">
                <h3>Additional sections</h3>
                {/* <small>
                  Your name, email, social accounts and other contact details
                  for them to reach you
                </small> */}
              </div>
            </div>

            <div className="steps__mainBodyStepsStep">
              <div className="steps__mainBodyStepsStepNumber">
                <span>6.</span>
              </div>
              <div className="steps__mainBodyStepsStepContent">
                <h3>Finalize and get PDF</h3>
                {/* <small>
                  Your name, email, social accounts and other contact details
                  for them to reach you
                </small> */}
              </div>
            </div>

            <div className="steps__mainBodyStepsStep">
              <button className="btn-continue">Let's go</button>
              <button onClick={cancelClicked} className="btn-cancel">
                Cancel
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MakerSteps;
