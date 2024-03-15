function shout(string) {
   let stringNameUpper= string.toUpperCase()
    return stringNameUpper
  }
 function whisper(string){
    let stringNameLower= string.toLowerCase()
    return stringNameLower
 }
 function logShout(string){
    let stringNameUpper= string.toUpperCase()
    console.log(stringNameUpper)
 }
 function logWhisper(string){
    let stringNameLower= string.toLowerCase()
    console.log(stringNameLower)
 }
 function sayHiToHeadphonedRoommate(string){
    
   if (string === string.toUpperCase()) {
    return "YES INDEED!"
    } 
   else if (string === string.toLowerCase()){
    return "I can't hear you!" 
    }
   else if (string ==="Let's have dinner together!"){
    return "I would love to!" 
    }
}
    