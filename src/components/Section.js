import React from 'react';
import Img from "gatsby-image";
import classNames from "classnames"

// Styles
import styles from "../styles/components/section.module.scss";
const sectionImages = require.context('../assets/images/sections', true, /\.svg$/)


const Section = (props) => {

    const sectionClasses = classNames(
        styles.section,
        props.green ? styles.green : ""
    )

    // Helpers
    const getImage = (name) => {
        let image = sectionImages.keys().find((image) => {
            return image.includes(name)
        })
        return sectionImages(image)
    }

    const imageStyles = {
        width: '100%',
    }

    // Components
    const SectionHeading = () => {
        return (
            <div className={styles.heading}>
                <img className={styles.image} src={getImage(props.sectionName)} />
                <h2>{props.heading}</h2>
                {props.text ? <p>{props.text}</p> : null}
            </div>
        )
    }

    const Background = () => {
        if (props.background) {
            return (
                <div className={styles.background}>
                    <Img fluid={props.background} style={imageStyles}></Img>
                </div>
            )
        }
        return null
    }

    return (
        <div className={sectionClasses}>
            <div className="container">
                <Background />
                <SectionHeading />
                {props.children}
            </div>
        </div>
    )
}

export default Section
