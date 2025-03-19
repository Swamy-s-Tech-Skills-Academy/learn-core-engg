export function isPalindrome(s: string): boolean {
    const sanitized = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let left = 0, right = sanitized.length - 1;

    while (left < right) {
        if (sanitized[left] !== sanitized[right]) {
            return false; // If mismatch found, return false
        }
        left++;
        right--;
    }

    return true; // If loop completes, it's a palindrome
}
