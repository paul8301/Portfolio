import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Seeking an entry-level opportunity with an esteemed organization based on AI where I can utilize my skills and enhance learning in the field of work.
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/paulpvarghese/"}>Learn More</Button>
    </LeftSection>
  </Section>

);

export default Hero;