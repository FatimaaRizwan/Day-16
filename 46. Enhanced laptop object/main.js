var laptop = {
    make: "Intel", model: "Xeon", year: "2020",
    describe: function () {
        console.log("This laptop is ".concat(this.year, " ").concat(this.make, " ").concat(this.model));
    }
};
laptop.describe();
