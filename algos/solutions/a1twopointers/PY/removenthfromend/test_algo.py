import unittest
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


class TestRemoveNthFromEnd(unittest.TestCase):
    def test_remove_middle(self):
        head = create_linked_list([1, 2, 3, 4, 5])
        new_head = remove_nth_from_end(head, 2)
        self.assertEqual(linked_list_to_array(new_head), [1, 2, 3, 5])

    def test_remove_only_node(self):
        head = create_linked_list([1])
        new_head = remove_nth_from_end(head, 1)
        self.assertEqual(linked_list_to_array(
            new_head) if new_head else [], [])

    def test_remove_last_node(self):
        head = create_linked_list([1, 2])
        new_head = remove_nth_from_end(head, 1)
        self.assertEqual(linked_list_to_array(new_head), [1])

    def test_remove_head(self):
        head = create_linked_list([1, 2, 3, 4])
        new_head = remove_nth_from_end(head, 4)
        self.assertEqual(linked_list_to_array(new_head), [2, 3, 4])


if __name__ == "__main__":
    unittest.main()
