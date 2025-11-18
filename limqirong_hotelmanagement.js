module.exports ={
    rooms : [], //note: each element in the array contains roomId , status and guestName field
    


    //To add a new room
   

    addRoom(roomId) {
        if(!roomId){    
            return false;
        }  
                
        else if (!this.rooms.find(room => room.roomId == roomId)) { //Checks if the inputted Id is duplicated with the existing room Ids before
            this.rooms.push({ roomId, status: "vacant", guestName: null }); //pushing the defined roomId,default status(vacant) and null for guest name
            return true;
        }
        return false;
    },

    
    getGuestName(roomId){           
        const room = this.rooms.find(room => room.roomId == roomId);
        //retrieve name of guest occupying the room once the room is retrieved via roomid and status has been checked as occupied
        if(room && room.status == "occupied"){
            return room.guestName;
        }
            return false;
    },

    //retrieve list of available rooms.
    getAvailableRooms(){           
        return this.rooms.filter(room => room.status == "vacant");     //returns list of rooms that have the status "vacant"
    },

    //remove guest from room 
    //will check the roomId inputted,check if it exists, and change the status of the room to vacant and remove the guest name if it exists
    guestRemoval(roomId) {         
        const room = this.rooms.find(room => room.roomId == roomId) ;        
        if(room == null){
            return false;
        } 
        room.status = "vacant";
        room.guestName = null;                                        
        return true;
    },

    // Get total number of existing rooms using the .length method
    getNumberOfRooms(){               
        return this.rooms.length;   
    },

    // Add a guest to a vacant room
   
    
    addGuestToRoom(roomId, guestName){
        const room = this.rooms.find(r => r.roomId == roomId); //checks the provided roomId beforehand to see if the status of that room is vacant. 
        if (room && guestName && room.status == "vacant") {
            //Then it fills up the guestName with the provided guestName and change the status of the room to occupied
            room.guestName = guestName;                     
            room.status = "occupied";                    
            return true;
        }                            
        return false; 
    }
    

}
