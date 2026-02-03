"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post("/api/contact", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ───────── Animations ───────── */
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="contact"
      className="py-24 px-5 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-teal-400">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-400">
            Feel free to reach out — I’d love to connect.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          
          {/* ───── Form ───── */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            variants={containerVariants}
          >
            {/* Name */}
            <motion.div variants={itemVariants}>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div variants={itemVariants}>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                {...register("message", {
                  required: "Message is required",
                })}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            {/* Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-teal-500 py-3 font-medium text-black hover:bg-teal-400 transition disabled:opacity-50"
              variants={itemVariants}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {/* Status */}
            {submitStatus === "success" && (
              <p className="text-sm text-green-500">
                Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Try again.
              </p>
            )}
          </motion.form>

          {/* ───── Contact Info ───── */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold font-mono text-teal-400 mb-2">
                Contact
              </h3>
              <p className="text-gray-400 text-sm">
                Email:{" "}
                <a
                  href="mailto:adarshnagar247@gmail.com"
                  className="text-teal-400 hover:underline"
                >
                  sahanigovardhan69@gmail.com
                </a>
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold font-mono text-teal-400 mb-4">
                Socials
              </h3>
              <div className="flex gap-6">
                <a
                  href="https://github.com/Govardhannn"
                  target="_blank"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  <FaGithub size={26} />
                </a>
                <a
                  href="https://www.linkedin.com/in/govardhan-sahani-356a43269/"
                  target="_blank"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  <FaLinkedin size={26} />
                </a>
                <a
                  href="https://x.com/easygovardhan"
                  target="_blank"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  <FaTwitter size={26} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
