document.addEventListener("DOMContentLoaded", () => {
    fetchBookings();
});

function fetchBookings() {
    fetch('php/backend.php?action=getBookingStatus')
        .then(response => response.json())
        .then(data => {
            const bookingsBody = document.getElementById("bookingsBody");
            const noBookingsMessage = document.getElementById("noBookingsMessage");

            if (data.bookings && data.bookings.length > 0) {
                bookingsBody.innerHTML = "";  // Clear previous rows

                data.bookings.forEach(booking => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${booking.booking_id}</td>
                        <td>${booking.passenger_name}</td>
                        <td>${booking.travel_date}</td>
                        <td>${booking.train_id}</td>
                    `;
                    bookingsBody.appendChild(row);
                });
                noBookingsMessage.style.display = "none";
            } else {
                bookingsBody.innerHTML = "";
                noBookingsMessage.style.display = "block";
            }
        })
        .catch(error => {
            console.error("Error fetching bookings:", error);
            document.getElementById("noBookingsMessage").style.display = "block";
        });
}

