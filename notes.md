# Rediscovering Concatenative Languages with Creative Programming

## Hello and intro

- Hello, my name is Stian and I am a developer. I mostly deal with browsers and various browser-related technologies. But I do also have a facination for programming languages and the weirder the language is the more interested I become. So today I am going to show you the strange and wonderful world of concatenative languages.

## Concatenative Languages, what even are you?

- This family of languages can trace their origins back to a language called Forth. Forth was created in the late 60s by a fellow called Charles "Chuck" H. Moore, many of you have probably heard whispers of it throughout your own adventures in programming. Some of you have even tried it (FORTH, not even once). Not normaly a language touted as a must-learn, a saviour of programming or even usable.

- Concatenative Languages get their namesake from the way programs are constructed - by stringing or concatenating (some texts even use juxtaposition) words together.

```
: gcd ( a b -- n )
  begin dup while tuck mod repeat drop ;
```

- This is a FORTH program that calculates the greatest common divisor. It looks kinda alien to what we think of as programming languages today. As connoisseurs of functional programming, we are very familiar with prefix-notation. Most of us have prior experience with infix-notation. But FORTH uses postfix-notation, meaning that the operator follows the operands.

- The elements of a FORTH program are called words, concatenating words makes a program. You can define new words, like in the example you see here, or use words provided by the FORTH runtime. Every word preforms an operation on a shared piece of memory called the stack. It is called a stack because it is, well, a stack. If I were to describe this program using prose it would sound something like this:

> Begin a loop by duplicating the top element of the stack. While this element is truthy, tuck it away on the stack preform a mod operation on the top of the stack and repeat the loop. Then drop the top element, the new top element is now your greatest common divisor.

- This way of handling state in the program has given rise to another name for this kind of language - stack based. Every word, you can think of them as functions, takes the stack as its only argument, consumes elements and produce elements. This particular program consumes two elements and produces one. As you can see denoted in the parentheses in the program. This denotation is entirely optional, but strongly encouraged in FORTH and is called a stack-effect comment. Because each word, or function, only takes one argument, composing them becomes as trivial as concatenating them. This implication is very interesting, but sadly out of scope for this talk and my basic understanding of the mathematics side of programming languages.

## Why Forth? Or any other concatenative language for that matter?

- With this strange way of making programs, it makes you wonder: Forth, what is it good for? Absolutely nothing. Say it again y'all. But Forth reached a widespread popularity in the 70s and early 80s, so clearly it had some purpose. It is currently attached to a comet hurling through space, so clearly it is fit for fight.

```
: gcd ( a b -- n )
  begin dup while tuck mod repeat drop ;
```

- If we take a look at the gcd-program again we notice a distinct lack of syntax. Even the execution of words seems fairly simple. Read the left-most word, look up its definition and evaluate it. Continue until there are no more words left. This particular attribute of FORTH-programs made it very easy to make runtimes for FORTH. This meant that a runtime could be embedded on a chip or a system for very little additional cost, especially compared to contemporary technologies like C, FORTRAN and COBOL. The memory profile of a Forth-program is also very well suited for embedded or constrained systems, when all you have is a stack and some registers.

- But programmers would still need to write in FORTH, what does FORTH offer that makes it a compelling choice as a tool for a programmer? To answer this we have to look at some more FORTH code. This time it is a bit more, and I am not going to explain every tidbit in this program, because it is very wordy.

```
: bottles ( n -- ) \ select the right grammar based on 'n'
        dup
        case
         1 of    ." One more bottle " drop endof
         0 of    ." No more bottles " drop endof
                 . ." bottles "    \ default case
        endcase ;

\ create punctuation with delay for artistic effect
: ,   [char] , emit  100 ms ;
: .   [char] . emit  300 ms ;

\ create the words to write the program
: of       ." of "   ;
: beer     ." beer " ;
: on       ." on "   ;
: the      ." the "  ;
: wall     ." wall" ;
: take     ." take " ;
: one      ." one "  ;
: down     ." down" ;
: pass     ."  pass " ;
: it       ." it "   ;
: around   ." around" ;

\ who said Forth is write only?
: beers ( n -- )   \  USAGE:  99 beers
      1 swap
      cr
      do
           I bottles of beer on the wall , cr
           I bottles of beer ,             cr
             take one down , pass it around , cr
        I 1- bottles of beer on the wall .  cr
        cr
      -1 +loop ;
```

