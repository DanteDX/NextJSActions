import "../styles/global.css";

export default function App({Component,pageProps}){
	console.log('Hello From App.tsx');
	return <Component {...pageProps} />
};
