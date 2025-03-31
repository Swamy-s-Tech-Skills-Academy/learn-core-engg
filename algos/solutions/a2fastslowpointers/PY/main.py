from palindrome.helper_palindrome import show_valid_palindrome_demo
from removenthfromend.helper_removenth import show_remove_nth_node_demo
from threesum.helper_threesum import show_three_sum_demo


def main() -> None:
    print("=" * 50)
    print("✅ Palindrome Algorithm Demonstration")
    print("=" * 50)
    show_valid_palindrome_demo()

    print("\n" + "=" * 50)
    print("✅ Remove Nth Node from End Algorithm Demonstration")
    print("=" * 50)
    show_remove_nth_node_demo()

    print("\n" + "=" * 50)
    print("✅ Three Sum Algorithm Demonstration")
    print("=" * 50)
    show_three_sum_demo()


if __name__ == "__main__":
    main()
