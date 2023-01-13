import React, { useState } from "react";

function DynamicForm() {
  // Array of institutions
  const universities = [
    "Harvard University",
    "Stanford University",
    "Massachusetts Institute of Technology (MIT)",
    "California Institute of Technology (Caltech)",
    "University of Oxford",
    "University of Cambridge",
    "Princeton University",
    "Yale University",
    "University of Chicago",
    "University College London (UCL)",
    "Imperial College London",
    "University of Pennsylvania",
    "University of Edinburgh",
    "University of Michigan",
    "University of California, Berkeley (UCB)",
    "University of California, Los Angeles (UCLA)",
    "University of California, San Diego (UCSD)",
    "University of California, Santa Barbara (UCSB)",
    "University of California, Davis (UCD)",
    "University of California, Irvine (UCI)",
    "Other"
  ];

  const [formData, setFormData] = useState({
    institution_name: "",
    start_date: "",
    end_date: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.institution_name ||
      !formData.start_date ||
      !formData.end_date ||
      !formData.description
    ) {
      setError("Incomplete details");
    } else {
      setError("");
      alert("Form submitted:", formData);
      setFormData({
        institution_name: "",
        start_date: "",
        end_date: "",
        description: "",
      });
    }
  };

  return (
    <>
      <main className="w-full p-8">
        <header className="my-4 px-6 flex justify-between">
          <h2 className="mb-2 text-left text-xl font-extrabold text-primary capitalize">
            Work experience
          </h2>
          <button className="btn btn-primary btn-circle">+</button>
        </header>
        <article className="w-full flex flex-col items-start justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-base-100 p-6 rounded-lg w-full"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="institution_name"
              >
                Institution name
              </label>
              <select
                className="border border-gray-400 p-2 rounded-lg w-full"
                type="text"
                name="institution_name"
                id="institution_name"
                value={formData.institution_name}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select University
                </option>
                {universities.map((university, index) => (
                  <option key={index} value={university}>
                    {university}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="start_date"
                >
                  Start date
                </label>
                <input
                  className="border border-gray-400 p-2 rounded-lg w-full"
                  type="date"
                  name="start_date"
                  id="start_date"
                  value={formData.start_date}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="end_date"
                >
                  End date
                </label>
                <input
                  className="border border-gray-400 p-2 rounded-lg w-full"
                  type="date"
                  name="end_date"
                  id="end_date"
                  value={formData.end_date}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                className="border border-gray-400 p-2 rounded-lg w-full"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
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
}

export default DynamicForm;
