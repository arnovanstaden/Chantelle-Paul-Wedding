import React from 'react'
import { Helmet } from "react-helmet"


const Header = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Chantelle &amp; Paul | Wedding</title>
                <meta name="robots" content="noindex, nofollow"></meta>
            </Helmet>
        </div>
    )
}

export default Header
