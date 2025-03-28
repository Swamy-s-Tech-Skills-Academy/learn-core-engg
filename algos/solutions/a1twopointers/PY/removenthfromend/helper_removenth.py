from removenthfromend.algo import ListNode, remove_nth_from_end


def create_linked_list(arr: list) -> ListNode:
    dummy = ListNode(0)
    current = dummy
    for num in arr:
        current.next = ListNode(num)
        current = current.next
    return dummy.next


def linked_list_to_array(head: ListNode) -> list:
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result


def show_remove_nth_node_demo() -> None:
    print("\n****************************** Remove Nth Node from End Tests ******************************")
    test_cases = [
        {"input": [1, 2, 3, 4, 5], "n": 2, "expected": [1, 2, 3, 5]},
        {"input": [1], "n": 1, "expected": []},
        {"input": [1, 2], "n": 1, "expected": [1]},
        {"input": [1, 2, 3, 4], "n": 4, "expected": [
            2, 3, 4]}  # Removing the head
    ]
    for index, case in enumerate(test_cases, start=1):
        head = create_linked_list(case["input"])
        new_head = remove_nth_from_end(head, case["n"])
        result = linked_list_to_array(new_head) if new_head else []
        print(f"\nTest Case #{index}")
        print("-" * 80)
        print(f"Input List: {case['input']}, n = {case['n']}")
        print(f"Output List: {result}")
        print(f"Expected List: {case['expected']}")
        print("✅ Passed" if result == case["expected"] else "❌ Failed")
        print("-" * 80)


if __name__ == "__main__":
    show_remove_nth_node_demo()
