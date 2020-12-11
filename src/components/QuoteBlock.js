import React from 'react';

// Styles
import styles from "../styles/components/quote-block.module.scss"

import quoteIcon from "../assets/images/icons/quote.svg"

const QuoteBlock = () => {
    return (
        <div className={styles.quote}>
            <div className="container">
                <div className={styles.block}>
                    <img src={quoteIcon} alt="" />
                    <h1>If I Had A Flower For Every Time I Thought Of You...
                    I Could Walk Through My Garden Forever.</h1>
                    <p>- Alfred Tennyson -</p>
                </div>
            </div>
        </div>
    )
}

export default QuoteBlock
