import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Fixtures`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const fetchFixtures = async () => {
  const res = await axios.get(URL, config);
  return res.data.records;
};
