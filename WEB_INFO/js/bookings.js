document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('form');
    const bookingMessage = document.getElementById('bookingMessage');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const trainId = bookingForm.querySelector('input[name="train_id"]').value;
        const passengerName = bookingForm.querySelector('input[name="passenger_name"]').value;
        const travelDate = bookingForm.querySelector('input[name="travel_date"]').value;

        const formData = new FormData();
        formData.append('action', 'bookTicket');
        formData.append('train_id', trainId);
        formData.append('passenger_name', passengerName);
        formData.append('travel_date', travelDate);

        fetch('php/backend.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                bookingMessage.textContent = `Booking successful! Booking ID: ${data.booking_id}`;
                bookingMessage.style.color = 'green';
                bookingForm.reset();
            } else {
                bookingMessage.textContent = `Booking failed: ${data.message}`;
                bookingMessage.style.color = 'red';
            }
        })
        .catch(error => {
            bookingMessage.textContent = 'An error occurred during booking.';
            bookingMessage.style.color = 'red';
            console.error('Error:', error);
        });
    });
});
