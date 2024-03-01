// tricket Function
function tricket(even) {
  const sitName = document.getElementById(even);
  addBackgroundColor(sitName);
  const seat = sitName.innerText;
  TotalSeat(seat);
}

// Total Seat
function TotalSeat(even) {
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
  even.classList.add("bg-green-600");
}

// Add Seat Name
function addSeatName(even1, even) {
  const evenElement = document.getElementById(even1);
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
  const GrandTotal = document.getElementById("GrandTotal");
  seatPrice.innerText = even;
  GrandTotal.innerText = even;
}
//disable
function disable() {
  removeHiddenClass("Warning");
  addHiddenClass("SubbmitButton");
}

// Cuppon Code Section
function cuponSecret() {
  const getValueOfEliment = document.getElementById("InputCupon");
  const getValue = getValueOfEliment.value;

  if (getValue === "NEW15") {
    const discoundGetEliment = document.getElementById("GrandTotal");
    discoundGetEliment.innerText = 1870;
    addHiddenClass("cuponBox");
    removeHiddenClass("discoundShow");
  } else if (getValue === "Couple 20") {
    const discoundGetEliment = document.getElementById("GrandTotal");
    discoundGetEliment.innerText = 1760;
    addHiddenClass("cuponBox");
    removeHiddenClass("discoundShow20");
  } else {
    addHiddenClass("cuponBox");
    removeHiddenClass("sorryWrong");
  }
}
//add lesaner
document.addEventListener("keyup", submit);

// check condition to subbmet button
function submit() {
  const checkseatElement = document.getElementById("CurrentSeat");
  const checkseat = checkseatElement.innerText;
  const seat = parseInt(checkseat);

  const numberInputElement = document.getElementById("numberValue");
  const numberInput = numberInputElement.value;
  const number = parseInt(numberInput);

  if (seat >= 1 && seat <= 4 && number === number) {
    removeHiddenClass("SubbmitButton");
  } else {
    addHiddenClass("SubbmitButton");
  }
}

//lastMenu
function lastMenu() {
  addHiddenClass("fullBody");
  removeHiddenClass("Done");
}
