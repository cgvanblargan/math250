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
  "body": " General Solutions and Initial Value Problems  On the previous page, we found that one solution to is . In fact, all possible solutions, called the general solution , are of the form , where is any real number. Can you see why this is always a solution? Give it a think before revealing below!   Why is always a solution?  On the previous page we already showed that is a solution using the chain rule. It turns out the same argument works with any constant in front. Let's check with as an example: The constant just comes along for the ride, it doesn't affect the chain rule calculation at all. So by the same reasoning, for any real number : Therefore is a solution for any real number .   We will justify why this captures all solutions later when we study separable ODEs. For now, this idea generalizes naturally to the family of ODEs .   Solution to the Population Growth Model  A simple model of a population is that the rate of change is proportional to the population. So satisfies: The general solution to this differential equation is: where varying over any real number for gives all possible solutions.     What is the general solution to ?     , where is any real number.  Correct! This matches the general solution with .    , where is any real number.  Not quite — check the exponent. The ODE is , so , giving not .     Not quite — this is a specific solution, not the general one. The general solution has an arbitrary constant .     Not quite — the belongs in the exponent! The general solution is .     In the general solution , each value of gives a different specific solution — together they form a whole family of curves. For instance:   Use the slider below to explore how the value of affects the solution curve.   Solutions for varying values of .    Notice how the red dot representing moves as you vary . This is no coincidence: since , the initial value of the population is exactly . Specifying an initial condition like pins down exactly which curve we are on, giving us a specific solution .   Initial Value Problem   An initial value problem (IVP) consists of a differential equation together with one or more initial conditions. The goal is to find a specific solution that satisfies both the ODE and the initial condition(s).    Now we will get some practice finding a specific solution to an initial value problem!   Applying an Initial Condition  We have seen that the general solution to is . What is the specific solution such that the initial population at is ?     For , substitute wherever you see and wherever you see in . Then solve for .  You will need to use the fact that .      We substitute into the general solution: So , and the specific solution is:      This video goes through the content of this page.    "
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
  "body": " Setting Up Differential Equations  Recall that in our very first example, we set up the ODE by:  Interpreting \"the rate of change of the population\" as the derivative .  Writing as being proportional to the population with proportionality constant of 3.   Translating a verbal description into a derivative expression is the key to setting up any ODE.  Note that when a proportionality constant is not specified, we introduce a constant, such as , to represent the unspecified constant of proportionality (as opposed to a specific number like 3 in the population example above).   Setting Up Differential Equations   For each of the following, translate the verbal description into a differential equation. Try each one on your own before checking the solution!     The rate of change of a velocity of a car is proportional to the cube of . Which of the following correctly models this situation?       Correct! The rate of change of is , and proportional to the cube of means the RHS is .       Not quite — \"the rate of change of \" means we need a derivative on the left-hand side, not just itself.       Almost — but since the proportionality constant is unspecified, we need a out front. So .       Not quite — be careful with the wording! \"The cube of \" means , not the cube root .         Newton's law of cooling states that the time rate of change of a temperature of an object is proportional to the difference between and the surrounding temperature . Set up the ODE.    Two key quantities appear in this problem:  The rate of change of the temperature of the object is .  The difference between the temperature of the object and the surrounding temperature is .  These two quantities must be proportional to each other!    The ODE is:      The derivative of a function can also be understood visually: it gives the slope of the graph of the function at each point on the curve. More precisely, the tangent line at a point is the line passing through with slope . As we move along the curve, the slope of the tangent line changes, and captures exactly how it changes.   The tangent line to at the point . As you move the slider, notice how the slope changes at each point on the curve.    Now use this idea about tangent lines to set-up the ODE in the following example!   Setting Up an ODE from a Geometric Description  The slope of the tangent line of a graph of at the point is equal to the square root of the product of and . Set up the ODE.   The slope of the tangent line to at the point is . This is your left-hand side!     The left-hand side is the slope of the tangent line, and the right-hand side is the square root of the product of and .     This video goes through the content of this page.    "
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
  "body": " Verifying Solutions  Sometimes we are given proposed solutions to ODEs, and we must check whether they actually solve the ODE. To verify that is a solution to a differential equation, you must plug in and its relevant derivatives into both sides of the equation and verify they equal each other.   Verifying a Solution  Verify that is a solution to .   Compute . Then plug the expressions for and into the equation and check if the left and right sides are equal.    We compute:      Explanation: Computing  We find by using the chain rule on , which is a composition of (outside function) with (the inside function). The derivative of the inside function equals , which is why this expression is multiplied out in front when differentiating.      Plugging into : Therefore is a solution.    To get a better overall feel for what just took place in this example, play around with the slider in the graph below!   The family of solutions to the ODE . Use the slider to change and observe that no matter what value you choose, the verification always gives LHS = 0 = RHS!    It's now try to practice this a bit more! Try each of the following examples on your own, and then check with the notes or video.   Practice: Verifying Solutions   Try each of the following on your own before checking the solution. Use the hints if you get stuck.     Verify that is a solution to . Then find the specific solution given the initial condition .    To compute , recall that the derivative of is , and use the chain rule. The outside function is and the inside function is .    To find the specific solution: plug in wherever you see and wherever you see in .    We have , so by the chain rule:   Plugging into both sides of the ODE: Using the Pythagorean identity , the RHS simplifies:   For the specific solution, apply :   Finding   So the specific solution is .    Note: technically there are other values of (namely ), but they ultimately give the same function , as the tangent function is -periodic.       For what values of is a solution to ?    Start by verifying as usual. There will be an additional step to solve for the values of that ensure LHS = RHS.     Verify when is a solution.   First note that if , then .   Computing  Differentiating twice via the chain rule:    Plug and into and solve for . Try it out and check with the solution below!   Solving for      So is a solution. (Note: since cosine is an even function, so these are the same solution.)     Check Your Understanding   Let's explore the previous example a bit more. Which of the following are solutions to ? Select all that apply.       Correct! You can verify: . See the remark below for why this is no coincidence!       Correct! This is exactly what we just found above with .       Correct! And this is no coincidence — see the remark below for why combinations like this always work.       Not a solution. If , then , not .       Not a solution. If , then , not . This corresponds to , but we need .        Find all so that is a solution to .    After substituting , , and into the equation, what can you divide by to simplify?    Let . Then by the chain rule: Plugging into : Dividing both sides by (which we can do since is never zero): Notice there is no more variable — we just have a quadratic in ! Factoring: So and are both solutions.      Other Solutions to  In the previous activity we found that is a solution to . But there are others! In fact, is also a solution: More generally, is a solution for any constants . This turns out be quite fundamental for this course, and we will explore this later on!    This video goes through the content of this page.    "
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
  "body": " Equilibrium Solutions  We now take a brief detour to discuss equilibrium solutions. This is a simple but important concept that will come up throughout the course.   Equilibrium Solution   An equilibrium solution to a differential equation is a constant solution. That is, for all , where is a solution to the ODE.     A function is constant if and only if for all . We will use this fact frequently when finding equilibrium solutions.   As a quick example, consider the differential equation , whose general solution is . Use the slider below to explore how different values of give different specific solutions. Can you find the value of that makes a constant function?   Solutions for varying values of . Try to find the equilibrium solution!    Notice that these solutions are not constant in general. However, setting gives , which is constant, and therefore the only equilibrium solution.  Understanding equilibrium solutions gives us useful insight into the overall behavior of solutions to an ODE. Later in the course we will explore this in more depth. For now, let's see how equilibrium solutions arise naturally in the context of Newton's law of cooling.   Newton's Law of Cooling   Recall that Newton's law of cooling states that , where is the temperature of an object, is the surrounding temperature, and is a positive constant. Suppose the surrounding temperature is F, so the ODE becomes: What is the equilibrium solution? Justify this both intuitively and algebraically.    Intuitive Justification   What value of ensures the object never changes temperature?    If the surrounding temperature is F, what does the temperature of the object need to be so that it doesn't change?    An object stops changing temperature once it matches the temperature of its surroundings. If the surrounding temperature is F and the temperature of the object, , is F, then the temperature of the object remains at F. So is the equilibrium solution.     Algebraic Justification   Find the equilibrium solution algebraically. We haven't done this yet, so I expect most will need the hint to start!    We want to find for what value of the constant function is a solution. Notice that this implies .  This really is the same process as \"verifying\" a solution. But here, you sub in and . Then you solve for .  Substitute both expressions into the ODE and solve for .    For a constant solution , we have . Substituting into the ODE: Therefore is the equilibrium solution.       Find equilibrium solutions to ?  Use the same method as the algebraic solution to the Newton's law of Cooling problem above.       Correct! Setting gives . Plug into the ODE and solve:        Not quite. Try setting and , then substitute into the ODE and solve for .       Not quite. Try setting and , then substitute into the ODE and solve for .     There are no equilibrium solutions.   There is one! Try setting and , then substitute into the ODE and solve for .      Let's now practice finding equilibrium solutions for more complicated differential equations. Notice that finding the general solution in the following examples would be quite difficult, but substituting and often reduces the problem to a simple algebraic equation in .   Practice: Finding Equilibrium Solutions   Try each of the following on your own before checking the solution. Try it on your own first!      Find all equilibrium solutions, , to the differential equation     Since we are looking for a constant solution, we set , which gives: Substituting into the differential equation: So or , giving two equilibrium solutions:       Find all equilibrium solutions to the differential equation     Setting , so and , and substituting: But must be a constant, and is not constant. Therefore there are no equilibrium solutions .      Equilibrium solutions do not always exist, as the last example shows. Recall that we are looking for a constant such that satisfies the ODE. If the algebra forces to equal a non-constant expression, then no equilibrium solution exists.   Let's drive this point home with a quick checkpoint!    Consider the ODE . Setting and and substituting: What, if any, are the equilibrium solutions?       Close, but is not a constant function! An equilibrium solution must be constant for all values of .       Not quite. Try plugging into the ODE: , which is not true for all .       This is a common mistake! We solved for instead of . We need to be a constant — solving for doesn't give us an equilibrium solution.     There are no equilibrium solutions.   Correct! We need to be a constant, but depends on . So no constant function satisfies this ODE.       This video goes through the content of this page.    "
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
  "body": " Exercises for Section 1.1  Below are the exercises to complete for this section. You can check many of the answers in the \"backmatter\" of these notes. The necessary calculus pre-reqs for these exercises are listed at the bottom of this page.    Write a differential equation where the solution has the property that the slope of its graph at any point equals the sum of and .         Write a differential equation where the solution has the property that the tangent line to its graph at any point passes through the point .    You will need to use the fact that the slope of any line is .  Compute the slope of the tangent line: one of the points it passes through is , what other point does the tangent line always pass through? Refer to the setting up ODEs example in the notes.         The temperature of a cup of coffee changes at a rate proportional to the difference between the ambient air temperature and the coffee's current temperature. Suppose the ambient air temperature is F. Write a differential equation modeling .     Or equivalently: (because is not specified as a positive or negative constant, either is fine.)      Complete parts (a) and (b).     Verify that is a solution of .           Find the value of satisfying the initial condition .    .       Verify by substitution that and are both solutions of:     For :    For :        Verify by substitution that is a solution of:      and        Find all integer values of for which is a solution to:     and .      Find all integer values of for which is a solution to:     .      Find all values of the constant for which is a solution of:     and .      Find all equilibrium (constant) solutions to the equation below. That is, find all values of for which is a solution.     No equilibrium solutions.      Find all equilibrium (constant) solutions to the equation below. That is, find all values of for which is a solution.     and .    The following calculus facts will be useful throughout these exercises. Feel free to use them as a quick reference!   Calculus Prerequisites       Power Rule:     Example   . We multiply by the exponent and reduce the power by 1.      Exponential Rule:  , and more generally by the chain rule:    Example   . The chain rule brings down the inner derivative as a factor.      Chain Rule:     Example   . Here and , so and .      Product Rule:     Example   .      Trig Derivatives:  and      "
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
  "body": " Integrating to solve  A simple but important special case of a first-order ODE is when the right-hand side does not involve the dependent variable. That is, the equation is in the form:   Let's explore this with the following example.   A Simple First-Order ODE  Suppose . What does equal?   Think about what operation undoes differentiation. What function has derivative equal to ?    Notice that is a solution since its derivative is . That is, we found an antiderivative of .  Recall that adding any constant gives the general antiderivative , which is the general solution to . So we simply took the indefinite integral of !    The graph with an interactive slider below demonstrates what is happening in this example.   Solutions to of the form . As you drag the slider, notice that changing shifts the curve vertically, but the tangent line at always has slope , demonstrating that the derivative is the same for every solution in the family!    Alright, well that turned out to be pretty easy once we understood what the differential equation was saying! We generalize this idea in the following observation.   For a differential equation in the form the general solution is simply:    Let's use this principle in the following examples. Try them on your own first!   Practice: Integrating to Find Solutions   Try each of the following on your own before checking the solution. Try it on your own first!      Solve with initial condition .    Integrating both sides: Applying the initial condition : So the specific solution is: We can verify:  and  .      Find the general solution to .    Notice the left-hand side involves a second derivative, which we can write as . Apply the same integration principle to get , then integrate again.    Since , we integrate twice.   First integration: Starting from :   Reveal      Now that we have , we integrate again.   Second integration: Starting from :   Reveal      You can verify that the general solution satisfies .      Notice in the last example we obtained two constants of integration and from integrating twice.   We now have a solid understanding of solving ODEs in the form . Does this mean we've solved the entire course? Not quite, ODEs are rarely this simple! The key feature of is that the right-hand side depends only on the independent variable. In general, we won't be so lucky! Try the following checkpoint to determine when this method applies.    Which of the following ODEs have been solved correctly using the integration method ? Select all that apply.       , solved as .    Correct! The right-hand side depends only on , so we can integrate directly. .       , solved as .    Correct! The right-hand side depends only on , so we integrate directly to get .       , solved as .    Incorrect! The right-hand side depends on , not just , so we cannot simply integrate both sides this way. We will learn how to solve ODEs like this later in the course!       , solved as .    Incorrect! The right-hand side depends on both and , so direct integration doesn't work here. We will learn how to solve ODEs like this later in the course!       This video goes through the content of this page.    "
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
  "body": " Velocity and Acceleration  One of the most natural applications of ODEs is to motion. If you know how an object is accelerating, can you figure out the position? Let's review the key relationships between position, velocity, and acceleration before diving in.   Position, Velocity, and Acceleration   Suppose the position of an object with respect to time is given by .  The velocity  is the rate of change of position: .  The acceleration  is the rate of change of velocity: .      These relationships should look familiar from calculus. What's new here is that we can view them as ODEs. For instance, knowing the velocity gives us a first-order ODE for position, and knowing the acceleration gives us a second-order ODE. In both cases, we solve by integrating and applying initial conditions.  See if you can solve the following example.   Finding Position from Acceleration  Find the position function of a moving object given:    Since , we integrate to find .   First integration: Starting from :   Reveal   Applying : so .   Since , we integrate to find .   Second integration: Starting from :   Reveal   Applying : so the specific solution is:      Let's now take these ideas a step further and apply it to a word problem. While the question doesn't explicitly ask us to solve any ODE, finding the velocity function is necessary to answer the question.   Braking Distance  The brakes of a car travelling at mph give a constant deceleration of mi\/h . How long, in hours, until the car comes to a full stop?   A constant deceleration of means . Solve for the velocity function and determine when it equals zero.    We are given and . Integrating: Applying : The car stops when :    Note: be careful about units! The deceleration is given in mi\/h , so the answer is in hours.     Time for a quick check to make sure you are able to set-up position-velocity-acceleration ODEs!    Suppose a car has a constant deceleration of mi\/h . Which of the following correctly sets up an ODE for the position function ?      Correct! Acceleration is the second derivative of position, and deceleration means the acceleration is negative.     Almost — but deceleration means the acceleration is negative, so the right-hand side should be .     Not quite — the deceleration is constant, so the right-hand side should just be , not .     Not quite — acceleration is the second derivative of position, so the left-hand side should be , not . That would be saying the velocity is constant, not the acceleration!      This video goes through the content of this page.    "
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
  "body": " Exercises for Section 1.2    Find the general solution to the ODE:            Find the general solution to the ODE:            Find a function satisfying the differential equation and initial condition :            Find the position function of a moving particle with acceleration , initial velocity , and initial position .           The brakes of a car are applied when it is moving at m\/s and provide a constant deceleration of m\/s . How far does the car travel before coming to a stop?    Start the problem similar to the example in the notes by first computing how much time passes before coming to a stop. Find the position function. How can you combine these two things to answer the question?    It takes 3 seconds to come to a stop, and at this point it will have traveled m.    "
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
  "id": "sec-slopefields",
  "level": "1",
  "url": "sec-slopefields.html",
  "type": "Section",
  "number": "1.3",
  "title": "Section 1.3: To be added",
  "body": " Section 1.3: To be added   Section 1.3 is not currently being covered in the course.   "
},
{
  "id": "subsec-intr-separable",
  "level": "1",
  "url": "subsec-intr-separable.html",
  "type": "Section",
  "number": "1.4.1",
  "title": "Introduction to Separable ODEs",
  "body": " Introduction to Separable ODEs  We now introduce a method for solving a broad class of first-order ODEs called separable differential equations . Let's first get a feel for the idea through an example before formalizing things.  Let's get a feel for the idea through an example before formalizing things. Consider the differential equation . Notice that the right-hand side factors into a part involving only and a part involving only . We call ODEs in this form separable . That is, it can be written the form . We are going to try to \"separate\" the variables, moving all the terms to one side and all the terms to the other.  We write: We are treating as if it were a fraction and \"multiplying both sides by .\" Strictly speaking, is not a fraction. We will justify why this manipulation is mathematically valid shortly. For now, think of it as a useful shorthand that consistently gives the right answer.  Integrating both sides: Each side produces its own constant of integration: so we write:   So the general solution is .   Algebra to solve for  Starting from : So the general solution is .   This will outlined more clearly on the next page. But for now, let's make sure you understand what a first order separable ODE is.    Recall that a separable ODE is one that can be written in the form , where the right-hand side factors into a part involving only the dependent variable and a part involving only the independent variable. Which of the following ODEs are separable? Select all that apply.   Note that an ODE is separable as long as it can be written in the form . It does not need to appear that way initially.        Separable! We can write this as and (or and ). The right-hand side factors cleanly into a part in and a constant.       Separable! Factor out from the right-hand side: . So and .       Separable! The right-hand side already factors as and .       Separable — but sneaky! There is no explicit on the right-hand side, so (a constant function). We have and .       Not separable! There is no way to write as a product — the two variables are added together, not multiplied.       Not separable! Like the previous option, cannot be factored into a part in only and a part in only. Addition is the giveaway here.       Not separable! Even though it involves a trig function, cannot be written as — the variables are tangled together inside the sine.       This video goes through the content of this page.    "
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
  "body": " Separation of Variables  The method we started exploring on the previous page is called separation of variables . Let's now make it precise.   Separable Differential Equation   A separable differential equation is one that can be written in the form It can be solved using separation of variables :   This method captures all solutions that are not singular . When , we cannot divide by , so separation of variables may miss some solutions, but any solution missed this way is precisely an equilibrium (constant) solution.    A helpful (if informal) way to remember this is the following \"fake proof\":  Starting from , treat as a fraction and divide both sides by : Then \"multiply both sides by \" and integrate: While this is not a rigorous proof, it is a reliable way to remember how to apply the method.   Precise Justification (optional — for the curious!)  We want to rigorously justify why follows from .  Let be an antiderivative of , so that . Consider the function , viewed as a function of . By the chain rule: So is an antiderivative of with respect to . That is: But by definition of . So we arrive at: which is exactly what the method produces. The \"fake proof\" manipulation, while informal, gives the correct result.   Notice that separation of variables misses any solution where , since we cannot divide by zero in that step. It turns out these are precisely the equilibrium solutions -- the ones you already know how to find from !   Why does give equilibrium solutions?  Recall that an equilibrium solution is a constant solution . If is constant, then , so the ODE becomes For this to hold for all , we need . So the equilibrium solutions are exactly the values of where .    General Solution of a Separable ODE  The general solution to consists of:  All solutions found by separation of variables.  All equilibrium solutions, which correspond to values of where .     In the following example, we go through each step in applying separation of variables. At this point, you are still getting used to the process, so feel free to follow along step by step!   Solving a Separable ODE  Find the general explicit solution to .    Step 1: Find equilibrium solutions.   From the observation above, a shortcut to finding equilibrium solutions in separable ODEs is to solve . Here , so So is the only equilibrium solution.   Step 2: Separate the variables.   Assuming , divide both sides by and \"multiply by \":    Explanation: separating variables  We start from . Here and . Dividing both sides by and treating as we described:     Step 3: Integrate both sides.    (We place the constant only on the right-hand side, since combining two constants of integration still gives a single arbitrary constant.)   Step 4: Solve for .   From , taking reciprocals:    Full working   Note: in the third line, was replaced with . Since ranges over all real numbers, so does — so this is just a relabeling. See the remark below.    Step 5: Write the general solution.   Combining the equilibrium solution from Step 1 and the explicit solution from Step 4, the general solution is:     And we just successfully used separation of variables! All the problems with separation of variables follow this basic format (with steps 1-5). Some of the details will vary in each problem, which we explore in the following sections.   Absorbing Constants  In solving the previous example, we changed to . This is valid because and both vary over all real numbers (they represent the same family of values, just relabeled).  We often absorb constants into like this, and it is generally preferred to write the simpler expression. For example, it is much neater to write than , even though they represent the same family of functions. It is standard practice to reuse the name from line to line, even when absorbing constants into it.    Be Careful with Placement  Be careful when changing expressions with . For example  and are not the same.  and are not the same (the constant cannot be absorbed into due to the order of operations).     Let's do a quick check to make sure you are confident simplifying expressions with .    In each of the following, two expressions involving (where varies over all real numbers) are given. Select all pairs that represent the same family of functions.     and   These are equivalent! Since varies over all real numbers, so does — they represent the same family of values, just relabeled.     and   These are equivalent! The is just a fixed number that gets absorbed into . As varies over all reals, so does .     and   Not equivalent! The cannot be absorbed into — adding 1 to shifts every solution up by 1, which is a genuinely different family of functions.     and   These are equivalent! As varies over all real numbers, so does — it's just a relabeling of the constant.     and   Not equivalent! In the first, shifts the graph vertically. In the second, shifts the graph horizontally inside the square root. These are genuinely different families of functions.       This video goes through the content of this page.    "
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
  "body": " Separation of Variables: Important Example with Exponentials  Recall the following population modelling ODE: , which says the population grows at a rate twice the current population. We were previously able to guess and check some solutions to this. With separation of variables we will know, without a doubt, what all the solutions are.  First, why is this ODE separable? Recall that a separable ODE is one that can be written in the form: or with our current variables: But looking at , there doesn't seem to be any function! Think about what you could set and to be.   Why is this separable?  Functions can be constant! So and may end up being constant functions, where there is no explicit mention of the independent variable. In this case there are two natural choices:  and  and  Both choices work and will ultimately give the same general solution. In the example below, we will use choice (1): and .   Now that we have established it is separable, let's use separation of variables to solve it! Try as much as you can on your own, and check with the solution as you go. In this problem, there are some subtle things we take note of in step 4 when solving for .   An important observation with exponentials  Find the general solution to .   Follow the same five steps as in the previous example:  Find equilibrium solutions.  Separate the variables.  Integrate both sides.  Solve for .  Write the general solution.       Step 1: Find equilibrium solutions.   The only equilibrium solution is .   Work to solve for the equilibrium solution  In separable ODEs, we can always find the equilibrium solution by solving . Here , so So is the only equilibrium solution.    Steps 2 and 3: Separate the variables and integrate.   You should arrive at . Nothing is too interesting in these two steps, but you can see the work below if you are unsure.   Work for steps 2 and 3  Assuming , divide both sides by and multiply by :   Then we integrate:    Don't forget the absolute value in !     Step 4: Solve for .   Starting from , we find: This step just involves standard exponential rules, so make sure you are comfortable with it! You can read the solution below if you are stuck.   Step 4a: Algebra to get .  Exponentiating both sides  and applying :    Finally, we get to the interesting part of this question! Solving for here in a nice form takes some work. But the result of this will be a big takeaway for solving similar questions with exponentials. Do your best to solve for here, and then definitely read solution below !!   Step 4b: Removing the absolute value and simplifying the constant  The steps involved here involve careful reasoning about the constant and exponential function. Do not fret, we wil summarize this all at the end of the page and make sure you are confident with similar questions going forward!  We are starting from: . Removing the absolute value introduces a : As varies over all real numbers, ranges over all positive numbers. That is, every positive number can be written as for some . Therefore attains all negative numbers. Together, ranges over all nonzero real numbers. So we replace with a new constant varying over all nonzero reals:    The graph of is always positive and ranges of all positive numbers as varies over all reals.      Step 5: Write the general solution.   From Steps 1 and 4, we have found: Notice that setting in gives , recovering the equilibrium solution. So the general solution can be written compactly as:     Step 4 involved some subtle reasoning, but this pattern comes up often in problems involving exponentials. So going forward we can skip many of the details, as discussed in the remark below.   A Useful Shortcut for Exponential Solutions  In particular, whenever you arrive at an expression of the form it always results in   Even more, this typically arises after applying separation of variables to an ODE of the form , where the only equilibrium solution is . So the general solution — combining the equilibrium solution with the explicit solution — can always be written compactly as:    The reasoning in Step 4 will come up again and again whenever you solve an ODE with an exponential solution. Getting comfortable with it now will save you a lot of trouble going forward! Let's quickly drive this point home with the following question.    Your friend is solving the ODE and has correctly found:  is the only equilibrium solution.  Separation of variables yields .  They need your help finishing! Which of the following is the correct general solution?     , where is any real number.  Exactly! ranges over all nonzero reals, and combining with the equilibrium solution means can be any real number.    , where is any nonzero real number.  Close — but don't forget the equilibrium solution ! Setting recovers it, so can be any real number.    .  Not quite — is always positive, so this misses all the negative solutions. Don't forget the when removing the absolute value!    or .  You remembered the equilibrium solution, but is always positive — this still misses all the negative solutions. The is needed when removing the absolute value!      This video goes through the content of this page.    "
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
  "body": " Separation of Variables: Some Subtle Points  Now we look at two more examples solving separable ODEs. This first example illustrates a subtle point when dealing with square roots. See if you can find the mistake in the work below!   A Subtle Moment in Solving an IVP   Let's solve the following initial value problem explicitly: , .  After separating variables and integrating, we arrive at:    Work for separation of variables  First, why is this separable? Notice that is already on the left with , so no dividing by is necessary — we can separate immediately by writing . There are no equilibrium solutions since setting gives , which can't hold for all .  Separating variables: Integrating both sides:    Now something interesting happens when we solve for explicitly. Let's take the square root of both sides: Applying the initial condition : But the square root of a number is always non-negative — so is impossible! We seem to have reached a contradiction. What went wrong?    What went wrong?   Identify the error in the working above.     We integrated incorrectly. The antiderivative of is not .  Not quite — is correct!    We forgot the when taking the square root.  Exactly! When solving , we should have written . The negative branch is what allows .    The initial condition is inconsistent with this ODE, so no solution exists.  Not quite — a solution does exist! The issue is earlier in the working.       Now that you've identified the mistake, see if you can finish solving the problem correctly! Check with the solution below.    Corrected solution  The fix is to include the when taking the square root: Now applying : since is negative, we choose the negative branch: So the specific solution is:      So far, when solving a separable ODE we have always ended by solving explicitly for the dependent variable, arriving at something like or . But sometimes it is difficult or even impossible to isolate the dependent variable, and that's okay! An equation relating and that implicitly defines as a function of , without explicitly writing , is called an implicit solution . For example, could be an implicit solution to an ODE even though we haven't written by itself. In these cases, we simply stop once we have a clean implicit relation and call that the general solution.   Finding a General Implicit Solution   Find a general implicit solution to . Before diving in, see if you can figure out whether there are any equilibrium solutions!    Separating the variables   We are trying to solve . Which of the following correctly separates the variables?         Correct! Multiplying both sides by gives , and then separating gives .         Not quite — check your separation step. You need to multiply both sides by first, not divide.         Not quite — the right-hand side still contains , which means the variables are not fully separated!      This ODE is not separable.    It is separable! Try rewriting the right-hand side by factoring out : . Now can you see how to separate?      How to separate the variables  First notice is the same thing as , and we can rewrite the right-hand side by combining the fractions: Now multiply both sides by : Integrating both sides:      Integrating and writing the implicit solution   After integrating both sides, we arrive at: This is the general implicit solution. See the dropdown for all the details.    Full working   Equilibrium solutions: None.   Why are there no equilibrium solutions?  Rewriting the ODE as , we have . Setting gives , which has no solution. So there are no equilibrium solutions.    Separating and integrating:  Since solving explicitly for would require taking a square root (introducing a ) and the problem only asks for an implicit solution, we stop here. The general implicit solution is:       This video goes through the content of this page.    "
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
  "body": " Separation of Variables: Solving Explicitly Tricks  The following example is a little harder to solve for explicitly, but it's certainly doable! It's designed to give you practice executing some things that can come up during separation of variables, so try each step on your own before revealing the solution. And as always, the video at the end is there if you get stuck!   Solving a Separable ODE Explicitly   Solve the following ODE explicitly: .    Step 1: Find equilibrium solutions   There are no equilibrium solutions.    Why?  Rewrite the ODE as , so . Setting gives , which has no solution. So there are no equilibrium solutions.     Step 2: Separate the variables   Multiplying both sides by and separating:      Step 3: Integrate both sides   Integrating the left-hand side: What technique should you use to evaluate ?    This integral can be solved with a -substitution. What do you think you should set equal to?    Work: evaluating the integral  Let , so and : So we now have:      Step 4: Solve for — recognizing the technique   We have . What technique lets us solve explicitly for ?     Complete the square on the left-hand side.  Exactly! Adding 4 to both sides gives , after which we can take a square root.    Divide both sides by .  Dividing by gives , which doesn't isolate .    Take the square root of both sides directly.  Not quite — the left-hand side is not a perfect square yet, so we can't take the square root directly. We need one more step first!    This cannot be solved explicitly for .  It can be solved explicitly! Think about what algebraic technique turns into a perfect square.     Working: completing the square  To complete the square on , we add to both sides (since ): where we absorbed the into on the right-hand side.     Step 5: Write the explicit solution   Starting from , which of the following is the correct explicit solution?      Correct! Taking the square root of both sides gives , and subtracting 2 gives the answer.     Almost — but don't forget the ! When taking the square root of both sides of , we get .     Check the sign! From , subtracting 2 from both sides gives , not .     Not quite — should be inside the square root, not outside. We are taking the square root of the entire right-hand side .     Working: taking the square root  Taking the square root of both sides of : Subtracting 2 from both sides:       This video goes through the content of this page.    "
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
  "body": " Radiocarbon Dating  Separable ODEs actually show up naturally in many applications! We already saw it appear in population modelling. We now look at a similar example with radioactive decay, which follows the principle that the rate at which a radioactive substance decays is proportional to how much of it remains. That single observation is enough to write down a differential equation, solve it, and use it to date artifacts.   Radioactive Decay Model  A material containing atoms of a radioactive isotope decays at a rate proportional to the number of atoms present: where . Radiocarbon dating uses the radioactive isotope of carbon, for which it is known that . By measuring how much remains in an organism after it dies, we can approximate how long ago the organism died.   Notice that is separable. We saw this exact form when we studied population growth. Now let's put it to work.   Practice: Radiocarbon Dating   Bones from an animal are measured to have 50% of the original amount of . Approximate how old the bone is. Work through the following steps. Try each part on your own before checking the solution!     Step 1: General Solution   What is the general solution to ?       Correct! You can arrive at this by separation of variables, but at this point it is worth having this form memorized: a differential equation always has general solution .       Not quite. Check the sign on the exponent. Since and the substance is decaying , the exponent should be negative.       This is not correct. Try separating variables: move to one side and to the other, then integrate both sides.       This would be the solution to , not . The on the right-hand side makes this equation exponential, not linear.       Step 2: Find the Age of the Bone   Using with , and the fact that 50% of the original remains, find the age of the bone.    Let denote the initial amount. We need to find so that . Substituting into the general solution:     We need to find such that . Substituting into : Dividing both sides by : After some standard algebraic manipulations using log and exponent rules, we get:    Stuck on the algebra? Check here.  Taking the natural log of both sides to bring down the exponent:    With , we get This is correct. We can write it in a slightly nicer form using exponent rules:    Why can we write it this way?  Only look here if you want to see the algebra! Using log rules: So .     The ODE for radioactive decay should look familiar.  A connection to the Population Growth Model  The equation is the same structure as the population growth model we studied earlier. The only difference is whether the constant of proportionality is positive or negative, which corresponds to whether the solution has exponential decay (as in the carbon dating example) or exponential growth (such as the population growth model). The main idea of these types of ODEs is:   When the rate of change of a quantity is proportional to the quantity itself, the solution is exponential.   More precisely, whenever you see you can immediately write down the general solution without going through separation of variables each time. At this point in the course, it is worth having this memorized.     Using the ideas from the remark above (no separation of variables needed!), what is the general solution to , and is it exponential growth or decay?     , exponential decay   Correct! Since the equation has the form with , the solution is and the negative exponent means exponential decay.     , exponential growth   Check the sign on . The equation is , so , not . The solution is , not .     , exponential growth   The solution is correct, but think about what a negative exponent does. As , , so this is exponential decay, not growth.     , exponential decay   Be careful -- the constant is not added on, it multiplies the exponential. Adding would mean for any initial condition, which is not right. The correct form is .       This video goes through the content of this page.    "
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
  "body": " Newton's Law of Cooling  Another classic application of separable equations comes from a simple physical observation: the rate at which an object cools is proportional to the difference between its temperature and the temperature of the surrounding environment. This is known as Newton's law of cooling . After this, you'll be able to figure out exactly how long until your coffee goes cold!   Newton's Law of Cooling  Let be the temperature of an object at time , and let be the (constant) temperature of the surrounding environment. Then where is a constant that depends on the object and its surroundings.   Notice that this equation is separable. Do you see it's similarity to the ODE ? You should notice a lot of similarities when solving it, as well! Let's work through a concrete example. We have broken in it up to a lot of steps in the activity, so make sure to refer to the conclusion afterwards to get a summary of the main points.    Practice: The Cooling Pizza   A pizza is taken out of a 400°F oven and placed in a room that is 60°F. After 20 minutes, the temperature of the pizza is 100°F. Work through the following steps to find , the temperature of the pizza as a function of time. Try each part on your own before checking the solution!     Step 1: Set Up the ODE   Which of the following is the correct differential equation for this situation?     , where   Correct! The ambient temperature is °F, and the negative sign with ensures the pizza cools (rather than heats up) when .     , where   Close, but the sign is wrong. With and no negative sign, this equation says the pizza heats up when , which is the opposite of cooling. We need a negative sign to model decay toward the ambient temperature.     , where   The structure is right but is not the ambient temperature here. The room is 60°F, so . The value 20 is the number of minutes, not a temperature.     , where   Two issues here: the ambient temperature should be °F, not 20, and Newton's law of cooling is stated with -- the negative sign is already built into the equation. Allowing would double the negative and give the wrong behavior.       Step 2: Equilibrium Solution   Before solving, what is the equilibrium solution of ? If you need a reminder of how to find equilibrium solutions, refer to .       Correct! Setting gives , so . This makes physical sense: when the pizza reaches room temperature, it stops cooling.       Setting means . Since , we need , giving , not 0.       Remember that 20 is the time in minutes, not a temperature. The equilibrium comes from setting and solving for .       That is the initial temperature of the pizza, not the equilibrium. The equilibrium is where , meaning the pizza is no longer changing temperature.       Step 3: Separate Variables and Integrate   Starting from , separate variables to get What do both sides evaluate to?       Correct! The left side can be seen as a u-sub with , so , giving . Notice that because the coefficient of inside is 1, no extra factor appears when substituting -- the integral works out cleanly without any additional adjustment. The right side integrates to as usual.       Almost -- but don't forget the absolute value signs. We need since could be negative, and the logarithm is only defined for positive inputs.       Check the right side. We are integrating with respect to , so the result is , not just .       The left side is not correct. We have , which is a integral giving , not a power rule integral.       Why Leave on the Right?  You might wonder why we separated variables to get rather than dividing by first. Both are valid, but leaving constants on the right avoids an extra factor on the left side and keeps the algebra a bit cleaner. When in doubt, leave constants on the right.    Step 4: Find the General Solution   Starting from , which of the following is the general solution ? This looks very similar to a situation we have seen before -- refer to for a reminder of how to handle the absolute value and constants.       Correct! Exponentiating both sides and absorbing into a single constant gives , so .       Don't forget to add the ambient temperature back. After exponentiating we get , so we need to add 60 to both sides.       Check the sign on the exponent. We had , so exponentiating gives , not . A positive exponent would mean the temperature grows without bound, which doesn't model cooling.       The constant multiplies the exponential, it does not add to it. When we exponentiate we get , and becomes a multiplicative constant.       Step 5: Use Initial Conditions to Find and   We now have . From the problem we know: Use these values to solve for and , and so we will have the final answer!    Finding the constants to get the final answer  We first use to solve for .   Quick algebra solving for  Plugging in :    So we now have:   Now we use to solve for .   Algebra to find  Plugging in : Recall what log property we use in the last line. Something similar was done in the radiocarbon dating example!   Putting it all together:      Let's summarize everything you just worked through!   Summary of Steps  Here is a recap of what we found at each step:   Step 1 (ODE): The model is , .  Step 2 (Equilibrium): The equilibrium solution is  Step 3 (Integrate): Separating and integrating gives .  Step 4 (General solution): Exponentiating gives the general solution .  Step 5 (Initial conditions): Using and gives and , so     This video goes through the content of this page.    "
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
  "body": " Exercises for Section 1.4    Find the explicit general solution to the following differential equation:            Find the explicit general solution of the given differential equation:            Find the explicit general solution to the following differential equation:            Find the explicit general solution to the following differential equation:      and Remember the general solution needs to include both any equilibrium solutions together with all solutions found from separation of variables.      Consider the separable ODE:      Find all equilibrium solutions, then find the explicit general solution.    Equilibrium: . This together with separation of variables yields the general solution: .      Find the specific solution satisfying .     (the equilibrium solution).      Find the specific solution satisfying .            Find a general implicit solution to the following ODE:            Solve the IVP explicitly:            More to be added for week 2 part of this section.    "
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
  "id": "exercises-1-4-9",
  "level": "2",
  "url": "exercises-1-4.html#exercises-1-4-9",
  "type": "Exercise",
  "number": "1.4.8.8",
  "title": "",
  "body": "  More to be added for week 2 part of this section.   "
},
{
  "id": "sec-linear-first-order-intro",
  "level": "1",
  "url": "sec-linear-first-order-intro.html",
  "type": "Section",
  "number": "1.5.1",
  "title": "Definition of 1st Order Linear ODEs",
  "body": " Definition of 1st Order Linear ODEs  Not all first-order ODEs are separable! Another important class is first-order linear equations. Before we can do anything interesting with them, we first need to recognize what they look like.   First-Order Linear Differential Equation   A first-order linear differential equation is one that can be written in the form where and are functions of only.    As quick example, the following ODE is first-order linear:   The key idea here is that the equation is linear in and : both and appear only to the first power, and never multiplied together. In particular, notice:   No products or powers of and -- terms like or are not allowed.  No compositions involving -- terms like or are not allowed.  The functions and can be anything -- , , constants, and so on -- as long as they depend only on , not on .   Let's explore these ideas in the following non-examples.    . This is not linear: the term is a composition involving , so this cannot be written in the form .   . This is not linear: the left side is a product of and , which is not allowed.   Just as with separable ODEs, it is not always immediately obvious whether an ODE is linear. We will see this in the following example.   Rewriting in Standard Form  Consider the equation . Is this linear? If so, identify and .   Manipulate the ODE to get it in the form .    First move the term to the right: Now divide through by : This is in standard form with So yes, this equation is linear!    Now just a quick check before we get to the fun part!!   Checkpoint: Identifying Linear Equations   Which of the following are first-order linear differential equations? Select all that apply.       Linear. This is already in standard form with and , both functions of only.       Linear. Dividing through by gives , which is in standard form with and .       Not linear. The term is a power of greater than one, which is not allowed in a linear equation.       Not linear. The term is a composition involving , so this cannot be written in the form .       Linear. Dividing through by gives , which is in standard form with and .       This video goes through the content of this page.    "
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
  "body": " Solving First-Order Linear ODEs  We will rely heavily on the product rule, so below is a quick refresher! It also goes into how we specifically use it in this page.  Before diving in, you may want to review the product rule:   Prerequisite: The Product Rule  If and are both functions of , then For example, with and : Now consider and , where is a function of :     Okay so now we know how to recognize when an equation is a first-order linear ODE, let's dig into how to actually solve these things! We'll work through as our guiding example. The steps may seem a bit random at first, but hopefully by the end of this page you'll see why we did each step. The key idea is to find an integrating factor , which is a function we multiply both sides by that lets us rewrite the left-hand side as the derivative of a product. Once we do that, we can simply integrate both sides and solve for .    Solving   It turns out the integrating factor for this equation is . We will see exactly why this is the right choice shortly. For now, let's multiply both sides by and see what happens.     Reversing the Product Rule   Look closely at the left-hand side: . Which of the following is this equal to? You might need to perform the product rule in some of the choices below!       Yes! By the product rule, , which is exactly the left-hand side. We have reversed the product rule, and can now write our equation as        Not quite. , so this gives , which does not match.       Close, but distributing gives . The coefficient on needs to be , not .       No -- this is the derivative of a sum, not a product. We need the product rule here.       What is the Next Step?   We now have The left-hand side is a derivative. What should we do next to solve for ?   Make sure to read the solution feedback by clicking the right answer to see how to finish solving for y.      Integrate both sides with respect to .   Exactly. Integrating both sides gives and dividing by yields The integral on the right requires integration by parts -- we will return to computing it fully later in this section.     Differentiate both sides with respect to .   Differentiating would make things more complicated. Since the left-hand side is already a derivative, we want to undo it by integrating.     Divide both sides by .   Dividing is part of the last step, but we are not quite there yet. The left-hand side is , not . We need to integrate first, then divide.     Multiply both sides by .   Multiplying by is equivalent to dividing by , which comes after integrating, not before.       Let's take stock of what just happened, because the structure here is the key to solving any first-order linear ODE.   Step 1. We multiplied both sides by the integrating factor .   Step 2. This allowed us to recognize the left-hand side as by reversing the product rule.   Step 3. With the left-hand side written as a single derivative, there is no term to deal with separately. We simply integrate both sides and solve for .  The whole game is choosing the integrating factor correctly so that Step 2 works. Let's see how to do that in general.    So do we need to guess and check for an integrating factor every time? Not at all! It turns out that for any first-order linear ODE the integrating factor is always This is precisely what is needed to rewrite the left-hand side in the form , which is what allows us to integrate both sides and solve for .  If you feel like it now, you can try working through why this is true by multiplying on both sides of yourself. You can check the justification now, or later after you've had more practice with solving these ODEs!   Justification of the Integrating Factor (optional to read now)  Multiply both sides of by : Now look at the left-hand side. By the product rule and the chain rule: which is exactly the left-hand side. So we can write: From here, integrate both sides and solve for .     Solution of a First-Order Linear ODE   The general solution of the first-order linear equation can be found by multiplying both sides by the integrating factor  which allows the equation to be rewritten as Integrating both sides and solving for gives the general solution      Let's connect this back to our example . Here and , so the integrating factor is which is exactly what we used in the exploration above. The general solution takes the form where we evaluated using integration by parts.  The theorem tells us this approach works for any first-order linear ODE, not just this one. The only thing that can get in our way now is if the integrals that appear are difficult to evaluate!    This video walks through the content of this section.    "
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
  "body": " First-Order Linear ODEs: Standard Examples   Okay so we have figured out that we have some sort of magical integrating factor to help us solve first-order linear ODEs. It's time to make sure we understand how to solve problems with it! In this section we walk through two examples that highlight techniques that come up again and again when solving first-order linear ODEs. For the first example, follow along and work out each step as we go. The second example will get you trying much of it on your own!    Solve  Solve the first-order linear ODE .    Rewrite in standard form by moving the term to the right-hand side.  Compute the integrating factor .  Multiply both sides by , recognize the left-hand side as a single derivative, then integrate both sides.      Step 1: Standard form. Move to the right-hand side: So and .   Step 2: Integrating factor.     Step 3: Multiply both sides by .  The left-hand side is by the product rule, so we can write:    Step 4: Evaluate the integral     U-substitution details  Let , so , which means . Then:     Step 5: Solve for . Divide both sides by :       A Shortcut  Look at what just happened in the previous example. Once we had , we multiplied through, recognized the left-hand side as by the product rule, integrated both sides, and solved for . Those intermediate steps will always play out the same way, as the integrating factor is defined precisely to make the left-hand side collapse like that every single time.  So going forward, once you have , you can skip straight from the original ODE to without writing out the multiplication, product rule collapse, and integration steps in between. You will see this in action in the activity below.     Practice: Solve   Try each part on your own before checking the solution.     Finding the Integrating Factor   For the ODE , we have . Which of the following correctly gives the integrating factor with the integral evaluated?       Correct! We compute , so . We will simplify this in the next part.       Not quite -- this skips the integral. We need , not . Make sure to integrate first.       This would be the integrating factor if , but here . Remember: .       Close -- , but there is a factor of in front. So .        Simplifying the Integrating Factor   From the previous part, . Simplify this completely. Which of the following is correct?       Correct! Using the log property , we get , since is always non-negative and the absolute value drops.       Not quite. Recall that , not . The exponent rule here is .       This would follow from , but we have . The factor of becomes the exponent on , giving .       This is the integrating factor from Example 1, not this problem. Here the exponent is , and .        Finishing the Solution   From the previous parts: the ODE is and . Using the shortcut finish solving for .    Substituting and :      The general solution is . The key steps were identifying , computing and simplifying the integrating factor to , and then applying the shortcut to jump directly to integrating the right-hand side.      Where Does Go?  In the last step above, we had and divided both sides by . This gives  not  . The constant appears when you integrate the right-hand side, and it must be divided by along with everything else in that last step. Forgetting to carry the through to the term is one of the most common mistakes in this method, so be careful!     This video walks through the examples on this page.    "
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
  "body": " First-Order Linear ODEs: A Harder Example    Now for some practice solving a first-order linear ODE. This will help reinforce all the ideas we just went through, plus we will be getting our hands a little messier!    Practice: Solve   In this activity we work through solving a first-order line ODE that is slightly more involved than the previous examples The first few parts will reinforce steps we already discussed, so this will be a great way to practice these steps. The only big difference is that in the last step, where the final integral is a little messier.     Identifying and   Consider the ODE Which of the following correctly identifies and when this equation is written in standard form?      and    Correct! In standard form : . Dividing both sides by gives and .      and    Not quite. In standard form : . The coefficient on must be 1, so you need to divide every term by first.      and    Close, but not quite. In standard form : . is correct, but needs to be divided by too -- every term gets divided.      and    Close, but not quite. In standard form : . is correct, but also needs to be divided by .        Finding the Integrating Factor   Now that we have , find the integrating factor Stop after integrating (the next part will simplify further).     Recall that .  To evaluate use a u-sub (what should u be?)  Don't simplify the resulting yet, that's the next part.     We compute using a u-substitution with .   U-substitution details (read if stuck)  Let , so , which means . Then: (We drop the absolute value since always, and drop since we only need one antiderivative.)   So, , meaning the integrating factor is       Simplifying the Integrating Factor   From the previous part, . Which of the following correctly simplifies this?       Correct! Using the log property , we get .       Not quite. The is in the exponent of , not a coefficient out front. Use the property with .       Close in structure, but the exponent should be , not . We have .       Remember that . Use the log property to simplify.        Finishing the Solution   The next steps -- multiplying by , recognizing the product rule collapse, and integrating -- always work out the same way. So we can always jump directly to:  Fill in and and finish solving for .     Substitute and into to get your first line.  Simplify the integrand -- notice that . Then use the substitution .     Substituting in and :    U-substitution details (read if stuck)  Let , so , meaning . Then:    So we have:      Let's recap the steps for this problem:   Step 1. Divide through by to get standard form, giving and .  Step 2. Find . The integral required a u-substitution, giving , which simplifies via log rules to .  Step 3. Jump directly to and evaluate the right-hand side, which required another u-substitution.  Step 4. Divide both sides by to solve for . Remember that gets divided by , too! The final answer is , not  .     This video walks through the example on this page.    "
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
  "id": "sec-mixing-teaser",
  "level": "1",
  "url": "sec-mixing-teaser.html",
  "type": "Section",
  "number": "1.6.1",
  "title": "Setting Up Mixing Problems: Rate In, Rate Out",
  "body": " Setting Up Mixing Problems: Rate In, Rate Out   In this section and the next, we tackle a classic family of applications called mixing problems . To give you a sense of what we are up against, here is one of the problems we will eventually solve.   A Mixing Problem (Coming Soon!)  There is a tank with 100 gallons of water that initially contains 20 kg of salt. Water with 5 kg of salt per gallon is pumped into the tank at 10 gal\/min. The mixture is kept uniform by stirring, and water leaves the tank at 5 gal\/min. Suppose is the amount of salt in the tank (in kg) as a function of time in minutes. Set up a differential equation and solve for .   We will solve this in a later page. For now, just read it and let it sink in!    If you are like most people, reading that probably made your brain spin a little. There is a lot going on: salt is entering the tank, salt is leaving the tank, and the volume of water is changing over time. And it's all happening all simultaneously! The amount of salt leaving depends on how much is currently in the tank, which is itself changing because of what is entering. Everything is tangled together! How could we possibly even begin to set up an ODE for this?  The key is to step back and think about what is really happening: the amount of salt in the tank is changing over time, and that change is driven by two competing forces. There is stuff coming in, and stuff going out. Before we can untangle the mixing problem above, we need to establish the fundamental principle that underlies all of these problems.    Rate In, Rate Out  Suppose is the amount of some quantity at time , and suppose we can separately identify the rate at which is entering a system and the rate at which it is leaving. Then     Let's convince you of this principle with a familiar idea first.   A Bank Account  Let be the balance (in dollars) in a bank account at time (in months). Suppose you earn a salary of $3000 per month deposited directly into the account, and your monthly expenses total $2200. Set up a differential equation for .  Before you even learned about ODEs, you would probably identify that the net rate of change equals . The balance grows by dollars per month. Now let's rephrase this in terms of ODEs: The balance grows at a steady per month, giving . It is a simple problem, but the same principle applies even when things get much messier.    This deceptively simple principle is what makes mixing problems tractable. Instead of staring at a complicated situation and trying to write down one equation for everything at once, we break it into two separate questions: what is the rate in, and what is the rate out? Then we just subtract. As we will see in the mixing problems ahead, figuring out those two rates takes some careful thought, especially when the concentration of the mixture is changing over time. But the fundamental principle stays the same. Something that seems hopelessly tangled at first becomes manageable once you know where to start.  In the next page, we will use this idea to fully solve a simpler mixing problem. Then we will return to the more complicated example above and tackle it too.    No Video for This Page  There is no video for this page. The next page has a video walking through the first mixing problem.   "
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
  "body": " Mixing Problem: Constant Volume    Before we tackle that beast of a mixing problem we previewed earlier, let's start with a simpler one. We will use the principle . The only tricky part will be using the information we are given (the rate water leaves and the current amount of salt in the tank) to figure out the rate salt leaves.    Mixing Problem with Constant Volume and Pure Water Entering   There is a tank with 100 gallons of water that initially contains 20 kg of salt. Pure water is pumped into the tank at 5 gal\/min. The mixture is kept uniform by stirring, and the (salty) water leaves the tank at 5 gal\/min, thereby keeping the volume of water constant at 100 gallons. Suppose is the amount of salt in the tank (in kg) as a function of time in minutes. Set up a differential equation and solve for .   We know that . Let's figure out each piece.    Part 1: Rate Salt Enters the Tank   Pure water is pumped in at 5 gal\/min. What is the rate at which salt enters the tank?    Don't over think it! How much salt is in pure water?    Since pure water is entering, there is no salt in the incoming water. So the rate salt enters is       Part 2: Rate Salt Leaves the Tank   We need to use the next two pieces of information for the rate out:   Water leaves the tank at 5 gal\/min.    The volume of water in the tank remains at 100 gallons (as the water entering = water leaving)   What is the rate at which salt leaves the tank? This will take more work, and the answer will also involve , the quantity of salt currently in the tank!    The rate salt leaves is not simply 5 gal\/min -- that is the rate water leaves. To get the rate salt leaves, think about the concentration of salt in the tank: The concentration is the amount of salt divided by the volume of water.    The concentration of salt in the tank at time is kg\/gal, and this is the stuff leaving the tank! Multiplying by the flow rate out for water gives the total rate out of salt: which simplifies to kg\/min.   Unit check          Part 3: The ODE and Solution   The hard work is done! We have identified rate in and rate out. Combining them: Apply the initial condition (the initial amount of salt in the tank) and solve for .  The meat of the problem is done, and there is nothing new involved in actually solving the ODE -- this is just a standard separable ODE (it is also first-order linear, so you can use either method!). For completeness, the solution is below.    Solving the ODE (can skim or skip for now)  Separating and integrating: Applying the initial condition : So the solution is        Key Takeaways  The key insight was computing the rate out carefully: where in this problem gallons (constant). A similar idea applies to the rate salt is entering, but the rate in was simply 0 as only pure water was coming in. In the next page, we tackle a harder version where the volume is no longer constant and salty water is entering, which makes both the setup and the solving more involved.     This video walks through the mixing problem on this page.    "
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
  "body": " Mixing Problem: Changing Volume    We are finally ready to revisit the beast of a problem from the intro page! There is quite a bit to parse, and the first time through a problem like this takes some patience. But the main patterns repeat, and with practice these become routine. After working through the four parts below, make sure to check the Key Takeaways at the end which ties everything together neatly.    Mixing Problem with Changing Volume and Salty Water Entering   There is a tank with 100 gallons of water that initially contains 20 kg of salt. Water with 5 kg of salt per gallon is pumped into the tank at 10 gal\/min. The mixture is kept uniform by stirring, and water leaves the tank at 5 gal\/min. Suppose is the amount of salt in the tank (in kg) as a function of time in minutes. Set up a differential equation and solve for .  As before, . Let's figure out each piece.     Part 1: Rate Salt Enters the Tank   This time, salty water is being pumped in -- not pure water! Water with 5 kg of salt per gallon enters at 10 gal\/min. What is the rate at which salt enters the tank?    Rate salt enters = (salt concentration of incoming water) × (water flow rate in). You have both pieces of information in the problem statement.    The incoming water has a salt concentration of 5 kg\/gal, and water flows in at 10 gal\/min. So:       Part 2: Rate Salt Leaves the Tank   A big difference in this example is that the volume of water in the tank, , is changing. However, the same principle as in the previous example applies. Here is the relevant information:   Water leaves the tank at 5 gal\/min (this is the water flow rate out).  represents the volume of water in the tank at time , which is currently unknown.   Without solving for yet, which of the following correctly gives the rate salt leaves the tank ?       Correct! The salt concentration in the tank is kg\/gal, and the water flow rate out is 5 gal\/min. So rate out = kg\/min.       This was the rate out in the previous example, where the volume was constant at 100 gallons. Here the volume is changing, so we need in place of 100.       This is the rate salt enters the tank, not the rate it leaves. The rate out depends on the current concentration of salt in the tank, which involves .       Close -- the concentration is right, but the water flow rate out is 5 gal\/min, not 10. The 10 gal\/min is the flow rate in.        Part 3: Finding   From Part 2, the rate out involves , which we still need to find. Water flows in at 10 gal\/min and out at 5 gal\/min, with an initial volume of 100 gallons. Find .    The same rate in, rate out principle applies to the volume of water: Use the initial condition .     Applying gives , so       Part 4: The ODE and Solution   Putting it all together with : Rewriting in standard form: This is a first-order linear ODE! The hard work is done, the solution to the ODE is below.    Solving the ODE (can skim or skip for now)  We have and . The integrating factor is: Applying the shortcut: Dividing by : Applying : So the solution is        Key Takeaways: Setting Up Mixing Problems  The mixing problems on this page and the previous one follow the same fundamental structure. The two rates you always need are: When the volume is changing, you need to find first using the same rate in, rate out principle applied to volume -- then plug it in. Once the ODE is set up, it is first-order linear, and you already know how to handle that!     This video walks through the mixing problem on this page.    "
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
  "id": "ch-chapter-two",
  "level": "1",
  "url": "ch-chapter-two.html",
  "type": "Chapter",
  "number": "2",
  "title": "Chapter 2: Coming soon",
  "body": " Chapter 2: Coming soon   Chapter 2 has not been added yet    "
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
