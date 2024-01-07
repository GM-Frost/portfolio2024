import Image from "next/image";

interface DevimgProps {
  containerStyles: string;
  imgSrc: string;
}

const Devimg: React.FC<DevimgProps> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
};

export default Devimg;
