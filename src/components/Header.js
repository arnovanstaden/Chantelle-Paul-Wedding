import React from 'react'
import { Helmet } from "react-helmet"


const Header = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Chantelle &amp; Paul | Wedding</title>
                <meta name="robots" content="noindex, nofollow"></meta>
                <meta description="Chantelle &amp; Paul are getting married and you are invited to witness &amp; celebrate with them on this special day." />
                <link rel="canonical" href='https://candp.netlify.app' />

                <meta name="author" content="Webdacity" />
                <meta name="theme-color" content="#fffff" />

                <meta property="og:site_name" content="Chantelle &amp; Paul | Wedding" />
                <meta property="og:title" content="Chantelle &amp; Paul | Wedding" />
                <meta property="og:description" content="Chantelle &amp; Paul are getting married and you are invited to witness &amp; celebrate with them on this special day." />
                <meta property="og:type" content="Website" />
                <meta property="og:url" content='https://candp.netlify.app' />
                <meta property="og:image" content="https://candp.netlify.app/social.jpg" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:image:alt" content="Logo" />
            </Helmet>
        </div>
    )
}

export default Header
