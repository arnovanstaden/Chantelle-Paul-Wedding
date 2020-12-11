import React from 'react';

// Styles
import styles from "../styles/components/details-grid.module.scss";

// Data
import details from "../assets/data/detailsGrid.json";
const detailsIcons = require.context('../assets/images/icons', true, /\.svg$/)


const DetailsGrid = () => {

    // Helpers
    const getIcon = (name) => {
        let image = detailsIcons.keys().find((image) => {
            return image.includes(name)
        })
        return detailsIcons(image)
    }

    return (
        <div className={styles.grid}>
            {details.map((item, index) => (
                <div className={styles.block} key={index}>
                    <img src={getIcon(item.name)} alt="" />
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    {item.link ? <a href={item.link} target="blank">Online Link</a> : null}
                </div>
            ))}
        </div>
    )
}

export default DetailsGrid
