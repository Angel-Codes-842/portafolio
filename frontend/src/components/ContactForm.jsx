import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md dark:bg-card dark:text-textMain">
      {success && <div className="mb-4 text-green-600 dark:text-green-400">¡Mensaje enviado!</div>}
      <div className="mb-4">
        <label className="block mb-1 font-semibold dark:text-textMain">Nombre</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 dark:bg-darkSection dark:border-gray-600 dark:text-textMain"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold dark:text-textMain">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 dark:bg-darkSection dark:border-gray-600 dark:text-textMain"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold dark:text-textMain">Mensaje</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 dark:bg-darkSection dark:border-gray-600 dark:text-textMain"
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;