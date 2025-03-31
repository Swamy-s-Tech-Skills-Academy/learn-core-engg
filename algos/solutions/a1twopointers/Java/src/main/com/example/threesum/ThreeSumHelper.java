package com.example.threesum;

import java.util.List;

public class ThreeSumHelper {
    public static void demoThreeSum() {
        int[] input = { -1, 0, 1, 2, -1, -4 };
        System.out.println("Input Array: [-1, 0, 1, 2, -1, -4]");

        List<List<Integer>> results = ThreeSum.threeSum(input);
        System.out.println("Three Sum Results: " + results);
    }
}
