# ============================================================
# MP16 - Recursive Functions
# ============================================================


# 1. Factorial of n
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)


# 2. Largest element in an array
def largest_element(arr, i=0):
    if i == len(arr) - 1:
        return arr[i]
    rest_max = largest_element(arr, i + 1)
    return arr[i] if arr[i] > rest_max else rest_max


# 3. Count the number of digits in n
def count_digits(n):
    n = abs(n)
    if n < 10:
        return 1
    return 1 + count_digits(n // 10)


# 4. Sum of digits
def sum_of_digits(n):
    n = abs(n)
    if n < 10:
        return n
    return (n % 10) + sum_of_digits(n // 10)


# 5. isSorted(arr) - True/False
def isSorted(arr, i=0):
    if i >= len(arr) - 1:
        return True
    if arr[i] > arr[i + 1]:
        return False
    return isSorted(arr, i + 1)


# 6a. isPalindrome(n) - for numbers e.g. 121
def isPalindrome_num(n):
    s = str(abs(n))
    def check(s, left, right):
        if left >= right:
            return True
        if s[left] != s[right]:
            return False
        return check(s, left + 1, right - 1)
    return check(s, 0, len(s) - 1)


# 6b. isPalindrome(arr) - for arrays
def isPalindrome_arr(arr, left=0, right=None):
    if right is None:
        right = len(arr) - 1
    if left >= right:
        return True
    if arr[left] != arr[right]:
        return False
    return isPalindrome_arr(arr, left + 1, right - 1)


# 7. isPrime(n)
def isPrime(n, divisor=2):
    if n < 2:
        return False
    if divisor * divisor > n:
        return True
    if n % divisor == 0:
        return False
    return isPrime(n, divisor + 1)


# ============================================================
# TESTS
# ============================================================

print("=" * 40)
print("1. Factorial")
print(f"   factorial(0)  = {factorial(0)}")   # 1
print(f"   factorial(1)  = {factorial(1)}")   # 1
print(f"   factorial(5)  = {factorial(5)}")   # 120
print(f"   factorial(10) = {factorial(10)}")  # 3628800

print("=" * 40)
print("2. Largest Element in Array")
print(f"   [3,7,1,9,2]  = {largest_element([3, 7, 1, 9, 2])}")  # 9
print(f"   [1,2,3,4,5]  = {largest_element([1, 2, 3, 4, 5])}")  # 5
print(f"   [5,4,3,2,1]  = {largest_element([5, 4, 3, 2, 1])}")  # 5

print("=" * 40)
print("3. Count Number of Digits")
print(f"   count_digits(1)      = {count_digits(1)}")      # 1
print(f"   count_digits(99)     = {count_digits(99)}")     # 2
print(f"   count_digits(12345)  = {count_digits(12345)}")  # 5
print(f"   count_digits(-9999)  = {count_digits(-9999)}")  # 4

print("=" * 40)
print("4. Sum of Digits")
print(f"   sum_of_digits(1)     = {sum_of_digits(1)}")     # 1
print(f"   sum_of_digits(99)    = {sum_of_digits(99)}")    # 18
print(f"   sum_of_digits(1234)  = {sum_of_digits(1234)}")  # 10
print(f"   sum_of_digits(-456)  = {sum_of_digits(-456)}")  # 15

print("=" * 40)
print("5. isSorted")
print(f"   [1,2,3,4]   = {isSorted([1, 2, 3, 4])}")    # True
print(f"   [1,3,2,4]   = {isSorted([1, 3, 2, 4])}")    # False
print(f"   [5,5,5,5]   = {isSorted([5, 5, 5, 5])}")    # True
print(f"   [9,1,2,3]   = {isSorted([9, 1, 2, 3])}")    # False

print("=" * 40)
print("6a. isPalindrome (number)")
print(f"   121   = {isPalindrome_num(121)}")   # True
print(f"   123   = {isPalindrome_num(123)}")   # False
print(f"   1221  = {isPalindrome_num(1221)}")  # True
print(f"   12321 = {isPalindrome_num(12321)}") # True

print("=" * 40)
print("6b. isPalindrome (array)")
print(f"   [1,2,1]     = {isPalindrome_arr([1, 2, 1])}")      # True
print(f"   [1,2,3]     = {isPalindrome_arr([1, 2, 3])}")      # False
print(f"   [1,2,2,1]   = {isPalindrome_arr([1, 2, 2, 1])}")   # True
print(f"   [1,2,3,4]   = {isPalindrome_arr([1, 2, 3, 4])}")   # False

print("=" * 40)
print("7. isPrime")
print(f"   isPrime(1)  = {isPrime(1)}")   # False
print(f"   isPrime(2)  = {isPrime(2)}")   # True
print(f"   isPrime(7)  = {isPrime(7)}")   # True
print(f"   isPrime(10) = {isPrime(10)}")  # False
print(f"   isPrime(13) = {isPrime(13)}")  # True
print(f"   isPrime(25) = {isPrime(25)}")  # False
print("=" * 40)