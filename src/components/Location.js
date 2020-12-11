import React from 'react';


// Styles
import styles from "../styles/components/location.module.scss";

// Images
const locationIcons = require.context('../assets/images/icons', true, /\.svg$/)

const Location = () => {

    // Helpers
    const getIcon = (name) => {
        let image = locationIcons.keys().find((image) => {
            return image.includes(name)
        })
        return locationIcons(image)
    }

    return (
        <div className={styles.grid}>
            <div className={styles.event}>
                <img src={getIcon("ceremony")} />
                <h3>The Ceremony</h3>
                <h6>11:00 - 12:00</h6>
                <div className={styles.divider}></div>
                <p>
                    <span>Graceland Vineyards</span>
                    Stellenrust Road, Stellenbosch
                </p>
                <a href="https://goo.gl/maps/L4Ac7Uog86d27aLN6" target="blank" className={styles.button}>
                    Directions
                </a>
            </div>
            <div className={styles.event}>
                <img src={getIcon("lunch")} />
                <h3>The Lunch</h3>
                <h6>13:00 - 15:30</h6>
                <div className={styles.divider}></div>
                <p>
                    <span>La Pineta Restaurant R44</span>
                    Stellenbosch NU, Stellenbosch
                </p>
                <a href="https://g.page/LaPineta-Restaurant?share" target="blank" className={styles.button}>
                    Directions
                </a>
            </div>
            <div className={styles.event}>
                <img src={getIcon("party")} />
                <h3>The Bonfire Evening</h3>
                <h6>15:30 - Late</h6>
                <div className={styles.divider}></div>
                <p>
                    <span>Graceland Vineyards</span>
                    Stellenrust Road, Stellenbosch
                </p>
                <a href="https://goo.gl/maps/eKiTR527JtxAYCiA8" target="blank" className={styles.button}>
                    Directions
                </a>
            </div>
            <div className={styles.map}>
                <iframe src="https://snazzymaps.com/embed/279256" title="map"></iframe>
            </div>
        </div>
    )
}

export default Location
