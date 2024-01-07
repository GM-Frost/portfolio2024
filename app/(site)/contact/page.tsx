import Form from "@/components/Form";
import { MailIcon, HomeIcon } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto">
      {/* Text & Image */}
      <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
        {/* Text */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
            Hello
          </div>
          <h1 className="h1 max-w-md mb-8">Let's work together</h1>
          <p className="subtitle max-w-[400px]">
            I'm excited about the possibility of collaborating with you on your
            next project. Whether you need a Developer to bring your vision to
            life or enhance your existing applications, I'm here to help. Feel
            free to reach out, and let's create something amazing together!
          </p>
        </div>
        {/* Image */}
        <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
      </div>
      {/* Info Text & Form */}
      <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
        {/* Info Text */}
        <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
          {/* Mail */}
          <div className="flex items-center gap-x-8">
            <MailIcon size={18} className="text-primary" />
            <div>nayanbastola111@gmail.com</div>
          </div>
          {/* Mail */}
          <div className="flex items-center gap-x-8">
            <HomeIcon size={18} className="text-primary" />
            <div>Toronto, ON, Canada</div>
          </div>
          {/* Mail */}
        </div>
        {/* Form */}
        <Form />
      </div>
    </div>
  );
};

export default Contact;
