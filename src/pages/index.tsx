import type { NextPage } from "next";
import Head from "next/head";
import Snowfall from "react-snowfall";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
	
	return (
		<>
			<Head>
				<title>Tracker</title>
				<meta name="description" content="santa tracker" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div style={{ height: 10000, width: 10000, background: '#282c34', position: 'relative', }}>
    			<Snowfall

				snowflakeCount={1000}
				 />
				<h1>hey</h1>
  			</div>,

		</>
	);
};

export default Home;


