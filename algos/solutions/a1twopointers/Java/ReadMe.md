# Two Pointers Solution in Java

## Few Commands

```powershell
gradle wrapper

```

## **📂 Folder Structure (Java + Gradle)**

```text
solutions/
└── a1twopointers/
    └── java/
        ├── src/
        │   ├── main/
        │   │   ├── java/
        │   │   │   ├── palindrome/
        │   │   │   │   ├── Palindrome.java
        │   │   │   │   ├── PalindromeHelper.java
        │   │   │   ├── removenthfromend/
        │   │   │   │   ├── RemoveNthFromEnd.java
        │   │   │   │   ├── RemoveNthHelper.java
        │   │   │   ├── threesum/
        │   │   │   │   ├── ThreeSum.java
        │   │   │   │   ├── ThreeSumHelper.java
        │   │   │   ├── Main.java
        │   ├── test/
        │   │   ├── java/
        │   │   │   ├── palindrome/
        │   │   │   │   ├── PalindromeTest.java
        │   │   │   ├── removenthfromend/
        │   │   │   │   ├── RemoveNthFromEndTest.java
        │   │   │   ├── threesum/
        │   │   │   │   ├── ThreeSumTest.java
        ├── build.gradle
        ├── settings.gradle
        ├── README.md
```

---

## **1️⃣ Gradle Build Configuration**

### **📄 `build.gradle`**

```gradle
plugins {
    id 'java'
}

group = 'com.example'
version = '1.0'

repositories {
    mavenCentral()
}

dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter:5.9.0'
}

test {
    useJUnitPlatform()
}
```

### **📄 `settings.gradle`**

```gradle
rootProject.name = 'a1twopointers-java'
```

---

## **2️⃣ Java Implementations**

### **Palindrome Algorithm**

#### 📄 `src/main/java/palindrome/Palindrome.java`

```java
package palindrome;

public class Palindrome {
    public static boolean isPalindrome(String s) {
        StringBuilder filtered = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                filtered.append(Character.toLowerCase(c));
            }
        }
        String cleaned = filtered.toString();
        int left = 0, right = cleaned.length() - 1;
        while (left < right) {
            if (cleaned.charAt(left) != cleaned.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
```

#### 📄 `src/test/java/palindrome/PalindromeTest.java`

```java
package palindrome;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class PalindromeTest {
    @Test
    void testIsPalindrome() {
        assertTrue(Palindrome.isPalindrome("racecar"));
        assertTrue(Palindrome.isPalindrome("A man, a plan, a canal: Panama"));
        assertFalse(Palindrome.isPalindrome("hello"));
        assertTrue(Palindrome.isPalindrome(" "));
    }
}
```

---

### **Remove Nth Node from End Algorithm**

#### 📄 `src/main/java/removenthfromend/RemoveNthFromEnd.java`

```java
package removenthfromend;

class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

public class RemoveNthFromEnd {
    public static ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode first = dummy;
        ListNode second = dummy;

        for (int i = 0; i <= n; i++) {
            first = first.next;
        }

        while (first != null) {
            first = first.next;
            second = second.next;
        }

        second.next = second.next.next;
        return dummy.next;
    }
}
```

#### 📄 `src/test/java/removenthfromend/RemoveNthFromEndTest.java`

```java
package removenthfromend;

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
        ListNode head = createList(new int[]{1, 2, 3, 4, 5});
        ListNode result = RemoveNthFromEnd.removeNthFromEnd(head, 2);
        assertArrayEquals(new int[]{1, 2, 3, 5}, convertToArray(result));

        head = createList(new int[]{1});
        result = RemoveNthFromEnd.removeNthFromEnd(head, 1);
        assertArrayEquals(new int[]{}, convertToArray(result));
    }
}
```

---

### **Three Sum Algorithm**

#### 📄 `src/main/java/threesum/ThreeSum.java`

```java
package threesum;

import java.util.*;

public class ThreeSum {
    public static List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();

        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int left = i + 1, right = nums.length - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }
}
```

#### 📄 `src/test/java/threesum/ThreeSumTest.java`

```java
package threesum;

import org.junit.jupiter.api.Test;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

class ThreeSumTest {
    @Test
    void testThreeSum() {
        int[] input = {-1, 0, 1, 2, -1, -4};
        List<List<Integer>> expected = Arrays.asList(Arrays.asList(-1, -1, 2), Arrays.asList(-1, 0, 1));
        assertEquals(expected, ThreeSum.threeSum(input));

        input = new int[]{1, 2, 3, 4, 5};
        expected = Collections.emptyList();
        assertEquals(expected, ThreeSum.threeSum(input));

        input = new int[]{0, 0, 0, 0};
        expected = Arrays.asList(Arrays.asList(0, 0, 0));
        assertEquals(expected, ThreeSum.threeSum(input));
    }
}
```

---

## **3️⃣ Running the Project**

### **Run Main Class**

```sh
gradle run
```

### **Run Tests**

```sh
gradle test
```

---

## **✅ Conclusion**

Now we have **Java implementations** of the **Palindrome, Remove Nth Node, and Three Sum** algorithms with **Gradle**, **unit tests**, and a well-structured project!

Would you like me to add a `README.md` for this Java implementation? 🚀
