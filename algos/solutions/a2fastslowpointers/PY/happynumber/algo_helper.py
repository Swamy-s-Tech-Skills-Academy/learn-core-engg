# Import the algorithm function
from happynumber.algo import is_happy_number


def show_happy_number_demo() -> None:
    print("========== Happy Number Tests ==========")
    test_cases = [19, 7, 1, 2, 4, 20, 100, 23]

    for index, n in enumerate(test_cases, start=1):
        print(f"\nTest Case #{index}")
        print("-" * 80)
        print(f"Input: {n}")
        print(f"Is Happy Number? → {is_happy_number(n)}")
        print("-" * 80)


if __name__ == "__main__":
    show_happy_number_demo()
    print("=" * 50)
