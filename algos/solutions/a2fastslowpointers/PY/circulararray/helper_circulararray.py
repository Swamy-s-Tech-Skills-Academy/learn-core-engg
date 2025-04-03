from circulararray.algo import circular_array_loop


def show_circular_array_loop_demo() -> None:
    print("========== Circular Array Loop Demo ==========")
    test_cases = [
        [-1, 2, 2, -1],
        [1, 2, 3, 4, 5],
        [-2, -3, -9],
        [-5, -4, -3, -2, -1],
        [-1, -2, -3, -4, -5],
        [2, 1, -1, -2],
        [-1, -2, -3, -4, -5, 6],
        [1, 2, -3, 3, 4, 7, 1],
        [0, 0, 0, 0],
        [1],
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
