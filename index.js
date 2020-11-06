// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title,description) {
  let task = {
    title: title,
    description: description,
    complete: false,
    completeTask: function() {
      this.complete = true;
    },
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
  };
  return task;
};

// DRIVER CODE BELOW
const tasks = [];
tasks.push(newTask("Clean Cat Litter","💩")); // task 0
tasks.push(newTask("Do Laundry","👕")); // task 1

tasks[0].logTaskState(); // Clean Cat Litter has not been completed
tasks[0].completeTask();
tasks[0].logTaskState(); // Clean Cat Litter has been completed
