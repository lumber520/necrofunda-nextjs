import '../styles/globals.css'
import Layout from "../components/layout";
import React from "react";
import { useRouter } from 'next/router'
import VoxNewsSiteBanner from "../components/voxNewsSiteBanner";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <Layout className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    {(router.pathname !== '/voxnews') ?
        <VoxNewsSiteBanner/>  : ''}
  <Component {...pageProps} />
  </Layout>
}

export default MyApp
