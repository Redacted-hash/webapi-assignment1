# Assignment 1 : Hotel Management

This module simulates a hotel room management system using an array to simulate the manipulation of data. It contains functions to add new rooms, retrieve the guest names living in a occupied room, retrieve list of available rooms that are vacant, remove guests from their room, get the total number of existing rooms, and assign guests to a room. 

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

## Preparation
Create an app.js file . Use the require function to link the relevant node module. Put the following line of code at the first line of the file.
```js
const htlmanagement = require('./limqirong_hotelmanagement.js');
```
## addRoom
Purpose:

Adds a new room to the array.

Parameters:

The function is expecting a roomId(Can be an integer or string) which represents the unique ID of the room.

Returns:

true if the room was added successfully.A room element with roomID,status and guestName details will be created.

false if the roomId is missing or already exists.

Usage :

```js
console.log(htlmanagement.addRoom("H01"));
```

## getGuestName
Purpose:

Retrieves the name of the guest occupying the room that the user is checking.

Parameters:

The function is expecting a roomId (Can be an integer or string) which represents the unique ID of the room.

Returns:

Guest name if the room is occupied.

false if the room is vacant or does not exist.

Usage :

```js
console.log(htlmanagement.getGuestName("H01"));
```

## getAvailableRooms
Purpose:

To return a list of all the rooms that are currently vacant.

Returns:

An array of room objects with status "vacant".

Usage :

```js
console.log(htlmanagement.getAvailableRooms());
```

## guestRemoval

Purpose:

Removes a guest from a previously occupied room and marks the status as vacant.

Parameters:

The function is expecting a roomId(Can be an integer or string) which represents the unique ID of the room.

Returns:

true if the room is found and guest name will become null.

false if the room does not exist.

Usage: 

```js
console.log(htlmanagement.guestRemoval(101));
```

## getNumberOfRooms

Purpose:

Retrieves the total number of rooms created in the system.

Returns:

Number of rooms as an integer.

Usage:

```js
  console.log(hotel.getNumberOfRooms());
```

## addGuestToRoom 

Purpose:

Assigns a guest to an existing vacant room.

Parameters:

1. The function is expecting a roomId(Can be an integer or string) which represents the unique ID of the room.

2. guestName (string): Name of the guest.

Returns:

true if guest successfully added.

false if room doesn’t exist, is occupied, or guest name is missing.

Usage:
```js
console.log(htlmanagement.addGuestToRoom(101, "Alice"));
```

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References
Provide the references that you have used to support your assignment. 
