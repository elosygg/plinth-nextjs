import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
// COMPONENTS IMPORTATION
import Navbar from "../component/layout/navbar/navbar";
// STYLED COMPONENTS IMPORTATION
import BlackTitle from "../component/layout/title/BlackTitle";
import GlobalContainer from "../styles/styled-components/container/GlobalContainer";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
`;

const Item = styled.div`
  margin: 1rem;
`;

const GreySmallText = styled.p`
  text-align: ${props => props.textAlign};
  color: grey;
  margin-bottom: 5rem;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Plinth</title>
      </Head>

      <Navbar />
      <GlobalContainer>
        <AboutContainer>
          <Item>
            <Image src="/home-g.png" alt="" width={50} height={50} />
          </Item>
          <Item>
            <BlackTitle>A propos de Plinth</BlackTitle>
          </Item>
          <Item>
            <GreySmallText textAlign="center">
              Plinth est un outil numérique de partage de ressources. Il est fondé avec lidée que la plupart des matériaux et objets dont les créateurs et acteurs du monde culturel ont besoin collectivement existent déjà.
            </GreySmallText>
          </Item>
        </AboutContainer>
      </GlobalContainer>
    </>
  );
};

export default Home;