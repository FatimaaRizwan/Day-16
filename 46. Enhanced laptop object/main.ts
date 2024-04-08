let laptop={
    make:"Intel", model:"Xeon", year:"2020",
    describe: function(){
        console.log(`This laptop is ${this.year} ${this.make} ${this.model}`);
    }
};
laptop.describe();