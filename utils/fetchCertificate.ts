import { ICertificate } from "@/typings";

export const fetchCertificate = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/certification`
  );
  const data = await res.json();
  const certificatates: ICertificate[] = data.certifications;
  return certificatates;
};
