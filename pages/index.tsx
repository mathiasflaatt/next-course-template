import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Libero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Example page</h1>
      <p>
        {" "}
        This is the starting point for '/', to start the cases. Add a new module
        in <code>/src/[module]</code>
      </p>
    </div>
  );
}
