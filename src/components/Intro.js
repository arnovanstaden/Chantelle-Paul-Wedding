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
                <h2>Chantelle Jansen van Vuuren</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
            </div>
            <div className={styles.image}>
                <Img fluid={data.file.childImageSharp.fluid} style={imageStyles}></Img>
            </div>
            <div className={styles.text}>
                <h2>Paul van Staden</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
            </div>
        </div>
    )
}

export default Intro
