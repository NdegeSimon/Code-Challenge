Transaction Fee Estimator 

This is a simple JavaScript program that estimates transaction fees based on a custom fee structure.


 Problem Description

The challenge is to create a simplified fee estimator that applies the following rules:

- A **base transaction fee** of 1.5% of the amount sent.
- A **minimum fee of KES 10.
- A **maximum fee of KES 70.

The final fee is:
- `KES 10` if 1.5% of amount is less than 10.
- `KES 70` if 1.5% of amount is more than 70.
- Otherwise, it is 1.5% of the amount.

 How It Works

1. Prompts the user: `Unatuma Ngapi? (KES):`
2. Accepts a numeric input.
3. Calculates the fee with the above rules.
4. Displays:
   - Amount being sent
   - Fee calculated
   - Total amount to be debited



 Example Outputs

Scenario 1: Sending 500





 Boda Fare Calculator 

A simple fare estimator for motorcycle (boda boda) rides, based on the distance covered.



 Problem Description

The program calculates how much a passenger should pay for a ride using the following logic:

- A base fare for the first few kilometers (e.g., 50 KES for the first 5km).
- An additional charge for extra distance (e.g., 10 KES per km after the base).



 How It Works

1. Prompts the user to input distance (in kilometers).
2. Applies the pricing rule:
   - Base fare for the first 5 km
   - Adds extra charges beyond 5 km
3. Displays the final fare amount.



 Example Output
 Scenario 1: 3 km



  Chai Cost Calculator 

A small JavaScript program that calculates the cost of buying tea (chai) for a group of people.



 Problem Description

The user wants to know the total cost of buying cups of chai for friends.

- Cost per cup: **KES 10**
- User inputs the **number of people**
- Total cost is: `number of people × 10`



How It Works

1. Prompts the user: “Wangapi wanakunywa chai?”
2. Accepts a number input.
3. Multiplies the input by 10.
4. Outputs the total cost.


 Example Output

 Scenario 1: 4 people
Wangapi wanakunywa chai? 4
Total Cost: KES 40

shell
Copy
Edit

 Scenario 2: 10 people
