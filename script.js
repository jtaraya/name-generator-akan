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

}