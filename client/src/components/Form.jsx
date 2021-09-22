export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={props.username}
          onChange={(e) => props.setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Comment:
        <input
          type="text"
          value={props.comment}
          onChange={(e) => props.setComment(e.target.value)}
        />
      </label>
      <br />
      <button>{props.type} Comment</button>
    </form>
  );
}
