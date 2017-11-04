import React from "react";
import styled from "styled-components";
import ReactRevealText from "react-reveal-text";
import DownArrow from "../components/DownArrow";

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to top, #e14fad 0%, #f9d423 100%);
  text-align: center;
  overflow: auto;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 100vh;
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoSection = styled.div`
  max-width: 400px;
  height: 100vh;
  padding: 24px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: left;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 6px;

  @media screen and (min-width: 600px) {
    font-size: 48px;
  }
`;

const SubTitle = styled.div`
  font-size: 16px;
  letter-spacing: 2px;
`;

const Info = styled.p`
  font-size: 24px;
`;

export default class extends React.Component {
  state = { showTitle: false };
  componentDidMount() {
    setTimeout(() => this.setState({ showTitle: true }), 2000);
  }
  render() {
    const { showTitle } = this.state;
    return (
      <Layout>
        <HeroSection>
          <Title>
            <ReactRevealText show={showTitle}>
              A Product Hunt Global Hackathon Project
            </ReactRevealText>
          </Title>
          <SubTitle>
            <ReactRevealText show={showTitle} delayMin={500} delayMax={1500}>
              by The Wolves
            </ReactRevealText>
          </SubTitle>
          <DownArrow />
        </HeroSection>

        <InfoSection>
          <Info>
            A cryptocurrency project by 4 passionate product makers.
          </Info>
          <Info>
            We plan to build a translation platform on top of the Ethereum blockchain.
          </Info>
          <Info>
            On top of this, we want to leverage machine learning to streamline translations for a specific medium.
          </Info>
          <DownArrow />
        </InfoSection>

        <InfoSection>
          <Info>
            The Wolves are Adrian, Elton, Joshua, and Kendrick.
          </Info>
          <Info>
            We are located in Australia, Canada, and Hong Kong.
          </Info>
          <Info>
            Combined, we have over 1500 GitHub stars, worked at or started YC and Techstars companies, and have been enthusaists in cryptocurrency and machine learning for years.
          </Info>
          <h1>▣</h1>
        </InfoSection>
      </Layout>
    );
  }
}
