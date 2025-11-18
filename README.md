# Assignment 1 : Hotel Management

This module simulates a hotel room management system using an array to simulate the manipulation of data. It contains functions to add new rooms, retrieve the guest names living in a occupied room, retrieve list of available rooms that are vacant, remove guests from their room, get the total number of existing rooms, and assign guests to a room. 

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.


## Installation
Install Node JS: https://nodejs.org/en/ . Download the [LTS] version.
After installation, open command prompt and type the command 

node -v. You should see the version number of the Node JS that you have just installed. Please note that the version number might be different at the time of installation.

## Preparation
This is for the recreation of an app.js file for testing . Use the require function to link the relevant node module. Put the following line of code at the first line of the file.
```js
const htlmanagement = require('./limqirong_hotelmanagement.js');
```
## Testing 
If you wish recreate the app.js file to test out the functions, you may add the following lines of code below the htlmanagement variable in the app.js file. To start the test, type [node app.js]() in the terminal.Ensure that the terminal has the correct path to the file when typing the command.

```js
// Add rooms 
htlmanagement.addRoom(101);
htlmanagement.addRoom(102);
htlmanagement.addRoom(101); // duplicate — will return false(output will not appear on terminal) 
htlmanagement.addRoom(104);

// Add guest to the specified room
htlmanagement.addGuestToRoom(101, "Alice"); // will be added but no output on terminal
htlmanagement.addGuestToRoom(102, "Bob");   // will be added but no output on terminal
htlmanagement.addGuestToRoom(103, "Charlie"); // false. will not be added(room don't exist)

// Find name of guest of the specified room
console.log(htlmanagement.getGuestName(101)); // "Alice"
console.log(htlmanagement.getGuestName(999)); // false (room don’t exist)
console.log(htlmanagement.getGuestName(102)); // "Bob"

// Available rooms
console.log(htlmanagement.getAvailableRooms()); //[ { roomId: 104, status: 'vacant', guestName: null } ]

// Remove a guest
htlmanagement.guestRemoval(101);
console.log(htlmanagement.getAvailableRooms()); 
// [ { roomId: 101, status: 'vacant', guestName: null },{ roomId: 104, status: 'vacant', guestName: null }]


// Room count
console.log(htlmanagement.getNumberOfRooms()); // 3
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

Output :

Assuming the name of the guest name added to room H01 is Alice
```powershell
Alice
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

Output :

```powershell
[ { roomId: H01, status: 'vacant', guestName: null } ]
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

Output:

Depends on the number of existing rooms, but will show up as an integer

```powershell
1
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

## References

[PoliteMall](https://nyplms.polite.edu.sg/)
[Accliam Hotel](https://www.acclaimhotel.ca/)
