class Student:

    college = "SRKR"

    def __init__(self, name):
        self.name = name

    # Instance method
    def display(self):
        print(self.name)

    # Class method
    @classmethod
    def change_college(cls, name):
        cls.college = name

    # Static method
    @staticmethod
    def add(a, b):
        return a + b


s1 = Student("John")

s1.display()
print(s1.name)

Student.change_college("JNTU")

print(Student.college)

print(s1.add(5, 10))