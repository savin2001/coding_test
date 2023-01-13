import React, { useState } from "react";

const Basic_form = () => {
  // This is an employee object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Ensures the input by the user is stateful and accessible by the system
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handles the submission of form data
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError("Incomplete details");
    } else {
      setError("");
      alert("Form submitted:", formData);
      setFormData({ name: "",
      email: "",
      password: "",})
    }
  };
  return (
    <>
      <main className="w-full ">
        <header className="my-4 px-6">
          <h2 className="mb-2 text-left text-xl font-extrabold text-primary capitalize">
            Employee account creation
          </h2>
        </header>
        <article className="w-full flex flex-col items-start justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-base-100 p-6 rounded-lg w-3/4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border border-gray-400 p-2 rounded-lg w-full"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border border-gray-400 p-2 rounded-lg w-full"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border border-gray-400 p-2 rounded-lg w-full"
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {error && (
              <div className="py-5 text-error animate-pulse text-center">
                {error}
              </div>
            )}
            <button className="mt-4 bg-primary w-full text-base-100 p-2 rounded-lg hover:bg-secondary">
              Sign Up
            </button>
          </form>
        </article>
      </main>
    </>
  );
};

export default Basic_form;
