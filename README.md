# Learning React Native - with expo

You need to use <View> tags instead of divs to wrap up code. Views get compiled to native views (native ios, native android) but your JavaScript code is going through on via a JS core virtual machine instead.

There is no css in react native! The styling language used in react native is similar to css but uses javascript stylesheet objects.
When initializing the app you can press a to start the android emulator

Instead of calling a function as goalInputHandler() from within jsx, you only want it to get called when the element is modified, and that's why you call it as goalInputHandler without parenthesis.
Onchange on your element will call the function to change the text, but you always need to set the value to the defined state in order to bind the state to the function call.

2 options to set state on the goals array:
  ``` 
  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal]);
  };
  ```

> or

 ```
 const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
  };
```

* For very long lists, don't use scrollview - its best only for about 15 elements - if you have a thousand elements the scrollview is inefficient. Use FlatList instead

[Full tutorial by Academind here!] (https://www.youtube.com/watch?v=qSRrxpdMpVc)