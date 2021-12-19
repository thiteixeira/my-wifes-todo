# Todo App

This is a different version of a common Todo App. The motivation for
this project is my wife's own todo app, which is a very long Google Doc
where she keeps tracks of daily taks, birthdays, payments, bank balances, and
anything that you can imagine.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with Typescript. I am making use of the Hooks, Context, and Reducer
APIs, as well as Material UI.

I am planning to make this app fullstack so data can persist. Until then, feel free to play around with it.

## Anatomy of a Todo

```js
interface Todo {
  id: string;
  date: Date;
  type: TodoType;
  description: string;
  isPriority: boolean;
  isCompleted: boolean;
}

// Mostly used to add icons
enum TodoType {
  Birthday = "BIRTHDAY",
  Task = "TASK",
  Reminder = "REMINDER",
  Financial = "FINANCIAL",
  Other = "OTHER"
}
```
