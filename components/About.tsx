import Devimg from "./Devimg";
import Achievements from "./about-section/Achievements";
import PersonalInfo from "./about-section/PersonalInfo";
import Qualifications from "./about-section/Qualifications";
import Skills from "./about-section/Skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const About = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Images */}
          <div className="hidden xl:flex flex-1 relative">
            <Devimg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="achievements"
                >
                  Achievements
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* PERSONAL - Tabs Content */}
                <TabsContent value="personal">
                  <PersonalInfo />
                </TabsContent>

                {/* QUALIFICATIONS - Tabs Content */}
                <TabsContent value="qualifications">
                  <Qualifications />
                </TabsContent>

                {/* SKILLS - Tabs Content */}
                <TabsContent value="skills">
                  <Skills />
                </TabsContent>

                {/* ACHIEVEMENT - Tabs Content */}
                <TabsContent value="achievements">
                  <Achievements />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
