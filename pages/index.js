import Head from "next/head";
import Link from "next/link";
import AppLayout from "../components/AppLayout";

export default function Home() {
  return (
    <>
      <AppLayout>
        <h1>
          <Link href="/posts">
            <a>DEVTER</a>
          </Link>
        </h1>
      </AppLayout>
    </>
  );
}
