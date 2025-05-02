import React, { useState } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  MapPinIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    propertyType: "",
    budgetMin: "",
    budgetMax: "",
    preferredContact: "",
    location: "",
    moveInTimeframe: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let fileUrl = "";

    try {
      if (formData.file) {
        const data = new FormData();
        data.append("file", formData.file);
        data.append("upload_preset", uploadPreset);

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
          {
            method: "POST",
            body: data,
          }
        );

        const fileData = await res.json();
        fileUrl = fileData.secure_url;
        console.log("Uploaded file URL:", fileUrl);
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        property_type: formData.propertyType,
        budget_min: formData.budgetMin,
        budget_max: formData.budgetMax,
        preferred_contact: formData.preferredContact,
        location: formData.location,
        move_in_timeframe: formData.moveInTimeframe,
        file_url: fileUrl || "No file uploaded",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      toast.success("Your message has been sent!");

      setFormData({
        name: "",
        email: "",
        message: "",
        propertyType: "",
        budgetMin: "",
        budgetMax: "",
        preferredContact: "",
        location: "",
        moveInTimeframe: "",
        file: null,
      });
      document.querySelector('input[type="file"]').value = null;
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send your message.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white py-20 px-4 flex items-center justify-center mt-15"
    >
      <RevealOnScroll>
        <motion.div
          className="w-full max-w-3xl p-8 bg-white rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-black text-center mb-6">
            Let's Get You Into the Perfect Property
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Whether you're buying, selling, or just exploring your options,
            we're here to help.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                icon={<UserIcon className="w-5 h-5 text-gray-700" />}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
              <InputField
                icon={<EnvelopeIcon className="w-5 h-5 text-gray-700" />}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>

            <TextAreaField
              icon={<ChatBubbleLeftIcon className="w-5 h-5 text-gray-700" />}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about what you're looking for..."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectField
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                options={["Residential", "Commercial", "Rental"]}
                placeholder="Property Type"
              />
              <SelectField
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                options={["Email", "Phone"]}
                placeholder="Preferred Contact Method"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InputField
                icon={
                  <ArrowTrendingDownIcon className="w-5 h-5 text-gray-700" />
                }
                name="budgetMin"
                type="number"
                value={formData.budgetMin}
                onChange={handleChange}
                placeholder="Min Budget"
              />
              <InputField
                icon={<ArrowTrendingUpIcon className="w-5 h-5 text-gray-700" />}
                name="budgetMax"
                type="number"
                value={formData.budgetMax}
                onChange={handleChange}
                placeholder="Max Budget"
              />
            </div>

            <InputField
              icon={<MapPinIcon className="w-5 h-5 text-gray-700" />}
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Preferred Location"
            />

            <SelectField
              name="moveInTimeframe"
              value={formData.moveInTimeframe}
              onChange={handleChange}
              options={[
                "Within 3 months",
                "3 to 6 months",
                "6 to 12 months",
                "More than 12 months",
              ]}
              placeholder="Move-in Timeframe"
            />

            <div>
              <label className="block text-gray-600 mb-2 text-sm">
                Attach any relevant documents (optional)
              </label>
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                className="file:mr-5 file:py-1 file:px-3 file:border-[1px] file:rounded-lg file:text-xs file:font-medium file:bg-stone-50 file:text-stone-700 hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-indigo-700 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-600 text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold py-3 rounded-md cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};

const InputField = ({
  icon,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => (
  <div className="relative">
    {icon && (
      <div className="absolute inset-y-0 left-3 flex items-center placeholder:text-gray-600">
        {icon}
      </div>
    )}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-600 text-black"
    />
  </div>
);

const TextAreaField = ({ icon, name, value, onChange, placeholder }) => (
  <div className="relative">
    {icon && <div className="absolute left-3 top-3">{icon}</div>}
    <textarea
      name={name}
      rows="4"
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-600 text-black"
    />
  </div>
);

const SelectField = ({ name, value, onChange, options, placeholder }) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    required
    className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-600"
  >
    <option value="">{placeholder}</option>
    {options.map((opt, i) => (
      <option key={i} value={opt.toLowerCase().replace(/\s+/g, "_")}>
        {opt}
      </option>
    ))}
  </select>
);
