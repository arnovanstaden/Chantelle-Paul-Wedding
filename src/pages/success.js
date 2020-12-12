import React from 'react';
import { Link } from "gatsby";
import Img from "gatsby-image";
import Header from "../components/Header";


// Styles
import "../styles/global.scss";
import styles from "../styles/pages/success.module.scss";

// Fonts
import "typeface-alice";
import "typeface-poppins";

export default function success({ data }) {

    const imageStyles = {
        width: '100%',
    }

    return (
        <>
            <Header />
            <div className={styles.success}>
                <div className={styles.background}>
                    <Img fluid={data.introBackground.childImageSharp.fluid} style={imageStyles}></Img>
                </div>
                <div className="container">
                    <div className={styles.text}>
                        <h1>Thank You</h1>
                        <p>We look forward to seeing you soon!</p>
                        <Link to="/">Go Back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export const query = graphql`
query {
  introBackground: file(relativePath: { eq: "sections/intro.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          aspectRatio
              base64
              sizes
              src
              srcSet
              srcWebp
          }
    }
  } 
}`