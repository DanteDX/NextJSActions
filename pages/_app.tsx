import '../styles/globals.css'

function App({ Component, pageProps }) {
  console.log('Both Server & Client side rendering');
  return <Component {...pageProps} />
}

export default App;
