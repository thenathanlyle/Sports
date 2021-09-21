export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.username}
        onChange={(e) => props.setUsername(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={props.comment}
        onChange={(e) => props.setComment(e.target.value)}
      />
      <br />
      <button>{props.type} Comment</button>
    </form>
  );
}
