import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/google-favicon.png" />
      </Head>

      <Header />

      <Hero />

      <footer className="mt-44 grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm md:text-lg text-gray-500">
        <div className="p-4">
          <p>India</p>
        </div>
        <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 p-4">
          <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
            <p>About</p>
            <p>Advertising</p>
            <p>Business</p>
            <p>How Search works</p>
          </div>
          <div className="flex justify-center space-x-8 md:ml-auto">
            <p>Privacy</p>
            <p>Teams</p>
            <p>Settings</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
