import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

import { Auth0Provider } from '@auth0/auth0-react';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps<{}>) {
  const queryClient = new QueryClient();

  return (
    <Auth0Provider
      domain="auth.gpt-gateway.com"
      clientId="xJSTUXRLAyhp4gblxcUwgV6fLFuKzZRs"
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin: undefined,
      }}
      //redirectUri={typeof window !== 'undefined' ? window.location.origin: undefined}
    >
      <div className={inter.className}>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>
    </Auth0Provider>
  );
}

export default appWithTranslation(App);
