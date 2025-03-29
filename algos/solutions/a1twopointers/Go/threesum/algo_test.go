package threesum

import (
	"reflect"
	"sort"
	"testing"
)

// sortTriplets sorts each triplet and then sorts the list of triplets for consistent comparison.
func sortTriplets(triplets [][]int) [][]int {
	for _, triplet := range triplets {
		sort.Ints(triplet)
	}
	sort.Slice(triplets, func(i, j int) bool {
		for k := 0; k < len(triplets[i]); k++ {
			if triplets[i][k] != triplets[j][k] {
				return triplets[i][k] < triplets[j][k]
			}
		}
		return false
	})
	return triplets
}

func TestThreeSum(t *testing.T) {
	tests := []struct {
		input    []int
		expected [][]int
	}{
		{
			input:    []int{-1, 0, 1, 2, -1, -4},
			expected: [][]int{{-1, -1, 2}, {-1, 0, 1}},
		},
		{
			input:    []int{1, 2, 3, 4, 5},
			expected: [][]int{},
		},
		{
			input:    []int{0, 0, 0, 0},
			expected: [][]int{{0, 0, 0}},
		},
	}

	for _, tt := range tests {
		got := ThreeSum(tt.input)
		if !reflect.DeepEqual(sortTriplets(got), sortTriplets(tt.expected)) {
			t.Errorf("ThreeSum(%v) = %v; want %v", tt.input, got, tt.expected)
		}
	}
}
