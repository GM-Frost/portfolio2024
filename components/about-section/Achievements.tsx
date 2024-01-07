"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Loader from "../Loader";
import { fetchCertificate } from "@/utils/fetchCertificate";
import { IAwards, ICertificate } from "@/typings";
import { fetchAwards } from "@/utils/fetchAwards";

const Achievements = () => {
  const [allCertifications, setAllCertifications] = useState<ICertificate[]>(
    []
  );
  const [awards, setAwards] = useState<IAwards[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCertificatesData = async () => {
      setLoading(true);
      try {
        const certiData: ICertificate[] = await fetchCertificate();
        if (certiData) {
          setAllCertifications([...certiData]);
        } else {
          console.error("Received undefined data from the API");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching certificates", error);
        setLoading(false);
      }
    };

    fetchCertificatesData();
  }, []);

  useEffect(() => {
    const fetchAwardsData = async () => {
      setLoading(true);
      try {
        const awardsData: IAwards[] = await fetchAwards();
        setAwards([...awardsData]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Awards", error);
        setLoading(true);
      }
    };

    fetchAwardsData();
  }, []);

  return (
    <div className="text-center xl:text-left">
      <h3 className="h3 mb-8">Certification & Achievements</h3>
      {/* Achievement */}
      <div className="mb-16">
        <h4 className="text-xl font-semibold mb-2">Certifications</h4>
        <div className="border-b border-border mb-4"></div>
        {/* SKILLS LIST */}
        <div>
          {allCertifications.map((certificate) => (
            <>
              <div key={certificate._id}>
                <div className="font-medium flex gap-x-5 justify-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={certificate.image} />
                    <AvatarFallback>T</AvatarFallback>
                  </Avatar>
                  {certificate.certificatetitle} &mdash;{" "}
                  <span className="subtitle">{certificate.issuingbody}</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* Awards */}
      <div>
        <h4 className="text-xl font-semibold mb-2 xl:text-left">Awards</h4>
        <div className="border-b border-border mb-4">
          {/* Tools List */}
          <div className="grid xl:grid-cols-2 mb-4 justify-center xl:gap-x-8 xl:justify-start">
            {!loading && awards.length === 0 ? (
              <div className="text-center flex items-center justify-center mt-10">
                <Loader />
              </div>
            ) : (
              <>
                {awards.map((award) => (
                  <div key={award._id}>
                    {award.awardtitle} &mdash;{" "}
                    <span className="subtitle">{award.awardingbody}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
