import Link from "next/link";
import AppLayout from "../components/AppLayout";

export default function Home() {
  return (
    <>
      <AppLayout titlePage="devter app">
        {/* tailwind desing dashboard app */}
        <div className="flex flex-col items-center justify-center h-full mt-10">
          <div className="bg-gray-200 rounded-lg p-8">
            <h1 className="text-2xl font-bold mb-4">
              <span className="text-gray-700">devter</span>
              <span className="text-gray-500">app</span>
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, quisquam.
            </p>
            <div className="flex justify-center mt-4">
              <Link href="/posts">
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Show post
                </a>
              </Link>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
