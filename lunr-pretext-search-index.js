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
  "body": " What is a Differential Equation?  Derivatives are used to model changing situations! And things are changing all around us!   This video goes through the content of this page.     Setting Up a Differential Equation  Come up with an equation that models the following situation: The rate of change of a population (where is time in years) is proportional to the current population. The constant of proportionality is 3.    The rate of change of is the derivative with respect to time, which is .  \"The rate of change of is...\" translates to What can you put on the right-hand side of the equation to represent that it is proportional to the current population, where the constant of proportionality is 3?    The answer is . The left-hand side denotes the rate of change of the population . The right-hand side, , expresses a quantity that is proportional to , with a proportionality constant of 3.    In the previous example, you just set up a differential equation . We often want to take this a step further and find a solution. In this case, that would be a population function that satisfies the conditions of the previous example (where the rate of change of the population is proportional to itself, with proportionality constant equaling 3).   Solving a Differential Equation  Can you think of a function that solves ?   First try solving the simpler question: find a function whose derivative is itself, that is, satisfying .    Let's start with the simpler equation . Can you think of a function whose derivative is itself?   Reveal  Recall that has this property — its derivative is itself! So satisfies .   Now, how can we modify this to solve ? We need a function whose derivative produces a factor of 3 out front. Think about the chain rule!   Reveal  Let's check . By the chain rule: So solves . Can you think of any other solutions?   Note that there are other solutions besides the ones we just stated! We discuss this in the next section.    The population example illustrates a key idea: when modelling situations that change over time, we naturally arrive at equations involving derivatives. This is the essence of a differential equation, which we now define formally.   Differential Equation   A differential equation is an equation involving a function , its derivatives , and an independent variable .  The order of a differential equation is the highest derivative appearing.    A differential equation involving only derivative with respect to only one variable (as opposed to partial derivatives) is called an ordinary differential equation (ODE) .  Here are three examples of ODEs, along with their orders:    Notation  We adopt both the prime notation and Leibniz notation to denote the derivative of with respect to . These are equivalent and will be used interchangeably throughout.  In , is the independent variable and is the dependent variable. The actual letters we use for the variable will vary. In the last example, , it is implied that is the dependent variable and is the independent variable.   "
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
  "body": " Solving a Differential Equation  Can you think of a function that solves ?   First try solving the simpler question: find a function whose derivative is itself, that is, satisfying .    Let's start with the simpler equation . Can you think of a function whose derivative is itself?   Reveal  Recall that has this property — its derivative is itself! So satisfies .   Now, how can we modify this to solve ? We need a function whose derivative produces a factor of 3 out front. Think about the chain rule!   Reveal  Let's check . By the chain rule: So solves . Can you think of any other solutions?   Note that there are other solutions besides the ones we just stated! We discuss this in the next section.   "
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
  "id": "sec-what-is-de-9",
  "level": "2",
  "url": "sec-what-is-de.html#sec-what-is-de-9",
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
  "body": " General Solutions and Initial Value Problems   This video goes through the content of this page.    We just found that one solution to is . In fact, all possible solutions — the general solution — are of the form , where is any real number. I encourage you to verify that this is always a solution; we will justify why it captures all solutions later when we study separable ODEs.  This idea generalizes naturally to the family of ODEs .   Solution to the Population Growth Model   A simple model of a population is that the rate of change is proportional to the population. So satisfies: The general solution to this differential equation is: where varying over any real number for gives all possible solutions.    Try verifying this by differentiating :   Verification  By the chain rule:    So for example, to solve , we find the general solution . Each value of gives a different specific solution — together they form a whole family of curves. For instance:   Use the slider below to explore how the value of affects the solution curve.   Solutions for varying values of .    In the graph above, notice how changes as you vary the values for . With the proper initial conditions we obtain a specific solution to a differential equation.   Applying an Initial Condition  Suppose a population satisfies , and the initial population at is . Find the solution .   The general solution with is: Applying the initial condition : So the specific solution is:     "
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
  "id": "sec-gensolns-initialvalues-3",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#sec-gensolns-initialvalues-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general solution "
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
  "id": "fig-population-slider",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#fig-population-slider",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " Solutions for varying values of .   "
},
{
  "id": "sec-gensolns-initialvalues-12",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#sec-gensolns-initialvalues-12",
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
  "number": "1.1.4",
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
  "body": " Verifying Solutions   This video goes through the content of this page.    Sometimes we are given proposed solutions to ODEs, and we must check whether they actually solve the ODE. To verify that is a solution to a differential equation, you must plug in and its relevant derivatives into both sides of the equation and verify they equal each other.   Verifying a Solution  Verify that is a solution to .   Compute . Then plug the expressions for and into the equation and check if the left and right sides are equal.    We compute:      Explanation: Computing  We find by using the chain rule on , which is a composition of (outside function) with (the inside function). The derivative of the inside function equals , which is why this expression is multiplied out in front when differentiating.      Plugging into : Therefore is a solution.    It's now try to practice this a bit more! Try each of the following examples on your own, and then check with the notes or video.   Practice: Verifying Solutions   Try each of the following on your own before checking the solution. Use the hints if you get stuck.     Can you verify that is a solution to ? Then find the specific solution given the initial condition .    To ensure in : plug in wherever you see an and a wherever you see a .    First note:    Explanation: Computing  Recall that , and its derivative is . Here we apply the chain rule to , where the outside function is and the inside function is . The derivative of the inside is , which is why this appears out front.   Now we compare both sides of :   LHS:     RHS: simplifies to    Explanation: Simplifying the RHS  Starting from the RHS: where we used the Pythagorean trig identity .   Since LHS RHS, is a solution.   For the specific solution, apply to find .   Explanation: Finding  Plugging and into :    So the specific solution is .   Note: technically there are other values of (namely ), but they ultimately give the same function , as the tangent function is -periodic.       Is a solution to ? For what values of is a solution?     Is a solution? NO!    Explanation  If , then and . Plugging into : This is never true, so is not a solution.    Is a solution? If , then .   Explanation: Computing  Differentiating once via the chain rule: Differentiating again:    Plugging and into , we get .   Explanation: Solving for      So is a solution. (Note: since cosine is an even function, so these are the same solution.)      Find all so that is a solution to .    After substituting , , and into the equation, what can you divide by to simplify?    Let . Then by the chain rule: Plugging into : Dividing both sides by (which we can do since is never zero): Notice there is no more variable — we just have a quadratic in ! Factoring: So and are both solutions.      Other Solutions to  In the previous example we found that is a solution to . But there are others! In fact, is also a solution: More generally, is a solution for any constants . This is called a two-parameter family of solutions , and is a fundamental idea that will come up throughout the course.   "
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
  "body": " Practice: Verifying Solutions   Try each of the following on your own before checking the solution. Use the hints if you get stuck.     Can you verify that is a solution to ? Then find the specific solution given the initial condition .    To ensure in : plug in wherever you see an and a wherever you see a .    First note:    Explanation: Computing  Recall that , and its derivative is . Here we apply the chain rule to , where the outside function is and the inside function is . The derivative of the inside is , which is why this appears out front.   Now we compare both sides of :   LHS:     RHS: simplifies to    Explanation: Simplifying the RHS  Starting from the RHS: where we used the Pythagorean trig identity .   Since LHS RHS, is a solution.   For the specific solution, apply to find .   Explanation: Finding  Plugging and into :    So the specific solution is .   Note: technically there are other values of (namely ), but they ultimately give the same function , as the tangent function is -periodic.       Is a solution to ? For what values of is a solution?     Is a solution? NO!    Explanation  If , then and . Plugging into : This is never true, so is not a solution.    Is a solution? If , then .   Explanation: Computing  Differentiating once via the chain rule: Differentiating again:    Plugging and into , we get .   Explanation: Solving for      So is a solution. (Note: since cosine is an even function, so these are the same solution.)      Find all so that is a solution to .    After substituting , , and into the equation, what can you divide by to simplify?    Let . Then by the chain rule: Plugging into : Dividing both sides by (which we can do since is never zero): Notice there is no more variable — we just have a quadratic in ! Factoring: So and are both solutions.    "
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
  "body": " Equilibrium Solutions   This video goes through the content of this page.    We now take a brief detour to discuss equilibrium solutions — a simple but important concept that will come up throughout the course.   Equilibrium Solution   An equilibrium solution to a differential equation is a constant solution. That is, for all , where is a solution to the ODE.     A function is constant if and only if for all . We will use this fact frequently when finding equilibrium solutions.   As a quick example, consider the differential equation , whose general solution is . Use the slider below to explore how different values of give different specific solutions. Can you find the value of that makes a constant function?   Solutions for varying values of . Try to find the equilibrium solution!    Notice that these solutions are not constant in general. However, setting gives , which is constant, and therefore the only equilibrium solution.  Understanding equilibrium solutions gives us useful insight into the overall behavior of solutions to an ODE. Later in the course we will explore this in more depth. For now, let's see how equilibrium solutions arise naturally in the context of Newton's law of cooling.   Newton's Law of Cooling   Recall that Newton's law of cooling states that , where is the temperature of an object and is the temperature of the surrounding environment. What is the equilibrium solution? Justify this both intuitively and algebraically.    Intuitive Justification   What value of ensures the object never changes temperature?    If the surrounding temperature is , what does the temperature of the object need to be so that it stops changing?    An object stops changing temperature once it matches the temperature of its surroundings. So is the equilibrium solution.     Algebraic Justification   Verify algebraically that is the equilibrium solution.    We want to find for what value of the constant function is a solution. What must equal for a constant function? Substitute into the ODE and solve for .    For a constant solution , we have . Substituting into the ODE: Therefore is the equilibrium solution.     Let's practice finding equilibrium solutions for more complicated differential equations. Notice that finding the general solution in the following examples would be quite difficult, but substituting and often reduces the problem to a simple algebraic equation in .   Practice: Finding Equilibrium Solutions   Try each of the following on your own before checking the solution. Try it on your own first!      Find all equilibrium solutions, , to the differential equation     Since we are looking for a constant solution, we set , which gives: Substituting into the differential equation: So or , giving two equilibrium solutions:       Find all equilibrium solutions to the differential equation     Setting , so and , and substituting: But must be a constant, and is not constant. Therefore there are no equilibrium solutions .      Equilibrium solutions do not always exist, as the last example shows. Recall that we are looking for a constant such that satisfies the ODE. If the algebra forces to equal a non-constant expression, then no equilibrium solution exists.   "
},
{
  "id": "video-equilibrium-solutions",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#video-equilibrium-solutions",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "def-equilibrium-solution",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#def-equilibrium-solution",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Equilibrium Solution.",
  "body": " Equilibrium Solution   An equilibrium solution to a differential equation is a constant solution. That is, for all , where is a solution to the ODE.   "
},
{
  "id": "note-equilibrium-derivative",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#note-equilibrium-derivative",
  "type": "Note",
  "number": "1.1.3",
  "title": "",
  "body": " A function is constant if and only if for all . We will use this fact frequently when finding equilibrium solutions.  "
},
{
  "id": "fig-equilibrium-slider",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#fig-equilibrium-slider",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " Solutions for varying values of . Try to find the equilibrium solution!   "
},
{
  "id": "ex-newtons-cooling-equilibrium",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#ex-newtons-cooling-equilibrium",
  "type": "Example",
  "number": "1.1.5",
  "title": "Newton’s Law of Cooling.",
  "body": " Newton's Law of Cooling   Recall that Newton's law of cooling states that , where is the temperature of an object and is the temperature of the surrounding environment. What is the equilibrium solution? Justify this both intuitively and algebraically.    Intuitive Justification   What value of ensures the object never changes temperature?    If the surrounding temperature is , what does the temperature of the object need to be so that it stops changing?    An object stops changing temperature once it matches the temperature of its surroundings. So is the equilibrium solution.     Algebraic Justification   Verify algebraically that is the equilibrium solution.    We want to find for what value of the constant function is a solution. What must equal for a constant function? Substitute into the ODE and solve for .    For a constant solution , we have . Substituting into the ODE: Therefore is the equilibrium solution.    "
},
{
  "id": "act-equilibrium-practice",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#act-equilibrium-practice",
  "type": "Activity",
  "number": "1.1.1",
  "title": "Practice: Finding Equilibrium Solutions.",
  "body": " Practice: Finding Equilibrium Solutions   Try each of the following on your own before checking the solution. Try it on your own first!      Find all equilibrium solutions, , to the differential equation     Since we are looking for a constant solution, we set , which gives: Substituting into the differential equation: So or , giving two equilibrium solutions:       Find all equilibrium solutions to the differential equation     Setting , so and , and substituting: But must be a constant, and is not constant. Therefore there are no equilibrium solutions .    "
},
{
  "id": "note-no-equilibrium",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#note-no-equilibrium",
  "type": "Note",
  "number": "1.1.6",
  "title": "",
  "body": " Equilibrium solutions do not always exist, as the last example shows. Recall that we are looking for a constant such that satisfies the ODE. If the algebra forces to equal a non-constant expression, then no equilibrium solution exists.  "
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
  "id": "sec-integrating-to-get-solutions",
  "level": "1",
  "url": "sec-integrating-to-get-solutions.html",
  "type": "Section",
  "number": "1.2.1",
  "title": "Integrating to solve <span class=\"process-math\">\\(\\frac{dy}{dx} = f(x)\\)<\/span>",
  "body": " Integrating to solve  A simple but important special case of a first-order ODE is when the right-hand side does not involve the dependent variable. That is, the equation is in the form:   Let's explore this with the following example.   A Simple First-Order ODE  Suppose . What does equal?   Think about what operation undoes differentiation. What function has derivative equal to ?    Notice that is a solution since its derivative is . That is, we found an antiderivative of .  Recall that adding any constant gives the general antiderivative , which is the general solution to . So we simply took the indefinite integral of !     For a differential equation in the form the general solution is simply:    Let's use this principle in the following examples. Try them on your own first!   Practice: Integrating to Find Solutions   Try each of the following on your own before checking the solution. Give it a shot first!      Solve with initial condition .    Integrating both sides: Applying the initial condition : So the specific solution is: We can verify:  and  .      Find the general solution to .    Notice the left-hand side involves a second derivative, which we can write as . Apply the same integration principle to get , then integrate again.    Since , we integrate twice.   First integration: Starting from :   Reveal      Now that we have , we integrate again.   Second integration: Starting from :   Reveal      You can verify that the general solution satisfies .      Notice in the last example we obtained two constants of integration and from integrating twice.   "
},
{
  "id": "ex-integrate-2x",
  "level": "2",
  "url": "sec-integrating-to-get-solutions.html#ex-integrate-2x",
  "type": "Example",
  "number": "1.2.1",
  "title": "A Simple First-Order ODE.",
  "body": " A Simple First-Order ODE  Suppose . What does equal?   Think about what operation undoes differentiation. What function has derivative equal to ?    Notice that is a solution since its derivative is . That is, we found an antiderivative of .  Recall that adding any constant gives the general antiderivative , which is the general solution to . So we simply took the indefinite integral of !   "
},
{
  "id": "obs-integrate-both-sides",
  "level": "2",
  "url": "sec-integrating-to-get-solutions.html#obs-integrate-both-sides",
  "type": "Observation",
  "number": "1.2.2",
  "title": "",
  "body": " For a differential equation in the form the general solution is simply:   "
},
{
  "id": "act-integrating-odes",
  "level": "2",
  "url": "sec-integrating-to-get-solutions.html#act-integrating-odes",
  "type": "Activity",
  "number": "1.2.1",
  "title": "Practice: Integrating to Find Solutions.",
  "body": " Practice: Integrating to Find Solutions   Try each of the following on your own before checking the solution. Give it a shot first!      Solve with initial condition .    Integrating both sides: Applying the initial condition : So the specific solution is: We can verify:  and  .      Find the general solution to .    Notice the left-hand side involves a second derivative, which we can write as . Apply the same integration principle to get , then integrate again.    Since , we integrate twice.   First integration: Starting from :   Reveal      Now that we have , we integrate again.   Second integration: Starting from :   Reveal      You can verify that the general solution satisfies .    "
},
{
  "id": "note-two-constants",
  "level": "2",
  "url": "sec-integrating-to-get-solutions.html#note-two-constants",
  "type": "Note",
  "number": "1.2.3",
  "title": "",
  "body": " Notice in the last example we obtained two constants of integration and from integrating twice.  "
},
{
  "id": "sec-positionvelocity",
  "level": "1",
  "url": "sec-positionvelocity.html",
  "type": "Section",
  "number": "1.2.2",
  "title": "Velocity and Acceleration",
  "body": " Velocity and Acceleration  Let's review some ideas regarding position, velocity, and acceleration.   Position, Velocity, and Acceleration   Suppose the position of an object with respect to time is given by .  The velocity  is the rate of change of position: .  The acceleration  is the rate of change of velocity: .      These ideas should be familiar. However, we can now view these as ODEs. For example, if the velocity is 3 mph, then can be written as the ODE , which is easily solved by integrating the right-hand side.  See if you can solve the following example.   Finding Position from Acceleration  Find the position function of a moving object given:    Since , we integrate to find .   First integration: Starting from :   Reveal   Applying : so .   Since , we integrate to find .   Second integration: Starting from :   Reveal   Applying : so the specific solution is:     Next, we explore these concepts in a slightly more involved word problem involving acceleration.  Braking Distance  The brakes of a car travelling at mph give a constant deceleration of mi\/h . How long, in hours, until the car comes to a full stop?   If there is a constant deceleration of , then . Solve for the velocity to answer the question.    We are given and . Integrating: Applying : The car stops when :    Note: be careful about units! The deceleration is given in mi\/h , so the answer is in hours.     "
},
{
  "id": "def-position-velocity-acceleration",
  "level": "2",
  "url": "sec-positionvelocity.html#def-position-velocity-acceleration",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Position, Velocity, and Acceleration.",
  "body": " Position, Velocity, and Acceleration   Suppose the position of an object with respect to time is given by .  The velocity  is the rate of change of position: .  The acceleration  is the rate of change of velocity: .     "
},
{
  "id": "ex-position-from-acceleration",
  "level": "2",
  "url": "sec-positionvelocity.html#ex-position-from-acceleration",
  "type": "Example",
  "number": "1.2.2",
  "title": "Finding Position from Acceleration.",
  "body": " Finding Position from Acceleration  Find the position function of a moving object given:    Since , we integrate to find .   First integration: Starting from :   Reveal   Applying : so .   Since , we integrate to find .   Second integration: Starting from :   Reveal   Applying : so the specific solution is:     "
},
{
  "id": "ex-braking-car",
  "level": "2",
  "url": "sec-positionvelocity.html#ex-braking-car",
  "type": "Example",
  "number": "1.2.3",
  "title": "Braking Distance.",
  "body": " Braking Distance  The brakes of a car travelling at mph give a constant deceleration of mi\/h . How long, in hours, until the car comes to a full stop?   If there is a constant deceleration of , then . Solve for the velocity to answer the question.    We are given and . Integrating: Applying : The car stops when :    Note: be careful about units! The deceleration is given in mi\/h , so the answer is in hours.    "
},
{
  "id": "subsec-intr-separable",
  "level": "1",
  "url": "subsec-intr-separable.html",
  "type": "Section",
  "number": "1.3.1",
  "title": "Introduction to Separable ODEs",
  "body": " Introduction to Separable ODEs  We now introduce a method for solving a broad class of first-order ODEs called separable differential equations . Let's first get a feel for the idea through an example before formalizing things.  Let's get a feel for the idea through an example before formalizing things. Consider the differential equation . Notice that the right-hand side factors into a part involving only and a part involving only . This suggests we try to \"separate\" the variables, moving all the terms to one side and all the terms to the other.  We write: We are treating as if it were a fraction and \"multiplying both sides by .\" Strictly speaking, is not a fraction. We will justify why this manipulation is mathematically valid shortly. For now, think of it as a useful shorthand that consistently gives the right answer.  Integrating both sides: Each side produces its own constant of integration: so we write:   So the general solution is .   Algebra to solve for  Starting from : So the general solution is .   This will outlined more clearly on the next page. But for now, let's make sure you understand what a first order separable ODE is.    Recall that a separable ODE is one that can be written in the form , where the right-hand side factors into a part involving only the dependent variable and a part involving only the independent variable. Which of the following ODEs are separable? Select all that apply.       Separable! We can write this as and (or and ). The right-hand side factors cleanly into a part in and a constant.       Separable! Factor out from the right-hand side: . So and .       Separable! The right-hand side already factors as and .       Separable — but sneaky! There is no explicit on the right-hand side, so (a constant function). We have and .       Not separable! There is no way to write as a product — the two variables are added together, not multiplied.       Not separable! Like the previous option, cannot be factored into a part in only and a part in only. Addition is the giveaway here.       Not separable! Even though it involves a trig function, cannot be written as — the variables are tangled together inside the sine.       This video goes through the content of this page.    "
},
{
  "id": "subsec-intr-separable-2",
  "level": "2",
  "url": "subsec-intr-separable.html#subsec-intr-separable-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separable differential equations "
},
{
  "id": "ex-mc-separable",
  "level": "2",
  "url": "subsec-intr-separable.html#ex-mc-separable",
  "type": "Checkpoint",
  "number": "1.3.1",
  "title": "",
  "body": "  Recall that a separable ODE is one that can be written in the form , where the right-hand side factors into a part involving only the dependent variable and a part involving only the independent variable. Which of the following ODEs are separable? Select all that apply.       Separable! We can write this as and (or and ). The right-hand side factors cleanly into a part in and a constant.       Separable! Factor out from the right-hand side: . So and .       Separable! The right-hand side already factors as and .       Separable — but sneaky! There is no explicit on the right-hand side, so (a constant function). We have and .       Not separable! There is no way to write as a product — the two variables are added together, not multiplied.       Not separable! Like the previous option, cannot be factored into a part in only and a part in only. Addition is the giveaway here.       Not separable! Even though it involves a trig function, cannot be written as — the variables are tangled together inside the sine.     "
},
{
  "id": "video-sep-intro",
  "level": "2",
  "url": "subsec-intr-separable.html#video-sep-intro",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "subsec-sepofvar",
  "level": "1",
  "url": "subsec-sepofvar.html",
  "type": "Section",
  "number": "1.3.2",
  "title": "Separation of Variables",
  "body": " Separation of Variables  The method we started exploring on the previous page used is called separation of variables . Let's now state it formally.   Separable Differential Equation   A separable differential equation is one that can be written in the form It can be solved using separation of variables :   This method captures all solutions that are not singular . When , we cannot divide by , so separation of variables may miss some solutions, but any solution missed this way is precisely an equilibrium (constant) solution.    A helpful (if informal) way to remember this is the following \"fake proof\":  Starting from , treat as a fraction and divide both sides by : Then \"multiply both sides by \" and integrate: While this is not a rigorous proof, it is a reliable way to remember how to apply the method.   Precise Justification (optional — for the curious!)  We want to rigorously justify why follows from .  Let be an antiderivative of , so that . Consider the function , viewed as a function of . By the chain rule: So is an antiderivative of with respect to . That is: But by definition of . So we arrive at: which is exactly what the method produces. The \"fake proof\" manipulation, while informal, gives the correct result.   In the following example, we go through each step in applying separation of variables.   Solving a Separable ODE  Find all equilibrium solutions to , then find the general explicit solution.    Step 1: Find equilibrium solutions.   Setting (constant), we need : So is the only equilibrium solution.   Step 2: Separate the variables.   Assuming , divide both sides by and \"multiply by \":    Explanation: separating variables  We start from . Here and . Dividing both sides by and treating as we described:     Step 3: Integrate both sides.    (We place the constant only on the right-hand side, since combining two constants of integration still gives a single arbitrary constant.)   Step 4: Solve for .   From , taking reciprocals:    Full working   Note: in the third line, was replaced with . Since ranges over all real numbers, so does — so this is just a relabeling. See the remark below.   Note: we replaced with above, since both vary over all real numbers. See the remark below for more on this.   Step 5: Write the general solution.   Combining the equilibrium solution from Step 1 and the explicit solution from Step 4, the general solution is:     And we just successfully used separation of variables! All the problems with separation of variables follow this basic format (with steps 1-5). Some of the details will vary in each problem, which we explore in the following sections.   Absorbing Constants  In solving the previous example, we changed to . This is valid because and both vary over all real numbers (they represent the same family of values, just relabeled).  We often absorb constants into like this, and it is generally preferred to write the simpler expression. For example, it is much neater to write than , even though they represent the same family of functions. It is standard practice to reuse the name from line to line, even when absorbing constants into it.    Be Careful with Placement  Be careful when changing expressions with . For example  and are not the same.  and are not the same (the constant cannot be absorbed into due to the order of operations).     Let's do a quick check to make sure you are confident simplifying expressions with .    In each of the following, two expressions involving (where varies over all real numbers) are given. Select all pairs that represent the same family of functions.     and   These are equivalent! Since varies over all real numbers, so does — they represent the same family of values, just relabeled.     and   These are equivalent! The is just a fixed number that gets absorbed into . As varies over all reals, so does .     and   Not equivalent! The cannot be absorbed into — adding 1 to shifts every solution up by 1, which is a genuinely different family of functions.     and   These are equivalent! As varies over all real numbers, so does — it's just a relabeling of the constant.     and   Not equivalent! In the first, shifts the graph vertically. In the second, shifts the graph horizontally inside the square root. These are genuinely different families of functions.       This video goes through the content of this page.    "
},
{
  "id": "subsec-sepofvar-2",
  "level": "2",
  "url": "subsec-sepofvar.html#subsec-sepofvar-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separation of variables "
},
{
  "id": "def-separable-de",
  "level": "2",
  "url": "subsec-sepofvar.html#def-separable-de",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Separable Differential Equation.",
  "body": " Separable Differential Equation   A separable differential equation is one that can be written in the form It can be solved using separation of variables :   This method captures all solutions that are not singular . When , we cannot divide by , so separation of variables may miss some solutions, but any solution missed this way is precisely an equilibrium (constant) solution.   "
},
{
  "id": "subsec-sepofvar-6",
  "level": "2",
  "url": "subsec-sepofvar.html#subsec-sepofvar-6",
  "type": "Proof",
  "number": "1.3.2.1",
  "title": "Precise Justification (optional — for the curious!).",
  "body": " Precise Justification (optional — for the curious!)  We want to rigorously justify why follows from .  Let be an antiderivative of , so that . Consider the function , viewed as a function of . By the chain rule: So is an antiderivative of with respect to . That is: But by definition of . So we arrive at: which is exactly what the method produces. The \"fake proof\" manipulation, while informal, gives the correct result.  "
},
{
  "id": "ex-separable-3y2x3",
  "level": "2",
  "url": "subsec-sepofvar.html#ex-separable-3y2x3",
  "type": "Example",
  "number": "1.3.2",
  "title": "Solving a Separable ODE.",
  "body": " Solving a Separable ODE  Find all equilibrium solutions to , then find the general explicit solution.    Step 1: Find equilibrium solutions.   Setting (constant), we need : So is the only equilibrium solution.   Step 2: Separate the variables.   Assuming , divide both sides by and \"multiply by \":    Explanation: separating variables  We start from . Here and . Dividing both sides by and treating as we described:     Step 3: Integrate both sides.    (We place the constant only on the right-hand side, since combining two constants of integration still gives a single arbitrary constant.)   Step 4: Solve for .   From , taking reciprocals:    Full working   Note: in the third line, was replaced with . Since ranges over all real numbers, so does — so this is just a relabeling. See the remark below.   Note: we replaced with above, since both vary over all real numbers. See the remark below for more on this.   Step 5: Write the general solution.   Combining the equilibrium solution from Step 1 and the explicit solution from Step 4, the general solution is:    "
},
{
  "id": "rem-absorbing-constants",
  "level": "2",
  "url": "subsec-sepofvar.html#rem-absorbing-constants",
  "type": "Remark",
  "number": "1.3.3",
  "title": "Absorbing Constants.",
  "body": " Absorbing Constants  In solving the previous example, we changed to . This is valid because and both vary over all real numbers (they represent the same family of values, just relabeled).  We often absorb constants into like this, and it is generally preferred to write the simpler expression. For example, it is much neater to write than , even though they represent the same family of functions. It is standard practice to reuse the name from line to line, even when absorbing constants into it.  "
},
{
  "id": "note-c-placement",
  "level": "2",
  "url": "subsec-sepofvar.html#note-c-placement",
  "type": "Note",
  "number": "1.3.4",
  "title": "Be Careful with <span class=\"process-math\">\\(C\\)<\/span> Placement.",
  "body": " Be Careful with Placement  Be careful when changing expressions with . For example  and are not the same.  and are not the same (the constant cannot be absorbed into due to the order of operations).    "
},
{
  "id": "ex-mc-absorbing-constants",
  "level": "2",
  "url": "subsec-sepofvar.html#ex-mc-absorbing-constants",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "",
  "body": "  In each of the following, two expressions involving (where varies over all real numbers) are given. Select all pairs that represent the same family of functions.     and   These are equivalent! Since varies over all real numbers, so does — they represent the same family of values, just relabeled.     and   These are equivalent! The is just a fixed number that gets absorbed into . As varies over all reals, so does .     and   Not equivalent! The cannot be absorbed into — adding 1 to shifts every solution up by 1, which is a genuinely different family of functions.     and   These are equivalent! As varies over all real numbers, so does — it's just a relabeling of the constant.     and   Not equivalent! In the first, shifts the graph vertically. In the second, shifts the graph horizontally inside the square root. These are genuinely different families of functions.     "
},
{
  "id": "video-sep-of-var",
  "level": "2",
  "url": "subsec-sepofvar.html#video-sep-of-var",
  "type": "Figure",
  "number": "1.3.6",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "subsec-sep-exp",
  "level": "1",
  "url": "subsec-sep-exp.html",
  "type": "Section",
  "number": "1.3.3",
  "title": "Separation of Variables: Important Example with Exponentials",
  "body": " Separation of Variables: Important Example with Exponentials  Recall the following population modelling ODE: , which says the population grows at a rate twice the current population. We were previously able to guess and check some solutions to this. With separation of variables we will know, without a doubt, what all the solutions are.  First, why is this ODE separable? Recall that a separable ODE is one that can be written in the form: or with our current variables: But looking at , there doesn't seem to be any function! Think about what you could set and to be.   Why is this separable?  Functions can be constant! So and may end up being constant functions, where there is no explicit mention of the independent variable. In this case there are two natural choices:  and  and  Both choices work and will ultimately give the same general solution. In the example below, we will use choice (1): and .   Now that we have established it is separable, let's use separation of variables to solve it! Try as much as you can on your own, and check with the solution as you go. In this problem, there are some subtle things we take note of in step 4 when solving for .   An important observation with exponentials  Find the general solution to .   Follow the same five steps as in the previous example:  Find equilibrium solutions.  Separate the variables.  Integrate both sides.  Solve for .  Write the general solution.       Step 1: Find equilibrium solutions.   The only equilibrium solution is .   Work to solve for the equilibrium solution  In separable ODEs, we can always find the equilibrium solution by solving . Setting , we need :     Steps 2 and 3: Separate the variables and integrate.   You should arrive at . Nothing is too interesting in these two steps, but you can see the work below if you are unsure.   Work for steps 2 and 3  Assuming , divide both sides by and multiply by :   Then we integrate:    Don't forget the absolute value in !     Step 4: Solve for .   Starting from , we find: This step just involves standard exponential rules, so make sure you are comfortable with it! You can read the solution below if you are stuck.   Step 4a: Algebra to get .  Exponentiating both sides  and applying :    Finally, we get to the interesting part of this question! Solving for here in a nice form takes some work. But the result of this will be a big takeaway for solving similar questions with exponentials. Do your best to solve for here, and then definitely read solution below !!   Step 4b: Removing the absolute value and simplifying the constant  The steps involved here involve careful reasoning about the constant and exponential function. Do not fret, we wil summarize this all at the end of the page and make sure you are confident with similar questions going forward!  We are starting from: . Removing the absolute value introduces a : As varies over all real numbers, ranges over all positive numbers. That is, every positive number can be written as for some . Therefore attains all negative numbers. Together, ranges over all nonzero real numbers. So we replace with a new constant varying over all nonzero reals:    The graph of is always positive and ranges of all positive numbers as varies over all reals.      Step 5: Write the general solution.   From Steps 1 and 4, we have found: Notice that setting in gives , recovering the equilibrium solution. So the general solution can be written compactly as:     Step 4 involved some subtle reasoning, but this pattern comes up often in problems involving exponentials. So going forward we can skip many of the details, as discussed in the remark below.   A Useful Shortcut for Exponential Solutions  In particular, whenever you arrive at an expression of the form it always results in   Even more, this typically arises after applying separation of variables to an ODE of the form , where the only equilibrium solution is . So the general solution — combining the equilibrium solution with the explicit solution — can always be written compactly as:    The reasoning in Step 4 will come up again and again whenever you solve an ODE with an exponential solution. Getting comfortable with it now will save you a lot of trouble going forward! Let's quickly drive this point home with the following question.    Your friend is solving the ODE and has correctly found:  is the only equilibrium solution.  Separation of variables yields .  They need your help finishing! Which of the following is the correct general solution?     , where is any real number.  Exactly! ranges over all nonzero reals, and combining with the equilibrium solution means can be any real number.    , where is any nonzero real number.  Close — but don't forget the equilibrium solution ! Setting recovers it, so can be any real number.    .  Not quite — is always positive, so this misses all the negative solutions. Don't forget the when removing the absolute value!    or .  You remembered the equilibrium solution, but is always positive — this still misses all the negative solutions. The is needed when removing the absolute value!      This video goes through the content of this page.    "
},
{
  "id": "ex-separable-exp",
  "level": "2",
  "url": "subsec-sep-exp.html#ex-separable-exp",
  "type": "Example",
  "number": "1.3.1",
  "title": "An important observation with exponentials.",
  "body": " An important observation with exponentials  Find the general solution to .   Follow the same five steps as in the previous example:  Find equilibrium solutions.  Separate the variables.  Integrate both sides.  Solve for .  Write the general solution.       Step 1: Find equilibrium solutions.   The only equilibrium solution is .   Work to solve for the equilibrium solution  In separable ODEs, we can always find the equilibrium solution by solving . Setting , we need :     Steps 2 and 3: Separate the variables and integrate.   You should arrive at . Nothing is too interesting in these two steps, but you can see the work below if you are unsure.   Work for steps 2 and 3  Assuming , divide both sides by and multiply by :   Then we integrate:    Don't forget the absolute value in !     Step 4: Solve for .   Starting from , we find: This step just involves standard exponential rules, so make sure you are comfortable with it! You can read the solution below if you are stuck.   Step 4a: Algebra to get .  Exponentiating both sides  and applying :    Finally, we get to the interesting part of this question! Solving for here in a nice form takes some work. But the result of this will be a big takeaway for solving similar questions with exponentials. Do your best to solve for here, and then definitely read solution below !!   Step 4b: Removing the absolute value and simplifying the constant  The steps involved here involve careful reasoning about the constant and exponential function. Do not fret, we wil summarize this all at the end of the page and make sure you are confident with similar questions going forward!  We are starting from: . Removing the absolute value introduces a : As varies over all real numbers, ranges over all positive numbers. That is, every positive number can be written as for some . Therefore attains all negative numbers. Together, ranges over all nonzero real numbers. So we replace with a new constant varying over all nonzero reals:    The graph of is always positive and ranges of all positive numbers as varies over all reals.      Step 5: Write the general solution.   From Steps 1 and 4, we have found: Notice that setting in gives , recovering the equilibrium solution. So the general solution can be written compactly as:    "
},
{
  "id": "rem-exponential-shortcut",
  "level": "2",
  "url": "subsec-sep-exp.html#rem-exponential-shortcut",
  "type": "Remark",
  "number": "1.3.4",
  "title": "A Useful Shortcut for Exponential Solutions.",
  "body": " A Useful Shortcut for Exponential Solutions  In particular, whenever you arrive at an expression of the form it always results in   Even more, this typically arises after applying separation of variables to an ODE of the form , where the only equilibrium solution is . So the general solution — combining the equilibrium solution with the explicit solution — can always be written compactly as:   "
},
{
  "id": "ex-mc-general-solution",
  "level": "2",
  "url": "subsec-sep-exp.html#ex-mc-general-solution",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "",
  "body": "  Your friend is solving the ODE and has correctly found:  is the only equilibrium solution.  Separation of variables yields .  They need your help finishing! Which of the following is the correct general solution?     , where is any real number.  Exactly! ranges over all nonzero reals, and combining with the equilibrium solution means can be any real number.    , where is any nonzero real number.  Close — but don't forget the equilibrium solution ! Setting recovers it, so can be any real number.    .  Not quite — is always positive, so this misses all the negative solutions. Don't forget the when removing the absolute value!    or .  You remembered the equilibrium solution, but is always positive — this still misses all the negative solutions. The is needed when removing the absolute value!    "
},
{
  "id": "video-sep-exp",
  "level": "2",
  "url": "subsec-sep-exp.html#video-sep-exp",
  "type": "Figure",
  "number": "1.3.6",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "subsec-sep-minussign",
  "level": "1",
  "url": "subsec-sep-minussign.html",
  "type": "Section",
  "number": "1.3.4",
  "title": "Separation of Variables: Some Subtle Points",
  "body": " Separation of Variables: Some Subtle Points  Now we look at two more examples solving separable ODEs. This first example illustrates a subtle point when dealing with square roots. See if you can find the mistake in the work below!   A Subtle Moment in Solving an IVP   Let's solve the following initial value problem explicitly: , .  After separating variables and integrating, we arrive at:    Work for separation of variables  First, why is this separable? Notice that is already on the left with , so no dividing by is necessary — we can separate immediately by writing . There are no equilibrium solutions since setting gives , which can't hold for all .  Separating variables: Integrating both sides:    Now something interesting happens when we solve for explicitly. Let's take the square root of both sides: Applying the initial condition : But the square root of a number is always non-negative — so is impossible! We seem to have reached a contradiction. What went wrong?    What went wrong?   Identify the error in the working above.     We integrated incorrectly — the antiderivative of is not .  Not quite — is correct!    We forgot the when taking the square root.  Exactly! When solving , we should have written . The negative branch is what allows .    The initial condition is inconsistent with this ODE — no solution exists.  Not quite — a solution does exist! The issue is earlier in the working.       Now that you've identified the mistake, see if you can finish solving the problem correctly! Check with the solution below.    Corrected solution  The fix is to include the when taking the square root: Now applying : since is negative, we choose the negative branch: So the specific solution is:      So far, when solving a separable ODE we have always ended by solving explicitly for the dependent variable, arriving at something like or . But sometimes it is difficult or even impossible to isolate the dependent variable, and that's okay! An equation relating and that implicitly defines as a function of , without explicitly writing , is called an implicit solution . For example, could be an implicit solution to an ODE even though we haven't written by itself. In these cases, we simply stop once we have a clean implicit relation and call that the general solution.   Finding a General Implicit Solution   Find a general implicit solution to .    Separating the variables   We are trying to solve . Which of the following correctly separates the variables?         Correct! Multiplying both sides by gives , and then separating gives .         Not quite — check your separation step. You need to multiply both sides by first, not divide.         Not quite — the right-hand side still contains , which means the variables are not fully separated!      This ODE is not separable.    It is separable! Try rewriting the right-hand side by factoring out : . Now can you see how to separate?      How to separate the variables  First rewrite the right-hand side by combining the fractions: Now multiply both sides by : Integrating both sides:      Integrating and writing the implicit solution   After integrating both sides, we arrive at: This is the general implicit solution. See the dropdown for all the details.    Full working   Equilibrium solutions: None. To see why, rewrite the ODE as: In this form, and . Equilibrium solutions are found by setting , that is — but this has no solution. So there are no equilibrium solutions.   Separating and integrating:  Since solving explicitly for would require taking a square root (introducing a ) and the problem only asks for an implicit solution, we stop here. The general implicit solution is:       This video goes through the content of this page.    "
},
{
  "id": "explore-ivp-sqrt",
  "level": "2",
  "url": "subsec-sep-minussign.html#explore-ivp-sqrt",
  "type": "Exploration",
  "number": "1.3.1",
  "title": "A Subtle Moment in Solving an IVP.",
  "body": " A Subtle Moment in Solving an IVP   Let's solve the following initial value problem explicitly: , .  After separating variables and integrating, we arrive at:    Work for separation of variables  First, why is this separable? Notice that is already on the left with , so no dividing by is necessary — we can separate immediately by writing . There are no equilibrium solutions since setting gives , which can't hold for all .  Separating variables: Integrating both sides:    Now something interesting happens when we solve for explicitly. Let's take the square root of both sides: Applying the initial condition : But the square root of a number is always non-negative — so is impossible! We seem to have reached a contradiction. What went wrong?    What went wrong?   Identify the error in the working above.     We integrated incorrectly — the antiderivative of is not .  Not quite — is correct!    We forgot the when taking the square root.  Exactly! When solving , we should have written . The negative branch is what allows .    The initial condition is inconsistent with this ODE — no solution exists.  Not quite — a solution does exist! The issue is earlier in the working.       Now that you've identified the mistake, see if you can finish solving the problem correctly! Check with the solution below.    Corrected solution  The fix is to include the when taking the square root: Now applying : since is negative, we choose the negative branch: So the specific solution is:     "
},
{
  "id": "subsec-sep-minussign-4",
  "level": "2",
  "url": "subsec-sep-minussign.html#subsec-sep-minussign-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "implicit solution "
},
{
  "id": "ex-implicit-solution",
  "level": "2",
  "url": "subsec-sep-minussign.html#ex-implicit-solution",
  "type": "Example",
  "number": "1.3.1",
  "title": "Finding a General Implicit Solution.",
  "body": " Finding a General Implicit Solution   Find a general implicit solution to .    Separating the variables   We are trying to solve . Which of the following correctly separates the variables?         Correct! Multiplying both sides by gives , and then separating gives .         Not quite — check your separation step. You need to multiply both sides by first, not divide.         Not quite — the right-hand side still contains , which means the variables are not fully separated!      This ODE is not separable.    It is separable! Try rewriting the right-hand side by factoring out : . Now can you see how to separate?      How to separate the variables  First rewrite the right-hand side by combining the fractions: Now multiply both sides by : Integrating both sides:      Integrating and writing the implicit solution   After integrating both sides, we arrive at: This is the general implicit solution. See the dropdown for all the details.    Full working   Equilibrium solutions: None. To see why, rewrite the ODE as: In this form, and . Equilibrium solutions are found by setting , that is — but this has no solution. So there are no equilibrium solutions.   Separating and integrating:  Since solving explicitly for would require taking a square root (introducing a ) and the problem only asks for an implicit solution, we stop here. The general implicit solution is:     "
},
{
  "id": "video-sep-twomoreexamples",
  "level": "2",
  "url": "subsec-sep-minussign.html#video-sep-twomoreexamples",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "subsec-sep-completingsquare",
  "level": "1",
  "url": "subsec-sep-completingsquare.html",
  "type": "Section",
  "number": "1.3.5",
  "title": "Separation of Variables: Solving Explicitly Tricks",
  "body": " Separation of Variables: Solving Explicitly Tricks  The following example is a little harder to solve for explicitly, but it's certainly doable! It's designed to give you practice executing some things that can come up during separation of variables, so try each step on your own before revealing the solution. And as always, the video at the end is there if you get stuck!   Solving a Separable ODE Explicitly   Solve the following ODE explicitly: .    Step 1: Find equilibrium solutions   There are no equilibrium solutions.    Why?  Rewrite the ODE as , so . Setting gives , which has no solution. So there are no equilibrium solutions.     Step 2: Separate the variables   Multiplying both sides by and separating:      Step 3: Integrate both sides   Integrating the left-hand side: What technique should you use to evaluate ?    This integral can be solved with a -substitution. What do you think you should set equal to?    Work: evaluating the integral  Let , so and : So we now have:      Step 4: Solve for — recognizing the technique   We have . What technique lets us solve explicitly for ?     Complete the square on the left-hand side.  Exactly! Adding 4 to both sides gives , after which we can take a square root.    Divide both sides by .  Dividing by gives , which doesn't isolate .    Take the square root of both sides directly.  Not quite — the left-hand side is not a perfect square yet, so we can't take the square root directly. We need one more step first!    This cannot be solved explicitly for .  It can be solved explicitly! Think about what algebraic technique turns into a perfect square.     Working: completing the square  To complete the square on , we add to both sides (since ): where we absorbed the into on the right-hand side.     Step 5: Write the explicit solution   Starting from , which of the following is the correct explicit solution?      Correct! Taking the square root of both sides gives , and subtracting 2 gives the answer.     Almost — but don't forget the ! When taking the square root of both sides of , we get .     Check the sign! From , subtracting 2 from both sides gives , not .     Not quite — should be inside the square root, not outside. We are taking the square root of the entire right-hand side .     Working: taking the square root  Taking the square root of both sides of : Subtracting 2 from both sides:       This video goes through the content of this page.    "
},
{
  "id": "ex-explicit-complete-square",
  "level": "2",
  "url": "subsec-sep-completingsquare.html#ex-explicit-complete-square",
  "type": "Example",
  "number": "1.3.1",
  "title": "Solving a Separable ODE Explicitly.",
  "body": " Solving a Separable ODE Explicitly   Solve the following ODE explicitly: .    Step 1: Find equilibrium solutions   There are no equilibrium solutions.    Why?  Rewrite the ODE as , so . Setting gives , which has no solution. So there are no equilibrium solutions.     Step 2: Separate the variables   Multiplying both sides by and separating:      Step 3: Integrate both sides   Integrating the left-hand side: What technique should you use to evaluate ?    This integral can be solved with a -substitution. What do you think you should set equal to?    Work: evaluating the integral  Let , so and : So we now have:      Step 4: Solve for — recognizing the technique   We have . What technique lets us solve explicitly for ?     Complete the square on the left-hand side.  Exactly! Adding 4 to both sides gives , after which we can take a square root.    Divide both sides by .  Dividing by gives , which doesn't isolate .    Take the square root of both sides directly.  Not quite — the left-hand side is not a perfect square yet, so we can't take the square root directly. We need one more step first!    This cannot be solved explicitly for .  It can be solved explicitly! Think about what algebraic technique turns into a perfect square.     Working: completing the square  To complete the square on , we add to both sides (since ): where we absorbed the into on the right-hand side.     Step 5: Write the explicit solution   Starting from , which of the following is the correct explicit solution?      Correct! Taking the square root of both sides gives , and subtracting 2 gives the answer.     Almost — but don't forget the ! When taking the square root of both sides of , we get .     Check the sign! From , subtracting 2 from both sides gives , not .     Not quite — should be inside the square root, not outside. We are taking the square root of the entire right-hand side .     Working: taking the square root  Taking the square root of both sides of : Subtracting 2 from both sides:     "
},
{
  "id": "video-sep-completesquare",
  "level": "2",
  "url": "subsec-sep-completingsquare.html#video-sep-completesquare",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " This video goes through the content of this page.   "
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
