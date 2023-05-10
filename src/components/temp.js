import $ from "jquery";

function Temp() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const form = $(event.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        setResult(data);
      },
    });
  };

  return (
    <div>
      <form
        action="http://localhost:8000/server.php"
        method="post"
        onSubmit={(event) => submitHandler(event)}
      >
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => changeHandler(event)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1>{result}</h1>
    </div>
  );
}