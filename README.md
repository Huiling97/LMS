# Overview

This application is built using React and Vite.

It consists of two main components:

- Client: Located in the src/client directory, responsible for rendering the user interface (UI).

- Service: Located in the src/service directory, responsible for interacting with the MySQL database hosted on Aiven to fetch and manage data.

# How to Start the Application

Install the dependencies

`npm install`

Starting the server

`npm run dev:service`

Starting the client

`npm run dev:client`

# User Accounts

- Instructor Account: Provides access to only the courses, topics, and entries data.

- Admin Account: Has full access to all available data, including login activities and management actions.

# Design Decisions

- The application serves as a Learning Management System (LMS), which is intended to display and manage data in an intuitive and efficient manner. To achieve this goal, the following design decisions were made:

- UI Design: I used the Ant Design library to create a sleek and user-friendly interface. Its pre-built components streamline the development of a polished and cohesive UI.

- Home Page Layout: The home page displays data that is most relevant to the logged-in user:

  - Admins: The dashboard shows an overview of login activities (eg. recent login data, number of active users) and management actions (eg. exporting reports).

  - Instructors: Instructors can view their assigned courses and subscribed topics.

- Data Organization: Data is grouped logically (eg. courses, topics, and entries) to help users draw connections and make informed decisions quickly

# Future Improvements

The application can be further improved with the following features:

- Personalized Home Page: Customize the home page to show more relevant and actionable data based on user preferences or activity.

- Data Filters: Add filters to allow users to sort and view data by popularity, frequency, or other criteria.

- Deeper Data Connections: Enhance the relationships between related data (eg. linking user to login data) for better context and insights.

- Mobile Responsiveness: Ensure the UI is fully responsive for mobile devices, particularly for instructors and admins on the go.
