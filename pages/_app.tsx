import { Toaster, toast } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

import { Auth0Provider } from '@auth0/auth0-react';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps<{}>) {
  const queryClient = new QueryClient();
  const router = useRouter();

  useEffect(() => {
    const errorDescription = router.query.error_description as string;

    if (errorDescription && errorDescription.includes('Please verify your email')) {
      toast.error('Please verify your email address before logging in through https://jiggy.ai again', { id: 'emailError' });
    }
  }, [router.query]);

  return (
    <Auth0Provider
      domain="auth.jiggy.ai"
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
