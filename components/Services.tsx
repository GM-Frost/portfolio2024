import { TabletSmartphone, Combine, Gem, Workflow } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <TabletSmartphone size={72} strokeWidth={0.8} />,
    title: "UX Design",
    description:
      "I prioritize user experience in every project. I excel in designing intuitive and engaging user interfaces that enhance the overall usability of applications.",
  },
  {
    icon: <Combine size={72} strokeWidth={0.8} />,
    title: "UI Development",
    description:
      "With a focus on creating visually appealing and responsive user interfaces, I specialize in turning design concepts into pixel-perfect, interactive interfaces that captivate users.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "From conceptualization to deployment, I am dedicated to crafting robust and scalable applications With expertise in both front-end and back-end technologies.",
  },
  {
    icon: <Workflow size={72} strokeWidth={0.8} />,
    title: "DevOps & CI/CD",
    description:
      "I implement DevOps practices and continuous integration/continuous deployment (CI/CD) pipelines to streamline development and deployment processes.",
  },
];
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* ITEMS */}
        <div className="grid xl:grid-cols-4 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background rounded-full flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
