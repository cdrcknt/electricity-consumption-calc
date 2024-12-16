# Electricity Consumption Calculator

This project calculates electricity consumption based on previous and present meter readings. It simulates the generation, transmission, distribution, and other charges for an electricity bill. The application displays the results in a detailed breakdown, including VAT and the total amount due.

## Features

- **Input Fields**: Users can input their account name, address, previous meter reading, and present meter reading.
- **Consumption Calculation**: The calculator computes the kWh consumed and displays detailed charges.
- **Charge Breakdown**: The bill is divided into several categories such as generation charges, transmission charges, distribution charges, and others.
- **Responsive Design**: The app uses a clean, simple, and responsive UI for optimal user experience.

## Files in the Repository

- **index.html**: Contains the structure and layout of the electricity bill form and output.
- **script.js**: Handles the logic for calculating the electricity consumption and applying the rates to determine the charges.
- **styles.css**: Provides the styles for the bill format and input forms.

## How It Works

1. **Input**: Users enter the previous and present meter readings in the form.
2. **Calculation**: When the "Calculate" button is clicked, the script calculates the kWh consumed, then applies fixed rates for each charge category (generation, transmission, distribution, etc.).
3. **Display**: The application dynamically updates the bill with the calculated charges, including VAT, and shows the final amount due.

### Example Calculation:
- **Generation System Charge**: Based on the kWh consumed.
- **Transmission System Charge**: Based on the kWh consumed.
- **Distribution System Charge**: Based on the kWh consumed.
- **Universal Charges**: Missionary electrification and environmental charges.
- **Other Charges**: Loan condonation and lifeline rate subsidy.

## Installation

To run the application locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/cdrcknt/electricity-consumption-calc.git
