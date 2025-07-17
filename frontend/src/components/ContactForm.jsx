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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      {success && <div className="mb-4 text-green-600">¡Mensaje enviado!</div>}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Nombre</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Mensaje</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
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