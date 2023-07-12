import { DB } from "../../lib/db";
import nc from "next-connect";

// NOTE: fetch data from DB server directly, this is not ideal!
const handler = nc().get((req, res) => {
  // faking the api call for now

  res.json({});
});

export default handler;
