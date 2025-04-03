# helper_circulararray.py

from circulararray.algo import circular_array_loop


def show_circular_array_loop_demo() -> None:
    """
    Demonstrates the circular_array_loop function with multiple test cases.
    Prints the input array and the result (True/False) for each case.
    """
    print("========== Circular Array Loop Demo ==========")
    test_cases = [
        [-2, -3, -9],
        [-5, -4, -3, -2, -1],
        [-1, -2, -3, -4, -5],
        [2, 1, -1, -2],
        [-1, -2, -3, -4, -5, 6],
        [1, 2, -3, 3, 4, 7, 1],
        [2, 2, 2, 7, 2, -1, 2, -1, -1],
        [-1, 2, 2, -1],
        [1, 2, 3, 4, 5],
        [1],
        [0, 0, 0, 0],
    ]

    for idx, arr in enumerate(test_cases, start=1):
        arr_copy = arr.copy()
        print(f"\nTest Case #{idx}:")
        print("-" * 80)
        print(f"Input Circular Array: {arr_copy}")
        result = circular_array_loop(arr_copy)
        print(f"Found loop: {result}")
        print("-" * 80)


if __name__ == "__main__":
    show_circular_array_loop_demo()
