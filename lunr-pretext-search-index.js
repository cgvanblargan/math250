var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-what-is-de",
  "level": "1",
  "url": "sec-what-is-de.html",
  "type": "Section",
  "number": "1.2",
  "title": "What is a Differential Equation?",
  "body": " What is a Differential Equation?  Modelling situations that are changing  Derivatives are used to model changing situations. Things are changing all around us.   Guided Question. Come up with an equation that models the following situation: The rate of change of a population P(t) is proportional to the current population.    Differential Equation  A differential equation is an equation involving a function, its derivatives, and the independent variable.  The order of a differential equation is the highest derivative appearing.     A simple model assumes:   Find the general solution.   Step 1: Separate variables   Divide both sides by P to isolate variables.    Step 2: Integrate both sides   Use that ∫1\/P dP = ln|P|.    Step 3: Solve for P   Exponentiate both sides and absorb constants.        Initial Conditions  Solve:    Step 1: Solve differential equation   This is the same form as exponential growth.    Step 2: Apply initial condition   Substitute t = 0 and P(0) = 200.    Final answer       Setting up Differential Equations   Velocity v changes at a rate proportional to v³.     Newton’s Law of Cooling.     Slope equals sqrt(xy).         Verifying Solutions  Verify:    Step 1: Differentiate   Use chain rule on exponential function.    Step 2: Substitute into equation   Replace y and y' into LHS.      Step 3: Simplify       Practice   Verify y(x)=tan(x^3+C) solves y' = 3x^2(y^2+1).  Step 1: Differentiate   Use chain rule with tan(u).    Step 2: Use identity   sec^2(u) = 1 + tan^2(u)      Is e^x a solution to y'' = -4y?  Step 1: Compute derivatives   Step 2: Substitute   Conclusion: No    Find r such that e^{rt} solves y'' + 5y' + 6y = 0.  Step 1: Substitute   Step 2: Factor   Step 3: Solve   Final answer: r = -2, -3      "
},
{
  "id": "def-de",
  "level": "2",
  "url": "sec-what-is-de.html#def-de",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Differential Equation.",
  "body": " Differential Equation  A differential equation is an equation involving a function, its derivatives, and the independent variable.  The order of a differential equation is the highest derivative appearing.  "
},
{
  "id": "ex-pop-model",
  "level": "2",
  "url": "sec-what-is-de.html#ex-pop-model",
  "type": "Checkpoint",
  "number": "1.2.2",
  "title": "",
  "body": " A simple model assumes:   Find the general solution.   Step 1: Separate variables   Divide both sides by P to isolate variables.    Step 2: Integrate both sides   Use that ∫1\/P dP = ln|P|.    Step 3: Solve for P   Exponentiate both sides and absorb constants.     "
},
{
  "id": "ex-ivp",
  "level": "2",
  "url": "sec-what-is-de.html#ex-ivp",
  "type": "Example",
  "number": "1.2.3",
  "title": "Initial Conditions.",
  "body": " Initial Conditions  Solve:    Step 1: Solve differential equation   This is the same form as exponential growth.    Step 2: Apply initial condition   Substitute t = 0 and P(0) = 200.    Final answer    "
},
{
  "id": "ex-setup",
  "level": "2",
  "url": "sec-what-is-de.html#ex-setup",
  "type": "Example",
  "number": "1.2.4",
  "title": "Setting up Differential Equations.",
  "body": " Setting up Differential Equations   Velocity v changes at a rate proportional to v³.     Newton’s Law of Cooling.     Slope equals sqrt(xy).      "
},
{
  "id": "ex-verify",
  "level": "2",
  "url": "sec-what-is-de.html#ex-verify",
  "type": "Example",
  "number": "1.2.5",
  "title": "Verifying Solutions.",
  "body": " Verifying Solutions  Verify:    Step 1: Differentiate   Use chain rule on exponential function.    Step 2: Substitute into equation   Replace y and y' into LHS.      Step 3: Simplify    "
},
{
  "id": "ex-practice",
  "level": "2",
  "url": "sec-what-is-de.html#ex-practice",
  "type": "Checkpoint",
  "number": "1.2.6",
  "title": "Practice.",
  "body": " Practice   Verify y(x)=tan(x^3+C) solves y' = 3x^2(y^2+1).  Step 1: Differentiate   Use chain rule with tan(u).    Step 2: Use identity   sec^2(u) = 1 + tan^2(u)      Is e^x a solution to y'' = -4y?  Step 1: Compute derivatives   Step 2: Substitute   Conclusion: No    Find r such that e^{rt} solves y'' + 5y' + 6y = 0.  Step 1: Substitute   Step 2: Factor   Step 3: Solve   Final answer: r = -2, -3     "
},
{
  "id": "sec-third",
  "level": "1",
  "url": "sec-third.html",
  "type": "Section",
  "number": "1.3",
  "title": "What is a Differential Equation?",
  "body": " What is a Differential Equation?   Derivatives are used to model changing situations!    And things are changing all around us!     Example 1. Come up with an equation that models the following situation:  The rate of change of a population (where is time in years) is proportional to current population. The constant of proportionality is 3.    hey    The equation above representing how the population is changing is an example of a differential equation . We say the order is 1 because the highest-order derivative appearing is a first derivative.    A differential equation is an equation involving a function, its derivatives, and independent variable.  The order of a differential equation is the highest derivative appearing.      A simple model of a population is that the rate of change is proportional to the population. So, satisfies   The general solution to this differential equation is   where varying over any real number for gives all possible solutions.    With the proper initial conditions we obtain a specific solution to a differential equation.    Suppose a population satisfies , and the initial population at is . Find the solution to this initial value problem .    Placeholder solution text goes here.  Start with the general solution and use the initial condition to determine the constant.    "
},
{
  "id": "ex1",
  "level": "2",
  "url": "sec-third.html#ex1",
  "type": "Example",
  "number": "1.3.1",
  "title": "",
  "body": "  Example 1. Come up with an equation that models the following situation:  The rate of change of a population (where is time in years) is proportional to current population. The constant of proportionality is 3.    hey   "
},
{
  "id": "sec-third-5",
  "level": "2",
  "url": "sec-third.html#sec-third-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential equation order "
},
{
  "id": "def-differential-equation",
  "level": "2",
  "url": "sec-third.html#def-differential-equation",
  "type": "Definition",
  "number": "1.3.2",
  "title": "",
  "body": "  A differential equation is an equation involving a function, its derivatives, and independent variable.  The order of a differential equation is the highest derivative appearing.   "
},
{
  "id": "remark-general-solution",
  "level": "2",
  "url": "sec-third.html#remark-general-solution",
  "type": "Remark",
  "number": "1.3.3",
  "title": "",
  "body": "  A simple model of a population is that the rate of change is proportional to the population. So, satisfies   The general solution to this differential equation is   where varying over any real number for gives all possible solutions.   "
},
{
  "id": "sec-third-8",
  "level": "2",
  "url": "sec-third.html#sec-third-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial conditions specific solution "
},
{
  "id": "example-initial-value-problem",
  "level": "2",
  "url": "sec-third.html#example-initial-value-problem",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Suppose a population satisfies , and the initial population at is . Find the solution to this initial value problem .    Placeholder solution text goes here.  Start with the general solution and use the initial condition to determine the constant.   "
},
{
  "id": "ch-chapter-two",
  "level": "1",
  "url": "ch-chapter-two.html",
  "type": "Chapter",
  "number": "2",
  "title": "Name for chapter 2",
  "body": " Name for chapter 2   Text before the first section.     Check your understanding!   Here is a spot to explain the purpose of these questions. It's optional, like most introductions.     Here is a question.    A little hint.    Just the answer.    All the glorious details about an answer.      A second comprehension question. We don't bother with answers or solutions.      Here is a question.    A little hint.    Just the answer.    All the glorious details about an answer.      A second comprehension question. We don't bother with answers or solutions.     A little wrap up, perhaps giving guidance or encouragement if the student struggled with the questions. Optional like most conclusions.       Here's where you put the common instructions.     First exercise. <statement> of an <exercise>  <exercise> <statement> You can add all the usual bells and whistles after, but we'll keep it short here. (The <statement> may be omitted if none of <hint> , <answer> , or <solution> are present as a child of the <exercise> .)      Second exercise.    The <statement> for this exercise is necessary because we have included at least one of <hint> , <answer> , or <solution> (namely, <hint> ).     Third exercise. (No <statement> necessary here because no <hint> , <answer> , or <solution> .)     This <exercise> is not inside the <exercisegroup> .    "
},
{
  "id": "basics-reading-questions-3",
  "level": "2",
  "url": "basics-reading-questions.html#basics-reading-questions-3",
  "type": "Reading Question",
  "number": "2.1",
  "title": "",
  "body": "  Here is a question.    A little hint.    Just the answer.    All the glorious details about an answer.   "
},
{
  "id": "basics-reading-questions-4",
  "level": "2",
  "url": "basics-reading-questions.html#basics-reading-questions-4",
  "type": "Reading Question",
  "number": "2.2",
  "title": "",
  "body": "  A second comprehension question. We don't bother with answers or solutions.   "
},
{
  "id": "basics-reading-questions-5",
  "level": "2",
  "url": "basics-reading-questions.html#basics-reading-questions-5",
  "type": "Reading Question",
  "number": "2.3",
  "title": "",
  "body": "  Here is a question.    A little hint.    Just the answer.    All the glorious details about an answer.   "
},
{
  "id": "basics-reading-questions-6",
  "level": "2",
  "url": "basics-reading-questions.html#basics-reading-questions-6",
  "type": "Reading Question",
  "number": "2.4",
  "title": "",
  "body": "  A second comprehension question. We don't bother with answers or solutions.   "
},
{
  "id": "basics-s-sample-exercises-1-2",
  "level": "2",
  "url": "basics-s-sample-exercises.html#basics-s-sample-exercises-1-2",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": "  First exercise. <statement> of an <exercise>  <exercise> <statement> You can add all the usual bells and whistles after, but we'll keep it short here. (The <statement> may be omitted if none of <hint> , <answer> , or <solution> are present as a child of the <exercise> .)   "
},
{
  "id": "basics-s-sample-exercises-1-3",
  "level": "2",
  "url": "basics-s-sample-exercises.html#basics-s-sample-exercises-1-3",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": "  Second exercise.    The <statement> for this exercise is necessary because we have included at least one of <hint> , <answer> , or <solution> (namely, <hint> ).   "
},
{
  "id": "basics-s-sample-exercises-1-4",
  "level": "2",
  "url": "basics-s-sample-exercises.html#basics-s-sample-exercises-1-4",
  "type": "Exercise",
  "number": "2.3",
  "title": "",
  "body": " Third exercise. (No <statement> necessary here because no <hint> , <answer> , or <solution> .)  "
},
{
  "id": "basics-s-sample-exercises-2",
  "level": "2",
  "url": "basics-s-sample-exercises.html#basics-s-sample-exercises-2",
  "type": "Exercise",
  "number": "2.4",
  "title": "",
  "body": " This <exercise> is not inside the <exercisegroup> .  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
