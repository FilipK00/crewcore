import React, { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../config";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    gdpr_consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "email") {
      validateEmail(value);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Wprowadź poprawny adres e-mail");
      return false;
    } else {
      setEmailError(null);
      return true;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      return;
    }

    axios
      .post(`${API_BASE_URL}/api/mailing/contact/`, formData)
      .then(() => {
        setSubmitted(true);
        setError(null);
      })
      .catch((err) => {
        setError("Something went wrong. Please try again.");
      });
  };

  if (submitted) {
    return <p>Dziękujemy za kontakt! Wkrótce się odezwiemy.</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 lg:p-12 shadow-xl bg-gray-50 w-full flex flex-col gap-6 rounded-xl"
    >
      <h3 className="color-add text-left text-3xl">
        Wypełnij <span className="color-main">formularz</span>
      </h3>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="border-b-[1px] bg-transparent p-2 border-gray-400 outline-none focus:border-[#40B0E7] transition duration-300 ease-linear focus:placeholder:opacity-50 placeholder:transition placeholder:duration-300 placeholder:ease-linear"
        placeholder="Imię i nazwisko"
      />
      <div className="flex flex-col">
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border-b-[1px] bg-transparent p-2 border-gray-400 outline-none focus:border-[#40B0E7] transition duration-300 ease-linear focus:placeholder:opacity-50 placeholder:transition placeholder:duration-300 placeholder:ease-linear"
          placeholder="Adres e-mail"
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
      </div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="border-b-[1px] bg-transparent p-2 border-gray-400 outline-none focus:border-[#40B0E7] transition duration-300 ease-linear focus:placeholder:opacity-50 placeholder:transition placeholder:duration-300 placeholder:ease-linear"
        placeholder="Jak możemy Ci pomóc"
      ></textarea>
      <div className="flex flex-row items-start justify-start gap-2">
        <input
          type="checkbox"
          id="gdpr"
          name="gdpr_consent"
          checked={formData.gdpr_consent}
          onChange={handleCheckboxChange}
          className="mt-1 border-none outline-none"
        />
        <label
          htmlFor="gdpr"
          className="text-xs opacity-40 cursor-pointer text-left"
        >
          Wyrażam zgodę na przetwarzanie moich danych osobowych celem realizacji
          zapytania. Oświadczam, że zapoznałem się z Regulaminem Serwisu,
          Polityką Prywatności, Obowiązkiem informacyjnym oraz akceptuję
          założenia niniejszych dokumentów.
        </label>
      </div>
      <button
        type="submit"
        className="button-main uppercase tracking-[1px]"
        disabled={!!emailError}
      >
        Wyślij
      </button>
    </form>
  );
}
