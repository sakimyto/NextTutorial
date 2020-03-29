import { NextPage } from 'next'

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => <h1> Hello World! - useragent : {userAgent}</h1>

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return { userAgent }
}
export default Home


// import { useAmp } from 'next/amp';

// export const config = { amp: 'hybrid' };

// export default function Index(props) {
//   const isAmp = useAmp();
//   return <p>Welcome to the {isAmp ? 'AMP' : 'normal'} version of the Index page!!</p>;
// }
