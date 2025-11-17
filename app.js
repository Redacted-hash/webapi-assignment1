const htlmanagement = require('./limqirong_hotelmanagement.js');

// Add rooms 
htlmanagement.addRoom(101);
htlmanagement.addRoom(102);
htlmanagement.addRoom(101); // duplicate — will return false 
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
