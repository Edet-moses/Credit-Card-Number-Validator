# **Credit Card Validation using JavaScript**

## **This is a JavaScript program to validate credit card numbers, with support for Visa, Mastercard, American Express, and Discover. It uses the Luhn Algorithm for validation.**

## **Description of the Luhn Algorithm**
> *The Luhn algorithm, also known as the **"modulus 10"** or **"mod 10"** algorithm, is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers. It works by summing the digits of the card number with specific rules applied to certain digits, and then checking if the sum is divisible by 10. If the sum is divisible by 10, the card number is likely valid.*

## **Regex Patterns**

### **1. Visa Pattern**
>***JS Variable: `var visaPattern = /^4\d{12}(?:\d{3})?$/;`***
* **^**: Asserts the start of the string.
* **4**: Matches the starting digit of Visa cards.
* **\d{12}**: Matches exactly 12 digits.
* **(?:\d{3})?**: Optionally matches 3 more digits (making it a total of 15 digits for Visa cards).
* **$**: Asserts the end of the string.

This pattern matches strings that start with a "4" followed by either 12 or 15 digits in total, which is the typical length for Visa credit card numbers.

***

### **2. Mastercard Pattern**
>***JS Variable: `var mastercardPattern = /^5[1-5]\d{14}$/;`***
* **^**: Asserts the start of the string.
* **5[1-5]**: Matches a digit starting with "5" followed by a digit from 1 to 5.
* **\d{14}**: Matches exactly 14 digits after the initial two digits.
* **$**: Asserts the end of the string.

This pattern matches strings that start with "51" through "55" followed by 14 digits, which is the typical length for Mastercard credit card numbers.

***

### **3. American Express Pattern**
>***JS Variable: `var amexPattern = /^3[47]\d{13}$/;`***
* **^**: Asserts the start of the string.
* **3[47]**: Matches either "34" or "37".
* **\d{13}**: Matches exactly 13 digits after the initial two digits.
* **$**: Asserts the end of the string.

This pattern matches string that start with "34" or "37" followed by 13 digits, which is the typical length for American Express credit card numbers.

***

### **4. Discover Pattern**
>***JS Variable: `/^6(?:011|5\d{2})\d{12}$/;`***
* **^**: Asserts the start of the string.
* **6**: Matches the starting digit of Discover cards.
* **(?:011|5\d{2})**: Matches "011" or "5" followed by and two digits.
* **\d{12}**: Matches exactly 12 digits after the initial three or four digits.
* **$**: Asserts the end of the string.

This pattern matches strings that start with "6011" or "65" followed by any two digits and then 12 additional digits, which is the typical length for Discover credit card numbers.

***

### ***These regex patterns help identify the structure of credit card numbers for various card types, allowing for validation of the input.***