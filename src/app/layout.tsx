import '@/styles/globals.css';
import type { Metadata } from 'next';
//
import ProviderComponent from '../lib/Provider';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import { ProviderSideBare } from '@/context/sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { OpenSans, iranYekan, roboto } from '@/styles/fonts';

//METADATA
export const metadata: Metadata = {
    title: 'فروشگاه اینترنتی',
    description: 'محصولات اینترنتی',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${iranYekan.variable} ${OpenSans.variable} ${roboto.variable}`}
                style={{ transition: 'all 0.25s linear' }}
            >
                {/* PROVIDER__STORE__REDUX__START */}
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <ProviderComponent>
                        <ProviderSideBare>
                            {/* HEADER
              <Header /> */}
                            {/* <div className="@container w-full"> */}
                            {children}
                            {/* </div> */}
                            {/* FOOTER
              <Footer /> */}
                        </ProviderSideBare>
                    </ProviderComponent>
                    {/* PROVIDER__STORE__REDUX__END */}
                </ThemeProvider>
            </body>
        </html>
    );
}
