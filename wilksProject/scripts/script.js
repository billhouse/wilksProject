$(function()
{

    $("#calculate").click(function() {

        console.log('you are here');
        //there must be a variable for the body weight of the lifter, the total weight lifted,
        //the six values for either a male or female lifter, a Wilks score to be calculated, and a coefficient
        var bodyweight = $("#bodyweight");
        var weightLifted = $("#weightLifted");
        const malea= -216.0475144;
        const maleb= 16.2606339;
        const malec= -0.002388645;
        const maled= -0.00113732;
        const malee= 7.01863E-06;
        const malef= -1.291E-08;
        const femalea= 594.31747775582;
        const femaleb= -27.23842536447;
        const femalec= 0.82112226871;
        const femaled= -0.00930733913;
        const femalee= 4.731582E-05;
        const femalef= -9.054E-08;
        var wilksScore;
        var coefficient;


        //this code will check if the user has picked male or female as their gender and calculate accordingly
        if($("#gender") == "male"){

            //the coefficient is defined as 500 divided by the sum of the body weight of
            //the lifter multiplied by 6 different numbers, depending on gender
            coefficient = 500 / ((bodyweight * malea) + (bodyweight * maleb) + (bodyweight * malec)
                    + (bodyweight * maled) + (bodyweight * malee) + (bodyweight * malef));
            wilksScore = weightLifted * coefficient;
        } else if ($("#gender") == "female") {
            coefficient = 500 / ((bodyweight * femalea) + (bodyweight * femaleb) + (bodyweight * femalec)
                    + (bodyweight * femaled) + (bodyweight * femalee) + (bodyweight * femalef));
            wilksScore = weightLifted * coefficient;
        }

        console.log(wilksScore);



    });

});
