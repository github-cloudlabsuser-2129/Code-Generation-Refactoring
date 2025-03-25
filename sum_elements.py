# A simplified and refactored version of the program to sum user-provided integers.

MAX = 100

def calculate_sum(numbers):
    """Calculate the sum of a list of numbers."""
    return sum(numbers)

def main():
    try:
        n = int(input(f"Enter the number of elements (1-{MAX}): "))
        if not 1 <= n <= MAX:
            print(f"Invalid input. Please provide a number between 1 and {MAX}.")
            return

        print(f"Enter {n} integers:")
        try:
            numbers = [int(input(f"Element {i + 1}: ")) for i in range(n)]
        except ValueError:
            print("Invalid input. Please enter valid integers.")
            return

        print("Sum of the numbers:", calculate_sum(numbers))

    except KeyboardInterrupt:
        print("\nProgram terminated by user.")

if __name__ == "__main__":
    main()
