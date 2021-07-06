export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}`;
export const queryURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/gallery`;

export const config = {
  headers:{
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  },
};