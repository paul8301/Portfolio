import React from 'react';
import { DiFirebase, DiPython} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of models in AI. Currently working on GANS for doing advance things using the power of AI and full stack for implementing the models. I'm also practising DSA alongside.</SectionText>
  <List>
    <ListItem>
        <DiPython size="3rem" />
          <ListContainer>
            <ListTitle>Deep learning</ListTitle>
            <ListParagraph>
              Experience with <br />
              different neural networks
            </ListParagraph>
          </ListContainer>
    </ListItem> 
    <ListItem>
        <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Full Stack</ListTitle>
            <ListParagraph>
              Experience with <br />
              MERN stack
            </ListParagraph>
          </ListContainer>
    </ListItem>
    <ListItem>
        <DiPython size="3rem" />
          <ListContainer>
            <ListTitle>DSA</ListTitle>
            <ListParagraph>
              Experience with <br />
              numerous DSA problems
            </ListParagraph>
          </ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Technologies;
