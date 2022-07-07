# Probation day for Front-end Engineers

Programming Task

## Feature Requirements
TrustYou has a database of reviews from hotels. Every review contains the text itself (text, title, etc.) and also some metadata as creation time, age of the guest, overall score, etc. With this data, we have created a simple API with 2 main endpoints:

- Distribution of answers collected for the following questions: `overall_score`, `guest_type`, `guest_age`, `guest_nationality` without any filter. A single response should be structured like this:
  + for overall score we have two reviews where score is 5, three reviews where score is 4
  + for guest type we have three reviews where guest type is business, we have one review where guest type is private
  + ...
- List of reviews filtered by an answer given to a concrete question. Queries should be structured like this:
  + give me all reviews where overall score is 5
  + give me all reviews where guest type is business
  + ...

You can find the contract of the API in this URL:

<https://frontend-technical-test-api.integration.nbg1-c01-stag.hcloud.trustyou.net/docs>

For this task we are asking for the implementation of a small frontend SPA application that:

- Displays distribution of the answers given to the questions mentioned above. Please use a table per question where one column would show us an answer type and the second column would show us the amount of reviews found for a given answer.
- Displays distribution of the answers in a pie chart for each question
- Provides drill down functionality:
  + Click an answer of a given question in the table
  + Display all reviews that match this answer
  + For each individual review display title, author, creation time (please display the creation time in ISO 8601 format)
  + Make sure the user can get back to the distributions view with one click
- Please add unit tests for your components

## Tech Stack Requirements

- Javascript based SPA application on the frontend. Any JS based frontend technology and JS version will do. Preference - React.
- No build infrastructure for the web application. There will not be time for this (hardcode external JS dependencies)
