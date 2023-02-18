# Data layer

## Data

- List of robots
  - name: string
  - image: string
  - speed: number
  - endurance: number
  - creationDate: date

## Data modifications

- Load robots
- Load a robot
- Add a robot to robot list
- Delete a robot from list of robots
- Change property of a robot

# Components

## App

- Shows Layout component

## Layout

- Shows Robots List component

## Header

- Shows the name of the app inside a heading
- Shows the Navbar component

## NavBar

- Shows the link to go to the 'Create robot' page

## Robots list

- Receives a list of robots
- Shows a robot card for each robot in the list of robots
- Sends a robot to each Robot Card

## Robot card

- Receives a robot
- Receives the function to delete a robot
- Shows robot name inside a heading
- Shows a button component to delete that robot
- Sends an icon to the Button component that deletes that robot

## Form

- Receives the add robot action
- Shows an input for the new robot's name with label 'Name'
- Shows an input for the new robot's image with label 'Image'
- Shows an input for the new robot's speed with label 'Speed'
- Shows an input for the new robot's endurance with label 'Endurance'
- Shows a button 'Create' to submit the form
- Executes the received add robot action on submit

## Button

- Receives an icon
- Receives an action
- Executes the received action on click
