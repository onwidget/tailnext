import '~/styles/base.css'

import type { AppProps } from 'next/app'

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default CustomApp
