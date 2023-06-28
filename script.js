var form = document.getElementById('form');
var roomTypeSelect = document.getElementById('room_type');
var amenitiesSelect = document.getElementById('amenities');
var totalDaysInput = document.getElementById('total_days');
var totalPersonsInput = document.getElementById('total_persons');
var advanceAmountInput = document.getElementById('advance_payment');
var totalRoomCostElement = document.getElementById('total_room_cost');
var totalAmenitiesCostElement = document.getElementById('total_amenities_cost');
var totalCostElement = document.getElementById('total_cost');
var balanceElement = document.getElementById('total_balance');

form.addEventListener('submit', function(event) {
  	event.preventDefault(); // Prevent form submission

    // Get form values
    var roomType = roomTypeSelect.value;
    var amenities = amenitiesSelect.value;
    var totalDays = parseInt(totalDaysInput.value);
    var totalPersons = parseInt(totalPersonsInput.value);
    var advanceAmount = parseInt(advanceAmountInput.value);

    // Calculate costs
    var roomRate = roomType === 'delux' ? 2500 : 4000;
    var amenitiesCost = (amenities === 'AC' ? 1000 : 300) * totalDays;
    var totalRoomCost = roomRate * totalDays;
    var totalCost = totalRoomCost + amenitiesCost;

    // Additional charges for extra persons
    var extraPersons = totalPersons > 2 ? totalPersons - 2 : 0;
    var extraPersonCost = 1000 * extraPersons * totalDays;
    totalCost = totalRoomCost + extraPersonCost;

    var balance = totalCost - advanceAmount;

    // Display costs
    totalRoomCostElement.textContent = totalRoomCost;
    totalAmenitiesCostElement.textContent = amenitiesCost + ' Rs';
    totalCostElement.textContent = totalCost + ' Rs';
    balanceElement.textContent = balance + ' Rs';
});