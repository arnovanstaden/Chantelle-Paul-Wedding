import React from "react";
import { graphlql } from "gatsby";

// Components
import Section from "../components/Section";
import Landing from "../components/Landing";
import InfoBlock from "../components/InfoBlock";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Location from "../components/Location";

// Styles
import "../styles/global.scss";
import styles from "../styles/pages/index.module.scss";


// Data
import sectionHeadings from "../assets/data/sections.json";

export default function Home({ data }) {
  return (
    <div className={styles.page}>
      <Header />

      <Landing />

      <Section
        {...sectionHeadings.intro}
        sectionName="intro"
        background={data.introBackground.childImageSharp.fluid}
      >
        <Intro />
      </Section>

      {/* QUOte */}

      <Section
        {...sectionHeadings.details}
        sectionName="details"
      >
      </Section>

      {/* RSVP */}

      <Section
        {...sectionHeadings.when}
        sectionName="when"
      >

      </Section>

      <Section
        {...sectionHeadings.transport}
        sectionName="transport"
        green={true}
      >
        <div className={styles.transport}>
          <p> <span>We encourage you to park at Graceland Vineyard.</span> </p>

          <p>After the ceremony, a shuttle will be provided for transport to and from La Pineta and Graceland Cottage.</p>

          <p>You are more than welcome to drive your own vehicle, or uber.  The restaurant is a 2km drive from Graceland Vineyards. You can not walk. </p>

          <p>For those who decide to drive their own vehicle to and from Graceland and La Pineta, you will need to park on the road at Graceland Cottage, or park at Graceland Vineyards where the ceremony took place. It is a short walk up to Graceland Cottage for the Cake &amp; Bonfire festivities.</p>

          <p>There will be allocated parking signs. </p>
        </div>
      </Section>

      <Section
        {...sectionHeadings.where}
        sectionName="where"
      >
      </Section>

      <Section
        {...sectionHeadings.gifts}
        sectionName="gifts"
        green={true}
      >
      </Section>

    </div>
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