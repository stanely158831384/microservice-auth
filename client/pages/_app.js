import '../styles/globals.css'
import Header from '../components/test/header'
import Background from '../components/test/background'
import buildClient from '../api/build-client'

const MyApp = ({ Component, pageProps, currentUser }) => {

  return (

    <div className='bg-slate-200	overflow-x-hidden overflow-y-hidden'>
      {/* <Background/> */}
      <Header currentUser={currentUser} />
      <div>
        <Component {...pageProps} currentUser={currentUser} />
      </div>
    </div>
  )
}

MyApp.getInitialProps = async (context) => {
  const client = buildClient(context.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (context.Component.getInitialProps) {
    pageProps = await context.Component.getInitialProps(context.ctx, client, data.currentUser);
  }

  return {
    pageProps,
    ...data
  };
}

export default MyApp;
