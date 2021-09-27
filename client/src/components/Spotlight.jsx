import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Form from "./Form";
import axios from "axios";
import MatchOfTheWeek from "./MatchOfTheWeek";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URLForm = `https://api.airtable.com/v0/${airtableBase}/Opinions`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Spotlight() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [returnComment, setReturnComment] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      username,
      comment,
    };
    await axios.post(URLForm, { fields }, config);
    history.push(`/Spotlight`);
    window.location.reload();
  };

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(URLForm, config);
      setReturnComment(res.data.records);
      return res.data.records;
    };
    fetchComments();
  }, []);

  return (
    <div>
      <h3>Discuss the Match!</h3>
      <Form
        username={username}
        setUsername={setUsername}
        comment={comment}
        setComment={setComment}
        handleSubmit={handleSubmit}
        type={"Submit"}
      />
      <h3 className="CommentHeader">Comment Section</h3>
      {returnComment ? (
        <div className="CommentRows">
          <div className="User">
            {returnComment.map((Opinions, index) => {
              return <p key={index}>{Opinions.fields.username}</p>;
            })}
          </div>
          <div className="CommentPost">
            {returnComment.map((Opinions, index) => {
              return <p key={index}>{Opinions.fields.comment}</p>;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
