function akanName () {
    var centuryOfBirth = document.getElementById("century-input").value;
    var yearOfBirth = document.getElementById("year-input").value;
    var monthOfBirth = document.getElementById("month-input").value;
    var dateOfBirth = document.getElementById("date-input").value;
    var gender = document.getElementsByName("gender");

    function takegender () {
        for (var gender of genders ) {
            if (gender.click){
                return gender.value;
            }
        }
    }
    //getting gender value
    var myGenderValue = getGender();
    console.log(myGenderValue)

    function monthValidator() {
        if (monthOfBirth < 1 || monthOfBirth > 12)
        return false;
        else{
            return true;
        }
    }

    function dayValidator() {
        function dayValidator () {
            if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
              if (dayOfBirth > 28 || dayOfBirth < 1) {
                return false;
              } else if (monthOfBirth === 2 && dayOfBirth > 29) {
                return false;
              } else if (monthOfBirth === 2 && dayOfBirth < 1) {
                return false;
              } else {
                return true;
              }
            } else if (dayOfBirth < 1 || dayOfBirth > 31){
              return false;
            } else {
              return true;
            }
        }
        var monthValid = monthValidator();
        var dayValidator =dayValidator();

        //Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
        let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
            ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

            //creating arrays for the days of the week
            let daysOfWeek = [
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
              ];

              //creating arrays for male names
              let maleAkanNames = [
                "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
              ];

              //creating arrays for female names
              let femaleAkanNames = [
                "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
              ];
            
        //generating and index value to select items on arrays
    const index;
    // fix formula bug
    if (dayOfWeekNumber == 0){
      index = 6;
    } else {
      index = dayOfWeekNumber - 1;
    }
  
    console.log(index);
            
    }
}