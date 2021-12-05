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
}