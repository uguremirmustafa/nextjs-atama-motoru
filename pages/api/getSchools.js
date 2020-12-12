/** @format */

import { tableSchools, getMinifiedRecord, minifyRecords } from './utils/AirtableSchools';

export default async function (req, res) {
  try {
    const schools = await tableSchools.select({}).firstPage();

    const minifiedRecords = await minifyRecords(schools);
    res.statusCode = 200;
    res.json(minifiedRecords);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.json({ msg: 'something went wrong' });
  }
}
