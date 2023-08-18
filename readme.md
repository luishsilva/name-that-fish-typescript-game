# Name That Fish

In this assignment we will be building a guessing game called "Name That Fish" where you guess the type of fish of a picture with a `controlled form` in react.The name of the game here is to KEEP YOUR STATE CLEAN AND AS DERIVED AS POSSIBLE.

## Learning Objectives

In order to complete this assignment, a student should be able to...

- use controlled forms to create an interface for submitting data
- use `onChange` handlers to track input values
- use `onSubmit` handlers to make form submissions
- pass down state setters in order to change the state of a parent component
- choose where the data for an application should live based off of the one way data binding model that react provides

## Setup

To get this project setup, you should:

- Run `npm i` to install all dependencies
- Run `npm run dev` to run the project

## In order to pass this assignment you should

### Standard Requirements

- [ x ] Setup eslint
- [ x ] Pass all linting checks

- To check if linting passes, run `npm run lint`

- [ x ] Format code with prettier
- [ x ] State should not be duplicated
- [ x ] Variables should be named logicially
- [ x ] No unneccessary console logs
- [ x ] No commented out blocks of code (Code comments are fine)
- [ x ] Setup a github repository with your submission as the `main` branch, you will submit a link to this for grading (NOT A ZIP FILE)

### Typescript Specific Requirements

- [ ] pass **ALL** typechecks
  - Check by running `npm run typecheck`
- [ ] DON'T USE `any`.... OR ELSE
- [ ] Keep your types clean and in a logical location
- [ ] Prop Types for components should be colocated with their components
- [ ] Shared types should live in a file that says `types` somewhere in it's name
  - [ ] example: `types.ts` should work fine
- [ ] Unshared types should live in the component they are used in

### Assignment Specific Requirements

- [ x ] Get your code to function EXACTLY like [This Site](https://name-that-fish-deployed.vercel.app/)
- [ ] Keep state as CLEAN AS POSSIBLE
- [ ] Place `initialFishes` in the correct component
- [ ] Derive all pieces of state that can be derived
- [ x ] Don't mutate state directly, only use a state setter
  - example: don't use .splice on an array that you are rendering
- [ ] Keep all constants (variables that do not change over time) outside of components
- [ x ] Form must reset after submitting
- [ x ] Page must NOT reload after submitting
- [ x ] ClassApp Code and FunctionalApp Code should be treated as seperate apps as far as state goes
