# helper_findduplicate.py


from findduplicate.algo import find_duplicate


def show_find_duplicate_demo():
    test_cases = [
        [1, 3, 2, 3, 5, 4],
        [2, 4, 5, 4, 1, 3],
        [1, 6, 3, 5, 1, 2, 7, 4],
        [1, 2, 2, 4, 3],
        [3, 1, 3, 5, 6, 4, 2]
    ]

    for i, nums in enumerate(test_cases, 1):
        print(f"{i}. nums = {nums}")
        print(f"\tDuplicate number = {find_duplicate(nums)}")
        print("-" * 100)


if __name__ == "__main__":
    show_find_duplicate_demo()
    print("=" * 50)
