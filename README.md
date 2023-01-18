# Book Search Engine

## Technologies
  
Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API. Deployed to Heroku.  

## Table of Contents  
-[Project Description](#description)  
-[Installation](#installation)  
-[User Story](#user-story)  
-[Acceptance Criteria](#acceptance-criteria)  
-[Mock Up](#mock-up)  
-[Contributions](#contributions)       
-[License](#license) 

## Description

Book search engine with the ability to save and delete books when logged in. Built with react.js and node.js, to help showcase my ability to refactor rest API to React.

## User Story

AS AN avid reader  
I WANT to search for new books to read  
SO THAT I can keep a list of books to purchase

## Acceptance Criteria

GIVEN a book search engine  
WHEN I load the search engine  
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
WHEN I click on the Search for Books menu option  
THEN I am presented with an input field to search for books and a submit button  
WHEN I am not logged in and enter a search term in the input field and click the submit button  
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site  
WHEN I click on the Login/Signup menu option  
THEN a modal appears on the screen with a toggle between the option to log in or sign up  
WHEN the toggle is set to Signup  
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button  
WHEN the toggle is set to Login  
THEN I am presented with two inputs for an email address and a password and login button  
WHEN I enter a valid email address and create a password and click on the signup button  
THEN my user account is created and I am logged in to the site  
WHEN I enter my account’s email address and password and click on the login button  
THEN I the modal closes and I am logged in to the site  
WHEN I am logged in to the site  
THEN the menu options change to Search for Books, an option to see my saved books, and Logout  
WHEN I am logged in and enter a search term in the input field and click the submit button  
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account  
WHEN I click on the Save button on a book  
THEN that book’s information is saved to my account  
WHEN I click on the option to see my saved books  
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account  
WHEN I click on the Remove button on a book  
THEN that book is deleted from my saved books list  
WHEN I click on the Logout button  
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

## Mock Up  

![Alt text](client/src/21-mern-homework-demo-01.gif)    
![Alt text](client/src/21-mern-homework-demo-02.gif)  
![Alt text](client/src/21-mern-homework-demo-03.gif)  

## Deployed Site
![Alt text](client/src/screencapture-evening-chamber-79655-herokuapp-2023-01-17-17_20_34.png)  
https://evening-chamber-79655.herokuapp.com/

## Walkthrough

https://drive.google.com/file/d/1HGS6NwDhPWe21tfFdzDCNw0TB0kHLZkE/view

## Contributions

https://github.com/jennnmarshall   

https://github.com/GarrettA01   

https://github.com/mgetz34 

https://github.com/AndyLaBorde

## Starter Code to Refactor

https://github.com/coding-boot-camp/solid-broccoli  

## License

License: MIT
