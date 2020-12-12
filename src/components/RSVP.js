import React from 'react';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import styles from "../styles/components/RSVP.module.scss";


const RSVP = () => {

    return (
        <div className={styles.rsvp}>
            <form name="rsvp" method="post" data-netlify="true" className={styles.form} action="/success">
                <input type="hidden" name="form-name" value="rsvp" />
                <div className={styles.row}>
                    <input type="text" name="name" required placeholder="Name" />
                    <input type="email" name="email" required placeholder="Email" />
                </div>
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit" className="button"> Send Message </button>
            </form>
        </div>
    )
}

export default RSVP