- This program will print out the lyrics to the rhyme/song "99 Bottles". And I think it is a very apt illustration for what makes FORTH, and concatenative languages, so very intersting. By defining the words to describe your problem and domain, you can very easily compose the program which provides a solution. This particular program has had words defined for the actual words of the rhyme, so it is a bit contrived, but with a little imagination you can extrapolate the applications for other types of domains. Later I will give you a demonstration, if you are not entirely convinced yet.

- This way of thinking about problemsolving with computers is something very central to Forth. In fact it is so central that a book was written about it: Thinking Forth. It is an absolute gem of programming language philosophy and I cannot recommend it enough. Reading about how Forth-programmers solved problems for clients in a bygone time will make you a bit sad about the state of our industry today, but it will give you a lot of food for thought to bring with you into your daily work.

- TODO: This part of the talk needs fleshing out.

## How Forth is now?

- I wrote in my talk proposal that Forth and the concatenative languages have largely faded from the mainstream. But you have probably heard of PostScript. The langauge powering printers and PDF-files. That is a concatenative langauge, and arguably the most widespread and popular member of the family. So that was not entirely true, but in our context - that of the application programmer - concatenative languages are not normally on our mind.

- Learning new and novel programming languages will always expand the realm of possible solutions you are capable of conjuring. And concatenative languages offer novel ideas by the boatload. You have very limited wriggleroom with the stack being the only option for program state. No arguments and only limited variable support forces you to think in terms of data and algorithms in whole new ways. This struggle will make you more aware of how you handle data, how you compose functionality and how you name things. Again I must recommend the Thinking Forth book, which lays out all this much more eloquently then I can.

- And for any langugage with novel ideas a tail of related and inspired work will follow. And that is true for Forth as well. There is Factor, a modern, industry-strenght concatenative language, with all the tools and trinkets you can expect from a modern language. Cat, a staticly typed concatenative language. But for me, the most interesting member of the family is a language called Joy.

- Joy could be described as a combination of Lisp and Forth. Adding the ability to quote sequences of programs for runtime evaluation. The example gcd in Joy would look like this:

```
DEFINE gcd == [0 >] [dup rollup rem] while pop.
```

- While will take two quoted programs off the stack. Run one to check the loop-condition and one which will act as the loop body. We can look at another example which will probably be very familiar to you.

```
DEFINE squareList == [dup *] map.
```

- Joy is an academic research project of Manfred von Thun, and has many wonderful little suprises to explore. Combining the expressiveness of a functional language with the Forth way of thinking about problems is a very potent combination.

- TODO: More stuff about how this enhances the Forth philosophy.

## Before we take a little detour, a tiny quiz

- What is this?

```
DEFINE me&my ==
  [ dup i ] dup dup dup
  [ dup i ] dup dup yeah dup.
```

- I'm so sorry. My sense of humor has clearly been influenced by making this talk.

## Creative Programing.

- I have been talking alot about concatenative languages, but the title of this talk also contains Creative Programming. What is creative programming and how does it even relate to a niche family of programming languages?

- Creative Programming is programming for creative purposes. Computer art, generative art, algorithmic music, any sort of program that expresses creativity in some shape or form. Using programming as an outlet for creativity.

- TODO: This section needs some more flesh on the bone

- The way I like my creative programming is in the form of generative, or algorithmic, art. Systems that produce some form of intricate visual effect following seemingly simple steps and rules. When exercising the creative part of my brain I really prefer thinking with code. If i have to spend alot of time thinking about the details of the medium I quickly loose the flow which is so nice to be in when creating.

- This is where Concatenative Languages, and especially the problem solving philosophy of Forth comes in. When I read Thinking Forth the first time I got the idea that this would be perfect for doing HTML Canvas experiments. The stack in Forth and how Forth-words relate to it seemed very analogue to how you would interact with the canvas which uses a retained graphics mode. Normally when working with the canvas you need to preform actions in a very sequentially and procedural way. This is not ideal when doing creative things.

- So naturally I had to make this a reality. Being a webdeveloper I prefer to have my playthings working inside a browser, this usualy involves JavaScript in some shape or form. Sadly, no JS-port of Joy exists, which is the concatenative language of my choosing. Giving up was no option, so I implemented my own Concatenative Language with a runtime implemented in JS.

(TODO: This buildup needs to be better, more story-driven)

## The demo section

(Walk through how to implement a fun little demo with increasing complexity showcasing the Forth-philosophy)

## Was it all worth it?

- TODO: Summarize the highlights and point to the lessons learned.
- TODO: Is concatenative languages still relevant? Yes.

## Thanks and outro.
