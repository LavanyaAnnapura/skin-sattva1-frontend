import { useMemo, useState } from "react";
import { CalendarCheck2, Loader2 } from "lucide-react";
import { services } from "@/data/servicesCatalog";

const API = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:8000";

const initialState = {
  patient_name: "",
  phone: "",
  service: "",
  preferred_date: "",
  preferred_time: "",
  message: "",
};

export const BookingForm = () => {
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  const serviceOptions = useMemo(() => {
    const uniqueTitles = [...new Set(services.map((service) => service.title))];
    return uniqueTitles.sort((a, b) => a.localeCompare(b));
  }, []);

  const updateField = (field) => (event) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const submitBooking = async (event) => {
    event.preventDefault();
    setFeedback({ type: "", text: "" });

    if (!API) {
      setFeedback({
        type: "error",
        text: "Backend URL is missing. Please set REACT_APP_BACKEND_URL in your frontend .env file.",
      });
      return;
    }

    if (!form.patient_name.trim()) {
      setFeedback({ type: "error", text: "Please enter your full name." });
      return;
    }

    if (!form.phone.trim() || form.phone.trim().length < 10) {
      setFeedback({
        type: "error",
        text: "Please enter a valid phone number.",
      });
      return;
    }

    if (!form.service.trim()) {
      setFeedback({ type: "error", text: "Please select a service." });
      return;
    }

    if (!form.preferred_date) {
      setFeedback({ type: "error", text: "Please choose a preferred date." });
      return;
    }

    if (!form.preferred_time) {
      setFeedback({ type: "error", text: "Please choose a preferred time." });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        patient_name: form.patient_name.trim(),
        phone: form.phone.trim(),
        service: form.service,
        preferred_date: form.preferred_date,
        preferred_time: form.preferred_time,
        message: form.message.trim(),
      };

      const response = await fetch(`${API}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const rawText = await response.text();
      let data = {};

      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data?.detail ||
            data?.message ||
            rawText ||
            "Could not submit booking right now.",
        );
      }

      setForm(initialState);
      setFeedback({
        type: "success",
        text: `Booking request submitted successfully.${data?.status ? ` Status: ${data.status}.` : ""}`,
      });
    } catch (error) {
      setFeedback({
        type: "error",
        text:
          error?.message ||
          "Something went wrong while submitting your booking.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article
      className="doctor-content-card booking-form-card"
      data-testid="booking-form-card"
    >
      <div
        className="flex items-center justify-between gap-4"
        data-testid="booking-form-header"
      >
        <div>
          <p className="section-tag" data-testid="booking-form-tag">
            Consultation Booking
          </p>
          <h2 className="service-title" data-testid="booking-form-heading">
            Book Consultation
          </h2>
        </div>
      </div>

      <form
        className="booking-form-grid mt-6 grid gap-4 md:grid-cols-2"
        onSubmit={submitBooking}
        data-testid="booking-form"
      >
        <div className="grid gap-2" data-testid="booking-name-field-wrap">
          <label
            className="info-card-label"
            htmlFor="booking-name"
            data-testid="booking-name-label"
          >
            Full Name
          </label>
          <input
            id="booking-name"
            value={form.patient_name}
            onChange={updateField("patient_name")}
            required
            className="booking-input w-full rounded-lg border border-border bg-white px-3 py-2 text-base"
            data-testid="booking-name-input"
          />
        </div>

        <div className="grid gap-2" data-testid="booking-phone-field-wrap">
          <label
            className="info-card-label"
            htmlFor="booking-phone"
            data-testid="booking-phone-label"
          >
            Phone Number
          </label>
          <input
            id="booking-phone"
            value={form.phone}
            onChange={updateField("phone")}
            required
            minLength={10}
            className="booking-input w-full rounded-lg border border-border bg-white px-3 py-2 text-base"
            data-testid="booking-phone-input"
          />
        </div>

        <div
          className="grid gap-2 md:col-span-2"
          data-testid="booking-service-field-wrap"
        >
          <label
            className="info-card-label"
            htmlFor="booking-service"
            data-testid="booking-service-label"
          >
            Service Interested
          </label>
          <select
            id="booking-service"
            value={form.service}
            onChange={updateField("service")}
            required
            className="booking-input w-full rounded-lg border border-border bg-white px-3 py-2 text-base"
            data-testid="booking-service-select"
          >
            <option value="" data-testid="booking-service-option-default">
              Select a service
            </option>
            {serviceOptions.map((service) => (
              <option
                key={service}
                value={service}
                data-testid={`booking-service-option-${service
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`}
              >
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2" data-testid="booking-date-field-wrap">
          <label
            className="info-card-label"
            htmlFor="booking-date"
            data-testid="booking-date-label"
          >
            Preferred Date
          </label>
          <input
            id="booking-date"
            type="date"
            value={form.preferred_date}
            onChange={updateField("preferred_date")}
            required
            className="booking-input w-full rounded-lg border border-border bg-white px-3 py-2 text-base"
            data-testid="booking-date-input"
          />
        </div>

        <div className="grid gap-2" data-testid="booking-time-field-wrap">
          <label
            className="info-card-label"
            htmlFor="booking-time"
            data-testid="booking-time-label"
          >
            Preferred Time
          </label>
          <input
            id="booking-time"
            type="time"
            value={form.preferred_time}
            onChange={updateField("preferred_time")}
            required
            className="booking-input w-full rounded-lg border border-border bg-white px-3 py-2 text-base"
            data-testid="booking-time-input"
          />
        </div>

        <div
          className="grid gap-2 md:col-span-2"
          data-testid="booking-message-field-wrap"
        >
          <label
            className="info-card-label"
            htmlFor="booking-message"
            data-testid="booking-message-label"
          >
            Concern / Message (Optional)
          </label>
          <textarea
            id="booking-message"
            value={form.message}
            onChange={updateField("message")}
            rows={4}
            className="booking-input w-full rounded-lg border border-border bg-white px-3 py-2 text-base"
            data-testid="booking-message-input"
          />
        </div>

        <div
          className="md:col-span-2 flex flex-wrap items-center gap-3"
          data-testid="booking-submit-row"
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="cta-button"
            data-testid="booking-submit-button"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" size={16} aria-hidden="true" />
            ) : (
              <CalendarCheck2 size={16} aria-hidden="true" />
            )}
            {isSubmitting ? "Submitting..." : "Submit Booking Request"}
          </button>

          {feedback.text && (
            <p
              className={`text-sm ${
                feedback.type === "success" ? "text-green-700" : "text-red-600"
              }`}
              data-testid={
                feedback.type === "success"
                  ? "booking-success-message"
                  : "booking-error-message"
              }
            >
              {feedback.text}
            </p>
          )}
        </div>
      </form>
    </article>
  );
};
