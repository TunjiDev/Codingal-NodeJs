# take marks as input from user
print("Enter Marks Obtained in 4 Subjects: ")
math = int(input("Maths: "))
english = int(input("English: "))
science = int(input("Science: "))
hindi = int(input("Hindi: "))

# Let's calculate the percentage of marks
sum = math+english+science+hindi
print("Sum of Maths, English, Science and Hindi = ",sum)

percentage = (sum/400)*100

print("Total Percentage Mark =", percentage)