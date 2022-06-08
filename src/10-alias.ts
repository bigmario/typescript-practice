(()=>{
  type UserID =  string | number;

  let userId: UserID;

  // Literal Types
  type Sizes = 'S'|'M'|'L'|'XL'

  let shirtSize: Sizes;
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'
  // shirtSize = 'ddddd'
  shirtSize = 'S'

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting(111, 'S');
  greeting('2222', 'M');
})()
