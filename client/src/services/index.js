import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Fixtures`;
const URLForm = `https://api.airtable.com/v0/${airtableBase}/Opinions`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const fetchFixtures = async () => {
  const res = await axios.get(URL, config);
  return res.data.records;
};

export const fetchComments = async () => {
  const res = await axios.post(URLForm, config);
  return res.data.records;
};
