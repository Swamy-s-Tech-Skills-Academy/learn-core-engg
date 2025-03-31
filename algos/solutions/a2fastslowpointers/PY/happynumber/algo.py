def sum_of_squared_digits(n):
    total = 0
    while n > 0:
        digit = n % 10
        total += digit * digit
        n //= 10
    return total


def is_happy_number(n):
    slow = n
    fast = sum_of_squared_digits(n)

    while fast != 1 and slow != fast:
        slow = sum_of_squared_digits(slow)
        fast = sum_of_squared_digits(sum_of_squared_digits(fast))

    return fast == 1
