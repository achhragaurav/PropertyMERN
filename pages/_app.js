import { store } from '../store/store'
import { Provider } from 'react-redux'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
}

export default MyApp
