def is_palindrome(s: str) -> bool:
    """
    Check if a string s is a palindrome.
    The function sanitizes the input (removes non-alphanumeric characters and lowercases it)
    before checking with a two-pointers approach.
    """
    # Sanitize: keep alphanumeric and convert to lowercase
    sanitized = "".join(ch for ch in s if ch.isalnum()).lower()
    left, right = 0, len(sanitized) - 1

    while left < right:
        if sanitized[left] != sanitized[right]:
            return False
        left += 1
        right -= 1

    # If we reach here, it means all characters matched
    return True
