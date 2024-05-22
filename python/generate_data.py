import json
import random
import faker
import string

# Initialize the Faker library
fake = faker.Faker()

# Define job roles and locations
job_roles = ["Software Engineer", "Data Scientist", "Product Manager", "Designer", "QA Engineer", "DevOps Engineer", "System Administrator"]
locations = ["New York", "San Francisco", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas"]

# Generate unique employee IDs
employee_ids = list(range(1, 1001))
random.shuffle(employee_ids)

# Split into manager and regular employee IDs
manager_ids = employee_ids[:100]
employee_ids = employee_ids[100:]

# Function to generate a random salary
def generate_salary():
    return str(random.randint(50000, 150000))

def generate_random_password(length=12):  
    # Define the character sets to use in the password
    upper_case = string.ascii_uppercase
    lower_case = string.ascii_lowercase
    digits = string.digits
    special_characters = string.punctuation

    # Ensure the password contains at least one character from each set
    password = [
        random.choice(upper_case),
        random.choice(lower_case),
        random.choice(digits),
        random.choice(special_characters)
    ]
    
    # Fill the rest of the password length with a mix of all character sets
    all_characters = upper_case + lower_case + digits + special_characters
    password += random.choices(all_characters, k=length - len(password))
    
    # Shuffle the list to ensure the characters are in random order
    random.shuffle(password)
    
    # Convert the list to a string and return
    return ''.join(password)

# Create employees data
employees = []

# Create manager data
for manager_id in manager_ids:
    employee = {
        "employeeInfo":{
            "id": manager_id,
            "name": fake.name(),
            "phoneNumber": fake.basic_phone_number(),
            "jobRole": random.choice(job_roles),
            "location": random.choice(locations),
            "salary": generate_salary(),
            "managerID": 0,
            "isHR": random.choice([True, False])
        },
        "userInfo":{
            "username":fake.user_name(),
            "password":generate_random_password()
        }
    }
    employees.append(employee)

# Create regular employee data
for employee_id in employee_ids:
    employee = {
        "employeeInfo":{
            "id": employee_id,
            "name": fake.name(),
            "phoneNumber": fake.basic_phone_number(),
            "jobRole": random.choice(job_roles),
            "location": random.choice(locations),
            "salary": generate_salary(),
            "managerID": random.choice(manager_ids),
            "isHR": random.choice([True, False])
        },
        "userInfo":{
            "username":fake.user_name(),
            "password":generate_random_password()
        }
    }
    employees.append(employee)

# Write to a JSON file
with open('employees.json', 'w') as f:
    json.dump(employees, f, indent=4)

print("Generated data for 1000 employees and saved to employees.json")
