import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Fixtures`;
const URLExact = `https://api.airtable.com/v0/${airtableBase}/Fixtures/recvrh7HEyvy9Xd3M`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const fetchFixtures = async () => {
  const res = await axios.get(URL, config);
  return res.data.records;
};

export const fetchFixture = async () => {
  const res = await axios.get(URLExact, config);
  return res.data.records;
};
