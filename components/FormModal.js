'use client'
import React, { useState, useRef } from 'react';
import { form } from '../data';
import { toast } from 'react-toastify';

const FormModal = ({ isOpen, setIsOpen }) => {
  const [formValues, setFormValues] = useState({});
  const modalRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted!", formValues);
    try {
      const response = await fetch('/api/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
      const result = await response.json();
      if (result?.message == "Email Sent Successfully") {
        toast.success(`${result?.message}`);
      } else {
        toast.error(`${result?.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Reset form values or handle other post-submission logic
      setFormValues({});
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black-1 bg-opacity-50"
        onClick={handleClickOutside}
      >
        <div ref={modalRef} className="bg-white-0 px-5 py-9 md:px-8 md:py-12 rounded shadow-lg z-50 max-w-md w-full overflow-y-scroll h-[80vh]">
          <h2 className="text-xl mb-4">{form.title}</h2>
          <p className="mb-6">{form.description}</p>

          <form onSubmit={handleSubmit}>
            {form.fields.map((field, index) => (
              <div className="mb-4" key={index}>
                <label className="block mb-1">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                {field.type === 'text' || field.type === 'email' ? (
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                  />
                ) : field.type === 'select' ? (
                  <select
                    name={field.name}
                    required={field.required}
                    className="w-full p-2 border rounded"
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    {field.options.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                ) : null}
              </div>
            ))}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 mr-2 bg-gray-600 text-white-0 rounded"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white-0 rounded"
                // onClick={handleSubmit}
              >
                {form.submit_button.label}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormModal;
