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
  "id": "sec-what-is-de",
  "level": "1",
  "url": "sec-what-is-de.html",
  "type": "Section",
  "number": "1.1.1",
  "title": "What is a Differential Equation?",
  "body": " What is a Differential Equation?  Derivatives are used to model changing situations! And things are changing all around us!   This video goes through the content of this page.     Setting Up a Differential Equation  Come up with an equation that models the following situation: The rate of change of a population (where is time in years) is proportional to the current population. The constant of proportionality is 3.    The rate of change of is the derivative with respect to time, which is .  \"The rate of change of is...\" translates to What can you put on the right-hand side of the equation to represent that it is proportional to the current population, where the constant of proportionality is 3?    The answer is . The left-hand side denotes the rate of change of the population . The right-hand side, , expresses a quantity that is proportional to , with a proportionality constant of 3.    In the previous example, you just set up a differential equation . We often want to take this a step further and find a solution. In this case, that would be a population function that satisfies the conditions of the previous example (where the rate of change of the population is proportional to itself, with proportionality constant equaling 3).   Solving a Differential Equation  Can you think of a function that solves the previous differential equation?   We are looking for a function whose derivative equals .  First try solving the simpler question: Find a function whose derivative is itself. That is, it satisfies .    We want to solve the differential equation . Let's first consider the simpler equation . A solution is one whose derivative is itself. Recall that the famous exponential function has this property!  Let's modify this to solve . How do we modify so that a 3 comes in front when differentiating ? The chain rule should come to mind! Indeed, if we set , we find , which equals .  So solves . Can you think of any others?     Differential Equation   A differential equation is an equation involving a function , its derivatives , and an independent variable .  The order of a differential equation is the highest derivative appearing.    A differential equation involving only derivative with respect to only one variable (as opposed to partial derivatives) is called an ordinary differential equation (ODE) .  Here are three examples of ODEs, along with their orders:    Notation  We adopt both the prime notation and Leibniz notation to denote the derivative of with respect to . These are equivalent and will be used interchangeably throughout.  In , is the independent variable and is the dependent variable. The actual letters we use for the variable will vary. In the last example, , it is implied that is the dependent variable and is the independent variable.   "
},
{
  "id": "video-what-is-de",
  "level": "2",
  "url": "sec-what-is-de.html#video-what-is-de",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "ex-setup-population-de",
  "level": "2",
  "url": "sec-what-is-de.html#ex-setup-population-de",
  "type": "Example",
  "number": "1.1.2",
  "title": "Setting Up a Differential Equation.",
  "body": " Setting Up a Differential Equation  Come up with an equation that models the following situation: The rate of change of a population (where is time in years) is proportional to the current population. The constant of proportionality is 3.    The rate of change of is the derivative with respect to time, which is .  \"The rate of change of is...\" translates to What can you put on the right-hand side of the equation to represent that it is proportional to the current population, where the constant of proportionality is 3?    The answer is . The left-hand side denotes the rate of change of the population . The right-hand side, , expresses a quantity that is proportional to , with a proportionality constant of 3.   "
},
{
  "id": "ex-solve-population-de",
  "level": "2",
  "url": "sec-what-is-de.html#ex-solve-population-de",
  "type": "Example",
  "number": "1.1.3",
  "title": "Solving a Differential Equation.",
  "body": " Solving a Differential Equation  Can you think of a function that solves the previous differential equation?   We are looking for a function whose derivative equals .  First try solving the simpler question: Find a function whose derivative is itself. That is, it satisfies .    We want to solve the differential equation . Let's first consider the simpler equation . A solution is one whose derivative is itself. Recall that the famous exponential function has this property!  Let's modify this to solve . How do we modify so that a 3 comes in front when differentiating ? The chain rule should come to mind! Indeed, if we set , we find , which equals .  So solves . Can you think of any others?   "
},
{
  "id": "def-differential-equation",
  "level": "2",
  "url": "sec-what-is-de.html#def-differential-equation",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Differential Equation.",
  "body": " Differential Equation   A differential equation is an equation involving a function , its derivatives , and an independent variable .  The order of a differential equation is the highest derivative appearing.   "
},
{
  "id": "sec-what-is-de-8",
  "level": "2",
  "url": "sec-what-is-de.html#sec-what-is-de-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordinary differential equation (ODE) "
},
{
  "id": "rem-notation",
  "level": "2",
  "url": "sec-what-is-de.html#rem-notation",
  "type": "Remark",
  "number": "1.1.5",
  "title": "Notation.",
  "body": " Notation  We adopt both the prime notation and Leibniz notation to denote the derivative of with respect to . These are equivalent and will be used interchangeably throughout.  In , is the independent variable and is the dependent variable. The actual letters we use for the variable will vary. In the last example, , it is implied that is the dependent variable and is the independent variable.  "
},
{
  "id": "sec-gensolns-initialvalues",
  "level": "1",
  "url": "sec-gensolns-initialvalues.html",
  "type": "Section",
  "number": "1.1.2",
  "title": "General Solutions and Initial Value Problems",
  "body": " General Solutions and Initial Value Problems   This video goes through the content of this page.     Solution to the Population Growth Model   A simple model of a population is that the rate of change is proportional to the population. So satisfies: The general solution to this differential equation is: where varying over any real number for gives all possible solutions.    Try verifying this by differentiating :   Verification  By the chain rule, .    Some examples of specific solutions:   With the proper initial conditions we obtain a specific solution to a differential equation.   Applying an Initial Condition  Suppose a population satisfies , and the initial population at is . Find the solution .   The general solution with is: Applying the initial condition : So the specific solution is:     "
},
{
  "id": "video-general-solutions-ivp",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#video-general-solutions-ivp",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "def-general-solution-population",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#def-general-solution-population",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Solution to the Population Growth Model.",
  "body": " Solution to the Population Growth Model   A simple model of a population is that the rate of change is proportional to the population. So satisfies: The general solution to this differential equation is: where varying over any real number for gives all possible solutions.   "
},
{
  "id": "sec-gensolns-initialvalues-7",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#sec-gensolns-initialvalues-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial conditions specific solution "
},
{
  "id": "ex-initial-condition",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#ex-initial-condition",
  "type": "Example",
  "number": "1.1.3",
  "title": "Applying an Initial Condition.",
  "body": " Applying an Initial Condition  Suppose a population satisfies , and the initial population at is . Find the solution .   The general solution with is: Applying the initial condition : So the specific solution is:    "
},
{
  "id": "sec-setting-up-des",
  "level": "1",
  "url": "sec-setting-up-des.html",
  "type": "Section",
  "number": "1.1.3",
  "title": "Setting Up Differential Equations",
  "body": " Setting Up Differential Equations   This video goes through the content of this page.     Setting Up Differential Equations  Set up the differential equations that model the following situations.  (1) The rate of change of a velocity of a car is proportional to the cube of .     (2) Newton's law of cooling states that the time rate of change of a temperature of an object is proportional to the difference between and the surrounding temperature .     (3) The slope of the tangent line of a graph of at the point is equal to the square root of the product of and .      "
},
{
  "id": "video-setting-up-des",
  "level": "2",
  "url": "sec-setting-up-des.html#video-setting-up-des",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "ex-setup-des",
  "level": "2",
  "url": "sec-setting-up-des.html#ex-setup-des",
  "type": "Example",
  "number": "1.1.2",
  "title": "Setting Up Differential Equations.",
  "body": " Setting Up Differential Equations  Set up the differential equations that model the following situations.  (1) The rate of change of a velocity of a car is proportional to the cube of .     (2) Newton's law of cooling states that the time rate of change of a temperature of an object is proportional to the difference between and the surrounding temperature .     (3) The slope of the tangent line of a graph of at the point is equal to the square root of the product of and .     "
},
{
  "id": "sec-verifying-solutions",
  "level": "1",
  "url": "sec-verifying-solutions.html",
  "type": "Section",
  "number": "1.1.4",
  "title": "Verifying Solutions",
  "body": " Verifying Solutions   This video goes through the content of this page.    To verify that is a solution to a differential equation, you must plug in and its relevant derivatives into both sides of the equation and verify they equal each other.   Verifying a Solution  Verify that is a solution to .   Compute . Then plug the expressions for and into the equation and check if the left and right sides are equal.    We compute:      Explanation: Computing  We find by using the chain rule on , which is a composition of (outside function) with (the inside function). The derivative of the inside function equals , which is why this expression is multiplied out in front when differentiating.      Plugging into : Therefore is a solution.    To verify that is a solution to a differential equation, you must plug in and its relevant derivatives into both sides of the equation and verify they equal each other.   Practice: Verifying Solutions   Try each of the following on your own before checking the solution — seriously, give it a shot first! Use the hints if you get stuck.     Can you verify that is a solution to ? Then find the specific solution given the initial condition .    To ensure in : plug in wherever you see an and a wherever you see a .    First note:    Explanation: Computing  Recall that , and its derivative is . Here we apply the chain rule to , where the outside function is and the inside function is . The derivative of the inside is , which is why this appears out front.   Now we compare both sides of :   LHS:     RHS: simplifies to    Explanation: Simplifying the RHS  Starting from the RHS: where we used the Pythagorean trig identity .   Since LHS RHS, is a solution.   For the specific solution, apply to find .   Explanation: Finding  Plugging and into :    So the specific solution is .   Note: technically there are other values of (namely ), but they ultimately give the same function , as the tangent function is -periodic.       Is a solution to ? For what values of is a solution?     Is a solution? NO!    Explanation  If , then and . Plugging into : This is never true, so is not a solution.    Is a solution? If , then .   Explanation: Computing  Differentiating once via the chain rule: Differentiating again:    Plugging and into , we get .   Explanation: Solving for      So is a solution. (Note: since cosine is an even function, so these are the same solution.)      Find all so that is a solution to .    After substituting , , and into the equation, what can you divide by to simplify?    Let . Then by the chain rule: Plugging into : Dividing both sides by (which we can do since is never zero): Notice there is no more variable — we just have a quadratic in ! Factoring: So and are both solutions.      Other Solutions to  In the previous example we found that is a solution to . But there are others! In fact, is also a solution: More generally, is a solution for any constants . This is called a two-parameter family of solutions , and is a fundamental idea that will come up throughout the course.   "
},
{
  "id": "video-verifying-solns",
  "level": "2",
  "url": "sec-verifying-solutions.html#video-verifying-solns",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "ex-verify-solution",
  "level": "2",
  "url": "sec-verifying-solutions.html#ex-verify-solution",
  "type": "Example",
  "number": "1.1.2",
  "title": "Verifying a Solution.",
  "body": " Verifying a Solution  Verify that is a solution to .   Compute . Then plug the expressions for and into the equation and check if the left and right sides are equal.    We compute:      Explanation: Computing  We find by using the chain rule on , which is a composition of (outside function) with (the inside function). The derivative of the inside function equals , which is why this expression is multiplied out in front when differentiating.      Plugging into : Therefore is a solution.   "
},
{
  "id": "act-verifying-solutions",
  "level": "2",
  "url": "sec-verifying-solutions.html#act-verifying-solutions",
  "type": "Activity",
  "number": "1.1.1",
  "title": "Practice: Verifying Solutions.",
  "body": " Practice: Verifying Solutions   Try each of the following on your own before checking the solution — seriously, give it a shot first! Use the hints if you get stuck.     Can you verify that is a solution to ? Then find the specific solution given the initial condition .    To ensure in : plug in wherever you see an and a wherever you see a .    First note:    Explanation: Computing  Recall that , and its derivative is . Here we apply the chain rule to , where the outside function is and the inside function is . The derivative of the inside is , which is why this appears out front.   Now we compare both sides of :   LHS:     RHS: simplifies to    Explanation: Simplifying the RHS  Starting from the RHS: where we used the Pythagorean trig identity .   Since LHS RHS, is a solution.   For the specific solution, apply to find .   Explanation: Finding  Plugging and into :    So the specific solution is .   Note: technically there are other values of (namely ), but they ultimately give the same function , as the tangent function is -periodic.       Is a solution to ? For what values of is a solution?     Is a solution? NO!    Explanation  If , then and . Plugging into : This is never true, so is not a solution.    Is a solution? If , then .   Explanation: Computing  Differentiating once via the chain rule: Differentiating again:    Plugging and into , we get .   Explanation: Solving for      So is a solution. (Note: since cosine is an even function, so these are the same solution.)      Find all so that is a solution to .    After substituting , , and into the equation, what can you divide by to simplify?    Let . Then by the chain rule: Plugging into : Dividing both sides by (which we can do since is never zero): Notice there is no more variable — we just have a quadratic in ! Factoring: So and are both solutions.    "
},
{
  "id": "rem-other-solutions",
  "level": "2",
  "url": "sec-verifying-solutions.html#rem-other-solutions",
  "type": "Remark",
  "number": "1.1.3",
  "title": "Other Solutions to <span class=\"process-math\">\\(y'' = -4y\\)<\/span>.",
  "body": " Other Solutions to  In the previous example we found that is a solution to . But there are others! In fact, is also a solution: More generally, is a solution for any constants . This is called a two-parameter family of solutions , and is a fundamental idea that will come up throughout the course.  "
},
{
  "id": "sec-equilibrium-solutions",
  "level": "1",
  "url": "sec-equilibrium-solutions.html",
  "type": "Section",
  "number": "1.1.5",
  "title": "Equilibrium Solutions",
  "body": " Equilibrium Solutions  enter more text  "
},
{
  "id": "extra-practice",
  "level": "1",
  "url": "extra-practice.html",
  "type": "Section",
  "number": "1.1.6",
  "title": "Extra Practice",
  "body": " Extra Practice  enter more text  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.2",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-what-is-de-old",
  "level": "1",
  "url": "sec-what-is-de-old.html",
  "type": "Section",
  "number": "1.3",
  "title": "What is a Differential Equation?",
  "body": " What is a Differential Equation?  Modelling situations that are changing  Derivatives are used to model changing situations. Things are changing all around us.   Guided Question. Come up with an equation that models the following situation: The rate of change of a population P(t) is proportional to the current population.    Differential Equation  A differential equation is an equation involving a function, its derivatives, and the independent variable.  The order of a differential equation is the highest derivative appearing.     A simple model assumes:   Find the general solution.   Step 1: Separate variables   Divide both sides by P to isolate variables.    Step 2: Integrate both sides   Use that ∫1\/P dP = ln|P|.    Step 3: Solve for P   Exponentiate both sides and absorb constants.        Initial Conditions  Solve:    Step 1: Solve differential equation   This is the same form as exponential growth.    Step 2: Apply initial condition   Substitute t = 0 and P(0) = 200.    Final answer       Setting up Differential Equations   Velocity v changes at a rate proportional to v³.     Newton’s Law of Cooling.     Slope equals sqrt(xy).         Verifying Solutions  Verify:    Step 1: Differentiate   Use chain rule on exponential function.    Step 2: Substitute into equation   Replace y and y' into LHS.      Step 3: Simplify       Practice   Verify y(x)=tan(x^3+C) solves y' = 3x^2(y^2+1).  Step 1: Differentiate   Use chain rule with tan(u).    Step 2: Use identity   sec^2(u) = 1 + tan^2(u)      Is e^x a solution to y'' = -4y?  Step 1: Compute derivatives   Step 2: Substitute   Conclusion: No    Find r such that e^{rt} solves y'' + 5y' + 6y = 0.  Step 1: Substitute   Step 2: Factor   Step 3: Solve   Final answer: r = -2, -3      "
},
{
  "id": "def-de",
  "level": "2",
  "url": "sec-what-is-de-old.html#def-de",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Differential Equation.",
  "body": " Differential Equation  A differential equation is an equation involving a function, its derivatives, and the independent variable.  The order of a differential equation is the highest derivative appearing.  "
},
{
  "id": "ex-pop-model",
  "level": "2",
  "url": "sec-what-is-de-old.html#ex-pop-model",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "",
  "body": " A simple model assumes:   Find the general solution.   Step 1: Separate variables   Divide both sides by P to isolate variables.    Step 2: Integrate both sides   Use that ∫1\/P dP = ln|P|.    Step 3: Solve for P   Exponentiate both sides and absorb constants.     "
},
{
  "id": "ex-ivp",
  "level": "2",
  "url": "sec-what-is-de-old.html#ex-ivp",
  "type": "Example",
  "number": "1.3.3",
  "title": "Initial Conditions.",
  "body": " Initial Conditions  Solve:    Step 1: Solve differential equation   This is the same form as exponential growth.    Step 2: Apply initial condition   Substitute t = 0 and P(0) = 200.    Final answer    "
},
{
  "id": "ex-setup",
  "level": "2",
  "url": "sec-what-is-de-old.html#ex-setup",
  "type": "Example",
  "number": "1.3.4",
  "title": "Setting up Differential Equations.",
  "body": " Setting up Differential Equations   Velocity v changes at a rate proportional to v³.     Newton’s Law of Cooling.     Slope equals sqrt(xy).      "
},
{
  "id": "ex-verify",
  "level": "2",
  "url": "sec-what-is-de-old.html#ex-verify",
  "type": "Example",
  "number": "1.3.5",
  "title": "Verifying Solutions.",
  "body": " Verifying Solutions  Verify:    Step 1: Differentiate   Use chain rule on exponential function.    Step 2: Substitute into equation   Replace y and y' into LHS.      Step 3: Simplify    "
},
{
  "id": "ex-practice",
  "level": "2",
  "url": "sec-what-is-de-old.html#ex-practice",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "Practice.",
  "body": " Practice   Verify y(x)=tan(x^3+C) solves y' = 3x^2(y^2+1).  Step 1: Differentiate   Use chain rule with tan(u).    Step 2: Use identity   sec^2(u) = 1 + tan^2(u)      Is e^x a solution to y'' = -4y?  Step 1: Compute derivatives   Step 2: Substitute   Conclusion: No    Find r such that e^{rt} solves y'' + 5y' + 6y = 0.  Step 1: Substitute   Step 2: Factor   Step 3: Solve   Final answer: r = -2, -3     "
},
{
  "id": "basics-reading-questions",
  "level": "1",
  "url": "basics-reading-questions.html",
  "type": "Reading Questions",
  "number": "2.1",
  "title": "Check your understanding!",
  "body": " Check your understanding!   Here is a spot to explain the purpose of these questions. It's optional, like most introductions.     Here is a question.    A little hint.    Just the answer.    All the glorious details about an answer.      A second comprehension question. We don't bother with answers or solutions.      Here is a question.    A little hint.    Just the answer.    All the glorious details about an answer.      A second comprehension question. We don't bother with answers or solutions.     A little wrap up, perhaps giving guidance or encouragement if the student struggled with the questions. Optional like most conclusions.   "
},
{
  "id": "basics-reading-questions-3",
  "level": "2",
  "url": "basics-reading-questions.html#basics-reading-questions-3",
  "type": "Reading Question",
  "number": "2.1.1",
  "title": "",
  "body": "  Here is a question.    A little hint.    Just the answer.    All the glorious details about an answer.   "
},
{
  "id": "basics-reading-questions-4",
  "level": "2",
  "url": "basics-reading-questions.html#basics-reading-questions-4",
  "type": "Reading Question",
  "number": "2.1.2",
  "title": "",
  "body": "  A second comprehension question. We don't bother with answers or solutions.   "
},
{
  "id": "basics-reading-questions-5",
  "level": "2",
  "url": "basics-reading-questions.html#basics-reading-questions-5",
  "type": "Reading Question",
  "number": "2.1.3",
  "title": "",
  "body": "  Here is a question.    A little hint.    Just the answer.    All the glorious details about an answer.   "
},
{
  "id": "basics-reading-questions-6",
  "level": "2",
  "url": "basics-reading-questions.html#basics-reading-questions-6",
  "type": "Reading Question",
  "number": "2.1.4",
  "title": "",
  "body": "  A second comprehension question. We don't bother with answers or solutions.   "
},
{
  "id": "ch2-sec2",
  "level": "1",
  "url": "ch2-sec2.html",
  "type": "Section",
  "number": "2.2",
  "title": "blahblahblah",
  "body": " blahblahblah   Population Growth   Suppose a population satisfies...    ...    "
},
{
  "id": "ex-population-growth",
  "level": "2",
  "url": "ch2-sec2.html#ex-population-growth",
  "type": "Checkpoint",
  "number": "2.2.1",
  "title": "Population Growth.",
  "body": " Population Growth   Suppose a population satisfies...    ...   "
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
