import React from 'react';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

// Styles
import styles from "../styles/components/landing.module.scss"

const Landing = () => {
    const data = useStaticQuery(graphql`
        query{
            file(relativePath: { eq: "sections/landing.jpg" }) {
            childImageSharp {
                fluid( maxWidth: 1920, quality: 100) {
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
        height: '100%',
        opacity: "50%"
    }

    return (
        <div className={styles.landing}>
            <div className={styles.image}>
                <Img fluid={data.file.childImageSharp.fluid} style={imageStyles}></Img>
            </div>
            <div className={styles.text}>
                <p className={styles.intro}>We are getting married</p>
                <h1>Chantelle &amp; Paul</h1>
                <div className={styles.saveDate}>
                    <span></span>
                    <p>Save the date</p>
                    <span></span>
                </div>
                <p className={styles.date}>16 December 2020</p>
            </div>
        </div>
    )
}

export default Landing
