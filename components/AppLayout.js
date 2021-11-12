import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import BackIcon from "../assets/back.png";

const AppLayout = ({
  children,
  titlePage = "",
  seo = {
    title: "Devter",
    content: "Bienvenido a devter app",
    icon: "https://i-net.pe/wp-content/uploads/2017/03/cropped-favicon.png",
  },
  showButtonBack = false,
}) => {
  const router = useRouter();

  const handlerBack = () => router.back();

  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.content} />
        <link rel="icon" href={seo.icon} />
      </Head>

      <header className="bg-gray-50 h-20 flex items-center justify-center shadow-md">
        <div className="container px-5 lg:px-0">
          {showButtonBack ? (
            <div className="text-white flex items-center">
              <button
                className="h-10 w-10 hover:bg-gray-100 flex items-center justify-center rounded-full"
                onClick={handlerBack}
              >
                <Image src={BackIcon} width={25} height={25} alt="back" />
              </button>
              <p className="text-blue-700 font-bold text-lg uppercase ml-4">
                {titlePage}
              </p>
            </div>
          ) : (
            <p className="text-blue-700 font-bold text-lg uppercase">
              {titlePage}
            </p>
          )}
        </div>
      </header>
      <main className="flex-1 overflow-scroll flex flex-col items-center">
        <div className="container">{children}</div>
      </main>
      {/* footer tailwind Design */}
      <footer className="bg-gray-100 p-5 border-2">
        <div className="container mx-auto flex flex-col items-center">
          <a
            href="mailto:cristianmenjivar95@gmail.com
              ?subject=Devter-Next-App
              &body=Hola, necesito información
              "
            className="text-blue-900 hover:text-blue-500"
          >
            <p className="text-center text-lg">
              &copy; {new Date().getFullYear()} Devter
            </p>
          </a>
        </div>
      </footer>

      <style jsx>
        {`
          header {
            margin-bottom: 2.5px;
          }

          footer {
            margin-top: 2.5px;
          }
        `}
      </style>
    </div>
  );
};

export default AppLayout;
