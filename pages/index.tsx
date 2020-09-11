import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Example title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Example page</h1>
      <p>
        {" "}
        This is the starting point for <code>localhost:3000/</code>, to start
        the cases. Add a new module in <code>/src/[module]</code> to start.
      </p>
    </div>
  );
}
