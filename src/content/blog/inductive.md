---
date: '04 Jul 2022'
title: Inductive learning
---
## The need for understanding 

We've all had that colleague or friend who seems to grasp concepts so effortlessly making everyone around him feel stupid.
We also probably know someone who always seems to require further clarification, no matter how much you explain him something.

we've thought oh hes just smarter but he only has superior mental models.
by exploring blbla, we can increase the speed by which comprehend concepts, as well as the quality of those mentala models. (rewrite).

By exploring the inner mechanisms of what causes or breaks understanding, I've been able to speed up my overall learning abilities,
pinpoint the exact causes of confusion in any given situation and deepen my understanding of already studied topics.

The title already gives a strong clue on the nature of understanding: I believe it to be an **inductive** process.
Inductivity refers to the process of drawing conclusions by performing a number of observations. (do I need to saya this?)

## How to reason 
Abstractions are the tool humans use to make sense of the world. People, logarithms, stars, numbers, dogs and quaternions are all abstractions.
Not the words themselves, but our internal mental representation of those concepts.

We don't invent abstractions for the sake of it, it's a natural process that occurs when we observe, describe or try to understand the universe.
This process is inductive: we know what a dog, a star or a person is, by virtue of observation and when possible, interaction.

To be more precise, we are extracting the common features amongst the objects we observe and packing them into an abstraction.
Think of every single concept as the collection of attributes and capabilities of its underlying instances.
<br />*dog := barks, has two eyes, has good sense of smell, returns the ball, etc...*


## How it works 
The powerful thing about this mental model, is that we can apply it to all sort of abstractions and non-trivial concepts.
**Comprehension emerges from identifying the attributes, traits, behaviors and uses of their observed instances.**

On the other hand, trying to understand a concept deductively, by its definition, often fails to provide the same results.
Definitions are not required to grasp concepts, that's why we fail to define formally the most basic and obvious concepts we hold.
Definitions are description of what has already been abstracted, hence making them useful only after you understand the abstraction in the first place.
They can still be useful to help you generalize your model even further and solidify your knowledge.

## Case study
Let's explore this process with the concept of **logarithms**: a quantity representing the power to which a fixed number (the base) must be raised to produce a given number.

What definitions lack is context. It doesn't show you what a logarithm is, why it exists, where is it used and what it does.
If you've never heard what a logarithm is, that definition, albeit 100% correct and precise, taught you nothing.

The inductive approach begins with finding examples or observations where the concept of logarithm is used. 

It is used for example in computational complexity theory to describe the worst case scenario of a binary search.
They are also used to represent the height of a balanced tree and to describe the number of digits needed to express a certain number.

The second step is to find commonalities among there use cases, some underlying principle that they all share.
When doing this experiment, I've quickly realized that all these problems share a common tree structure.

Upon further inspection, that tree maps perfectly the power operation: the base represents the number in which each node splits, the exponent the number of iterations.
Given the number of leafs in the tree and their split rate, logarithm tell you how many steps to reach that number.
This also clarifies the claim that they are the inverse of the power function.

When I now read log5(210) I immediately picture a tree where each node splits into 5 and I ask "how many steps to reach 512?".
Through this representation, corner cases that I would have needed to memorize, become obvious, such as log(0) is not defined. 

## Take aways
Most of the times, it boils down to asking the right questions when facing a concept you can't quite grasp.
The most common ends up being something like "what is this needed for?"

Try to prioritize visual representations and analogies to things you can picture, since they are more easily remembered and make for a better mental model.

Remember that understanding is not a one time thing, but more of a process, where through exploration, observation and interaction,
you build a more and more precise and powerful mental model.

I hope you article was valuable. Let me know if you have some comments.

