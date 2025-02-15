import localFont from 'next/font/local'

export const LINESeedJP = localFont({
  src: [
    {
      path: './LINESeedJP_OTF_Th.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './LINESeedJP_OTF_Rg.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './LINESeedJP_OTF_Bd.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './LINESeedJP_OTF_Eb.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})
