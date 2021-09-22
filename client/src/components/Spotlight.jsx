import { useState } from "react";
import { useHistory } from "react-router";
import Form from "./Form";
import axios from "axios";

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

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      username,
      comment,
    };
    const res = await axios.post(URLForm, { fields }, config);
    history.push(`/Opinions"${res.data.id}`);
  };

  return (
    <div>
      <h3>Test Comment</h3>
      <Form
        username={username}
        setUsername={setUsername}
        comment={comment}
        setComment={setComment}
        handleSubmit={handleSubmit}
        type={"Submit"}
      />
      {/* <div>
        {opinions.map((opinions) => {
          return <h3>{opinions.fields.username}</h3>;
        })}
      </div> */}
    </div>
  );
}
