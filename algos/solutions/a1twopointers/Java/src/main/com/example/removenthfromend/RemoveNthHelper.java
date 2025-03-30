package com.example.removenthfromend;

public class RemoveNthHelper {
    public static void demoRemoveNth() {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        System.out.print("Original List: ");
        printList(head);

        head = RemoveNthFromEnd.removeNthFromEnd(head, 2);

        System.out.print("After Removing 2nd from End: ");
        printList(head);
    }

    private static void printList(ListNode node) {
        while (node != null) {
            System.out.print(node.val + " -> ");
            node = node.next;
        }
        System.out.println("null");
    }
}
