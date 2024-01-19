import { Inter, Montserrat, Lusitana } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'] });

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
