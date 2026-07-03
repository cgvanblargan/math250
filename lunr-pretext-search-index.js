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
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  I have designed these notes to get you thinking and working through the material as actively as possible.  Within each section, there is a separate page for each subsection. Each page is intentionally sized so you can complete it in one short sitting, take a break, and then move on to the next subsection page when you are ready!  Here is how you should work through each page:  Read through the content and work through the examples, revealing hints and solutions as you go.  Engage with the interactive graphs and checkpoint questions. Don't skip these!  Once you have worked through the page, watch the video (generally 5-8 minutes long) at the bottom to reinforce the ideas and deepen your understanding.     Note. Please read through each page and work through the examples before watching the corresponding lecture video. Learning mathematics requires thinking actively about the material, and watching me explain something on a video is a passive experience. Even if the video makes perfect sense while you're watching, you will retain far less than if you had wrestled with the ideas yourself first.  "
},
{
  "id": "sec-what-is-de",
  "level": "1",
  "url": "sec-what-is-de.html",
  "type": "Section",
  "number": "1.1.1",
  "title": "What is a Differential Equation?",
  "body": " What is a Differential Equation?  Derivatives are used to model changing situations! And things are changing all around us!   Setting Up a Differential Equation  Come up with an equation that models the following situation: The rate of change of a population (where is time in years) is proportional to the current population. The constant of proportionality is 3.    The rate of change of is the derivative with respect to time, which is .  \"The rate of change of is...\" translates to What can you put on the right-hand side of the equation to represent that it is proportional to the current population, where the constant of proportionality is 3?    The answer is . The left-hand side denotes the rate of change of the population . The right-hand side, , expresses a quantity that is proportional to , with a proportionality constant of 3.    In the previous example, you just set up a differential equation . We often want to take this a step further and find a solution. In this case, that would be a population function that satisfies the conditions of the previous example. But first, let's warm up with a simpler question!    Which of the following is a solution to ?  Notice this says the derivative of is itself. What famous function has this property?       Correct! The derivative of is itself, so .        Not quite — the derivative of is , not itself.       Not quite — the derivative of is , not .       Not quite — the derivative of is , not itself.      Now let's try the original question. If it feels tricky, that's okay, we will learn systematic methods for solving ODEs later in the course. For now, it's fun to play around on your own for a minute before revealing the solution!   Solving a Differential Equation  Can you think of a function that solves ?   Recall from the previous checkpoint that solves . How can we modify this function to solve ? Think about the chain rule!    Let's check . By the chain rule: So solves !    This is not the only solution to . Can you think of any others? We will reveal the answer on the next page!  The population example illustrates a key idea: when modelling situations that change over time, we naturally arrive at equations involving derivatives. This is the essence of a differential equation, which we now define formally.   Differential Equation   A differential equation is an equation involving a function , its derivatives , and an independent variable .  The order of a differential equation is the highest derivative appearing.    A differential equation involving only derivatives with respect to one variable (as opposed to partial derivatives) is called an ordinary differential equation (ODE) .  Here are three examples of ODEs, along with their orders:    Notation  We adopt both the prime notation and Leibniz notation to denote the derivative of with respect to . These are equivalent and will be used interchangeably throughout.  In , is the independent variable and is the dependent variable . The actual letters we use for the variables will vary. In the last example, , it is implied that is the dependent variable and is the independent variable.    This video goes through the content of this page.     "
},
{
  "id": "ex-setup-population-de",
  "level": "2",
  "url": "sec-what-is-de.html#ex-setup-population-de",
  "type": "Example",
  "number": "1.1.1",
  "title": "Setting Up a Differential Equation.",
  "body": " Setting Up a Differential Equation  Come up with an equation that models the following situation: The rate of change of a population (where is time in years) is proportional to the current population. The constant of proportionality is 3.    The rate of change of is the derivative with respect to time, which is .  \"The rate of change of is...\" translates to What can you put on the right-hand side of the equation to represent that it is proportional to the current population, where the constant of proportionality is 3?    The answer is . The left-hand side denotes the rate of change of the population . The right-hand side, , expresses a quantity that is proportional to , with a proportionality constant of 3.   "
},
{
  "id": "ex-mc-solve-dPdt-P",
  "level": "2",
  "url": "sec-what-is-de.html#ex-mc-solve-dPdt-P",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "",
  "body": "  Which of the following is a solution to ?  Notice this says the derivative of is itself. What famous function has this property?       Correct! The derivative of is itself, so .        Not quite — the derivative of is , not itself.       Not quite — the derivative of is , not .       Not quite — the derivative of is , not itself.     "
},
{
  "id": "ex-solve-population-de",
  "level": "2",
  "url": "sec-what-is-de.html#ex-solve-population-de",
  "type": "Example",
  "number": "1.1.3",
  "title": "Solving a Differential Equation.",
  "body": " Solving a Differential Equation  Can you think of a function that solves ?   Recall from the previous checkpoint that solves . How can we modify this function to solve ? Think about the chain rule!    Let's check . By the chain rule: So solves !   "
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
  "id": "sec-what-is-de-11",
  "level": "2",
  "url": "sec-what-is-de.html#sec-what-is-de-11",
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
  "body": " Notation  We adopt both the prime notation and Leibniz notation to denote the derivative of with respect to . These are equivalent and will be used interchangeably throughout.  In , is the independent variable and is the dependent variable . The actual letters we use for the variables will vary. In the last example, , it is implied that is the dependent variable and is the independent variable.  "
},
{
  "id": "video-what-is-de",
  "level": "2",
  "url": "sec-what-is-de.html#video-what-is-de",
  "type": "Figure",
  "number": "1.1.6",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-gensolns-initialvalues",
  "level": "1",
  "url": "sec-gensolns-initialvalues.html",
  "type": "Section",
  "number": "1.1.2",
  "title": "General Solutions and Initial Value Problems",
  "body": " General Solutions and Initial Value Problems  On the previous page, we found that one solution to is . In fact, all possible solutions, called the general solution , are of the form , where is any real number. Can you see why this is always a solution? Give it a think before revealing below!   Why is always a solution?  On the previous page we already showed that is a solution using the chain rule. It turns out the same argument works with any constant in front. Let's check with as an example: The constant just comes along for the ride, it doesn't affect the chain rule calculation at all. So by the same reasoning, for any real number : Therefore is a solution for any real number .   We will justify why this captures all solutions later when we study separable ODEs. For now, this idea generalizes naturally to the family of ODEs .   Solution to the Population Growth Model  A simple model of a population is that the rate of change is proportional to the population. So satisfies: The general solution to this differential equation is: where varying over any real number for gives all possible solutions.     What is the general solution to ?     , where is any real number.  Correct! This matches the general solution with .    , where is any real number.  Not quite — check the exponent. The ODE is , so , giving not .     Not quite — this is a specific solution, not the general one. The general solution has an arbitrary constant .     Not quite — the belongs in the exponent! The general solution is .     In the general solution , each value of gives a different specific solution — together they form a whole family of curves. For instance:   Use the slider below to explore how the value of affects the solution curve.   Solutions for varying values of .    Notice how the red dot representing moves as you vary . This is no coincidence: since , the initial value of the population is exactly . Specifying an initial condition like pins down exactly which curve we are on, giving us a specific solution .   Initial Value Problem   An initial value problem (IVP) consists of a differential equation together with one or more initial conditions. The goal is to find a specific solution that satisfies both the ODE and the initial condition(s).    Now we will get some practice finding a specific solution to an initial value problem!   Applying an Initial Condition  We have seen that the general solution to is . What is the specific solution such that the initial population at is ?     For , substitute wherever you see and wherever you see in . Then solve for .  You will need to use the fact that .      We substitute into the general solution: So , and the specific solution is:      This video goes through the content of this page.     "
},
{
  "id": "sec-gensolns-initialvalues-2",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#sec-gensolns-initialvalues-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general solution "
},
{
  "id": "obs-general-solution-population",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#obs-general-solution-population",
  "type": "Observation",
  "number": "1.1.1",
  "title": "Solution to the Population Growth Model.",
  "body": " Solution to the Population Growth Model  A simple model of a population is that the rate of change is proportional to the population. So satisfies: The general solution to this differential equation is: where varying over any real number for gives all possible solutions.  "
},
{
  "id": "ex-mc-general-soln-population",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#ex-mc-general-soln-population",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "",
  "body": "  What is the general solution to ?     , where is any real number.  Correct! This matches the general solution with .    , where is any real number.  Not quite — check the exponent. The ODE is , so , giving not .     Not quite — this is a specific solution, not the general one. The general solution has an arbitrary constant .     Not quite — the belongs in the exponent! The general solution is .    "
},
{
  "id": "sec-gensolns-initialvalues-7",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#sec-gensolns-initialvalues-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "specific solution "
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
  "id": "sec-gensolns-initialvalues-11",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#sec-gensolns-initialvalues-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial condition specific solution "
},
{
  "id": "def-initial-value-problem",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#def-initial-value-problem",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Initial Value Problem.",
  "body": " Initial Value Problem   An initial value problem (IVP) consists of a differential equation together with one or more initial conditions. The goal is to find a specific solution that satisfies both the ODE and the initial condition(s).   "
},
{
  "id": "ex-initial-condition",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#ex-initial-condition",
  "type": "Example",
  "number": "1.1.5",
  "title": "Applying an Initial Condition.",
  "body": " Applying an Initial Condition  We have seen that the general solution to is . What is the specific solution such that the initial population at is ?     For , substitute wherever you see and wherever you see in . Then solve for .  You will need to use the fact that .      We substitute into the general solution: So , and the specific solution is:    "
},
{
  "id": "video-general-solutions-ivp",
  "level": "2",
  "url": "sec-gensolns-initialvalues.html#video-general-solutions-ivp",
  "type": "Figure",
  "number": "1.1.6",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-setting-up-des",
  "level": "1",
  "url": "sec-setting-up-des.html",
  "type": "Section",
  "number": "1.1.3",
  "title": "Setting Up Differential Equations",
  "body": " Setting Up Differential Equations  Recall that in our very first example, we set up the ODE by:  Interpreting \"the rate of change of the population\" as the derivative .  Writing as being proportional to the population with proportionality constant of 3.   Translating a verbal description into a derivative expression is the key to setting up any ODE.  Note that when a proportionality constant is not specified, we introduce a constant, such as , to represent the unspecified constant of proportionality (as opposed to a specific number like 3 in the population example above).   Setting Up Differential Equations   For each of the following, translate the verbal description into a differential equation. Try each one on your own before checking the solution!     The rate of change of a velocity of a car is proportional to the cube of . Which of the following correctly models this situation?       Correct! The rate of change of is , and proportional to the cube of means the RHS is .       Not quite — \"the rate of change of \" means we need a derivative on the left-hand side, not just itself.       Almost — but since the proportionality constant is unspecified, we need a out front. So .       Not quite — be careful with the wording! \"The cube of \" means , not the cube root .         Newton's law of cooling states that the time rate of change of a temperature of an object is proportional to the difference between and the surrounding temperature . Set up the ODE.    Two key quantities appear in this problem:  The rate of change of the temperature of the object is .  The difference between the temperature of the object and the surrounding temperature is .  These two quantities must be proportional to each other!    The ODE is:      The derivative of a function can also be understood visually: it gives the slope of the graph of the function at each point on the curve. More precisely, the tangent line at a point is the line passing through with slope . As we move along the curve, the slope of the tangent line changes, and captures exactly how it changes.   The tangent line to at the point . As you move the slider, notice how the slope changes at each point on the curve.    Now use this idea about tangent lines to set-up the ODE in the following example!   Setting Up an ODE from a Geometric Description  The slope of the tangent line of a graph of at the point is equal to the square root of the product of and . Set up the ODE.   The slope of the tangent line to at the point is . This is your left-hand side!     The left-hand side is the slope of the tangent line, and the right-hand side is the square root of the product of and .     This video goes through the content of this page.     "
},
{
  "id": "act-setup-des",
  "level": "2",
  "url": "sec-setting-up-des.html#act-setup-des",
  "type": "Activity",
  "number": "1.1.1",
  "title": "Setting Up Differential Equations.",
  "body": " Setting Up Differential Equations   For each of the following, translate the verbal description into a differential equation. Try each one on your own before checking the solution!     The rate of change of a velocity of a car is proportional to the cube of . Which of the following correctly models this situation?       Correct! The rate of change of is , and proportional to the cube of means the RHS is .       Not quite — \"the rate of change of \" means we need a derivative on the left-hand side, not just itself.       Almost — but since the proportionality constant is unspecified, we need a out front. So .       Not quite — be careful with the wording! \"The cube of \" means , not the cube root .         Newton's law of cooling states that the time rate of change of a temperature of an object is proportional to the difference between and the surrounding temperature . Set up the ODE.    Two key quantities appear in this problem:  The rate of change of the temperature of the object is .  The difference between the temperature of the object and the surrounding temperature is .  These two quantities must be proportional to each other!    The ODE is:     "
},
{
  "id": "fig-tangent-line",
  "level": "2",
  "url": "sec-setting-up-des.html#fig-tangent-line",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " The tangent line to at the point . As you move the slider, notice how the slope changes at each point on the curve.   "
},
{
  "id": "ex-setup-slope",
  "level": "2",
  "url": "sec-setting-up-des.html#ex-setup-slope",
  "type": "Example",
  "number": "1.1.2",
  "title": "Setting Up an ODE from a Geometric Description.",
  "body": " Setting Up an ODE from a Geometric Description  The slope of the tangent line of a graph of at the point is equal to the square root of the product of and . Set up the ODE.   The slope of the tangent line to at the point is . This is your left-hand side!     The left-hand side is the slope of the tangent line, and the right-hand side is the square root of the product of and .   "
},
{
  "id": "video-setting-up-des",
  "level": "2",
  "url": "sec-setting-up-des.html#video-setting-up-des",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-verifying-solutions",
  "level": "1",
  "url": "sec-verifying-solutions.html",
  "type": "Section",
  "number": "1.1.4",
  "title": "Verifying Solutions",
  "body": " Verifying Solutions  Sometimes we are given proposed solutions to ODEs, and we must check whether they actually solve the ODE. To verify that is a solution to a differential equation, you must plug in and its relevant derivatives into both sides of the equation and verify they equal each other.   Verifying a Solution  Verify that is a solution to .   Compute . Then plug the expressions for and into the equation and check if the left and right sides are equal.    We compute:      Explanation: Computing  We find by using the chain rule on , which is a composition of (outside function) with (the inside function). The derivative of the inside function equals , which is why this expression is multiplied out in front when differentiating.      Plugging into : Therefore is a solution.    To get a better overall feel for what just took place in this example, play around with the slider in the graph below!   The family of solutions to the ODE . Use the slider to change and observe that no matter what value you choose, the verification always gives LHS = 0 = RHS!    It's now try to practice this a bit more! Try each of the following examples on your own, and then check with the notes or video.   Practice: Verifying Solutions   Try each of the following on your own before checking the solution. Use the hints if you get stuck.     Verify that is a solution to . Then find the specific solution given the initial condition .    To compute , recall that the derivative of is , and use the chain rule. The outside function is and the inside function is .    To find the specific solution: plug in wherever you see and wherever you see in .    We have , so by the chain rule:   Plugging into both sides of the ODE: Using the Pythagorean identity , the RHS simplifies:   For the specific solution, apply :   Finding   So the specific solution is .    Note: technically there are other values of (namely ), but they ultimately give the same function , as the tangent function is -periodic.       For what values of is a solution to ?    Start by verifying as usual. There will be an additional step to solve for the values of that ensure LHS = RHS.     Verify when is a solution.   First note that if , then .   Computing  Differentiating twice via the chain rule:    Plug and into and solve for . Try it out and check with the solution below!   Solving for      So is a solution. (Note: since cosine is an even function, so these are the same solution.)     Check Your Understanding   Let's explore the previous example a bit more. Which of the following are solutions to ? Select all that apply.       Correct! You can verify: . See the remark below for why this is no coincidence!       Correct! This is exactly what we just found above with .       Correct! And this is no coincidence — see the remark below for why combinations like this always work.       Not a solution. If , then , not .       Not a solution. If , then , not . This corresponds to , but we need .        Find all so that is a solution to .    After substituting , , and into the equation, what can you divide by to simplify?    Let . Then by the chain rule: Plugging into : Dividing both sides by (which we can do since is never zero): Notice there is no more variable — we just have a quadratic in ! Factoring: So and are both solutions.      Other Solutions to  In the previous activity we found that is a solution to . But there are others! In fact, is also a solution: More generally, is a solution for any constants . This turns out be quite fundamental for this course, and we will explore this later on!    This video goes through the content of this page.     "
},
{
  "id": "ex-verify-solution",
  "level": "2",
  "url": "sec-verifying-solutions.html#ex-verify-solution",
  "type": "Example",
  "number": "1.1.1",
  "title": "Verifying a Solution.",
  "body": " Verifying a Solution  Verify that is a solution to .   Compute . Then plug the expressions for and into the equation and check if the left and right sides are equal.    We compute:      Explanation: Computing  We find by using the chain rule on , which is a composition of (outside function) with (the inside function). The derivative of the inside function equals , which is why this expression is multiplied out in front when differentiating.      Plugging into : Therefore is a solution.   "
},
{
  "id": "fig-verify-slider",
  "level": "2",
  "url": "sec-verifying-solutions.html#fig-verify-slider",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " The family of solutions to the ODE . Use the slider to change and observe that no matter what value you choose, the verification always gives LHS = 0 = RHS!   "
},
{
  "id": "act-verifying-solutions",
  "level": "2",
  "url": "sec-verifying-solutions.html#act-verifying-solutions",
  "type": "Activity",
  "number": "1.1.1",
  "title": "Practice: Verifying Solutions.",
  "body": " Practice: Verifying Solutions   Try each of the following on your own before checking the solution. Use the hints if you get stuck.     Verify that is a solution to . Then find the specific solution given the initial condition .    To compute , recall that the derivative of is , and use the chain rule. The outside function is and the inside function is .    To find the specific solution: plug in wherever you see and wherever you see in .    We have , so by the chain rule:   Plugging into both sides of the ODE: Using the Pythagorean identity , the RHS simplifies:   For the specific solution, apply :   Finding   So the specific solution is .    Note: technically there are other values of (namely ), but they ultimately give the same function , as the tangent function is -periodic.       For what values of is a solution to ?    Start by verifying as usual. There will be an additional step to solve for the values of that ensure LHS = RHS.     Verify when is a solution.   First note that if , then .   Computing  Differentiating twice via the chain rule:    Plug and into and solve for . Try it out and check with the solution below!   Solving for      So is a solution. (Note: since cosine is an even function, so these are the same solution.)     Check Your Understanding   Let's explore the previous example a bit more. Which of the following are solutions to ? Select all that apply.       Correct! You can verify: . See the remark below for why this is no coincidence!       Correct! This is exactly what we just found above with .       Correct! And this is no coincidence — see the remark below for why combinations like this always work.       Not a solution. If , then , not .       Not a solution. If , then , not . This corresponds to , but we need .        Find all so that is a solution to .    After substituting , , and into the equation, what can you divide by to simplify?    Let . Then by the chain rule: Plugging into : Dividing both sides by (which we can do since is never zero): Notice there is no more variable — we just have a quadratic in ! Factoring: So and are both solutions.    "
},
{
  "id": "rem-other-solutions",
  "level": "2",
  "url": "sec-verifying-solutions.html#rem-other-solutions",
  "type": "Remark",
  "number": "1.1.3",
  "title": "Other Solutions to <span class=\"process-math\">\\(y'' = -4y\\)<\/span>.",
  "body": " Other Solutions to  In the previous activity we found that is a solution to . But there are others! In fact, is also a solution: More generally, is a solution for any constants . This turns out be quite fundamental for this course, and we will explore this later on!  "
},
{
  "id": "video-verifying-solns",
  "level": "2",
  "url": "sec-verifying-solutions.html#video-verifying-solns",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-equilibrium-solutions",
  "level": "1",
  "url": "sec-equilibrium-solutions.html",
  "type": "Section",
  "number": "1.1.5",
  "title": "Equilibrium Solutions",
  "body": " Equilibrium Solutions  We now take a brief detour to discuss equilibrium solutions. This is a simple but important concept that will come up throughout the course.   Equilibrium Solution   An equilibrium solution to a differential equation is a constant solution. That is, for all , where is a solution to the ODE.     A function is constant if and only if for all . We will use this fact frequently when finding equilibrium solutions.   As a quick example, consider the differential equation , whose general solution is . Use the slider below to explore how different values of give different specific solutions. Can you find the value of that makes a constant function?   Solutions for varying values of . Try to find the equilibrium solution!    Notice that these solutions are not constant in general. However, setting gives , which is constant, and therefore the only equilibrium solution.  Understanding equilibrium solutions gives us useful insight into the overall behavior of solutions to an ODE. Later in the course we will explore this in more depth. For now, let's see how equilibrium solutions arise naturally in the context of Newton's law of cooling.   Newton's Law of Cooling   Recall that Newton's law of cooling states that , where is the temperature of an object, is the surrounding temperature, and is a positive constant. Suppose the surrounding temperature is F, so the ODE becomes: What is the equilibrium solution? Justify this both intuitively and algebraically.    Intuitive Justification   What value of ensures the object never changes temperature?    If the surrounding temperature is F, what does the temperature of the object need to be so that it doesn't change?    An object stops changing temperature once it matches the temperature of its surroundings. If the surrounding temperature is F and the temperature of the object, , is F, then the temperature of the object remains at F. So is the equilibrium solution.     Algebraic Justification   Find the equilibrium solution algebraically. We haven't done this yet, so I expect most will need the hint to start!    We want to find for what value of the constant function is a solution. Notice that this implies .  This really is the same process as \"verifying\" a solution. But here, you sub in and . Then you solve for .  Substitute both expressions into the ODE and solve for .    For a constant solution , we have . Substituting into the ODE: Therefore is the equilibrium solution.       Find equilibrium solutions to ?  Use the same method as the algebraic solution to the Newton's law of Cooling problem above.       Correct! Setting gives . Plug into the ODE and solve:        Not quite. Try setting and , then substitute into the ODE and solve for .       Not quite. Try setting and , then substitute into the ODE and solve for .     There are no equilibrium solutions.   There is one! Try setting and , then substitute into the ODE and solve for .      Let's now practice finding equilibrium solutions for more complicated differential equations. Notice that finding the general solution in the following examples would be quite difficult, but substituting and often reduces the problem to a simple algebraic equation in .   Practice: Finding Equilibrium Solutions   Try each of the following on your own before checking the solution. Try it on your own first!      Find all equilibrium solutions, , to the differential equation     Since we are looking for a constant solution, we set , which gives: Substituting into the differential equation: So or , giving two equilibrium solutions:       Find all equilibrium solutions to the differential equation     Setting , so and , and substituting: But must be a constant, and is not constant. Therefore there are no equilibrium solutions .      Equilibrium solutions do not always exist, as the last example shows. Recall that we are looking for a constant such that satisfies the ODE. If the algebra forces to equal a non-constant expression, then no equilibrium solution exists.   Let's drive this point home with a quick checkpoint!    Consider the ODE . Setting and and substituting: What, if any, are the equilibrium solutions?       Close, but is not a constant function! An equilibrium solution must be constant for all values of .       Not quite. Try plugging into the ODE: , which is not true for all .       This is a common mistake! We solved for instead of . We need to be a constant — solving for doesn't give us an equilibrium solution.     There are no equilibrium solutions.   Correct! We need to be a constant, but depends on . So no constant function satisfies this ODE.       This video goes through the content of this page.     "
},
{
  "id": "def-equilibrium-solution",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#def-equilibrium-solution",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Equilibrium Solution.",
  "body": " Equilibrium Solution   An equilibrium solution to a differential equation is a constant solution. That is, for all , where is a solution to the ODE.   "
},
{
  "id": "note-equilibrium-derivative",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#note-equilibrium-derivative",
  "type": "Note",
  "number": "1.1.2",
  "title": "",
  "body": " A function is constant if and only if for all . We will use this fact frequently when finding equilibrium solutions.  "
},
{
  "id": "fig-equilibrium-slider",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#fig-equilibrium-slider",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " Solutions for varying values of . Try to find the equilibrium solution!   "
},
{
  "id": "ex-newtons-cooling-equilibrium",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#ex-newtons-cooling-equilibrium",
  "type": "Example",
  "number": "1.1.4",
  "title": "Newton’s Law of Cooling.",
  "body": " Newton's Law of Cooling   Recall that Newton's law of cooling states that , where is the temperature of an object, is the surrounding temperature, and is a positive constant. Suppose the surrounding temperature is F, so the ODE becomes: What is the equilibrium solution? Justify this both intuitively and algebraically.    Intuitive Justification   What value of ensures the object never changes temperature?    If the surrounding temperature is F, what does the temperature of the object need to be so that it doesn't change?    An object stops changing temperature once it matches the temperature of its surroundings. If the surrounding temperature is F and the temperature of the object, , is F, then the temperature of the object remains at F. So is the equilibrium solution.     Algebraic Justification   Find the equilibrium solution algebraically. We haven't done this yet, so I expect most will need the hint to start!    We want to find for what value of the constant function is a solution. Notice that this implies .  This really is the same process as \"verifying\" a solution. But here, you sub in and . Then you solve for .  Substitute both expressions into the ODE and solve for .    For a constant solution , we have . Substituting into the ODE: Therefore is the equilibrium solution.    "
},
{
  "id": "ex-mc-equilibrium-checkpoint",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#ex-mc-equilibrium-checkpoint",
  "type": "Checkpoint",
  "number": "1.1.5",
  "title": "",
  "body": "  Find equilibrium solutions to ?  Use the same method as the algebraic solution to the Newton's law of Cooling problem above.       Correct! Setting gives . Plug into the ODE and solve:        Not quite. Try setting and , then substitute into the ODE and solve for .       Not quite. Try setting and , then substitute into the ODE and solve for .     There are no equilibrium solutions.   There is one! Try setting and , then substitute into the ODE and solve for .     "
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
  "id": "ex-mc-no-equilibrium",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#ex-mc-no-equilibrium",
  "type": "Checkpoint",
  "number": "1.1.7",
  "title": "",
  "body": "  Consider the ODE . Setting and and substituting: What, if any, are the equilibrium solutions?       Close, but is not a constant function! An equilibrium solution must be constant for all values of .       Not quite. Try plugging into the ODE: , which is not true for all .       This is a common mistake! We solved for instead of . We need to be a constant — solving for doesn't give us an equilibrium solution.     There are no equilibrium solutions.   Correct! We need to be a constant, but depends on . So no constant function satisfies this ODE.     "
},
{
  "id": "video-equilibrium-solutions",
  "level": "2",
  "url": "sec-equilibrium-solutions.html#video-equilibrium-solutions",
  "type": "Figure",
  "number": "1.1.8",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "exercises-1-1",
  "level": "1",
  "url": "exercises-1-1.html",
  "type": "Exercises",
  "number": "1.1.6",
  "title": "Exercises for Section 1.1",
  "body": " Exercises for Section 1.1  Below are the exercises to complete for this section. You can check many of the answers in the \"backmatter\" of these notes. The necessary calculus pre-reqs for these exercises are listed at the bottom of this page.    Write a differential equation where the solution has the property that the slope of its graph at any point equals the sum of and .         Write a differential equation where the solution has the property that the tangent line to its graph at any point passes through the point .    You will need to use the fact that the slope of any line is .  Compute the slope of the tangent line: one of the points it passes through is , what other point does the tangent line always pass through? Refer to the setting up ODEs example in the notes.         The temperature of a cup of coffee changes at a rate proportional to the difference between the ambient air temperature and the coffee's current temperature. Suppose the ambient air temperature is F. Write a differential equation modeling .     Or equivalently: (because is not specified as a positive or negative constant, either is fine.)      Complete parts (a) and (b).     Verify that is a solution of .           Find the value of satisfying the initial condition .    .       Verify by substitution that and are both solutions of:     For :    For :        Verify by substitution that is a solution of:      and        Find all integer values of for which is a solution to:     and .      Find all integer values of for which is a solution to:     .      Find all values of the constant for which is a solution of:     and .      Find all equilibrium (constant) solutions to the equation below. That is, find all values of for which is a solution.     No equilibrium solutions.      Find all equilibrium (constant) solutions to the equation below. That is, find all values of for which is a solution.     and .    The following calculus facts will be useful throughout these exercises. Feel free to use them as a quick reference!   Calculus Prerequisites       Power Rule:     Example   . We multiply by the exponent and reduce the power by 1.      Exponential Rule:  , and more generally by the chain rule:    Example   . The chain rule brings down the inner derivative as a factor.      Chain Rule:     Example   . Here and , so and .      Product Rule:     Example   .      Trig Derivatives:  and       "
},
{
  "id": "ex-1-1-1",
  "level": "2",
  "url": "exercises-1-1.html#ex-1-1-1",
  "type": "Exercise",
  "number": "1.1.6.1",
  "title": "",
  "body": "  Write a differential equation where the solution has the property that the slope of its graph at any point equals the sum of and .      "
},
{
  "id": "ex-1-1-2",
  "level": "2",
  "url": "exercises-1-1.html#ex-1-1-2",
  "type": "Exercise",
  "number": "1.1.6.2",
  "title": "",
  "body": "  Write a differential equation where the solution has the property that the tangent line to its graph at any point passes through the point .    You will need to use the fact that the slope of any line is .  Compute the slope of the tangent line: one of the points it passes through is , what other point does the tangent line always pass through? Refer to the setting up ODEs example in the notes.      "
},
{
  "id": "ex-1-1-3",
  "level": "2",
  "url": "exercises-1-1.html#ex-1-1-3",
  "type": "Exercise",
  "number": "1.1.6.3",
  "title": "",
  "body": "  The temperature of a cup of coffee changes at a rate proportional to the difference between the ambient air temperature and the coffee's current temperature. Suppose the ambient air temperature is F. Write a differential equation modeling .     Or equivalently: (because is not specified as a positive or negative constant, either is fine.)   "
},
{
  "id": "ex-1-1-4",
  "level": "2",
  "url": "exercises-1-1.html#ex-1-1-4",
  "type": "Exercise",
  "number": "1.1.6.4",
  "title": "",
  "body": "  Complete parts (a) and (b).     Verify that is a solution of .           Find the value of satisfying the initial condition .    .    "
},
{
  "id": "ex-1-1-5",
  "level": "2",
  "url": "exercises-1-1.html#ex-1-1-5",
  "type": "Exercise",
  "number": "1.1.6.5",
  "title": "",
  "body": "  Verify by substitution that and are both solutions of:     For :    For :     "
},
{
  "id": "ex-1-1-6",
  "level": "2",
  "url": "exercises-1-1.html#ex-1-1-6",
  "type": "Exercise",
  "number": "1.1.6.6",
  "title": "",
  "body": "  Verify by substitution that is a solution of:      and     "
},
{
  "id": "ex-1-1-7",
  "level": "2",
  "url": "exercises-1-1.html#ex-1-1-7",
  "type": "Exercise",
  "number": "1.1.6.7",
  "title": "",
  "body": "  Find all integer values of for which is a solution to:     and .   "
},
{
  "id": "ex-1-1-8",
  "level": "2",
  "url": "exercises-1-1.html#ex-1-1-8",
  "type": "Exercise",
  "number": "1.1.6.8",
  "title": "",
  "body": "  Find all integer values of for which is a solution to:     .   "
},
{
  "id": "ex-1-1-9",
  "level": "2",
  "url": "exercises-1-1.html#ex-1-1-9",
  "type": "Exercise",
  "number": "1.1.6.9",
  "title": "",
  "body": "  Find all values of the constant for which is a solution of:     and .   "
},
{
  "id": "ex-1-1-10",
  "level": "2",
  "url": "exercises-1-1.html#ex-1-1-10",
  "type": "Exercise",
  "number": "1.1.6.10",
  "title": "",
  "body": "  Find all equilibrium (constant) solutions to the equation below. That is, find all values of for which is a solution.     No equilibrium solutions.   "
},
{
  "id": "ex-1-1-11",
  "level": "2",
  "url": "exercises-1-1.html#ex-1-1-11",
  "type": "Exercise",
  "number": "1.1.6.11",
  "title": "",
  "body": "  Find all equilibrium (constant) solutions to the equation below. That is, find all values of for which is a solution.     and .   "
},
{
  "id": "sec-integrating-to-get-solutions",
  "level": "1",
  "url": "sec-integrating-to-get-solutions.html",
  "type": "Section",
  "number": "1.2.1",
  "title": "Integrating to solve <span class=\"process-math\">\\(\\frac{dy}{dx} = f(x)\\)<\/span>",
  "body": " Integrating to solve  A simple but important special case of a first-order ODE is when the right-hand side does not involve the dependent variable. That is, the equation is in the form:   Let's explore this with the following example.   A Simple First-Order ODE  Suppose . What does equal?   Think about what operation undoes differentiation. What function has derivative equal to ?    Notice that is a solution since its derivative is . That is, we found an antiderivative of .  Recall that adding any constant gives the general antiderivative , which is the general solution to . So we simply took the indefinite integral of !    The graph with an interactive slider below demonstrates what is happening in this example.   Solutions to of the form . As you drag the slider, notice that changing shifts the curve vertically, but the tangent line at always has slope , demonstrating that the derivative is the same for every solution in the family!    Alright, well that turned out to be pretty easy once we understood what the differential equation was saying! We generalize this idea in the following observation.   For a differential equation in the form the general solution is simply:    Let's use this principle in the following examples. Try them on your own first!   Practice: Integrating to Find Solutions   Try each of the following on your own before checking the solution. Try it on your own first!      Solve with initial condition .    Integrating both sides: Applying the initial condition : So the specific solution is: We can verify:  and  .      Find the general solution to .    Notice the left-hand side involves a second derivative, which we can write as . Apply the same integration principle to get , then integrate again.    Since , we integrate twice.   First integration: Starting from :   Reveal      Now that we have , we integrate again.   Second integration: Starting from :   Reveal      You can verify that the general solution satisfies .      Notice in the last example we obtained two constants of integration and from integrating twice.   We now have a solid understanding of solving ODEs in the form . Does this mean we've solved the entire course? Not quite, ODEs are rarely this simple! The key feature of is that the right-hand side depends only on the independent variable. In general, we won't be so lucky! Try the following checkpoint to determine when this method applies.    Which of the following ODEs have been solved correctly using the integration method ? Select all that apply.       , solved as .    Correct! The right-hand side depends only on , so we can integrate directly. .       , solved as .    Correct! The right-hand side depends only on , so we integrate directly to get .       , solved as .    Incorrect! The right-hand side depends on , not just , so we cannot simply integrate both sides this way. We will learn how to solve ODEs like this later in the course!       , solved as .    Incorrect! The right-hand side depends on both and , so direct integration doesn't work here. We will learn how to solve ODEs like this later in the course!       This video goes through the content of this page.     "
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
  "id": "fig-antiderivative-slider",
  "level": "2",
  "url": "sec-integrating-to-get-solutions.html#fig-antiderivative-slider",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Solutions to of the form . As you drag the slider, notice that changing shifts the curve vertically, but the tangent line at always has slope , demonstrating that the derivative is the same for every solution in the family!   "
},
{
  "id": "obs-integrate-both-sides",
  "level": "2",
  "url": "sec-integrating-to-get-solutions.html#obs-integrate-both-sides",
  "type": "Observation",
  "number": "1.2.3",
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
  "body": " Practice: Integrating to Find Solutions   Try each of the following on your own before checking the solution. Try it on your own first!      Solve with initial condition .    Integrating both sides: Applying the initial condition : So the specific solution is: We can verify:  and  .      Find the general solution to .    Notice the left-hand side involves a second derivative, which we can write as . Apply the same integration principle to get , then integrate again.    Since , we integrate twice.   First integration: Starting from :   Reveal      Now that we have , we integrate again.   Second integration: Starting from :   Reveal      You can verify that the general solution satisfies .    "
},
{
  "id": "note-two-constants",
  "level": "2",
  "url": "sec-integrating-to-get-solutions.html#note-two-constants",
  "type": "Note",
  "number": "1.2.4",
  "title": "",
  "body": " Notice in the last example we obtained two constants of integration and from integrating twice.  "
},
{
  "id": "ex-mc-integration-method",
  "level": "2",
  "url": "sec-integrating-to-get-solutions.html#ex-mc-integration-method",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": "  Which of the following ODEs have been solved correctly using the integration method ? Select all that apply.       , solved as .    Correct! The right-hand side depends only on , so we can integrate directly. .       , solved as .    Correct! The right-hand side depends only on , so we integrate directly to get .       , solved as .    Incorrect! The right-hand side depends on , not just , so we cannot simply integrate both sides this way. We will learn how to solve ODEs like this later in the course!       , solved as .    Incorrect! The right-hand side depends on both and , so direct integration doesn't work here. We will learn how to solve ODEs like this later in the course!     "
},
{
  "id": "video-integralsolutions",
  "level": "2",
  "url": "sec-integrating-to-get-solutions.html#video-integralsolutions",
  "type": "Figure",
  "number": "1.2.6",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-positionvelocity",
  "level": "1",
  "url": "sec-positionvelocity.html",
  "type": "Section",
  "number": "1.2.2",
  "title": "Velocity and Acceleration",
  "body": " Velocity and Acceleration  One of the most natural applications of ODEs is to motion. If you know how an object is accelerating, can you figure out the position? Let's review the key relationships between position, velocity, and acceleration before diving in.   Position, Velocity, and Acceleration   Suppose the position of an object with respect to time is given by .  The velocity  is the rate of change of position: .  The acceleration  is the rate of change of velocity: .      These relationships should look familiar from calculus. What's new here is that we can view them as ODEs. For instance, knowing the velocity gives us a first-order ODE for position, and knowing the acceleration gives us a second-order ODE. In both cases, we solve by integrating and applying initial conditions.  See if you can solve the following example.   Finding Position from Acceleration  Find the position function of a moving object given:    Since , we integrate to find .   First integration: Starting from :   Reveal   Applying : so .   Since , we integrate to find .   Second integration: Starting from :   Reveal   Applying : so the specific solution is:      Let's now take these ideas a step further and apply it to a word problem. While the question doesn't explicitly ask us to solve any ODE, finding the velocity function is necessary to answer the question.   Braking Distance  The brakes of a car travelling at mph give a constant deceleration of mi\/h . How long, in hours, until the car comes to a full stop?   A constant deceleration of means . Solve for the velocity function and determine when it equals zero.    We are given and . Integrating: Applying : The car stops when :    Note: be careful about units! The deceleration is given in mi\/h , so the answer is in hours.     Time for a quick check to make sure you are able to set-up position-velocity-acceleration ODEs!    Suppose a car has a constant deceleration of mi\/h . Which of the following correctly sets up an ODE for the position function ?      Correct! Acceleration is the second derivative of position, and deceleration means the acceleration is negative.     Almost — but deceleration means the acceleration is negative, so the right-hand side should be .     Not quite — the deceleration is constant, so the right-hand side should just be , not .     Not quite — acceleration is the second derivative of position, so the left-hand side should be , not . That would be saying the velocity is constant, not the acceleration!      This video goes through the content of this page.     "
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
  "body": " Braking Distance  The brakes of a car travelling at mph give a constant deceleration of mi\/h . How long, in hours, until the car comes to a full stop?   A constant deceleration of means . Solve for the velocity function and determine when it equals zero.    We are given and . Integrating: Applying : The car stops when :    Note: be careful about units! The deceleration is given in mi\/h , so the answer is in hours.    "
},
{
  "id": "ex-mc-braking-ode",
  "level": "2",
  "url": "sec-positionvelocity.html#ex-mc-braking-ode",
  "type": "Checkpoint",
  "number": "1.2.4",
  "title": "",
  "body": "  Suppose a car has a constant deceleration of mi\/h . Which of the following correctly sets up an ODE for the position function ?      Correct! Acceleration is the second derivative of position, and deceleration means the acceleration is negative.     Almost — but deceleration means the acceleration is negative, so the right-hand side should be .     Not quite — the deceleration is constant, so the right-hand side should just be , not .     Not quite — acceleration is the second derivative of position, so the left-hand side should be , not . That would be saying the velocity is constant, not the acceleration!    "
},
{
  "id": "video-position-velocity",
  "level": "2",
  "url": "sec-positionvelocity.html#video-position-velocity",
  "type": "Figure",
  "number": "1.2.5",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "exercises-1-2",
  "level": "1",
  "url": "exercises-1-2.html",
  "type": "Exercises",
  "number": "1.2.3",
  "title": "Exercises for Section 1.2",
  "body": " Exercises for Section 1.2    Find the general solution to the ODE:            Find the general solution to the ODE:            Find a function satisfying the differential equation and initial condition :            Find the position function of a moving particle with acceleration , initial velocity , and initial position .           The brakes of a car are applied when it is moving at m\/s and provide a constant deceleration of m\/s . How far does the car travel before coming to a stop?    Start the problem similar to the example in the notes by first computing how much time passes before coming to a stop. Find the position function. How can you combine these two things to answer the question?    It takes 3 seconds to come to a stop, and at this point it will have traveled m.     "
},
{
  "id": "ex-1-2-1",
  "level": "2",
  "url": "exercises-1-2.html#ex-1-2-1",
  "type": "Exercise",
  "number": "1.2.3.1",
  "title": "",
  "body": "  Find the general solution to the ODE:         "
},
{
  "id": "ex-1-2-2",
  "level": "2",
  "url": "exercises-1-2.html#ex-1-2-2",
  "type": "Exercise",
  "number": "1.2.3.2",
  "title": "",
  "body": "  Find the general solution to the ODE:         "
},
{
  "id": "ex-1-2-3",
  "level": "2",
  "url": "exercises-1-2.html#ex-1-2-3",
  "type": "Exercise",
  "number": "1.2.3.3",
  "title": "",
  "body": "  Find a function satisfying the differential equation and initial condition :         "
},
{
  "id": "ex-1-2-4",
  "level": "2",
  "url": "exercises-1-2.html#ex-1-2-4",
  "type": "Exercise",
  "number": "1.2.3.4",
  "title": "",
  "body": "  Find the position function of a moving particle with acceleration , initial velocity , and initial position .        "
},
{
  "id": "ex-1-2-5",
  "level": "2",
  "url": "exercises-1-2.html#ex-1-2-5",
  "type": "Exercise",
  "number": "1.2.3.5",
  "title": "",
  "body": "  The brakes of a car are applied when it is moving at m\/s and provide a constant deceleration of m\/s . How far does the car travel before coming to a stop?    Start the problem similar to the example in the notes by first computing how much time passes before coming to a stop. Find the position function. How can you combine these two things to answer the question?    It takes 3 seconds to come to a stop, and at this point it will have traveled m.   "
},
{
  "id": "sec-slope-fields-intro",
  "level": "1",
  "url": "sec-slope-fields-intro.html",
  "type": "Section",
  "number": "1.3.1",
  "title": "Slope Fields",
  "body": " Slope Fields   So far we have been solving differential equations and writing down explicit formulas for solutions. That is powerful, but it is not always possible. Many differential equations are too complicated to solve by hand, and even when we can solve them, the formula alone does not always make it easy to picture what the solutions actually look like. In this section we develop a visual tool that lets us understand the behavior of solutions to a differential equation without solving it at all.  The idea starts with something simple. If we have a differential equation , then at any point in the plane, the equation tells us exactly what slope a solution passing through that point must have. We do not need to know the solution to know its slope. We just plug in and .   Recall that the general solution to is . Let's focus on one specific solution, (that is, ). Since , the slope of the tangent line to this curve at any point is just twice the -value at that point. Use the interactive below to explore this. Try changing both the solution curve (via ) and the -value to see how the slope responds.   The solution curve with a tangent line at a chosen point. Notice that the slope depends only on the -value, not on which curve you are on or what is.     Here is the key observation from the interactive above: the slope depends only on the -value, not on the specific solution curve or the -value. This means that at every point in the plane with the same -coordinate, the slope of any solution passing through that point is the same.  This gives us a powerful idea. Even without knowing the solutions explicitly, we can draw a short line segment at every point with slope equal to , just from knowing the -value. The resulting picture is called a slope field .   Slope Field   A slope field for a differential equation is a plot of short line segments drawn at a grid of points , each with slope equal to . Together, these segments show the slope that any solution curve must have as it passes through each point.     Let's build the slope field for step by step. For each -value, the slope is regardless of , so every tick in the same row has the same slope. Press play to watch the slope field get drawn.   Building the slope field for . Each tick mark is drawn at a grid point with slope . Notice that all ticks in the same row (same ) are parallel. The slope does not depend on .     In practice, computers generate slope fields with far more points than we could draw by hand. The interactive below shows a dense slope field for . Use the slider to set an initial value , then press play to watch the corresponding solution curve trace itself through the field, following the arrows and connecting the dots. This is the fundamental idea: the slope field tells you which way any solution must travel at every point.    A dense slope field for . Set the initial value with the slider, then press play to trace the solution curve through the field. Notice how the curve always aligns with the tick marks as it travels.      This video walks through the content of this page.     "
},
{
  "id": "fig-tangent-slope-slider",
  "level": "2",
  "url": "sec-slope-fields-intro.html#fig-tangent-slope-slider",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " The solution curve with a tangent line at a chosen point. Notice that the slope depends only on the -value, not on which curve you are on or what is.   "
},
{
  "id": "sec-slope-fields-intro-7",
  "level": "2",
  "url": "sec-slope-fields-intro.html#sec-slope-fields-intro-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope field "
},
{
  "id": "def-slope-field",
  "level": "2",
  "url": "sec-slope-fields-intro.html#def-slope-field",
  "type": "Definition",
  "number": "1.3.2",
  "title": "Slope Field.",
  "body": " Slope Field   A slope field for a differential equation is a plot of short line segments drawn at a grid of points , each with slope equal to . Together, these segments show the slope that any solution curve must have as it passes through each point.   "
},
{
  "id": "fig-slope-field-build",
  "level": "2",
  "url": "sec-slope-fields-intro.html#fig-slope-field-build",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " Building the slope field for . Each tick mark is drawn at a grid point with slope . Notice that all ticks in the same row (same ) are parallel. The slope does not depend on .   "
},
{
  "id": "fig-slope-field-trajectory",
  "level": "2",
  "url": "sec-slope-fields-intro.html#fig-slope-field-trajectory",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": " A dense slope field for . Set the initial value with the slider, then press play to trace the solution curve through the field. Notice how the curve always aligns with the tick marks as it travels.   "
},
{
  "id": "video-slope-fields-intro",
  "level": "2",
  "url": "sec-slope-fields-intro.html#video-slope-fields-intro",
  "type": "Figure",
  "number": "1.3.5",
  "title": "",
  "body": " This video walks through the content of this page.   "
},
{
  "id": "sec-slopefield-matching",
  "level": "1",
  "url": "sec-slopefield-matching.html",
  "type": "Section",
  "number": "1.3.2",
  "title": "Reading and Matching Slope Fields",
  "body": " Reading and Matching Slope Fields   In the previous page we built a slope field from scratch for , drawing tick marks one row at a time until the full picture emerged. That is a great way to understand what a slope field is. But in practice, you will often be handed a slope field and asked to figure out which differential equation it came from, or to identify which picture shows the correct solution curves. That requires a different skill: reading a slope field strategically rather than building it from the ground up.  The good news is that you do not need to check every single point. A few well-chosen locations, like the coordinate axes, can tell you almost everything you need to know. Let's build that intuition now with an example.  For , the slope at any point is just . Let's compute a few values and draw the corresponding tick marks.                  Now watch the full slope field build up row by row. For each tick, the display shows the current , , and computed slope.   The slope field for , built row by row starting at . Notice how the ticks get steeper as you move away from the line , where the slope is zero.     Two slope fields are shown below. Exactly one is the slope field for . Rather than checking every point, be strategic: check what happens along the axes. Along , the slope should equal , so ticks above the origin should tilt upward and ticks below should tilt downward. Does that rule out one of the fields?    Field A     Field B       Which of the two slope fields above is the slope field for ?     Field A   Correct! Check the axis: slope there, so ticks above the origin tilt upward and ticks below tilt downward. Field A shows exactly this.     Field B   Not quite. Check the axis in Field B: the ticks above the origin tilt downward and the ticks below tilt upward. That is the opposite of what predicts, since the slope along should equal . Field B is actually the slope field for .       Both pictures below show the slope field for with solution curves drawn on top. Recall: a solution curve must be tangent to the slope field at every point. It flows with the ticks, never cutting across them at a sharp angle.    Picture A     Picture B       Which of the two pictures above shows correct solution curves for ?     Picture A   Correct! In Picture A the curves flow tangentially with the tick marks everywhere. They sweep steeply upward in the upper-right where the field is steep, exactly as a solution to must.     Picture B   Not quite. The curves in Picture B cross the tick marks at sharp angles rather than flowing with them. A solution curve must be tangent to the field at every point.        This video goes through the content of this page     "
},
{
  "id": "fig-slopefield-xy",
  "level": "2",
  "url": "sec-slopefield-matching.html#fig-slopefield-xy",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " The slope field for , built row by row starting at . Notice how the ticks get steeper as you move away from the line , where the slope is zero.   "
},
{
  "id": "fig-mc-field-A",
  "level": "2",
  "url": "sec-slopefield-matching.html#fig-mc-field-A",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " Field A   "
},
{
  "id": "fig-mc-field-B",
  "level": "2",
  "url": "sec-slopefield-matching.html#fig-mc-field-B",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " Field B   "
},
{
  "id": "ex-mc-slopefield-match",
  "level": "2",
  "url": "sec-slopefield-matching.html#ex-mc-slopefield-match",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "",
  "body": "  Which of the two slope fields above is the slope field for ?     Field A   Correct! Check the axis: slope there, so ticks above the origin tilt upward and ticks below tilt downward. Field A shows exactly this.     Field B   Not quite. Check the axis in Field B: the ticks above the origin tilt downward and the ticks below tilt upward. That is the opposite of what predicts, since the slope along should equal . Field B is actually the slope field for .     "
},
{
  "id": "fig-mc-curves-A",
  "level": "2",
  "url": "sec-slopefield-matching.html#fig-mc-curves-A",
  "type": "Figure",
  "number": "1.3.5",
  "title": "",
  "body": " Picture A   "
},
{
  "id": "fig-mc-curves-B",
  "level": "2",
  "url": "sec-slopefield-matching.html#fig-mc-curves-B",
  "type": "Figure",
  "number": "1.3.6",
  "title": "",
  "body": " Picture B   "
},
{
  "id": "ex-mc-slopefield-curves",
  "level": "2",
  "url": "sec-slopefield-matching.html#ex-mc-slopefield-curves",
  "type": "Checkpoint",
  "number": "1.3.7",
  "title": "",
  "body": "  Which of the two pictures above shows correct solution curves for ?     Picture A   Correct! In Picture A the curves flow tangentially with the tick marks everywhere. They sweep steeply upward in the upper-right where the field is steep, exactly as a solution to must.     Picture B   Not quite. The curves in Picture B cross the tick marks at sharp angles rather than flowing with them. A solution curve must be tangent to the field at every point.     "
},
{
  "id": "video-slopefield-matching",
  "level": "2",
  "url": "sec-slopefield-matching.html#video-slopefield-matching",
  "type": "Figure",
  "number": "1.3.8",
  "title": "",
  "body": " This video goes through the content of this page   "
},
{
  "id": "exercises-1-3",
  "level": "1",
  "url": "exercises-1-3.html",
  "type": "Exercises",
  "number": "1.3.3",
  "title": "Exercises for Section 1.3",
  "body": " Exercises for Section 1.3    Computing Slopes from a Differential Equation   Consider the differential equation . For each of the following points , compute the slope that a solution passing through that point must have.               Notice that two of the slopes are zero. What do those two points have in common? What does this tell you about the slope field along the line ?                 Both zero-slope points satisfy . Along the line , all tick marks in the slope field are horizontal.      Matching a Slope Field   One of the two slope fields below is the slope field for . The other is the slope field for a different differential equation.    Field A     Field B        Which field is the slope field for ?     Field A   Correct!     Field B   Not quite — check the reasoning in part (b).        Explain how you can eliminate one of the fields using a single strategic check. Hint: what should the slope be along ?    Along , the slope of equals , so tick marks should tilt upward to the right (positive ) and downward to the left (negative ). Field B has all horizontal ticks along (slope zero everywhere there), which eliminates it. Therefore Field A is correct.       Reading Behavior from a Slope Field   The slope field below is for some differential equation .   A slope field for a differential equation. Tick marks are flat along and , tilt upward for , and tilt downward for and .    For each of the following initial conditions, determine whether the solution is increasing , decreasing , or constant .        Increasing — at the tick marks point upward.         Decreasing — at the tick marks point downward.         Constant — at the tick marks are flat, so the solution stays at for all .      "
},
{
  "id": "ex-1-3-1",
  "level": "2",
  "url": "exercises-1-3.html#ex-1-3-1",
  "type": "Exercise",
  "number": "1.3.3.1",
  "title": "Computing Slopes from a Differential Equation.",
  "body": " Computing Slopes from a Differential Equation   Consider the differential equation . For each of the following points , compute the slope that a solution passing through that point must have.               Notice that two of the slopes are zero. What do those two points have in common? What does this tell you about the slope field along the line ?                 Both zero-slope points satisfy . Along the line , all tick marks in the slope field are horizontal.   "
},
{
  "id": "ex-1-3-2",
  "level": "2",
  "url": "exercises-1-3.html#ex-1-3-2",
  "type": "Exercise",
  "number": "1.3.3.2",
  "title": "Matching a Slope Field.",
  "body": " Matching a Slope Field   One of the two slope fields below is the slope field for . The other is the slope field for a different differential equation.    Field A     Field B        Which field is the slope field for ?     Field A   Correct!     Field B   Not quite — check the reasoning in part (b).        Explain how you can eliminate one of the fields using a single strategic check. Hint: what should the slope be along ?    Along , the slope of equals , so tick marks should tilt upward to the right (positive ) and downward to the left (negative ). Field B has all horizontal ticks along (slope zero everywhere there), which eliminates it. Therefore Field A is correct.    "
},
{
  "id": "ex-1-3-3",
  "level": "2",
  "url": "exercises-1-3.html#ex-1-3-3",
  "type": "Exercise",
  "number": "1.3.3.3",
  "title": "Reading Behavior from a Slope Field.",
  "body": " Reading Behavior from a Slope Field   The slope field below is for some differential equation .   A slope field for a differential equation. Tick marks are flat along and , tilt upward for , and tilt downward for and .    For each of the following initial conditions, determine whether the solution is increasing , decreasing , or constant .        Increasing — at the tick marks point upward.         Decreasing — at the tick marks point downward.         Constant — at the tick marks are flat, so the solution stays at for all .    "
},
{
  "id": "subsec-intr-separable",
  "level": "1",
  "url": "subsec-intr-separable.html",
  "type": "Section",
  "number": "1.4.1",
  "title": "Introduction to Separable ODEs",
  "body": " Introduction to Separable ODEs  We now introduce a method for solving a broad class of first-order ODEs called separable differential equations . Let's first get a feel for the idea through an example before formalizing things.  Let's get a feel for the idea through an example before formalizing things. Consider the differential equation . Notice that the right-hand side factors into a part involving only and a part involving only . We call ODEs in this form separable . That is, it can be written the form . We are going to try to \"separate\" the variables, moving all the terms to one side and all the terms to the other.  We write: We are treating as if it were a fraction and \"multiplying both sides by .\" Strictly speaking, is not a fraction. We will justify why this manipulation is mathematically valid shortly. For now, think of it as a useful shorthand that consistently gives the right answer.  Integrating both sides: Each side produces its own constant of integration: so we write:   So the general solution is .   Algebra to solve for  Starting from : So the general solution is .   This will outlined more clearly on the next page. But for now, let's make sure you understand what a first order separable ODE is.    Recall that a separable ODE is one that can be written in the form , where the right-hand side factors into a part involving only the dependent variable and a part involving only the independent variable. Which of the following ODEs are separable? Select all that apply.   Note that an ODE is separable as long as it can be written in the form . It does not need to appear that way initially.        Separable! We can write this as and (or and ). The right-hand side factors cleanly into a part in and a constant.       Separable! Factor out from the right-hand side: . So and .       Separable! The right-hand side already factors as and .       Separable — but sneaky! There is no explicit on the right-hand side, so (a constant function). We have and .       Not separable! There is no way to write as a product — the two variables are added together, not multiplied.       Not separable! Like the previous option, cannot be factored into a part in only and a part in only. Addition is the giveaway here.       Not separable! Even though it involves a trig function, cannot be written as — the variables are tangled together inside the sine.       This video goes through the content of this page.     "
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
  "number": "1.4.1",
  "title": "",
  "body": "  Recall that a separable ODE is one that can be written in the form , where the right-hand side factors into a part involving only the dependent variable and a part involving only the independent variable. Which of the following ODEs are separable? Select all that apply.   Note that an ODE is separable as long as it can be written in the form . It does not need to appear that way initially.        Separable! We can write this as and (or and ). The right-hand side factors cleanly into a part in and a constant.       Separable! Factor out from the right-hand side: . So and .       Separable! The right-hand side already factors as and .       Separable — but sneaky! There is no explicit on the right-hand side, so (a constant function). We have and .       Not separable! There is no way to write as a product — the two variables are added together, not multiplied.       Not separable! Like the previous option, cannot be factored into a part in only and a part in only. Addition is the giveaway here.       Not separable! Even though it involves a trig function, cannot be written as — the variables are tangled together inside the sine.     "
},
{
  "id": "video-sep-intro",
  "level": "2",
  "url": "subsec-intr-separable.html#video-sep-intro",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "subsec-sepofvar",
  "level": "1",
  "url": "subsec-sepofvar.html",
  "type": "Section",
  "number": "1.4.2",
  "title": "Separation of Variables",
  "body": " Separation of Variables  The method we started exploring on the previous page is called separation of variables . Let's now make it precise.   Separable Differential Equation   A separable differential equation is one that can be written in the form It can be solved using separation of variables :   This method captures all solutions that are not singular . When , we cannot divide by , so separation of variables may miss some solutions, but any solution missed this way is precisely an equilibrium (constant) solution.    A helpful (if informal) way to remember this is the following \"fake proof\":  Starting from , treat as a fraction and divide both sides by : Then \"multiply both sides by \" and integrate: While this is not a rigorous proof, it is a reliable way to remember how to apply the method.   Precise Justification (optional — for the curious!)  We want to rigorously justify why follows from .  Let be an antiderivative of , so that . Consider the function , viewed as a function of . By the chain rule: So is an antiderivative of with respect to . That is: But by definition of . So we arrive at: which is exactly what the method produces. The \"fake proof\" manipulation, while informal, gives the correct result.   Notice that separation of variables misses any solution where , since we cannot divide by zero in that step. It turns out these are precisely the equilibrium solutions -- the ones you already know how to find from !   Why does give equilibrium solutions?  Recall that an equilibrium solution is a constant solution . If is constant, then , so the ODE becomes For this to hold for all , we need . So the equilibrium solutions are exactly the values of where .    General Solution of a Separable ODE  The general solution to consists of:  All solutions found by separation of variables.  All equilibrium solutions, which correspond to values of where .     In the following example, we go through each step in applying separation of variables. At this point, you are still getting used to the process, so feel free to follow along step by step!   Solving a Separable ODE  Find the general explicit solution to .    Step 1: Find equilibrium solutions.   From the observation above, a shortcut to finding equilibrium solutions in separable ODEs is to solve . Here , so So is the only equilibrium solution.   Step 2: Separate the variables.   Assuming , divide both sides by and \"multiply by \":    Explanation: separating variables  We start from . Here and . Dividing both sides by and treating as we described:     Step 3: Integrate both sides.    (We place the constant only on the right-hand side, since combining two constants of integration still gives a single arbitrary constant.)   Step 4: Solve for .   From , taking reciprocals:    Full working   Note: in the third line, was replaced with . Since ranges over all real numbers, so does — so this is just a relabeling. See the remark below.    Step 5: Write the general solution.   Combining the equilibrium solution from Step 1 and the explicit solution from Step 4, the general solution is:     And we just successfully used separation of variables! All the problems with separation of variables follow this basic format (with steps 1-5). Some of the details will vary in each problem, which we explore in the following sections.   Absorbing Constants  In solving the previous example, we changed to . This is valid because and both vary over all real numbers (they represent the same family of values, just relabeled).  We often absorb constants into like this, and it is generally preferred to write the simpler expression. For example, it is much neater to write than , even though they represent the same family of functions. It is standard practice to reuse the name from line to line, even when absorbing constants into it.    Be Careful with Placement  Be careful when changing expressions with . For example  and are not the same.  and are not the same (the constant cannot be absorbed into due to the order of operations).     Let's do a quick check to make sure you are confident simplifying expressions with .    In each of the following, two expressions involving (where varies over all real numbers) are given. Select all pairs that represent the same family of functions.     and   These are equivalent! Since varies over all real numbers, so does — they represent the same family of values, just relabeled.     and   These are equivalent! The is just a fixed number that gets absorbed into . As varies over all reals, so does .     and   Not equivalent! The cannot be absorbed into — adding 1 to shifts every solution up by 1, which is a genuinely different family of functions.     and   These are equivalent! As varies over all real numbers, so does — it's just a relabeling of the constant.     and   Not equivalent! In the first, shifts the graph vertically. In the second, shifts the graph horizontally inside the square root. These are genuinely different families of functions.       This video goes through the content of this page.     "
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
  "number": "1.4.1",
  "title": "Separable Differential Equation.",
  "body": " Separable Differential Equation   A separable differential equation is one that can be written in the form It can be solved using separation of variables :   This method captures all solutions that are not singular . When , we cannot divide by , so separation of variables may miss some solutions, but any solution missed this way is precisely an equilibrium (constant) solution.   "
},
{
  "id": "subsec-sepofvar-6",
  "level": "2",
  "url": "subsec-sepofvar.html#subsec-sepofvar-6",
  "type": "Proof",
  "number": "1.4.2.1",
  "title": "Precise Justification (optional — for the curious!).",
  "body": " Precise Justification (optional — for the curious!)  We want to rigorously justify why follows from .  Let be an antiderivative of , so that . Consider the function , viewed as a function of . By the chain rule: So is an antiderivative of with respect to . That is: But by definition of . So we arrive at: which is exactly what the method produces. The \"fake proof\" manipulation, while informal, gives the correct result.  "
},
{
  "id": "obs-general-solution-separable",
  "level": "2",
  "url": "subsec-sepofvar.html#obs-general-solution-separable",
  "type": "Observation",
  "number": "1.4.2",
  "title": "General Solution of a Separable ODE.",
  "body": " General Solution of a Separable ODE  The general solution to consists of:  All solutions found by separation of variables.  All equilibrium solutions, which correspond to values of where .    "
},
{
  "id": "ex-separable-3y2x3",
  "level": "2",
  "url": "subsec-sepofvar.html#ex-separable-3y2x3",
  "type": "Example",
  "number": "1.4.3",
  "title": "Solving a Separable ODE.",
  "body": " Solving a Separable ODE  Find the general explicit solution to .    Step 1: Find equilibrium solutions.   From the observation above, a shortcut to finding equilibrium solutions in separable ODEs is to solve . Here , so So is the only equilibrium solution.   Step 2: Separate the variables.   Assuming , divide both sides by and \"multiply by \":    Explanation: separating variables  We start from . Here and . Dividing both sides by and treating as we described:     Step 3: Integrate both sides.    (We place the constant only on the right-hand side, since combining two constants of integration still gives a single arbitrary constant.)   Step 4: Solve for .   From , taking reciprocals:    Full working   Note: in the third line, was replaced with . Since ranges over all real numbers, so does — so this is just a relabeling. See the remark below.    Step 5: Write the general solution.   Combining the equilibrium solution from Step 1 and the explicit solution from Step 4, the general solution is:    "
},
{
  "id": "rem-absorbing-constants",
  "level": "2",
  "url": "subsec-sepofvar.html#rem-absorbing-constants",
  "type": "Remark",
  "number": "1.4.4",
  "title": "Absorbing Constants.",
  "body": " Absorbing Constants  In solving the previous example, we changed to . This is valid because and both vary over all real numbers (they represent the same family of values, just relabeled).  We often absorb constants into like this, and it is generally preferred to write the simpler expression. For example, it is much neater to write than , even though they represent the same family of functions. It is standard practice to reuse the name from line to line, even when absorbing constants into it.  "
},
{
  "id": "note-c-placement",
  "level": "2",
  "url": "subsec-sepofvar.html#note-c-placement",
  "type": "Note",
  "number": "1.4.5",
  "title": "Be Careful with <span class=\"process-math\">\\(C\\)<\/span> Placement.",
  "body": " Be Careful with Placement  Be careful when changing expressions with . For example  and are not the same.  and are not the same (the constant cannot be absorbed into due to the order of operations).    "
},
{
  "id": "ex-mc-absorbing-constants",
  "level": "2",
  "url": "subsec-sepofvar.html#ex-mc-absorbing-constants",
  "type": "Checkpoint",
  "number": "1.4.6",
  "title": "",
  "body": "  In each of the following, two expressions involving (where varies over all real numbers) are given. Select all pairs that represent the same family of functions.     and   These are equivalent! Since varies over all real numbers, so does — they represent the same family of values, just relabeled.     and   These are equivalent! The is just a fixed number that gets absorbed into . As varies over all reals, so does .     and   Not equivalent! The cannot be absorbed into — adding 1 to shifts every solution up by 1, which is a genuinely different family of functions.     and   These are equivalent! As varies over all real numbers, so does — it's just a relabeling of the constant.     and   Not equivalent! In the first, shifts the graph vertically. In the second, shifts the graph horizontally inside the square root. These are genuinely different families of functions.     "
},
{
  "id": "video-sep-of-var",
  "level": "2",
  "url": "subsec-sepofvar.html#video-sep-of-var",
  "type": "Figure",
  "number": "1.4.7",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "subsec-sep-exp",
  "level": "1",
  "url": "subsec-sep-exp.html",
  "type": "Section",
  "number": "1.4.3",
  "title": "Separation of Variables: Important Example with Exponentials",
  "body": " Separation of Variables: Important Example with Exponentials  Recall the following population modelling ODE: , which says the population grows at a rate twice the current population. We were previously able to guess and check some solutions to this. With separation of variables we will know, without a doubt, what all the solutions are.  First, why is this ODE separable? Recall that a separable ODE is one that can be written in the form: or with our current variables: But looking at , there doesn't seem to be any function! Think about what you could set and to be.   Why is this separable?  Functions can be constant! So and may end up being constant functions, where there is no explicit mention of the independent variable. In this case there are two natural choices:  and  and  Both choices work and will ultimately give the same general solution. In the example below, we will use choice (1): and .   Now that we have established it is separable, let's use separation of variables to solve it! Try as much as you can on your own, and check with the solution as you go. In this problem, there are some subtle things we take note of in step 4 when solving for .   An important observation with exponentials  Find the general solution to .   Follow the same five steps as in the previous example:  Find equilibrium solutions.  Separate the variables.  Integrate both sides.  Solve for .  Write the general solution.       Step 1: Find equilibrium solutions.   The only equilibrium solution is .   Work to solve for the equilibrium solution  In separable ODEs, we can always find the equilibrium solution by solving . Here , so So is the only equilibrium solution.    Steps 2 and 3: Separate the variables and integrate.   You should arrive at . Nothing is too interesting in these two steps, but you can see the work below if you are unsure.   Work for steps 2 and 3  Assuming , divide both sides by and multiply by :   Then we integrate:    Don't forget the absolute value in !     Step 4: Solve for .   Starting from , we find: This step just involves standard exponential rules, so make sure you are comfortable with it! You can read the solution below if you are stuck.   Step 4a: Algebra to get .  Exponentiating both sides  and applying :    Finally, we get to the interesting part of this question! Solving for here in a nice form takes some work. But the result of this will be a big takeaway for solving similar questions with exponentials. Do your best to solve for here, and then definitely read solution below !!   Step 4b: Removing the absolute value and simplifying the constant  The steps involved here involve careful reasoning about the constant and exponential function. Do not fret, we wil summarize this all at the end of the page and make sure you are confident with similar questions going forward!  We are starting from: . Removing the absolute value introduces a : As varies over all real numbers, ranges over all positive numbers. That is, every positive number can be written as for some . Therefore attains all negative numbers. Together, ranges over all nonzero real numbers. So we replace with a new constant varying over all nonzero reals:    The graph of is always positive and ranges of all positive numbers as varies over all reals.      Step 5: Write the general solution.   From Steps 1 and 4, we have found: Notice that setting in gives , recovering the equilibrium solution. So the general solution can be written compactly as:     Step 4 involved some subtle reasoning, but this pattern comes up often in problems involving exponentials. So going forward we can skip many of the details, as discussed in the remark below.   A Useful Shortcut for Exponential Solutions  In particular, whenever you arrive at an expression of the form it always results in   Even more, this typically arises after applying separation of variables to an ODE of the form , where the only equilibrium solution is . So the general solution — combining the equilibrium solution with the explicit solution — can always be written compactly as:    The reasoning in Step 4 will come up again and again whenever you solve an ODE with an exponential solution. Getting comfortable with it now will save you a lot of trouble going forward! Let's quickly drive this point home with the following question.    Your friend is solving the ODE and has correctly found:  is the only equilibrium solution.  Separation of variables yields .  They need your help finishing! Which of the following is the correct general solution?     , where is any real number.  Exactly! ranges over all nonzero reals, and combining with the equilibrium solution means can be any real number.    , where is any nonzero real number.  Close — but don't forget the equilibrium solution ! Setting recovers it, so can be any real number.    .  Not quite — is always positive, so this misses all the negative solutions. Don't forget the when removing the absolute value!    or .  You remembered the equilibrium solution, but is always positive — this still misses all the negative solutions. The is needed when removing the absolute value!      This video goes through the content of this page.     "
},
{
  "id": "ex-separable-exp",
  "level": "2",
  "url": "subsec-sep-exp.html#ex-separable-exp",
  "type": "Example",
  "number": "1.4.1",
  "title": "An important observation with exponentials.",
  "body": " An important observation with exponentials  Find the general solution to .   Follow the same five steps as in the previous example:  Find equilibrium solutions.  Separate the variables.  Integrate both sides.  Solve for .  Write the general solution.       Step 1: Find equilibrium solutions.   The only equilibrium solution is .   Work to solve for the equilibrium solution  In separable ODEs, we can always find the equilibrium solution by solving . Here , so So is the only equilibrium solution.    Steps 2 and 3: Separate the variables and integrate.   You should arrive at . Nothing is too interesting in these two steps, but you can see the work below if you are unsure.   Work for steps 2 and 3  Assuming , divide both sides by and multiply by :   Then we integrate:    Don't forget the absolute value in !     Step 4: Solve for .   Starting from , we find: This step just involves standard exponential rules, so make sure you are comfortable with it! You can read the solution below if you are stuck.   Step 4a: Algebra to get .  Exponentiating both sides  and applying :    Finally, we get to the interesting part of this question! Solving for here in a nice form takes some work. But the result of this will be a big takeaway for solving similar questions with exponentials. Do your best to solve for here, and then definitely read solution below !!   Step 4b: Removing the absolute value and simplifying the constant  The steps involved here involve careful reasoning about the constant and exponential function. Do not fret, we wil summarize this all at the end of the page and make sure you are confident with similar questions going forward!  We are starting from: . Removing the absolute value introduces a : As varies over all real numbers, ranges over all positive numbers. That is, every positive number can be written as for some . Therefore attains all negative numbers. Together, ranges over all nonzero real numbers. So we replace with a new constant varying over all nonzero reals:    The graph of is always positive and ranges of all positive numbers as varies over all reals.      Step 5: Write the general solution.   From Steps 1 and 4, we have found: Notice that setting in gives , recovering the equilibrium solution. So the general solution can be written compactly as:    "
},
{
  "id": "rem-exponential-shortcut",
  "level": "2",
  "url": "subsec-sep-exp.html#rem-exponential-shortcut",
  "type": "Remark",
  "number": "1.4.4",
  "title": "A Useful Shortcut for Exponential Solutions.",
  "body": " A Useful Shortcut for Exponential Solutions  In particular, whenever you arrive at an expression of the form it always results in   Even more, this typically arises after applying separation of variables to an ODE of the form , where the only equilibrium solution is . So the general solution — combining the equilibrium solution with the explicit solution — can always be written compactly as:   "
},
{
  "id": "ex-mc-general-solution",
  "level": "2",
  "url": "subsec-sep-exp.html#ex-mc-general-solution",
  "type": "Checkpoint",
  "number": "1.4.5",
  "title": "",
  "body": "  Your friend is solving the ODE and has correctly found:  is the only equilibrium solution.  Separation of variables yields .  They need your help finishing! Which of the following is the correct general solution?     , where is any real number.  Exactly! ranges over all nonzero reals, and combining with the equilibrium solution means can be any real number.    , where is any nonzero real number.  Close — but don't forget the equilibrium solution ! Setting recovers it, so can be any real number.    .  Not quite — is always positive, so this misses all the negative solutions. Don't forget the when removing the absolute value!    or .  You remembered the equilibrium solution, but is always positive — this still misses all the negative solutions. The is needed when removing the absolute value!    "
},
{
  "id": "video-sep-exp",
  "level": "2",
  "url": "subsec-sep-exp.html#video-sep-exp",
  "type": "Figure",
  "number": "1.4.6",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "subsec-sep-minussign",
  "level": "1",
  "url": "subsec-sep-minussign.html",
  "type": "Section",
  "number": "1.4.4",
  "title": "Separation of Variables: Some Subtle Points",
  "body": " Separation of Variables: Some Subtle Points  Now we look at two more examples solving separable ODEs. This first example illustrates a subtle point when dealing with square roots. See if you can find the mistake in the work below!   A Subtle Moment in Solving an IVP   Let's solve the following initial value problem explicitly: , .  After separating variables and integrating, we arrive at:    Work for separation of variables  First, why is this separable? Notice that is already on the left with , so no dividing by is necessary — we can separate immediately by writing . There are no equilibrium solutions since setting gives , which can't hold for all .  Separating variables: Integrating both sides:    Now something interesting happens when we solve for explicitly. Let's take the square root of both sides: Applying the initial condition : But the square root of a number is always non-negative — so is impossible! We seem to have reached a contradiction. What went wrong?    What went wrong?   Identify the error in the working above.     We integrated incorrectly. The antiderivative of is not .  Not quite — is correct!    We forgot the when taking the square root.  Exactly! When solving , we should have written . The negative branch is what allows .    The initial condition is inconsistent with this ODE, so no solution exists.  Not quite — a solution does exist! The issue is earlier in the working.       Now that you've identified the mistake, see if you can finish solving the problem correctly! Check with the solution below.    Corrected solution  The fix is to include the when taking the square root: Now applying : since is negative, we choose the negative branch: So the specific solution is:      So far, when solving a separable ODE we have always ended by solving explicitly for the dependent variable, arriving at something like or . But sometimes it is difficult or even impossible to isolate the dependent variable, and that's okay! An equation relating and that implicitly defines as a function of , without explicitly writing , is called an implicit solution . For example, could be an implicit solution to an ODE even though we haven't written by itself. In these cases, we simply stop once we have a clean implicit relation and call that the general solution.   Finding a General Implicit Solution   Find a general implicit solution to . Before diving in, see if you can figure out whether there are any equilibrium solutions!    Separating the variables   We are trying to solve . Which of the following correctly separates the variables?         Correct! Multiplying both sides by gives , and then separating gives .         Not quite — check your separation step. You need to multiply both sides by first, not divide.         Not quite — the right-hand side still contains , which means the variables are not fully separated!      This ODE is not separable.    It is separable! Try rewriting the right-hand side by factoring out : . Now can you see how to separate?      How to separate the variables  First notice is the same thing as , and we can rewrite the right-hand side by combining the fractions: Now multiply both sides by : Integrating both sides:      Integrating and writing the implicit solution   After integrating both sides, we arrive at: This is the general implicit solution. See the dropdown for all the details.    Full working   Equilibrium solutions: None.   Why are there no equilibrium solutions?  Rewriting the ODE as , we have . Setting gives , which has no solution. So there are no equilibrium solutions.    Separating and integrating:  Since solving explicitly for would require taking a square root (introducing a ) and the problem only asks for an implicit solution, we stop here. The general implicit solution is:       This video goes through the content of this page.     "
},
{
  "id": "explore-ivp-sqrt",
  "level": "2",
  "url": "subsec-sep-minussign.html#explore-ivp-sqrt",
  "type": "Exploration",
  "number": "1.4.1",
  "title": "A Subtle Moment in Solving an IVP.",
  "body": " A Subtle Moment in Solving an IVP   Let's solve the following initial value problem explicitly: , .  After separating variables and integrating, we arrive at:    Work for separation of variables  First, why is this separable? Notice that is already on the left with , so no dividing by is necessary — we can separate immediately by writing . There are no equilibrium solutions since setting gives , which can't hold for all .  Separating variables: Integrating both sides:    Now something interesting happens when we solve for explicitly. Let's take the square root of both sides: Applying the initial condition : But the square root of a number is always non-negative — so is impossible! We seem to have reached a contradiction. What went wrong?    What went wrong?   Identify the error in the working above.     We integrated incorrectly. The antiderivative of is not .  Not quite — is correct!    We forgot the when taking the square root.  Exactly! When solving , we should have written . The negative branch is what allows .    The initial condition is inconsistent with this ODE, so no solution exists.  Not quite — a solution does exist! The issue is earlier in the working.       Now that you've identified the mistake, see if you can finish solving the problem correctly! Check with the solution below.    Corrected solution  The fix is to include the when taking the square root: Now applying : since is negative, we choose the negative branch: So the specific solution is:     "
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
  "number": "1.4.1",
  "title": "Finding a General Implicit Solution.",
  "body": " Finding a General Implicit Solution   Find a general implicit solution to . Before diving in, see if you can figure out whether there are any equilibrium solutions!    Separating the variables   We are trying to solve . Which of the following correctly separates the variables?         Correct! Multiplying both sides by gives , and then separating gives .         Not quite — check your separation step. You need to multiply both sides by first, not divide.         Not quite — the right-hand side still contains , which means the variables are not fully separated!      This ODE is not separable.    It is separable! Try rewriting the right-hand side by factoring out : . Now can you see how to separate?      How to separate the variables  First notice is the same thing as , and we can rewrite the right-hand side by combining the fractions: Now multiply both sides by : Integrating both sides:      Integrating and writing the implicit solution   After integrating both sides, we arrive at: This is the general implicit solution. See the dropdown for all the details.    Full working   Equilibrium solutions: None.   Why are there no equilibrium solutions?  Rewriting the ODE as , we have . Setting gives , which has no solution. So there are no equilibrium solutions.    Separating and integrating:  Since solving explicitly for would require taking a square root (introducing a ) and the problem only asks for an implicit solution, we stop here. The general implicit solution is:     "
},
{
  "id": "video-sep-twomoreexamples",
  "level": "2",
  "url": "subsec-sep-minussign.html#video-sep-twomoreexamples",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "subsec-sep-completingsquare",
  "level": "1",
  "url": "subsec-sep-completingsquare.html",
  "type": "Section",
  "number": "1.4.5",
  "title": "Separation of Variables: Solving Explicitly Tricks",
  "body": " Separation of Variables: Solving Explicitly Tricks  The following example is a little harder to solve for explicitly, but it's certainly doable! It's designed to give you practice executing some things that can come up during separation of variables, so try each step on your own before revealing the solution. And as always, the video at the end is there if you get stuck!   Solving a Separable ODE Explicitly   Solve the following ODE explicitly: .    Step 1: Find equilibrium solutions   There are no equilibrium solutions.    Why?  Rewrite the ODE as , so . Setting gives , which has no solution. So there are no equilibrium solutions.     Step 2: Separate the variables   Multiplying both sides by and separating:      Step 3: Integrate both sides   Integrating the left-hand side: What technique should you use to evaluate ?    This integral can be solved with a -substitution. What do you think you should set equal to?    Work: evaluating the integral  Let , so and : So we now have:      Step 4: Solve for — recognizing the technique   We have . What technique lets us solve explicitly for ?     Complete the square on the left-hand side.  Exactly! Adding 4 to both sides gives , after which we can take a square root.    Divide both sides by .  Dividing by gives , which doesn't isolate .    Take the square root of both sides directly.  Not quite — the left-hand side is not a perfect square yet, so we can't take the square root directly. We need one more step first!    This cannot be solved explicitly for .  It can be solved explicitly! Think about what algebraic technique turns into a perfect square.     Working: completing the square  To complete the square on , we add to both sides (since ): where we absorbed the into on the right-hand side.     Step 5: Write the explicit solution   Starting from , which of the following is the correct explicit solution?      Correct! Taking the square root of both sides gives , and subtracting 2 gives the answer.     Almost — but don't forget the ! When taking the square root of both sides of , we get .     Check the sign! From , subtracting 2 from both sides gives , not .     Not quite — should be inside the square root, not outside. We are taking the square root of the entire right-hand side .     Working: taking the square root  Taking the square root of both sides of : Subtracting 2 from both sides:       This video goes through the content of this page.     "
},
{
  "id": "ex-explicit-complete-square",
  "level": "2",
  "url": "subsec-sep-completingsquare.html#ex-explicit-complete-square",
  "type": "Example",
  "number": "1.4.1",
  "title": "Solving a Separable ODE Explicitly.",
  "body": " Solving a Separable ODE Explicitly   Solve the following ODE explicitly: .    Step 1: Find equilibrium solutions   There are no equilibrium solutions.    Why?  Rewrite the ODE as , so . Setting gives , which has no solution. So there are no equilibrium solutions.     Step 2: Separate the variables   Multiplying both sides by and separating:      Step 3: Integrate both sides   Integrating the left-hand side: What technique should you use to evaluate ?    This integral can be solved with a -substitution. What do you think you should set equal to?    Work: evaluating the integral  Let , so and : So we now have:      Step 4: Solve for — recognizing the technique   We have . What technique lets us solve explicitly for ?     Complete the square on the left-hand side.  Exactly! Adding 4 to both sides gives , after which we can take a square root.    Divide both sides by .  Dividing by gives , which doesn't isolate .    Take the square root of both sides directly.  Not quite — the left-hand side is not a perfect square yet, so we can't take the square root directly. We need one more step first!    This cannot be solved explicitly for .  It can be solved explicitly! Think about what algebraic technique turns into a perfect square.     Working: completing the square  To complete the square on , we add to both sides (since ): where we absorbed the into on the right-hand side.     Step 5: Write the explicit solution   Starting from , which of the following is the correct explicit solution?      Correct! Taking the square root of both sides gives , and subtracting 2 gives the answer.     Almost — but don't forget the ! When taking the square root of both sides of , we get .     Check the sign! From , subtracting 2 from both sides gives , not .     Not quite — should be inside the square root, not outside. We are taking the square root of the entire right-hand side .     Working: taking the square root  Taking the square root of both sides of : Subtracting 2 from both sides:     "
},
{
  "id": "video-sep-completesquare",
  "level": "2",
  "url": "subsec-sep-completingsquare.html#video-sep-completesquare",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-1-4-radiocarbon",
  "level": "1",
  "url": "sec-1-4-radiocarbon.html",
  "type": "Section",
  "number": "1.4.6",
  "title": "Radiocarbon Dating",
  "body": " Radiocarbon Dating  Separable ODEs actually show up naturally in many applications! We already saw it appear in population modelling. We now look at a similar example with radioactive decay, which follows the principle that the rate at which a radioactive substance decays is proportional to how much of it remains. That single observation is enough to write down a differential equation, solve it, and use it to date artifacts.   Radioactive Decay Model  A material containing atoms of a radioactive isotope decays at a rate proportional to the number of atoms present: where . Radiocarbon dating uses the radioactive isotope of carbon, for which it is known that . By measuring how much remains in an organism after it dies, we can approximate how long ago the organism died.   Notice that is separable. We saw this exact form when we studied population growth. Now let's put it to work.   Practice: Radiocarbon Dating   Bones from an animal are measured to have 50% of the original amount of . Approximate how old the bone is. Work through the following steps. Try each part on your own before checking the solution!     Step 1: General Solution   What is the general solution to ?       Correct! You can arrive at this by separation of variables, but at this point it is worth having this form memorized: a differential equation always has general solution .       Not quite. Check the sign on the exponent. Since and the substance is decaying , the exponent should be negative.       This is not correct. Try separating variables: move to one side and to the other, then integrate both sides.       This would be the solution to , not . The on the right-hand side makes this equation exponential, not linear.       Step 2: Find the Age of the Bone   Using with , and the fact that 50% of the original remains, find the age of the bone.    Let denote the initial amount. We need to find so that . Substituting into the general solution:     We need to find such that . Substituting into : Dividing both sides by : After some standard algebraic manipulations using log and exponent rules, we get:    Stuck on the algebra? Check here.  Taking the natural log of both sides to bring down the exponent:    With , we get This is correct. We can write it in a slightly nicer form using exponent rules:    Why can we write it this way?  Only look here if you want to see the algebra! Using log rules: So .     The ODE for radioactive decay should look familiar.  A connection to the Population Growth Model  The equation is the same structure as the population growth model we studied earlier. The only difference is whether the constant of proportionality is positive or negative, which corresponds to whether the solution has exponential decay (as in the carbon dating example) or exponential growth (such as the population growth model). The main idea of these types of ODEs is:   When the rate of change of a quantity is proportional to the quantity itself, the solution is exponential.   More precisely, whenever you see you can immediately write down the general solution without going through separation of variables each time. At this point in the course, it is worth having this memorized.     Using the ideas from the remark above (no separation of variables needed!), what is the general solution to , and is it exponential growth or decay?     , exponential decay   Correct! Since the equation has the form with , the solution is and the negative exponent means exponential decay.     , exponential growth   Check the sign on . The equation is , so , not . The solution is , not .     , exponential growth   The solution is correct, but think about what a negative exponent does. As , , so this is exponential decay, not growth.     , exponential decay   Be careful -- the constant is not added on, it multiplies the exponential. Adding would mean for any initial condition, which is not right. The correct form is .       This video goes through the content of this page.     "
},
{
  "id": "fact-radioactive-decay",
  "level": "2",
  "url": "sec-1-4-radiocarbon.html#fact-radioactive-decay",
  "type": "Fact",
  "number": "1.4.1",
  "title": "Radioactive Decay Model.",
  "body": " Radioactive Decay Model  A material containing atoms of a radioactive isotope decays at a rate proportional to the number of atoms present: where . Radiocarbon dating uses the radioactive isotope of carbon, for which it is known that . By measuring how much remains in an organism after it dies, we can approximate how long ago the organism died.  "
},
{
  "id": "act-radiocarbon-dating",
  "level": "2",
  "url": "sec-1-4-radiocarbon.html#act-radiocarbon-dating",
  "type": "Activity",
  "number": "1.4.1",
  "title": "Practice: Radiocarbon Dating.",
  "body": " Practice: Radiocarbon Dating   Bones from an animal are measured to have 50% of the original amount of . Approximate how old the bone is. Work through the following steps. Try each part on your own before checking the solution!     Step 1: General Solution   What is the general solution to ?       Correct! You can arrive at this by separation of variables, but at this point it is worth having this form memorized: a differential equation always has general solution .       Not quite. Check the sign on the exponent. Since and the substance is decaying , the exponent should be negative.       This is not correct. Try separating variables: move to one side and to the other, then integrate both sides.       This would be the solution to , not . The on the right-hand side makes this equation exponential, not linear.       Step 2: Find the Age of the Bone   Using with , and the fact that 50% of the original remains, find the age of the bone.    Let denote the initial amount. We need to find so that . Substituting into the general solution:     We need to find such that . Substituting into : Dividing both sides by : After some standard algebraic manipulations using log and exponent rules, we get:    Stuck on the algebra? Check here.  Taking the natural log of both sides to bring down the exponent:    With , we get This is correct. We can write it in a slightly nicer form using exponent rules:    Why can we write it this way?  Only look here if you want to see the algebra! Using log rules: So .     "
},
{
  "id": "rem-memorize-decay-solution",
  "level": "2",
  "url": "sec-1-4-radiocarbon.html#rem-memorize-decay-solution",
  "type": "Remark",
  "number": "1.4.2",
  "title": "A connection to the Population Growth Model.",
  "body": " A connection to the Population Growth Model  The equation is the same structure as the population growth model we studied earlier. The only difference is whether the constant of proportionality is positive or negative, which corresponds to whether the solution has exponential decay (as in the carbon dating example) or exponential growth (such as the population growth model). The main idea of these types of ODEs is:   When the rate of change of a quantity is proportional to the quantity itself, the solution is exponential.   More precisely, whenever you see you can immediately write down the general solution without going through separation of variables each time. At this point in the course, it is worth having this memorized.  "
},
{
  "id": "ex-mc-decay-checkpoint",
  "level": "2",
  "url": "sec-1-4-radiocarbon.html#ex-mc-decay-checkpoint",
  "type": "Checkpoint",
  "number": "1.4.3",
  "title": "",
  "body": "  Using the ideas from the remark above (no separation of variables needed!), what is the general solution to , and is it exponential growth or decay?     , exponential decay   Correct! Since the equation has the form with , the solution is and the negative exponent means exponential decay.     , exponential growth   Check the sign on . The equation is , so , not . The solution is , not .     , exponential growth   The solution is correct, but think about what a negative exponent does. As , , so this is exponential decay, not growth.     , exponential decay   Be careful -- the constant is not added on, it multiplies the exponential. Adding would mean for any initial condition, which is not right. The correct form is .     "
},
{
  "id": "video-radiocarbon",
  "level": "2",
  "url": "sec-1-4-radiocarbon.html#video-radiocarbon",
  "type": "Figure",
  "number": "1.4.4",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-1-4-newton",
  "level": "1",
  "url": "sec-1-4-newton.html",
  "type": "Section",
  "number": "1.4.7",
  "title": "Newton’s Law of Cooling",
  "body": " Newton's Law of Cooling  Another classic application of separable equations comes from a simple physical observation: the rate at which an object cools is proportional to the difference between its temperature and the temperature of the surrounding environment. This is known as Newton's law of cooling . After this, you'll be able to figure out exactly how long until your coffee goes cold!   Newton's Law of Cooling  Let be the temperature of an object at time , and let be the (constant) temperature of the surrounding environment. Then where is a constant that depends on the object and its surroundings.   Notice that this equation is separable. Do you see it's similarity to the ODE ? You should notice a lot of similarities when solving it, as well! Let's work through a concrete example. We have broken in it up to a lot of steps in the activity, so make sure to refer to the conclusion afterwards to get a summary of the main points.    Practice: The Cooling Pizza   A pizza is taken out of a 400°F oven and placed in a room that is 60°F. After 20 minutes, the temperature of the pizza is 100°F. Work through the following steps to find , the temperature of the pizza as a function of time. Try each part on your own before checking the solution!     Step 1: Set Up the ODE   Which of the following is the correct differential equation for this situation?     , where   Correct! The ambient temperature is °F, and the negative sign with ensures the pizza cools (rather than heats up) when .     , where   Close, but the sign is wrong. With and no negative sign, this equation says the pizza heats up when , which is the opposite of cooling. We need a negative sign to model decay toward the ambient temperature.     , where   The structure is right but is not the ambient temperature here. The room is 60°F, so . The value 20 is the number of minutes, not a temperature.     , where   Two issues here: the ambient temperature should be °F, not 20, and Newton's law of cooling is stated with -- the negative sign is already built into the equation. Allowing would double the negative and give the wrong behavior.       Step 2: Equilibrium Solution   Before solving, what is the equilibrium solution of ? If you need a reminder of how to find equilibrium solutions, refer to .       Correct! Setting gives , so . This makes physical sense: when the pizza reaches room temperature, it stops cooling.       Setting means . Since , we need , giving , not 0.       Remember that 20 is the time in minutes, not a temperature. The equilibrium comes from setting and solving for .       That is the initial temperature of the pizza, not the equilibrium. The equilibrium is where , meaning the pizza is no longer changing temperature.       Step 3: Separate Variables and Integrate   Starting from , separate variables to get What do both sides evaluate to?       Correct! The left side can be seen as a u-sub with , so , giving . Notice that because the coefficient of inside is 1, no extra factor appears when substituting -- the integral works out cleanly without any additional adjustment. The right side integrates to as usual.       Almost -- but don't forget the absolute value signs. We need since could be negative, and the logarithm is only defined for positive inputs.       Check the right side. We are integrating with respect to , so the result is , not just .       The left side is not correct. We have , which is a integral giving , not a power rule integral.       Why Leave on the Right?  You might wonder why we separated variables to get rather than dividing by first. Both are valid, but leaving constants on the right avoids an extra factor on the left side and keeps the algebra a bit cleaner. When in doubt, leave constants on the right.    Step 4: Find the General Solution   Starting from , which of the following is the general solution ? This looks very similar to a situation we have seen before -- refer to for a reminder of how to handle the absolute value and constants.       Correct! Exponentiating both sides and absorbing into a single constant gives , so .       Don't forget to add the ambient temperature back. After exponentiating we get , so we need to add 60 to both sides.       Check the sign on the exponent. We had , so exponentiating gives , not . A positive exponent would mean the temperature grows without bound, which doesn't model cooling.       The constant multiplies the exponential, it does not add to it. When we exponentiate we get , and becomes a multiplicative constant.       Step 5: Use Initial Conditions to Find and   We now have . From the problem we know: Use these values to solve for and , and so we will have the final answer!    Finding the constants to get the final answer  We first use to solve for .   Quick algebra solving for  Plugging in :    So we now have:   Now we use to solve for .   Algebra to find  Plugging in : Recall what log property we use in the last line. Something similar was done in the radiocarbon dating example!   Putting it all together:      Let's summarize everything you just worked through!   Summary of Steps  Here is a recap of what we found at each step:   Step 1 (ODE): The model is , .  Step 2 (Equilibrium): The equilibrium solution is  Step 3 (Integrate): Separating and integrating gives .  Step 4 (General solution): Exponentiating gives the general solution .  Step 5 (Initial conditions): Using and gives and , so     This video goes through the content of this page.     "
},
{
  "id": "sec-1-4-newton-2",
  "level": "2",
  "url": "sec-1-4-newton.html#sec-1-4-newton-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton's law of cooling "
},
{
  "id": "fact-newtons-cooling",
  "level": "2",
  "url": "sec-1-4-newton.html#fact-newtons-cooling",
  "type": "Fact",
  "number": "1.4.1",
  "title": "Newton’s Law of Cooling.",
  "body": " Newton's Law of Cooling  Let be the temperature of an object at time , and let be the (constant) temperature of the surrounding environment. Then where is a constant that depends on the object and its surroundings.  "
},
{
  "id": "act-newtons-cooling-pizza",
  "level": "2",
  "url": "sec-1-4-newton.html#act-newtons-cooling-pizza",
  "type": "Activity",
  "number": "1.4.1",
  "title": "Practice: The Cooling Pizza.",
  "body": " Practice: The Cooling Pizza   A pizza is taken out of a 400°F oven and placed in a room that is 60°F. After 20 minutes, the temperature of the pizza is 100°F. Work through the following steps to find , the temperature of the pizza as a function of time. Try each part on your own before checking the solution!     Step 1: Set Up the ODE   Which of the following is the correct differential equation for this situation?     , where   Correct! The ambient temperature is °F, and the negative sign with ensures the pizza cools (rather than heats up) when .     , where   Close, but the sign is wrong. With and no negative sign, this equation says the pizza heats up when , which is the opposite of cooling. We need a negative sign to model decay toward the ambient temperature.     , where   The structure is right but is not the ambient temperature here. The room is 60°F, so . The value 20 is the number of minutes, not a temperature.     , where   Two issues here: the ambient temperature should be °F, not 20, and Newton's law of cooling is stated with -- the negative sign is already built into the equation. Allowing would double the negative and give the wrong behavior.       Step 2: Equilibrium Solution   Before solving, what is the equilibrium solution of ? If you need a reminder of how to find equilibrium solutions, refer to .       Correct! Setting gives , so . This makes physical sense: when the pizza reaches room temperature, it stops cooling.       Setting means . Since , we need , giving , not 0.       Remember that 20 is the time in minutes, not a temperature. The equilibrium comes from setting and solving for .       That is the initial temperature of the pizza, not the equilibrium. The equilibrium is where , meaning the pizza is no longer changing temperature.       Step 3: Separate Variables and Integrate   Starting from , separate variables to get What do both sides evaluate to?       Correct! The left side can be seen as a u-sub with , so , giving . Notice that because the coefficient of inside is 1, no extra factor appears when substituting -- the integral works out cleanly without any additional adjustment. The right side integrates to as usual.       Almost -- but don't forget the absolute value signs. We need since could be negative, and the logarithm is only defined for positive inputs.       Check the right side. We are integrating with respect to , so the result is , not just .       The left side is not correct. We have , which is a integral giving , not a power rule integral.       Why Leave on the Right?  You might wonder why we separated variables to get rather than dividing by first. Both are valid, but leaving constants on the right avoids an extra factor on the left side and keeps the algebra a bit cleaner. When in doubt, leave constants on the right.    Step 4: Find the General Solution   Starting from , which of the following is the general solution ? This looks very similar to a situation we have seen before -- refer to for a reminder of how to handle the absolute value and constants.       Correct! Exponentiating both sides and absorbing into a single constant gives , so .       Don't forget to add the ambient temperature back. After exponentiating we get , so we need to add 60 to both sides.       Check the sign on the exponent. We had , so exponentiating gives , not . A positive exponent would mean the temperature grows without bound, which doesn't model cooling.       The constant multiplies the exponential, it does not add to it. When we exponentiate we get , and becomes a multiplicative constant.       Step 5: Use Initial Conditions to Find and   We now have . From the problem we know: Use these values to solve for and , and so we will have the final answer!    Finding the constants to get the final answer  We first use to solve for .   Quick algebra solving for  Plugging in :    So we now have:   Now we use to solve for .   Algebra to find  Plugging in : Recall what log property we use in the last line. Something similar was done in the radiocarbon dating example!   Putting it all together:     "
},
{
  "id": "video-newton-cooling",
  "level": "2",
  "url": "sec-1-4-newton.html#video-newton-cooling",
  "type": "Figure",
  "number": "1.4.3",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "exercises-1-4",
  "level": "1",
  "url": "exercises-1-4.html",
  "type": "Exercises",
  "number": "1.4.8",
  "title": "Exercises for Section 1.4",
  "body": " Exercises for Section 1.4    Find the explicit general solution to the following differential equation:            Find the explicit general solution of the given differential equation:            Find the explicit general solution to the following differential equation:            Find the explicit general solution to the following differential equation:      and Remember the general solution needs to include both any equilibrium solutions together with all solutions found from separation of variables.      Consider the separable ODE:      Find all equilibrium solutions, then find the explicit general solution.    Equilibrium: . This together with separation of variables yields the general solution: .      Find the specific solution satisfying .     (the equilibrium solution).      Find the specific solution satisfying .            Find a general implicit solution to the following ODE:            Solve the IVP explicitly:            After some ancient bones were excavated, carbon was taken from one of the bones to find that there was 68% as much as from current bones. The decay constant of is , for time in years. How many years old is the bone?    The bone is approximately years old.      The intensity of light through a lake at a depth of meters satisfies      At what depth is the intensity of the light half that of the intensity at the surface ?     meters.      At 5 meters deep, what is the intensity of the light as a fraction of ?           At what depth will the intensity of light be 3% of the intensity at the surface?     meters.       A cake is removed from an oven at F and left to cool at room temperature, which is F. After 29 minutes, the temperature of the cake is F. When will it be F?    The cake will be at F after approximately minutes.     "
},
{
  "id": "ex-1-4-1",
  "level": "2",
  "url": "exercises-1-4.html#ex-1-4-1",
  "type": "Exercise",
  "number": "1.4.8.1",
  "title": "",
  "body": "  Find the explicit general solution to the following differential equation:         "
},
{
  "id": "ex-1-4-2",
  "level": "2",
  "url": "exercises-1-4.html#ex-1-4-2",
  "type": "Exercise",
  "number": "1.4.8.2",
  "title": "",
  "body": "  Find the explicit general solution of the given differential equation:         "
},
{
  "id": "ex-1-4-3",
  "level": "2",
  "url": "exercises-1-4.html#ex-1-4-3",
  "type": "Exercise",
  "number": "1.4.8.3",
  "title": "",
  "body": "  Find the explicit general solution to the following differential equation:         "
},
{
  "id": "ex-1-4-4",
  "level": "2",
  "url": "exercises-1-4.html#ex-1-4-4",
  "type": "Exercise",
  "number": "1.4.8.4",
  "title": "",
  "body": "  Find the explicit general solution to the following differential equation:      and Remember the general solution needs to include both any equilibrium solutions together with all solutions found from separation of variables.   "
},
{
  "id": "ex-1-4-5",
  "level": "2",
  "url": "exercises-1-4.html#ex-1-4-5",
  "type": "Exercise",
  "number": "1.4.8.5",
  "title": "",
  "body": "  Consider the separable ODE:      Find all equilibrium solutions, then find the explicit general solution.    Equilibrium: . This together with separation of variables yields the general solution: .      Find the specific solution satisfying .     (the equilibrium solution).      Find the specific solution satisfying .         "
},
{
  "id": "ex-1-4-6",
  "level": "2",
  "url": "exercises-1-4.html#ex-1-4-6",
  "type": "Exercise",
  "number": "1.4.8.6",
  "title": "",
  "body": "  Find a general implicit solution to the following ODE:         "
},
{
  "id": "ex-1-4-7",
  "level": "2",
  "url": "exercises-1-4.html#ex-1-4-7",
  "type": "Exercise",
  "number": "1.4.8.7",
  "title": "",
  "body": "  Solve the IVP explicitly:         "
},
{
  "id": "ex-1-4-8",
  "level": "2",
  "url": "exercises-1-4.html#ex-1-4-8",
  "type": "Exercise",
  "number": "1.4.8.8",
  "title": "",
  "body": "  After some ancient bones were excavated, carbon was taken from one of the bones to find that there was 68% as much as from current bones. The decay constant of is , for time in years. How many years old is the bone?    The bone is approximately years old.   "
},
{
  "id": "ex-1-4-9",
  "level": "2",
  "url": "exercises-1-4.html#ex-1-4-9",
  "type": "Exercise",
  "number": "1.4.8.9",
  "title": "",
  "body": "  The intensity of light through a lake at a depth of meters satisfies      At what depth is the intensity of the light half that of the intensity at the surface ?     meters.      At 5 meters deep, what is the intensity of the light as a fraction of ?           At what depth will the intensity of light be 3% of the intensity at the surface?     meters.    "
},
{
  "id": "ex-1-4-10",
  "level": "2",
  "url": "exercises-1-4.html#ex-1-4-10",
  "type": "Exercise",
  "number": "1.4.8.10",
  "title": "",
  "body": "  A cake is removed from an oven at F and left to cool at room temperature, which is F. After 29 minutes, the temperature of the cake is F. When will it be F?    The cake will be at F after approximately minutes.   "
},
{
  "id": "sec-linear-first-order-intro",
  "level": "1",
  "url": "sec-linear-first-order-intro.html",
  "type": "Section",
  "number": "1.5.1",
  "title": "Definition of 1st Order Linear ODEs",
  "body": " Definition of 1st Order Linear ODEs  Not all first-order ODEs are separable! Another important class is first-order linear equations. Before we can do anything interesting with them, we first need to recognize what they look like.   First-Order Linear Differential Equation   A first-order linear differential equation is one that can be written in the form where and are functions of only.    As quick example, the following ODE is first-order linear:   The key idea here is that the equation is linear in and : both and appear only to the first power, and never multiplied together. In particular, notice:   No products or powers of and -- terms like or are not allowed.  No compositions involving -- terms like or are not allowed.  The functions and can be anything -- , , constants, and so on -- as long as they depend only on , not on .   Let's explore these ideas in the following non-examples.    . This is not linear: the term is a composition involving , so this cannot be written in the form .   . This is not linear: the left side is a product of and , which is not allowed.   Just as with separable ODEs, it is not always immediately obvious whether an ODE is linear. We will see this in the following example.   Rewriting in Standard Form  Consider the equation . Is this linear? If so, identify and .   Manipulate the ODE to get it in the form .    First move the term to the right: Now divide through by : This is in standard form with So yes, this equation is linear!    Now just a quick check before we get to the fun part!!   Checkpoint: Identifying Linear Equations   Which of the following are first-order linear differential equations? Select all that apply.       Linear. This is already in standard form with and , both functions of only.       Linear. Dividing through by gives , which is in standard form with and .       Not linear. The term is a power of greater than one, which is not allowed in a linear equation.       Not linear. The term is a composition involving , so this cannot be written in the form .       Linear. Dividing through by gives , which is in standard form with and .       This video goes through the content of this page.     "
},
{
  "id": "def-linear-first-order",
  "level": "2",
  "url": "sec-linear-first-order-intro.html#def-linear-first-order",
  "type": "Definition",
  "number": "1.5.1",
  "title": "First-Order Linear Differential Equation.",
  "body": " First-Order Linear Differential Equation   A first-order linear differential equation is one that can be written in the form where and are functions of only.   "
},
{
  "id": "ex-linear-standard-form",
  "level": "2",
  "url": "sec-linear-first-order-intro.html#ex-linear-standard-form",
  "type": "Example",
  "number": "1.5.2",
  "title": "Rewriting in Standard Form.",
  "body": " Rewriting in Standard Form  Consider the equation . Is this linear? If so, identify and .   Manipulate the ODE to get it in the form .    First move the term to the right: Now divide through by : This is in standard form with So yes, this equation is linear!   "
},
{
  "id": "ex-mc-linear-classify",
  "level": "2",
  "url": "sec-linear-first-order-intro.html#ex-mc-linear-classify",
  "type": "Checkpoint",
  "number": "1.5.3",
  "title": "Checkpoint: Identifying Linear Equations.",
  "body": " Checkpoint: Identifying Linear Equations   Which of the following are first-order linear differential equations? Select all that apply.       Linear. This is already in standard form with and , both functions of only.       Linear. Dividing through by gives , which is in standard form with and .       Not linear. The term is a power of greater than one, which is not allowed in a linear equation.       Not linear. The term is a composition involving , so this cannot be written in the form .       Linear. Dividing through by gives , which is in standard form with and .     "
},
{
  "id": "video-linear-first-order",
  "level": "2",
  "url": "sec-linear-first-order-intro.html#video-linear-first-order",
  "type": "Figure",
  "number": "1.5.4",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-solving-first-order-linear",
  "level": "1",
  "url": "sec-solving-first-order-linear.html",
  "type": "Section",
  "number": "1.5.2",
  "title": "Solving First-Order Linear ODEs",
  "body": " Solving First-Order Linear ODEs  We will rely heavily on the product rule, so below is a quick refresher! It also goes into how we specifically use it in this page.  Before diving in, you may want to review the product rule:   Prerequisite: The Product Rule  If and are both functions of , then For example, with and : Now consider and , where is a function of :     Okay so now we know how to recognize when an equation is a first-order linear ODE, let's dig into how to actually solve these things! We'll work through as our guiding example. The steps may seem a bit random at first, but hopefully by the end of this page you'll see why we did each step. The key idea is to find an integrating factor , which is a function we multiply both sides by that lets us rewrite the left-hand side as the derivative of a product. Once we do that, we can simply integrate both sides and solve for .    Solving   It turns out the integrating factor for this equation is . We will see exactly why this is the right choice shortly. For now, let's multiply both sides by and see what happens.     Reversing the Product Rule   Look closely at the left-hand side: . Which of the following is this equal to? You might need to perform the product rule in some of the choices below!       Yes! By the product rule, , which is exactly the left-hand side. We have reversed the product rule, and can now write our equation as        Not quite. , so this gives , which does not match.       Close, but distributing gives . The coefficient on needs to be , not .       No -- this is the derivative of a sum, not a product. We need the product rule here.       What is the Next Step?   We now have The left-hand side is a derivative. What should we do next to solve for ?   Make sure to read the solution feedback by clicking the right answer to see how to finish solving for y.      Integrate both sides with respect to .   Exactly. Integrating both sides gives and dividing by yields The integral on the right requires integration by parts -- we will return to computing it fully later in this section.     Differentiate both sides with respect to .   Differentiating would make things more complicated. Since the left-hand side is already a derivative, we want to undo it by integrating.     Divide both sides by .   Dividing is part of the last step, but we are not quite there yet. The left-hand side is , not . We need to integrate first, then divide.     Multiply both sides by .   Multiplying by is equivalent to dividing by , which comes after integrating, not before.       Let's take stock of what just happened, because the structure here is the key to solving any first-order linear ODE.   Step 1. We multiplied both sides by the integrating factor .   Step 2. This allowed us to recognize the left-hand side as by reversing the product rule.   Step 3. With the left-hand side written as a single derivative, there is no term to deal with separately. We simply integrate both sides and solve for .  The whole game is choosing the integrating factor correctly so that Step 2 works. Let's see how to do that in general.    So do we need to guess and check for an integrating factor every time? Not at all! It turns out that for any first-order linear ODE the integrating factor is always This is precisely what is needed to rewrite the left-hand side in the form , which is what allows us to integrate both sides and solve for .  If you feel like it now, you can try working through why this is true by multiplying on both sides of yourself. You can check the justification now, or later after you've had more practice with solving these ODEs!   Justification of the Integrating Factor (optional to read now)  Multiply both sides of by : Now look at the left-hand side. By the product rule and the chain rule: which is exactly the left-hand side. So we can write: From here, integrate both sides and solve for .     Solution of a First-Order Linear ODE   The general solution of the first-order linear equation can be found by multiplying both sides by the integrating factor  which allows the equation to be rewritten as Integrating both sides and solving for gives the general solution      Let's connect this back to our example . Here and , so the integrating factor is which is exactly what we used in the exploration above. The general solution takes the form where we evaluated using integration by parts.  The theorem tells us this approach works for any first-order linear ODE, not just this one. The only thing that can get in our way now is if the integrals that appear are difficult to evaluate!    This video walks through the content of this section.     "
},
{
  "id": "sec-solving-first-order-linear-5",
  "level": "2",
  "url": "sec-solving-first-order-linear.html#sec-solving-first-order-linear-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor "
},
{
  "id": "exp-integrating-factor-intro",
  "level": "2",
  "url": "sec-solving-first-order-linear.html#exp-integrating-factor-intro",
  "type": "Exploration",
  "number": "1.5.1",
  "title": "Solving <span class=\"process-math\">\\(y' + 2y = x\\)<\/span>.",
  "body": " Solving   It turns out the integrating factor for this equation is . We will see exactly why this is the right choice shortly. For now, let's multiply both sides by and see what happens.     Reversing the Product Rule   Look closely at the left-hand side: . Which of the following is this equal to? You might need to perform the product rule in some of the choices below!       Yes! By the product rule, , which is exactly the left-hand side. We have reversed the product rule, and can now write our equation as        Not quite. , so this gives , which does not match.       Close, but distributing gives . The coefficient on needs to be , not .       No -- this is the derivative of a sum, not a product. We need the product rule here.       What is the Next Step?   We now have The left-hand side is a derivative. What should we do next to solve for ?   Make sure to read the solution feedback by clicking the right answer to see how to finish solving for y.      Integrate both sides with respect to .   Exactly. Integrating both sides gives and dividing by yields The integral on the right requires integration by parts -- we will return to computing it fully later in this section.     Differentiate both sides with respect to .   Differentiating would make things more complicated. Since the left-hand side is already a derivative, we want to undo it by integrating.     Divide both sides by .   Dividing is part of the last step, but we are not quite there yet. The left-hand side is , not . We need to integrate first, then divide.     Multiply both sides by .   Multiplying by is equivalent to dividing by , which comes after integrating, not before.       Let's take stock of what just happened, because the structure here is the key to solving any first-order linear ODE.   Step 1. We multiplied both sides by the integrating factor .   Step 2. This allowed us to recognize the left-hand side as by reversing the product rule.   Step 3. With the left-hand side written as a single derivative, there is no term to deal with separately. We simply integrate both sides and solve for .  The whole game is choosing the integrating factor correctly so that Step 2 works. Let's see how to do that in general.   "
},
{
  "id": "thm-first-order-linear-solution",
  "level": "2",
  "url": "sec-solving-first-order-linear.html#thm-first-order-linear-solution",
  "type": "Theorem",
  "number": "1.5.1",
  "title": "Solution of a First-Order Linear ODE.",
  "body": " Solution of a First-Order Linear ODE   The general solution of the first-order linear equation can be found by multiplying both sides by the integrating factor  which allows the equation to be rewritten as Integrating both sides and solving for gives the general solution    "
},
{
  "id": "video-solving-first-order-linear",
  "level": "2",
  "url": "sec-solving-first-order-linear.html#video-solving-first-order-linear",
  "type": "Figure",
  "number": "1.5.2",
  "title": "",
  "body": " This video walks through the content of this section.   "
},
{
  "id": "sec-linear-standard-examples",
  "level": "1",
  "url": "sec-linear-standard-examples.html",
  "type": "Section",
  "number": "1.5.3",
  "title": "First-Order Linear ODEs: Standard Examples",
  "body": " First-Order Linear ODEs: Standard Examples   Okay so we have figured out that we have some sort of magical integrating factor to help us solve first-order linear ODEs. It's time to make sure we understand how to solve problems with it! In this section we walk through two examples that highlight techniques that come up again and again when solving first-order linear ODEs. For the first example, follow along and work out each step as we go. The second example will get you trying much of it on your own!    Solve  Solve the first-order linear ODE .    Rewrite in standard form by moving the term to the right-hand side.  Compute the integrating factor .  Multiply both sides by , recognize the left-hand side as a single derivative, then integrate both sides.      Step 1: Standard form. Move to the right-hand side: So and .   Step 2: Integrating factor.     Step 3: Multiply both sides by .  The left-hand side is by the product rule, so we can write:    Step 4: Evaluate the integral     U-substitution details  Let , so , which means . Then:     Step 5: Solve for . Divide both sides by :       A Shortcut  Look at what just happened in the previous example. Once we had , we multiplied through, recognized the left-hand side as by the product rule, integrated both sides, and solved for . Those intermediate steps will always play out the same way, as the integrating factor is defined precisely to make the left-hand side collapse like that every single time.  So going forward, once you have , you can skip straight from the original ODE to without writing out the multiplication, product rule collapse, and integration steps in between. You will see this in action in the activity below.     Practice: Solve   Try each part on your own before checking the solution.     Finding the Integrating Factor   For the ODE , we have . Which of the following correctly gives the integrating factor with the integral evaluated?       Correct! We compute , so . We will simplify this in the next part.       Not quite -- this skips the integral. We need , not . Make sure to integrate first.       This would be the integrating factor if , but here . Remember: .       Close -- , but there is a factor of in front. So .        Simplifying the Integrating Factor   From the previous part, . Simplify this completely. Which of the following is correct?       Correct! Using the log property , we get , since is always non-negative and the absolute value drops.       Not quite. Recall that , not . The exponent rule here is .       This would follow from , but we have . The factor of becomes the exponent on , giving .       This is the integrating factor from Example 1, not this problem. Here the exponent is , and .        Finishing the Solution   From the previous parts: the ODE is and . Using the shortcut finish solving for .    Substituting and :      The general solution is . The key steps were identifying , computing and simplifying the integrating factor to , and then applying the shortcut to jump directly to integrating the right-hand side.      Where Does Go?  In the last step above, we had and divided both sides by . This gives  not  . The constant appears when you integrate the right-hand side, and it must be divided by along with everything else in that last step. Forgetting to carry the through to the term is one of the most common mistakes in this method, so be careful!     This video walks through the examples on this page.     "
},
{
  "id": "ex-linear-usub",
  "level": "2",
  "url": "sec-linear-standard-examples.html#ex-linear-usub",
  "type": "Example",
  "number": "1.5.1",
  "title": "Solve <span class=\"process-math\">\\(y' + 2xy + x = 0\\)<\/span>.",
  "body": " Solve  Solve the first-order linear ODE .    Rewrite in standard form by moving the term to the right-hand side.  Compute the integrating factor .  Multiply both sides by , recognize the left-hand side as a single derivative, then integrate both sides.      Step 1: Standard form. Move to the right-hand side: So and .   Step 2: Integrating factor.     Step 3: Multiply both sides by .  The left-hand side is by the product rule, so we can write:    Step 4: Evaluate the integral     U-substitution details  Let , so , which means . Then:     Step 5: Solve for . Divide both sides by :    "
},
{
  "id": "obs-integrating-factor-jump",
  "level": "2",
  "url": "sec-linear-standard-examples.html#obs-integrating-factor-jump",
  "type": "Observation",
  "number": "1.5.2",
  "title": "A Shortcut.",
  "body": " A Shortcut  Look at what just happened in the previous example. Once we had , we multiplied through, recognized the left-hand side as by the product rule, integrated both sides, and solved for . Those intermediate steps will always play out the same way, as the integrating factor is defined precisely to make the left-hand side collapse like that every single time.  So going forward, once you have , you can skip straight from the original ODE to without writing out the multiplication, product rule collapse, and integration steps in between. You will see this in action in the activity below.  "
},
{
  "id": "act-linear-logfactor",
  "level": "2",
  "url": "sec-linear-standard-examples.html#act-linear-logfactor",
  "type": "Activity",
  "number": "1.5.1",
  "title": "Practice: Solve <span class=\"process-math\">\\(y' + \\frac{2}{x}y = 5x^2\\)<\/span>.",
  "body": " Practice: Solve   Try each part on your own before checking the solution.     Finding the Integrating Factor   For the ODE , we have . Which of the following correctly gives the integrating factor with the integral evaluated?       Correct! We compute , so . We will simplify this in the next part.       Not quite -- this skips the integral. We need , not . Make sure to integrate first.       This would be the integrating factor if , but here . Remember: .       Close -- , but there is a factor of in front. So .        Simplifying the Integrating Factor   From the previous part, . Simplify this completely. Which of the following is correct?       Correct! Using the log property , we get , since is always non-negative and the absolute value drops.       Not quite. Recall that , not . The exponent rule here is .       This would follow from , but we have . The factor of becomes the exponent on , giving .       This is the integrating factor from Example 1, not this problem. Here the exponent is , and .        Finishing the Solution   From the previous parts: the ODE is and . Using the shortcut finish solving for .    Substituting and :      The general solution is . The key steps were identifying , computing and simplifying the integrating factor to , and then applying the shortcut to jump directly to integrating the right-hand side.   "
},
{
  "id": "rem-c-placement",
  "level": "2",
  "url": "sec-linear-standard-examples.html#rem-c-placement",
  "type": "Remark",
  "number": "1.5.3",
  "title": "Where Does <span class=\"process-math\">\\(C\\)<\/span> Go?",
  "body": " Where Does Go?  In the last step above, we had and divided both sides by . This gives  not  . The constant appears when you integrate the right-hand side, and it must be divided by along with everything else in that last step. Forgetting to carry the through to the term is one of the most common mistakes in this method, so be careful!  "
},
{
  "id": "video-linear-standard-examples",
  "level": "2",
  "url": "sec-linear-standard-examples.html#video-linear-standard-examples",
  "type": "Figure",
  "number": "1.5.4",
  "title": "",
  "body": " This video walks through the examples on this page.   "
},
{
  "id": "sec-linear-harder",
  "level": "1",
  "url": "sec-linear-harder.html",
  "type": "Section",
  "number": "1.5.4",
  "title": "First-Order Linear ODEs: A Harder Example",
  "body": " First-Order Linear ODEs: A Harder Example    Now for some practice solving a first-order linear ODE. This will help reinforce all the ideas we just went through, plus we will be getting our hands a little messier!    Practice: Solve   In this activity we work through solving a first-order line ODE that is slightly more involved than the previous examples The first few parts will reinforce steps we already discussed, so this will be a great way to practice these steps. The only big difference is that in the last step, where the final integral is a little messier.     Identifying and   Consider the ODE Which of the following correctly identifies and when this equation is written in standard form?      and    Correct! In standard form : . Dividing both sides by gives and .      and    Not quite. In standard form : . The coefficient on must be 1, so you need to divide every term by first.      and    Close, but not quite. In standard form : . is correct, but needs to be divided by too -- every term gets divided.      and    Close, but not quite. In standard form : . is correct, but also needs to be divided by .        Finding the Integrating Factor   Now that we have , find the integrating factor Stop after integrating (the next part will simplify further).     Recall that .  To evaluate use a u-sub (what should u be?)  Don't simplify the resulting yet, that's the next part.     We compute using a u-substitution with .   U-substitution details (read if stuck)  Let , so , which means . Then: (We drop the absolute value since always, and drop since we only need one antiderivative.)   So, , meaning the integrating factor is       Simplifying the Integrating Factor   From the previous part, . Which of the following correctly simplifies this?       Correct! Using the log property , we get .       Not quite. The is in the exponent of , not a coefficient out front. Use the property with .       Close in structure, but the exponent should be , not . We have .       Remember that . Use the log property to simplify.        Finishing the Solution   The next steps -- multiplying by , recognizing the product rule collapse, and integrating -- always work out the same way. So we can always jump directly to:  Fill in and and finish solving for .     Substitute and into to get your first line.  Simplify the integrand -- notice that . Then use the substitution .     Substituting in and :    U-substitution details (read if stuck)  Let , so , meaning . Then:    So we have:      Let's recap the steps for this problem:   Step 1. Divide through by to get standard form, giving and .  Step 2. Find . The integral required a u-substitution, giving , which simplifies via log rules to .  Step 3. Jump directly to and evaluate the right-hand side, which required another u-substitution.  Step 4. Divide both sides by to solve for . Remember that gets divided by , too! The final answer is , not  .     This video walks through the example on this page.     "
},
{
  "id": "act-linear-harder",
  "level": "2",
  "url": "sec-linear-harder.html#act-linear-harder",
  "type": "Activity",
  "number": "1.5.1",
  "title": "Practice: Solve <span class=\"process-math\">\\((x^4+5)y' + x^3 y = x^3\\)<\/span>.",
  "body": " Practice: Solve   In this activity we work through solving a first-order line ODE that is slightly more involved than the previous examples The first few parts will reinforce steps we already discussed, so this will be a great way to practice these steps. The only big difference is that in the last step, where the final integral is a little messier.     Identifying and   Consider the ODE Which of the following correctly identifies and when this equation is written in standard form?      and    Correct! In standard form : . Dividing both sides by gives and .      and    Not quite. In standard form : . The coefficient on must be 1, so you need to divide every term by first.      and    Close, but not quite. In standard form : . is correct, but needs to be divided by too -- every term gets divided.      and    Close, but not quite. In standard form : . is correct, but also needs to be divided by .        Finding the Integrating Factor   Now that we have , find the integrating factor Stop after integrating (the next part will simplify further).     Recall that .  To evaluate use a u-sub (what should u be?)  Don't simplify the resulting yet, that's the next part.     We compute using a u-substitution with .   U-substitution details (read if stuck)  Let , so , which means . Then: (We drop the absolute value since always, and drop since we only need one antiderivative.)   So, , meaning the integrating factor is       Simplifying the Integrating Factor   From the previous part, . Which of the following correctly simplifies this?       Correct! Using the log property , we get .       Not quite. The is in the exponent of , not a coefficient out front. Use the property with .       Close in structure, but the exponent should be , not . We have .       Remember that . Use the log property to simplify.        Finishing the Solution   The next steps -- multiplying by , recognizing the product rule collapse, and integrating -- always work out the same way. So we can always jump directly to:  Fill in and and finish solving for .     Substitute and into to get your first line.  Simplify the integrand -- notice that . Then use the substitution .     Substituting in and :    U-substitution details (read if stuck)  Let , so , meaning . Then:    So we have:     "
},
{
  "id": "video-linear-harder",
  "level": "2",
  "url": "sec-linear-harder.html#video-linear-harder",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": " This video walks through the example on this page.   "
},
{
  "id": "exercises-1-5",
  "level": "1",
  "url": "exercises-1-5.html",
  "type": "Exercises",
  "number": "1.5.5",
  "title": "Exercises for Section 1.5",
  "body": " Exercises for Section 1.5    Which of the following ODEs are first-order linear? Select all that apply.              I, II, III, and IV are first-order linear. V and VI are not.  I, II, III, and IV can all be written in the form where and depend only on the independent variable -- not on .  V is not linear because of the term -- this is a product of the dependent variable and its derivative, which is nonlinear.  VI is not linear because of the term -- the dependent variable appears inside a nonlinear function.      Find the general solution, then use the initial condition to find the particular solution:     Find the general solution.       Find the particular solution satisfying .         Find the general solution, then use the initial condition to find the particular solution:     Find the general solution.       Find the particular solution satisfying .         Find the general solution:          Find the general solution:   Note: Things should cancel out nicely. If you compute the integrating factor correctly, there will be no integration by parts!         Find the general solution, then use the initial condition to find the particular solution:     Find the general solution.       Find the particular solution satisfying .        "
},
{
  "id": "ex-1-5-1",
  "level": "2",
  "url": "exercises-1-5.html#ex-1-5-1",
  "type": "Exercise",
  "number": "1.5.5.1",
  "title": "",
  "body": "  Which of the following ODEs are first-order linear? Select all that apply.              I, II, III, and IV are first-order linear. V and VI are not.  I, II, III, and IV can all be written in the form where and depend only on the independent variable -- not on .  V is not linear because of the term -- this is a product of the dependent variable and its derivative, which is nonlinear.  VI is not linear because of the term -- the dependent variable appears inside a nonlinear function.   "
},
{
  "id": "ex-1-5-2",
  "level": "2",
  "url": "exercises-1-5.html#ex-1-5-2",
  "type": "Exercise",
  "number": "1.5.5.2",
  "title": "",
  "body": "  Find the general solution, then use the initial condition to find the particular solution:     Find the general solution.       Find the particular solution satisfying .      "
},
{
  "id": "ex-1-5-3",
  "level": "2",
  "url": "exercises-1-5.html#ex-1-5-3",
  "type": "Exercise",
  "number": "1.5.5.3",
  "title": "",
  "body": "  Find the general solution, then use the initial condition to find the particular solution:     Find the general solution.       Find the particular solution satisfying .      "
},
{
  "id": "ex-1-5-4",
  "level": "2",
  "url": "exercises-1-5.html#ex-1-5-4",
  "type": "Exercise",
  "number": "1.5.5.4",
  "title": "",
  "body": "  Find the general solution:       "
},
{
  "id": "ex-1-5-5",
  "level": "2",
  "url": "exercises-1-5.html#ex-1-5-5",
  "type": "Exercise",
  "number": "1.5.5.5",
  "title": "",
  "body": "  Find the general solution:   Note: Things should cancel out nicely. If you compute the integrating factor correctly, there will be no integration by parts!      "
},
{
  "id": "ex-1-5-6",
  "level": "2",
  "url": "exercises-1-5.html#ex-1-5-6",
  "type": "Exercise",
  "number": "1.5.5.6",
  "title": "",
  "body": "  Find the general solution, then use the initial condition to find the particular solution:     Find the general solution.       Find the particular solution satisfying .      "
},
{
  "id": "sec-mixing-teaser",
  "level": "1",
  "url": "sec-mixing-teaser.html",
  "type": "Section",
  "number": "1.6.1",
  "title": "Setting Up Mixing Problems: Rate In, Rate Out",
  "body": " Setting Up Mixing Problems: Rate In, Rate Out   In this section and the next, we tackle a classic family of applications called mixing problems . To give you a sense of what we are up against, here is one of the problems we will eventually solve.   A Mixing Problem (Coming Soon!)  There is a tank with 100 gallons of water that initially contains 20 kg of salt. Water with 5 kg of salt per gallon is pumped into the tank at 10 gal\/min. The mixture is kept uniform by stirring, and water leaves the tank at 5 gal\/min. Suppose is the amount of salt in the tank (in kg) as a function of time in minutes. Set up a differential equation and solve for .   We will solve this in a later page. For now, just read it and let it sink in!    If you are like most people, reading that probably made your brain spin a little. There is a lot going on: salt is entering the tank, salt is leaving the tank, and the volume of water is changing over time. And it's all happening all simultaneously! The amount of salt leaving depends on how much is currently in the tank, which is itself changing because of what is entering. Everything is tangled together! How could we possibly even begin to set up an ODE for this?  The key is to step back and think about what is really happening: the amount of salt in the tank is changing over time, and that change is driven by two competing forces. There is stuff coming in, and stuff going out. Before we can untangle the mixing problem above, we need to establish the fundamental principle that underlies all of these problems.    Rate In, Rate Out  Suppose is the amount of some quantity at time , and suppose we can separately identify the rate at which is entering a system and the rate at which it is leaving. Then     Let's convince you of this principle with a familiar idea first.   A Bank Account  Let be the balance (in dollars) in a bank account at time (in months). Suppose you earn a salary of $3000 per month deposited directly into the account, and your monthly expenses total $2200. Set up a differential equation for .  Before you even learned about ODEs, you would probably identify that the net rate of change equals . The balance grows by dollars per month. Now let's rephrase this in terms of ODEs: The balance grows at a steady per month, giving . It is a simple problem, but the same principle applies even when things get much messier.    This deceptively simple principle is what makes mixing problems tractable. Instead of staring at a complicated situation and trying to write down one equation for everything at once, we break it into two separate questions: what is the rate in, and what is the rate out? Then we just subtract. As we will see in the mixing problems ahead, figuring out those two rates takes some careful thought, especially when the concentration of the mixture is changing over time. But the fundamental principle stays the same. Something that seems hopelessly tangled at first becomes manageable once you know where to start.  In the next page, we will use this idea to fully solve a simpler mixing problem. Then we will return to the more complicated example above and tackle it too.    No Video for This Page  There is no video for this page. The next page has a video walking through the first mixing problem.    "
},
{
  "id": "sec-mixing-teaser-2",
  "level": "2",
  "url": "sec-mixing-teaser.html#sec-mixing-teaser-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mixing problems "
},
{
  "id": "ex-mixing-teaser",
  "level": "2",
  "url": "sec-mixing-teaser.html#ex-mixing-teaser",
  "type": "Example",
  "number": "1.6.1",
  "title": "A Mixing Problem (Coming Soon!).",
  "body": " A Mixing Problem (Coming Soon!)  There is a tank with 100 gallons of water that initially contains 20 kg of salt. Water with 5 kg of salt per gallon is pumped into the tank at 10 gal\/min. The mixture is kept uniform by stirring, and water leaves the tank at 5 gal\/min. Suppose is the amount of salt in the tank (in kg) as a function of time in minutes. Set up a differential equation and solve for .   We will solve this in a later page. For now, just read it and let it sink in!   "
},
{
  "id": "obs-rate-in-rate-out",
  "level": "2",
  "url": "sec-mixing-teaser.html#obs-rate-in-rate-out",
  "type": "Observation",
  "number": "1.6.2",
  "title": "Rate In, Rate Out.",
  "body": " Rate In, Rate Out  Suppose is the amount of some quantity at time , and suppose we can separately identify the rate at which is entering a system and the rate at which it is leaving. Then   "
},
{
  "id": "ex-bank-account",
  "level": "2",
  "url": "sec-mixing-teaser.html#ex-bank-account",
  "type": "Example",
  "number": "1.6.3",
  "title": "A Bank Account.",
  "body": " A Bank Account  Let be the balance (in dollars) in a bank account at time (in months). Suppose you earn a salary of $3000 per month deposited directly into the account, and your monthly expenses total $2200. Set up a differential equation for .  Before you even learned about ODEs, you would probably identify that the net rate of change equals . The balance grows by dollars per month. Now let's rephrase this in terms of ODEs: The balance grows at a steady per month, giving . It is a simple problem, but the same principle applies even when things get much messier.  "
},
{
  "id": "rem-no-video-mixing-intro",
  "level": "2",
  "url": "sec-mixing-teaser.html#rem-no-video-mixing-intro",
  "type": "Remark",
  "number": "1.6.4",
  "title": "No Video for This Page.",
  "body": " No Video for This Page  There is no video for this page. The next page has a video walking through the first mixing problem.  "
},
{
  "id": "sec-mixing-constant-volume",
  "level": "1",
  "url": "sec-mixing-constant-volume.html",
  "type": "Section",
  "number": "1.6.2",
  "title": "Mixing Problem: Constant Volume",
  "body": " Mixing Problem: Constant Volume    Before we tackle that beast of a mixing problem we previewed earlier, let's start with a simpler one. We will use the principle . The only tricky part will be using the information we are given (the rate water leaves and the current amount of salt in the tank) to figure out the rate salt leaves.    Mixing Problem with Constant Volume and Pure Water Entering   There is a tank with 100 gallons of water that initially contains 20 kg of salt. Pure water is pumped into the tank at 5 gal\/min. The mixture is kept uniform by stirring, and the (salty) water leaves the tank at 5 gal\/min, thereby keeping the volume of water constant at 100 gallons. Suppose is the amount of salt in the tank (in kg) as a function of time in minutes. Set up a differential equation and solve for .   We know that . Let's figure out each piece.    Part 1: Rate Salt Enters the Tank   Pure water is pumped in at 5 gal\/min. What is the rate at which salt enters the tank?    Don't over think it! How much salt is in pure water?    Since pure water is entering, there is no salt in the incoming water. So the rate salt enters is       Part 2: Rate Salt Leaves the Tank   We need to use the next two pieces of information for the rate out:   Water leaves the tank at 5 gal\/min.    The volume of water in the tank remains at 100 gallons (as the water entering = water leaving)   What is the rate at which salt leaves the tank? This will take more work, and the answer will also involve , the quantity of salt currently in the tank!    The rate salt leaves is not simply 5 gal\/min -- that is the rate water leaves. To get the rate salt leaves, think about the concentration of salt in the tank: The concentration is the amount of salt divided by the volume of water.    The concentration of salt in the tank at time is kg\/gal, and this is the stuff leaving the tank! Multiplying by the flow rate out for water gives the total rate out of salt: which simplifies to kg\/min.   Unit check          Part 3: The ODE and Solution   The hard work is done! We have identified rate in and rate out. Combining them: Apply the initial condition (the initial amount of salt in the tank) and solve for .  The meat of the problem is done, and there is nothing new involved in actually solving the ODE -- this is just a standard separable ODE (it is also first-order linear, so you can use either method!). For completeness, the solution is below.    Solving the ODE (can skim or skip for now)  Separating and integrating: Applying the initial condition : So the solution is        Key Takeaways  The key insight was computing the rate out carefully: where in this problem gallons (constant). A similar idea applies to the rate salt is entering, but the rate in was simply 0 as only pure water was coming in. In the next page, we tackle a harder version where the volume is no longer constant and salty water is entering, which makes both the setup and the solving more involved.     This video walks through the mixing problem on this page.     "
},
{
  "id": "ex-mixing-constant-volume",
  "level": "2",
  "url": "sec-mixing-constant-volume.html#ex-mixing-constant-volume",
  "type": "Example",
  "number": "1.6.1",
  "title": "Mixing Problem with Constant Volume and Pure Water Entering.",
  "body": " Mixing Problem with Constant Volume and Pure Water Entering   There is a tank with 100 gallons of water that initially contains 20 kg of salt. Pure water is pumped into the tank at 5 gal\/min. The mixture is kept uniform by stirring, and the (salty) water leaves the tank at 5 gal\/min, thereby keeping the volume of water constant at 100 gallons. Suppose is the amount of salt in the tank (in kg) as a function of time in minutes. Set up a differential equation and solve for .   We know that . Let's figure out each piece.    Part 1: Rate Salt Enters the Tank   Pure water is pumped in at 5 gal\/min. What is the rate at which salt enters the tank?    Don't over think it! How much salt is in pure water?    Since pure water is entering, there is no salt in the incoming water. So the rate salt enters is       Part 2: Rate Salt Leaves the Tank   We need to use the next two pieces of information for the rate out:   Water leaves the tank at 5 gal\/min.    The volume of water in the tank remains at 100 gallons (as the water entering = water leaving)   What is the rate at which salt leaves the tank? This will take more work, and the answer will also involve , the quantity of salt currently in the tank!    The rate salt leaves is not simply 5 gal\/min -- that is the rate water leaves. To get the rate salt leaves, think about the concentration of salt in the tank: The concentration is the amount of salt divided by the volume of water.    The concentration of salt in the tank at time is kg\/gal, and this is the stuff leaving the tank! Multiplying by the flow rate out for water gives the total rate out of salt: which simplifies to kg\/min.   Unit check          Part 3: The ODE and Solution   The hard work is done! We have identified rate in and rate out. Combining them: Apply the initial condition (the initial amount of salt in the tank) and solve for .  The meat of the problem is done, and there is nothing new involved in actually solving the ODE -- this is just a standard separable ODE (it is also first-order linear, so you can use either method!). For completeness, the solution is below.    Solving the ODE (can skim or skip for now)  Separating and integrating: Applying the initial condition : So the solution is     "
},
{
  "id": "video-mixing-constant-volume",
  "level": "2",
  "url": "sec-mixing-constant-volume.html#video-mixing-constant-volume",
  "type": "Figure",
  "number": "1.6.2",
  "title": "",
  "body": " This video walks through the mixing problem on this page.   "
},
{
  "id": "sec-mixing-volume-changing",
  "level": "1",
  "url": "sec-mixing-volume-changing.html",
  "type": "Section",
  "number": "1.6.3",
  "title": "Mixing Problem: Changing Volume",
  "body": " Mixing Problem: Changing Volume    We are finally ready to revisit the beast of a problem from the intro page! There is quite a bit to parse, and the first time through a problem like this takes some patience. But the main patterns repeat, and with practice these become routine. After working through the four parts below, make sure to check the Key Takeaways at the end which ties everything together neatly.    Mixing Problem with Changing Volume and Salty Water Entering   There is a tank with 100 gallons of water that initially contains 20 kg of salt. Water with 5 kg of salt per gallon is pumped into the tank at 10 gal\/min. The mixture is kept uniform by stirring, and water leaves the tank at 5 gal\/min. Suppose is the amount of salt in the tank (in kg) as a function of time in minutes. Set up a differential equation and solve for .  As before, . Let's figure out each piece.     Part 1: Rate Salt Enters the Tank   This time, salty water is being pumped in -- not pure water! Water with 5 kg of salt per gallon enters at 10 gal\/min. What is the rate at which salt enters the tank?    Rate salt enters = (salt concentration of incoming water) × (water flow rate in). You have both pieces of information in the problem statement.    The incoming water has a salt concentration of 5 kg\/gal, and water flows in at 10 gal\/min. So:       Part 2: Rate Salt Leaves the Tank   A big difference in this example is that the volume of water in the tank, , is changing. However, the same principle as in the previous example applies. Here is the relevant information:   Water leaves the tank at 5 gal\/min (this is the water flow rate out).  represents the volume of water in the tank at time , which is currently unknown.   Without solving for yet, which of the following correctly gives the rate salt leaves the tank ?       Correct! The salt concentration in the tank is kg\/gal, and the water flow rate out is 5 gal\/min. So rate out = kg\/min.       This was the rate out in the previous example, where the volume was constant at 100 gallons. Here the volume is changing, so we need in place of 100.       This is the rate salt enters the tank, not the rate it leaves. The rate out depends on the current concentration of salt in the tank, which involves .       Close -- the concentration is right, but the water flow rate out is 5 gal\/min, not 10. The 10 gal\/min is the flow rate in.        Part 3: Finding   From Part 2, the rate out involves , which we still need to find. Water flows in at 10 gal\/min and out at 5 gal\/min, with an initial volume of 100 gallons. Find .    The same rate in, rate out principle applies to the volume of water: Use the initial condition .     Applying gives , so       Part 4: The ODE and Solution   Putting it all together with : Rewriting in standard form: This is a first-order linear ODE! The hard work is done, the solution to the ODE is below.    Solving the ODE (can skim or skip for now)  We have and . The integrating factor is: Applying the shortcut: Dividing by : Applying : So the solution is        Key Takeaways: Setting Up Mixing Problems  The mixing problems on this page and the previous one follow the same fundamental structure. The two rates you always need are: When the volume is changing, you need to find first using the same rate in, rate out principle applied to volume -- then plug it in. Once the ODE is set up, it is first-order linear, and you already know how to handle that!     This video walks through the mixing problem on this page.     "
},
{
  "id": "ex-mixing-changing-volume",
  "level": "2",
  "url": "sec-mixing-volume-changing.html#ex-mixing-changing-volume",
  "type": "Example",
  "number": "1.6.1",
  "title": "Mixing Problem with Changing Volume and Salty Water Entering.",
  "body": " Mixing Problem with Changing Volume and Salty Water Entering   There is a tank with 100 gallons of water that initially contains 20 kg of salt. Water with 5 kg of salt per gallon is pumped into the tank at 10 gal\/min. The mixture is kept uniform by stirring, and water leaves the tank at 5 gal\/min. Suppose is the amount of salt in the tank (in kg) as a function of time in minutes. Set up a differential equation and solve for .  As before, . Let's figure out each piece.     Part 1: Rate Salt Enters the Tank   This time, salty water is being pumped in -- not pure water! Water with 5 kg of salt per gallon enters at 10 gal\/min. What is the rate at which salt enters the tank?    Rate salt enters = (salt concentration of incoming water) × (water flow rate in). You have both pieces of information in the problem statement.    The incoming water has a salt concentration of 5 kg\/gal, and water flows in at 10 gal\/min. So:       Part 2: Rate Salt Leaves the Tank   A big difference in this example is that the volume of water in the tank, , is changing. However, the same principle as in the previous example applies. Here is the relevant information:   Water leaves the tank at 5 gal\/min (this is the water flow rate out).  represents the volume of water in the tank at time , which is currently unknown.   Without solving for yet, which of the following correctly gives the rate salt leaves the tank ?       Correct! The salt concentration in the tank is kg\/gal, and the water flow rate out is 5 gal\/min. So rate out = kg\/min.       This was the rate out in the previous example, where the volume was constant at 100 gallons. Here the volume is changing, so we need in place of 100.       This is the rate salt enters the tank, not the rate it leaves. The rate out depends on the current concentration of salt in the tank, which involves .       Close -- the concentration is right, but the water flow rate out is 5 gal\/min, not 10. The 10 gal\/min is the flow rate in.        Part 3: Finding   From Part 2, the rate out involves , which we still need to find. Water flows in at 10 gal\/min and out at 5 gal\/min, with an initial volume of 100 gallons. Find .    The same rate in, rate out principle applies to the volume of water: Use the initial condition .     Applying gives , so       Part 4: The ODE and Solution   Putting it all together with : Rewriting in standard form: This is a first-order linear ODE! The hard work is done, the solution to the ODE is below.    Solving the ODE (can skim or skip for now)  We have and . The integrating factor is: Applying the shortcut: Dividing by : Applying : So the solution is     "
},
{
  "id": "video-mixing-volume-changing",
  "level": "2",
  "url": "sec-mixing-volume-changing.html#video-mixing-volume-changing",
  "type": "Figure",
  "number": "1.6.2",
  "title": "",
  "body": " This video walks through the mixing problem on this page.   "
},
{
  "id": "exercises-1-6",
  "level": "1",
  "url": "exercises-1-6.html",
  "type": "Exercises",
  "number": "1.6.4",
  "title": "Exercises for Section 1.6",
  "body": " Exercises for Section 1.6   Setting Up Rate In, Rate Out   For each of the following, define the relevant quantity and write a differential equation using the principle .   Do not solve.      A lake is stocked with fish. The fish population reproduces at a rate proportional to the current population (with proportionality constant ), and fishermen catch fish at a constant rate of 200 fish per year. Let be the number of fish in the lake at time (in years). Write a differential equation for .           A patient receives a drug intravenously at a constant rate of 50 mg\/hour. The body eliminates the drug at a rate proportional to the current amount in the bloodstream, with proportionality constant . Let be the amount of drug (in mg) in the bloodstream at time (in hours). Write a differential equation for .           A tank contains 200 gallons of water with 50 kg of salt dissolved in it. Pure water enters the tank at 4 gal\/min, and the well-mixed solution leaves at 4 gal\/min (so the volume stays constant). Let be the amount of salt (in kg) in the tank at time . Write a differential equation for .             A tank contains 4000 L of a solution consisting of 270 kg of salt dissolved in water. Pure water is pumped into the tank at 7 L\/s, and the well-mixed solution is pumped out at 7 L\/s (so the volume stays constant). Let be the amount of salt (in kg) at time (in seconds).     Set up the differential equation for with its initial condition.            Solve the ODE . Recall that we have discussed a \"short-cut\" to finding solutions to ODEs in the form .           How long until only 15 kg of salt remains in the tank?    Solving :         A tank initially contains 50 gal of pure water. Brine containing 3 lb of salt per gallon enters the tank at 2 gal\/min, and the well-mixed solution leaves at 3 gal\/min. The tank is empty after exactly 50 minutes. Let be the amount of salt (in lb) at time (in minutes).     Set up the differential equation for with its initial condition.  Don't forget to find , the volume of water in the tank at time , as one of the steps!           The ODE from part (a) is first-order linear. Solve it! Don't forget to apply the initial condition.           "
},
{
  "id": "ex-1-6-1",
  "level": "2",
  "url": "exercises-1-6.html#ex-1-6-1",
  "type": "Exercise",
  "number": "1.6.4.1",
  "title": "Setting Up Rate In, Rate Out.",
  "body": " Setting Up Rate In, Rate Out   For each of the following, define the relevant quantity and write a differential equation using the principle .   Do not solve.      A lake is stocked with fish. The fish population reproduces at a rate proportional to the current population (with proportionality constant ), and fishermen catch fish at a constant rate of 200 fish per year. Let be the number of fish in the lake at time (in years). Write a differential equation for .           A patient receives a drug intravenously at a constant rate of 50 mg\/hour. The body eliminates the drug at a rate proportional to the current amount in the bloodstream, with proportionality constant . Let be the amount of drug (in mg) in the bloodstream at time (in hours). Write a differential equation for .           A tank contains 200 gallons of water with 50 kg of salt dissolved in it. Pure water enters the tank at 4 gal\/min, and the well-mixed solution leaves at 4 gal\/min (so the volume stays constant). Let be the amount of salt (in kg) in the tank at time . Write a differential equation for .         "
},
{
  "id": "ex-1-6-2",
  "level": "2",
  "url": "exercises-1-6.html#ex-1-6-2",
  "type": "Exercise",
  "number": "1.6.4.2",
  "title": "",
  "body": "  A tank contains 4000 L of a solution consisting of 270 kg of salt dissolved in water. Pure water is pumped into the tank at 7 L\/s, and the well-mixed solution is pumped out at 7 L\/s (so the volume stays constant). Let be the amount of salt (in kg) at time (in seconds).     Set up the differential equation for with its initial condition.            Solve the ODE . Recall that we have discussed a \"short-cut\" to finding solutions to ODEs in the form .           How long until only 15 kg of salt remains in the tank?    Solving :     "
},
{
  "id": "ex-1-6-3",
  "level": "2",
  "url": "exercises-1-6.html#ex-1-6-3",
  "type": "Exercise",
  "number": "1.6.4.3",
  "title": "",
  "body": "  A tank initially contains 50 gal of pure water. Brine containing 3 lb of salt per gallon enters the tank at 2 gal\/min, and the well-mixed solution leaves at 3 gal\/min. The tank is empty after exactly 50 minutes. Let be the amount of salt (in lb) at time (in minutes).     Set up the differential equation for with its initial condition.  Don't forget to find , the volume of water in the tank at time , as one of the steps!           The ODE from part (a) is first-order linear. Solve it! Don't forget to apply the initial condition.         "
},
{
  "id": "sec-pop-setup",
  "level": "1",
  "url": "sec-pop-setup.html",
  "type": "Section",
  "number": "2.1.1",
  "title": "Setting Up Population Models",
  "body": " Setting Up Population Models   We are now going to explore some very interesting applications of differential equations to population modelling. In the first chapter of these notes, we looked at many examples involving the ODE , whose general solution is . The idea that a population grows at a rate proportional to its current size is actually quite natural: the more individuals there are, the more births there are, and so the faster the population grows. For example, if each member of a population contributes on average 2 new members per year, the total growth rate is 2 times the population size, giving .  But if you think about it a little longer, you will notice the solution to this ODE seems to break down. If , then grows to infinity as . Usually as population grows, there are limiting factors for how big it can get (such as overcrowding, resource depletion, etc). In practice, a rising population tends to put pressure on its own birth rate and death rate in ways that slow growth down.  So to build more realistic population models, we need to go back to an idea you have already seen. Recall from that for any quantity , For a self-contained population with no migration, the rate in comes entirely from births and the rate out comes entirely from deaths. That gives us the following principle.    A General Population Model   Let be the size of a population at time , let be the birth rate (rate of births per person), and let be the death rate (rate of deaths per person). Then      Let's quickly think about why and get multiplied by . The rates and are rates per person . So the total number of births per unit time is not just , it is times the number of people contributing to those births, which is . If a town of 1000 people has a birth rate of 0.02 births per person per year, that is births per year, not just 0.02.   Okay time to get some quick practice setting up population models! For each of the following, is a population function, and we are simply plugging in and into the population model.   Practice: Setting Up Population Models    The population has a constant birth rate of 2 and its death rate is 0. Write a differential equation for .    Recall:  The population model:  is the birth rate per person, is the death rate per person.  Remember: because is a rate per person , the total birth contribution is , not just .    Using with and : Even though the birth rate 2 looks like a plain constant, it is a rate per person, so the total number of births per unit time is . That is why we multiply by .      The birth rate and death rate are both proportional to , with proportionality constants 3 and 4 respectively. Write a differential equation for .    Recall:  The population model:  is the birth rate per person, is the death rate per person.  Remember: because these are rates per person , each one still gets multiplied by .    With and : Notice that both rates were proportional to , and since each rate per person still gets multiplied by another factor of , we end up with terms.      The birth rate is proportional to with constant , and the death rate is proportional to with constant . Which of the following is the correct differential equation for ?       Not quite. Remember that and are rates per person , so each one gets multiplied by . Here , so the birth contribution is , not just .       Correct! With and : Each rate per person gets multiplied by , bumping the exponents up by one.       Not quite. The death rate per person is , which when multiplied by gives , not .        Now let's think about what a more realistic model might look like. In the simple model , both and were constants. But in reality, as a population grows, resources become scarcer and conditions become more crowded. A natural way to capture this is to let the birth rate decrease as the population increases. Suppose we model the birth rate as so that is high when the population is small and decreases as grows. Keeping constant and plugging in: Setting and , this becomes the famous logistic equation .    The Logistic Equation   The logistic equation is where is called the carrying capacity of the population. It is a common model of population growth and the spread of disease. It is standard to require .    While the logistic equation just deals with , in the pages ahead, we are going to explore both the case and , which ends up having some interesting behavior.   This video goes through the content of this page     "
},
{
  "id": "prin-population-model",
  "level": "2",
  "url": "sec-pop-setup.html#prin-population-model",
  "type": "Principle",
  "number": "2.1.1",
  "title": "A General Population Model.",
  "body": " A General Population Model   Let be the size of a population at time , let be the birth rate (rate of births per person), and let be the death rate (rate of deaths per person). Then    "
},
{
  "id": "act-pop-setup",
  "level": "2",
  "url": "sec-pop-setup.html#act-pop-setup",
  "type": "Activity",
  "number": "2.1.1",
  "title": "Practice: Setting Up Population Models.",
  "body": " Practice: Setting Up Population Models    The population has a constant birth rate of 2 and its death rate is 0. Write a differential equation for .    Recall:  The population model:  is the birth rate per person, is the death rate per person.  Remember: because is a rate per person , the total birth contribution is , not just .    Using with and : Even though the birth rate 2 looks like a plain constant, it is a rate per person, so the total number of births per unit time is . That is why we multiply by .      The birth rate and death rate are both proportional to , with proportionality constants 3 and 4 respectively. Write a differential equation for .    Recall:  The population model:  is the birth rate per person, is the death rate per person.  Remember: because these are rates per person , each one still gets multiplied by .    With and : Notice that both rates were proportional to , and since each rate per person still gets multiplied by another factor of , we end up with terms.      The birth rate is proportional to with constant , and the death rate is proportional to with constant . Which of the following is the correct differential equation for ?       Not quite. Remember that and are rates per person , so each one gets multiplied by . Here , so the birth contribution is , not just .       Correct! With and : Each rate per person gets multiplied by , bumping the exponents up by one.       Not quite. The death rate per person is , which when multiplied by gives , not .      "
},
{
  "id": "sec-pop-setup-9",
  "level": "2",
  "url": "sec-pop-setup.html#sec-pop-setup-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logistic equation "
},
{
  "id": "def-logistic-equation",
  "level": "2",
  "url": "sec-pop-setup.html#def-logistic-equation",
  "type": "Definition",
  "number": "2.1.2",
  "title": "The Logistic Equation.",
  "body": " The Logistic Equation   The logistic equation is where is called the carrying capacity of the population. It is a common model of population growth and the spread of disease. It is standard to require .   "
},
{
  "id": "video-pop-setup",
  "level": "2",
  "url": "sec-pop-setup.html#video-pop-setup",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": " This video goes through the content of this page   "
},
{
  "id": "sec-pop-logistic",
  "level": "1",
  "url": "sec-pop-logistic.html",
  "type": "Section",
  "number": "2.1.2",
  "title": "Solving the Logistic Equation",
  "body": " Solving the Logistic Equation   In the previous page we set up the logistic equation as a model for population growth that accounts for crowding and resource limits. It's time to actually solve it!  It's just a separable ODE, so nothing in the solving is new, but it is quite tedious. So this page is organized to allow you to skim over many of the details in actually solving it. The real point of this page comes later when we look at the limiting behavior of the population (i.e. what happens as time to goes to infinity).    Solving a Logistic Equation  The birth rate of a population is the constant 20 and the death rate is proportional to with proportionality constant 4. Set up and solve the resulting differential equation for .  Using with and : This is the logistic equation with and .   Step 1: Equilibrium solutions. Setting gives    Work for equilibrium solutions (if stuck)  Constant solutions satisfy . So we solve which gives or , that is .    Step 2: Separate variables. For non-equilibrium solutions:    Step 3: Integrate both sides.  gives    Full LHS integration with partial fractions (can skim for now)  We use partial fractions. Write Multiplying both sides by and matching coefficients: So and . Therefore: Multiplying through by 5 and using log rules: Exponentiating: .    Step 4: Solve for . The general solution is where is any real number. Note that recovers the equilibrium solution . The equilibrium solution is not captured by this formula and must be noted separately.   Algebra: solving for explicitly (can skim for now)  Starting from , take reciprocals of both sides: Split the left side: Relabeling as : Taking reciprocals:      Now that we have an explicit formula for , one of the most important questions in population modelling is: what happens in the long run? Does the population grow forever, go extinct, or stabilize at some value?     In the solution , what is ?       Not quite. Think about what happens to as . It decays to zero, not grows. So the denominator does not blow up.       Correct! As , , so , giving .       Not quite. Since as , the denominator approaches 1, not 0. So does not blow up.     It depends on .   Good instinct, but notice that as regardless of what is. The limit is the same for every solution.       That limit equals exactly , the carrying capacity. This is not a coincidence. For the logistic equation with , every solution with satisfies No matter where the population starts, it always levels off at the carrying capacity. Also notice that if we recover one of the equilibrium solutions: if the population starts at zero, it stays there.   Solution curves for . For any , the population converges to the carrying capacity as . If , then for all . Use the slider to set the initial value and press Play to watch the solution evolve.       The logistic equation with is a beautifully behaved model. Solutions are bounded, they stabilize, and the long-term behavior is completely predictable regardless of initial conditions. In the next section we look at a similar model with , and we find much more pathological behavior: populations that go extinct in finite time and populations that explode to infinity in finite time.    This video goes through the content of this page     "
},
{
  "id": "ex-logistic-solve",
  "level": "2",
  "url": "sec-pop-logistic.html#ex-logistic-solve",
  "type": "Example",
  "number": "2.1.1",
  "title": "Solving a Logistic Equation.",
  "body": " Solving a Logistic Equation  The birth rate of a population is the constant 20 and the death rate is proportional to with proportionality constant 4. Set up and solve the resulting differential equation for .  Using with and : This is the logistic equation with and .   Step 1: Equilibrium solutions. Setting gives    Work for equilibrium solutions (if stuck)  Constant solutions satisfy . So we solve which gives or , that is .    Step 2: Separate variables. For non-equilibrium solutions:    Step 3: Integrate both sides.  gives    Full LHS integration with partial fractions (can skim for now)  We use partial fractions. Write Multiplying both sides by and matching coefficients: So and . Therefore: Multiplying through by 5 and using log rules: Exponentiating: .    Step 4: Solve for . The general solution is where is any real number. Note that recovers the equilibrium solution . The equilibrium solution is not captured by this formula and must be noted separately.   Algebra: solving for explicitly (can skim for now)  Starting from , take reciprocals of both sides: Split the left side: Relabeling as : Taking reciprocals:    "
},
{
  "id": "ex-mc-logistic-limit",
  "level": "2",
  "url": "sec-pop-logistic.html#ex-mc-logistic-limit",
  "type": "Checkpoint",
  "number": "2.1.2",
  "title": "",
  "body": "  In the solution , what is ?       Not quite. Think about what happens to as . It decays to zero, not grows. So the denominator does not blow up.       Correct! As , , so , giving .       Not quite. Since as , the denominator approaches 1, not 0. So does not blow up.     It depends on .   Good instinct, but notice that as regardless of what is. The limit is the same for every solution.     "
},
{
  "id": "fig-logistic-curves",
  "level": "2",
  "url": "sec-pop-logistic.html#fig-logistic-curves",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": " Solution curves for . For any , the population converges to the carrying capacity as . If , then for all . Use the slider to set the initial value and press Play to watch the solution evolve.   "
},
{
  "id": "video-pop-logistic",
  "level": "2",
  "url": "sec-pop-logistic.html#video-pop-logistic",
  "type": "Figure",
  "number": "2.1.4",
  "title": "",
  "body": " This video goes through the content of this page   "
},
{
  "id": "sec-pop-doomsday",
  "level": "1",
  "url": "sec-pop-doomsday.html",
  "type": "Section",
  "number": "2.1.3",
  "title": "Doomsday vs Extinction",
  "body": " Doomsday vs Extinction   In the previous page we solved the logistic equation with and found quite nice and predictable behavior: no matter where the population starts, it always levels off towards the carrying capacity . Now we ask what happens when . The formula for the general solution looks almost identical, but the behavior is shockingly different, and it depends heavily on the initial condition. Just like in the previous page, our goal here is not to spend too much time on the algebra of solving it, but to understand what the solutions actually do long-term.    General Solution (from previous page)  For the equation , the general solution is where is an arbitrary constant, and the solution must be noted separately. When , every solution satisfies      Doomsday vs Extinction   Consider the following situation: the birth rate of a population is proportional to with proportionality constant 2, the death rate is the constant 20, and time is measured in years. Let's solve the ODE and determine the long-term behavior of the solutions.     Setting Up and the General Solution   Using with and : This is with Since the work is almost identical to the previous page, the general solution is where we have used .      Writing the Solution in Terms of   We will find that the initial value makes a huge difference on the long-term behavior, so we will put the previous expression for in terms of . We find:    Putting in terms of (can skim for now)  Plugging into : Substituting back:        Two Initial Conditions   We will examine what happens with the following two initial conditions. Recall that in this ODE, . We will see that the two solutions behave much differently, and it actually comes down to whether is less than or greater than .  Plugging in each initial condition:   :    :         : Extinction   What is when ?       That was the logistic case with . Here , so the exponent in the solution is positive. As , , so the denominator blows up, not the numerator.       Not quite. The numerator is the fixed number 80. As , , so the denominator grows without bound. What happens to a fixed numerator over a growing denominator?       Correct! As , , so the denominator , giving . When , the population goes extinct.     It depends on .   We have already written the solution in terms of , so is already determined. The limit is a specific number.        : Doomsday   Now consider . Notice something strange: the denominator is not always positive. It equals zero when That is a very short time! As (approaching from the left), what happens to ?       Not quite. As , the denominator approaches zero from the positive side. Think about what happens to a positive numerator divided by a denominator that approaches .       That was the logistic behavior for . Here the denominator is heading toward zero, not toward a nonzero number.       Correct! As , the denominator , so . The population explodes to infinity in the finite time years.       The numerator 120 is positive. As long as , the denominator is also positive and approaching . So the quotient goes to , not .        In finite time years, the population explodes to infinity. When applying this to population modelling, the model completely breaks down at . We call this doomsday : a population explosion in finite time. This is actually a wild thing to occur if you think about it! In finite time, if the population goes to infinity, does this mean the world ends??  Let's explore what is happening with these two limits in the graph below. You can change the value and press \"play\" to see how the population changes with time. Notice how dramatically different the behavior is, even though the ODE is the same and the initial conditions differ by only a small amount relative to .   Solutions to for different initial populations. Use the slider to set and press \"play\" to watch the solution evolve. When , the population goes extinct. When , the population explodes to infinity in finite time (marked by the vertical dashed line). When , the population stays constant forever.      Summary: Long-Term Behavior of     (the logistic equation): for any . The population always levels off at the carrying capacity.   and : . The population goes extinct .   and : the population reaches in finite time. This is doomsday .   : the population is already at the equilibrium solution and stays there forever.       This video goes through the content of this page     "
},
{
  "id": "obs-general-solution-recap",
  "level": "2",
  "url": "sec-pop-doomsday.html#obs-general-solution-recap",
  "type": "Observation",
  "number": "2.1.1",
  "title": "General Solution (from previous page).",
  "body": " General Solution (from previous page)  For the equation , the general solution is where is an arbitrary constant, and the solution must be noted separately. When , every solution satisfies   "
},
{
  "id": "act-doomsday-extinction",
  "level": "2",
  "url": "sec-pop-doomsday.html#act-doomsday-extinction",
  "type": "Activity",
  "number": "2.1.1",
  "title": "Doomsday vs Extinction.",
  "body": " Doomsday vs Extinction   Consider the following situation: the birth rate of a population is proportional to with proportionality constant 2, the death rate is the constant 20, and time is measured in years. Let's solve the ODE and determine the long-term behavior of the solutions.     Setting Up and the General Solution   Using with and : This is with Since the work is almost identical to the previous page, the general solution is where we have used .      Writing the Solution in Terms of   We will find that the initial value makes a huge difference on the long-term behavior, so we will put the previous expression for in terms of . We find:    Putting in terms of (can skim for now)  Plugging into : Substituting back:        Two Initial Conditions   We will examine what happens with the following two initial conditions. Recall that in this ODE, . We will see that the two solutions behave much differently, and it actually comes down to whether is less than or greater than .  Plugging in each initial condition:   :    :         : Extinction   What is when ?       That was the logistic case with . Here , so the exponent in the solution is positive. As , , so the denominator blows up, not the numerator.       Not quite. The numerator is the fixed number 80. As , , so the denominator grows without bound. What happens to a fixed numerator over a growing denominator?       Correct! As , , so the denominator , giving . When , the population goes extinct.     It depends on .   We have already written the solution in terms of , so is already determined. The limit is a specific number.        : Doomsday   Now consider . Notice something strange: the denominator is not always positive. It equals zero when That is a very short time! As (approaching from the left), what happens to ?       Not quite. As , the denominator approaches zero from the positive side. Think about what happens to a positive numerator divided by a denominator that approaches .       That was the logistic behavior for . Here the denominator is heading toward zero, not toward a nonzero number.       Correct! As , the denominator , so . The population explodes to infinity in the finite time years.       The numerator 120 is positive. As long as , the denominator is also positive and approaching . So the quotient goes to , not .      "
},
{
  "id": "sec-pop-doomsday-5",
  "level": "2",
  "url": "sec-pop-doomsday.html#sec-pop-doomsday-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "doomsday "
},
{
  "id": "fig-doomsday-extinction",
  "level": "2",
  "url": "sec-pop-doomsday.html#fig-doomsday-extinction",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": " Solutions to for different initial populations. Use the slider to set and press \"play\" to watch the solution evolve. When , the population goes extinct. When , the population explodes to infinity in finite time (marked by the vertical dashed line). When , the population stays constant forever.   "
},
{
  "id": "obs-doomsday-extinction-summary",
  "level": "2",
  "url": "sec-pop-doomsday.html#obs-doomsday-extinction-summary",
  "type": "Observation",
  "number": "2.1.3",
  "title": "Summary: Long-Term Behavior of <span class=\"process-math\">\\(\\dfrac{dP}{dt} = kP(M-P)\\)<\/span>.",
  "body": " Summary: Long-Term Behavior of     (the logistic equation): for any . The population always levels off at the carrying capacity.   and : . The population goes extinct .   and : the population reaches in finite time. This is doomsday .   : the population is already at the equilibrium solution and stays there forever.    "
},
{
  "id": "video-pop-doomsday",
  "level": "2",
  "url": "sec-pop-doomsday.html#video-pop-doomsday",
  "type": "Figure",
  "number": "2.1.4",
  "title": "",
  "body": " This video goes through the content of this page   "
},
{
  "id": "exercises-2-1",
  "level": "1",
  "url": "exercises-2-1.html",
  "type": "Exercises",
  "number": "2.1.4",
  "title": "Exercises for Section 2.1",
  "body": " Exercises for Section 2.1   Nothing in these exercises should require solving a differential equation from scratch. The focus is on setting up models and understanding long-term behavior.     Setting Up Population Models   For each of the following, write a differential equation for the population using the principle where is the birth rate per person and is the death rate per person. Do not solve.      The birth rate is the constant 5 and the death rate is proportional to with proportionality constant 2.           The birth rate is proportional to with constant , and the death rate is proportional to with constant , where .           A population has birth rate (decreasing as the population grows) and a constant death rate . Write the ODE and identify it as a logistic equation by writing it in the form . What are and ?     This is logistic with and .       Long-Term Behavior: Logistic Equation ( )   Consider the logistic equation which has carrying capacity . The general solution in terms of the initial population is   The following three parts cover the cases , , and .     Suppose . Write the specific solution and compute . What does this mean for the population?     . As , , so . The population approaches carrying capacity as time goes to infinity.      Suppose . Write the specific solution and compute . What does this mean for the population?     . As , , so . The population approaches the carrying capacity.      Suppose . What is for all ?     for all (this is the equilibrium solution).       Long-Term Behavior: Doomsday vs Extinction ( )   Now consider the same equation with : which has threshold . The general solution in terms of is   The following three parts cover the cases , , and . Notice how dramatically different the behavior is compared to Q2, even though the ODE differs only by the sign of .     Suppose . Write the specific solution and compute . What does this mean for the population?     . As , , so . The population goes extinct.      Suppose . Write the specific solution. Find the finite time at which the denominator equals zero, and determine what happens to as . What is this called?     . Denominator zero when . As , . This is doomsday .      Suppose . What is for all ?     for all .       Long-Term Behavior: Newton's Law of Cooling   Recall from that a cake removed from an oven at F and left in a room at F satisfies Newton's law of cooling with specific solution Compute and explain what this means physically.     F. The cake cools to room temperature.     "
},
{
  "id": "ex-2-1-1",
  "level": "2",
  "url": "exercises-2-1.html#ex-2-1-1",
  "type": "Exercise",
  "number": "2.1.4.1",
  "title": "Setting Up Population Models.",
  "body": " Setting Up Population Models   For each of the following, write a differential equation for the population using the principle where is the birth rate per person and is the death rate per person. Do not solve.      The birth rate is the constant 5 and the death rate is proportional to with proportionality constant 2.           The birth rate is proportional to with constant , and the death rate is proportional to with constant , where .           A population has birth rate (decreasing as the population grows) and a constant death rate . Write the ODE and identify it as a logistic equation by writing it in the form . What are and ?     This is logistic with and .    "
},
{
  "id": "ex-2-1-2",
  "level": "2",
  "url": "exercises-2-1.html#ex-2-1-2",
  "type": "Exercise",
  "number": "2.1.4.2",
  "title": "Long-Term Behavior: Logistic Equation (<span class=\"process-math\">\\(k \\gt 0\\)<\/span>).",
  "body": " Long-Term Behavior: Logistic Equation ( )   Consider the logistic equation which has carrying capacity . The general solution in terms of the initial population is   The following three parts cover the cases , , and .     Suppose . Write the specific solution and compute . What does this mean for the population?     . As , , so . The population approaches carrying capacity as time goes to infinity.      Suppose . Write the specific solution and compute . What does this mean for the population?     . As , , so . The population approaches the carrying capacity.      Suppose . What is for all ?     for all (this is the equilibrium solution).    "
},
{
  "id": "ex-2-1-3",
  "level": "2",
  "url": "exercises-2-1.html#ex-2-1-3",
  "type": "Exercise",
  "number": "2.1.4.3",
  "title": "Long-Term Behavior: Doomsday vs Extinction (<span class=\"process-math\">\\(k \\lt 0\\)<\/span>).",
  "body": " Long-Term Behavior: Doomsday vs Extinction ( )   Now consider the same equation with : which has threshold . The general solution in terms of is   The following three parts cover the cases , , and . Notice how dramatically different the behavior is compared to Q2, even though the ODE differs only by the sign of .     Suppose . Write the specific solution and compute . What does this mean for the population?     . As , , so . The population goes extinct.      Suppose . Write the specific solution. Find the finite time at which the denominator equals zero, and determine what happens to as . What is this called?     . Denominator zero when . As , . This is doomsday .      Suppose . What is for all ?     for all .    "
},
{
  "id": "ex-2-1-4",
  "level": "2",
  "url": "exercises-2-1.html#ex-2-1-4",
  "type": "Exercise",
  "number": "2.1.4.4",
  "title": "Long-Term Behavior: Newton’s Law of Cooling.",
  "body": " Long-Term Behavior: Newton's Law of Cooling   Recall from that a cake removed from an oven at F and left in a room at F satisfies Newton's law of cooling with specific solution Compute and explain what this means physically.     F. The cake cools to room temperature.   "
},
{
  "id": "sec-equilibrium-stability",
  "level": "1",
  "url": "sec-equilibrium-stability.html",
  "type": "Section",
  "number": "2.2.1",
  "title": "Stability of Equilibrium Solutions",
  "body": " Stability of Equilibrium Solutions   Recall from that an equilibrium solution is a constant solution , found by setting . In and , we found that both population models had equilibrium solutions at and . But what made those two pages interesting was not the equilibrium solutions themselves, but how it related to all the other solutions nearby.  In the logistic model , no matter where a solution started (above or below ), it converged to as , as long as . The equilibrium at acted like a magnet. The equilibrium at behaved very differently: solutions that started nearby drifted away from it. We will be exploring this type of behavior for the rest of this section.   The figure below shows several solution curves for with different initial values. The equilibrium solutions and are highlighted in green. Note that we include a solution with as well: while a negative population has no physical meaning, it is still a valid solution to the ODE, and it is useful to see how the equation behaves without restricting to a population context.   Solution curves for . The equilibrium solutions and are shown in green. All other solutions converge to as , regardless of the initial value, while solutions near drift away.    We say is stable and is unstable . Here is the precise definition.    Stability of Equilibrium Solutions   Suppose is an equilibrium solution to a differential equation. We say is:   stable : if solutions that start near converge to as .   unstable : if solutions that start near do not converge to .   semi-stable : if solutions on one side of converge to , but solutions on the other side do not.       Now compare this with the model from : . The equilibrium solutions are still and , but the roles are reversed. Solutions that start below decay to zero (extinction), and solutions that start above blow up to infinity in finite time (doomsday). Now is unstable and is stable.   Solution curves for . The equilibrium solutions and are shown in green. Curves starting below decay toward zero. Curves starting above blow up to infinity at a finite doomsday time (marked by vertical dashed lines).    Let's test your understanding of stability in the context of the doomsday\/extinction example from above!    Based on the second graph above, classify the stability of the equilibrium solutions to .     is stable and is unstable.   Correct! Solutions starting near decay toward it, while solutions starting near move away (either to extinction or doomsday depending on which side they star).     is unstable and is stable.   Not quite. That describes the logistic case from the first graph. Look at what happens to solutions that start near in the second graph. Do they converge to 10 or move away from it?     Both and are stable.   Not quite. Look at solutions starting just above — they blow up to infinity rather than returning to 10.     Both and are unstable.   Not quite. Look at solutions starting near — they stay close to and converge toward zero over time.        Video Note  The video below covers the content of this page through approximately the 3:50 mark.    This video, up through time 3:50, goes through the contents of this page     "
},
{
  "id": "fig-logistic-trajectories",
  "level": "2",
  "url": "sec-equilibrium-stability.html#fig-logistic-trajectories",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " Solution curves for . The equilibrium solutions and are shown in green. All other solutions converge to as , regardless of the initial value, while solutions near drift away.   "
},
{
  "id": "sec-equilibrium-stability-6",
  "level": "2",
  "url": "sec-equilibrium-stability.html#sec-equilibrium-stability-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stable unstable "
},
{
  "id": "def-stability",
  "level": "2",
  "url": "sec-equilibrium-stability.html#def-stability",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Stability of Equilibrium Solutions.",
  "body": " Stability of Equilibrium Solutions   Suppose is an equilibrium solution to a differential equation. We say is:   stable : if solutions that start near converge to as .   unstable : if solutions that start near do not converge to .   semi-stable : if solutions on one side of converge to , but solutions on the other side do not.     "
},
{
  "id": "fig-doomsday-trajectories",
  "level": "2",
  "url": "sec-equilibrium-stability.html#fig-doomsday-trajectories",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": " Solution curves for . The equilibrium solutions and are shown in green. Curves starting below decay toward zero. Curves starting above blow up to infinity at a finite doomsday time (marked by vertical dashed lines).   "
},
{
  "id": "ex-mc-doomsday-stability",
  "level": "2",
  "url": "sec-equilibrium-stability.html#ex-mc-doomsday-stability",
  "type": "Checkpoint",
  "number": "2.2.4",
  "title": "",
  "body": "  Based on the second graph above, classify the stability of the equilibrium solutions to .     is stable and is unstable.   Correct! Solutions starting near decay toward it, while solutions starting near move away (either to extinction or doomsday depending on which side they star).     is unstable and is stable.   Not quite. That describes the logistic case from the first graph. Look at what happens to solutions that start near in the second graph. Do they converge to 10 or move away from it?     Both and are stable.   Not quite. Look at solutions starting just above — they blow up to infinity rather than returning to 10.     Both and are unstable.   Not quite. Look at solutions starting near — they stay close to and converge toward zero over time.     "
},
{
  "id": "rem-stability-video",
  "level": "2",
  "url": "sec-equilibrium-stability.html#rem-stability-video",
  "type": "Remark",
  "number": "2.2.5",
  "title": "Video Note.",
  "body": " Video Note  The video below covers the content of this page through approximately the 3:50 mark.  "
},
{
  "id": "video-equilibrium-stability",
  "level": "2",
  "url": "sec-equilibrium-stability.html#video-equilibrium-stability",
  "type": "Figure",
  "number": "2.2.6",
  "title": "",
  "body": " This video, up through time 3:50, goes through the contents of this page   "
},
{
  "id": "sec-autonomous-odes",
  "level": "1",
  "url": "sec-autonomous-odes.html",
  "type": "Section",
  "number": "2.2.2",
  "title": "Autonomous Differential Equations",
  "body": " Autonomous Differential Equations   Look back at the two population models we have been working with: and . Notice that in both cases, the right-hand side only involves , and there is no anywhere. When the rate of change depends only on the current state and not on time itself, the long-term behavior of solutions is much more predictable and structured. We refer to such equations as autonomous ODEs .    Autonomous First-Order Differential Equation   A first-order autonomous differential equation is one of the form where the right-hand side depends only on and not explicitly on .    For example, and are both autonomous, since the right-hand side involves only . On the other hand, is not autonomous, since appears explicitly on the right-hand side.     Select all of the following that are first-order autonomous differential equations.       Correct! The right-hand side depends only on .       Correct! The right-hand side depends only on .       Correct! Even though is a complicated function, it depends only on , not on .       Not autonomous. The right-hand side involves explicitly, so this does not fit the form .       Equilibrium Solutions to Autonomous DEs  The equilibrium solutions to occur when .   For example, the equilibrium solutions to are found by solving , giving and .   Why this is true  An equilibrium solution is a constant function . Since is constant, . Plugging into the ODE gives so must be a zero of . Conversely, if then satisfies the ODE since both sides equal zero.     Find all equilibrium solutions to .     and   Not quite. Set and solve. Remember only when .       Correct! Setting gives as the only equilibrium solution.       Not quite. Plug into : you get , so is not an equilibrium.     There are no equilibrium solutions.   Not quite. Set and solve for .         Starting at time 3:50, this video goes through the contents of this page     "
},
{
  "id": "def-autonomous-ode",
  "level": "2",
  "url": "sec-autonomous-odes.html#def-autonomous-ode",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Autonomous First-Order Differential Equation.",
  "body": " Autonomous First-Order Differential Equation   A first-order autonomous differential equation is one of the form where the right-hand side depends only on and not explicitly on .   "
},
{
  "id": "ex-mc-autonomous",
  "level": "2",
  "url": "sec-autonomous-odes.html#ex-mc-autonomous",
  "type": "Checkpoint",
  "number": "2.2.2",
  "title": "",
  "body": "  Select all of the following that are first-order autonomous differential equations.       Correct! The right-hand side depends only on .       Correct! The right-hand side depends only on .       Correct! Even though is a complicated function, it depends only on , not on .       Not autonomous. The right-hand side involves explicitly, so this does not fit the form .     "
},
{
  "id": "obs-equilibrium-autonomous",
  "level": "2",
  "url": "sec-autonomous-odes.html#obs-equilibrium-autonomous",
  "type": "Observation",
  "number": "2.2.3",
  "title": "Equilibrium Solutions to Autonomous DEs.",
  "body": " Equilibrium Solutions to Autonomous DEs  The equilibrium solutions to occur when .  "
},
{
  "id": "ex-mc-equilibrium-autonomous",
  "level": "2",
  "url": "sec-autonomous-odes.html#ex-mc-equilibrium-autonomous",
  "type": "Checkpoint",
  "number": "2.2.4",
  "title": "",
  "body": "  Find all equilibrium solutions to .     and   Not quite. Set and solve. Remember only when .       Correct! Setting gives as the only equilibrium solution.       Not quite. Plug into : you get , so is not an equilibrium.     There are no equilibrium solutions.   Not quite. Set and solve for .     "
},
{
  "id": "video-equilibrium-stability-part2",
  "level": "2",
  "url": "sec-autonomous-odes.html#video-equilibrium-stability-part2",
  "type": "Figure",
  "number": "2.2.5",
  "title": "",
  "body": " Starting at time 3:50, this video goes through the contents of this page   "
},
{
  "id": "sec-phase-diagrams",
  "level": "1",
  "url": "sec-phase-diagrams.html",
  "type": "Section",
  "number": "2.2.3",
  "title": "Analyzing Stability with Phase Diagrams",
  "body": " Analyzing Stability with Phase Diagrams   We now develop a tool for classifying the stability of equilibrium solutions without having to solve the ODE explicitly. Some of what we say here will be justified more carefully in the next section. In this page, we are going to just make sure we understand how to draw and interpret phase diagrams.   Consider , which has equilibrium solutions and . These two equilibria divide the -axis into three regions.  The figure below shows the solution curves with each region labeled. Notice that solutions starting in a region stay in that region. They get trapped between the equilibrium solutions and will either be increasing or decreasing forever! We will justify why this always happens in the next section.   Solution curves for with the sign of labeled in each region. Equilibrium solutions and are shown in green.    In each region, the sign of tells us whether solutions are increasing or decreasing.  We can capture all of this information in a compact diagram called a phase diagram . We draw the -axis, mark the equilibrium solutions as points, and draw arrows pointing right where (solutions increasing) and arrows pointing left where (solutions decreasing).   Phase diagram for . Arrows point right where and left where . Since arrows on both sides of point toward it, is stable. Since arrows on both sides of point away from it, is unstable.    From the directions of the arrows, we can read off the stability directly. At : arrows on both sides point toward it, so solutions approaching from below are increasing toward 10, and solutions above are decreasing toward 10. So is stable . At : the arrow to the left points away, and the arrow to the right also points away (solutions between 0 and 10 increase, moving away from 0). So is unstable .      Phase Diagram for   Let's work through the phase diagram method step by step for .    Step 1: Find the equilibrium solutions   The equilibrium solutions are and .    Work  Set . Then or , giving and .     Step 2: Determine the sign of in each region   The equilibria divide the -axis into three regions. The sign of in each:   : (solutions increasing).   : (solutions decreasing).   : (solutions increasing).      Sign analysis  Pick a test value in each region and evaluate :   : .   : .   : .  Or use sign analysis: has factors and . The signs flip at and .     Step 3: Draw the phase diagram   Based on the sign analysis above, here is the phase diagram for :   Phase diagram for .       Step 4: Determine stability   From the phase diagram: is stable and is unstable .    Reading stability from the arrows  At : the arrow to the left points right (toward 0), and the arrow to the right points left (toward 0). Both arrows converge toward , so it is stable.  At : the arrow to the left points left (away from 10), and the arrow to the right points right (away from 10). Both arrows diverge away from , so it is unstable.       Phase Diagram for   Now let's try an example with a twist.    Step 1: Find the equilibrium solutions   The only equilibrium solution is .    Work  Set , giving as the only solution.     Step 2: Determine the sign of in each region   The equilibrium divides the -axis into two regions. The sign of in each:   : (solutions increasing).   : (solutions increasing).      Sign analysis  Since for all , the derivative is always non-negative. It equals zero only at . So solutions are increasing on both sides of the equilibrium.     Step 3: Draw the phase diagram   Based on the sign analysis, here is the phase diagram for :   Phase diagram for .       Step 4: Determine stability   What is the stability of ?     Stable   Not quite. Look at the arrows on both sides of in the phase diagram. Solutions below are increasing toward it, but what about solutions above?     Unstable   Not quite. Solutions below are increasing and do converge toward it — so it is not fully unstable either.     Semi-stable   Correct! Both arrows point right. Solutions starting below increase toward it (converging), but solutions starting above also increase — moving away from it (diverging). One side converges, the other diverges, so is semi-stable.         This video goes through the content of this page.     "
},
{
  "id": "fig-phase-intro",
  "level": "2",
  "url": "sec-phase-diagrams.html#fig-phase-intro",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " Solution curves for with the sign of labeled in each region. Equilibrium solutions and are shown in green.   "
},
{
  "id": "sec-phase-diagrams-7",
  "level": "2",
  "url": "sec-phase-diagrams.html#sec-phase-diagrams-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "phase diagram "
},
{
  "id": "fig-phase-diagram-1a",
  "level": "2",
  "url": "sec-phase-diagrams.html#fig-phase-diagram-1a",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " Phase diagram for . Arrows point right where and left where . Since arrows on both sides of point toward it, is stable. Since arrows on both sides of point away from it, is unstable.   "
},
{
  "id": "sec-phase-diagrams-9",
  "level": "2",
  "url": "sec-phase-diagrams.html#sec-phase-diagrams-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stable unstable "
},
{
  "id": "act-phase-diagram-1",
  "level": "2",
  "url": "sec-phase-diagrams.html#act-phase-diagram-1",
  "type": "Activity",
  "number": "2.2.1",
  "title": "Phase Diagram for <span class=\"process-math\">\\(\\dfrac{dP}{dt} = 2P(P-10)\\)<\/span>.",
  "body": " Phase Diagram for   Let's work through the phase diagram method step by step for .    Step 1: Find the equilibrium solutions   The equilibrium solutions are and .    Work  Set . Then or , giving and .     Step 2: Determine the sign of in each region   The equilibria divide the -axis into three regions. The sign of in each:   : (solutions increasing).   : (solutions decreasing).   : (solutions increasing).      Sign analysis  Pick a test value in each region and evaluate :   : .   : .   : .  Or use sign analysis: has factors and . The signs flip at and .     Step 3: Draw the phase diagram   Based on the sign analysis above, here is the phase diagram for :   Phase diagram for .       Step 4: Determine stability   From the phase diagram: is stable and is unstable .    Reading stability from the arrows  At : the arrow to the left points right (toward 0), and the arrow to the right points left (toward 0). Both arrows converge toward , so it is stable.  At : the arrow to the left points left (away from 10), and the arrow to the right points right (away from 10). Both arrows diverge away from , so it is unstable.    "
},
{
  "id": "act-phase-diagram-2",
  "level": "2",
  "url": "sec-phase-diagrams.html#act-phase-diagram-2",
  "type": "Activity",
  "number": "2.2.2",
  "title": "Phase Diagram for <span class=\"process-math\">\\(\\dfrac{dy}{dx} = (y-2)^2\\)<\/span>.",
  "body": " Phase Diagram for   Now let's try an example with a twist.    Step 1: Find the equilibrium solutions   The only equilibrium solution is .    Work  Set , giving as the only solution.     Step 2: Determine the sign of in each region   The equilibrium divides the -axis into two regions. The sign of in each:   : (solutions increasing).   : (solutions increasing).      Sign analysis  Since for all , the derivative is always non-negative. It equals zero only at . So solutions are increasing on both sides of the equilibrium.     Step 3: Draw the phase diagram   Based on the sign analysis, here is the phase diagram for :   Phase diagram for .       Step 4: Determine stability   What is the stability of ?     Stable   Not quite. Look at the arrows on both sides of in the phase diagram. Solutions below are increasing toward it, but what about solutions above?     Unstable   Not quite. Solutions below are increasing and do converge toward it — so it is not fully unstable either.     Semi-stable   Correct! Both arrows point right. Solutions starting below increase toward it (converging), but solutions starting above also increase — moving away from it (diverging). One side converges, the other diverges, so is semi-stable.      "
},
{
  "id": "video-phase-diagrams",
  "level": "2",
  "url": "sec-phase-diagrams.html#video-phase-diagrams",
  "type": "Figure",
  "number": "2.2.5",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-existence-uniqueness",
  "level": "1",
  "url": "sec-existence-uniqueness.html",
  "type": "Section",
  "number": "2.2.4",
  "title": "Consequences of Existence and Uniqueness",
  "body": " Consequences of Existence and Uniqueness  The phase diagram method we developed on the previous page is powerful, but you might be wondering why it actually works. Why does the sign of tell us the long-term behavior of solutions? Why can't a solution just jump from one region to another? The answer comes from a fundamental theorem about autonomous differential equations. We aren't going to dwell on the theorem itself, but we need to understand how its consequences give us a much cleaner picture of the behavior of solutions and why our stability analysis is reliable.   Note. This page does get a bit more theoretical than we typically do in this class. It's okay if you don't 100% get the theory the first time you learn this. The important thing for this page is to get the \"gist\" so that you can build intuition on why phase diagrams work. Going forward, you need to understand how to apply these results in the pages that follow.   Existence and Uniqueness for First-Order Autonomous DEs   Suppose we are solving the first-order autonomous DE , where and are continuous. Then given any initial value :  A solution exists.  The solution is unique.  Solutions do not intersect.       Optional: full technical statement  The theorem above is somewhat simplified. The full statement is: suppose and are continuous on some open region of the -plane containing the point . Then there exists an interval for some on which a unique solution to with exists. Since our equation is autonomous (no on the right-hand side), we can take without loss of generality.   The video below walks through the reasoning behind each of the consequences listed here. We will not write out all the reasoning in the notes. What matters most is understanding and applying the results, which we do on this page immediately after the video.   This video explains how the theorem implies the consequences below, which is not contained in the notes.     Consequences of Existence and Uniqueness  In a first-order autonomous ODE , the following apply to continuous solutions :   A solution that starts at an equilibrium value stays there. If is an equilibrium solution, then the only solution with is itself. No other solution can pass through a point on an equilibrium.   Solutions increase or decrease forever. Since the sign of is constant within each zone between equilibria, and solutions cannot intersect one another, a solution that starts out increasing stays increasing for its entire interval of existence, and similarly for decreasing solutions.   Solutions are trapped between equilibria. Because solutions are continuous and cannot cross an equilibrium (by consequence 1), a solution that starts between two adjacent equilibria stays between them for its entire interval of existence.   Convergence to stable equilibria. A solution that is increasing and trapped below an equilibrium (with no other equilibrium between them) must converge to as . Similarly, a decreasing solution trapped above an equilibrium must converge to it.     These consequences show that the phase diagram is useful for determining the long-term behavior of solutions. For example, in consequence 2, we see that determining whether a continuous solution is growing or decreasing forever is determined purely by which region falls in. For : if or , then grows forever. If , then decreases forever.   Long-term behavior of solutions to based on initial value.    We can also read stability directly from the phase diagram, which relates to consequence 4. If arrows on both sides of an equilibrium point toward it, the equilibrium is stable, meaning nearby solutions converge to it. If arrows on both sides point away, it is unstable. For this example, is stable and is unstable.   Stability of equilibrium solutions to read from the phase diagram.     A Note on \"Growing Forever\" and the Doomsday Case  When we say a solution \"grows forever,\" the doomsday example from deserves a careful look. In that example, the solution with starts above the upper equilibrium and is increasing. The solution remains continuous and stays above on its entire interval of existence , and it blows up to infinity as . So it does grow forever, but only up to time , and the model breaks down at doomsday.  For , if we allow discontinuous solutions, the formula continues to give values, but the solution jumps from to large negative values at , which is physically meaningless for a population and not a continuous solution. In particular, it is not accurate to say as .  In the stability analysis that follows, we will classify solutions starting above an upper non-stable equilibrium as \"growing forever\" without distinguishing the finite-time blowup case from true growth to infinity. The phase diagram correctly captures the direction of this behavior either way.   Before we move onto more complicated examples, let's make sure we understand how to deduce some behavior from a phase diagram. Consider the phase diagram below for a population model .   Phase diagram for a population model with equilibria at and .      In the phase diagram above: for which values of does the solution grow forever?       Not quite. Check the arrow directions in those regions. Do they point right (increasing) or left (decreasing)?       Correct! In the region , the arrow points right, so solutions are increasing and grow forever. By consequence 4, since the solution is trapped below and increasing, it converges to . So it grows forever, just not without bound.       Not quite. Look at what happens for . The arrow points left, meaning solutions are decreasing there.     No solution grows forever.   Not quite. Look at the arrow in the middle region. It points right, meaning solutions there are increasing for their entire interval of existence.      Notice that in this case, grows forever but not without bound. It converges to the stable equilibrium while it increases for all . This is different from the doomsday case, where solutions grow forever and blow up to infinity in finite time.   "
},
{
  "id": "thm-existence-uniqueness-autonomous",
  "level": "2",
  "url": "sec-existence-uniqueness.html#thm-existence-uniqueness-autonomous",
  "type": "Theorem",
  "number": "2.2.1",
  "title": "Existence and Uniqueness for First-Order Autonomous DEs.",
  "body": " Existence and Uniqueness for First-Order Autonomous DEs   Suppose we are solving the first-order autonomous DE , where and are continuous. Then given any initial value :  A solution exists.  The solution is unique.  Solutions do not intersect.     "
},
{
  "id": "video-existence-uniqueness",
  "level": "2",
  "url": "sec-existence-uniqueness.html#video-existence-uniqueness",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " This video explains how the theorem implies the consequences below, which is not contained in the notes.   "
},
{
  "id": "obs-eu-consequences",
  "level": "2",
  "url": "sec-existence-uniqueness.html#obs-eu-consequences",
  "type": "Observation",
  "number": "2.2.3",
  "title": "Consequences of Existence and Uniqueness.",
  "body": " Consequences of Existence and Uniqueness  In a first-order autonomous ODE , the following apply to continuous solutions :   A solution that starts at an equilibrium value stays there. If is an equilibrium solution, then the only solution with is itself. No other solution can pass through a point on an equilibrium.   Solutions increase or decrease forever. Since the sign of is constant within each zone between equilibria, and solutions cannot intersect one another, a solution that starts out increasing stays increasing for its entire interval of existence, and similarly for decreasing solutions.   Solutions are trapped between equilibria. Because solutions are continuous and cannot cross an equilibrium (by consequence 1), a solution that starts between two adjacent equilibria stays between them for its entire interval of existence.   Convergence to stable equilibria. A solution that is increasing and trapped below an equilibrium (with no other equilibrium between them) must converge to as . Similarly, a decreasing solution trapped above an equilibrium must converge to it.    "
},
{
  "id": "fig-phase-grows",
  "level": "2",
  "url": "sec-existence-uniqueness.html#fig-phase-grows",
  "type": "Figure",
  "number": "2.2.4",
  "title": "",
  "body": " Long-term behavior of solutions to based on initial value.   "
},
{
  "id": "fig-phase-stability",
  "level": "2",
  "url": "sec-existence-uniqueness.html#fig-phase-stability",
  "type": "Figure",
  "number": "2.2.5",
  "title": "",
  "body": " Stability of equilibrium solutions to read from the phase diagram.   "
},
{
  "id": "rem-doomsday-continuity",
  "level": "2",
  "url": "sec-existence-uniqueness.html#rem-doomsday-continuity",
  "type": "Remark",
  "number": "2.2.6",
  "title": "A Note on \"Growing Forever\" and the Doomsday Case.",
  "body": " A Note on \"Growing Forever\" and the Doomsday Case  When we say a solution \"grows forever,\" the doomsday example from deserves a careful look. In that example, the solution with starts above the upper equilibrium and is increasing. The solution remains continuous and stays above on its entire interval of existence , and it blows up to infinity as . So it does grow forever, but only up to time , and the model breaks down at doomsday.  For , if we allow discontinuous solutions, the formula continues to give values, but the solution jumps from to large negative values at , which is physically meaningless for a population and not a continuous solution. In particular, it is not accurate to say as .  In the stability analysis that follows, we will classify solutions starting above an upper non-stable equilibrium as \"growing forever\" without distinguishing the finite-time blowup case from true growth to infinity. The phase diagram correctly captures the direction of this behavior either way.  "
},
{
  "id": "fig-phase-mc",
  "level": "2",
  "url": "sec-existence-uniqueness.html#fig-phase-mc",
  "type": "Figure",
  "number": "2.2.7",
  "title": "",
  "body": " Phase diagram for a population model with equilibria at and .   "
},
{
  "id": "ex-mc-grows-forever",
  "level": "2",
  "url": "sec-existence-uniqueness.html#ex-mc-grows-forever",
  "type": "Checkpoint",
  "number": "2.2.8",
  "title": "",
  "body": "  In the phase diagram above: for which values of does the solution grow forever?       Not quite. Check the arrow directions in those regions. Do they point right (increasing) or left (decreasing)?       Correct! In the region , the arrow points right, so solutions are increasing and grow forever. By consequence 4, since the solution is trapped below and increasing, it converges to . So it grows forever, just not without bound.       Not quite. Look at what happens for . The arrow points left, meaning solutions are decreasing there.     No solution grows forever.   Not quite. Look at the arrow in the middle region. It points right, meaning solutions there are increasing for their entire interval of existence.     "
},
{
  "id": "sec-phase-applications",
  "level": "1",
  "url": "sec-phase-applications.html",
  "type": "Section",
  "number": "2.2.5",
  "title": "Applying Phase Diagrams to Population Models",
  "body": " Applying Phase Diagrams to Population Models   We now apply the phase diagram method to answer real questions about population models. The key question we focus on is: for which initial values does a population grow forever?    Example 1   Suppose a population is modelled by Find all values of for which the population grows forever.    Step 1: Find the equilibrium solutions   Find all equilibrium solutions to .    Solution  Set , giving and .     Step 2: Draw the phase diagram   Determine the sign of in each region and draw the phase diagram.    Solution  Test a value in each region:  : , so arrow points right.  : , so arrow points left.  : , so arrow points right.     Phase diagram for . Equilibria at and . Arrows point right for and , and left for .       Step 3: Determine which give growth forever   Using the phase diagram, for which values of does grow forever?       Correct! Both regions have rightward arrows, so solutions starting there are increasing and grow forever.       Not quite. In this region the arrow points left, so solutions are decreasing, not growing.       Close, but the left region should include all , not just . Solutions starting at negative values of also have rightward arrows.     only   Not quite. Check the arrow direction for as well. It also points right, so solutions there are also growing.         Example 2   Suppose a population is modelled by Find all values of for which the population grows forever.    Step 1: Find the equilibrium solutions   Find all equilibrium solutions to .    Solution  Set , giving and .     Step 2: Draw the phase diagram   Determine the sign of in each region and draw the phase diagram.    Solution  Test a value in each region:  : , so arrow points left.  : , so arrow points right.  : , so arrow points left.     Phase diagram for . Equilibria at and . Arrows point left for and , and right for .       Step 3: Determine which give growth forever   Using the phase diagram, for which values of does grow forever?       Correct! This is the only region with a rightward arrow, so solutions starting there are increasing and grow forever.  By the way, is a stable equilibrium above, so the solution is trapped below it and converges to , but is increasing for all of time.       Not quite. In both of these regions the arrow points left, so solutions are decreasing, not growing.     only   Not quite. Check the arrow direction for . It points left, so solutions there are actually decreasing.       Close, but check the arrow direction for . It points left, so solutions starting above are decreasing, not growing.         This video goes through the content of this page.     "
},
{
  "id": "act-phase-app-1",
  "level": "2",
  "url": "sec-phase-applications.html#act-phase-app-1",
  "type": "Activity",
  "number": "2.2.1",
  "title": "Example 1.",
  "body": " Example 1   Suppose a population is modelled by Find all values of for which the population grows forever.    Step 1: Find the equilibrium solutions   Find all equilibrium solutions to .    Solution  Set , giving and .     Step 2: Draw the phase diagram   Determine the sign of in each region and draw the phase diagram.    Solution  Test a value in each region:  : , so arrow points right.  : , so arrow points left.  : , so arrow points right.     Phase diagram for . Equilibria at and . Arrows point right for and , and left for .       Step 3: Determine which give growth forever   Using the phase diagram, for which values of does grow forever?       Correct! Both regions have rightward arrows, so solutions starting there are increasing and grow forever.       Not quite. In this region the arrow points left, so solutions are decreasing, not growing.       Close, but the left region should include all , not just . Solutions starting at negative values of also have rightward arrows.     only   Not quite. Check the arrow direction for as well. It also points right, so solutions there are also growing.      "
},
{
  "id": "act-phase-app-2",
  "level": "2",
  "url": "sec-phase-applications.html#act-phase-app-2",
  "type": "Activity",
  "number": "2.2.2",
  "title": "Example 2.",
  "body": " Example 2   Suppose a population is modelled by Find all values of for which the population grows forever.    Step 1: Find the equilibrium solutions   Find all equilibrium solutions to .    Solution  Set , giving and .     Step 2: Draw the phase diagram   Determine the sign of in each region and draw the phase diagram.    Solution  Test a value in each region:  : , so arrow points left.  : , so arrow points right.  : , so arrow points left.     Phase diagram for . Equilibria at and . Arrows point left for and , and right for .       Step 3: Determine which give growth forever   Using the phase diagram, for which values of does grow forever?       Correct! This is the only region with a rightward arrow, so solutions starting there are increasing and grow forever.  By the way, is a stable equilibrium above, so the solution is trapped below it and converges to , but is increasing for all of time.       Not quite. In both of these regions the arrow points left, so solutions are decreasing, not growing.     only   Not quite. Check the arrow direction for . It points left, so solutions there are actually decreasing.       Close, but check the arrow direction for . It points left, so solutions starting above are decreasing, not growing.      "
},
{
  "id": "video-phase-applications",
  "level": "2",
  "url": "sec-phase-applications.html#video-phase-applications",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-frog-question",
  "level": "1",
  "url": "sec-frog-question.html",
  "type": "Section",
  "number": "2.2.6",
  "title": "Applying Phase Diagrams: The Frog Question",
  "body": " Applying Phase Diagrams: The Frog Question  We will do a similar example now as the previous page, except now we explore how the behavior of a solution will differ given a change in the initial value. If you are stuck, you can reference the previous page for some guidance!   The Mosquito Population   Suppose the population of mosquitoes in a pond is given by , modelled by the differential equation There are currently 100 mosquitoes in the pond, so . You would like the population to decrease to zero over time.    P(0)=100   Determine whether will decrease to zero when .    First find the equilibrium solutions by setting , then draw the phase diagram. Where does lie?    The equilibrium solutions are and . The phase diagram is:   Phase diagram for . Equilibria at and .    Since , the initial value lies in the region where the arrow points right. By the consequences of existence and uniqueness, is increasing for all time, so the population will not decrease to zero.   Sign analysis (if stuck on the phase diagram)  Test a value in each region:  : , arrow right.  : , arrow left.  : , arrow right.        The magic frog   A man offers a magic frog that can eat 80 mosquitoes instantly, reducing the population to . Will the population now decrease to zero?     Yes, the population will decrease to zero.   Correct! With , the initial value falls in the region , where the arrow points left. By the consequences of existence and uniqueness, is decreasing for all time and trapped above the stable equilibrium , so it must converge to as . The frog works!     No, the population will still increase.   Not quite. Check the phase diagram from part 1 again. Which direction does the arrow point in the region ?     No, is unstable, so solutions won't converge to it.   Check the arrow directions on both sides of in the phase diagram. Do they point toward it or away from it?     It depends on the value of in the model.   The constant affects the speed of change but not the direction. That is determined entirely by the sign of , which the phase diagram captures. The phase diagram is all we need.       Key Takeaway: Phase Diagrams as a First Step  When analyzing the behavior of solutions to a first-order autonomous ODE, such as whether they are increasing or decreasing, and what they converge to, a good first step is always to find the equilibrium solutions and draw the phase diagram, even if you are not explicitly asked to. All the information you need is in the diagram.  In this example, the phase diagram told us everything:   Part 1:  falls in a zone where the arrow points right, so stays increasing, and so it will not decrease to zero.   Part 2:  falls in a zone where the arrow points left toward the stable equilibrium , so is decreasing and converges to .       This video goes through the content of this page.     "
},
{
  "id": "act-mosquito-stability",
  "level": "2",
  "url": "sec-frog-question.html#act-mosquito-stability",
  "type": "Activity",
  "number": "2.2.1",
  "title": "The Mosquito Population.",
  "body": " The Mosquito Population   Suppose the population of mosquitoes in a pond is given by , modelled by the differential equation There are currently 100 mosquitoes in the pond, so . You would like the population to decrease to zero over time.    P(0)=100   Determine whether will decrease to zero when .    First find the equilibrium solutions by setting , then draw the phase diagram. Where does lie?    The equilibrium solutions are and . The phase diagram is:   Phase diagram for . Equilibria at and .    Since , the initial value lies in the region where the arrow points right. By the consequences of existence and uniqueness, is increasing for all time, so the population will not decrease to zero.   Sign analysis (if stuck on the phase diagram)  Test a value in each region:  : , arrow right.  : , arrow left.  : , arrow right.        The magic frog   A man offers a magic frog that can eat 80 mosquitoes instantly, reducing the population to . Will the population now decrease to zero?     Yes, the population will decrease to zero.   Correct! With , the initial value falls in the region , where the arrow points left. By the consequences of existence and uniqueness, is decreasing for all time and trapped above the stable equilibrium , so it must converge to as . The frog works!     No, the population will still increase.   Not quite. Check the phase diagram from part 1 again. Which direction does the arrow point in the region ?     No, is unstable, so solutions won't converge to it.   Check the arrow directions on both sides of in the phase diagram. Do they point toward it or away from it?     It depends on the value of in the model.   The constant affects the speed of change but not the direction. That is determined entirely by the sign of , which the phase diagram captures. The phase diagram is all we need.       Key Takeaway: Phase Diagrams as a First Step  When analyzing the behavior of solutions to a first-order autonomous ODE, such as whether they are increasing or decreasing, and what they converge to, a good first step is always to find the equilibrium solutions and draw the phase diagram, even if you are not explicitly asked to. All the information you need is in the diagram.  In this example, the phase diagram told us everything:   Part 1:  falls in a zone where the arrow points right, so stays increasing, and so it will not decrease to zero.   Part 2:  falls in a zone where the arrow points left toward the stable equilibrium , so is decreasing and converges to .     "
},
{
  "id": "video-frog-question",
  "level": "2",
  "url": "sec-frog-question.html#video-frog-question",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "exercises-2-2",
  "level": "1",
  "url": "exercises-2-2.html",
  "type": "Exercises",
  "number": "2.2.7",
  "title": "Exercises for Section 2.2",
  "body": " Exercises for Section 2.2   Nothing in these exercises should require solving a differential equation explicitly. When in doubt, draw a phase diagram to get started!     Reading Stability from Solution Curves   The figure below shows solution trajectories for a first-order autonomous ODE . The equilibrium solutions are shown as bold green horizontal lines. Blue curves show non-equilibrium solution trajectories.   Solution trajectories for an autonomous ODE with equilibria at , , and .       Identify the equilibrium solutions and classify the stability of each.     : stable. : unstable. : semi-stable.      Draw the phase diagram consistent with the solution curves above.    Arrows: left for , left for , right for , left for .       Phase Diagrams and Stability    Consider the autonomous differential equation Find all equilibrium solutions, draw the phase diagram, and classify the stability of each equilibrium.    Equilibria: (stable), (unstable).      Now consider Find all equilibrium solutions, draw the phase diagram, and classify the stability of each equilibrium.    Equilibria: (unstable), (semi-stable).       Deer Population   A deer population in a wildlife reserve is modelled by where is the population (in hundreds) at time (in years).     Draw the phase diagram. Then determine whether is increasing or decreasing, and what converges to as , for each of:        Equilibria: , , . : decreasing, converges to . : increasing, converges to .      For which initial values is an increasing function?     .       The Fish Population   A fish population in a lake is modelled by where is the population (in thousands) at time (in years). There are currently 200 thousand fish in the lake, so . A fishery manager would like the population to decrease to zero over time.     Using a phase diagram, determine whether the population will decrease to zero when .    No. Since , the population is increasing and will not decrease to zero.      A fishing crew can remove any number of fish instantly. What is the minimum number of fish (in thousands) they must remove to guarantee the population will eventually decrease to zero? Justify your answer using the phase diagram.    More than 150 thousand fish must be removed, bringing the population strictly below .       Rabbit Population with Variable Carrying Capacity   A wildlife reserve manages a rabbit population modelled by where is the population (in hundreds) at time , and is the carrying capacity, which the reserve can control by adjusting the amount of food and vegetation available. Currently hundred rabbits.     For which values of will the rabbit population be increasing?    Find the equilibrium solutions in terms of and draw the phase diagram. Then consider where falls relative to the equilibria, which this depends on whether is greater than, equal to, or less than 8.     .       A Semi-Stable Population   A bacteria colony in a lab is modelled by where is the population (in millions) at time (in hours).     Find all equilibrium solutions, draw the phase diagram, and classify the stability of each equilibrium.    Equilibria: (semi-stable), (unstable).      The colony currently has million bacteria. A scientist can instantly reduce the colony size by adding an antibiotic.  If the antibiotic reduces the population to , what happens to the colony in the long run?  If the antibiotic reduces the population to , what happens to the colony in the long run?  What is significant about the equilibrium at in this context?         : falls in , arrow left so is decreasing and converges to the semi-stable equilibrium . The colony shrinks but does not die out.   : falls in , arrow left so is decreasing and moves away from , heading toward . The colony dies out.  The semi-stable equilibrium at acts as a threshold: reducing the population to below 4 million guarantees extinction, but reducing it to above 4 million only shrinks the colony to 4 million — it survives. The antibiotic must be strong enough to push the population strictly below this threshold to eliminate the colony entirely.        "
},
{
  "id": "ex-2-2-1",
  "level": "2",
  "url": "exercises-2-2.html#ex-2-2-1",
  "type": "Exercise",
  "number": "2.2.7.1",
  "title": "Reading Stability from Solution Curves.",
  "body": " Reading Stability from Solution Curves   The figure below shows solution trajectories for a first-order autonomous ODE . The equilibrium solutions are shown as bold green horizontal lines. Blue curves show non-equilibrium solution trajectories.   Solution trajectories for an autonomous ODE with equilibria at , , and .       Identify the equilibrium solutions and classify the stability of each.     : stable. : unstable. : semi-stable.      Draw the phase diagram consistent with the solution curves above.    Arrows: left for , left for , right for , left for .    "
},
{
  "id": "ex-2-2-2",
  "level": "2",
  "url": "exercises-2-2.html#ex-2-2-2",
  "type": "Exercise",
  "number": "2.2.7.2",
  "title": "Phase Diagrams and Stability.",
  "body": " Phase Diagrams and Stability    Consider the autonomous differential equation Find all equilibrium solutions, draw the phase diagram, and classify the stability of each equilibrium.    Equilibria: (stable), (unstable).      Now consider Find all equilibrium solutions, draw the phase diagram, and classify the stability of each equilibrium.    Equilibria: (unstable), (semi-stable).    "
},
{
  "id": "ex-2-2-3",
  "level": "2",
  "url": "exercises-2-2.html#ex-2-2-3",
  "type": "Exercise",
  "number": "2.2.7.3",
  "title": "Deer Population.",
  "body": " Deer Population   A deer population in a wildlife reserve is modelled by where is the population (in hundreds) at time (in years).     Draw the phase diagram. Then determine whether is increasing or decreasing, and what converges to as , for each of:        Equilibria: , , . : decreasing, converges to . : increasing, converges to .      For which initial values is an increasing function?     .    "
},
{
  "id": "ex-2-2-4",
  "level": "2",
  "url": "exercises-2-2.html#ex-2-2-4",
  "type": "Exercise",
  "number": "2.2.7.4",
  "title": "The Fish Population.",
  "body": " The Fish Population   A fish population in a lake is modelled by where is the population (in thousands) at time (in years). There are currently 200 thousand fish in the lake, so . A fishery manager would like the population to decrease to zero over time.     Using a phase diagram, determine whether the population will decrease to zero when .    No. Since , the population is increasing and will not decrease to zero.      A fishing crew can remove any number of fish instantly. What is the minimum number of fish (in thousands) they must remove to guarantee the population will eventually decrease to zero? Justify your answer using the phase diagram.    More than 150 thousand fish must be removed, bringing the population strictly below .    "
},
{
  "id": "ex-2-2-5",
  "level": "2",
  "url": "exercises-2-2.html#ex-2-2-5",
  "type": "Exercise",
  "number": "2.2.7.5",
  "title": "Rabbit Population with Variable Carrying Capacity.",
  "body": " Rabbit Population with Variable Carrying Capacity   A wildlife reserve manages a rabbit population modelled by where is the population (in hundreds) at time , and is the carrying capacity, which the reserve can control by adjusting the amount of food and vegetation available. Currently hundred rabbits.     For which values of will the rabbit population be increasing?    Find the equilibrium solutions in terms of and draw the phase diagram. Then consider where falls relative to the equilibria, which this depends on whether is greater than, equal to, or less than 8.     .    "
},
{
  "id": "ex-2-2-6",
  "level": "2",
  "url": "exercises-2-2.html#ex-2-2-6",
  "type": "Exercise",
  "number": "2.2.7.6",
  "title": "A Semi-Stable Population.",
  "body": " A Semi-Stable Population   A bacteria colony in a lab is modelled by where is the population (in millions) at time (in hours).     Find all equilibrium solutions, draw the phase diagram, and classify the stability of each equilibrium.    Equilibria: (semi-stable), (unstable).      The colony currently has million bacteria. A scientist can instantly reduce the colony size by adding an antibiotic.  If the antibiotic reduces the population to , what happens to the colony in the long run?  If the antibiotic reduces the population to , what happens to the colony in the long run?  What is significant about the equilibrium at in this context?         : falls in , arrow left so is decreasing and converges to the semi-stable equilibrium . The colony shrinks but does not die out.   : falls in , arrow left so is decreasing and moves away from , heading toward . The colony dies out.  The semi-stable equilibrium at acts as a threshold: reducing the population to below 4 million guarantees extinction, but reducing it to above 4 million only shrinks the colony to 4 million — it survives. The antibiotic must be strong enough to push the population strictly below this threshold to eliminate the colony entirely.      "
},
{
  "id": "sec-2nd-linear-intro",
  "level": "1",
  "url": "sec-2nd-linear-intro.html",
  "type": "Section",
  "number": "3.1.1",
  "title": "Introduction to Second-Order Linear ODEs",
  "body": " Introduction to Second-Order Linear ODEs   So far we've been working with first-order ODEs. But second-order ODEs show up naturally in many applications. We'll actually see an interesting example with the mass-spring system later in this chapter, where the second derivative appears because of acceleration. Before we get to the fun stuff, we need to spend this section understanding the mathematics of the ODE and learning how to fully solve a simple case!    Second-Order Linear ODE   A second-order linear differential equation can be written in the form: where , , , and are functions of .    For example, the equation is a second-order linear ODE, with the coefficient functions and right-hand side labeled. Also, notice that if you remove the term, you are left with a first-order linear ODE! You can extend this definition to a linear ODE of any order, but for our own sanity we will stop at second-order.     Select all equations that are second-order linear ODEs.       Correct! This fits the form with , , , and .        Correct! This is not in standard form, but rearranging gives , which fits the form with , , .        Not quite. The term is a product of with its second derivative, which makes this equation nonlinear.       Not quite. The term means appears to a power higher than 1, so this equation is nonlinear.       This is linear, but only first-order. There is no term.        Homogeneous Second-Order Linear ODE   A second-order linear ODE is called homogeneous when . That is, it has the form:     Here's a quick way to see the difference: Same left-hand side, but setting the right-hand side to zero makes it homogeneous.   We now arrive at a very consequential observation regarding linear ODEs. We state it for second-order, but it is true for any linear ODE, and it is part of what makes linear ODEs so nice to work with.   The Principle of Superposition  If and are both solutions to a second-order linear homogeneous ODE, then is also a solution, for any constants and .   You can skim through the proof below and come back to it if you're curious.   Proof of Superposition (can skim)  Suppose and both satisfy . Let . We check that satisfies the ODE: So satisfies the ODE.     It is important to understand that the principle of superposition requires the ODE to be both linear and homogeneous. If either fails, we cannot expect this principle to hold. In the following example, we show that it can fail in the nonlinear case.   Superposition Can Fail for Nonlinear ODEs   The superposition principle requires the ODE to be both linear and homogeneous. Let's see what happens when it's not. Show that and are both solutions to but their sum is not a solution.    Can skim for now   Checking : We have and , so:    Checking : We have and , so:    Checking : We have and , so: So the sum is not a solution. This makes sense: superposition only applies to linear homogeneous ODEs, and is nonlinear.     We end with one more example, this time confirming that the principle of superposition works in a specific case. By the way, this is not just a random homogeneous linear ODE. We will be studying ODEs of this type extensively for the rest of this section.   Superposition in Action   It is easy to check that and are both solutions to the second-order linear homogeneous ODE: By the superposition principle, any combination should also be a solution. Let's confirm this for .    We compute the derivatives of : Now substitute into : Superposition works (as it should!).    Notice in the example above how the terms collected together and the terms collected together, each summing to zero independently. The fact that the ODE was linear was key for splitting the expressions over the sum, and it being homogeneous is why both parts summed to 0. This is at the heart of why superposition principle works.   Key Takeaways    Second-order linear ODE: Has the form . It is homogeneous when .  Superposition: If and are solutions to a linear homogeneous ODE, then so is for any constants and .  Linearity matters for superposition: Superposition can fail for nonlinear ODEs, as we saw in the counterexample. The homogeneous condition is required as well.       This video goes through the content of this page.     "
},
{
  "id": "def-second-order-linear",
  "level": "2",
  "url": "sec-2nd-linear-intro.html#def-second-order-linear",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Second-Order Linear ODE.",
  "body": " Second-Order Linear ODE   A second-order linear differential equation can be written in the form: where , , , and are functions of .   "
},
{
  "id": "ex-mc-identify-linear",
  "level": "2",
  "url": "sec-2nd-linear-intro.html#ex-mc-identify-linear",
  "type": "Checkpoint",
  "number": "3.1.2",
  "title": "",
  "body": "  Select all equations that are second-order linear ODEs.       Correct! This fits the form with , , , and .        Correct! This is not in standard form, but rearranging gives , which fits the form with , , .        Not quite. The term is a product of with its second derivative, which makes this equation nonlinear.       Not quite. The term means appears to a power higher than 1, so this equation is nonlinear.       This is linear, but only first-order. There is no term.     "
},
{
  "id": "def-homogeneous-second-order",
  "level": "2",
  "url": "sec-2nd-linear-intro.html#def-homogeneous-second-order",
  "type": "Definition",
  "number": "3.1.3",
  "title": "Homogeneous Second-Order Linear ODE.",
  "body": " Homogeneous Second-Order Linear ODE   A second-order linear ODE is called homogeneous when . That is, it has the form:    "
},
{
  "id": "obs-superposition",
  "level": "2",
  "url": "sec-2nd-linear-intro.html#obs-superposition",
  "type": "Observation",
  "number": "3.1.4",
  "title": "The Principle of Superposition.",
  "body": " The Principle of Superposition  If and are both solutions to a second-order linear homogeneous ODE, then is also a solution, for any constants and .  "
},
{
  "id": "sec-2nd-linear-intro-11",
  "level": "2",
  "url": "sec-2nd-linear-intro.html#sec-2nd-linear-intro-11",
  "type": "Proof",
  "number": "3.1.1.1",
  "title": "Proof of Superposition (can skim).",
  "body": " Proof of Superposition (can skim)  Suppose and both satisfy . Let . We check that satisfies the ODE: So satisfies the ODE.   "
},
{
  "id": "ex-superposition-fails-nonlinear",
  "level": "2",
  "url": "sec-2nd-linear-intro.html#ex-superposition-fails-nonlinear",
  "type": "Example",
  "number": "3.1.5",
  "title": "Superposition Can Fail for Nonlinear ODEs.",
  "body": " Superposition Can Fail for Nonlinear ODEs   The superposition principle requires the ODE to be both linear and homogeneous. Let's see what happens when it's not. Show that and are both solutions to but their sum is not a solution.    Can skim for now   Checking : We have and , so:    Checking : We have and , so:    Checking : We have and , so: So the sum is not a solution. This makes sense: superposition only applies to linear homogeneous ODEs, and is nonlinear.   "
},
{
  "id": "ex-superposition-confirm",
  "level": "2",
  "url": "sec-2nd-linear-intro.html#ex-superposition-confirm",
  "type": "Example",
  "number": "3.1.6",
  "title": "Superposition in Action.",
  "body": " Superposition in Action   It is easy to check that and are both solutions to the second-order linear homogeneous ODE: By the superposition principle, any combination should also be a solution. Let's confirm this for .    We compute the derivatives of : Now substitute into : Superposition works (as it should!).   "
},
{
  "id": "video-2nd-linear-intro",
  "level": "2",
  "url": "sec-2nd-linear-intro.html#video-2nd-linear-intro",
  "type": "Figure",
  "number": "3.1.7",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-characteristic-equation",
  "level": "1",
  "url": "sec-characteristic-equation.html",
  "type": "Section",
  "number": "3.1.2",
  "title": "The Characteristic Equation",
  "body": " The Characteristic Equation  Let's continue looking at the ODE from the previous page. Notice that this is a 2nd-order linear homogeneous ODE. However, it is a pretty simple one as the coefficient functions are all constant. More precisely, , , and . These types of ODEs will be the focus for the rest of this chapter, and are perhaps the most fun ones to solve yet!   Second-Order Linear Homogeneous ODE with Constant Coefficients   A second-order linear homogeneous ODE with constant coefficients has the form where , , and are constants.    On the previous page we saw that and are solutions to , and by superposition, is also a solution for any constants . How do we know if this is all of the solutions?   General Solution of a Second-Order Linear Homogeneous ODE   Suppose and are two linearly independent solutions to a second-order linear homogeneous ODE (meaning for any constant ). Then is the general solution to the ODE (meaning this family of solutions contains all possible solutions).    We won't prove this theorem in this course, but we will be making heavy use of it. For example, now we can say for certain that gives every solution to as we vary over all real numbers for and .    It turns out that and are two solutions to . What is the general solution?       Exactly! Since and are solutions that are also linearly independent (not constant multiples of each other), the general solution is . Every solution to this ODE can be written this way.        Close, but this is just one specific solution (with ). The general solution needs arbitrary constants and to capture all possible solutions.       Not quite. The general solution uses a sum of the two solutions, not a product. Superposition tells us is a solution, not .       This only has one arbitrary constant, so it can't be the general solution to a second-order ODE. We always need two linearly independent solutions and two constants.      So the theorem tells us that finding two linearly independent solutions is the whole game. But how do we actually find solutions in the first place? We will explore this below, and soon we will have a way to systematically solve these ODEs.   Where Do Solutions Come From? Trying   Consider the ODE . From the previous page, we might guess that some solutions take the form . Let's suppose for some unknown constant , and figure out which values of make it a solution (this should look familiar from chapter 1!).    Step 1: Find and   If , what are and ?          Step 2: Substitute into the ODE   Substitute , , into and factor out . Which equation do you get?       Exactly right! Substituting gives:        Not quite. The right-hand side of the ODE is , so after substituting we should have on the right, not .       Almost, but check the term. Since , the first term should contribute , not .       Step 3: The Key Observation   We have . Since for any value of , what must be true?       Yes! Since is never zero, the only way the product can equal zero is if the other factor equals zero. So must satisfy . This is called the characteristic equation .        Actually, for any real : exponentials are always positive! So this factor can never be zero.     There are no solutions of the form .   Not quite: we just need to hold. If we can find values of satisfying this, then is indeed a solution.       Step 4: Solve for   Factor and solve . What are the two values of , and what are the corresponding solutions and ?    Factoring: , so or . The two solutions are: Since these are not multiples of each other, they are linearly independent, and the general solution is:      Let's summarize the main findings of this exploration. We were looking to find solutions in the form to We solved for the that worked by solving the algebraic equation: Do you see the similarities between the ODE and the quadratic equation above? This turns out to be fundamental to solving 2nd-order linear homogeneous ODEs with constant coefficients. We call it the characteristic equation .   Characteristic Equation   The characteristic equation of the second-order linear homogeneous ODE with constant coefficients is the quadratic equation     If you look through the exploration we just did, it should be clear that this process will lead to the same conclusion for any ODE in the form . That is, any time is a root of the characteristic equation , then is a solution to the ODE. Even more, if there are two distinct real roots, that gives us two solutions from which we can form the general solution!   Two Distinct Real Roots  If and are two distinct real roots of the characteristic equation , then are two linearly independent solutions to , and the general solution is:    Note that this observation only applies when there are two distinct real roots to the characteristic equation. We will be looking at other cases on the next page! Let's quickly apply this to an example.   Solving   Let's revisit the ODE from the previous page. This time, instead of being told that and are solutions, let's find them ourselves using the characteristic equation. Find the general solution to .    Write down the characteristic equation by replacing with , with , and with . Then factor and solve for .    The characteristic equation is: Factoring: , so and . These are two distinct real roots, so the general solution is: Just as we found on the previous page!     Key Takeaways     General solution: If and are two linearly independent solutions to a second-order linear homogeneous ODE, then is the general solution, meaning every solution can be written this way.   Characteristic equation: For the characteristic equation is . Each root gives a solution .   Distinct real roots: If the characteristic equation has two distinct real roots and , then and are linearly independent, and the general solution is .      There is no separate video for this page.    "
},
{
  "id": "def-constant-coeff-homogeneous",
  "level": "2",
  "url": "sec-characteristic-equation.html#def-constant-coeff-homogeneous",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Second-Order Linear Homogeneous ODE with Constant Coefficients.",
  "body": " Second-Order Linear Homogeneous ODE with Constant Coefficients   A second-order linear homogeneous ODE with constant coefficients has the form where , , and are constants.   "
},
{
  "id": "thm-general-solution-homogeneous",
  "level": "2",
  "url": "sec-characteristic-equation.html#thm-general-solution-homogeneous",
  "type": "Theorem",
  "number": "3.1.2",
  "title": "General Solution of a Second-Order Linear Homogeneous ODE.",
  "body": " General Solution of a Second-Order Linear Homogeneous ODE   Suppose and are two linearly independent solutions to a second-order linear homogeneous ODE (meaning for any constant ). Then is the general solution to the ODE (meaning this family of solutions contains all possible solutions).   "
},
{
  "id": "ex-mc-general-solution-2",
  "level": "2",
  "url": "sec-characteristic-equation.html#ex-mc-general-solution-2",
  "type": "Checkpoint",
  "number": "3.1.3",
  "title": "",
  "body": "  It turns out that and are two solutions to . What is the general solution?       Exactly! Since and are solutions that are also linearly independent (not constant multiples of each other), the general solution is . Every solution to this ODE can be written this way.        Close, but this is just one specific solution (with ). The general solution needs arbitrary constants and to capture all possible solutions.       Not quite. The general solution uses a sum of the two solutions, not a product. Superposition tells us is a solution, not .       This only has one arbitrary constant, so it can't be the general solution to a second-order ODE. We always need two linearly independent solutions and two constants.     "
},
{
  "id": "explore-characteristic-equation",
  "level": "2",
  "url": "sec-characteristic-equation.html#explore-characteristic-equation",
  "type": "Exploration",
  "number": "3.1.1",
  "title": "Where Do Solutions Come From? Trying <span class=\"process-math\">\\(y = e^{rx}\\)<\/span>.",
  "body": " Where Do Solutions Come From? Trying   Consider the ODE . From the previous page, we might guess that some solutions take the form . Let's suppose for some unknown constant , and figure out which values of make it a solution (this should look familiar from chapter 1!).    Step 1: Find and   If , what are and ?          Step 2: Substitute into the ODE   Substitute , , into and factor out . Which equation do you get?       Exactly right! Substituting gives:        Not quite. The right-hand side of the ODE is , so after substituting we should have on the right, not .       Almost, but check the term. Since , the first term should contribute , not .       Step 3: The Key Observation   We have . Since for any value of , what must be true?       Yes! Since is never zero, the only way the product can equal zero is if the other factor equals zero. So must satisfy . This is called the characteristic equation .        Actually, for any real : exponentials are always positive! So this factor can never be zero.     There are no solutions of the form .   Not quite: we just need to hold. If we can find values of satisfying this, then is indeed a solution.       Step 4: Solve for   Factor and solve . What are the two values of , and what are the corresponding solutions and ?    Factoring: , so or . The two solutions are: Since these are not multiples of each other, they are linearly independent, and the general solution is:     "
},
{
  "id": "def-characteristic-equation",
  "level": "2",
  "url": "sec-characteristic-equation.html#def-characteristic-equation",
  "type": "Definition",
  "number": "3.1.4",
  "title": "Characteristic Equation.",
  "body": " Characteristic Equation   The characteristic equation of the second-order linear homogeneous ODE with constant coefficients is the quadratic equation    "
},
{
  "id": "obs-distinct-real-roots",
  "level": "2",
  "url": "sec-characteristic-equation.html#obs-distinct-real-roots",
  "type": "Observation",
  "number": "3.1.5",
  "title": "Two Distinct Real Roots.",
  "body": " Two Distinct Real Roots  If and are two distinct real roots of the characteristic equation , then are two linearly independent solutions to , and the general solution is:   "
},
{
  "id": "ex-char-eq-distinct",
  "level": "2",
  "url": "sec-characteristic-equation.html#ex-char-eq-distinct",
  "type": "Example",
  "number": "3.1.6",
  "title": "Solving <span class=\"process-math\">\\(y'' - 5y' + 6y = 0\\)<\/span>.",
  "body": " Solving   Let's revisit the ODE from the previous page. This time, instead of being told that and are solutions, let's find them ourselves using the characteristic equation. Find the general solution to .    Write down the characteristic equation by replacing with , with , and with . Then factor and solve for .    The characteristic equation is: Factoring: , so and . These are two distinct real roots, so the general solution is: Just as we found on the previous page!   "
},
{
  "id": "remark-no-video-3-1-2",
  "level": "2",
  "url": "sec-characteristic-equation.html#remark-no-video-3-1-2",
  "type": "Remark",
  "number": "3.1.7",
  "title": "",
  "body": " There is no separate video for this page.  "
},
{
  "id": "sec-all-three-cases",
  "level": "1",
  "url": "sec-all-three-cases.html",
  "type": "Section",
  "number": "3.1.3",
  "title": "All Three Cases of the Characteristic Equation",
  "body": " All Three Cases of the Characteristic Equation  When solving , we always start by looking at the characteristic equation . We saw exactly how this played out in when there were two distinct real roots. Unfortunately, we won't always be in this case. Recall from algebra that the roots of a quadratic can fall into three cases:  Two distinct real roots  One repeated real root  Two complex conjugate roots  The observation from the previous page only covers the first case. When there is only one real root, that gives us just one solution of the form , which isn't enough to form the general solution. And when there are complex roots, and would be complex-valued, which is not what we want in this course. We will need to extract two real-valued solutions from the complex ones in that case.  For now, we'll just state what to do in all three cases in the theorem below to get some quick practice. We will provide justification for cases 2 and 3 on the following pages. In this page, we are just getting acquainted with cases two and three before we move on to some more interesting problems!   Solving : All Three Cases   Consider the characteristic equation . In each case below, we find two linearly independent solutions and .      Two distinct real roots  :      One repeated real root  :      Two complex conjugate roots  :    In each case, the general solution is .    The next example demonstrates the repeated root case.   Solving   Find the general solution to .    Notice the characteristic equation is . This factors as , meaning the factor shows up twice , so this is a repeated root.    The characteristic equation is , which factors as: This gives a single repeated root . By the theorem, the two linearly independent solutions are: So the general solution is:     We end with applying the theorem to the complex root case.   Solving   Find the general solution to .    Notice the characteristic equation is . This does not factor easily, so use the quadratic formula: You should find complex roots in this case!    The characteristic equation is . Applying the quadratic formula with , , : So we have complex roots with and . By the theorem, the two linearly independent solutions are: So the general solution is:       After applying the quadratic formula to a characteristic equation, you find: What is the general solution?         Exactly! From we read off and . The general solution is .          Close, but and are swapped. From , the real part is (goes in the exponent) and the imaginary part is (goes inside the trig functions).         Don't forget the factor out front! Since , we need multiplying the trig terms.         This would be the solution if we used the complex roots directly, but we want a real-valued solution. The theorem tells us to use and instead.       Key Takeaways     Distinct real roots  : general solution .   Repeated root  : general solution .   Complex roots  : general solution .      There is no separate video for this page.    "
},
{
  "id": "thm-three-cases-char-eq",
  "level": "2",
  "url": "sec-all-three-cases.html#thm-three-cases-char-eq",
  "type": "Theorem",
  "number": "3.1.1",
  "title": "Solving <span class=\"process-math\">\\(ay'' + by' + cy = 0\\text{:}\\)<\/span> All Three Cases.",
  "body": " Solving : All Three Cases   Consider the characteristic equation . In each case below, we find two linearly independent solutions and .      Two distinct real roots  :      One repeated real root  :      Two complex conjugate roots  :    In each case, the general solution is .   "
},
{
  "id": "ex-repeated-root",
  "level": "2",
  "url": "sec-all-three-cases.html#ex-repeated-root",
  "type": "Example",
  "number": "3.1.2",
  "title": "Solving <span class=\"process-math\">\\(y'' - 6y' + 9y = 0\\)<\/span>.",
  "body": " Solving   Find the general solution to .    Notice the characteristic equation is . This factors as , meaning the factor shows up twice , so this is a repeated root.    The characteristic equation is , which factors as: This gives a single repeated root . By the theorem, the two linearly independent solutions are: So the general solution is:    "
},
{
  "id": "ex-complex-roots",
  "level": "2",
  "url": "sec-all-three-cases.html#ex-complex-roots",
  "type": "Example",
  "number": "3.1.3",
  "title": "Solving <span class=\"process-math\">\\(y'' + 4y' + 5y = 0\\)<\/span>.",
  "body": " Solving   Find the general solution to .    Notice the characteristic equation is . This does not factor easily, so use the quadratic formula: You should find complex roots in this case!    The characteristic equation is . Applying the quadratic formula with , , : So we have complex roots with and . By the theorem, the two linearly independent solutions are: So the general solution is:    "
},
{
  "id": "ex-mc-complex-roots-identify",
  "level": "2",
  "url": "sec-all-three-cases.html#ex-mc-complex-roots-identify",
  "type": "Checkpoint",
  "number": "3.1.4",
  "title": "",
  "body": "  After applying the quadratic formula to a characteristic equation, you find: What is the general solution?         Exactly! From we read off and . The general solution is .          Close, but and are swapped. From , the real part is (goes in the exponent) and the imaginary part is (goes inside the trig functions).         Don't forget the factor out front! Since , we need multiplying the trig terms.         This would be the solution if we used the complex roots directly, but we want a real-valued solution. The theorem tells us to use and instead.     "
},
{
  "id": "remark-no-video-3-1-3",
  "level": "2",
  "url": "sec-all-three-cases.html#remark-no-video-3-1-3",
  "type": "Remark",
  "number": "3.1.5",
  "title": "",
  "body": " There is no separate video for this page.  "
},
{
  "id": "sec-practice-real-roots",
  "level": "1",
  "url": "sec-practice-real-roots.html",
  "type": "Section",
  "number": "3.1.4",
  "title": "Practice: Real Roots",
  "body": " Practice: Real Roots  Recall that for , if the characteristic equation has:  Two distinct real roots  : general solution  One repeated real root  : general solution  We justified the distinct roots case on a previous page. Let's justify the repeated root case now.   Why Does the Repeated Root Case Give ?   If is a repeated root of , then and are two linearly independent solutions to .    Justification (can skim)  Since is a repeated root, the characteristic equation factors as , which means and . We already know is a solution. We need to verify is also a solution.  Computing the derivatives of : Substituting into : Since is a root: . And since it is a repeated root: . So both terms vanish: Finally, and are not constant multiples of each other, so they are linearly independent.    These first two cases are straightforward enough, but the activity below has some fun twists where it may not be immediately obvious how to proceed.   Practice: Real Roots   Solve   Find the general solution to .    The characteristic equation is . Try factoring it!    The characteristic equation is , which factors as: This gives a repeated root . The general solution is:      Solve   Find the general solution to .    The characteristic equation is . Factor out an .    The characteristic equation is , which factors as: So and . These are two distinct real roots, giving: The general solution is: Notice that as a root just gives a constant solution: perfectly valid!     Solve   Find the general solution to .    The characteristic equation is . What are the roots?    The characteristic equation is , giving a repeated root . By the repeated root case: The general solution is: This makes sense: if the second derivative is zero, the function must be linear!      Key Takeaways     The method always applies: any ODE of the form has a characteristic equation . Even when the ODE looks unusual, like or , you can always identify , , and and proceed the same way.   Watch for surprises: a root of just gives a constant or linear solution, which is perfectly valid.      This video goes through the content of this page.     "
},
{
  "id": "thm-repeated-root-justification",
  "level": "2",
  "url": "sec-practice-real-roots.html#thm-repeated-root-justification",
  "type": "Theorem",
  "number": "3.1.1",
  "title": "Why Does the Repeated Root Case Give <span class=\"process-math\">\\(xe^{r_1 x}\\text{?}\\)<\/span>",
  "body": " Why Does the Repeated Root Case Give ?   If is a repeated root of , then and are two linearly independent solutions to .    Justification (can skim)  Since is a repeated root, the characteristic equation factors as , which means and . We already know is a solution. We need to verify is also a solution.  Computing the derivatives of : Substituting into : Since is a root: . And since it is a repeated root: . So both terms vanish: Finally, and are not constant multiples of each other, so they are linearly independent.   "
},
{
  "id": "act-real-roots-practice",
  "level": "2",
  "url": "sec-practice-real-roots.html#act-real-roots-practice",
  "type": "Activity",
  "number": "3.1.1",
  "title": "Practice: Real Roots.",
  "body": " Practice: Real Roots   Solve   Find the general solution to .    The characteristic equation is . Try factoring it!    The characteristic equation is , which factors as: This gives a repeated root . The general solution is:      Solve   Find the general solution to .    The characteristic equation is . Factor out an .    The characteristic equation is , which factors as: So and . These are two distinct real roots, giving: The general solution is: Notice that as a root just gives a constant solution: perfectly valid!     Solve   Find the general solution to .    The characteristic equation is . What are the roots?    The characteristic equation is , giving a repeated root . By the repeated root case: The general solution is: This makes sense: if the second derivative is zero, the function must be linear!    "
},
{
  "id": "video-real-roots-practice",
  "level": "2",
  "url": "sec-practice-real-roots.html#video-real-roots-practice",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-complex-roots-practice",
  "level": "1",
  "url": "sec-complex-roots-practice.html",
  "type": "Section",
  "number": "3.1.5",
  "title": "Complex Roots and Practice",
  "body": " Complex Roots and Practice  Recall that for , if the characteristic equation has complex roots , the general solution is:    Why Does the Complex Root Case Give Sines and Cosines?   If the characteristic equation has complex roots , then and are two linearly independent real-valued solutions.    Justification (can skim for now)  From the complex roots , we formally get complex solutions and . Using Euler's formula  : Taking the sum and difference of these two complex solutions (and dividing by appropriate constants) gives two real-valued solutions: These are linearly independent since one involves cosine and the other sine, and neither is a constant multiple of the other (assuming ).    A key difference in the solution for this case is that it involves and . Let's explore a simple case to see how these trig functions naturally appear. It is tempting to jump straight to the characteristic equation, but solving this one by inspection actually gives you stronger intuition for why the solution involves trig functions. Even more, ODEs similar to the following example appear often in applications we will explore later, and it is useful to be able to jump straight to the solution without using the characteristic equation.   Exploring   Consider the ODE , or equivalently . This is asking: what functions have a second derivative equal to the negative of themselves? Let's find the general solution two different ways.    Part 1: By Inspection   We're looking for functions whose second derivative equals the negative of the function itself. Can you think of two functions that satisfy this?    Think about what you know from calculus. Which familiar functions have the property that their second derivative is the negative of themselves?    We know from calculus that: So both and satisfy . Since they are not constant multiples of each other, they are linearly independent, and the general solution is:      Part 2: Via the Characteristic Equation   Now let's arrive at the same answer using the characteristic equation for .    The characteristic equation is . This doesn't factor easily, but you don't need the quadratic formula either. Just solve directly for !    The characteristic equation is . Solving directly: So the roots are , giving and . The general solution is: Just as we found by inspection!     Solving the ODE by inspection came naturally from understanding how the derivatives of sine and cosine work. Furthermore, when we solved the characteristic equation, the real part of the root was 0, which is precisely why there was no exponential in the final answer. In general, when the roots are , the real part shows up in the exponential and the imaginary part appears inside the cosine and sine.  If you worked through the example above but replaced with any equation of the form , you would arrive at a very similar result, stated in the observation below.   The ODE  For any constant , the ODE has characteristic equation , giving roots (so , ). The general solution is:    With this observation, you should be able to solve the following checkpoint question with almost no work!    Using the observation above, what is the general solution to ?       Exactly! This fits the form with , so the general solution is .        This would be the solution to , not . The positive sign on the term gives complex roots, not real ones. Always check the sign before deciding which case you're in!      Now for some more practice! Pay close attention to the difference between parts (c) and (d).   Practice: All Cases   Solve   Find the general solution to .    The characteristic equation is . This does not factor easily, so use the quadratic formula.    The characteristic equation is . Applying the quadratic formula: So and . The general solution is:      Solve   Find the general solution to .    The characteristic equation is . Try factoring first!    The characteristic equation is , which factors as: So and . The general solution is:      Solve   Find the general solution to .    Notice this fits the form from . Just identify and write down the solution.    This fits the form with . By , the general solution is:      Solve   Find the general solution to .    Notice this does not follow from , since the coefficient of is , not . Find the roots of the characteristic equation: you may be surprised which case you're in!    The characteristic equation is , which factors as: So and , which are two distinct real roots, not complex! The general solution is:        In part (d) above, looks similar to from part (c), yet the solutions look completely different. Why can't we apply to ?      The observation requires the coefficient of to be positive. Since has a negative coefficient, the characteristic equation has real roots, not complex ones, so trig functions do not appear.    Exactly. applies only when the ODE has the form with a positive coefficient. A negative coefficient means the characteristic equation has real roots, giving exponentials instead of trig functions.       The observation only applies when the coefficient of is exactly 9.    Not quite. The observation applies for any positive , not just 9. The issue with is the sign, not the specific value.      The observation does apply, but the answer happens to come out as exponentials anyway.    The observation does not apply here. It requires a positive coefficient on , which gives complex roots and trig functions. With a negative coefficient the characteristic equation has real roots from the start, so exponentials are the correct form.       Key Takeaways     Complex roots : the general solution is . The real part goes in the exponential, the imaginary part goes inside the trig.   Know this one cold: the ODE has general solution . You should be able to write this down immediately without touching the characteristic equation.   Sign matters:  gives trig functions, but gives exponentials. Always check the sign of the coefficient before assuming which case you're in.      This video goes through the content of this page.     "
},
{
  "id": "thm-complex-roots-justification",
  "level": "2",
  "url": "sec-complex-roots-practice.html#thm-complex-roots-justification",
  "type": "Theorem",
  "number": "3.1.1",
  "title": "Why Does the Complex Root Case Give Sines and Cosines?",
  "body": " Why Does the Complex Root Case Give Sines and Cosines?   If the characteristic equation has complex roots , then and are two linearly independent real-valued solutions.    Justification (can skim for now)  From the complex roots , we formally get complex solutions and . Using Euler's formula  : Taking the sum and difference of these two complex solutions (and dividing by appropriate constants) gives two real-valued solutions: These are linearly independent since one involves cosine and the other sine, and neither is a constant multiple of the other (assuming ).   "
},
{
  "id": "explore-yprimeprime-neg-y",
  "level": "2",
  "url": "sec-complex-roots-practice.html#explore-yprimeprime-neg-y",
  "type": "Exploration",
  "number": "3.1.1",
  "title": "Exploring <span class=\"process-math\">\\(y'' = -y\\)<\/span>.",
  "body": " Exploring   Consider the ODE , or equivalently . This is asking: what functions have a second derivative equal to the negative of themselves? Let's find the general solution two different ways.    Part 1: By Inspection   We're looking for functions whose second derivative equals the negative of the function itself. Can you think of two functions that satisfy this?    Think about what you know from calculus. Which familiar functions have the property that their second derivative is the negative of themselves?    We know from calculus that: So both and satisfy . Since they are not constant multiples of each other, they are linearly independent, and the general solution is:      Part 2: Via the Characteristic Equation   Now let's arrive at the same answer using the characteristic equation for .    The characteristic equation is . This doesn't factor easily, but you don't need the quadratic formula either. Just solve directly for !    The characteristic equation is . Solving directly: So the roots are , giving and . The general solution is: Just as we found by inspection!    "
},
{
  "id": "obs-simple-harmonic-ode",
  "level": "2",
  "url": "sec-complex-roots-practice.html#obs-simple-harmonic-ode",
  "type": "Observation",
  "number": "3.1.2",
  "title": "The ODE <span class=\"process-math\">\\(y'' + \\omega^2 y = 0\\)<\/span>.",
  "body": " The ODE  For any constant , the ODE has characteristic equation , giving roots (so , ). The general solution is:   "
},
{
  "id": "ex-mc-simple-harmonic-16",
  "level": "2",
  "url": "sec-complex-roots-practice.html#ex-mc-simple-harmonic-16",
  "type": "Checkpoint",
  "number": "3.1.3",
  "title": "",
  "body": "  Using the observation above, what is the general solution to ?       Exactly! This fits the form with , so the general solution is .        This would be the solution to , not . The positive sign on the term gives complex roots, not real ones. Always check the sign before deciding which case you're in!     "
},
{
  "id": "act-mixed-practice",
  "level": "2",
  "url": "sec-complex-roots-practice.html#act-mixed-practice",
  "type": "Activity",
  "number": "3.1.2",
  "title": "Practice: All Cases.",
  "body": " Practice: All Cases   Solve   Find the general solution to .    The characteristic equation is . This does not factor easily, so use the quadratic formula.    The characteristic equation is . Applying the quadratic formula: So and . The general solution is:      Solve   Find the general solution to .    The characteristic equation is . Try factoring first!    The characteristic equation is , which factors as: So and . The general solution is:      Solve   Find the general solution to .    Notice this fits the form from . Just identify and write down the solution.    This fits the form with . By , the general solution is:      Solve   Find the general solution to .    Notice this does not follow from , since the coefficient of is , not . Find the roots of the characteristic equation: you may be surprised which case you're in!    The characteristic equation is , which factors as: So and , which are two distinct real roots, not complex! The general solution is:     "
},
{
  "id": "ex-mc-why-no-trig",
  "level": "2",
  "url": "sec-complex-roots-practice.html#ex-mc-why-no-trig",
  "type": "Checkpoint",
  "number": "3.1.4",
  "title": "",
  "body": "  In part (d) above, looks similar to from part (c), yet the solutions look completely different. Why can't we apply to ?      The observation requires the coefficient of to be positive. Since has a negative coefficient, the characteristic equation has real roots, not complex ones, so trig functions do not appear.    Exactly. applies only when the ODE has the form with a positive coefficient. A negative coefficient means the characteristic equation has real roots, giving exponentials instead of trig functions.       The observation only applies when the coefficient of is exactly 9.    Not quite. The observation applies for any positive , not just 9. The issue with is the sign, not the specific value.      The observation does apply, but the answer happens to come out as exponentials anyway.    The observation does not apply here. It requires a positive coefficient on , which gives complex roots and trig functions. With a negative coefficient the characteristic equation has real roots from the start, so exponentials are the correct form.     "
},
{
  "id": "video-complex-roots-practice",
  "level": "2",
  "url": "sec-complex-roots-practice.html#video-complex-roots-practice",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-ivp-second-order",
  "level": "1",
  "url": "sec-ivp-second-order.html",
  "type": "Section",
  "number": "3.1.6",
  "title": "Initial Value Problems",
  "body": " Initial Value Problems   So far we have only been finding the general solution to . Just like with first-order ODEs, we can also solve initial value problems . However, there is one noticeable difference. With first-order ODEs, we only had one constant to solve for. For example, solves , and knowing let us solve for .  Now that we have two unknown constants, with a general solution of the form knowing just won't be enough, as we'd have one equation with two unknowns! However, if we also know , we get a system of two equations: and we can uniquely solve for and .    Existence and Uniqueness for Second-Order Linear ODEs   When solving , there exists a unique solution given initial conditions and .    We actually saw this demonstrated earlier in the course in . When given acceleration , we needed to know both and to uniquely determine the position function. In general, we see this theme that a first-order ODE requires 1 initial condition, and a second-order ODE requires 2. This is a theme we'll continue to see as we go.    Solving an IVP: , ,   In , we already found that the general solution to is: Now let's use the initial conditions and to find the unique solution.    First compute . Then plug in into both and to set up the system of equations:     Starting with the general solution and computing : Plugging in the initial conditions: From the system above, we get and .   Algebra for solving the system  We have the system: The first equation gives directly. Substituting into the second: , so .   Plugging in and , we find the unique solution to the IVP is:       Key Takeaways     Two initial conditions: A second-order ODE needs both and to uniquely determine a solution, one for each unknown constant and .   Process: Find the general solution, compute , plug in the initial conditions to get a system of two equations, solve for and .       This video goes through the content of this page starting at 3:35.     "
},
{
  "id": "sec-ivp-second-order-2",
  "level": "2",
  "url": "sec-ivp-second-order.html#sec-ivp-second-order-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial value problems "
},
{
  "id": "thm-existence-uniqueness-second-order",
  "level": "2",
  "url": "sec-ivp-second-order.html#thm-existence-uniqueness-second-order",
  "type": "Theorem",
  "number": "3.1.1",
  "title": "Existence and Uniqueness for Second-Order Linear ODEs.",
  "body": " Existence and Uniqueness for Second-Order Linear ODEs   When solving , there exists a unique solution given initial conditions and .   "
},
{
  "id": "ex-ivp-second-order",
  "level": "2",
  "url": "sec-ivp-second-order.html#ex-ivp-second-order",
  "type": "Example",
  "number": "3.1.2",
  "title": "Solving an IVP: <span class=\"process-math\">\\(y'' - 4y' + 5y = 0\\text{,}\\)<\/span> <span class=\"process-math\">\\(y(0) = 1\\text{,}\\)<\/span> <span class=\"process-math\">\\(y'(0) = 5\\)<\/span>.",
  "body": " Solving an IVP: , ,   In , we already found that the general solution to is: Now let's use the initial conditions and to find the unique solution.    First compute . Then plug in into both and to set up the system of equations:     Starting with the general solution and computing : Plugging in the initial conditions: From the system above, we get and .   Algebra for solving the system  We have the system: The first equation gives directly. Substituting into the second: , so .   Plugging in and , we find the unique solution to the IVP is:    "
},
{
  "id": "video-ivp-second-order",
  "level": "2",
  "url": "sec-ivp-second-order.html#video-ivp-second-order",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": " This video goes through the content of this page starting at 3:35.   "
},
{
  "id": "exercises-3-1",
  "level": "1",
  "url": "exercises-3-1.html",
  "type": "Exercises",
  "number": "3.1.7",
  "title": "Exercises for Section 3.1",
  "body": " Exercises for Section 3.1     Find the general solution of the differential equation.             Find the general solution of the differential equation.             Find the general solution of the differential equation.             Solve the initial value problem.     General solution:   Particular solution:       From a General Solution Back to the ODE   Suppose the general solution to a second-order linear homogeneous ODE with constant coefficients (with ) is      What are the roots and of the characteristic equation?           Write the characteristic equation in the factored form , then expand it into the form .    Recall that for , the characteristic equation is , and it factors as when are the roots. With , just expand the product.           Using part (b), write down the ODE that has as its general solution.            Practice: From Solution to ODE   Use the same method as in to find the ODE with the given general solution.                              The Discriminant   Recall the quadratic formula: for , The expression under the square root, , is called the discriminant , and its sign determines which of the three root cases we are in.     Without solving for the roots, state which case (two distinct real roots, one repeated real root, or two complex conjugate roots) corresponds to , , and .     : two distinct real roots. : one repeated real root. : two complex conjugate roots.      For the ODE , find all values of for which the general solution involves and (i.e., the characteristic equation has complex roots).    The characteristic equation is , so . The roots are complex exactly when . Solve this inequality for .            Complex Roots Come in Conjugate Pairs   Consider with .     Use the quadratic formula to write the two roots in the form , identifying and in terms of , , and .    Start from . Since , write so that . Then split the fraction into a real part and an imaginary part.           Explain why the two roots and must be complex conjugates of each other.    From part (a), and for the same real numbers and : they have the same real part and opposite imaginary parts, so .      "
},
{
  "id": "ex-3-1-2",
  "level": "2",
  "url": "exercises-3-1.html#ex-3-1-2",
  "type": "Exercise",
  "number": "3.1.7.1",
  "title": "",
  "body": "  Find the general solution of the differential equation.         "
},
{
  "id": "ex-3-1-3",
  "level": "2",
  "url": "exercises-3-1.html#ex-3-1-3",
  "type": "Exercise",
  "number": "3.1.7.2",
  "title": "",
  "body": "  Find the general solution of the differential equation.         "
},
{
  "id": "ex-3-1-4",
  "level": "2",
  "url": "exercises-3-1.html#ex-3-1-4",
  "type": "Exercise",
  "number": "3.1.7.3",
  "title": "",
  "body": "  Find the general solution of the differential equation.         "
},
{
  "id": "ex-3-1-5",
  "level": "2",
  "url": "exercises-3-1.html#ex-3-1-5",
  "type": "Exercise",
  "number": "3.1.7.4",
  "title": "",
  "body": "  Solve the initial value problem.     General solution:   Particular solution:    "
},
{
  "id": "ex-3-1-6",
  "level": "2",
  "url": "exercises-3-1.html#ex-3-1-6",
  "type": "Exercise",
  "number": "3.1.7.5",
  "title": "From a General Solution Back to the ODE.",
  "body": " From a General Solution Back to the ODE   Suppose the general solution to a second-order linear homogeneous ODE with constant coefficients (with ) is      What are the roots and of the characteristic equation?           Write the characteristic equation in the factored form , then expand it into the form .    Recall that for , the characteristic equation is , and it factors as when are the roots. With , just expand the product.           Using part (b), write down the ODE that has as its general solution.         "
},
{
  "id": "ex-3-1-7",
  "level": "2",
  "url": "exercises-3-1.html#ex-3-1-7",
  "type": "Exercise",
  "number": "3.1.7.6",
  "title": "Practice: From Solution to ODE.",
  "body": " Practice: From Solution to ODE   Use the same method as in to find the ODE with the given general solution.                           "
},
{
  "id": "ex-3-1-8",
  "level": "2",
  "url": "exercises-3-1.html#ex-3-1-8",
  "type": "Exercise",
  "number": "3.1.7.7",
  "title": "The Discriminant.",
  "body": " The Discriminant   Recall the quadratic formula: for , The expression under the square root, , is called the discriminant , and its sign determines which of the three root cases we are in.     Without solving for the roots, state which case (two distinct real roots, one repeated real root, or two complex conjugate roots) corresponds to , , and .     : two distinct real roots. : one repeated real root. : two complex conjugate roots.      For the ODE , find all values of for which the general solution involves and (i.e., the characteristic equation has complex roots).    The characteristic equation is , so . The roots are complex exactly when . Solve this inequality for .         "
},
{
  "id": "ex-3-1-9",
  "level": "2",
  "url": "exercises-3-1.html#ex-3-1-9",
  "type": "Exercise",
  "number": "3.1.7.8",
  "title": "Complex Roots Come in Conjugate Pairs.",
  "body": " Complex Roots Come in Conjugate Pairs   Consider with .     Use the quadratic formula to write the two roots in the form , identifying and in terms of , , and .    Start from . Since , write so that . Then split the fraction into a real part and an imaginary part.           Explain why the two roots and must be complex conjugates of each other.    From part (a), and for the same real numbers and : they have the same real part and opposite imaginary parts, so .    "
},
{
  "id": "sec-undamped-mass-spring",
  "level": "1",
  "url": "sec-undamped-mass-spring.html",
  "type": "Section",
  "number": "3.2.1",
  "title": "The Undamped Mass-Spring System",
  "body": " The Undamped Mass-Spring System   Alright, so we now have a full understanding of how to solve the ODE This ODE turns out to have a very interesting application to the mass-spring model. The idea behind the model is simple: a block of mass is attached to a spring, and we want to track its position over time.  Press \"Play\" on the animation below to get a feel for how the mass moves. The mass oscillates back and forth between a compressed state and a stretched state, passing through the equilibrium position each time. The equilibrium position is simply where the spring sits at rest with no velocity: if the mass starts there undisturbed, it stays there. But if it starts displaced in either direction, the spring pulls it back, and the oscillation begins.   A horizontal mass-spring system. The block of mass is attached to a spring with spring constant fixed to a wall. We measure position from the equilibrium position (where the spring is neither stretched nor compressed). When the spring is stretched ; when the spring is compressed ; when the mass is at equilibrium. Press Play to watch it oscillate!     Borrowing some facts from physics, we will give a brief derivation of how to obtain an ODE modelling the system. Everything below follows from just Hooke's Law and Newton's second law of motion. Later on we will mostly be focusing on interpreting the behavior of solutions to the ODE and how it relates to the physical reality.   Hooke's Law   The restoring force exerted by a spring is proportional to the displacement from equilibrium: where is the spring constant . The negative sign means the force always pulls the mass back toward equilibrium.     By Newton's second law, the total force on the mass equals , where is the acceleration. Since the only force acting on the mass is the spring force , we have: Rearranging gives us the undamped mass-spring ODE : We can simplify this by dividing through by and letting :   Let's give a quick summary of this below.   Undamped Mass Spring System   The undamped mass-spring ODE is: where is the mass of the object on the spring and is the spring constant in the system. Dividing through by , we can write this as where the constant is called the natural frequency of the system. It depends only on the spring constant and the mass.  This ODE describes free undamped motion . It is free because there is no external driving force, and undamped because there is no friction or damping force slowing the mass down.     Notice that is exactly in the form we saw in . The general solution is: This is called simple harmonic motion : the mass oscillates back and forth forever, with the shape of the solution determined by the initial conditions and .    An Equivalent Form  The solution can also be written as a single cosine function: where is the amplitude (the maximum displacement from equilibrium) and is a phase shift. We will skip the proof, but see the dropdown if you are curious.   Why these two forms are equivalent (can skim)  Using the cosine angle subtraction formula: Setting and (in practice, we start with , and this is what determines and ), we get so .         Simple harmonic motion. The left panel shows the spring oscillating; the right panel traces the position over time. Adjust , , and to see how the solution changes. Notice that when the spring is stretched, when the mass passes through equilibrium, and when the spring is compressed.     Okay, so we covered a lot of ground on this page! There was quite a bit of set-up with the physics, but we will start getting more familiar with all these terms as we work through more examples. Let's summarize below:   Key Takeaways     The ODE: A mass on a spring with constant satisfies , or equivalently where .   Simple harmonic motion: The general solution is , or equivalently with amplitude .   Free undamped: No external force, no friction. The mass oscillates forever. This changes when we add damping next week!       This video goes through the content of this page.     "
},
{
  "id": "fig-spring-intro",
  "level": "2",
  "url": "sec-undamped-mass-spring.html#fig-spring-intro",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " A horizontal mass-spring system. The block of mass is attached to a spring with spring constant fixed to a wall. We measure position from the equilibrium position (where the spring is neither stretched nor compressed). When the spring is stretched ; when the spring is compressed ; when the mass is at equilibrium. Press Play to watch it oscillate!   "
},
{
  "id": "def-hookes-law",
  "level": "2",
  "url": "sec-undamped-mass-spring.html#def-hookes-law",
  "type": "Fact",
  "number": "3.2.2",
  "title": "Hooke’s Law.",
  "body": " Hooke's Law   The restoring force exerted by a spring is proportional to the displacement from equilibrium: where is the spring constant . The negative sign means the force always pulls the mass back toward equilibrium.   "
},
{
  "id": "sec-undamped-mass-spring-7",
  "level": "2",
  "url": "sec-undamped-mass-spring.html#sec-undamped-mass-spring-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "undamped mass-spring ODE "
},
{
  "id": "def-natural-frequency",
  "level": "2",
  "url": "sec-undamped-mass-spring.html#def-natural-frequency",
  "type": "Definition",
  "number": "3.2.3",
  "title": "Undamped Mass Spring System.",
  "body": " Undamped Mass Spring System   The undamped mass-spring ODE is: where is the mass of the object on the spring and is the spring constant in the system. Dividing through by , we can write this as where the constant is called the natural frequency of the system. It depends only on the spring constant and the mass.  This ODE describes free undamped motion . It is free because there is no external driving force, and undamped because there is no friction or damping force slowing the mass down.   "
},
{
  "id": "sec-undamped-mass-spring-10",
  "level": "2",
  "url": "sec-undamped-mass-spring.html#sec-undamped-mass-spring-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple harmonic motion "
},
{
  "id": "remark-amplitude-form",
  "level": "2",
  "url": "sec-undamped-mass-spring.html#remark-amplitude-form",
  "type": "Remark",
  "number": "3.2.4",
  "title": "An Equivalent Form.",
  "body": " An Equivalent Form  The solution can also be written as a single cosine function: where is the amplitude (the maximum displacement from equilibrium) and is a phase shift. We will skip the proof, but see the dropdown if you are curious.   Why these two forms are equivalent (can skim)  Using the cosine angle subtraction formula: Setting and (in practice, we start with , and this is what determines and ), we get so .   "
},
{
  "id": "fig-spring-full",
  "level": "2",
  "url": "sec-undamped-mass-spring.html#fig-spring-full",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": " Simple harmonic motion. The left panel shows the spring oscillating; the right panel traces the position over time. Adjust , , and to see how the solution changes. Notice that when the spring is stretched, when the mass passes through equilibrium, and when the spring is compressed.   "
},
{
  "id": "video-undamped-spring",
  "level": "2",
  "url": "sec-undamped-mass-spring.html#video-undamped-spring",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-period-frequency",
  "level": "1",
  "url": "sec-period-frequency.html",
  "type": "Section",
  "number": "3.2.2",
  "title": "Period and Frequency",
  "body": " Period and Frequency   From the previous page, we already know how to set up and solve the undamped mass-spring system. As a reminder, when is the mass and is the spring constant of the system, the position function satisfies the ODE where . And the solution is which is called simple harmonic motion   Now at this point, it may feel like we have a full understanding of this ODE model. However, just solving for does not give us the full picture. Often in applications, we want to take this a step further and really understand the behavior of the solutions. A big theme from here on is exploring how the mathematics relates to the physical behavior of the spring.  We begin with a quick example to make sure we understand how to solve the ODE. Then we will explore some more properties.   A 10 kg Mass on a Spring   A block of mass kg is attached to a spring with spring constant N\/m. Find the general solution describing its position.    Plug and into and solve.    Substituting and : Dividing through by 10: So , giving . The general solution is:      As we said at the beginning of this page, we don't just care about the equation We want to understand what is actually happening in the mass-spring system. In particular, we care about the period of the solution: the time it takes to complete one full oscillation. As you play with the interactive below, pay attention to what happens as you change and : does the period change? Also notice how the spring animation on the left relates to the graph on the right.   The solution for our 10 kg mass. The left panel shows the spring; the right panel traces position over time. The shaded blue region marks one full oscillation .    Notice that no matter what you set and to, the shaded region (one full oscillation) always has the same width. The shape of the curve changes, but the time it takes to complete one cycle doesn't. That time is what we call the .  What does affect the period is the natural frequency of the system: . In the graph below, observe what happens to a cosine function as you change the value of .    The function for different values of . The shaded region shows one full period, with the period value updating live as you move the slider. What's the relationship between and the period?    As  increases , the position function oscillates faster , so the period decreases. We know that has a period of . If you make it move twice as fast, as in , then the period is cut in half: . In general, scaling time by a factor of gives a period of:   A related quantity is frequency: how many full oscillations occur per unit time. Bigger means faster oscillation and therefore higher frequency. In fact, frequency is just the reciprocal of the period .  Let's summarize this below.   Period and Frequency of Simple Harmonic Motion  For simple harmonic motion :  The period (time to complete one full oscillation) is:   The frequency (number of oscillations per unit time) is:   Larger means faster oscillation: shorter period, higher frequency.    Now for a quick check!    For the 10 kg mass-spring system from , where , which of the following correctly gives the period and frequency ?      and    Exactly right. With , the period is seconds, and the frequency is oscillations per second.       and    The period is correct, but frequency and period are reciprocals of each other, not equal. Frequency is .      and    The period formula is , not just itself. The comes from the fact that cosine completes one full cycle over an interval of length .      and    Close, but off by a factor of 2. One full oscillation of cosine spans , not , that would only be a half-cycle. The correct period is .        Key Takeaways    Period:  , the time for one complete oscillation. Depends only on , not on how far you pull the mass.   Frequency:  , oscillations per unit time. Larger means higher frequency and shorter period.   Initial conditions don't affect period: changing and changes the shape of the oscillation (amplitude, starting position) but not how fast it oscillates.      This video goes through the content of this page.     "
},
{
  "id": "ex-spring-10kg",
  "level": "2",
  "url": "sec-period-frequency.html#ex-spring-10kg",
  "type": "Example",
  "number": "3.2.1",
  "title": "A 10 kg Mass on a Spring.",
  "body": " A 10 kg Mass on a Spring   A block of mass kg is attached to a spring with spring constant N\/m. Find the general solution describing its position.    Plug and into and solve.    Substituting and : Dividing through by 10: So , giving . The general solution is:    "
},
{
  "id": "fig-spring-sqrt14",
  "level": "2",
  "url": "sec-period-frequency.html#fig-spring-sqrt14",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " The solution for our 10 kg mass. The left panel shows the spring; the right panel traces position over time. The shaded blue region marks one full oscillation .   "
},
{
  "id": "fig-period-explorer",
  "level": "2",
  "url": "sec-period-frequency.html#fig-period-explorer",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " The function for different values of . The shaded region shows one full period, with the period value updating live as you move the slider. What's the relationship between and the period?   "
},
{
  "id": "obs-period-frequency",
  "level": "2",
  "url": "sec-period-frequency.html#obs-period-frequency",
  "type": "Observation",
  "number": "3.2.4",
  "title": "Period and Frequency of Simple Harmonic Motion.",
  "body": " Period and Frequency of Simple Harmonic Motion  For simple harmonic motion :  The period (time to complete one full oscillation) is:   The frequency (number of oscillations per unit time) is:   Larger means faster oscillation: shorter period, higher frequency.  "
},
{
  "id": "ex-mc-period-freq",
  "level": "2",
  "url": "sec-period-frequency.html#ex-mc-period-freq",
  "type": "Checkpoint",
  "number": "3.2.5",
  "title": "",
  "body": "  For the 10 kg mass-spring system from , where , which of the following correctly gives the period and frequency ?      and    Exactly right. With , the period is seconds, and the frequency is oscillations per second.       and    The period is correct, but frequency and period are reciprocals of each other, not equal. Frequency is .      and    The period formula is , not just itself. The comes from the fact that cosine completes one full cycle over an interval of length .      and    Close, but off by a factor of 2. One full oscillation of cosine spans , not , that would only be a half-cycle. The correct period is .     "
},
{
  "id": "video-period-frequency",
  "level": "2",
  "url": "sec-period-frequency.html#video-period-frequency",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-equilibrium-crossings",
  "level": "1",
  "url": "sec-equilibrium-crossings.html",
  "type": "Section",
  "number": "3.2.3",
  "title": "Passing Through Equilibrium",
  "body": " Passing Through Equilibrium  As we said on the previous page, from here on out we are exploring the behavior of the solutions to the mass-spring system.  We know the mass oscillates forever in free undamped motion. Let's think about a specific question: how many times does it pass through equilibrium ( ) as time goes to infinity? Play around with the graph below and see what you notice.   Simple harmonic motion with all three parameters adjustable. Each time the mass passes through equilibrium ( ), a green dot appears on the graph and the counter updates. Try different values of , , and . What do you notice?       Based on the graph above, how many times does a mass undergoing free undamped simple harmonic motion pass through equilibrium ( ) as ?     A finite number of times, depending on and .   Try changing and in the interactive above. The mass keeps crossing equilibrium regardless. The amplitude changes, but the oscillation never stops.     A finite number of times, depending on .   Changing makes the mass oscillate faster or slower, but it never stops oscillating. The crossings keep coming, forever.     Infinitely many times, regardless of , , or .   Exactly. Since there's no damping, the amplitude stays fixed and the mass oscillates forever, crossing twice per period, indefinitely.      Zero times. The mass never reaches exactly unless it starts there.   The mass absolutely does pass through ! Watch the counter in the interactive. Unless the solution is identically zero (which requires ), the oscillation crosses equilibrium repeatedly.       Notice that no matter what you set the sliders to (as long as the solution isn't identically zero), the mass oscillates with a fixed amplitude, so it keeps crossing the equilibrium ( ) forever. This is a key feature of undamped motion. There is nothing slowing it down, so the force from the spring has it just repeat the same oscillations for all of time!  While it seems clear from the graph, we should always be able to back this up algebraically. We do this in the following example.   Showing Infinitely Many Equilibrium Crossings   Let be the general solution to an undamped mass-spring system, where and are not both zero. Show that has infinitely many solutions.    Set and solve for .    We want to solve , i.e.:    Case 1: . Then . Since (not both zero), we need , which gives: so . This is a different value of for each , so infinitely many solutions.   Case 2: . Rearranging: Dividing both sides by : Solving for :  Since we need , we take to be whichever non-negative integers keep positive (starting at or depending on the sign of the arctan term). Either way, there are infinitely many valid values of .   Why ? (if unsure: click for a trig review)  Two things are going on here. First, only gives us one solution: it's the inverse of restricted to . So is just the first value of that works.  Second, tangent has period , meaning for any . So if is a solution to , then so is , and , and so on. That's where the comes from, capturing all solutions at once.  (Note: has period , not like sine and cosine. So we add multiples of , not .)   Since ranges over all integers, this gives infinitely many values of , one for each . No matter what , , and are, the mass passes through equilibrium infinitely many times.      Key Takeaways    Graphical observation: free undamped simple harmonic motion oscillates with fixed amplitude forever. So the mass passes through equilibrium ( ) infinitely many times.   Algebraic justification: setting and solving gives (or when ). Either way, there are infinitely many times at which the mass passes through equilibrium.   This is a feature of free undamped motion: no energy is lost, so the oscillation never dies out. When we add damping later, this will change!      This video goes through the content of this page.     "
},
{
  "id": "fig-spring-equilibrium",
  "level": "2",
  "url": "sec-equilibrium-crossings.html#fig-spring-equilibrium",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Simple harmonic motion with all three parameters adjustable. Each time the mass passes through equilibrium ( ), a green dot appears on the graph and the counter updates. Try different values of , , and . What do you notice?   "
},
{
  "id": "ex-mc-equil-crossings",
  "level": "2",
  "url": "sec-equilibrium-crossings.html#ex-mc-equil-crossings",
  "type": "Checkpoint",
  "number": "3.2.2",
  "title": "",
  "body": "  Based on the graph above, how many times does a mass undergoing free undamped simple harmonic motion pass through equilibrium ( ) as ?     A finite number of times, depending on and .   Try changing and in the interactive above. The mass keeps crossing equilibrium regardless. The amplitude changes, but the oscillation never stops.     A finite number of times, depending on .   Changing makes the mass oscillate faster or slower, but it never stops oscillating. The crossings keep coming, forever.     Infinitely many times, regardless of , , or .   Exactly. Since there's no damping, the amplitude stays fixed and the mass oscillates forever, crossing twice per period, indefinitely.      Zero times. The mass never reaches exactly unless it starts there.   The mass absolutely does pass through ! Watch the counter in the interactive. Unless the solution is identically zero (which requires ), the oscillation crosses equilibrium repeatedly.     "
},
{
  "id": "ex-equil-crossings-algebra",
  "level": "2",
  "url": "sec-equilibrium-crossings.html#ex-equil-crossings-algebra",
  "type": "Example",
  "number": "3.2.3",
  "title": "Showing Infinitely Many Equilibrium Crossings.",
  "body": " Showing Infinitely Many Equilibrium Crossings   Let be the general solution to an undamped mass-spring system, where and are not both zero. Show that has infinitely many solutions.    Set and solve for .    We want to solve , i.e.:    Case 1: . Then . Since (not both zero), we need , which gives: so . This is a different value of for each , so infinitely many solutions.   Case 2: . Rearranging: Dividing both sides by : Solving for :  Since we need , we take to be whichever non-negative integers keep positive (starting at or depending on the sign of the arctan term). Either way, there are infinitely many valid values of .   Why ? (if unsure: click for a trig review)  Two things are going on here. First, only gives us one solution: it's the inverse of restricted to . So is just the first value of that works.  Second, tangent has period , meaning for any . So if is a solution to , then so is , and , and so on. That's where the comes from, capturing all solutions at once.  (Note: has period , not like sine and cosine. So we add multiples of , not .)   Since ranges over all integers, this gives infinitely many values of , one for each . No matter what , , and are, the mass passes through equilibrium infinitely many times.   "
},
{
  "id": "video-equilibrium-crossings",
  "level": "2",
  "url": "sec-equilibrium-crossings.html#video-equilibrium-crossings",
  "type": "Figure",
  "number": "3.2.4",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-amplitude",
  "level": "1",
  "url": "sec-amplitude.html",
  "type": "Section",
  "number": "3.2.4",
  "title": "Distance from Equilibrium",
  "body": " Distance from Equilibrium   We are not quite done exploring the behavior of solutions to the free undamped model! We know the mass oscillates forever. In this page we explore how far from equilibrium it actually gets. Watch the spring below, and pay attention to when it's at its most stretched and most compressed! How does this connect to what's happening in the graph on the right?   The solution . The dashed horizontal lines on the graph mark the maximum and minimum values. Notice these match the \"max stretched\" and \"max compressed\" moments on the spring.       From the graph above, what is the furthest distance the mass ever gets from equilibrium?       Right: the graph peaks at and bottoms out at , so the mass never gets more than 2 units from equilibrium.        The 3 is , the frequency: it controls how fast the mass oscillates, not how far it goes. Look at the graph: the curve never reaches .       The mass swings between and , so the total distance from one extreme to the other is 4, but the question asks for distance from equilibrium , which is just half of that.       That's the period of ( ), a time, not a distance. Look at the height of the curve on the graph for the maximum distance.       That maximum distance is just the amplitude of the cosine function, which equals the coefficient out front. In general, for any solution of the form , the amplitude is .   Maximum Distance from Equilibrium  If is the position of a mass in a spring-mass system, then the maximum distance the mass ever gets from equilibrium is the amplitude :     Let's put all of this together with an example. We will be exploring an additional question at the end regarding the speed of the spring.   A Mass-Spring System: Amplitude and Speed   Suppose a mass-spring system is described by     Step 1: Solve the IVP  Find .   This is in the form of : identify and write down the general solution, then apply the initial conditions.    The equation is in the form of with , so the general solution is: Applying initial conditions: So the solution is:      Step 2: How far from equilibrium?  What is the furthest the mass gets from equilibrium?   Identify the amplitude .    With and : The mass gets at most units from equilibrium. We can also see this directly: has maximum value 3 and minimum value .     Step 3: Does it slow down over time?   Will the mass move slower as it passes through equilibrium the 5th time compared to the 1st time?      Compute .  Find all times when the mass passes through equilibrium, i.e. solve .  Evaluate the speed at those times and compare.       1. Compute :    2. The mass passes through equilibrium when , i.e. , so , giving:    3. Evaluate the speed at each crossing: Since for all integers , we get: The speed at equilibrium is always exactly 6, whether it's the 1st crossing or the 5th. Free undamped motion has constant amplitude: no energy is lost, so the mass moves just as fast through equilibrium every time.      So there we have it. From the previous pages, we learned how to interpret and determine the frequency and period of mass. Then we explored how it goes back and forth through the equilibrium position infinitely many times as time goes on forever. And now, we understand how to connect the amplitude of with the distance the spring is from the equilibrium. We also explored the slightly more subtle point that the speed at which it passes through equilibrium never changes. This should be clear from the graph though, as is a periodic function that keeps repeating the same motion forever!   Key Takeaways    Amplitude: the maximum distance from equilibrium is . For a pure cosine or sine solution, it's just the coefficient out front.   Speed at equilibrium is constant: since there's no damping, no energy is lost. The mass passes through equilibrium at the same speed every time.   Free undamped motion is perfectly periodic: same amplitude, same speed, same period, forever! Damping changes all of this, as we'll see next.      This video goes through the content of this page.     "
},
{
  "id": "fig-spring-amplitude",
  "level": "2",
  "url": "sec-amplitude.html#fig-spring-amplitude",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " The solution . The dashed horizontal lines on the graph mark the maximum and minimum values. Notice these match the \"max stretched\" and \"max compressed\" moments on the spring.   "
},
{
  "id": "ex-mc-amplitude-2cos3t",
  "level": "2",
  "url": "sec-amplitude.html#ex-mc-amplitude-2cos3t",
  "type": "Checkpoint",
  "number": "3.2.2",
  "title": "",
  "body": "  From the graph above, what is the furthest distance the mass ever gets from equilibrium?       Right: the graph peaks at and bottoms out at , so the mass never gets more than 2 units from equilibrium.        The 3 is , the frequency: it controls how fast the mass oscillates, not how far it goes. Look at the graph: the curve never reaches .       The mass swings between and , so the total distance from one extreme to the other is 4, but the question asks for distance from equilibrium , which is just half of that.       That's the period of ( ), a time, not a distance. Look at the height of the curve on the graph for the maximum distance.     "
},
{
  "id": "obs-amplitude",
  "level": "2",
  "url": "sec-amplitude.html#obs-amplitude",
  "type": "Observation",
  "number": "3.2.3",
  "title": "Maximum Distance from Equilibrium.",
  "body": " Maximum Distance from Equilibrium  If is the position of a mass in a spring-mass system, then the maximum distance the mass ever gets from equilibrium is the amplitude :   "
},
{
  "id": "ex-spring-amplitude-speed",
  "level": "2",
  "url": "sec-amplitude.html#ex-spring-amplitude-speed",
  "type": "Example",
  "number": "3.2.4",
  "title": "A Mass-Spring System: Amplitude and Speed.",
  "body": " A Mass-Spring System: Amplitude and Speed   Suppose a mass-spring system is described by     Step 1: Solve the IVP  Find .   This is in the form of : identify and write down the general solution, then apply the initial conditions.    The equation is in the form of with , so the general solution is: Applying initial conditions: So the solution is:      Step 2: How far from equilibrium?  What is the furthest the mass gets from equilibrium?   Identify the amplitude .    With and : The mass gets at most units from equilibrium. We can also see this directly: has maximum value 3 and minimum value .     Step 3: Does it slow down over time?   Will the mass move slower as it passes through equilibrium the 5th time compared to the 1st time?      Compute .  Find all times when the mass passes through equilibrium, i.e. solve .  Evaluate the speed at those times and compare.       1. Compute :    2. The mass passes through equilibrium when , i.e. , so , giving:    3. Evaluate the speed at each crossing: Since for all integers , we get: The speed at equilibrium is always exactly 6, whether it's the 1st crossing or the 5th. Free undamped motion has constant amplitude: no energy is lost, so the mass moves just as fast through equilibrium every time.    "
},
{
  "id": "video-undamped-spring-examples",
  "level": "2",
  "url": "sec-amplitude.html#video-undamped-spring-examples",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "exercises-3-2",
  "level": "1",
  "url": "exercises-3-2.html",
  "type": "Exercises",
  "number": "3.2.5",
  "title": "Exercises for Section 3.2",
  "body": " Exercises for Section 3.2     Determine the period and frequency of the simple harmonic motion of a -kg mass on the end of a spring with spring constant N\/m.    First find , then use and from .    Period: s. Frequency: Hz.      Passing Through Equilibrium   A kg mass is attached to a spring with spring constant N\/m. The mass is pulled m from equilibrium and released from rest, so and .     Write down the ODE for this system, then simplify it to the form . What is ?    Plug and into , then identify .     , so .      Solve the IVP for .           Find all times at which the mass passes through equilibrium ( ).    Set , so . For which values of is cosine equal to zero?           Compare the speed of the mass at the 1st time it passes through equilibrium to the speed at the 4th time it passes through equilibrium.    The speed is at both the 1st and 4th crossings: the speed at equilibrium is always the same.       Maximum Distance from Equilibrium   Suppose a mass-spring system is described by the ODE      Solve the IVP for .           What is the maximum distance the mass ever gets from equilibrium?    Recall the amplitude from .           Find all times at which the mass reaches this maximum distance from equilibrium.    The mass is at maximum distance when , i.e. when . For which values of does cosine equal ?           What is the speed of the mass at these times?     (the mass is momentarily at rest at maximum distance).      "
},
{
  "id": "ex-3-2-1",
  "level": "2",
  "url": "exercises-3-2.html#ex-3-2-1",
  "type": "Exercise",
  "number": "3.2.5.1",
  "title": "",
  "body": "  Determine the period and frequency of the simple harmonic motion of a -kg mass on the end of a spring with spring constant N\/m.    First find , then use and from .    Period: s. Frequency: Hz.   "
},
{
  "id": "ex-3-2-2",
  "level": "2",
  "url": "exercises-3-2.html#ex-3-2-2",
  "type": "Exercise",
  "number": "3.2.5.2",
  "title": "Passing Through Equilibrium.",
  "body": " Passing Through Equilibrium   A kg mass is attached to a spring with spring constant N\/m. The mass is pulled m from equilibrium and released from rest, so and .     Write down the ODE for this system, then simplify it to the form . What is ?    Plug and into , then identify .     , so .      Solve the IVP for .           Find all times at which the mass passes through equilibrium ( ).    Set , so . For which values of is cosine equal to zero?           Compare the speed of the mass at the 1st time it passes through equilibrium to the speed at the 4th time it passes through equilibrium.    The speed is at both the 1st and 4th crossings: the speed at equilibrium is always the same.    "
},
{
  "id": "ex-3-2-3",
  "level": "2",
  "url": "exercises-3-2.html#ex-3-2-3",
  "type": "Exercise",
  "number": "3.2.5.3",
  "title": "Maximum Distance from Equilibrium.",
  "body": " Maximum Distance from Equilibrium   Suppose a mass-spring system is described by the ODE      Solve the IVP for .           What is the maximum distance the mass ever gets from equilibrium?    Recall the amplitude from .           Find all times at which the mass reaches this maximum distance from equilibrium.    The mass is at maximum distance when , i.e. when . For which values of does cosine equal ?           What is the speed of the mass at these times?     (the mass is momentarily at rest at maximum distance).    "
},
{
  "id": "sec-damped-mass-spring",
  "level": "1",
  "url": "sec-damped-mass-spring.html",
  "type": "Section",
  "number": "3.3.1",
  "title": "The Damped Mass-Spring System",
  "body": " The Damped Mass-Spring System   In , we modeled a mass attached to a spring and derived the ODE . That model assumed no friction whatsoever, so the mass oscillated forever. In reality, friction always acts to slow things down. We now add a dashpot to the system to model this frictional resistance.  A dashpot is a mechanical device that resists motion. The spring and dashpot both connect the mass to the wall, as shown in the animation below. Press Play to see how the dashpot changes the behavior compared to the undamped case.   A horizontal mass-spring-dashpot system. The block of mass is connected to the wall by a spring (top) and a dashpot (bottom). Press Play to watch the oscillations die out as the dashpot dissipates energy.     Let's spend a moment deriving the ODE for this system using a bit of physics. Once we have it, we can put all our solving techniques to use and dig into what the solutions actually look like. We'll go through the derivation once here, then mostly just work with the ODE itself from here on.  As in , we measure position from the equilibrium position, with meaning the spring is stretched and meaning it is compressed. By , the restoring force from the spring is: where is the spring constant. The dashpot contributes a damping force proportional to velocity: where is the damping constant . The negative sign means the dashpot always resists the direction of motion.  By Newton's second law, the total force equals . Since the only forces acting on the mass are and , we have: Rearranging gives the damped mass-spring ODE :     The Damped Mass-Spring System   The position of a mass on a spring with constant and damping constant satisfies: where . This is called free damped motion : free because there is no external driving force, and damped because the dashpot dissipates energy.     To solve , we use the same characteristic equation approach from . The characteristic equation is: By the quadratic formula, the roots are: The expression is the discriminant , and its sign tells us which of the three cases from we're dealing with.   You've already seen how the sign of the discriminant determines the type of roots back in ; let's make sure that's fresh in your mind.    For the characteristic equation , which condition on , , and gives two distinct real roots?  Note that the discriminant is .       Correct! When the discriminant is positive, the square root is real and nonzero, giving two distinct real roots .        When the discriminant is zero the square root vanishes, giving one repeated root , not two distinct roots.       When the discriminant is negative the square root is imaginary, giving complex conjugate roots, not two distinct real roots.       This includes the case , which gives a repeated root, not two distinct roots. Strict inequality is needed.       As we saw in , each type of roots leads to a qualitatively different form of the general solution. In the mass-spring context, each case also has a physical name that describes how heavily the system is damped, depending on the size of the damping constant relative to and .    The Three Damping Cases   For free damped motion with , the system falls into one of three cases depending on the discriminant :     Overdamped ( ): two distinct real roots. The damping constant is large relative to and , so the system is slowed down the most.   Critically damped ( ): one repeated real root. This is the borderline case: the exact value of that separates overdamped from underdamped.   Underdamped ( ): complex conjugate roots. The damping constant is small, so the system still oscillates, just with decaying amplitude.    In all three cases , so the system is damped. When we recover the undamped system from .      Key Takeaways     The ODE: Adding a dashpot gives , called free damped motion. The new term models friction proportional to velocity.   The discriminant: The sign of determines the type of roots of the characteristic equation and therefore the qualitative behavior of solutions.   Three cases: Overdamped ( ), critically damped ( ), and underdamped ( ). Larger means more damping.       This video goes through the content of this page.     "
},
{
  "id": "sec-damped-mass-spring-2",
  "level": "2",
  "url": "sec-damped-mass-spring.html#sec-damped-mass-spring-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dashpot "
},
{
  "id": "fig-dashpot-intro",
  "level": "2",
  "url": "sec-damped-mass-spring.html#fig-dashpot-intro",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": " A horizontal mass-spring-dashpot system. The block of mass is connected to the wall by a spring (top) and a dashpot (bottom). Press Play to watch the oscillations die out as the dashpot dissipates energy.   "
},
{
  "id": "sec-damped-mass-spring-6",
  "level": "2",
  "url": "sec-damped-mass-spring.html#sec-damped-mass-spring-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "damping force damping constant "
},
{
  "id": "sec-damped-mass-spring-7",
  "level": "2",
  "url": "sec-damped-mass-spring.html#sec-damped-mass-spring-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "damped mass-spring ODE "
},
{
  "id": "def-damped-mass-spring",
  "level": "2",
  "url": "sec-damped-mass-spring.html#def-damped-mass-spring",
  "type": "Definition",
  "number": "3.3.2",
  "title": "The Damped Mass-Spring System.",
  "body": " The Damped Mass-Spring System   The position of a mass on a spring with constant and damping constant satisfies: where . This is called free damped motion : free because there is no external driving force, and damped because the dashpot dissipates energy.   "
},
{
  "id": "sec-damped-mass-spring-9",
  "level": "2",
  "url": "sec-damped-mass-spring.html#sec-damped-mass-spring-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "discriminant "
},
{
  "id": "ex-mc-discriminant-overdamped",
  "level": "2",
  "url": "sec-damped-mass-spring.html#ex-mc-discriminant-overdamped",
  "type": "Checkpoint",
  "number": "3.3.3",
  "title": "",
  "body": "  For the characteristic equation , which condition on , , and gives two distinct real roots?  Note that the discriminant is .       Correct! When the discriminant is positive, the square root is real and nonzero, giving two distinct real roots .        When the discriminant is zero the square root vanishes, giving one repeated root , not two distinct roots.       When the discriminant is negative the square root is imaginary, giving complex conjugate roots, not two distinct real roots.       This includes the case , which gives a repeated root, not two distinct roots. Strict inequality is needed.     "
},
{
  "id": "def-damping-cases",
  "level": "2",
  "url": "sec-damped-mass-spring.html#def-damping-cases",
  "type": "Definition",
  "number": "3.3.4",
  "title": "The Three Damping Cases.",
  "body": " The Three Damping Cases   For free damped motion with , the system falls into one of three cases depending on the discriminant :     Overdamped ( ): two distinct real roots. The damping constant is large relative to and , so the system is slowed down the most.   Critically damped ( ): one repeated real root. This is the borderline case: the exact value of that separates overdamped from underdamped.   Underdamped ( ): complex conjugate roots. The damping constant is small, so the system still oscillates, just with decaying amplitude.    In all three cases , so the system is damped. When we recover the undamped system from .   "
},
{
  "id": "video-damped-spring-intro",
  "level": "2",
  "url": "sec-damped-mass-spring.html#video-damped-spring-intro",
  "type": "Figure",
  "number": "3.3.5",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-underdamped",
  "level": "1",
  "url": "sec-underdamped.html",
  "type": "Section",
  "number": "3.3.2",
  "title": "Behavior of Underdamped Solutions",
  "body": " Behavior of Underdamped Solutions   Recall from the previous page that we are in the underdamped case when . Solving the characteristic equation in this case gives complex roots , which leads to the general solution If you want to see exactly where and come from, check out the dropdown below.   Where do alpha and omega come from? (can skim)  By the quadratic formula, the roots of are Since , the quantity under the square root is negative, so we can write . This means the roots are complex, , where Note that , since means is always negative.    Underdamped Solution Form  When , the characteristic equation has complex conjugate roots and the system is underdamped . The general solution takes the form: where and are determined by , , and .  And since , , and are all positive, is always negative, so the factor is always exponentially decaying.    Notice this solution has two pieces working together: an exponentially decaying factor (with ) and an oscillating trig expression . Think of the exponential as a shrinking envelope that squeezes the oscillations toward zero as time goes on.  To see how affects the solution, the graph below compares the pure trig part (no decay) to the full underdamped solution. Move the slider to change the decay rate.    Left: the oscillating factor alone. Right: the full underdamped solution . The red curves show the decaying amplitude envelope . Move the slider to change . At the two graphs match.     The shape of the underdamped solution is very similar to the undamped case from : both oscillate and cross the equilibrium position repeatedly. The key difference is the decaying amplitude, driven by the factor with . Physically, the dashpot is continuously removing energy from the system, causing the oscillations to shrink.  This raises a natural question: does the mass keep oscillating back and forth across equilibrium, as in the undamped case? Or does it eventually settle on one side, either compressed or stretched? Explore the animation below to see if you can determine what happens!    The underdamped spring with and . The position function is . Use the sliders to change and and press Play.       By observing the graph above, what can we deduce about how many times the mass passes through the equilibrium position as time goes on forever?     Infinitely many times.   Correct! The oscillations never fully stop in finite time. No matter how large gets, the curve continues to cross .      Exactly once.   Look again at the graph. The curve crosses many times, not just once.     At most once.   This is the behavior of overdamped and critically damped systems, not underdamped.     Never.   The graph shows the curve oscillating back and forth across repeatedly.      Okay, so we now have an intuitive feel for how often it crosses the equilibrium position. However, to prove it without a doubt, we will go into the equation for the position function itself and show it algebraically.   How Many Times Does the Mass Cross Equilibrium?   For an underdamped system, show algebraically that the mass passes through the equilibrium position infinitely many times.    This is a homework problem. The argument is very similar to the one in for the undamped case, so reviewing that example first is a good starting point.   Hint: start with and use the fact that for all .     So the mass keeps crossing equilibrium forever, no matter how small the oscillations get! This is because the trig functions make the position function oscillate as in the undamped case, and the decay factor is never exactly zero. But the amplitude is still shrinking the whole time.  Unlike the undamped case, the amplitude here is shrinking, so even though the mass keeps crossing equilibrium, it is also approaching equilibrium in the long run.    Even though the mass passes through equilibrium infinitely many times, the damping causes the oscillations to shrink down to zero: So the oscillations never fully stop in finite time, but they shrink to zero in the long run.    Key Takeaways     Solution form: Underdamped solutions have the form with .   Decaying envelope: The factor shrinks the amplitude of the oscillations toward zero. A more negative means faster decay.   Equilibrium crossings: The mass passes through infinitely many times.   Long-term behavior:  . The mass approaches equilibrium but oscillates forever while doing so.       This video goes through the content of this page.     "
},
{
  "id": "sec-underdamped-3",
  "level": "2",
  "url": "sec-underdamped.html#sec-underdamped-3",
  "type": "Justification",
  "number": "3.3.2.1",
  "title": "Where do alpha and omega come from? (can skim).",
  "body": " Where do alpha and omega come from? (can skim)  By the quadratic formula, the roots of are Since , the quantity under the square root is negative, so we can write . This means the roots are complex, , where Note that , since means is always negative.  "
},
{
  "id": "obs-underdamped-form",
  "level": "2",
  "url": "sec-underdamped.html#obs-underdamped-form",
  "type": "Observation",
  "number": "3.3.1",
  "title": "Underdamped Solution Form.",
  "body": " Underdamped Solution Form  When , the characteristic equation has complex conjugate roots and the system is underdamped . The general solution takes the form: where and are determined by , , and .  And since , , and are all positive, is always negative, so the factor is always exponentially decaying.  "
},
{
  "id": "fig-underdamped-compare",
  "level": "2",
  "url": "sec-underdamped.html#fig-underdamped-compare",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " Left: the oscillating factor alone. Right: the full underdamped solution . The red curves show the decaying amplitude envelope . Move the slider to change . At the two graphs match.   "
},
{
  "id": "fig-underdamped-spring",
  "level": "2",
  "url": "sec-underdamped.html#fig-underdamped-spring",
  "type": "Figure",
  "number": "3.3.3",
  "title": "",
  "body": " The underdamped spring with and . The position function is . Use the sliders to change and and press Play.   "
},
{
  "id": "ex-mc-underdamped-crossings",
  "level": "2",
  "url": "sec-underdamped.html#ex-mc-underdamped-crossings",
  "type": "Checkpoint",
  "number": "3.3.4",
  "title": "",
  "body": "  By observing the graph above, what can we deduce about how many times the mass passes through the equilibrium position as time goes on forever?     Infinitely many times.   Correct! The oscillations never fully stop in finite time. No matter how large gets, the curve continues to cross .      Exactly once.   Look again at the graph. The curve crosses many times, not just once.     At most once.   This is the behavior of overdamped and critically damped systems, not underdamped.     Never.   The graph shows the curve oscillating back and forth across repeatedly.     "
},
{
  "id": "ex-underdamped-crossings-algebra",
  "level": "2",
  "url": "sec-underdamped.html#ex-underdamped-crossings-algebra",
  "type": "Example",
  "number": "3.3.5",
  "title": "How Many Times Does the Mass Cross Equilibrium?",
  "body": " How Many Times Does the Mass Cross Equilibrium?   For an underdamped system, show algebraically that the mass passes through the equilibrium position infinitely many times.    This is a homework problem. The argument is very similar to the one in for the undamped case, so reviewing that example first is a good starting point.   Hint: start with and use the fact that for all .   "
},
{
  "id": "obs-underdamped-limit",
  "level": "2",
  "url": "sec-underdamped.html#obs-underdamped-limit",
  "type": "Observation",
  "number": "3.3.6",
  "title": "",
  "body": " Even though the mass passes through equilibrium infinitely many times, the damping causes the oscillations to shrink down to zero: So the oscillations never fully stop in finite time, but they shrink to zero in the long run.  "
},
{
  "id": "video-underdamped",
  "level": "2",
  "url": "sec-underdamped.html#video-underdamped",
  "type": "Figure",
  "number": "3.3.7",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-overdamped",
  "level": "1",
  "url": "sec-overdamped.html",
  "type": "Section",
  "number": "3.3.3",
  "title": "Behavior of Overdamped Solutions",
  "body": " Behavior of Overdamped Solutions   Now let's swing to the other extreme. When , the damping is so strong that the characteristic equation has two distinct real roots and , and the system is called overdamped . The general solution takes the form: If you want to see why both roots are negative, check out the dropdown below.   Why are both roots negative? (can skim)  By the quadratic formula, the roots of are Since , the quantity under the square root is positive, but it is also smaller than , so . That means both and are negative numbers. Dividing by keeps them negative, so both and are negative.    Overdamped Solution Form  When , the characteristic equation has two distinct real roots and , and the system is overdamped . Since , both roots are negative. The general solution takes the form: where and .    Unlike the underdamped case in , there are no trig functions anywhere in sight. The solution is just a sum of two decaying exponentials, with no oscillation at all.   Take a look at the animation below to see how quickly the mass slows down in this case!   An overdamped spring with , , , , so . Press Play and notice the mass crosses equilibrium once then decays back without oscillating.     In the animation above, the mass crossed equilibrium exactly once on its way to rest. But is that guaranteed every time, or does it depend on the values of and ? Play around with the explorer below and see what you notice.    The overdamped solution with and fixed. Drag the sliders to change and and observe how many times the curve crosses .       Based on your exploration above, what are the possibilities for how many times the mass passes through the equilibrium position in an overdamped system?     Never or exactly once.   Correct! The mass passes through equilibrium at most once. Depending on the values of and , it may cross once or never cross at all.      Exactly once, always.   Not always. Try and in the explorer above. The curve never crosses .     Infinitely many times.   That is the underdamped case. In an overdamped system there is no oscillation, so the curve cannot cross equilibrium infinitely many times.     Exactly twice.   Try as many values of and as you like in the explorer. You will not find a case where the curve crosses twice.       The explorer suggests the mass crosses equilibrium at most once, no matter what and are. Let's confirm this by digging into the algebra.   At Most One Equilibrium Crossing   Show that the mass in an overdamped system passes through the equilibrium position at most one time.    We want to find all times where . Setting the general solution equal to zero: Since for all , we can divide both sides by : so Taking the natural log of both sides (when the right side is positive): This is at most one value of . It gives a valid crossing only when and the resulting . Otherwise the mass never crosses equilibrium at all.     So at most one crossing along the way, but where does the mass end up after all that?   Since both and , both exponential terms decay to zero: The mass always approaches equilibrium in the long run, crossing it at most once on the way there.     Key Takeaways     Solution form: Overdamped solutions have the form where are two distinct real roots.   No oscillation: The solution is a sum of two decaying exponentials with no trigonometric part, so there is no oscillation.   Equilibrium crossings: The mass passes through at most once. Depending on and , it may cross once or never.   Long-term behavior:  .       This video goes through the content of this page.     "
},
{
  "id": "sec-overdamped-2",
  "level": "2",
  "url": "sec-overdamped.html#sec-overdamped-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "overdamped "
},
{
  "id": "sec-overdamped-3",
  "level": "2",
  "url": "sec-overdamped.html#sec-overdamped-3",
  "type": "Justification",
  "number": "3.3.3.1",
  "title": "Why are both roots negative? (can skim).",
  "body": " Why are both roots negative? (can skim)  By the quadratic formula, the roots of are Since , the quantity under the square root is positive, but it is also smaller than , so . That means both and are negative numbers. Dividing by keeps them negative, so both and are negative.  "
},
{
  "id": "obs-overdamped-form",
  "level": "2",
  "url": "sec-overdamped.html#obs-overdamped-form",
  "type": "Observation",
  "number": "3.3.1",
  "title": "Overdamped Solution Form.",
  "body": " Overdamped Solution Form  When , the characteristic equation has two distinct real roots and , and the system is overdamped . Since , both roots are negative. The general solution takes the form: where and .  "
},
{
  "id": "fig-overdamped-spring",
  "level": "2",
  "url": "sec-overdamped.html#fig-overdamped-spring",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " An overdamped spring with , , , , so . Press Play and notice the mass crosses equilibrium once then decays back without oscillating.   "
},
{
  "id": "fig-overdamped-explore",
  "level": "2",
  "url": "sec-overdamped.html#fig-overdamped-explore",
  "type": "Figure",
  "number": "3.3.3",
  "title": "",
  "body": " The overdamped solution with and fixed. Drag the sliders to change and and observe how many times the curve crosses .   "
},
{
  "id": "ex-mc-overdamped-crossings",
  "level": "2",
  "url": "sec-overdamped.html#ex-mc-overdamped-crossings",
  "type": "Checkpoint",
  "number": "3.3.4",
  "title": "",
  "body": "  Based on your exploration above, what are the possibilities for how many times the mass passes through the equilibrium position in an overdamped system?     Never or exactly once.   Correct! The mass passes through equilibrium at most once. Depending on the values of and , it may cross once or never cross at all.      Exactly once, always.   Not always. Try and in the explorer above. The curve never crosses .     Infinitely many times.   That is the underdamped case. In an overdamped system there is no oscillation, so the curve cannot cross equilibrium infinitely many times.     Exactly twice.   Try as many values of and as you like in the explorer. You will not find a case where the curve crosses twice.     "
},
{
  "id": "ex-overdamped-crossings-algebra",
  "level": "2",
  "url": "sec-overdamped.html#ex-overdamped-crossings-algebra",
  "type": "Example",
  "number": "3.3.5",
  "title": "At Most One Equilibrium Crossing.",
  "body": " At Most One Equilibrium Crossing   Show that the mass in an overdamped system passes through the equilibrium position at most one time.    We want to find all times where . Setting the general solution equal to zero: Since for all , we can divide both sides by : so Taking the natural log of both sides (when the right side is positive): This is at most one value of . It gives a valid crossing only when and the resulting . Otherwise the mass never crosses equilibrium at all.   "
},
{
  "id": "obs-overdamped-limit",
  "level": "2",
  "url": "sec-overdamped.html#obs-overdamped-limit",
  "type": "Observation",
  "number": "3.3.6",
  "title": "",
  "body": " Since both and , both exponential terms decay to zero: The mass always approaches equilibrium in the long run, crossing it at most once on the way there.  "
},
{
  "id": "video-overdamped",
  "level": "2",
  "url": "sec-overdamped.html#video-overdamped",
  "type": "Figure",
  "number": "3.3.7",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-critically-damped",
  "level": "1",
  "url": "sec-critically-damped.html",
  "type": "Section",
  "number": "3.3.4",
  "title": "Behavior of Critically Damped Solutions",
  "body": " Behavior of Critically Damped Solutions   Finally, let's look at the borderline case sitting right between the previous two. When , the characteristic equation has one repeated real root , and the system is called critically damped . The general solution takes the form: If this setup feels familiar, that's because it is, this page will closely mirror the overdamped page, just with a repeated root instead of two distinct ones.   Why is the root negative? (can skim)  The repeated root is . Since and , the numerator is negative and the denominator is positive, so .    Critically Damped Solution Form  When , the characteristic equation has one repeated real root , and the system is critically damped . The general solution takes the form: where .    Like the overdamped case in , there are no trig functions anywhere in sight, so there is no oscillation. The new feature here is the term, which we saw arise from the repeated root structure in .    A critically damped spring with , , , so . Press Play and notice the mass starts compressed, becomes more compressed before turning around, then slowly approaches equilibrium without ever crossing it.     In the animation above, the mass never crossed equilibrium. But just like the overdamped case, whether or not it crosses depends on and . Play around with the explorer below and see what you notice.    The critically damped solution with fixed. Drag the sliders to change and and observe how many times the curve crosses .       Based on your exploration above, what are the possibilities for how many times the mass passes through the equilibrium position in a critically damped system?     Never or exactly once.   Correct! Just like the overdamped case, the mass passes through equilibrium at most once.      Exactly once, always.   Not always. Try and in the explorer above. The curve never crosses .     Infinitely many times.   That is the underdamped case. Critically damped systems have no oscillation.     Exactly twice.   Try as many values of and as you like in the explorer. You will not find a case where the curve crosses twice.       The explorer suggests the mass crosses equilibrium at most once, no matter what and are. Let's confirm this by digging into the algebra, and figure out the long-term behavior along the way.   At Most One Equilibrium Crossing   Show that the mass in a critically damped system passes through the equilibrium position at most one time. What is the long-term behavior?    We want to find all where . Setting the general solution equal to zero: Since for all , we can divide both sides by : so This is at most one value of . It gives a valid crossing only when . Otherwise the mass never crosses equilibrium at all.  For the long-term behavior, since : where the exponential decay beats the linear growth by L'Hopital's rule.     So at most one crossing along the way, but where does the mass end up after all that?   Even though grows without bound, the exponential decay wins: The mass always approaches equilibrium in the long run.     Key Takeaways     Solution form: Critically damped solutions have the form where is the one repeated root.   No oscillation: Like the overdamped case, there is no trigonometric part and therefore no oscillation.   Equilibrium crossings: The mass passes through at most once, the same as the overdamped case.   Long-term behavior:  , since the exponential decay beats the linear growth in .   Similarity to overdamped: Critically damped and overdamped solutions behave qualitatively the same way: no oscillation, at most one equilibrium crossing, and . The difference is in the form of the solution and which value of produces each case.       This video goes through the content of this page.     "
},
{
  "id": "sec-critically-damped-2",
  "level": "2",
  "url": "sec-critically-damped.html#sec-critically-damped-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "critically damped "
},
{
  "id": "sec-critically-damped-3",
  "level": "2",
  "url": "sec-critically-damped.html#sec-critically-damped-3",
  "type": "Justification",
  "number": "3.3.4.1",
  "title": "Why is the root negative? (can skim).",
  "body": " Why is the root negative? (can skim)  The repeated root is . Since and , the numerator is negative and the denominator is positive, so .  "
},
{
  "id": "obs-critdamped-form",
  "level": "2",
  "url": "sec-critically-damped.html#obs-critdamped-form",
  "type": "Observation",
  "number": "3.3.1",
  "title": "Critically Damped Solution Form.",
  "body": " Critically Damped Solution Form  When , the characteristic equation has one repeated real root , and the system is critically damped . The general solution takes the form: where .  "
},
{
  "id": "fig-critdamped-spring",
  "level": "2",
  "url": "sec-critically-damped.html#fig-critdamped-spring",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " A critically damped spring with , , , so . Press Play and notice the mass starts compressed, becomes more compressed before turning around, then slowly approaches equilibrium without ever crossing it.   "
},
{
  "id": "fig-critdamped-explore",
  "level": "2",
  "url": "sec-critically-damped.html#fig-critdamped-explore",
  "type": "Figure",
  "number": "3.3.3",
  "title": "",
  "body": " The critically damped solution with fixed. Drag the sliders to change and and observe how many times the curve crosses .   "
},
{
  "id": "ex-mc-critdamped-crossings",
  "level": "2",
  "url": "sec-critically-damped.html#ex-mc-critdamped-crossings",
  "type": "Checkpoint",
  "number": "3.3.4",
  "title": "",
  "body": "  Based on your exploration above, what are the possibilities for how many times the mass passes through the equilibrium position in a critically damped system?     Never or exactly once.   Correct! Just like the overdamped case, the mass passes through equilibrium at most once.      Exactly once, always.   Not always. Try and in the explorer above. The curve never crosses .     Infinitely many times.   That is the underdamped case. Critically damped systems have no oscillation.     Exactly twice.   Try as many values of and as you like in the explorer. You will not find a case where the curve crosses twice.     "
},
{
  "id": "ex-critdamped-crossings-algebra",
  "level": "2",
  "url": "sec-critically-damped.html#ex-critdamped-crossings-algebra",
  "type": "Example",
  "number": "3.3.5",
  "title": "At Most One Equilibrium Crossing.",
  "body": " At Most One Equilibrium Crossing   Show that the mass in a critically damped system passes through the equilibrium position at most one time. What is the long-term behavior?    We want to find all where . Setting the general solution equal to zero: Since for all , we can divide both sides by : so This is at most one value of . It gives a valid crossing only when . Otherwise the mass never crosses equilibrium at all.  For the long-term behavior, since : where the exponential decay beats the linear growth by L'Hopital's rule.   "
},
{
  "id": "obs-critdamped-limit",
  "level": "2",
  "url": "sec-critically-damped.html#obs-critdamped-limit",
  "type": "Observation",
  "number": "3.3.6",
  "title": "",
  "body": " Even though grows without bound, the exponential decay wins: The mass always approaches equilibrium in the long run.  "
},
{
  "id": "video-critdamped",
  "level": "2",
  "url": "sec-critically-damped.html#video-critdamped",
  "type": "Figure",
  "number": "3.3.7",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-damping-summary",
  "level": "1",
  "url": "sec-damping-summary.html",
  "type": "Section",
  "number": "3.3.5",
  "title": "Damping cases and the constants c, m, k",
  "body": " Damping cases and the constants c, m, k   We've now seen all three damping cases, underdamped, overdamped, and critically damped, plus the undamped case from before. Now that we have done the hard work, we can summarize all of the behavior we discovered!    Summary of Behavior:  We solve this ODE by solving the roots of the characteristic equation: The behavior of solutions is determined entirely by the discriminant , which controls the type of roots of the characteristic equation.        Case  Discriminant and roots  Crossings of     Overdamped (larger )  (two distinct real roots)  At most once     Critically damped (borderline)  (one repeated real root)  At most once     Underdamped (smaller )  (complex roots with nonzero real part)  Infinitely many     Undamped ( )  (pure imaginary roots)  Infinitely many  DNE    In all damped cases ( ), the mass eventually approaches equilibrium: . In the undamped case ( ) the mass oscillates forever with constant amplitude.    As seen in the second column, you can determine what case we are in simply by knowing , , and . See if you can apply this to the next question!    A spring-mass-dashpot system has , , . Which damping case is this?     Underdamped   Correct! The discriminant is , so the characteristic equation has complex roots and the system is underdamped.      Overdamped   Overdamped requires . Here , so this is not overdamped.     Critically damped   Critically damped requires . Here .     Undamped   Undamped means . Here .       Now let's go the other direction: starting from the behavior of the system, can we narrow down which cases are possible?    The mass passes through the equilibrium position infinitely many times. Select all cases this could correspond to.     Underdamped   Correct! Underdamped solutions oscillate with decaying amplitude and cross infinitely many times.      Undamped   Correct! The undamped system oscillates with constant amplitude and also crosses infinitely many times.      Overdamped   Overdamped solutions pass through equilibrium at most once. They cannot cross infinitely many times.     Critically damped   Critically damped solutions also pass through equilibrium at most once.       Let's combine these ideas into a more involved example, where we have to work backward from the desired behavior to figure out which values of make it happen.   Identifying the Damping Case   Suppose that the position of a mass in a spring-mass-dashpot system is modeled by the ODE:      For what values of will the mass oscillate and pass through the equilibrium position infinitely many times?    Which damping cases cause the mass to pass through equilibrium infinitely many times? What conditions on correspond to those cases?    From the summary above, the mass passes through equilibrium infinitely many times when the system is underdamped or undamped. Here and , so the discriminant is .  Underdamped requires , i.e. , which gives . Undamped requires . Combining, the mass oscillates infinitely many times when       Suppose . Can you make the mass oscillate and pass through the equilibrium position infinitely many times by choosing a different value for ?    The damping case depends only on an inequality involving , , and . If these are fixed, does changing the initial conditions affect which case we are in?    No. The damping case is determined entirely by , which depends only on , , and . With , , we have , so the system is critically damped regardless of the initial conditions. A critically damped system passes through equilibrium at most once, so no choice of can produce infinitely many crossings.      The second part of that example hints at something worth pinning down more carefully: the type of roots alone doesn't always tell us a unique case. Let's see this in action with complex roots.    The characteristic equation of a spring-mass system has complex roots. Which case or cases could this correspond to?     Undamped or underdamped   Correct! Complex roots arise in two situations. When the roots are purely imaginary (zero real part) and the system is undamped. When and the roots have a nonzero negative real part and the system is underdamped. In both cases the roots are complex.      Underdamped only   Underdamped is one correct case, but not the only one. When the characteristic equation also has complex (purely imaginary) roots, giving the undamped case.     Overdamped   Overdamped corresponds to two distinct real roots, not complex roots.     Critically damped   Critically damped corresponds to one repeated real root, not complex roots.       Okay, so we now have a solid understanding of the different types of solutions. In the next section, we take this a step further and analyze the behavior of solutions in more detail!   Key Takeaways     The damping case tells us: how many times the mass crosses the equilibrium position and the long-term behavior .   The damping case is determined by the type of roots of the characteristic equation, which can be found by computing the discriminant .   Initial conditions do not change the case:  , , and alone determine whether the system is overdamped, critically damped, or underdamped.   Complex roots arise in two cases: purely imaginary roots ( , undamped) and complex roots with negative real part ( and , underdamped).       "
},
{
  "id": "ex-mc-identify-case",
  "level": "2",
  "url": "sec-damping-summary.html#ex-mc-identify-case",
  "type": "Checkpoint",
  "number": "3.3.1",
  "title": "",
  "body": "  A spring-mass-dashpot system has , , . Which damping case is this?     Underdamped   Correct! The discriminant is , so the characteristic equation has complex roots and the system is underdamped.      Overdamped   Overdamped requires . Here , so this is not overdamped.     Critically damped   Critically damped requires . Here .     Undamped   Undamped means . Here .     "
},
{
  "id": "ex-mc-infinitely-many-crossings",
  "level": "2",
  "url": "sec-damping-summary.html#ex-mc-infinitely-many-crossings",
  "type": "Checkpoint",
  "number": "3.3.2",
  "title": "",
  "body": "  The mass passes through the equilibrium position infinitely many times. Select all cases this could correspond to.     Underdamped   Correct! Underdamped solutions oscillate with decaying amplitude and cross infinitely many times.      Undamped   Correct! The undamped system oscillates with constant amplitude and also crosses infinitely many times.      Overdamped   Overdamped solutions pass through equilibrium at most once. They cannot cross infinitely many times.     Critically damped   Critically damped solutions also pass through equilibrium at most once.     "
},
{
  "id": "ex-damping-identify-c",
  "level": "2",
  "url": "sec-damping-summary.html#ex-damping-identify-c",
  "type": "Example",
  "number": "3.3.3",
  "title": "Identifying the Damping Case.",
  "body": " Identifying the Damping Case   Suppose that the position of a mass in a spring-mass-dashpot system is modeled by the ODE:      For what values of will the mass oscillate and pass through the equilibrium position infinitely many times?    Which damping cases cause the mass to pass through equilibrium infinitely many times? What conditions on correspond to those cases?    From the summary above, the mass passes through equilibrium infinitely many times when the system is underdamped or undamped. Here and , so the discriminant is .  Underdamped requires , i.e. , which gives . Undamped requires . Combining, the mass oscillates infinitely many times when       Suppose . Can you make the mass oscillate and pass through the equilibrium position infinitely many times by choosing a different value for ?    The damping case depends only on an inequality involving , , and . If these are fixed, does changing the initial conditions affect which case we are in?    No. The damping case is determined entirely by , which depends only on , , and . With , , we have , so the system is critically damped regardless of the initial conditions. A critically damped system passes through equilibrium at most once, so no choice of can produce infinitely many crossings.    "
},
{
  "id": "ex-mc-complex-roots-cases",
  "level": "2",
  "url": "sec-damping-summary.html#ex-mc-complex-roots-cases",
  "type": "Checkpoint",
  "number": "3.3.4",
  "title": "",
  "body": "  The characteristic equation of a spring-mass system has complex roots. Which case or cases could this correspond to?     Undamped or underdamped   Correct! Complex roots arise in two situations. When the roots are purely imaginary (zero real part) and the system is undamped. When and the roots have a nonzero negative real part and the system is underdamped. In both cases the roots are complex.      Underdamped only   Underdamped is one correct case, but not the only one. When the characteristic equation also has complex (purely imaginary) roots, giving the undamped case.     Overdamped   Overdamped corresponds to two distinct real roots, not complex roots.     Critically damped   Critically damped corresponds to one repeated real root, not complex roots.     "
},
{
  "id": "exercises-3-3",
  "level": "1",
  "url": "exercises-3-3.html",
  "type": "Exercises",
  "number": "3.3.6",
  "title": "Exercises for Section 3.3",
  "body": " Exercises for Section 3.3    Identifying the Damping Case   For each spring-mass-dashpot system below, compute the discriminant and identify the damping case (overdamped, critically damped, underdamped, or undamped).      , ,      . Critically damped.       , ,      . Underdamped.       , ,      . Overdamped.       Identifying the Damping Case from the Position Function   Each of the following is the position function of a mass-spring-dashpot system. Identify the damping case (undamped, underdamped, critically damped, or overdamped).          Undamped. The solution is a pure sinusoidal with no exponential decay factor.           Underdamped. The solution has the form with .           Critically damped. The solution has the form with one repeated exponential rate.           Overdamped. The solution is a sum of two distinct decaying exponentials with no trigonometric part.       From Behavior to Damping Case   For each description of a mass-spring-dashpot system's behavior, identify all damping cases that are consistent with it.     The mass passes through the equilibrium position infinitely many times, and .    Underdamped only.      The mass passes through the equilibrium position at most once, and .    Overdamped or critically damped.      The characteristic equation has complex roots. What can you conclude about ?    Not enough information. If (undamped), the limit does not exist. If (underdamped), then .       Finding Values of the Damping Constant   Consider the spring-mass-dashpot system where . Find all values of for which:     The mass passes through the equilibrium position infinitely many times.    Which damping cases produce infinitely many equilibrium crossings? Use the discriminant with and to find the corresponding values of .     .       .     .      The system is critically damped.     .       Underdamped Systems Cross Equilibrium Infinitely Many Times   For an underdamped system, show algebraically that the mass passes through the equilibrium position infinitely many times.    Start by setting , where . Use the fact that for all to simplify, then think about how many solutions the resulting trigonometric equation has.    Since , setting reduces to: which (assuming the system is in motion) gives This equation has infinitely many solutions, and infinitely many of them are nonnegative.     "
},
{
  "id": "ex-3-3-1",
  "level": "2",
  "url": "exercises-3-3.html#ex-3-3-1",
  "type": "Exercise",
  "number": "3.3.6.1",
  "title": "Identifying the Damping Case.",
  "body": " Identifying the Damping Case   For each spring-mass-dashpot system below, compute the discriminant and identify the damping case (overdamped, critically damped, underdamped, or undamped).      , ,      . Critically damped.       , ,      . Underdamped.       , ,      . Overdamped.    "
},
{
  "id": "ex-3-3-2",
  "level": "2",
  "url": "exercises-3-3.html#ex-3-3-2",
  "type": "Exercise",
  "number": "3.3.6.2",
  "title": "Identifying the Damping Case from the Position Function.",
  "body": " Identifying the Damping Case from the Position Function   Each of the following is the position function of a mass-spring-dashpot system. Identify the damping case (undamped, underdamped, critically damped, or overdamped).          Undamped. The solution is a pure sinusoidal with no exponential decay factor.           Underdamped. The solution has the form with .           Critically damped. The solution has the form with one repeated exponential rate.           Overdamped. The solution is a sum of two distinct decaying exponentials with no trigonometric part.    "
},
{
  "id": "ex-3-3-3",
  "level": "2",
  "url": "exercises-3-3.html#ex-3-3-3",
  "type": "Exercise",
  "number": "3.3.6.3",
  "title": "From Behavior to Damping Case.",
  "body": " From Behavior to Damping Case   For each description of a mass-spring-dashpot system's behavior, identify all damping cases that are consistent with it.     The mass passes through the equilibrium position infinitely many times, and .    Underdamped only.      The mass passes through the equilibrium position at most once, and .    Overdamped or critically damped.      The characteristic equation has complex roots. What can you conclude about ?    Not enough information. If (undamped), the limit does not exist. If (underdamped), then .    "
},
{
  "id": "ex-3-3-4",
  "level": "2",
  "url": "exercises-3-3.html#ex-3-3-4",
  "type": "Exercise",
  "number": "3.3.6.4",
  "title": "Finding Values of the Damping Constant.",
  "body": " Finding Values of the Damping Constant   Consider the spring-mass-dashpot system where . Find all values of for which:     The mass passes through the equilibrium position infinitely many times.    Which damping cases produce infinitely many equilibrium crossings? Use the discriminant with and to find the corresponding values of .     .       .     .      The system is critically damped.     .    "
},
{
  "id": "ex-3-3-5",
  "level": "2",
  "url": "exercises-3-3.html#ex-3-3-5",
  "type": "Exercise",
  "number": "3.3.6.5",
  "title": "Underdamped Systems Cross Equilibrium Infinitely Many Times.",
  "body": " Underdamped Systems Cross Equilibrium Infinitely Many Times   For an underdamped system, show algebraically that the mass passes through the equilibrium position infinitely many times.    Start by setting , where . Use the fact that for all to simplify, then think about how many solutions the resulting trigonometric equation has.    Since , setting reduces to: which (assuming the system is in motion) gives This equation has infinitely many solutions, and infinitely many of them are nonnegative.   "
},
{
  "id": "sec-underdamped-direction-changes",
  "level": "1",
  "url": "sec-underdamped-direction-changes.html",
  "type": "Section",
  "number": "3.4.1",
  "title": "Analyzing Underdamped Motion",
  "body": " Analyzing Underdamped Motion   Before we begin the main content of this page, let's review a couple of facts about trig equations that we'll need later on. We'll start with these prerequisites, and then come back to them when we work through .    Prerequisite: Solving      Solving . Taking arctan of both sides gives one solution, , but this is not the only one. Since has period , shifting any solution by gives another solution. The complete solution set is:    Why does this give all solutions?  Because has period , the equation is satisfied by exactly one value of in each interval of length . The function is the inverse of restricted to , so picks out the unique solution in that interval. Every other solution is obtained by adding an integer multiple of , covering all intervals.      Restricting to . Continuing from part 1 with , we have , and we want to know which values of give . There are two cases:  : valid solutions start at .  : valid solutions start at .     Why n = 0 or n = 1? (can skim)  The key fact is that always has the same sign as .   Case 1: . Then , so for all . Since negative would give , the valid solutions start at :    Case 2: . Then , so gives a negative value of (not valid). But since , adding one full period gives . Valid solutions:         Okay now let's turn to the underdamped case, where the mass oscillates with decaying amplitude.   Summary: Underdamped Case of        Case  Discriminant and roots  Crossings of     Underdamped (smaller )  (complex roots with nonzero real part)  Infinitely many       To make things concrete, let's fix a specific underdamped system and work with it for the rest of this page.  Consider the underdamped system with , , , , . Substituting these parameters gives the IVP: The solution to this IVP is:    Work: Solution to the IVP (can skim)  With , , the characteristic equation is . The discriminant is , confirming the system is underdamped. By the quadratic formula: So and , giving general solution: Applying : . Differentiating and applying : So .    Now let's think about what this solution actually looks like in motion, and in particular, when the mass changes direction.   When Does the Mass Change Direction?   Observe the Graph   The interactive below shows an underdamped spring alongside the graph of its position function. A point moves along the curve as you drag the slider, with a tangent line showing the slope at each moment.   Note: to make the direction changes clearly visible, we use a slower decay rate here ( instead of ). The qualitative behavior is the same.   Drag the slider to move along the curve. Watch the slope of the tangent line and the spring position. What happens to the slope at a peak or trough?       Connect to Calculus   Based on your observations above, which equation corresponds exactly to the mass changing direction?       Correct! Direction changes occur exactly at critical points of , where . Note that for underdamped systems, every critical point is a direction change (no saddle points), since the solution oscillates.         means the mass is at the equilibrium position, not that it is changing direction. The mass can pass through equilibrium while still moving.        corresponds to inflection points of , not direction changes.       This equation has no direct physical meaning in this context.       Find All Direction Changes   Now find all times at which the mass changes direction. Recall .     Step 1. Compute using the product rule.   Step 2. Solve . Since , you can factor it out and solve what remains.    Since at every direction change, we compute and solve.   Step 1: Compute  Using the product rule:    So . Now we set this equal to zero and solve.   Step 2: Solve  Since , we need: By part 1 of with , every solution has the form: By part 2 of , since , the valid solutions with start at .   So starting at ensures every value of is nonnegative, and the mass changes direction at:        Direction Changes in the Mass-Spring System  In the mass-spring system, direction changes always correspond to critical points of , i.e., times when .  While in general a function can have critical points that are saddle points (not direction changes), this does not happen in the mass-spring system. When the velocity slows down to zero, the physics of the spring forces the mass to turn in the opposite direction: the spring cannot stretch, slow to zero velocity, and then continue stretching. So every critical point is a genuine direction change.     Key Takeaways     Direction changes correspond to critical points: the mass changes direction exactly when .   Solving : after computing and dividing out , we arrive at for some constant , giving . To get : if , start at ; if , start at .       This video goes through the content of this page.     "
},
{
  "id": "remark-arctan-review",
  "level": "2",
  "url": "sec-underdamped-direction-changes.html#remark-arctan-review",
  "type": "Remark",
  "number": "3.4.1",
  "title": "Prerequisite: Solving <span class=\"process-math\">\\(\\tan(\\theta) = A\\)<\/span>.",
  "body": " Prerequisite: Solving      Solving . Taking arctan of both sides gives one solution, , but this is not the only one. Since has period , shifting any solution by gives another solution. The complete solution set is:    Why does this give all solutions?  Because has period , the equation is satisfied by exactly one value of in each interval of length . The function is the inverse of restricted to , so picks out the unique solution in that interval. Every other solution is obtained by adding an integer multiple of , covering all intervals.      Restricting to . Continuing from part 1 with , we have , and we want to know which values of give . There are two cases:  : valid solutions start at .  : valid solutions start at .     Why n = 0 or n = 1? (can skim)  The key fact is that always has the same sign as .   Case 1: . Then , so for all . Since negative would give , the valid solutions start at :    Case 2: . Then , so gives a negative value of (not valid). But since , adding one full period gives . Valid solutions:       "
},
{
  "id": "exploration-direction-changes",
  "level": "2",
  "url": "sec-underdamped-direction-changes.html#exploration-direction-changes",
  "type": "Exploration",
  "number": "3.4.1",
  "title": "When Does the Mass Change Direction?",
  "body": " When Does the Mass Change Direction?   Observe the Graph   The interactive below shows an underdamped spring alongside the graph of its position function. A point moves along the curve as you drag the slider, with a tangent line showing the slope at each moment.   Note: to make the direction changes clearly visible, we use a slower decay rate here ( instead of ). The qualitative behavior is the same.   Drag the slider to move along the curve. Watch the slope of the tangent line and the spring position. What happens to the slope at a peak or trough?       Connect to Calculus   Based on your observations above, which equation corresponds exactly to the mass changing direction?       Correct! Direction changes occur exactly at critical points of , where . Note that for underdamped systems, every critical point is a direction change (no saddle points), since the solution oscillates.         means the mass is at the equilibrium position, not that it is changing direction. The mass can pass through equilibrium while still moving.        corresponds to inflection points of , not direction changes.       This equation has no direct physical meaning in this context.       Find All Direction Changes   Now find all times at which the mass changes direction. Recall .     Step 1. Compute using the product rule.   Step 2. Solve . Since , you can factor it out and solve what remains.    Since at every direction change, we compute and solve.   Step 1: Compute  Using the product rule:    So . Now we set this equal to zero and solve.   Step 2: Solve  Since , we need: By part 1 of with , every solution has the form: By part 2 of , since , the valid solutions with start at .   So starting at ensures every value of is nonnegative, and the mass changes direction at:     "
},
{
  "id": "obs-direction-changes",
  "level": "2",
  "url": "sec-underdamped-direction-changes.html#obs-direction-changes",
  "type": "Observation",
  "number": "3.4.3",
  "title": "Direction Changes in the Mass-Spring System.",
  "body": " Direction Changes in the Mass-Spring System  In the mass-spring system, direction changes always correspond to critical points of , i.e., times when .  While in general a function can have critical points that are saddle points (not direction changes), this does not happen in the mass-spring system. When the velocity slows down to zero, the physics of the spring forces the mass to turn in the opposite direction: the spring cannot stretch, slow to zero velocity, and then continue stretching. So every critical point is a genuine direction change.  "
},
{
  "id": "video-underdamped-direction",
  "level": "2",
  "url": "sec-underdamped-direction-changes.html#video-underdamped-direction",
  "type": "Figure",
  "number": "3.4.4",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-overdamped-analysis",
  "level": "1",
  "url": "sec-overdamped-analysis.html",
  "type": "Section",
  "number": "3.4.2",
  "title": "Analyzing Overdamped and Critically Damped Motion",
  "body": " Analyzing Overdamped and Critically Damped Motion   Overdamped and critically damped systems share the same qualitative behavior: the mass returns to equilibrium without oscillating, passing through it at most once.   Summary: Overdamped and Critically Damped Cases of        Case  Discriminant and roots  Crossings of     Overdamped (larger )  (two distinct real roots)  At most once     Critically damped (borderline)  (one repeated real root)  At most once       For the rest of this page we analyze the position function We will use information about this function to build a complete picture of the motion.    Building a Picture of the Motion   Throughout this exploration, .     Which Damping Case?   Based on the form of , which damping case are we in?     Overdamped   Correct! The solution is a sum of two distinct decaying exponentials, with and . Two distinct real roots means , which is the overdamped case.      Critically damped   Not quite. A critically damped solution has the form , with one exponential and one multiplied by . Here we have two different exponential rates, so the roots are distinct, not repeated.     Underdamped   Not quite. An underdamped solution has the form , which involves oscillating trig terms. This solution has no trig functions, so it decays without oscillating.        Does the Mass Pass Through Equilibrium?   Will the mass ever pass through the equilibrium position ?    Set and solve for . Remember that only is physically meaningful.     Full solution  We solve . Since , divide both sides by : Since , this is not a valid time. The mass never passes through equilibrium for .       Initial Position and Velocity   Compute and . What do these tell you about where the mass starts and which direction it initially moves?    Recall: means stretched, means compressed. means moving in the positive direction (toward equilibrium when compressed), means moving in the negative direction.     Work   Initial position:  Since , the mass starts compressed .   Initial velocity: Differentiating, so . The mass is initially moving in the positive direction , that is, toward the equilibrium position.  Together: the mass starts compressed at , moves toward equilibrium, but (from Task 2) never reaches it. So the mass stays compressed for all .       Sketch the Graph   From Task 3 we observed that and , so:  : the mass starts compressed , and  : it is initially moving in the positive direction .  Using this, together with the fact that the mass never crosses equilibrium (Task 2), determine which graph below matches .   Three candidate graphs for . The dashed green line marks the equilibrium . The red dot marks the starting position at .       Graph (a)   Graph (a) does start compressed, which is correct. However, it then moves further from equilibrium before turning around, meaning initially. But we found , so the mass is moving toward equilibrium from the very start, not away from it.     Graph (b)   Correct! Graph (b) starts below zero (compressed), moves in the positive direction toward equilibrium, and never crosses , exactly matching what we found in Tasks 2 and 3.      Graph (c)   Graph (c) shows oscillations, which is the behavior of an underdamped system. But has two distinct real exponential terms with no trig functions, so it is overdamped and does not oscillate.        The key idea here was using the following information:  the sign of (does it start compressed, stretched, or at equilibrium?),  the sign of (is it initially moving left or right?), and  whether the mass ever crosses the equilibrium position.  These three pieces of information will always allow you to give a sketch of the graph, as we did in part (c).  Now that we have a clear picture of the motion, let's use what we found to answer some more specific questions about the spring's behavior.   Analyzing   Suppose the position function of a mass in a spring-mass-dashpot system is     Will the mass pass through the equilibrium position?  When is the spring most stretched, if at all?  When is the spring most compressed, if at all?      Will the mass pass through equilibrium?   This was solved in of the exploration.    From : the only solution to occurs at , which is not a valid time. The mass never passes through equilibrium .     When is the spring most stretched?   What can you deduce from the sketch of the graph in the exploration? Think about what the initial conditions and the equilibrium crossing result together tell you about whether the spring is ever stretched.    From the exploration: the mass starts compressed ( ) and never crosses the equilibrium position. Therefore for all , so the spring is never stretched . This is confirmed by the graph below, which stays entirely below .   The graph of stays below zero for all . The spring is never stretched.       When is the spring most compressed?   What can you deduce from the sketch of the graph that used knowledge of and ? Think about the direction of motion from the very start.    From the exploration: and , so the mass starts compressed and is already moving toward equilibrium at . Since it never crosses equilibrium, it moves closer to zero for all . Therefore is the most negative value, and the spring is most compressed at . The graph confirms this: the curve starts at its lowest point and increases from there.   The spring is most compressed at , where is the minimum. The mass moves toward equilibrium for all .         Key Takeaways  To sketch the graph of and answer questions about the motion, we should begin by finding:   The sign of : does the mass start compressed, stretched, or at equilibrium?   The sign of : which direction does the mass initially move?   Whether the mass ever crosses equilibrium: for overdamped and critically damped systems, this happens at most once.  These three pieces of information are enough to sketch the graph of , and from that sketch we can answer qualitative questions about the behavior of the system.     This video goes through the content of this page.     "
},
{
  "id": "exploration-overdamped-analysis",
  "level": "2",
  "url": "sec-overdamped-analysis.html#exploration-overdamped-analysis",
  "type": "Exploration",
  "number": "3.4.1",
  "title": "Building a Picture of the Motion.",
  "body": " Building a Picture of the Motion   Throughout this exploration, .     Which Damping Case?   Based on the form of , which damping case are we in?     Overdamped   Correct! The solution is a sum of two distinct decaying exponentials, with and . Two distinct real roots means , which is the overdamped case.      Critically damped   Not quite. A critically damped solution has the form , with one exponential and one multiplied by . Here we have two different exponential rates, so the roots are distinct, not repeated.     Underdamped   Not quite. An underdamped solution has the form , which involves oscillating trig terms. This solution has no trig functions, so it decays without oscillating.        Does the Mass Pass Through Equilibrium?   Will the mass ever pass through the equilibrium position ?    Set and solve for . Remember that only is physically meaningful.     Full solution  We solve . Since , divide both sides by : Since , this is not a valid time. The mass never passes through equilibrium for .       Initial Position and Velocity   Compute and . What do these tell you about where the mass starts and which direction it initially moves?    Recall: means stretched, means compressed. means moving in the positive direction (toward equilibrium when compressed), means moving in the negative direction.     Work   Initial position:  Since , the mass starts compressed .   Initial velocity: Differentiating, so . The mass is initially moving in the positive direction , that is, toward the equilibrium position.  Together: the mass starts compressed at , moves toward equilibrium, but (from Task 2) never reaches it. So the mass stays compressed for all .       Sketch the Graph   From Task 3 we observed that and , so:  : the mass starts compressed , and  : it is initially moving in the positive direction .  Using this, together with the fact that the mass never crosses equilibrium (Task 2), determine which graph below matches .   Three candidate graphs for . The dashed green line marks the equilibrium . The red dot marks the starting position at .       Graph (a)   Graph (a) does start compressed, which is correct. However, it then moves further from equilibrium before turning around, meaning initially. But we found , so the mass is moving toward equilibrium from the very start, not away from it.     Graph (b)   Correct! Graph (b) starts below zero (compressed), moves in the positive direction toward equilibrium, and never crosses , exactly matching what we found in Tasks 2 and 3.      Graph (c)   Graph (c) shows oscillations, which is the behavior of an underdamped system. But has two distinct real exponential terms with no trig functions, so it is overdamped and does not oscillate.      "
},
{
  "id": "ex-overdamped-analysis",
  "level": "2",
  "url": "sec-overdamped-analysis.html#ex-overdamped-analysis",
  "type": "Example",
  "number": "3.4.2",
  "title": "Analyzing <span class=\"process-math\">\\(x(t) = 4e^{-2t} - 10e^{-t}\\)<\/span>.",
  "body": " Analyzing   Suppose the position function of a mass in a spring-mass-dashpot system is     Will the mass pass through the equilibrium position?  When is the spring most stretched, if at all?  When is the spring most compressed, if at all?      Will the mass pass through equilibrium?   This was solved in of the exploration.    From : the only solution to occurs at , which is not a valid time. The mass never passes through equilibrium .     When is the spring most stretched?   What can you deduce from the sketch of the graph in the exploration? Think about what the initial conditions and the equilibrium crossing result together tell you about whether the spring is ever stretched.    From the exploration: the mass starts compressed ( ) and never crosses the equilibrium position. Therefore for all , so the spring is never stretched . This is confirmed by the graph below, which stays entirely below .   The graph of stays below zero for all . The spring is never stretched.       When is the spring most compressed?   What can you deduce from the sketch of the graph that used knowledge of and ? Think about the direction of motion from the very start.    From the exploration: and , so the mass starts compressed and is already moving toward equilibrium at . Since it never crosses equilibrium, it moves closer to zero for all . Therefore is the most negative value, and the spring is most compressed at . The graph confirms this: the curve starts at its lowest point and increases from there.   The spring is most compressed at , where is the minimum. The mass moves toward equilibrium for all .      "
},
{
  "id": "video-overdamped-analysis",
  "level": "2",
  "url": "sec-overdamped-analysis.html#video-overdamped-analysis",
  "type": "Figure",
  "number": "3.4.5",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec3-overdamped-never-stretched",
  "level": "1",
  "url": "sec3-overdamped-never-stretched.html",
  "type": "Section",
  "number": "3.4.3",
  "title": "Analyzing an Overdamped System: Is the Spring Ever Stretched?",
  "body": " Analyzing an Overdamped System: Is the Spring Ever Stretched?   In we used the sign of , the sign of , and whether the mass crosses equilibrium to build a complete picture of the motion. In this section, we put that same approach to work on a new question: for the system below, is the spring ever stretched ? We'll work through an activity to build up the picture, then come back to this question at the end.   We continue analyzing overdamped and critically damped systems. Recall the shared behavior of these two cases.   Summary: Overdamped and Critically Damped Cases of        Case  Discriminant and roots  Crossings of     Overdamped (larger )  (two distinct real roots)  At most once     Critically damped (borderline)  (one repeated real root)  At most once       Consider the spring-mass-dashpot system with , , , set in motion at with and . Substituting these parameters gives the IVP: The solution to this IVP is:    Work: Solution to the IVP (can skim)  With , , the characteristic equation is , which factors as . This gives two distinct real roots and , confirming the system is overdamped. The general solution is: Applying : Differentiating: Applying : So , , and .    With that question in mind, let's work through the following activity to map out the behavior of the system.    Building a Picture of the Motion   Throughout this activity, .     Which Damping Case?   Based on the form of , which damping case are we in?     Overdamped   Correct! The solution is a sum of two distinct decaying exponentials with roots and . Two distinct real roots means , which is the overdamped case.      Critically damped   Not quite. A critically damped solution has the form , with a repeated exponential rate. Here we have two different rates, so the roots are distinct, not repeated.     Underdamped   Not quite. An underdamped solution involves oscillating trig terms. This solution has no trig functions, so it decays without oscillating.        Does the Mass Cross the Equilibrium for ?   Does the mass ever cross the equilibrium position for ?    Set and determine whether there are any solutions with . Since we already know is one solution. We want to know if there are any others.    We solve . Factoring out (which is never zero): The only solution is . The mass never crosses the equilibrium for . Note that the mass does slowly approach zero as , but it never actually reaches or crosses it again.      Which Way Does the Mass Immediately Move?   We are given and . The mass starts exactly at the equilibrium position. Based on the initial velocity, does the spring immediately become compressed or stretched?     Compressed, because means the mass immediately moves in the negative direction.   Correct! Since , the mass moves in the negative direction right away, meaning for small , which is the compressed side.      Stretched, because the mass starts at equilibrium and must move somewhere.   The initial velocity tells us which direction the mass moves. Since , it moves in the negative (compressed) direction, not the positive (stretched) direction.     We cannot tell from the initial conditions alone.   We can tell. The sign of tells us the direction of motion immediately after . Since , the mass moves in the negative (compressed) direction.        Now that we have worked through the activity, we have determined the following:  The system is overdamped : no oscillations, the mass decays smoothly toward zero.  The mass starts at equilibrium ( ) and immediately becomes compressed ( ).  The mass never crosses the equilibrium for .  Using these three facts, match the graph of below.   Three candidate graphs for . The dashed green line marks the equilibrium . The red dot marks the starting position at .     Match the Graph   Which graph matches ?     Graph (a)   Graph (a) does start at zero and immediately becomes compressed, which is correct. However, it then crosses the equilibrium line and becomes stretched. We showed in the activity that the mass never crosses the equilibrium for , so this cannot be correct.     Graph (b)   Correct! Graph (b) starts at zero, immediately becomes compressed, reaches a minimum, and then slowly approaches zero from below without ever crossing the equilibrium, exactly matching what we found in the activity.      Graph (c)   Graph (c) shows oscillations, which is the behavior of an underdamped system. Since has two distinct real exponential terms and no trig functions, the system is overdamped and does not oscillate.      Notice that in graph (b), the mass starts at zero, immediately becomes compressed, and then slowly approaches the equilibrium from below as . It gets closer and closer to zero but never actually crosses it again. Since the mass starts at , immediately moves into compressed territory, and never crosses the equilibrium, we can conclude the spring is never stretched for any .    This video goes through the content of this page.     "
},
{
  "id": "activity-overdamped-never-stretched",
  "level": "2",
  "url": "sec3-overdamped-never-stretched.html#activity-overdamped-never-stretched",
  "type": "Activity",
  "number": "3.4.1",
  "title": "Building a Picture of the Motion.",
  "body": " Building a Picture of the Motion   Throughout this activity, .     Which Damping Case?   Based on the form of , which damping case are we in?     Overdamped   Correct! The solution is a sum of two distinct decaying exponentials with roots and . Two distinct real roots means , which is the overdamped case.      Critically damped   Not quite. A critically damped solution has the form , with a repeated exponential rate. Here we have two different rates, so the roots are distinct, not repeated.     Underdamped   Not quite. An underdamped solution involves oscillating trig terms. This solution has no trig functions, so it decays without oscillating.        Does the Mass Cross the Equilibrium for ?   Does the mass ever cross the equilibrium position for ?    Set and determine whether there are any solutions with . Since we already know is one solution. We want to know if there are any others.    We solve . Factoring out (which is never zero): The only solution is . The mass never crosses the equilibrium for . Note that the mass does slowly approach zero as , but it never actually reaches or crosses it again.      Which Way Does the Mass Immediately Move?   We are given and . The mass starts exactly at the equilibrium position. Based on the initial velocity, does the spring immediately become compressed or stretched?     Compressed, because means the mass immediately moves in the negative direction.   Correct! Since , the mass moves in the negative direction right away, meaning for small , which is the compressed side.      Stretched, because the mass starts at equilibrium and must move somewhere.   The initial velocity tells us which direction the mass moves. Since , it moves in the negative (compressed) direction, not the positive (stretched) direction.     We cannot tell from the initial conditions alone.   We can tell. The sign of tells us the direction of motion immediately after . Since , the mass moves in the negative (compressed) direction.      "
},
{
  "id": "fig-overdamped-never-stretched-matching",
  "level": "2",
  "url": "sec3-overdamped-never-stretched.html#fig-overdamped-never-stretched-matching",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": " Three candidate graphs for . The dashed green line marks the equilibrium . The red dot marks the starting position at .   "
},
{
  "id": "video-overdamped-never-stretched",
  "level": "2",
  "url": "sec3-overdamped-never-stretched.html#video-overdamped-never-stretched",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-critically-damped-analysis",
  "level": "1",
  "url": "sec-critically-damped-analysis.html",
  "type": "Section",
  "number": "3.4.4",
  "title": "Analyzing a Critically Damped System",
  "body": " Analyzing a Critically Damped System   We continue analyzing overdamped and critically damped systems. Recall the shared behavior of these two cases.   Summary: Overdamped and Critically Damped Cases of        Case  Discriminant and roots  Crossings of     Overdamped (larger )  (two distinct real roots)  At most once     Critically damped (borderline)  (one repeated real root)  At most once       Consider the spring-mass-dashpot system with , , , set in motion at with and . Substituting these parameters gives the IVP: The solution to this IVP is:    Work: Solution to the IVP (can skim)  With , , the characteristic equation is , which factors as . This gives one repeated root , confirming the system is critically damped. The general solution is: Applying : . Differentiating: Applying : So .     Sketching the Graph from Initial Conditions   We continue analyzing the same position function from above, using the same method as in to build a picture of the motion.    Does the Mass Pass Through Equilibrium?   Does the mass ever pass through the equilibrium position for ?    Set and solve for . Since , focus on the other factor. Remember that only is physically meaningful.    We solve . Since , we need , giving . Since this is not a valid time, the mass never passes through equilibrium for .     What Do the Initial Conditions Tell Us?   What do the initial conditions and tell us about the behavior of the mass?    We were given and in the problem setup. Are they positive or negative? Recall that means stretched and means compressed, while the sign of tells us the direction of motion.    Since , the mass starts stretched . Since , the mass is initially moving in the positive direction, meaning it is becoming even more stretched at first. Together with the result of the previous task, the mass starts stretched, moves further from equilibrium, and then approaches zero from above without ever crossing it.     Putting It Together   Combining the two observations above: the mass starts stretched, initially moves further from equilibrium, never crosses , and eventually approaches zero from above. This gives the following graph.   Graph of . The mass starts at (stretched), increases further, then decays toward zero without ever crossing the equilibrium.         Analyzing the Behavior   We continue with the same position function, Now that we have a complete picture of the motion, we use it to answer questions about the system. Make sure to reference the previous example to help answer the following questions.      Is the Spring Ever Compressed?   Explain how you can tell the spring is never compressed.       and the mass never crosses the equilibrium position, so for all .    Correct! Since (starts stretched) and the mass never reaches , it stays on the stretched side for all time.        , so the mass is moving away from the compressed region.    The sign of tells us the initial direction of motion, but alone it does not guarantee the spring is never compressed. The key facts are that and the mass never crosses equilibrium.      The system is critically damped, so it cannot become compressed.    The damping case alone does not determine whether the spring is compressed. A critically damped system can start compressed and remain so. What matters here is the combination of initial conditions and the equilibrium crossing result.        Find the Time of Maximum Stretch   Find the exact time at which the mass is farthest from the equilibrium position.    The maximum stretch occurs either at:  , or  a critical point where .  Looking back at the graph from the previous example, can you deduce which one it is?    Since , the mass is still moving away from equilibrium at , so the maximum stretch does not occur at . It must occur at a critical point where , so we compute and solve.   Step 1: Compute  Using the product rule on :    So . Now we set this equal to zero and solve.   Step 2: Solve  We need to solve: Since , we need: So the maximum stretch occurs at , where .   The graph below shows the maximum stretch marked at .   The maximum stretch occurs at , where . After this point the mass moves back toward equilibrium.         Key Takeaways     Finding the farthest point from equilibrium: this always happens either at or at a critical point where .   How to tell which one: you can determine this from a sketch of the graph. In particular, check the sign of : if the mass is moving toward equilibrium at , then is already the farthest point. But if the mass is moving away from equilibrium, as in this example ( on the stretched side), then it gets even farther before turning around, so the farthest point occurs at a later critical point, which we find by solving .   Note for underdamped systems: the same logic applies, but since underdamped solutions oscillate, there are infinitely many critical points, one at each direction change. The farthest point from equilibrium is still either or the first critical point, but the mass continues changing direction forever after that.       This video goes through the content of this page.     "
},
{
  "id": "ex-critically-damped-sketch",
  "level": "2",
  "url": "sec-critically-damped-analysis.html#ex-critically-damped-sketch",
  "type": "Example",
  "number": "3.4.1",
  "title": "Sketching the Graph from Initial Conditions.",
  "body": " Sketching the Graph from Initial Conditions   We continue analyzing the same position function from above, using the same method as in to build a picture of the motion.    Does the Mass Pass Through Equilibrium?   Does the mass ever pass through the equilibrium position for ?    Set and solve for . Since , focus on the other factor. Remember that only is physically meaningful.    We solve . Since , we need , giving . Since this is not a valid time, the mass never passes through equilibrium for .     What Do the Initial Conditions Tell Us?   What do the initial conditions and tell us about the behavior of the mass?    We were given and in the problem setup. Are they positive or negative? Recall that means stretched and means compressed, while the sign of tells us the direction of motion.    Since , the mass starts stretched . Since , the mass is initially moving in the positive direction, meaning it is becoming even more stretched at first. Together with the result of the previous task, the mass starts stretched, moves further from equilibrium, and then approaches zero from above without ever crossing it.     Putting It Together   Combining the two observations above: the mass starts stretched, initially moves further from equilibrium, never crosses , and eventually approaches zero from above. This gives the following graph.   Graph of . The mass starts at (stretched), increases further, then decays toward zero without ever crossing the equilibrium.      "
},
{
  "id": "activity-critically-damped-questions",
  "level": "2",
  "url": "sec-critically-damped-analysis.html#activity-critically-damped-questions",
  "type": "Activity",
  "number": "3.4.1",
  "title": "Analyzing the Behavior.",
  "body": " Analyzing the Behavior   We continue with the same position function, Now that we have a complete picture of the motion, we use it to answer questions about the system. Make sure to reference the previous example to help answer the following questions.      Is the Spring Ever Compressed?   Explain how you can tell the spring is never compressed.       and the mass never crosses the equilibrium position, so for all .    Correct! Since (starts stretched) and the mass never reaches , it stays on the stretched side for all time.        , so the mass is moving away from the compressed region.    The sign of tells us the initial direction of motion, but alone it does not guarantee the spring is never compressed. The key facts are that and the mass never crosses equilibrium.      The system is critically damped, so it cannot become compressed.    The damping case alone does not determine whether the spring is compressed. A critically damped system can start compressed and remain so. What matters here is the combination of initial conditions and the equilibrium crossing result.        Find the Time of Maximum Stretch   Find the exact time at which the mass is farthest from the equilibrium position.    The maximum stretch occurs either at:  , or  a critical point where .  Looking back at the graph from the previous example, can you deduce which one it is?    Since , the mass is still moving away from equilibrium at , so the maximum stretch does not occur at . It must occur at a critical point where , so we compute and solve.   Step 1: Compute  Using the product rule on :    So . Now we set this equal to zero and solve.   Step 2: Solve  We need to solve: Since , we need: So the maximum stretch occurs at , where .   The graph below shows the maximum stretch marked at .   The maximum stretch occurs at , where . After this point the mass moves back toward equilibrium.      "
},
{
  "id": "video-critically-damped-analysis",
  "level": "2",
  "url": "sec-critically-damped-analysis.html#video-critically-damped-analysis",
  "type": "Figure",
  "number": "3.4.4",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec3-critically-damped-crossing",
  "level": "1",
  "url": "sec3-critically-damped-crossing.html",
  "type": "Section",
  "number": "3.4.5",
  "title": "Analyzing a Critically Damped System: Finding Maximum Stretch",
  "body": " Analyzing a Critically Damped System: Finding Maximum Stretch   We now work through a harder example of the same type from . This time the mass starts compressed but does cross the equilibrium, so we need to track down both the crossing time and the later critical point to find the maximum stretch.   Consider the spring-mass-dashpot system with position function As usual, means the spring is stretched and means it is compressed.    Finding the Time of Maximum Stretch   For , find the time at which the spring is maximally stretched, or explain why the spring is never stretched.    Work through the following steps:  Find and . Does the mass start compressed or stretched?  Solve for . Does the mass ever become stretched by crossing the equilibrium?  Since the mass starts compressed but does become stretched, the maximum stretch cannot occur at . Where must it occur?  Solve to find the exact time.       Step 1: The mass starts compressed .   Work for Step 1  We compute and : so the mass starts compressed. Differentiating using the product rule: so . The mass starts compressed and is initially moving in the positive direction, toward the equilibrium.    Step 2: The mass crosses the equilibrium at , so it does eventually become stretched.   Work for Step 2  We solve : Since , we need , giving . Since , this is a valid crossing time. The mass crosses the equilibrium exactly once, at .    Step 3: The maximum stretch occurs at a critical point where .   Reasoning for Step 3  The maximum stretch occurs either at or at a critical point where . Since the mass starts compressed ( ), the maximum stretch cannot occur at . The mass crosses the equilibrium at and becomes stretched, so the maximum stretch must occur at some . Since is differentiable, any local maximum must occur at a critical point where .    Step 4: The maximum stretch occurs at .   Work for Step 4  We solve . From Step 1 we have . Since : So the maximum stretch occurs at , where       Notice that we have determined the following about the motion:  The mass starts compressed (since ).  The mass crosses the equilibrium at (the only solution to for ).  Maximum stretch occurs at (the only critical point where ).  After , the mass never crosses the equilibrium again, but .     Before looking at the checkpoint below, try sketching the graph yourself using the four facts above. No graph is provided here on purpose, since sketching it yourself is the best way to check your understanding.     Behavior After Crossing Equilibrium   Based on the graph and the work above, which best describes what the mass does after crossing the equilibrium at ?      The mass becomes more and more stretched until it reaches maximum stretch at , then gradually becomes less stretched as it slowly approaches the equilibrium, never crossing it again.    Correct! After crossing at the mass is on the stretched side. It continues stretching until the critical point at , then slowly decays back toward the equilibrium. Since and the mass never crosses equilibrium again, it approaches but never reaches it again.       The mass immediately starts returning to equilibrium after crossing, reaching it again shortly after .    Not quite. After crossing at , the mass continues moving in the positive direction (it is still stretching) until the critical point at . It does not immediately turn around.      The mass oscillates above and below the equilibrium multiple times before settling at zero.    This is the behavior of an underdamped system. Since is critically damped, it crosses the equilibrium at most once and does not oscillate.        Key Takeaways     The four-step approach: find and , check for equilibrium crossings, determine where the maximum occurs (at or a critical point), then solve if needed. A sketch ties all four steps together.       This video goes through the content of this page.     "
},
{
  "id": "ex-critically-damped-crossing",
  "level": "2",
  "url": "sec3-critically-damped-crossing.html#ex-critically-damped-crossing",
  "type": "Example",
  "number": "3.4.1",
  "title": "Finding the Time of Maximum Stretch.",
  "body": " Finding the Time of Maximum Stretch   For , find the time at which the spring is maximally stretched, or explain why the spring is never stretched.    Work through the following steps:  Find and . Does the mass start compressed or stretched?  Solve for . Does the mass ever become stretched by crossing the equilibrium?  Since the mass starts compressed but does become stretched, the maximum stretch cannot occur at . Where must it occur?  Solve to find the exact time.       Step 1: The mass starts compressed .   Work for Step 1  We compute and : so the mass starts compressed. Differentiating using the product rule: so . The mass starts compressed and is initially moving in the positive direction, toward the equilibrium.    Step 2: The mass crosses the equilibrium at , so it does eventually become stretched.   Work for Step 2  We solve : Since , we need , giving . Since , this is a valid crossing time. The mass crosses the equilibrium exactly once, at .    Step 3: The maximum stretch occurs at a critical point where .   Reasoning for Step 3  The maximum stretch occurs either at or at a critical point where . Since the mass starts compressed ( ), the maximum stretch cannot occur at . The mass crosses the equilibrium at and becomes stretched, so the maximum stretch must occur at some . Since is differentiable, any local maximum must occur at a critical point where .    Step 4: The maximum stretch occurs at .   Work for Step 4  We solve . From Step 1 we have . Since : So the maximum stretch occurs at , where     "
},
{
  "id": "video-critically-damped-crossing",
  "level": "2",
  "url": "sec3-critically-damped-crossing.html#video-critically-damped-crossing",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "exercises-3-4",
  "level": "1",
  "url": "exercises-3-4.html",
  "type": "Exercises",
  "number": "3.4.6",
  "title": "Exercises for Section 3.4",
  "body": " Exercises for Section 3.4  In everything below: when the spring is stretched; when it is compressed; and is the equilibrium position. Each problem has a lot of overlap with techniques from the subsections, so make sure to reference similar examples when stuck! There are some hints available, but think about it on your own before looking at them.    Analyzing an Underdamped System   A mass-spring-dashpot system has , , , with initial conditions and . I will do the first part for you and provide you with the specific solution to this IVP:      Does the mass start stretched or compressed? Which direction does it initially move?    The values and were already given in the problem statement above.    The mass starts compressed and initially moves toward equilibrium.      Give a rough sketch of based on part (a) and what you know about the general behavior of underdamped solutions.    The sketch should show: starts at (compressed), moves toward equilibrium, crosses infinitely many times with oscillations of decaying amplitude, approaching in the long run.      Find all times at which the mass changes direction.           When is the mass most stretched? When is it most compressed?    Direction changes occur at critical points of . For an underdamped system, critical points alternate between local maxima (most stretched at that moment) and local minima (most compressed at that moment). Because the amplitude is always decaying, the overall most stretched position occurs at the first local maximum, and the overall most compressed position occurs at the first local minimum. Use your graph from (b) to determine which comes first (local max or local min), then use your answer from part (c): the first two values of correspond to the two answers.    Most compressed at . Most stretched at (the first critical point, ).      In a sentence or two, describe what happens to the amplitude of the oscillations over time.    The amplitude decays to zero: each successive peak is smaller than the last, and .       Analyzing an Overdamped System   The position function of a mass-spring-dashpot system is      Compute and . What do these tell you about where the mass starts and which direction it initially moves?     : starts compressed . : initially moves toward equilibrium.      Does the mass ever pass through the equilibrium position ? Justify mathematically.    Solve and think carefully about the signs of each term.     No. Both terms of are always negative, so has no solution.      Give a rough sketch of based on your answers in (a) and (b).    The sketch should show: starts at (compressed), moves toward equilibrium, never crosses , and approaches zero from below as .      Is the spring ever stretched? Explain.    Look at your graph from (c). Consider what you know about and whether the mass ever crosses equilibrium.     No. Since and the mass never crosses equilibrium, for all .      Describe the full motion of the mass from to infinity in words.    The mass starts compressed at , moves toward equilibrium, never crosses, and slowly approaches from below.       Analyzing an Overdamped System: Finding Maximum Stretch and Compression   A mass-spring-dashpot system has , , , with initial conditions and .     Find the position function .           Does the mass ever pass through equilibrium ? Justify mathematically.     Yes , at .      Give a rough sketch of .    The sketch should show: starts at (compressed), moves toward equilibrium, crosses at , reaches a maximum on the stretched side, then slowly approaches zero from above.      Find the time of maximum stretch and maximum compression, or determine that the spring is never stretched or never compressed.    First use your graph and the equilibrium crossing from (b) to determine whether the spring is ever stretched and\/or ever compressed. Then recall that maxima and minima occur either at or at a critical point where . Use your graph to determine which case applies for each.    Most compressed at . Most stretched at .      What does the mass do after crossing the equilibrium position? Describe in words.    Recall the long-term behavior of overdamped solutions. How does this connect to what happens after the crossing? Also consider: which side of equilibrium is the mass on after it crosses?    After crossing, the mass is on the stretched side. It reaches maximum stretch at , then stays on the stretched side and slowly approaches from above. It never crosses equilibrium again.       Analyzing a Critically Damped System   A mass-spring-dashpot system has , , , with initial conditions and .     Find the position function .           When is the spring most compressed? Is the spring ever stretched? Describe the full motion of the mass after the point of maximum compression.    Work through the following steps:  Use and to determine where the mass starts and which direction it initially moves.  Solve to check whether the mass ever crosses equilibrium .  Use these facts to draw a rough sketch of .  From the sketch, you can determine whether the spring is ever stretched or compressed. Then decide: does the maximum compression occur at or at a critical point where ?      The only solution to is , so the mass never crosses equilibrium and is never stretched. Most compressed at . After that, the mass moves back toward equilibrium, staying on the compressed side and approaching from below.       Analyzing a Critically Damped System: Finding Maximum Stretch   The position function of a mass-spring-dashpot system is      Find and , determine whether the mass crosses the equilibrium position , and use this information to give a rough sketch of .    Follow the same steps as in the previous questions: (1) find and and interpret them, (2) solve to check for equilibrium crossings, (3) use these facts to sketch the graph.     (compressed), (toward equilibrium), crosses equilibrium at . Sketch: starts at , crosses at , reaches a maximum on the stretched side, then approaches zero from above.      At what time is the mass farthest from equilibrium, and what is the position at that time?    The farthest point from equilibrium occurs either at or at a critical point where . Use your sketch from part (a) to determine which case applies, then solve to find . Finally, plug back into to find the actual position.     , and .      Describe the motion of the mass after it reaches maximum stretch.    The mass stays on the stretched side, never crossing equilibrium again, and slowly approaches from above.      "
},
{
  "id": "ex-3-4-1",
  "level": "2",
  "url": "exercises-3-4.html#ex-3-4-1",
  "type": "Exercise",
  "number": "3.4.6.1",
  "title": "Analyzing an Underdamped System.",
  "body": " Analyzing an Underdamped System   A mass-spring-dashpot system has , , , with initial conditions and . I will do the first part for you and provide you with the specific solution to this IVP:      Does the mass start stretched or compressed? Which direction does it initially move?    The values and were already given in the problem statement above.    The mass starts compressed and initially moves toward equilibrium.      Give a rough sketch of based on part (a) and what you know about the general behavior of underdamped solutions.    The sketch should show: starts at (compressed), moves toward equilibrium, crosses infinitely many times with oscillations of decaying amplitude, approaching in the long run.      Find all times at which the mass changes direction.           When is the mass most stretched? When is it most compressed?    Direction changes occur at critical points of . For an underdamped system, critical points alternate between local maxima (most stretched at that moment) and local minima (most compressed at that moment). Because the amplitude is always decaying, the overall most stretched position occurs at the first local maximum, and the overall most compressed position occurs at the first local minimum. Use your graph from (b) to determine which comes first (local max or local min), then use your answer from part (c): the first two values of correspond to the two answers.    Most compressed at . Most stretched at (the first critical point, ).      In a sentence or two, describe what happens to the amplitude of the oscillations over time.    The amplitude decays to zero: each successive peak is smaller than the last, and .    "
},
{
  "id": "ex-3-4-2",
  "level": "2",
  "url": "exercises-3-4.html#ex-3-4-2",
  "type": "Exercise",
  "number": "3.4.6.2",
  "title": "Analyzing an Overdamped System.",
  "body": " Analyzing an Overdamped System   The position function of a mass-spring-dashpot system is      Compute and . What do these tell you about where the mass starts and which direction it initially moves?     : starts compressed . : initially moves toward equilibrium.      Does the mass ever pass through the equilibrium position ? Justify mathematically.    Solve and think carefully about the signs of each term.     No. Both terms of are always negative, so has no solution.      Give a rough sketch of based on your answers in (a) and (b).    The sketch should show: starts at (compressed), moves toward equilibrium, never crosses , and approaches zero from below as .      Is the spring ever stretched? Explain.    Look at your graph from (c). Consider what you know about and whether the mass ever crosses equilibrium.     No. Since and the mass never crosses equilibrium, for all .      Describe the full motion of the mass from to infinity in words.    The mass starts compressed at , moves toward equilibrium, never crosses, and slowly approaches from below.    "
},
{
  "id": "ex-3-4-3",
  "level": "2",
  "url": "exercises-3-4.html#ex-3-4-3",
  "type": "Exercise",
  "number": "3.4.6.3",
  "title": "Analyzing an Overdamped System: Finding Maximum Stretch and Compression.",
  "body": " Analyzing an Overdamped System: Finding Maximum Stretch and Compression   A mass-spring-dashpot system has , , , with initial conditions and .     Find the position function .           Does the mass ever pass through equilibrium ? Justify mathematically.     Yes , at .      Give a rough sketch of .    The sketch should show: starts at (compressed), moves toward equilibrium, crosses at , reaches a maximum on the stretched side, then slowly approaches zero from above.      Find the time of maximum stretch and maximum compression, or determine that the spring is never stretched or never compressed.    First use your graph and the equilibrium crossing from (b) to determine whether the spring is ever stretched and\/or ever compressed. Then recall that maxima and minima occur either at or at a critical point where . Use your graph to determine which case applies for each.    Most compressed at . Most stretched at .      What does the mass do after crossing the equilibrium position? Describe in words.    Recall the long-term behavior of overdamped solutions. How does this connect to what happens after the crossing? Also consider: which side of equilibrium is the mass on after it crosses?    After crossing, the mass is on the stretched side. It reaches maximum stretch at , then stays on the stretched side and slowly approaches from above. It never crosses equilibrium again.    "
},
{
  "id": "ex-3-4-4",
  "level": "2",
  "url": "exercises-3-4.html#ex-3-4-4",
  "type": "Exercise",
  "number": "3.4.6.4",
  "title": "Analyzing a Critically Damped System.",
  "body": " Analyzing a Critically Damped System   A mass-spring-dashpot system has , , , with initial conditions and .     Find the position function .           When is the spring most compressed? Is the spring ever stretched? Describe the full motion of the mass after the point of maximum compression.    Work through the following steps:  Use and to determine where the mass starts and which direction it initially moves.  Solve to check whether the mass ever crosses equilibrium .  Use these facts to draw a rough sketch of .  From the sketch, you can determine whether the spring is ever stretched or compressed. Then decide: does the maximum compression occur at or at a critical point where ?      The only solution to is , so the mass never crosses equilibrium and is never stretched. Most compressed at . After that, the mass moves back toward equilibrium, staying on the compressed side and approaching from below.    "
},
{
  "id": "ex-3-4-5",
  "level": "2",
  "url": "exercises-3-4.html#ex-3-4-5",
  "type": "Exercise",
  "number": "3.4.6.5",
  "title": "Analyzing a Critically Damped System: Finding Maximum Stretch.",
  "body": " Analyzing a Critically Damped System: Finding Maximum Stretch   The position function of a mass-spring-dashpot system is      Find and , determine whether the mass crosses the equilibrium position , and use this information to give a rough sketch of .    Follow the same steps as in the previous questions: (1) find and and interpret them, (2) solve to check for equilibrium crossings, (3) use these facts to sketch the graph.     (compressed), (toward equilibrium), crosses equilibrium at . Sketch: starts at , crosses at , reaches a maximum on the stretched side, then approaches zero from above.      At what time is the mass farthest from equilibrium, and what is the position at that time?    The farthest point from equilibrium occurs either at or at a critical point where . Use your sketch from part (a) to determine which case applies, then solve to find . Finally, plug back into to find the actual position.     , and .      Describe the motion of the mass after it reaches maximum stretch.    The mass stays on the stretched side, never crossing equilibrium again, and slowly approaches from above.    "
},
{
  "id": "sec-undetermined-part-1",
  "level": "1",
  "url": "sec-undetermined-part-1.html",
  "type": "Section",
  "number": "3.5.1",
  "title": "A First Look at Non-Homogeneous Equations",
  "body": " A First Look at Non-Homogeneous Equations   So far we have only solved 2nd order, constant-coefficient DEs where the right-hand side is zero: These are called homogeneous equations. Now we turn to the non-homogeneous case, where the right-hand side is a nonzero function of :   Solving this in full generality is hard. But for certain simple, well-behaved choices of , we can make progress with a clever strategy (which we will call the method of undetermined coefficients ). On this page we focus on functions of the form and we will discover the method by working through examples, so treat this as an exploration for now. Over the next few pages, we will have fully laid out the strategy!    Example 1: Finding a Particular Solution   We want to find a particular solution  to That means: a single specific function that makes this equation true.     What should we guess for ?   We need . The right-hand side is , so we need a function whose second derivative is also a multiple of . Which of the following is the most natural guess? (Don't worry, we haven't learned a rule for this yet. Take your best guess!)       Yes! Since , differentiating twice brings back a cosine, which is exactly what we need on the left to match on the right. We just have to find the right value of .        An exponential would give , so the left side becomes , with no cosines anywhere. We can't match this way.       A linear function gives , so the left side is just , a polynomial and not a cosine. This won't work.       Close in spirit! A sine would give , so the left side is . That's a sine, but the right-hand side is a cosine, so they can't be equal for any value of .        Plugging in and solving for   Now we plug the guess into and solve for . Computing derivatives: Substituting: Every term has a factor of , so we divide through by it: A particular solution is:       So for the ODE , we took the guess . Plugging it in gave us the equation , and solving gave , so the particular solution is .  We now try a similar example, but this time the ODE includes a term. Let's see what happens when we try the same type of guess.    Example 2: When the Same Guess Doesn't Work   Now try the same strategy on a different equation: Guess and see what happens.     Plugging in   With , compute and , substitute into , and simplify as much as you can. What do you get?    You'll get both and terms on the left side. Collect them separately.    With : Substituting: Collecting like terms: Rearranging:       Why we're stuck   We need to hold for every value of . But a sine and a cosine can never be equal for all unless both sides are zero. No matter what value we pick for , the left side is a sine and the right side is a cosine, and there is no way to make them match. Our guess has failed!      What went wrong?   After substituting we ended up with a term stuck on the left side that couldn't be cancelled. Why did this happen? (this is exploratory, so take your best shot!)      The term in the ODE. Differentiating gives , and that sine got multiplied by the coefficient of , leaving a sine term with no way to cancel it.    Exactly! In Example 1, there was no term, so differentiating produced a that immediately disappeared again. Here the term keeps that sine alive, and our guess has no sine to absorb it.      The ODE has a term with a negative coefficient ( ).   The sign on doesn't cause the problem. Even with a positive coefficient, differentiating would still produce a via the term.     The right-hand side is instead of a higher frequency like .   The frequency of the right-hand side doesn't cause the trouble here. The issue appears regardless of whether we have or on the right.     We should have included a coefficient on the guess, like .   The extra factor of 2 doesn't help — it's still just a constant times , and the term will still produce an uncancelled .        So the guess failed because the term introduced a that had nowhere to go. We need a guess with enough flexibility to absorb both sine and cosine terms. Before moving on: can you think of how to modify the guess to fix this? We will work through this on the next page!    Key Takeaways     The method: To find a particular solution to a non-homogeneous equation, we can guess the form of , plug it in, and solve for the unknown constants. Because the constants are initially unknown, this approach is called the method of undetermined coefficients .   The guess matters: As seen in Example 2, guessing alone won't always work. Differentiating a cosine produces a sine, and if the ODE has a term, that sine has nowhere to go. On the next page we'll see what guess does always work for sinusoidal right-hand sides.       This video goes through the content of this page.     "
},
{
  "id": "sec-undetermined-part-1-2",
  "level": "2",
  "url": "sec-undetermined-part-1.html#sec-undetermined-part-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "homogeneous non-homogeneous "
},
{
  "id": "exploration-undetermined-first-example",
  "level": "2",
  "url": "sec-undetermined-part-1.html#exploration-undetermined-first-example",
  "type": "Exploration",
  "number": "3.5.1",
  "title": "Example 1: Finding a Particular Solution.",
  "body": " Example 1: Finding a Particular Solution   We want to find a particular solution  to That means: a single specific function that makes this equation true.     What should we guess for ?   We need . The right-hand side is , so we need a function whose second derivative is also a multiple of . Which of the following is the most natural guess? (Don't worry, we haven't learned a rule for this yet. Take your best guess!)       Yes! Since , differentiating twice brings back a cosine, which is exactly what we need on the left to match on the right. We just have to find the right value of .        An exponential would give , so the left side becomes , with no cosines anywhere. We can't match this way.       A linear function gives , so the left side is just , a polynomial and not a cosine. This won't work.       Close in spirit! A sine would give , so the left side is . That's a sine, but the right-hand side is a cosine, so they can't be equal for any value of .        Plugging in and solving for   Now we plug the guess into and solve for . Computing derivatives: Substituting: Every term has a factor of , so we divide through by it: A particular solution is:     "
},
{
  "id": "exploration-undetermined-guess-fails",
  "level": "2",
  "url": "sec-undetermined-part-1.html#exploration-undetermined-guess-fails",
  "type": "Exploration",
  "number": "3.5.2",
  "title": "Example 2: When the Same Guess Doesn’t Work.",
  "body": " Example 2: When the Same Guess Doesn't Work   Now try the same strategy on a different equation: Guess and see what happens.     Plugging in   With , compute and , substitute into , and simplify as much as you can. What do you get?    You'll get both and terms on the left side. Collect them separately.    With : Substituting: Collecting like terms: Rearranging:       Why we're stuck   We need to hold for every value of . But a sine and a cosine can never be equal for all unless both sides are zero. No matter what value we pick for , the left side is a sine and the right side is a cosine, and there is no way to make them match. Our guess has failed!      What went wrong?   After substituting we ended up with a term stuck on the left side that couldn't be cancelled. Why did this happen? (this is exploratory, so take your best shot!)      The term in the ODE. Differentiating gives , and that sine got multiplied by the coefficient of , leaving a sine term with no way to cancel it.    Exactly! In Example 1, there was no term, so differentiating produced a that immediately disappeared again. Here the term keeps that sine alive, and our guess has no sine to absorb it.      The ODE has a term with a negative coefficient ( ).   The sign on doesn't cause the problem. Even with a positive coefficient, differentiating would still produce a via the term.     The right-hand side is instead of a higher frequency like .   The frequency of the right-hand side doesn't cause the trouble here. The issue appears regardless of whether we have or on the right.     We should have included a coefficient on the guess, like .   The extra factor of 2 doesn't help — it's still just a constant times , and the term will still produce an uncancelled .      "
},
{
  "id": "sec-undetermined-part-1-9-2",
  "level": "2",
  "url": "sec-undetermined-part-1.html#sec-undetermined-part-1-9-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method of undetermined coefficients "
},
{
  "id": "video-undetermined-part-1",
  "level": "2",
  "url": "sec-undetermined-part-1.html#video-undetermined-part-1",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-undetermined-part-2",
  "level": "1",
  "url": "sec-undetermined-part-2.html",
  "type": "Section",
  "number": "3.5.2",
  "title": "The Guess That Works",
  "body": " The Guess That Works   We continue with the example from . Recall we were trying to find a particular solution to We tried the guess , but it failed: the term introduced a that had nowhere to cancel. We need a guess flexible enough to absorb both sine and cosine terms.    Finding a Particular Solution with    Choosing the guess   Our last guess failed because differentiating it produced a term we couldn't cancel. What modification to the guess might give us the flexibility to handle that? (Give it a shot, we will see in the next part why the right answer works!)       Good instinct! In the next part we will see that including both and in the guess gives us enough room to cancel the sine term that appears when we differentiate.       A polynomial term like would introduce powers of that have no match on the right-hand side. We need something that stays in the world of sines and cosines.       An exponential factor would survive differentiation and produce terms with that can't match the right-hand side.       This would produce polynomial-times-trig terms after differentiation, which is more complicated than we need here. A simpler modification works.        Plugging in and solving for and (can skim\/reference if needed)   Use the guess . Its derivatives are:    Substitute into and solve for and to find .    Substituting: Collecting the sine and cosine terms separately: Since and are independent, their coefficients must match on both sides, giving the system:   Solving for and  From the first equation: . Substituting into the second: Then .  So and , giving the particular solution:       The guess worked here, and it will work in most cases. However, there is one special situation where this guess fails: when the guess itself looks like part of the homogeneous solution. We call this the case of duplication , and we will need a different guess there. That case is coming up on the next page.    A Useful Strategy for Most Non-Homogeneous Equations  To find a particular solution to guess substitute into the ODE, match coefficients of and on both sides, and solve for and . This works in most cases (see note above about duplication).    One thing to be careful about: the in the guess comes directly from the right-hand side of the ODE. For example, in whatever frequency appears in the non-homogeneous term is the same frequency you use in your guess .     Which of the following is the correct form of the guess for finding a particular solution to        Correct! The right-hand side has frequency , so the guess uses and .        Close in form, but the frequency is wrong. The right-hand side has , so the guess should use frequency , not .       This was our first instinct on the previous page, and it ran into trouble when the term introduced a sine. We need both and in the guess.       The frequency doesn't match the right-hand side. The here comes from the coefficient of in the ODE, not from . Always look at the right-hand side for .       Key Takeaways     The strategy: To find a particular solution to , guess , plug in, match coefficients of sine and cosine separately, and solve for and .   Coming up: On the next page we will see the case of duplication, where the guess fails and a different approach is needed.       This video goes through the content of this page.     "
},
{
  "id": "example-undetermined-AB-guess",
  "level": "2",
  "url": "sec-undetermined-part-2.html#example-undetermined-AB-guess",
  "type": "Example",
  "number": "3.5.1",
  "title": "Finding a Particular Solution with <span class=\"process-math\">\\(y_p = A\\cos(t) + B\\sin(t)\\)<\/span>.",
  "body": " Finding a Particular Solution with    Choosing the guess   Our last guess failed because differentiating it produced a term we couldn't cancel. What modification to the guess might give us the flexibility to handle that? (Give it a shot, we will see in the next part why the right answer works!)       Good instinct! In the next part we will see that including both and in the guess gives us enough room to cancel the sine term that appears when we differentiate.       A polynomial term like would introduce powers of that have no match on the right-hand side. We need something that stays in the world of sines and cosines.       An exponential factor would survive differentiation and produce terms with that can't match the right-hand side.       This would produce polynomial-times-trig terms after differentiation, which is more complicated than we need here. A simpler modification works.        Plugging in and solving for and (can skim\/reference if needed)   Use the guess . Its derivatives are:    Substitute into and solve for and to find .    Substituting: Collecting the sine and cosine terms separately: Since and are independent, their coefficients must match on both sides, giving the system:   Solving for and  From the first equation: . Substituting into the second: Then .  So and , giving the particular solution:     "
},
{
  "id": "sec-undetermined-part-2-4",
  "level": "2",
  "url": "sec-undetermined-part-2.html#sec-undetermined-part-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "case of duplication "
},
{
  "id": "obs-undetermined-strategy",
  "level": "2",
  "url": "sec-undetermined-part-2.html#obs-undetermined-strategy",
  "type": "Observation",
  "number": "3.5.2",
  "title": "A Useful Strategy for Most Non-Homogeneous Equations.",
  "body": " A Useful Strategy for Most Non-Homogeneous Equations  To find a particular solution to guess substitute into the ODE, match coefficients of and on both sides, and solve for and . This works in most cases (see note above about duplication).  "
},
{
  "id": "ex-mc-undet-guess",
  "level": "2",
  "url": "sec-undetermined-part-2.html#ex-mc-undet-guess",
  "type": "Checkpoint",
  "number": "3.5.3",
  "title": "",
  "body": "  Which of the following is the correct form of the guess for finding a particular solution to        Correct! The right-hand side has frequency , so the guess uses and .        Close in form, but the frequency is wrong. The right-hand side has , so the guess should use frequency , not .       This was our first instinct on the previous page, and it ran into trouble when the term introduced a sine. We need both and in the guess.       The frequency doesn't match the right-hand side. The here comes from the coefficient of in the ODE, not from . Always look at the right-hand side for .     "
},
{
  "id": "video-undetermined-part-2",
  "level": "2",
  "url": "sec-undetermined-part-2.html#video-undetermined-part-2",
  "type": "Figure",
  "number": "3.5.4",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-undetermined-duplication",
  "level": "1",
  "url": "sec-undetermined-duplication.html",
  "type": "Section",
  "number": "3.5.3",
  "title": "The Case of Duplication",
  "body": " The Case of Duplication    When the Usual Guess Breaks Down   Let's try to find a particular solution to We will follow the strategy from and see what happens.     The typical guess   Based on the strategy from the previous page, the right-hand side is , so and the typical guess is: Its derivatives are: Let's plug this in and see what happens.      Plugging in   Substituting into : Expanding the right bracket and collecting: Everything cancels: This is never true. No values of and can make this work.      What went wrong?   The left side collapsed to no matter what and are. Why did this happen? (This is exploratory, so take your best shot!)      The guess is itself a solution to the corresponding homogeneous equation , so when we substitute it in, the left side always simplifies to .    Exactly! Since solves , plugging it into always gives , never . The guess is \"invisible\" to the left-hand side operator.      We made an error computing .   The derivatives are correct: differentiating twice gives . The cancellation is real, not a mistake.     The equation has no particular solution.   The equation does have a particular solution. The problem is with our guess, not the equation itself.     We should have used in the guess since the coefficient of is .   The in the guess always comes from the right-hand side, not from the coefficients of the ODE. Here , so is correct.        The guess failed because already solves the homogeneous equation . This is the case of duplication : the guess we would normally use is a solution to the corresponding homogeneous ODE, so substituting it in always gives on the left, making it impossible to match the right-hand side.    We are in the case of duplication when, in the ODE the typical guess already solves the corresponding homogeneous equation . What would the ODE need to look like for this to happen?       Correct! Since , we get , and similarly for , so solves .        The homogeneous version has characteristic roots , giving exponential solutions and , not sines and cosines.       Close in form, but the coefficient of needs to be , not . Since , we need the coefficient of to be exactly for the cancellation to happen.       If there is a term, differentiating produces a sine or cosine that does not cancel, so the guess does not solve the homogeneous equation. Duplication only occurs when .      Note that the coefficient of does not need to be 1. If the ODE is , dividing through by gives , which is still the case of duplication.  To handle the case of duplication, we need a modified guess whose left-hand side does not collapse to zero. It turns out that multiplying the usual guess by does the trick: the factor disrupts the cancellation so that simplifies to a combination of and terms rather than .    Case of Duplication   Suppose the homogeneous equation has general solution containing . Then the guess will always give on the left-hand side of This occurs specifically when the ODE can be written in the form: In this case, use the modified guess:      The reason this works: when we differentiate using the product rule, we get two types of terms: terms with a factor of , and terms without. When we substitute into the ODE, the terms with cancel out (since solves the homogeneous equation). What remains are the terms without : plain and terms that we can match to the right-hand side.   Why does multiplying by fix things? (can skim)  We work with our specific example and . Differentiating with the product rule: Now substitute into : The terms cancel: What remains are the terms without : This is a genuine combination of and that we can match to on the right-hand side to solve for and .     Key Takeaways     Case of duplication: If the usual guess is already a solution to the corresponding homogeneous equation, substituting it in gives on the left, so it can never work as a particular solution.   When does it happen: The case of duplication occurs when the ODE has the form , since and are solutions to the corresponding homogeneous ODE in this case.   The fix: Multiply the usual guess by , giving . On the next page we will use this modified guess to actually solve an example in this case.       This video goes through the content of this page.     "
},
{
  "id": "exploration-duplication",
  "level": "2",
  "url": "sec-undetermined-duplication.html#exploration-duplication",
  "type": "Exploration",
  "number": "3.5.1",
  "title": "When the Usual Guess Breaks Down.",
  "body": " When the Usual Guess Breaks Down   Let's try to find a particular solution to We will follow the strategy from and see what happens.     The typical guess   Based on the strategy from the previous page, the right-hand side is , so and the typical guess is: Its derivatives are: Let's plug this in and see what happens.      Plugging in   Substituting into : Expanding the right bracket and collecting: Everything cancels: This is never true. No values of and can make this work.      What went wrong?   The left side collapsed to no matter what and are. Why did this happen? (This is exploratory, so take your best shot!)      The guess is itself a solution to the corresponding homogeneous equation , so when we substitute it in, the left side always simplifies to .    Exactly! Since solves , plugging it into always gives , never . The guess is \"invisible\" to the left-hand side operator.      We made an error computing .   The derivatives are correct: differentiating twice gives . The cancellation is real, not a mistake.     The equation has no particular solution.   The equation does have a particular solution. The problem is with our guess, not the equation itself.     We should have used in the guess since the coefficient of is .   The in the guess always comes from the right-hand side, not from the coefficients of the ODE. Here , so is correct.      "
},
{
  "id": "sec-undetermined-duplication-3",
  "level": "2",
  "url": "sec-undetermined-duplication.html#sec-undetermined-duplication-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "case of duplication "
},
{
  "id": "ex-mc-dup-recognize",
  "level": "2",
  "url": "sec-undetermined-duplication.html#ex-mc-dup-recognize",
  "type": "Checkpoint",
  "number": "3.5.1",
  "title": "",
  "body": "  We are in the case of duplication when, in the ODE the typical guess already solves the corresponding homogeneous equation . What would the ODE need to look like for this to happen?       Correct! Since , we get , and similarly for , so solves .        The homogeneous version has characteristic roots , giving exponential solutions and , not sines and cosines.       Close in form, but the coefficient of needs to be , not . Since , we need the coefficient of to be exactly for the cancellation to happen.       If there is a term, differentiating produces a sine or cosine that does not cancel, so the guess does not solve the homogeneous equation. Duplication only occurs when .     "
},
{
  "id": "thm-case-of-duplication",
  "level": "2",
  "url": "sec-undetermined-duplication.html#thm-case-of-duplication",
  "type": "Theorem",
  "number": "3.5.2",
  "title": "Case of Duplication.",
  "body": " Case of Duplication   Suppose the homogeneous equation has general solution containing . Then the guess will always give on the left-hand side of This occurs specifically when the ODE can be written in the form: In this case, use the modified guess:    "
},
{
  "id": "sec-undetermined-duplication-9",
  "level": "2",
  "url": "sec-undetermined-duplication.html#sec-undetermined-duplication-9",
  "type": "Justification",
  "number": "3.5.3.1",
  "title": "Why does multiplying by <span class=\"process-math\">\\(t\\)<\/span> fix things? (can skim).",
  "body": " Why does multiplying by fix things? (can skim)  We work with our specific example and . Differentiating with the product rule: Now substitute into : The terms cancel: What remains are the terms without : This is a genuine combination of and that we can match to on the right-hand side to solve for and .  "
},
{
  "id": "video-undetermined-duplication",
  "level": "2",
  "url": "sec-undetermined-duplication.html#video-undetermined-duplication",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-undetermined-dup-example",
  "level": "1",
  "url": "sec-undetermined-dup-example.html",
  "type": "Section",
  "number": "3.5.4",
  "title": "Example with the Case of Duplication",
  "body": " Example with the Case of Duplication   Recall from that when the ODE has the form the usual guess fails because it solves the homogeneous equation. In this case we use the modified guess Let's work through a full example.    Finding a Particular Solution in the Case of Duplication   Find a particular solution to      Recognizing the case of duplication   Notice that the coefficient of is , and the right-hand side has frequency . Since matches the coefficient of , we are in the case of duplication. What is the correct guess for ?       Correct! Since we are in the case of duplication, we multiply the usual guess by .        This is the usual guess, but we just established we are in the case of duplication. This guess solves , so substituting it in gives on the left, not .       The frequency in the guess should match the right-hand side, which has , not .       Multiplying by is enough to fix the duplication. We only need in more advanced cases not covered here.        Finding and   Use the guess . Substitute into and solve for and .    Using the product rule:     Plug these into and solve for and .    We have:       Computing via product rule  Differentiating with the product rule:   So: Now substituting into :  Substituting and cancelling the terms   The terms cancel:   After cancellation, our ODE becomes: Now we solve for and :  Solving for and  Matching coefficients in    So and , giving the particular solution:       Notice what happened with the terms when we substituted in. In this example, the terms with were from and from . These cancelled exactly because solves the homogeneous equation , which is precisely the definition of the case of duplication. This is not a coincidence: the terms will always cancel when we are in the case of duplication, for exactly this reason. So in practice, once you compute , you can immediately drop the terms and just work with what remains.    Key Takeaways     Recognizing duplication: Check whether matches the coefficient of in the ODE. If so, use the modified guess .   The terms always cancel: When substituting the modified guess into the ODE, the terms with a factor of will always cancel out. You are left with only plain and terms to match against the right-hand side.       This video goes through the content of this page.     "
},
{
  "id": "example-dup-full",
  "level": "2",
  "url": "sec-undetermined-dup-example.html#example-dup-full",
  "type": "Example",
  "number": "3.5.1",
  "title": "Finding a Particular Solution in the Case of Duplication.",
  "body": " Finding a Particular Solution in the Case of Duplication   Find a particular solution to      Recognizing the case of duplication   Notice that the coefficient of is , and the right-hand side has frequency . Since matches the coefficient of , we are in the case of duplication. What is the correct guess for ?       Correct! Since we are in the case of duplication, we multiply the usual guess by .        This is the usual guess, but we just established we are in the case of duplication. This guess solves , so substituting it in gives on the left, not .       The frequency in the guess should match the right-hand side, which has , not .       Multiplying by is enough to fix the duplication. We only need in more advanced cases not covered here.        Finding and   Use the guess . Substitute into and solve for and .    Using the product rule:     Plug these into and solve for and .    We have:       Computing via product rule  Differentiating with the product rule:   So: Now substituting into :  Substituting and cancelling the terms   The terms cancel:   After cancellation, our ODE becomes: Now we solve for and :  Solving for and  Matching coefficients in    So and , giving the particular solution:     "
},
{
  "id": "video-undetermined-dup-example",
  "level": "2",
  "url": "sec-undetermined-dup-example.html#video-undetermined-dup-example",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-undetermined-guess-practice",
  "level": "1",
  "url": "sec-undetermined-guess-practice.html",
  "type": "Section",
  "number": "3.5.5",
  "title": "Practice: Finding the Right Guess for <span class=\"process-math\">\\(y_p\\)<\/span>",
  "body": " Practice: Finding the Right Guess for   Before we put together a full general solution, let's make sure we're comfortable identifying the correct guess for . We have two cases to keep in mind, summarized below.   Choosing the Guess for  Given :     Normal case (from ): use the guess .   Case of duplication (from ): if the ODE can be written as (same on both sides, no term), use the modified guess .    The key step in identifying the case of duplication: write the ODE in standard form (divide through so the leading coefficient is ) and check whether the coefficient of equals .   The questions below give you practice at just this identification step; you don't need to solve for and , just state the correct form of the guess.    Identifying the Correct Guess    A standard example   What is the correct form of the guess for finding a particular solution to        Correct! Both terms on the right-hand side share frequency , so the guess uses and . The coefficient of is , so this is the normal case, no extra needed.        The minus sign on the right-hand side doesn't change the form of the guess. We always write and let the algebra determine the signs of and when we solve; one of them may turn out to be negative.       This is the case-of-duplication guess, but we're not in that case here. Duplication occurs only when the ODE has the form with the same on both sides. Here the coefficient of is , so we don't need the extra .       Since both terms on the right have the same frequency, we only need one pair of undetermined coefficients. The guess already has enough flexibility to match both the cosine and sine parts of the right-hand side simultaneously.        A case of duplication   What is the correct form of the guess for finding a particular solution to        Correct! Both terms on the right-hand side have frequency , and the coefficient of is . This is the case of duplication, so we multiply the usual guess by .        This is the usual guess, but it will fail here. The ODE has characteristic equation , giving roots , so the homogeneous solution is . Our guess is already a solution to the homogeneous equation, so plugging it in gives on the left, never matching the right-hand side.       Even setting aside the duplication issue, a cosine-only guess won't work for a right-hand side that includes . And since we're in the case of duplication, we need the -multiplied form as well.       We're in the case of duplication, so we do need the extra , but the full guess must include both and inside, not just the cosine.        Watch out for a negative coefficient   What is the correct form of the guess for finding a particular solution to        Correct! Even though and , the coefficient of is , not . The case of duplication requires the coefficient of to be , which means the homogeneous solutions are and . Here the characteristic equation is , giving real roots and homogeneous solution , with no trig at all! So the usual guess works fine, with both terms covered by a single pair .        It's tempting to see and the number and call this duplication, but the sign matters! The coefficient of is , not . The homogeneous equation has real exponential solutions and , not trig functions. The usual guess is not a homogeneous solution, so the extra is not needed.       These are the homogeneous solutions, not a form that can match on the right-hand side. The guess should mirror the form of .       The right-hand side has both a cosine and a sine term, so a cosine-only guess can't possibly match both. We always need when involves trig at frequency .        Remember to put the ODE in standard form first   What is the correct form of the guess for finding a particular solution to        Correct! The trick here is to put the ODE in standard form first by dividing through by : Now the coefficient of is , so we are in the case of duplication. The modified guess is .        This looks right at first glance, but don't forget to put the ODE in standard form first. Dividing by gives , and now , so this is the case of duplication. The usual guess will give on the left-hand side.       The frequency in the guess always comes from the right-hand side of the ODE. Both and on the right have frequency . The coefficient is from the left-hand side and doesn't set the frequency.        A subtle one   What is the correct form of the guess for finding a particular solution to        Correct! It's tempting to see the in and the on the right and call this duplication, but check carefully. The frequency is , so we need the coefficient of to equal for duplication. Here the coefficient is only , so this is the normal case.        This is the most natural wrong answer here! The in and the on the right look like they match, but duplication requires the coefficient of to equal , not . Since , we need the coefficient to be , not . The homogeneous equation has solutions and (frequency , not ), so the guess doesn't duplicate anything.       The frequency in the guess must match the right-hand side, which has frequency . The here comes from solving the homogeneous equation (whose solutions oscillate at frequency ), but that's not where the guess frequency comes from.       Neither the frequency nor the duplication call is right here. The guess frequency should match the right-hand side ( ), and since the coefficient of is , we're not in the case of duplication and don't need the extra .        Now that we can reliably identify the right guess, the next step is to use it to build the full general solution: not just a particular solution, but the complete picture including the complementary function.    There is no video associated with this page.    "
},
{
  "id": "activity-guess-practice",
  "level": "2",
  "url": "sec-undetermined-guess-practice.html#activity-guess-practice",
  "type": "Activity",
  "number": "3.5.1",
  "title": "Identifying the Correct Guess.",
  "body": " Identifying the Correct Guess    A standard example   What is the correct form of the guess for finding a particular solution to        Correct! Both terms on the right-hand side share frequency , so the guess uses and . The coefficient of is , so this is the normal case, no extra needed.        The minus sign on the right-hand side doesn't change the form of the guess. We always write and let the algebra determine the signs of and when we solve; one of them may turn out to be negative.       This is the case-of-duplication guess, but we're not in that case here. Duplication occurs only when the ODE has the form with the same on both sides. Here the coefficient of is , so we don't need the extra .       Since both terms on the right have the same frequency, we only need one pair of undetermined coefficients. The guess already has enough flexibility to match both the cosine and sine parts of the right-hand side simultaneously.        A case of duplication   What is the correct form of the guess for finding a particular solution to        Correct! Both terms on the right-hand side have frequency , and the coefficient of is . This is the case of duplication, so we multiply the usual guess by .        This is the usual guess, but it will fail here. The ODE has characteristic equation , giving roots , so the homogeneous solution is . Our guess is already a solution to the homogeneous equation, so plugging it in gives on the left, never matching the right-hand side.       Even setting aside the duplication issue, a cosine-only guess won't work for a right-hand side that includes . And since we're in the case of duplication, we need the -multiplied form as well.       We're in the case of duplication, so we do need the extra , but the full guess must include both and inside, not just the cosine.        Watch out for a negative coefficient   What is the correct form of the guess for finding a particular solution to        Correct! Even though and , the coefficient of is , not . The case of duplication requires the coefficient of to be , which means the homogeneous solutions are and . Here the characteristic equation is , giving real roots and homogeneous solution , with no trig at all! So the usual guess works fine, with both terms covered by a single pair .        It's tempting to see and the number and call this duplication, but the sign matters! The coefficient of is , not . The homogeneous equation has real exponential solutions and , not trig functions. The usual guess is not a homogeneous solution, so the extra is not needed.       These are the homogeneous solutions, not a form that can match on the right-hand side. The guess should mirror the form of .       The right-hand side has both a cosine and a sine term, so a cosine-only guess can't possibly match both. We always need when involves trig at frequency .        Remember to put the ODE in standard form first   What is the correct form of the guess for finding a particular solution to        Correct! The trick here is to put the ODE in standard form first by dividing through by : Now the coefficient of is , so we are in the case of duplication. The modified guess is .        This looks right at first glance, but don't forget to put the ODE in standard form first. Dividing by gives , and now , so this is the case of duplication. The usual guess will give on the left-hand side.       The frequency in the guess always comes from the right-hand side of the ODE. Both and on the right have frequency . The coefficient is from the left-hand side and doesn't set the frequency.        A subtle one   What is the correct form of the guess for finding a particular solution to        Correct! It's tempting to see the in and the on the right and call this duplication, but check carefully. The frequency is , so we need the coefficient of to equal for duplication. Here the coefficient is only , so this is the normal case.        This is the most natural wrong answer here! The in and the on the right look like they match, but duplication requires the coefficient of to equal , not . Since , we need the coefficient to be , not . The homogeneous equation has solutions and (frequency , not ), so the guess doesn't duplicate anything.       The frequency in the guess must match the right-hand side, which has frequency . The here comes from solving the homogeneous equation (whose solutions oscillate at frequency ), but that's not where the guess frequency comes from.       Neither the frequency nor the duplication call is right here. The guess frequency should match the right-hand side ( ), and since the coefficient of is , we're not in the case of duplication and don't need the extra .      "
},
{
  "id": "sec-undetermined-guess-practice-7",
  "level": "2",
  "url": "sec-undetermined-guess-practice.html#sec-undetermined-guess-practice-7",
  "type": "Remark",
  "number": "3.5.1",
  "title": "",
  "body": " There is no video associated with this page.  "
},
{
  "id": "sec-general-solution-nonhomogeneous",
  "level": "1",
  "url": "sec-general-solution-nonhomogeneous.html",
  "type": "Section",
  "number": "3.5.6",
  "title": "The General Solution",
  "body": " The General Solution    Finding the General Solution to a Non-Homogeneous Equation   Our goal is to find the general solution to the non-homogeneous equation To do this, it turns out we need two ingredients: a particular solution  to the non-homogeneous equation, and the complementary function  , which is the general solution to the associated homogeneous equation.  The point of this exploration is to see why the sum will always form a solution to the non-homogeneous ODE.   You can skim the computations for and , but pay close attention to parts (c) and (d)!      Find a particular solution   Use the method of undetermined coefficients to find a particular solution to    Answer:      Full computation (can skim)  The right-hand side has frequency , and the coefficient of is , so this is the normal case. We guess Computing derivatives: Substituting into and collecting: Matching coefficients with the right-hand side :    Solving the system (can skim)  Multiply the first equation by and add to the second: Substituting back:    So the particular solution is       Find the complementary function   Find the general solution to the associated homogeneous equation    Answer:      Full computation (can skim; see )  We solved equations like this in . The characteristic equation is Two distinct real roots give the general solution       Checking that is a solution   Now let's verify that actually satisfies the non-homogeneous equation. Substituting into the left-hand side and grouping the and terms together: The group is zero because solves the homogeneous equation; the group equals the right-hand side because is a particular solution. So is a solution for any values of and .      The key idea   Looking back at the verification above, why does solve the non-homogeneous equation ?      When you plug in , the part cancels to zero (since it solves the homogeneous equation), and the part produces exactly the right-hand side (since it's a particular solution). The sum is therefore equal to the right-hand side.    Exactly! The two pieces play complementary roles: does the job of matching the right-hand side, while quietly disappears.       Both and individually solve the non-homogeneous equation, so their sum does too.    Not quite. solves the homogeneous equation (right-hand side zero), not the non-homogeneous one. It's specifically because they solve different equations that the sum works.      The constants and can always be chosen to make any function satisfy the equation.    The constants and give flexibility, but they don't make an arbitrary function a solution. The reason works is specifically because of what and each solve, not because of the free constants.      Adding two functions always produces a solution to the original equation.    This isn't true in general. The sum of two random functions won't usually satisfy a given ODE. The key is that and are carefully chosen to solve related equations whose contributions add up to the right-hand side.        So we've shown that is always a solution. For our example, that gives the general solution The two free constants and live entirely in and can be determined by initial conditions, just as in the homogeneous case. The particular solution is a single fixed function with no free parameters; it just does the job of matching the right-hand side.  In fact, turns out to be all solutions. That is, every solution to the non-homogeneous equation can be written in this form. Showing this rigorously requires more theory regarding existence and uniqueness of solutions to 2nd order linear ODEs than we present in this course, so we'll take it as given and state the result:    General Solution to the Non-Homogeneous Equation   Suppose is a particular solution to and is the general solution to the associated homogeneous equation Then the general solution to is       Key Takeaways     Two parts of the general solution: To solve a non-homogeneous equation, find (one particular solution, using undetermined coefficients) and (the general solution to the associated homogeneous equation, using the characteristic equation). The general solution is .   Why it works: When you substitute , the terms cancel to zero and the terms produce the right-hand side, so the sum satisfies the full non-homogeneous equation.       This video goes through the content of this page.     "
},
{
  "id": "exploration-general-solution",
  "level": "2",
  "url": "sec-general-solution-nonhomogeneous.html#exploration-general-solution",
  "type": "Exploration",
  "number": "3.5.1",
  "title": "Finding the General Solution to a Non-Homogeneous Equation.",
  "body": " Finding the General Solution to a Non-Homogeneous Equation   Our goal is to find the general solution to the non-homogeneous equation To do this, it turns out we need two ingredients: a particular solution  to the non-homogeneous equation, and the complementary function  , which is the general solution to the associated homogeneous equation.  The point of this exploration is to see why the sum will always form a solution to the non-homogeneous ODE.   You can skim the computations for and , but pay close attention to parts (c) and (d)!      Find a particular solution   Use the method of undetermined coefficients to find a particular solution to    Answer:      Full computation (can skim)  The right-hand side has frequency , and the coefficient of is , so this is the normal case. We guess Computing derivatives: Substituting into and collecting: Matching coefficients with the right-hand side :    Solving the system (can skim)  Multiply the first equation by and add to the second: Substituting back:    So the particular solution is       Find the complementary function   Find the general solution to the associated homogeneous equation    Answer:      Full computation (can skim; see )  We solved equations like this in . The characteristic equation is Two distinct real roots give the general solution       Checking that is a solution   Now let's verify that actually satisfies the non-homogeneous equation. Substituting into the left-hand side and grouping the and terms together: The group is zero because solves the homogeneous equation; the group equals the right-hand side because is a particular solution. So is a solution for any values of and .      The key idea   Looking back at the verification above, why does solve the non-homogeneous equation ?      When you plug in , the part cancels to zero (since it solves the homogeneous equation), and the part produces exactly the right-hand side (since it's a particular solution). The sum is therefore equal to the right-hand side.    Exactly! The two pieces play complementary roles: does the job of matching the right-hand side, while quietly disappears.       Both and individually solve the non-homogeneous equation, so their sum does too.    Not quite. solves the homogeneous equation (right-hand side zero), not the non-homogeneous one. It's specifically because they solve different equations that the sum works.      The constants and can always be chosen to make any function satisfy the equation.    The constants and give flexibility, but they don't make an arbitrary function a solution. The reason works is specifically because of what and each solve, not because of the free constants.      Adding two functions always produces a solution to the original equation.    This isn't true in general. The sum of two random functions won't usually satisfy a given ODE. The key is that and are carefully chosen to solve related equations whose contributions add up to the right-hand side.      "
},
{
  "id": "thm-general-solution-nonhomogeneous",
  "level": "2",
  "url": "sec-general-solution-nonhomogeneous.html#thm-general-solution-nonhomogeneous",
  "type": "Theorem",
  "number": "3.5.1",
  "title": "General Solution to the Non-Homogeneous Equation.",
  "body": " General Solution to the Non-Homogeneous Equation   Suppose is a particular solution to and is the general solution to the associated homogeneous equation Then the general solution to is    "
},
{
  "id": "video-general-solution-nonhomogeneous",
  "level": "2",
  "url": "sec-general-solution-nonhomogeneous.html#video-general-solution-nonhomogeneous",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-nonhomogeneous-ivp",
  "level": "1",
  "url": "sec-nonhomogeneous-ivp.html",
  "type": "Section",
  "number": "3.5.7",
  "title": "Solving an IVP with a Non-Homogeneous Equation",
  "body": " Solving an IVP with a Non-Homogeneous Equation   On the previous page we found the general solution to which is Now we go one step further: given initial conditions, we can solve for and to find the unique solution to an IVP.    Solving an IVP for a Non-Homogeneous Equation   Find the specific solution to satisfying and .     Where do the initial conditions go?   We know the general solution is , where and . To find and , which expression should we plug the initial conditions into?     The full general solution .   Correct! The initial conditions must be satisfied by the actual solution , which is the full . Plugging into just would ignore the contribution of at and give the wrong values of and .      Just , since that's where and live.   This is a very common mistake! It's true that and appear only in , but the initial conditions must be satisfied by the full solution . Ignoring when applying the ICs will give incorrect values of and .     Just , since it's the solution to the non-homogeneous equation.    is a particular solution but it has no free constants, so we can't adjust it to satisfy arbitrary initial conditions. We need the full .     Plug the ICs into first to find and , then add .   This gets the order wrong. We first write out the full , then plug the ICs into that. Solving alone for and and adding afterward will not produce a solution that satisfies the ICs.        Finding and   Use the initial conditions and to find and , and state the specific solution to the IVP.   Answer:      Start with the general solution and its derivative:    Then plug in using each initial condition to get a system of two equations in and :  From : plug into and set equal to .  From : plug into and set equal to .  Solve the resulting system for and .    Full solution  We start with the general solution and its derivative: Plugging in and applying each initial condition: So we need to solve the system:    Solving the system for and (can skim)  We subtract the first equation from the second to eliminate : Substituting back into the first equation:    This gives and , so the specific solution to the IVP is:        Key Takeaways     The full process: To solve an IVP for a non-homogeneous equation, first find the general solution , then plug the initial conditions into the full  (not just ) to solve for and .   Common mistake: Applying initial conditions to alone ignores the constant value of at and gives the wrong constants.       Note: there is a small typo in the video for this page; the final answer should have , not .    This video goes through the content of this page.     "
},
{
  "id": "example-nonhomogeneous-ivp",
  "level": "2",
  "url": "sec-nonhomogeneous-ivp.html#example-nonhomogeneous-ivp",
  "type": "Example",
  "number": "3.5.1",
  "title": "Solving an IVP for a Non-Homogeneous Equation.",
  "body": " Solving an IVP for a Non-Homogeneous Equation   Find the specific solution to satisfying and .     Where do the initial conditions go?   We know the general solution is , where and . To find and , which expression should we plug the initial conditions into?     The full general solution .   Correct! The initial conditions must be satisfied by the actual solution , which is the full . Plugging into just would ignore the contribution of at and give the wrong values of and .      Just , since that's where and live.   This is a very common mistake! It's true that and appear only in , but the initial conditions must be satisfied by the full solution . Ignoring when applying the ICs will give incorrect values of and .     Just , since it's the solution to the non-homogeneous equation.    is a particular solution but it has no free constants, so we can't adjust it to satisfy arbitrary initial conditions. We need the full .     Plug the ICs into first to find and , then add .   This gets the order wrong. We first write out the full , then plug the ICs into that. Solving alone for and and adding afterward will not produce a solution that satisfies the ICs.        Finding and   Use the initial conditions and to find and , and state the specific solution to the IVP.   Answer:      Start with the general solution and its derivative:    Then plug in using each initial condition to get a system of two equations in and :  From : plug into and set equal to .  From : plug into and set equal to .  Solve the resulting system for and .    Full solution  We start with the general solution and its derivative: Plugging in and applying each initial condition: So we need to solve the system:    Solving the system for and (can skim)  We subtract the first equation from the second to eliminate : Substituting back into the first equation:    This gives and , so the specific solution to the IVP is:     "
},
{
  "id": "sec-nonhomogeneous-ivp-5",
  "level": "2",
  "url": "sec-nonhomogeneous-ivp.html#sec-nonhomogeneous-ivp-5",
  "type": "Remark",
  "number": "3.5.2",
  "title": "",
  "body": " Note: there is a small typo in the video for this page; the final answer should have , not .  "
},
{
  "id": "video-nonhomogeneous-ivp",
  "level": "2",
  "url": "sec-nonhomogeneous-ivp.html#video-nonhomogeneous-ivp",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "exercises-3-5",
  "level": "1",
  "url": "exercises-3-5.html",
  "type": "Exercises",
  "number": "3.5.8",
  "title": "Exercises for Section 3.5",
  "body": " Exercises for Section 3.5  These exercises cover the method of undetermined coefficients. For each problem, remember: the frequency in your guess always comes from the right-hand side of the ODE, and you should put the ODE in standard form (leading coefficient 1) before checking for the case of duplication.    Identifying the Correct Guess   For each ODE below, state the correct form of the guess for finding a particular solution using undetermined coefficients. You do not need to solve for the coefficients.          Normal case ( , coefficient of is ):            Case of duplication ( , coefficient of is ):            Dividing through by gives . Since and the coefficient of is , this is the case of duplication:            Normal case. Even though and , the coefficient of is , not . The homogeneous equation has real exponential solutions, not trig functions, so the usual guess works fine:        Normal Case vs. Case of Duplication   Consider the ODE where is a positive constant.     For what value of are we in the case of duplication?    Divide through by first to put the ODE in standard form, then check whether the coefficient of equals , where is the frequency on the right-hand side.           Find the general solution for .           Find the general solution for .            Solving an IVP with a Non-Homogeneous Equation   Solve the initial value problem      Find the complementary function .           Find a particular solution .           Use the initial conditions to find the specific solution to the IVP. Remember to apply the initial conditions to the full general solution , not just .           "
},
{
  "id": "ex-3-5-1",
  "level": "2",
  "url": "exercises-3-5.html#ex-3-5-1",
  "type": "Exercise",
  "number": "3.5.8.1",
  "title": "Identifying the Correct Guess.",
  "body": " Identifying the Correct Guess   For each ODE below, state the correct form of the guess for finding a particular solution using undetermined coefficients. You do not need to solve for the coefficients.          Normal case ( , coefficient of is ):            Case of duplication ( , coefficient of is ):            Dividing through by gives . Since and the coefficient of is , this is the case of duplication:            Normal case. Even though and , the coefficient of is , not . The homogeneous equation has real exponential solutions, not trig functions, so the usual guess works fine:     "
},
{
  "id": "ex-3-5-2",
  "level": "2",
  "url": "exercises-3-5.html#ex-3-5-2",
  "type": "Exercise",
  "number": "3.5.8.2",
  "title": "Normal Case vs. Case of Duplication.",
  "body": " Normal Case vs. Case of Duplication   Consider the ODE where is a positive constant.     For what value of are we in the case of duplication?    Divide through by first to put the ODE in standard form, then check whether the coefficient of equals , where is the frequency on the right-hand side.           Find the general solution for .           Find the general solution for .         "
},
{
  "id": "ex-3-5-3",
  "level": "2",
  "url": "exercises-3-5.html#ex-3-5-3",
  "type": "Exercise",
  "number": "3.5.8.3",
  "title": "Solving an IVP with a Non-Homogeneous Equation.",
  "body": " Solving an IVP with a Non-Homogeneous Equation   Solve the initial value problem      Find the complementary function .           Find a particular solution .           Use the initial conditions to find the specific solution to the IVP. Remember to apply the initial conditions to the full general solution , not just .         "
},
{
  "id": "sec-external-force-setup",
  "level": "1",
  "url": "sec-external-force-setup.html",
  "type": "Section",
  "number": "3.6.1",
  "title": "Setting Up the Forced Undamped System",
  "body": " Setting Up the Forced Undamped System   In , we modeled a mass attached to a spring with spring constant , with no friction or damping. Newton's second law gave the free undamped mass-spring ODE: or equivalently, writing (see ),    Before adding anything new, let's make sure the solution to this equation is fresh. Recall if you need a reminder.    What is the general solution to ?         Correct! The characteristic equation is , giving complex roots , so the general solution is a combination of cosine and sine at frequency .          Exponentials would arise from real roots, but the characteristic equation gives — purely imaginary roots. That means trig functions, not exponentials.         Close, but the frequency inside the trig functions is , not . The roots are , so the argument is .         This would be the solution to (with ). In general is not necessarily 1, so the frequency inside the trig functions must be .       That was free motion: the only forces acting on the mass were the spring restoring force and (in the damped case) friction. Now suppose an additional external force is applied to the mass (think of someone pushing and pulling the block rhythmically). Newton's second law now reads and since and , rearranging gives We focus on the undamped case (no dashpot, so ), and we take the external force to be sinusoidal: where , , and are constants.    The Forced Undamped Mass-Spring ODE   The position of an undamped mass-spring system subject to a sinusoidal external force satisfies: Dividing both sides by and writing : Here:   is the natural frequency of the system: the frequency it oscillates at when left alone.   is the forcing frequency : the frequency of the applied external force.       Since this is a non-homogeneous ODE (just like in ), its general solution will have the form , where is a particular solution and is the complementary solution : the general solution to the homogeneous equation , i.e., the system with no external force . From the checkpoint above: This is exactly why is called the natural frequency: it is the frequency at which the system freely oscillates on its own, with no outside influence. The forcing frequency , by contrast, is imposed from the outside.    Circular vs. ordinary frequency  Technically, and are circular frequencies , measured in radians per unit time rather than cycles per unit time (which would require a factor of ). In this context we will simply say frequency and mean the circular version throughout.     Key Takeaways     The ODE: Adding a sinusoidal external force to the undamped mass-spring system gives , a non-homogeneous ODE we now have the tools to solve.   Two frequencies:  is the natural frequency (how the system oscillates freely); is the forcing frequency (the rhythm imposed from outside). Whether these are equal or not will turn out to matter enormously.   Complementary solution:  comes from the free system, and will come from the external force via undetermined coefficients. We find on the next page.       This video goes through the content of this page.     "
},
{
  "id": "sec-external-force-setup-2",
  "level": "2",
  "url": "sec-external-force-setup.html#sec-external-force-setup-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "free undamped "
},
{
  "id": "ex-mc-free-undamped-solution",
  "level": "2",
  "url": "sec-external-force-setup.html#ex-mc-free-undamped-solution",
  "type": "Checkpoint",
  "number": "3.6.1",
  "title": "",
  "body": "  What is the general solution to ?         Correct! The characteristic equation is , giving complex roots , so the general solution is a combination of cosine and sine at frequency .          Exponentials would arise from real roots, but the characteristic equation gives — purely imaginary roots. That means trig functions, not exponentials.         Close, but the frequency inside the trig functions is , not . The roots are , so the argument is .         This would be the solution to (with ). In general is not necessarily 1, so the frequency inside the trig functions must be .     "
},
{
  "id": "sec-external-force-setup-5",
  "level": "2",
  "url": "sec-external-force-setup.html#sec-external-force-setup-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "undamped "
},
{
  "id": "def-forced-undamped-ode",
  "level": "2",
  "url": "sec-external-force-setup.html#def-forced-undamped-ode",
  "type": "Definition",
  "number": "3.6.2",
  "title": "The Forced Undamped Mass-Spring ODE.",
  "body": " The Forced Undamped Mass-Spring ODE   The position of an undamped mass-spring system subject to a sinusoidal external force satisfies: Dividing both sides by and writing : Here:   is the natural frequency of the system: the frequency it oscillates at when left alone.   is the forcing frequency : the frequency of the applied external force.     "
},
{
  "id": "sec-external-force-setup-7",
  "level": "2",
  "url": "sec-external-force-setup.html#sec-external-force-setup-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complementary solution "
},
{
  "id": "remark-circular-frequency",
  "level": "2",
  "url": "sec-external-force-setup.html#remark-circular-frequency",
  "type": "Remark",
  "number": "3.6.3",
  "title": "Circular vs. ordinary frequency.",
  "body": " Circular vs. ordinary frequency  Technically, and are circular frequencies , measured in radians per unit time rather than cycles per unit time (which would require a factor of ). In this context we will simply say frequency and mean the circular version throughout.  "
},
{
  "id": "video-external-force-setup",
  "level": "2",
  "url": "sec-external-force-setup.html#video-external-force-setup",
  "type": "Figure",
  "number": "3.6.4",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-external-force-examples",
  "level": "1",
  "url": "sec-external-force-examples.html",
  "type": "Section",
  "number": "3.6.2",
  "title": "Two Examples of the Forced System",
  "body": " Two Examples of the Forced System   We now solve the forced undamped system for two different values of the spring constant . The method is undetermined coefficients, which you practiced in and surrounding sections, so feel free to skim the algebraic details in parts (b) and (c). What matters most is understanding which case you are in and what the general solution looks like at the end.  Throughout both examples we use , , , and , so the ODE is and we find the general solution for two choices of : first , then .    Solving the Forced System for Two Values of   In both examples below, the ODE is and we find the general solution for two choices of : and .     Part (a): Which example is the case of duplication?   Which of the two examples is in the case of duplication? (See for a reminder.)      The example with , because the homogeneous equation becomes , i.e. , so contains and . The standard guess already solves the homogeneous equation, giving us the case of duplication.    Correct! When the homogeneous equation is , so already contains and . The standard guess duplicates and we must multiply by . Note that this happened because : the natural frequency equals the forcing frequency.       The example with , because makes the algebra messier.    Messier algebra does not mean duplication. The case of duplication is about whether the guess for already appears in , which depends on whether , not on how clean the numbers are.      Both examples are cases of duplication, since both have cosine on the right-hand side.    Having cosine on the right-hand side is not enough to cause duplication. Duplication happens only when the frequency of that cosine matches . That only occurs when .      Neither example is a case of duplication.    When , the natural frequency is , which equals the forcing frequency . So and already appear in , and we do have duplication.      Notice what triggered the duplication: the natural frequency and the forcing frequency happened to be equal when . When they differ, as with , there is no duplication and the standard guess works fine. Keep this in mind as you work through the solutions below.    Part (b): General solution when   Find the general solution to .   Complementary solution:     Particular solution:     General solution:      Finding (can skim)  Since , this is the normal case. We guess and compute: Substituting into and collecting:    Matching coefficients (can skim)      So . Note that because there is no term in the ODE and the right-hand side has no sine.      Part (c): General solution when   Find the general solution to .   Complementary solution:     Particular solution:     General solution:      Finding (can skim)  Since , we have duplication. The modified guess is . Computing derivatives by the product rule: Substituting into , the terms cancel and we get:    Matching coefficients (can skim)      So .      Look at the two general solutions side by side: They look quite different. What was it about the setup that caused this?    What is fundamentally different between the two examples that led to such different solutions?      In the first example and are different, so we get a standard particular solution. In the second example , which puts us in the case of duplication and introduces the factor of in .    Exactly. When (as with ) we get the standard case and a bounded particular solution. When (as with ) the homogeneous equation takes the form , so the standard guess already solves it: we are in the case of duplication, the factor of appears in , and the two solutions look completely different. On the next page we see what this means physically.       The second example had a larger value of , which made the ODE harder to solve.    The size of alone is not what caused the difference. What mattered was the relationship between and the forcing frequency : specifically, whether they were equal or not.      The second example required the duplication rule because the right-hand side was more complicated.    The right-hand side is in both examples. The duplication arose because the natural frequency happened to match the forcing frequency , not because of anything different about the right-hand side.      In the first example dropped out, making it a simpler calculation.    That in the first example is a nice simplification, but it is not the fundamental difference between the two cases. The real distinction is whether the forcing frequency matches the natural frequency.        Key Takeaways     Two cases: When the forcing frequency and the natural frequency are different, undetermined coefficients works in the standard way. When , we hit the case of duplication and must multiply the guess by .   Frequencies are the key: The case of duplication arises precisely because the external force is driving the system at its own natural frequency (that is, ). On the next page we see what this means physically.       This video goes through the content of this page.     "
},
{
  "id": "activity-forced-examples",
  "level": "2",
  "url": "sec-external-force-examples.html#activity-forced-examples",
  "type": "Activity",
  "number": "3.6.1",
  "title": "Solving the Forced System for Two Values of <span class=\"process-math\">\\(k\\)<\/span>.",
  "body": " Solving the Forced System for Two Values of   In both examples below, the ODE is and we find the general solution for two choices of : and .     Part (a): Which example is the case of duplication?   Which of the two examples is in the case of duplication? (See for a reminder.)      The example with , because the homogeneous equation becomes , i.e. , so contains and . The standard guess already solves the homogeneous equation, giving us the case of duplication.    Correct! When the homogeneous equation is , so already contains and . The standard guess duplicates and we must multiply by . Note that this happened because : the natural frequency equals the forcing frequency.       The example with , because makes the algebra messier.    Messier algebra does not mean duplication. The case of duplication is about whether the guess for already appears in , which depends on whether , not on how clean the numbers are.      Both examples are cases of duplication, since both have cosine on the right-hand side.    Having cosine on the right-hand side is not enough to cause duplication. Duplication happens only when the frequency of that cosine matches . That only occurs when .      Neither example is a case of duplication.    When , the natural frequency is , which equals the forcing frequency . So and already appear in , and we do have duplication.      Notice what triggered the duplication: the natural frequency and the forcing frequency happened to be equal when . When they differ, as with , there is no duplication and the standard guess works fine. Keep this in mind as you work through the solutions below.    Part (b): General solution when   Find the general solution to .   Complementary solution:     Particular solution:     General solution:      Finding (can skim)  Since , this is the normal case. We guess and compute: Substituting into and collecting:    Matching coefficients (can skim)      So . Note that because there is no term in the ODE and the right-hand side has no sine.      Part (c): General solution when   Find the general solution to .   Complementary solution:     Particular solution:     General solution:      Finding (can skim)  Since , we have duplication. The modified guess is . Computing derivatives by the product rule: Substituting into , the terms cancel and we get:    Matching coefficients (can skim)      So .    "
},
{
  "id": "ex-mc-frequency-comparison",
  "level": "2",
  "url": "sec-external-force-examples.html#ex-mc-frequency-comparison",
  "type": "Checkpoint",
  "number": "3.6.1",
  "title": "",
  "body": "  What is fundamentally different between the two examples that led to such different solutions?      In the first example and are different, so we get a standard particular solution. In the second example , which puts us in the case of duplication and introduces the factor of in .    Exactly. When (as with ) we get the standard case and a bounded particular solution. When (as with ) the homogeneous equation takes the form , so the standard guess already solves it: we are in the case of duplication, the factor of appears in , and the two solutions look completely different. On the next page we see what this means physically.       The second example had a larger value of , which made the ODE harder to solve.    The size of alone is not what caused the difference. What mattered was the relationship between and the forcing frequency : specifically, whether they were equal or not.      The second example required the duplication rule because the right-hand side was more complicated.    The right-hand side is in both examples. The duplication arose because the natural frequency happened to match the forcing frequency , not because of anything different about the right-hand side.      In the first example dropped out, making it a simpler calculation.    That in the first example is a nice simplification, but it is not the fundamental difference between the two cases. The real distinction is whether the forcing frequency matches the natural frequency.     "
},
{
  "id": "video-external-force-examples",
  "level": "2",
  "url": "sec-external-force-examples.html#video-external-force-examples",
  "type": "Figure",
  "number": "3.6.2",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "sec-resonance",
  "level": "1",
  "url": "sec-resonance.html",
  "type": "Section",
  "number": "3.6.3",
  "title": "Resonance",
  "body": " Resonance   In we found two general solutions to : As you noticed, the case landed in the case of duplication because the natural frequency equaled the forcing frequency . When the natural and forcing frequencies align like this, we say the system is in resonance . We will see shortly what this means physically.   Putting together what we know from undetermined coefficients, the general solution to the forced undamped system looks quite different depending on whether resonance occurs.   General Solution: Resonance vs. Non-Resonance   Consider the forced undamped system      Non-resonance ( ):    Resonance ( ):        In the non-resonance case, both and are pure sinusoidal functions, just at different frequencies ( and respectively). Their sum oscillates with bounded amplitude forever. Here is the solution from the previous page:   The non-resonance solution (with , ). Two sinusoidal functions at different frequencies add together; the amplitude stays bounded.     Now look at the resonance case. The particular solution is . Before looking at the graph, take a guess.    As gets larger and larger, what happens to the resonance solution?      The oscillations get larger and larger; the amplitude grows without bound.    Yes! The factor of in acts like a growing envelope: the amplitude of the oscillations scales with , so it grows without bound as .       The oscillations stay roughly the same size.    This would be true if were a pure sinusoidal function. But the factor of means the amplitude scales with time, so it cannot stay bounded.      The oscillations gradually die out and .    Decaying oscillations would require a negative exponential factor like . Here we have a factor of growing in the positive direction, so the amplitude increases rather than decreases.      The solution eventually becomes periodic and repeats.    A periodic solution would require a bounded, repeating pattern. The factor of prevents that: each cycle is bigger than the last, so the solution never repeats.       In the resonance case the particular solution is The factor of multiplies the sinusoidal part, so as grows the amplitude grows with it. The complementary solution is just a bounded sinusoidal function riding on top, so the full solution is dominated by the growing .    The full resonance solution (with , ). The dashed red curves show the envelope from . Press Play to watch the amplitude grow.      Finding the Resonance Frequency   Suppose , , and the external force is . For what forcing frequency does resonance occur?    Resonance occurs when the forcing frequency equals the natural frequency of the system, . What value of makes this true for the given and ?    Resonance occurs when . So we need (taking the positive value).  Note that is the circular frequency. The ordinary frequency (in cycles per unit time) is .      Key Takeaways     Resonance occurs when the forcing frequency equals the natural frequency . Mathematically, this is exactly the case of duplication for undetermined coefficients.   Non-resonance ( ): the solution is a bounded superposition of pure sinusoidal functions at different frequencies. The amplitude stays constant forever.   Resonance ( ): the particular solution picks up a factor of , which forces the amplitude to grow without bound as . In a physical system this means the oscillations grow larger and larger over time with no limit.       This video goes through the content of this page.     "
},
{
  "id": "thm-resonance-solution",
  "level": "2",
  "url": "sec-resonance.html#thm-resonance-solution",
  "type": "Theorem",
  "number": "3.6.1",
  "title": "General Solution: Resonance vs. Non-Resonance.",
  "body": " General Solution: Resonance vs. Non-Resonance   Consider the forced undamped system      Non-resonance ( ):    Resonance ( ):      "
},
{
  "id": "fig-nonresonance-graph",
  "level": "2",
  "url": "sec-resonance.html#fig-nonresonance-graph",
  "type": "Figure",
  "number": "3.6.2",
  "title": "",
  "body": " The non-resonance solution (with , ). Two sinusoidal functions at different frequencies add together; the amplitude stays bounded.   "
},
{
  "id": "ex-mc-resonance-behavior",
  "level": "2",
  "url": "sec-resonance.html#ex-mc-resonance-behavior",
  "type": "Checkpoint",
  "number": "3.6.3",
  "title": "",
  "body": "  As gets larger and larger, what happens to the resonance solution?      The oscillations get larger and larger; the amplitude grows without bound.    Yes! The factor of in acts like a growing envelope: the amplitude of the oscillations scales with , so it grows without bound as .       The oscillations stay roughly the same size.    This would be true if were a pure sinusoidal function. But the factor of means the amplitude scales with time, so it cannot stay bounded.      The oscillations gradually die out and .    Decaying oscillations would require a negative exponential factor like . Here we have a factor of growing in the positive direction, so the amplitude increases rather than decreases.      The solution eventually becomes periodic and repeats.    A periodic solution would require a bounded, repeating pattern. The factor of prevents that: each cycle is bigger than the last, so the solution never repeats.     "
},
{
  "id": "fig-resonance-animated",
  "level": "2",
  "url": "sec-resonance.html#fig-resonance-animated",
  "type": "Figure",
  "number": "3.6.4",
  "title": "",
  "body": " The full resonance solution (with , ). The dashed red curves show the envelope from . Press Play to watch the amplitude grow.   "
},
{
  "id": "example-resonance-frequency",
  "level": "2",
  "url": "sec-resonance.html#example-resonance-frequency",
  "type": "Example",
  "number": "3.6.5",
  "title": "Finding the Resonance Frequency.",
  "body": " Finding the Resonance Frequency   Suppose , , and the external force is . For what forcing frequency does resonance occur?    Resonance occurs when the forcing frequency equals the natural frequency of the system, . What value of makes this true for the given and ?    Resonance occurs when . So we need (taking the positive value).  Note that is the circular frequency. The ordinary frequency (in cycles per unit time) is .   "
},
{
  "id": "video-resonance",
  "level": "2",
  "url": "sec-resonance.html#video-resonance",
  "type": "Figure",
  "number": "3.6.6",
  "title": "",
  "body": " This video goes through the content of this page.   "
},
{
  "id": "exercises-3-6",
  "level": "1",
  "url": "exercises-3-6.html",
  "type": "Exercises",
  "number": "3.6.4",
  "title": "Exercises for Section 3.6",
  "body": " Exercises for Section 3.6  These exercises explore forced undamped mass-spring systems and resonance. For each problem, remember: resonance occurs when the forcing frequency equals the natural frequency .    Comparing Resonance and Non-Resonance   In , you found the general solutions to for and :   :    :   We now interpret this ODE as a forced undamped mass-spring system with spring constant , forcing amplitude , and forcing frequency .     For each value of (i.e., and ), identify the natural frequency  and the forcing frequency  .    The forcing frequency comes from the right-hand side of the ODE. The natural frequency comes from the system itself.    The forcing frequency is in both cases.  : .  : .        Which value of produces resonance, and why?     , because : the natural frequency equals the forcing frequency.      Using your general solutions from , apply the initial conditions and to find the specific solution for each value of .       :    :         Describe the long-term behavior of each solution as . How does this connect to whether or not resonance occurred?    For (non-resonance): the solution is a bounded sum of two sinusoidal functions. The amplitude stays constant forever.  For (resonance): the factor of in causes the amplitude to grow without bound as .       Reading a Solution   Two position functions of forced undamped mass-spring systems are given below. For each one, identify:  the natural frequency ,  the forcing frequency ,  whether resonance occurred.            Use to identify which part of is and which is . The natural frequency comes from , and the forcing frequency comes from .     , , no resonance.           Use to identify which part of is and which is . The natural frequency comes from , and the forcing frequency comes from .     , , resonance occurred.       Finding the Resonance Frequency   Consider the forced undamped system For what value of does resonance occur? You do not need to solve the ODE.     Resonance occurs when the forcing frequency equals the natural frequency . What is for this system?           Finding the Spring Constant for Unbounded Growth   Consider the forced undamped system where is a positive constant. For what value of will the solution grow without bound? You do not need to solve the ODE.     Does the solution grow without bound when resonance occurs, or when it does not?           Which Mass Causes Resonance?   A spring system is driven by the external force , so the position of the mass satisfies Three masses are available: , , and . Which mass will cause resonance? You do not need to solve the ODE.           "
},
{
  "id": "ex-3-6-1",
  "level": "2",
  "url": "exercises-3-6.html#ex-3-6-1",
  "type": "Exercise",
  "number": "3.6.4.1",
  "title": "Comparing Resonance and Non-Resonance.",
  "body": " Comparing Resonance and Non-Resonance   In , you found the general solutions to for and :   :    :   We now interpret this ODE as a forced undamped mass-spring system with spring constant , forcing amplitude , and forcing frequency .     For each value of (i.e., and ), identify the natural frequency  and the forcing frequency  .    The forcing frequency comes from the right-hand side of the ODE. The natural frequency comes from the system itself.    The forcing frequency is in both cases.  : .  : .        Which value of produces resonance, and why?     , because : the natural frequency equals the forcing frequency.      Using your general solutions from , apply the initial conditions and to find the specific solution for each value of .       :    :         Describe the long-term behavior of each solution as . How does this connect to whether or not resonance occurred?    For (non-resonance): the solution is a bounded sum of two sinusoidal functions. The amplitude stays constant forever.  For (resonance): the factor of in causes the amplitude to grow without bound as .    "
},
{
  "id": "ex-3-6-2",
  "level": "2",
  "url": "exercises-3-6.html#ex-3-6-2",
  "type": "Exercise",
  "number": "3.6.4.2",
  "title": "Reading a Solution.",
  "body": " Reading a Solution   Two position functions of forced undamped mass-spring systems are given below. For each one, identify:  the natural frequency ,  the forcing frequency ,  whether resonance occurred.            Use to identify which part of is and which is . The natural frequency comes from , and the forcing frequency comes from .     , , no resonance.           Use to identify which part of is and which is . The natural frequency comes from , and the forcing frequency comes from .     , , resonance occurred.    "
},
{
  "id": "ex-3-6-3",
  "level": "2",
  "url": "exercises-3-6.html#ex-3-6-3",
  "type": "Exercise",
  "number": "3.6.4.3",
  "title": "Finding the Resonance Frequency.",
  "body": " Finding the Resonance Frequency   Consider the forced undamped system For what value of does resonance occur? You do not need to solve the ODE.     Resonance occurs when the forcing frequency equals the natural frequency . What is for this system?        "
},
{
  "id": "ex-3-6-4",
  "level": "2",
  "url": "exercises-3-6.html#ex-3-6-4",
  "type": "Exercise",
  "number": "3.6.4.4",
  "title": "Finding the Spring Constant for Unbounded Growth.",
  "body": " Finding the Spring Constant for Unbounded Growth   Consider the forced undamped system where is a positive constant. For what value of will the solution grow without bound? You do not need to solve the ODE.     Does the solution grow without bound when resonance occurs, or when it does not?        "
},
{
  "id": "ex-3-6-5",
  "level": "2",
  "url": "exercises-3-6.html#ex-3-6-5",
  "type": "Exercise",
  "number": "3.6.4.5",
  "title": "Which Mass Causes Resonance?",
  "body": " Which Mass Causes Resonance?   A spring system is driven by the external force , so the position of the mass satisfies Three masses are available: , , and . Which mass will cause resonance? You do not need to solve the ODE.         "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "Answers to Exercises",
  "body": " Answers to Exercises  "
},
{
  "id": "back-colophon",
  "level": "1",
  "url": "back-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
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
