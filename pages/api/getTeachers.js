/** @format */

import { tableTeachers, getMinifiedRecord, minifyRecords } from './utils/AirtableTeachers';

export default async function (req, res) {
  try {
    const teachers = await tableTeachers.select({}).firstPage();

    const minifiedRecords = await minifyRecords(teachers);
    res.statusCode = 200;
    res.json(minifiedRecords);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.json({ msg: 'something went wrong' });
  }
}
