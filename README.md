
# Project Title

A brief description of what this project does and what is the advantage in this project


# Project Live Link
https://course-registration-online.netlify.app/

## Features

- Course Listing and Details:
Users can view a list of available courses.
Clicking on a course shows its details including the course name, description, author, cover image, etc.


- Dynamic Content Rendering:
The project dynamically generates content based on the provided JSON data.


- Credit Information:
Each course has credit and price information.
Users can easily see how much a course costs and how many credits it requires.


- Toast Notifications:
You do not selected the same course two times, if you selected tow times at the same course you will see the alert message. 


- Selected Button:
You selected maximum 20 credits at a time. And minimum 0 remaining hour at a time. You do not selected same course two times nd over the credits more then 20


## Discuss about state 
- In this project, state management can be handled using the built-in useState and useEffect hook. n state management by allowing you to declare state variables directly in functional components. This reduces boilerplate code and makes the codebase more readable. We can use multiple useState hooks within a single component to manage different pieces of state. 

Using useState hook to stored to fetch data.Then we show the data dynamically using loop in the carts components.

We using useState hook to select the courseName name. If we click the select button a piece of state name courses and the functions setCourseName to update it. And the selected name store the coursesName value. And we pass the value in card Components.

And the same way we use to totalCredit, remainingHour to stored the course total credit and total remaining hour to store the data and set to carts section.

