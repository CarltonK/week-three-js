$(document).ready(function () {
    // Tag#TagId
    $('div#playerForm form').submit(function () {
        // Read the data from the frontend
        const nameValue = $('input#name').val();
        const numberValue = $('input#number').val();

        if (nameValue == '' || numberValue == '') {
            $('div#result').append(`<p>All fields are required</p>`)
        } else {
            // Perform some action on the data
            const upperCaseValue = upperCaser(nameValue);
            const numberValueAsNumber = stringToNumberConverter(numberValue)

            // Return the data to the frontend
            $('div#result').append(`<p>The players' name is ${upperCaseValue}</p>`)
            $('div#result').append(`<p>The players' number is ${numberValueAsNumber}</p>`)
        }

        event.preventDefault();
    })
})

// Modularization of code
function upperCaser(value) {
    return value.toUpperCase();
}

function stringToNumberConverter(value) {
    return parseInt(value);
}
