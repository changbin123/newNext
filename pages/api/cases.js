import { DB } from "../../lib/db";
import nc from "next-connect";
import data from "../../data/stub/cases";

// NOTE: fetch data from DB server directly, this is not ideal!
const handler = nc().get((req, res) => {
  // faking the api call for now
  res.json(data);
});

export default handler;
