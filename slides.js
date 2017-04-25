import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit, Link,
  Heading, Image, Layout, ListItem, List, Quote, Spectacle, Slide, Text
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import theme from './theme';
import REPL from './runtime/repl';
const fs = require('fs');
import Prism from 'prismjs';
window.Prism = Prism;
require('./runtime/prism-ait.js');

const BigHeading = props => <Heading className="heading" fit caps size={1} {...props}>{props.children}</Heading>
const SmallHeading = props => <Heading fill size={2} {...props}>{props.children}</Heading>
const AppearingBlock = props => <Appear {...props}><div>{props.children}</div></Appear>

class Slides extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress="none" controls={false}>
          <Slide>
            <BigHeading>Rediscovering</BigHeading>
            <BigHeading>Concatenative Languages</BigHeading>
            <BigHeading>With Creative Programming</BigHeading>
            <SmallHeading>Stian Veum Møllersen</SmallHeading>
            <SmallHeading>@mollerse</SmallHeading>
          </Slide>

          <Slide className="text-slide">
            <Heading className="colored" fontSize="3em" caps size={3}>Concatenative Programming</Heading>
            <Text>
              What even are you?
            </Text>
          </Slide>

          <Slide className="text-slide">
            <Text>A family of languages, originating with FORTH in the early 60s.</Text>
          </Slide>

          <Slide className="text-slide">
            <Text>The family gets its name from the way programs are constructed</Text>
            <Text>&nbsp;</Text>
            <Appear>
              <Text>&mdash; by concatenating words together.</Text>
            </Appear>
          </Slide>

          <Slide>
            <Heading size={3} textAlign="left">FORTH:</Heading>
            <div className="code-block">
              <Code>: gcd ( a b -- n )</Code>
              <Code className="indented">begin dup while tuck mod repeat drop ;</Code>
              <Code>&nbsp;</Code>
              <Appear>
              <Code>21 14 gcd</Code>
              </Appear>
            </div>
          </Slide>

          <Slide className="repl-slide">
            <REPL mode="stack" code={`# : gcd ( a b -- n )
#   begin dup while tuck mod repeat drop ;

21 14`} modules={[fs.readFileSync('./code/forth.ait', 'utf8')]}/>
          </Slide>

          <Slide className="text-slide">
            <BlockQuote>
              <Quote>A language that does not affect the way you think about programming, is not worth knowing.</Quote>
              <Cite>Alan Perlis</Cite>
            </BlockQuote>
          </Slide>

          <Slide className="text-slide">
            <Text>Why FORTH?</Text>
          </Slide>

          <Slide className="text-slide">
            <Text>FORTH is currently attached to a comet hurling through space.</Text>
            <Text>&nbsp;</Text>
            <Appear>
              <Text>It must obviously be good for something.</Text>
            </Appear>
          </Slide>

          <Slide>
            <Heading size={3} textAlign="left">FORTH:</Heading>
            <div className="code-block">
              <Code>: gcd ( a b -- n )</Code>
              <Code className="indented">begin dup while tuck mod repeat drop ;</Code>
            </div>
          </Slide>

          <Slide className="text-slide">
            <Text>The simple rules and distinct lack of syntax makes it a cheap runtime to implement.</Text>
          </Slide>

          <Slide className="text-slide">
            <Text>These characteristics are also very desireable for DSLs.</Text>
            <Text>&nbsp;</Text>
            <Appear>
              <Text>(Ever heard of PostScript?)</Text>
            </Appear>
          </Slide>

          <Slide className="text-slide">
            <Text>The extremely constrained environment gives us some interesting twists on our normal problem solving techniques.</Text>
            <Text>&nbsp;</Text>
            <Appear>
              <Text>No variables?</Text>
            </Appear>
            <Appear>
              <Text>No function application?</Text>
            </Appear>
          </Slide>

          <Slide>
            <AppearingBlock>
              <Heading className="colored" caps size={3}>Thinking FORTH</Heading>
              <Image width="35%" src="assets/thinking_forth.JPG" />
            </AppearingBlock>
          </Slide>

          <Slide className="text-slide">
            <Text>Published in 1984, Thinking FORTH deals with the thought process behind programming.</Text>
          </Slide>

          <Slide className="text-slide">
            <Text>In addition to being remarkably ahead of its time, Thinking FORTH looks at the process which follows most naturally from how FORTH is designed.</Text>
          </Slide>

          <Slide>
            <AppearingBlock>
              <Heading className="colored" fontSize="3em" caps size={3}>Factoring</Heading>
              <Text>FORTHs secret sauce</Text>
            </AppearingBlock>
          </Slide>

          <Slide className="text-slide">
            <Text>Factoring is supported by zero-friction program construction.</Text>
          </Slide>

          <Slide className="text-slide">
            <Heading className="colored" caps size={3}>Factor &mdash;</Heading>
            <Appear>
              <Text textAlign="left">...to clarify meaning</Text>
            </Appear>
            <Appear>
              <Text textAlign="left">...to give something a name</Text>
            </Appear>
            <Appear>
              <Text textAlign="left">...to avoid repitition</Text>
            </Appear>
            <Appear>
              <Text textAlign="left">...to hide details likely to change</Text>
            </Appear>
            <Appear>
              <Text textAlign="left">...to simplify APIs</Text>
            </Appear>
          </Slide>

          <Slide className="text-slide">
            <Text>Factoring in FORTH becomes an iterative process of gradual refinement.</Text>
            <Text>&nbsp;</Text>
            <Appear>
              <Text>Layer by layer of named concepts.</Text>
            </Appear>
          </Slide>

          <Slide className="text-slide">
            <AppearingBlock>
              <Heading className="colored" caps size={3}>Creative</Heading>
              <Heading className="colored" caps size={3}>Programming</Heading>
              <Text>Expression over Function</Text>
            </AppearingBlock>
          </Slide>

          <Slide className="text-slide">
            <Text>Exercising your creative muscles is a fun way to learn and explore.</Text>
            <Text>&nbsp;</Text>
            <Appear>
              <Text>Also, creativity is an integral part of our work as programmers.</Text>
            </Appear>
          </Slide>

          <Slide className="text-slide">
            <Text>Creative Programming comes in many shapes and forms.</Text>
            <Text>&nbsp;</Text>
            <Appear>
              <Text>One such form is Generative Art.</Text>
            </Appear>
          </Slide>

          <Slide bgImage="assets/neon1.png" />
          <Slide bgImage="assets/neon2.png" />
          <Slide bgImage="assets/neon3.png" />
          <Slide bgImage="assets/neon4.png" />

          <Slide className="text-slide">
            <Heading className="colored" caps size={3}>The process</Heading>
            <Appear>
              <Text textAlign="left">Start with something small</Text>
            </Appear>
            <Appear>
              <Text textAlign="left">Add tweakable parameters</Text>
            </Appear>
            <Appear>
              <Text textAlign="left">Randomize or interpolate</Text>
            </Appear>
            <Appear>
              <Text textAlign="left">Multiply and iterate</Text>
            </Appear>
          </Slide>

          <Slide className="text-slide">
            <Text>This process seems a pretty good fit for the FORTH philosophy.</Text>
          </Slide>

          <Slide className="text-slide">
            <Text>Sadly, no concatenative languages with accessible HTML Canvas bindings exist.</Text>
          </Slide>

          <Slide className="text-slide">
            <Text>Luckily concatenative languages are quite easy to implement!</Text>
            <Text>&nbsp;</Text>
            <Appear>
              <Text>So I made one.</Text>
            </Appear>
          </Slide>

          <Slide className="text-slide">
            <Text>It is called Ait, and is modelled after a language called Joy.</Text>
          </Slide>

          <Slide className="repl-slide">
            <REPL mode="stack" code={fs.readFileSync('./code/joy.ait', 'utf8')} />
          </Slide>

          <Slide className="text-slide">
            <Text>This makes Joy and Ait similar to Lisp.</Text>
            <Text>&nbsp;</Text>
            <Appear>
              <Text>An exploration of this idea can be found in papers written about Joy.</Text>
            </Appear>
          </Slide>

          <Slide className="text-slide">
            <Text>What does creative coding look like with Ait?</Text>
          </Slide>

          <CodeSlide
            align="top"
            background="black"
            transition={[]}
            className="codeslide"
            lang="ait"
            code={fs.readFileSync('./code/particle.ait', 'utf8')}
            ranges={[
              { loc: [0, 0], title: "particle.ait" },
              { loc: [0, 0], title: "A lexicon for working with particles" },
              { loc: [0, 5], title: "Particles are made up of values" },
              { loc: [6, 12], title: "Color is a little different" },
              { loc: [6, 12], title: "...but not by much" },
              { loc: [13, 20], title: "Values fit in the aggregate" },
              { loc: [21, 28], title: "Getting a particles values" },
              { loc: [29, 37], title: "Generate a particle" },
              { loc: [38, 41], title: "Move a particle" },
              { loc: [0, 0], title: "A full vocabulary" },
            ]}
          />

          <Slide className="repl-slide">
            <REPL
              mode="canvas"
              code={fs.readFileSync('./code/start.ait', 'utf8')}
              modules={[fs.readFileSync('./code/particle.ait', 'utf8')]}
            />
          </Slide>

          <Slide className="repl-slide">
            <REPL
              mode="canvas"
              code={fs.readFileSync('./code/done.ait', 'utf8')}
              modules={[fs.readFileSync('./code/particle.ait', 'utf8')]}
            />
          </Slide>

          <Slide className="text-slide">
            <Text>Lack of variables guides you towards data-orientation.</Text>
            <Text>&nbsp;</Text>
            <Appear>
              <Text>And really makes you think about algorithms.</Text>
            </Appear>
          </Slide>

          <Slide className="text-slide">
            <Text>Factoring helps us articulate words that describe our problem domain.</Text>
          </Slide>

          <Slide className="text-slide">
            <Text>Zero-friction composition helps flow and program construction.</Text>
          </Slide>

          <Slide className="text-slide">
            <Text>And most important of all:</Text>
            <Text>&nbsp;</Text>
            <Appear>
              <Text>it is fun.</Text>
            </Appear>
          </Slide>

          <Slide>
            <Heading className="colored" caps size={3}>Resources:</Heading>
            <List>
              <ListItem><Link href="http://thinking-forth.sourceforge.net/">Thinking Forth</Link></ListItem>
              <ListItem><Link href="http://www.kevinalbrecht.com/code/joy-mirror/joy.html">Joy Homepage (mirror)</Link></ListItem>
              <ListItem><Link href="https://leanpub.com/readevalprintlove003/read">Read Eval Print λove #3 - Michael Fogus</Link></ListItem>
              <ListItem><Link href="http://inconvergent.net">Anders Hoff aka Inconvergent</Link></ListItem>
              <ListItem><Link href="https://github.com/mollerse/ait-lang">github/mollerse/ait-lang</Link></ListItem>
              <ListItem><Link href="https://mollerse.github.io/creative-concat-presentation">github/mollerse/creative-concat-presentation</Link></ListItem>
            </List>
          </Slide>

          <Slide>
            <BigHeading>Thank you!</BigHeading>
            <SmallHeading>@mollerse</SmallHeading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

const mount = document.createElement('div');
document.body.appendChild(mount);
render(<Slides/>, mount);
