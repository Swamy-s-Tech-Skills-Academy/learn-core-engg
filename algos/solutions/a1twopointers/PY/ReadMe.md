# Two Pointers - Python Solutions

This project contains implementations of algorithms using the Two Pointers pattern in Python:

- **Valid Palindrome:** Check if a string is a palindrome after sanitization.
- **Remove Nth Node from End of List:** Remove the nth node from the end of a singly linked list.
- **Three Sum:** Find all unique triplets in an array that sum to zero.

## Folder Structure

```text
solutions/
└── a1twopointers/
    └── python/
         ├── palindrome/
         │    ├── algo.py             # Valid Palindrome implementation
         │    ├── helper_palindrome.py  # Demo functions for Valid Palindrome
         │    └── test_algo.py        # Unit tests for Valid Palindrome
         ├── removenthfromend/
         │    ├── algo.py             # Remove Nth Node from End implementation
         │    ├── helper_removenth.py # Demo functions for Remove Nth Node from End
         │    └── test_algo.py        # Unit tests for Remove Nth Node from End
         ├── threesum/
         │    ├── algo.py             # Three Sum implementation
         │    ├── helper_threesum.py  # Demo functions for Three Sum
         │    └── test_algo.py        # Unit tests for Three Sum
         ├── main.py                 # Driver to run demos for all algorithms
         ├── requirements.txt        # Required packages (e.g., unittest is built-in, but add any extras if needed)
         └── README.md               # Documentation overview
```

## How to Run

1. **Run Demos:**

```bash
python main.py

python -m unittest discover -s .
```
