"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import toast, { Toaster } from "react-hot-toast";

import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquareIcon,
} from "lucide-react";

// EMAIL JS

import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  interface IFormValues {
    from_name: string;
    user_email: string;
    message: string;
  }

  const defaultValue = {
    from_name: "",
    user_email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState<IFormValues>(defaultValue);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
          form.current,
          `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
        )
        .then(
          (result) => {
            toast.success(
              `You have successfully sent the message!\nI will get back to you soon.`
            );
            setFormValues({
              from_name: "",
              user_email: "",
              message: "",
            });
          },
          (error) => {
            toast.error("Message not sent!");
          }
        );
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <form className="flex flex-col gap-y-4" ref={form} onSubmit={sendEmail}>
        {/* Input */}
        <div className="relative flex items-center">
          <Input
            type="name"
            id="name"
            placeholder="Name"
            name="from_name"
            value={formValues.from_name}
            onChange={handleInputChange}
          />
          <User className="absolute right-6" size={20} />
        </div>
        {/* Email */}
        <div className="relative flex items-center">
          <Input
            type="email"
            id="email"
            placeholder="Email"
            name="user_email"
            value={formValues.user_email}
            onChange={handleInputChange}
          />
          <MailIcon className="absolute right-6" size={20} />
        </div>
        {/* Input */}
        <div className="relative flex items-center">
          <Textarea
            placeholder="Type your message"
            name="message"
            value={formValues.message}
            onChange={handleInputChange}
          />
          <MessageSquareIcon className="absolute right-6" size={20} />
        </div>
        <Button
          className="flex items-center gap-x-1 max-w-[165px]"
          type="submit"
          value="Send"
        >
          Let's Talk
          <ArrowRightIcon size={20} />
        </Button>
      </form>
    </>
  );
};

export default Form;
