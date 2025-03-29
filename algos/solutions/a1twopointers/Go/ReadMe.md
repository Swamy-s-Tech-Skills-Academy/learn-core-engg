Below is an updated README.md for your Go implementation that includes instructions for testing.

---

# Two Pointers - Go Solutions

This project contains implementations of algorithms using the Two Pointers pattern in Go:

- **Valid Palindrome:** Checks if a string is a palindrome after sanitizing (removing non-alphanumeric characters and normalizing case).
- **Remove Nth Node from End of List:** Removes the nth node from the end of a singly linked list using a two-pointer technique.
- **Three Sum:** Finds all unique triplets in an array that sum to zero.

## Folder Structure

```
solutions/
└── a1twopointers/
    └── Go/
         ├── palindrome/
         │     ├── algo.go              // Valid Palindrome algorithm
         │     ├── helper_palindrome.go // Demo function for Valid Palindrome
         │     └── algo_test.go         // Unit tests for Valid Palindrome
         ├── removenthfromend/
         │     ├── algo.go              // Remove Nth Node from End algorithm
         │     ├── helper_removenth.go  // Demo function for Remove Nth Node from End
         │     └── algo_test.go         // Unit tests for Remove Nth Node from End
         ├── threesum/
         │     ├── algo.go              // Three Sum algorithm
         │     ├── helper_threesum.go   // Demo function for Three Sum
         │     └── algo_test.go         // Unit tests for Three Sum
         ├── main.go                    // Main file that calls all demos
         └── go.mod                     // Go module file
```

## How to Run the Application

1. **Set Up Your Environment:**  
   Ensure you have [Go](https://golang.org/dl/) installed (version 1.18 or later is recommended).

2. **Navigate to the Go Directory:**  
   Open your terminal in the `solutions/a1twopointers/Go/` directory.

3. **Run the Demos:**  
   Execute the main file to run demos for all algorithms:

   ```bash
   go run main.go
   ```

4. **Build and Run (Optional):**  
   To compile your project into an executable:
   ```bash
   go build -o a1twopointers
   ./a1twopointers
   ```

## How to Run Tests

Each algorithm has its own test file (using Go’s built-in `testing` package).

1. **Run All Tests:**  
   From the `solutions/a1twopointers/Go/` directory, run:

   ```bash
   go test ./...
   ```

   This command will run tests in all subdirectories.

2. **Run Tests for a Specific Package:**  
   For example, to run tests for the **Three Sum** algorithm:
   
   ```bash
   cd threesum
   go test
   ```

## Go Module

Your `go.mod` file should define the module path. For example:

```go
module your_module_path/a1twopointers/Go

go 1.18
```

_Replace `your_module_path` with your actual module name._

## Additional Information

- **Valid Palindrome:**  
  The algorithm sanitizes the input string by removing non-alphanumeric characters and converting to lowercase, then uses a two-pointer technique to check if the string is a palindrome.

- **Remove Nth Node from End:**  
  Uses a dummy node and two pointers to locate and remove the nth node from the end of a linked list in one pass.

- **Three Sum:**  
  Sorts the array and then uses a two-pointer approach to find all unique triplets that sum to zero.

---

This README provides an overview, folder structure, instructions to run the application, and detailed steps to run unit tests for your Go implementation of Two Pointers algorithms. Let me know if you need any additional modifications or details!
