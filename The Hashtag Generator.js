function generateHashtag (str) {
    
  if(!str || str.trim() === '') {
    return false
  }
  
        let strLst = str.trim().split(' ');
      
        let capitalWords = strLst.map((string) => {
           return (string.charAt(0).toUpperCase() + string.slice(1));
        })
        
        const hastag = ('#' + capitalWords.join(''));
      
        if(hastag.length > 140){
            return false;
        }else {
            return hastag;
        }
    
}
generateHashtag()
