from threesum.algo import three_sum


def show_three_sum_demo() -> None:
    print("\n****************************** Three Sum Tests ******************************")
    test_cases = [
        {"input": [-1, 0, 1, 2, -1, -4], "description": "Example 1"},
        {"input": [1, 2, 3, 4, 5], "description": "Example 2 (No triplet)"},
        {"input": [0, 0, 0, 0], "description": "Example 3 (Multiple zeros)"}
    ]

    for index, case in enumerate(test_cases, start=1):
        result = three_sum(case["input"])
        print(f"\nTest Case #{index} - {case['description']}")
        print("-" * 80)
        print(f"Input: {case['input']}")
        print(f"Output: {result}")
        print("-" * 80)


if __name__ == "__main__":
    show_three_sum_demo()
