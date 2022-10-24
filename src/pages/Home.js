import { useStore } from "../context/getStore";
import { useForm } from "../utils/useForm";

function Home() {
  const [state, dispatch] = useStore();
  const { values, onChange, onSubmit } = useForm(
    { name: "", password: "" },
    updateState
  );

  function updateState() {
    dispatch({
      type: "SET_STATE",
      payload: {
        name: values.name,
      },
    });
  }

  return (
    <div className="home">
      <h2>Your free resume builder</h2>

      <div>
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={values.name}
        />

        <button onClick={onSubmit}>update user name</button>
      </div>

      <div>
        <p>{state.name}</p>
      </div>
    </div>
  );
}

export default Home;
