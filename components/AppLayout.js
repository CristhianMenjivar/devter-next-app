import Head from "next/head";
import { useRouter } from "next/router";

const AppLayout = ({
  children,
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
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.content} />
        <link rel="icon" href={seo.icon} />
      </Head>

      <header>header</header>
      <main className="main">
        {/* button go back next */}

        {showButtonBack && (
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <button className="btn btn-primary" onClick={handlerBack}>
                  <a>Go Back</a>
                </button>
              </div>
            </div>
          </div>
        )}
        {children}
      </main>
      <style jsx>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto;
        }
        .main {
          margin: 0 auto;
          padding: 20px 20px;
        }
      `}</style>
    </>
  );
};

export default AppLayout;
