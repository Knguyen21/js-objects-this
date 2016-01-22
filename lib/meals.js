'use strict';

/* caloriesEatenOn, which accepts a date (in the format above) and calculates the total number of calories consumed on that date.
avgDailyCalories, which (as indicated), calculates the average number of calories consumed per day, rounded down to the nearest whole calorie.
onTrack, which compares averageDailyCalories to the User's target daily calorie intake, and returns true if average caloric intake is at or below the target (or false if the reverse is true)
*/

let User = {
    name: "Jake",
    age: 20,
    calorieTarget: 300,
    meals: [{title: "breakfast",
        date: "2015-06-21",
        description: "delicious",
        calories: 300},

        {title: "lunch",
        date: "2015-06-25",
        description: "yummy!",
        calories: 600},

        {title: "dinner",
        date: "2015-06-26",
        description: "heavy meal",
        calories: 1000},

    ],
    // caloriesEatenOn, which accepts a date (in the format above) and
    // calculates the total number of calories consumed on that date.
    caloriesEatenOn: function(mydate){
        let total = 0;
        for(let i = 0; i < this.meals.length; i++){
            if(this.meals[i].date === mydate){
                total += this.meals[i].calories;
            }
        }
        return total;
    },
    //avgDailyCalories, which (as indicated), calculates the average number of calories //
    // consumed per day, rounded down to the nearest whole calorie.
    avgDailyCalories: function(mydate){
        let total = 0;
        let calories = this.caloriesEatenOn(mydate);
        for( let i = 0; i < this.meals.length; i++) {
            if(this.meals[i].date === mydate){
                total += 1;
            }
        }
        return Math.floor(calories/total);

    },
    // onTrack, which compares averageDailyCalories to the User's target daily calorie intake,
    // and returns true if average caloric intake is at or below the target (or false if the reverse is true)
    onTrack: function(mydate) {
        if (this.avgDailyCalories(mydate) <= this.calorieTarget) {
            return true;
        }
        else {
            return false;
        }

    },
};

module.exports = User;
