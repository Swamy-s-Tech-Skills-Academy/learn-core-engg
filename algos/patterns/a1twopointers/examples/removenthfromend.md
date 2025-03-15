# Remove Nth Node from End of List (Two Pointers)

## 📌 Problem Statement

Given the **head** of a **singly linked list**, remove the **n-th node from the end** of the list and return the modified list.

## 🔹 Constraints

- The number of nodes in the list is **k**.
- **1 ≤ k ≤ 10³**
- **-10³ ≤ Node.val ≤ 10³**
- **1 ≤ n ≤ k**

## ✅ Example Inputs & Outputs

#### Example 1

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

#### Example 2

```
Input: head = [1], n = 1
Output: []
```

#### Example 3

```
Input: head = [1,2], n = 1
Output: [1]
```

---

## 🔍 Approach

### **Using Two Pointers**

1️⃣ **Initialize two pointers**, `first` and `second`, pointing to a dummy node before the head.  
2️⃣ **Move the `first` pointer** `n + 1` steps ahead.  
3️⃣ **Move both pointers** one step at a time until `first` reaches `null`.  
4️⃣ The `second` pointer will now be **right before** the node to be deleted.  
5️⃣ **Remove the target node** by updating the `.next` pointer.  
6️⃣ Return the modified list.

---

## 🖥️ **Algorithm (Pseudocode)**

```
function removeNthFromEnd(head, n):
    dummy = new ListNode(0, head)
    first = dummy
    second = dummy

    // Move first pointer n+1 steps ahead
    for i from 0 to n:
        first = first.next

    // Move both pointers together
    while first is not null:
        first = first.next
        second = second.next

    // Delete the nth node
    second.next = second.next.next

    return dummy.next
```

---

## ⏳ **Time & Space Complexity**

- **Time Complexity:** **O(n)** (single pass through the list).
- **Space Complexity:** **O(1)** (constant extra space).

---

## 🔹 Edge Cases Considered

✅ **Removing the only node in the list** (results in an empty list).  
✅ **Removing the first node from the list** (requires updating the head).  
✅ **Removing the last node** (ensures correct pointer updates).

---

## 🚀 **Next Steps**

1️⃣ Implement this in multiple programming languages.  
2️⃣ Explore variations like **removing all nodes with a certain value**.  
3️⃣ Optimize and compare with other approaches.

---

This documentation explains the **Two Pointers** approach used to solve **Remove Nth Node from End of List** efficiently. Let me know if you need any refinements! 🚀
