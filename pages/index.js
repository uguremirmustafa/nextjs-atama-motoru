/** @format */

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Teacher from '../components/Teacher';
import styles from '../styles/Home.module.css';
import { tableSchools, minifyRecords } from './api/utils/AirtableSchools';
import SelectSchool from '../components/SelectSchool';
export default function Home({ schools }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* {teachers.map((teacher) => (
        <Teacher teacher={teacher} key={teacher.id} />
      ))} */}
      <SelectSchool schools={schools} num={1} />
      <SelectSchool schools={schools} num={2} />
      <SelectSchool schools={schools} num={3} />
    </div>
  );
}
export async function getServerSideProps(context) {
  try {
    const schools = await tableSchools.select({}).firstPage();
    return {
      props: {
        schools: minifyRecords(schools),
      },
    };
  } catch (error) {
    return {
      props: {
        error: 'something went wrong',
      },
    };
  }
}
