import React from 'react';
import styles from "../styles/components/timeline.module.scss";

import icon from "../assets/images/icons/timeline.svg"

const Timeline = () => {

    return (
        <div className={styles.timeline}>
            <div className={`${styles.grid} ${styles.left}`}>
                <div className={styles.text}>
                    <h3>Welcome Tea, Coffee and Canapés</h3>
                    <h5>10:00 - 10:45</h5>
                    <p>Enjoy the spectacular views and help yourself to tea, coffee, fresh juices, water and canapés.</p>
                </div>
                <div className={styles.line}>
                    <div></div>
                    <img src={icon} alt="" />
                </div>
            </div>
            <div className={`${styles.grid} ${styles.right}`}>
                <div className={styles.line}>
                    <div></div>
                    <img src={icon} alt="" />
                </div>
                <div className={styles.text}>
                    <h3>Take your seat for the Wedding Ceremony</h3>
                    <h5>10:45 - 11:00</h5>
                    <p>Feel free to bring your choice of drink, a little nibble and find your seat. Parasols are provided for your enjoyment.</p>
                </div>
            </div>
            <div className={`${styles.grid} ${styles.left}`}>
                <div className={styles.text}>
                    <h3>The Wedding Ceremony </h3>
                    <h5>11:00 - 12:00</h5>
                    <p>Celebrating Mr &amp; Mrs ….</p>
                </div>
                <div className={styles.line}>
                    <img src={icon} alt="" />
                </div>
            </div>
            <div className={`${styles.grid} ${styles.right}`}>
                <div className={styles.line}>
                    <img src={icon} alt="" />
                </div>
                <div className={styles.text}>
                    <h3>Celebration Refreshments and Canapés</h3>
                    <h5>12:00 - 13:00</h5>
                    <p>Bridal party and Family photos will commence. Refreshing drinks and Canapés provided. </p>
                </div>
            </div>
            <div className={`${styles.grid} ${styles.left}`}>
                <div className={styles.text}>
                    <h3>Lunch at La Pineta Restaurant </h3>
                    <h5>13:00 - 15:30</h5>
                    <p>Wide variety of food options, catering for all food preferences. Wine and Beer is provided. Any hard liquor is ordered on own account at the bar provided. </p>
                </div>
                <div className={styles.line}>
                    <div></div>
                    <img src={icon} alt="" />
                </div>
            </div>
            <div className={`${styles.grid} ${styles.right}`}>
                <div className={styles.line}>
                    <div></div>
                    <img src={icon} alt="" />
                </div>
                <div className={styles.text}>
                    <h3> Late Cake and Bonfire Evening at Graceland Cottage</h3>
                    <h5>15:30 - Late</h5>
                    <p>The day concludes with a braai dance and bonfire. All meals will be covered, as well as beers, wine, champagne and soft drinks. For those joining for the evening bonfire, please bring along your drink of choice, should the drinks we provide runout. We suggest bringing along your cooler boxes and ice.</p>
                </div>
            </div>
        </div>
    )
}

export default Timeline
