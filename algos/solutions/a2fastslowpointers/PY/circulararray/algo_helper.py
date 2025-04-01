from algo import circular_array_loop


def show_circular_array_loop_demo() -> None:
    print("========== Circular Array Loop Demo ==========")
    test_cases = [
        [-2, -3, -9],
        [-5, -4, -3, -2, -1],
        [-1, -2, -3, -4, -5],
        [2, 1, -1, -2],
        [-1, -2, -3, -4, -5, 6],
        [1, 2, -3, 3, 4, 7, 1],
        [2, 2, 2, 7, 2, -1, 2, -1, -1]
    ]

    for idx, arr in enumerate(test_cases, start=1):
        print(f"\nTest Case #{idx}:")
        print("-" * 80)
        print(f"Input Circular Array: {arr}")
        print(f"Found loop: {circular_array_loop(arr)}")
        print("-" * 80)


if __name__ == "__main__":
    show_circular_array_loop_demo()
