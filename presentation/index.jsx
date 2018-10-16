import React from 'react';
import { injectGlobal } from 'styled-components';

import { BlockQuote, Code, Deck, List, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';

import Heading from './Heading';
import ListItem from './ListItem';
import Quote from './Quote';
import Cite from './Cite';
import Highlighted from './Highlighted';

import { colors, fonts, sizes } from './const';

// eslint-disable-next-line
injectGlobal`
  a {
    color: ${colors.tertiary};
  }
`;

const theme = createTheme(colors, fonts);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={300}
        theme={theme}
        progress="bar"
        controls={false}
        contentHeight="90vh"
        contentWidth="80vw"
      >
        <Slide>
          <Heading size={1} lineHeight={1} textSize="10vmin" textColor="secondary">
            👊 Knuckle
          </Heading>
        </Slide>

        <Slide>
          <List>
            <ListItem>Guillaume AMAT</ListItem>
            <ListItem>Ingénieur Front-End Sénior</ListItem>
            <ListItem>ekino.</ListItem>
          </List>
        </Slide>

        <Slide>
          <BlockQuote>
            <Quote textColor="secondary">Don&apos;t duplicate code</Quote>
          </BlockQuote>
        </Slide>

        <Slide>
          <BlockQuote>
            <Quote textColor="secondary">
              Don&apos;t duplicate <Highlighted>config</Highlighted>
              <Cite>Future you</Cite>
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={2}>How?</Heading>
        </Slide>

        <Slide>
          <Text textSize={sizes.text}>
            <Highlighted>Auto-generation</Highlighted> of the configuration
          </Text>
        </Slide>

        <Slide>
          <Text textSize={sizes.text}>
            <Highlighted>Auto-installation</Highlighted> of the dependencies
          </Text>
        </Slide>

        <Slide>
          <Text textSize={sizes.text}>
            <Highlighted>Auto-update</Highlighted> of both configurations and dependencies
          </Text>
        </Slide>

        <Slide>
          <Code textSize={sizes.text}>npm install --save-dev knuckle</Code>
        </Slide>

        <Slide>
          <Code textSize={sizes.text}>npx knuckle add eslint</Code>
        </Slide>

        <Slide>
          <Text textSize={sizes.text}>
            <Code textSize={sizes.text}>npx knuckle up</Code> 🎉
          </Text>
        </Slide>

        <Slide>
          <Heading size={2}>Dependency aware generation</Heading>
        </Slide>

        <Slide>
          <Code textSize={sizes.text}>npx knuckle add prettier</Code>
        </Slide>

        <Slide>
          <Code textSize={sizes.text}>npx knuckle up</Code>
        </Slide>

        <Slide>
          <Heading size={2}>Configuration overwrite</Heading>
        </Slide>

        <Slide>
          <Code textSize={sizes.text}>mkdir .knuckle</Code>
        </Slide>

        <Slide>
          <Code textSize={sizes.text}>
            {'echo \'{ "printWidth": 120 }\' > .knuckle/.prettierrc'}
          </Code>
        </Slide>

        <Slide>
          <Code textSize={sizes.text}>npx knuckle up --no-install</Code>
        </Slide>

        <Slide>
          <Heading size={2}>Ejection?</Heading>
        </Slide>

        <Slide>
          <Code textSize={sizes.text}>npm uninstall knuckle && rm -rf ./.knuckle*</Code>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Currently supported tools
          </Heading>
          <List>
            <ListItem>Prettier</ListItem>
            <ListItem>ESLint</ListItem>
            <ListItem>TSLint</ListItem>
            <ListItem>Commitlint</ListItem>
            <ListItem>Lint-staged</ListItem>
            <ListItem>Husky</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            More to come
          </Heading>
          <List>
            <ListItem>Stylelint</ListItem>
            <ListItem>Jest</ListItem>
            <ListItem>PWMetrics</ListItem>
            <ListItem>&lt;Write your wishes here&gt;</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textAlign="left">
            Next features
          </Heading>
          <List>
            <ListItem>
              Add the <Code textSize={sizes.text}>eject</Code> command
            </ListItem>
            <ListItem>
              Add a wizard to the <Code textSize={sizes.text}>add</Code> command
            </ListItem>
            <ListItem>&lt;Write your wishes here&gt;</ListItem>
          </List>
        </Slide>

        <Slide>
          <Text textSize={sizes.text} margin={sizes.text}>
            Thanks 👋
          </Text>
          <Text textSize={sizes.text}>
            <a href="https://github.com/GuillaumeAmat/knuckle">
              https://github.com/GuillaumeAmat/knuckle
            </a>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
