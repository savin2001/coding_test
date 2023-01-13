import React from "react";

const Table = () => {
  const employee_list = [
    { name: "John Doe", job: "Developer", salary: 75000, uid: 1 },
    { name: "Jane Smith", job: "Designer", salary: 80000, uid: 2 },
    { name: "Bob Johnson", job: "Manager", salary: 90000, uid: 3 },
    { name: "Samantha Williams", job: "Developer", salary: 70000, uid: 4 },
    { name: "Michael Brown", job: "Designer", salary: 85000, uid: 5 },
    { name: "David Garcia", job: "Manager", salary: 95000, uid: 6 },
    { name: "Jessica Miller", job: "Developer", salary: 72000, uid: 7 },
    { name: "Mark Davis", job: "Designer", salary: 78000, uid: 8 },
    { name: "Paul Rodriguez", job: "Manager", salary: 92000, uid: 9 },
    { name: "Sarah Martinez", job: "Developer", salary: 74000, uid: 10 },
    { name: "Brian Anderson", job: "Designer", salary: 80000, uid: 11 },
    { name: "Edward Taylor", job: "Manager", salary: 90000, uid: 12 },
    { name: "Stephanie Thomas", job: "Developer", salary: 71000, uid: 13 },
    { name: "William Jackson", job: "Designer", salary: 83000, uid: 14 },
    { name: "Laura Nelson", job: "Manager", salary: 89000, uid: 15 },
    { name: "Richard Harris", job: "Developer", salary: 73000, uid: 16 },
    { name: "Ashley Perez", job: "Designer", salary: 81000, uid: 17 },
    { name: "Joshua Gomez", job: "Manager", salary: 87000, uid: 18 }
];
  return (
    <>
      <main className="m-6 w-full">
        <header className="py-4">
          <h2 className="mb-2 text-left text-xl font-extrabold text-primary">
            Employee List
          </h2>
        </header>
        <article className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>UID</th>
                <th>Name</th>
                <th>Job</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {employee_list.map((employee) => (
                <tr key={employee.uid}>
                  <th>{employee.uid}</th>
                  <td>{employee.name}</td>
                  <td>{employee.job}</td>
                  <td>{employee.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </main>
    </>
  );
};

export default Table;
