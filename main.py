# Quiz Application

questions = [
    {
        "question": "1. What is the capital of India?",
        "options": ["A. Chennai", "B. Delhi", "C. Mumbai", "D. Kolkata"],
        "answer": "B"
    },
    {
        "question": "2. Which keyword is used to create a function in Python?",
        "options": ["A. function", "B. def", "C. fun", "D. define"],
        "answer": "B"
    },
    {
        "question": "3. Which symbol is used for comments in Python?",
        "options": ["A. //", "B. /* */", "C. #", "D. --"],
        "answer": "C"
    },
    {
        "question": "4. What is the output of 10 + 20?",
        "options": ["A. 10", "B. 20", "C. 30", "D. 40"],
        "answer": "C"
    },
    {
        "question": "5. Which data type is used to store multiple values?",
        "options": ["A. int", "B. float", "C. list", "D. string"],
        "answer": "C"
    }
]

score = 0

print("===================================")
print("      WELCOME TO QUIZ APP")
print("===================================")

for q in questions:
    print("\n" + q["question"])

    for option in q["options"]:
        print(option)

    answer = input("Enter your answer (A/B/C/D): ").upper()

    if answer == q["answer"]:
        print("✅ Correct!")
        score += 1
    else:
        print("❌ Wrong!")

print("\n===================================")
print("             RESULT")
print("===================================")
print("Your Score:", score, "/", len(questions))

percentage = (score / len(questions)) * 100
print("Percentage:", percentage, "%")

if percentage >= 80:
    print("🏆 Excellent!")
elif percentage >= 60:
    print("👍 Good Job!")
elif percentage >= 40:
    print("🙂 Average!")
else:
    print("📚 Keep Practicing!")