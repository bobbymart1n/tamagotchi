let pet = {
  tummy: 0,
  hunger: function(){
    const hungerInterval = setInterval(()=> {
      this.tummy++;
      if (this.tummy > 10){
        clearInterval(hungerInterval);
        return "Mmmmm... thank you daddy!"
      }
    }, 1000)
  },
};

export { pet }
