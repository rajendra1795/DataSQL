# Connect to SQL Workbench

import mysql.connector

mydb = mysql.connector.connect(host = "localhost", user = "root", passwd = "root123", database = "employee_data")

mycursor = mydb.cursor()

mycursor.execute("show databases")

for i in mycursor:
	print(i)
	
# Employee Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "localhost", user = "root", passwd = "root123", database = "employee_data")

mycursor = mydb.cursor()

data = "INSERT INTO employee (emp_name, department, city, salary) VALUES (%s, %s, %s, %s)"

val = ("Rajesh", "Manager", "Vizag", 17000)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")


# Read Employee

import mysql.connector

mydb = mysql.connector.connect(host = "localhost", user = "root", passwd = "root123", database = "employee_data")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM employee")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# Employee Update

import mysql.connector

mydb = mysql.connector.connect(host = "localhost", user = "root", passwd = "root123", database = "employee_data")

mycursor = mydb.cursor()


data = "UPDATE employee SET salary = 15000 WHERE emp_name = 'Ravi' "

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")


# Employee Delete

import mysql.connector

mydb = mysql.connector.connect(host = "localhost", user = "root", passwd = "root123", database = "employee_data")

mycursor = mydb.cursor()


data = "DELETE FROM employee WHERE emp_name = 'Kumar' "

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")
