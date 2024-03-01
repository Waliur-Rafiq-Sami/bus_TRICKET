// tricket Function
function tricket(even) {
  const sitName = document.getElementById(even);
  addBackgroundColor(sitName);
  const seat = sitName.innerText;
  TotalSeat(seat);
}

// Total Seat
function TotalSeat(even) {
  console.log("sfdsefsf == ", even);
  const seatEliment = document.getElementById("TotalSeat");
  const seatNumber = seatEliment.innerText;
  const currentSeat = parseInt(seatNumber);
  const currentSeatNumber = currentSeat - 1;
  seatEliment.innerText = currentSeatNumber;
  // seat
  const CurrentSeatEliment = document.getElementById("CurrentSeat");
  const currenTseatNumber = CurrentSeatEliment.innerText;
  const currentSeatValue = parseInt(currenTseatNumber);
  const seat = currentSeatValue + 1;
  CurrentSeatEliment.innerText = seat;
  if (seat === 1) {
    removeHiddenClass("sit1");
    removeHiddenClass("SubbmitButton");
    addSeatName("seat1", even);
    setPrice(550);
  } else if (seat === 2) {
    removeHiddenClass("sit2");
    addSeatName("seat2", even);
    setPrice(1100);
  } else if (seat === 3) {
    removeHiddenClass("sit3");
    addSeatName("seat3", even);
    setPrice(1650);
  } else if (seat === 4) {
    removeHiddenClass("sit4");
    addSeatName("seat4", even);
    setPrice(2200);
    removeHiddenClass("cuponBox");
  } else {
    disable();
  }
}
// add BG Culor
function addBackgroundColor(even) {
  even.classList.add("bg-green-500");
}

// Add Seat Name
function addSeatName(even1, even) {
  const evenElement = document.getElementById(even1);
  console.log(even);
  evenElement.innerText = even;
}

// remove Hidden Class
function removeHiddenClass(even) {
  const evenElement = document.getElementById(even);
  evenElement.classList.remove("hidden");
}

// add Hidden Class
function addHiddenClass(even) {
  const evenElement = document.getElementById(even);
  evenElement.classList.add("hidden");
}

// set Price
function setPrice(even) {
  const seatPrice = document.getElementById("totalPrice");
  seatPrice.innerText = even;
}
//disable
function disable() {
  removeHiddenClass("Warning");
  addHiddenClass("SubbmitButton");
}
