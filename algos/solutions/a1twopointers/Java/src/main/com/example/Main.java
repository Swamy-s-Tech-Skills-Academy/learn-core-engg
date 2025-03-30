package com.example;

import com.example.palindrome.PalindromeHelper;
import com.example.removenthfromend.RemoveNthHelper;
import com.example.threesum.ThreeSumHelper;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Running Two Pointers Demos ===");

        System.out.println("\n👉 Palindrome Check:");
        PalindromeHelper.demoPalindrome();

        System.out.println("\n👉 Remove Nth Node from End:");
        RemoveNthHelper.demoRemoveNth();

        System.out.println("\n👉 Three Sum:");
        ThreeSumHelper.demoThreeSum();
    }
}
