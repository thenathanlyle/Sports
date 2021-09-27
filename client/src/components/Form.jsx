export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Username:
        <input
          className="textInput"
          placeholder="Enter a Username"
          type="text"
          value={props.username}
          maxLength="50"
          onChange={(e) => props.setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Comment:
        <input
          className="textInput"
          placeholder="Type in a Comment"
          type="text"
          value={props.comment}
          maxLength="50"
          onChange={(e) => props.setComment(e.target.value)}
        />
      </label>
      <br />
      <button className="submitButton">{props.type} Comment</button>
    </form>
  );
}
