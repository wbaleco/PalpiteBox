import React from 'react'
import '../css/style.css'
import Link from 'next/link'

import Header from '../components/header'
import Footer from '../components/footer'

const MyApp = ({ Component, pageProps }) => {

    return (

        <div>
           <Header/>
            <Component {...pageProps} />
            <Footer/>
        </div>

    )
}

export default MyApp


