import "../styles/globals.css";
import Header from "../components/test/header";
import Footer from "../components/test/footer";
import Background from "../components/test/background";
import buildClient from "../api/build-client";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const MyApp = ({ Component, pageProps, currentUser }) => {
  return (
    <div className="bg-slate-200 ">
      {/* <Background/> */}
      <RecoilRoot>
        <Header currentUser={currentUser} />
        <div>
          <Component {...pageProps} currentUser={currentUser} />
        </div>
        <Footer />
      </RecoilRoot>
    </div>
  );
};

MyApp.getInitialProps = async (context) => {
  const client = buildClient(context.ctx);
  const { data } = await client.get("/api/users/currentuser");
  let pageProps = {};
  if (context.Component.getInitialProps) {
    pageProps = await context.Component.getInitialProps(
      context.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default MyApp;
