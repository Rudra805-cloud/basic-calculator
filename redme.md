# Basic Calculator

A simple JavaScript calculator that performs basic arithmetic operations.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Clear functionality to reset calculations
- Simple and intuitive user interface

## How It Works

This calculator is built using  JavaScript and implements the following functionality:

1. **Input Handling**: Captures button clicks for numbers and operators
2. **Calculation**: Evaluates mathematical expressions when the equals button is pressed
3. **Clear Function**: Resets the calculator display

## Implementation Details

The calculator uses event listeners to capture button clicks:

- Each button's text content is captured and processed based on its value
- Numbers and operators are appended to the display
- The "=" button triggers the calculation
- The "C" button clears the display

## Best Practices

The code demonstrates:
- Event delegation for handling button clicks
- Function separation for clear, calculate, and append operations
- Dynamic DOM manipulation

## Future Improvements

Potential enhancements for this calculator:
- Add keyboard support
- Implement memory functions
- Add more advanced operations (square root, percentage, etc.)
- Improve error handling for invalid expressions
- Add responsive design for mobile devices

## Usage

Open `index.html` in your browser to use the calculator