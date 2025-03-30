package com.example.removenthfromend;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class RemoveNthFromEndTest {
    private ListNode createList(int[] values) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        for (int val : values) {
            current.next = new ListNode(val);
            current = current.next;
        }
        return dummy.next;
    }

    private int[] convertToArray(ListNode head) {
        int[] result = new int[10]; // Arbitrary size
        int count = 0;
        while (head != null) {
            result[count++] = head.val;
            head = head.next;
        }
        return java.util.Arrays.copyOf(result, count);
    }

    @Test
    void testRemoveNthFromEnd() {
        ListNode head = createList(new int[] { 1, 2, 3, 4, 5 });
        ListNode result = RemoveNthFromEnd.removeNthFromEnd(head, 2);
        assertArrayEquals(new int[] { 1, 2, 3, 5 }, convertToArray(result));

        head = createList(new int[] { 1 });
        result = RemoveNthFromEnd.removeNthFromEnd(head, 1);
        assertArrayEquals(new int[] {}, convertToArray(result));
    }
}
