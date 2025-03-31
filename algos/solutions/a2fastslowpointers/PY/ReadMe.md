# Fast & Slow Pointers - Python Solutions

This project contains an implementation of the Happy Number algorithm using the Fast and Slow Pointers pattern in Python.

- **Happy Number:** Determine if a number is a "happy number." A happy number is defined as a number that eventually reaches 1 when replaced by the sum of the squares of its digits repeatedly. If it falls into a cycle that does not include 1, then the number is not happy.

---

## Folder Structure

```text
solutions/
└── a2fastslowpointers/
    └── python/
         ├── happynumber/
         │    ├── algo.py             # Happy Number algorithm implementation
         │    ├── algo_helper.py      # Demo (helper) function to show Happy Number results
         │    ├── algo_test.py        # Unit tests for Happy Number algorithm
         │    └── __init__.py         # Package initializer (can be empty)
         ├── main.py                 # Driver to run the Happy Number demo
         ├── requirements.txt        # Required packages (if any)
         └── README.md               # Documentation overview (this file)
```

---

## How to Run

### 1. Run the Demo

To run the demonstration for the Happy Number algorithm, simply execute:

```bash
python main.py
```

This will run the demo function from `algo_helper.py` and display the output for various test cases.

### 2. Run Unit Tests

To execute all unit tests using Python’s built-in `unittest` framework, run:

```bash
python -m unittest discover -s .
```

This command will search for and run all tests defined in files matching the pattern `algo_test.py`.

---

## Additional Information

- **Algorithm (Fast & Slow Pointers):**  
  The Happy Number algorithm uses two pointers:

  - **Slow pointer:** Moves one step at a time (calculating the sum of the squared digits).
  - **Fast pointer:** Moves two steps at a time (calculating the sum of the squared digits twice).  
    When the fast pointer reaches 1, the number is happy. If the slow pointer ever equals the fast pointer (other than 1), a cycle is detected and the number is not happy.

- **Demo and Testing:**  
  The `algo_helper.py` file includes a demo function (`show_happy_number_demo()`) to display sample outputs.  
  The `algo_test.py` file contains unit tests to validate the correctness of the algorithm.
