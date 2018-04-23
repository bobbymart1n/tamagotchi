let pet = {
  tummy: 10,
  dirty: 0,
  hunger: function(){
    const hungerInterval = setInterval(()=> {
      this.tummy--;
      if (this.tummy == 0) {
        clearInterval(hungerInterval);
        return "Why did you kill me daddy?";
      }
    }, 1000)
  },
  petCemetery: function(){
    if (this.tummy > 0 && this.dirty < 10) {
      return false;
    } else {
      return true;
    }
  },
};

export { pet }
