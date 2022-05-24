// const Orange = require('./orange')
// const ora = new Orange()
class OrangeTree {
constructor(age = 0, height = 0) {
this.age = age;
this.height = height;
this.oranges = []
}
  passGrowingSeason() {
   if(!this.isDead()) {
     if(this.oranges.length > 0) this.oranges = []
   const randomValue = Math.floor(Math.random() * (300 - 100 + 1)) + 100
   this.age += 1
  //  const o = 
   if(this.height < 25) this.height += 2.5
   if(this.isMature()) {
    for(let i = 0; i < randomValue; i ++) {
    this.oranges.push(new Orange)
    }
    }
   }
  }

  isMature() {
    //  Returns true if the tree is old enough to bear fruit, false otherwise
    return this.age > 5
  }

  isDead() {
   return this.age > 99
  }

  hasOranges() {
    //  Returns true if there are any oranges on the tree, false otherwise
    return this.oranges.length > 0
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    } 
      
    
    //  orange-picking logic goes here
    return this.oranges.pop()
  }
}
// const org = new OrangeTree(17, 5)
// org.passGrowingSeason()
// console.log(org.age)
// console.log(org.height)
// org.passGrowingSeason()
// org.passGrowingSeason()
// org.passGrowingSeason()
// org.passGrowingSeason()
// org.passGrowingSeason()
// org.passGrowingSeason()
// org.passGrowingSeason()
// org.passGrowingSeason()
// console.log(org.oranges)
// console.log(org.height)
// console.log(org.isDead())
// console.log()
// console.log(org.oranges.reduce((acc, el) => acc + el.diameter, 0) / org.oranges.length)
// module.exports = OrangeTree;
