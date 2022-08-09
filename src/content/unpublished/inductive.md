---
date: "04 Jul 2022"
title: Inductive learning
---

## The need for understanding

We've all know that person who seems to grasp concepts so effortlessly making everyone around him feel stupid.
We also probably know someone who always seems to require further clarification, no matter how much you explain him something.

By exploring the inner mechanisms of what causes or breaks understanding, I've been able to speed up my overall learning abilities,
pinpoint the exact causes of confusion in any given situation and deepen my understanding of already studied topics.

## How to reason

Abstractions are the tool we use to make sense of the world. People, logarithms, stars, numbers, dogs and quaternions are all abstractions.
Not the words themselves, but our internal mental representation of those concepts.

We don't invent abstractions for the sake of it, rather each is born out of the necessity to describe or explain something.
To be more formal, we are <u>**extracting the common features amongst the objects we observe and packing them into a bundle we call abstraction**.</u>
The concept of a dog is thus the collection of it's attributes and abilities (barks, has two eyes, good sense of smell, returns the ball, etc...).

It's a process we've done naturally during our development, especially through play: we've learned what a dog, a star or a person is, by virtue of observation and when possible, interaction.

As we got more conscious in our learning, we replaced this principle of inductive learning with a deductive approach.
We try to understand things by their definition.
_(explain how that's not optimal)_
The good news is that we can still force this mental process to understand any sort of abstract concept.

## How it works

The process described above, is the same mental process we use to understand any sort of abstract concept.
**Comprehension emerges from identifying the attributes, traits, behaviors and uses of their observed instances.**

<p style="color:red"> (validate the above sentence by showing how this is true) </p>

What most people try instead, is to comprehend concept by their definition, often failing to obtain the same results.
The problem is that definitions are descriptions of what has already been abstracted, but they don't make explicit what they are abstracting from.
Therefore they usually only make sense once you understand the concept itself.
It is also worth noticing that we struggle the most giving the definition for the most fundamental and basic concepts we know.

(They can nevertheless still be useful to help you generalize your model even further and solidify your knowledge).

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

Most of the times, it boils down to asking the right questions:
the most common ends up being something like "what is this needed for?"

Try to prioritize visual representations and analogies to things you can picture, since they are more easily remembered and make for a better mental model.

Remember that understanding is not a one time thing, but more of a process, where through exploration, observation and interaction,
you build a more and more precise and powerful mental model.

I hope you article was valuable. Let me know if you have some comments.
