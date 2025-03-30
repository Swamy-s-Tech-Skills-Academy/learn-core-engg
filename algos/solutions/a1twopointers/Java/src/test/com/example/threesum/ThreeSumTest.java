package com.example.threesum;

import org.junit.jupiter.api.Test;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

class ThreeSumTest {
    @Test
    void testThreeSum() {
        int[] input = { -1, 0, 1, 2, -1, -4 };
        List<List<Integer>> expected = Arrays.asList(Arrays.asList(-1, -1, 2), Arrays.asList(-1, 0, 1));
        assertEquals(expected, ThreeSum.threeSum(input));

        input = new int[] { 1, 2, 3, 4, 5 };
        expected = Collections.emptyList();
        assertEquals(expected, ThreeSum.threeSum(input));

        input = new int[] { 0, 0, 0, 0 };
        expected = Arrays.asList(Arrays.asList(0, 0, 0));
        assertEquals(expected, ThreeSum.threeSum(input));
    }
}
