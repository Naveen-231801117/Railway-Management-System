document.addEventListener("DOMContentLoaded", () => {
    fetchTrains();
});

function fetchTrains() {
    fetch('php/backend.php?action=getTrainStatus')
        .then(response => response.json())
        .then(data => {
            const trainsBody = document.getElementById("trainsBody");
            const noTrainsMessage = document.getElementById("noTrainsMessage");

            if (data.trains && data.trains.length > 0) {
                trainsBody.innerHTML = "";  // Clear previous rows

                data.trains.forEach(train => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${train.train_id}</td>
                        <td>${train.train_name}</td>
                        <td>${train.total_seats}</td>
                        <td>${train.available_seats}</td>
                        <td>${train.train_type}</td>
                        <td>${train.status}</td>
                    `;
                    trainsBody.appendChild(row);
                });
                noTrainsMessage.style.display = "none";
            } else {
                trainsBody.innerHTML = "";
                noTrainsMessage.style.display = "block";
            }
        })
        .catch(error => {
            console.error("Error fetching trains:", error);
            document.getElementById("noTrainsMessage").style.display = "block";
        });
}