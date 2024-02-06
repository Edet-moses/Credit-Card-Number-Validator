const result = [];

document.querySelectorAll(".credit-card-inputs input").forEach((item) => {
  item.addEventListener("input", (e) => {
    const pos = e.target.getAttribute("data-pos");
    const currentVal = e.target.value;

    if (currentVal.length > 4) {
      e.target.value = result[pos - 1];
      // e.target.nextElementSibling.focus()

      e.preventDefault();
      return false;
    }

    result[pos - 1] = currentVal;

    if (currentVal.length === 4) {
      e.target.nextElementSibling.focus();
    }
  });
});

document.querySelectorAll(".credit-card-inputs input").forEach((item) => {
  item.addEventListener("keydown", (e) => {
    const pos = e.target.getAttribute("data-pos");

    if (e.keyCode === 8) {
      if (e.target.value.length === 0 && pos > 1) {
        e.preventDefault();

        const val = result[pos - 2] ? result[pos - 2].slice(0, -1) : "";
        result[pos - 2] = val;

        e.target.previousElementSibling.focus().value;
      }
    }

    // prevent enter alphabetic keys
    if (
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      (e.keyCode >= 35 && e.keyCode <= 40)
    ) {
      return;
    }

    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  });
});

// card identification
const validate_credit_card_number = (card_number) => {
  // remove any non-digit characters
  card_number = card_number.replace(/\D/g, "");

  // check if the card number length is valid
  if (card_number.length < 13 || card_number.length > 19) return 'Input All Numbers!';

  // check for specific card types and their regex patterns
  var visa_pattern = /^4\d{12}(?:\d{3})?$/;
  var mastercard_pattern = /^5[1-5]\d{14}$/;
  var american_express_pattern = /^3[47]\d{13}$/;
  var discover_pattern = /^6(?:011|5\d{2})\d{12}$/;

  // validate card number using Luhn algorithm
  var sum = 0;
  var digit,
    i,
    len,
    even = false;

  for (i = card_number.length - 1; i >= 0; i--) {
    digit = parseInt(card_number.charAt(i), 10);

    if (even) {
      if ((digit *= 2) > 9) digit -= 9;
    }
    sum += digit;
    even = !even;
  }

  if (sum % 10 !== 0) return 'Invalid Card Number!';

  // check card type
  if (visa_pattern.test(card_number)) {
    return "Visa Card Number";
  } else if (mastercard_pattern.test(card_number)) {
    return "Mastercard Number";
  } else if (american_express_pattern.test(card_number)) {
    return "American Express Card Number";
  } else if (discover_pattern.test(card_number)) {
    return "Discover Card Number";
  } else {
    return "Unknown Card Number";
  }
};

// reset button handler
document
  .querySelector(".credit-card-inputs__reset")
  .addEventListener("click", function () {
    document
      .querySelectorAll(".credit-card-inputs input")
      .forEach((item) => (item.value = ""));
    result.length = 0;
    document.querySelector('#card-name').style.display = 'none'
    document.querySelector('#card-name').innerHTML = ''
  });

// submit button handler
document
  .querySelector(".credit-card-inputs__submit")
  .addEventListener("click", function () {
    let credit_card_number = "";

    for (number of result) credit_card_number += number;

    document.querySelector("#card-name").style.display = 'block'
    document.querySelector("#card-name").innerHTML =
      validate_credit_card_number(credit_card_number);
  });
