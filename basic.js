//on click event on submit - prevent 

$("#submitButton").on("click", function(event) {
    event.preventDefault();
    var newReservation = {
        name: $("#reserve_name").val().trim(),
        email: $("#reserve_email").val().trim(),
        phone: $("#reserve_phone").val().trim(),
        id: $("#reserve_uniqueID").val().trim()
        };
        console.log(newReservation);

        $.post("/api/reservation", newReservation)
        .then(function(error, data) {
            if(error) {
                console.log(error);
            };
            console.log(data);
            alert("Adding reservation..");
        });

        
    }

    
    
);

    



//when a reservation is added, post to reservations page


