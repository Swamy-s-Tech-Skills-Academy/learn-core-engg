from algo import is_palindrome


def show_valid_palindrome_demo() -> None:
    print("========== Valid Palindrome Tests ==========")
    test_cases = [
        "RACEACAR",
        "A",
        "ABCDEFGFEDCBA",
        "ABC",
        "ABCBA",
        "ABBA",
        "No lemon, no melon",
        "Was it a car or a cat I saw?",
        "Able was I, I saw Elba",
        "12321",
        "123421",
        "",
        "   "
    ]
    for index, s in enumerate(test_cases, start=1):
        print(f"\nTest Case #{index}")
        print("-" * 80)
        print(f"Input: '{s}' (length: {len(s)})")
        print(f"Is palindrome? → {is_palindrome(s)}")
        print("-" * 80)


if __name__ == "__main__":
    show_valid_palindrome_demo()
