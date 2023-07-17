$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }

})

var typed= new Typed(".home-screen .home-detail .homexp h3 .text", {
    strings: ["Web Development", "UI/UX Designing", "Frontend Development"],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 500,
    loop: true,
});

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form field values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var message = document.getElementById('message').value;

    // Create an object to store form data
    var formData = {
        Name: name,
        'Email Address': email,
        'Mobile Number': mobile,
        Message: message
    };
    
     // Send form data to Google Sheets using Google Sheets API
     sendFormData(formData);

     // Reset the form
     document.getElementById('contactForm').reset();
 }
 
 // Function to send form data to Google Sheets using Google Sheets API
 function sendFormData(formData) {
     // Set up the request URL with the spreadsheetId and range
     var spreadsheetId = '1HVeeHWKoNDDYTHqgR3CCwLLHm9GMIvsIfkgMwHNIULA'; // Replace with your actual spreadsheetId
     var range = 'ContactMe'; // Replace with your actual sheet name and range
 
     // Prepare the data to be sent
     var values = Object.values(formData);
     var body = {
         values: [values]
     };
 
     // Send the data to Google Sheets using the Sheets API v4
     fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`, {
         method: 'POST',
         headers: {
             'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your actual access token
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
     })
     .then(response => {
         if (response.ok) {
             console.log('Form data submitted successfully');
         } else {
             console.error('Error submitting form data:', response.statusText);
         }
     })
     .catch(error => {
         console.error('Error submitting form data:', error);
     });
 }