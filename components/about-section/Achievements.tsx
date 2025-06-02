"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Loader from "../Loader";
import { IAwards, ICertificate } from "@/typings";

type Props = {
  awardsInfo: IAwards[];
  certificationsInfo: ICertificate[];
};

const Achievements: React.FC<Props> = ({ awardsInfo, certificationsInfo }) => {
  return (
    <div className="text-center xl:text-left">
      <h3 className="h3 mb-8">Certification & Achievements</h3>

      {/* ── Certifications Section ── */}
      <div className="mb-16">
        <h4 className="text-xl font-semibold mb-2">Certifications</h4>
        <div className="border-b border-border mb-4"></div>

        <div>
          {certificationsInfo.length === 0 ? (
            <p>No certifications found.</p>
          ) : (
            certificationsInfo.map((certificate) => (
              <div key={certificate._id} className="mb-4">
                <div className="font-medium flex gap-x-5 justify-center xl:justify-start">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={certificate.image} alt="Cert" />
                    <AvatarFallback>T</AvatarFallback>
                  </Avatar>
                  <div>
                    {certificate.certificatetitle} &mdash;{" "}
                    <span className="subtitle">{certificate.issuingbody}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── Awards Section ── */}
      <div>
        <h4 className="text-xl font-semibold mb-2 xl:text-left">Awards</h4>
        <div className="border-b border-border mb-4"></div>

        <div className="grid xl:grid-cols-2 gap-y-4 justify-center xl:justify-start">
          {awardsInfo.length === 0 ? (
            <p>No awards found.</p>
          ) : (
            awardsInfo.map((award) => (
              <div key={award._id} className="mb-2">
                {award.awardtitle} &mdash;{" "}
                <span className="subtitle">{award.awardingbody}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
