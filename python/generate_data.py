import json
import random
import faker

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

# Create employees data
employees = []

# Create manager data
for manager_id in manager_ids:
    employee = {
        "id": manager_id,
        "name": fake.name(),
        "phoneNumber": fake.basic_phone_number(),
        "jobRole": random.choice(job_roles),
        "location": random.choice(locations),
        "salary": generate_salary(),
        "managerID": 0,
        "isHR": random.choice([True, False])
    }
    employees.append(employee)

# Create regular employee data
for employee_id in employee_ids:
    employee = {
        "id": employee_id,
        "name": fake.name(),
        "phoneNumber": fake.basic_phone_number(),
        "jobRole": random.choice(job_roles),
        "location": random.choice(locations),
        "salary": generate_salary(),
        "managerID": random.choice(manager_ids),
        "isHR": random.choice([True, False])
    }
    employees.append(employee)

# Write to a JSON file
with open('employees.json', 'w') as f:
    json.dump(employees, f, indent=4)

print("Generated data for 1000 employees and saved to employees.json")
