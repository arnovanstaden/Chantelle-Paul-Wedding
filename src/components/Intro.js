import React from 'react';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import styles from "../styles/components/intro.module.scss";

const Intro = () => {
    const data = useStaticQuery(graphql`
    query{
        file(relativePath: { eq: "couple/intro.jpg" }) {
        childImageSharp {
            fluid( maxWidth: 800, quality: 100) {
                aspectRatio
                base64
                sizes
                src
                srcSet
                srcWebp
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluid_withWebp
            }
        }
        }
    }
`)

    const imageStyles = {
        width: '100%',
    }

    return (
        <div className={styles.intro}>
            <div className={styles.text}>
                <h2>Chantelle Janse van Vuuren</h2>
                <p>She was a pretty and tall English soutie,
                he was a handsome short Afrikaans outjie.
                He went down on his knees, she said yes,
                the date is set, she has a dress. </p>
            </div>
            <div className={styles.image}>
                <Img fluid={data.file.childImageSharp.fluid} style={imageStyles}></Img>
            </div>
            <div className={styles.text}>
                <h2>Paul van Staden</h2>
                <p>The single life is getting ditched,
                cause these two are getting hitched.
                Join us for a beautiful day to remember,
                next week on the 16th of December.
                </p>
            </div>
        </div>
    )
}

export default Intro
