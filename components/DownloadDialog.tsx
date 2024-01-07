import { IPersonalInfo } from "@/typings";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Download, FileText, Send } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface DownloadDialogProps {
  personalInfo: IPersonalInfo | undefined;
}

const DownloadDialog: React.FC<DownloadDialogProps> = ({ personalInfo }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="flex gap-x-2">
          Resume <Download size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Download Resume?</DialogTitle>
          <DialogDescription>
            Please select the format you prefer.
          </DialogDescription>
        </DialogHeader>
        <div className="grid  gap-4 py-4">
          <div className="grid grid-cols-2 items-center text-center justify-between gap-4">
            <Label
              htmlFor="name"
              className="text-center items-center justify-center hover:text-primary cursor-pointer"
              onClick={() => window.open(personalInfo?.resumeDoc || "#")}
            >
              <Image
                priority
                alt="Word Icon"
                width={100}
                height={100}
                src={"./wordIcon.svg"}
                className="mb-2"
              />
              <span>Download Docx</span>
            </Label>
            <Label
              htmlFor="name"
              className="text-center items-center justify-center hover:text-primary cursor-pointer"
              onClick={() => window.open(personalInfo?.resumePDF || "#")}
            >
              <Image
                priority
                alt="Word Icon"
                width={100}
                height={100}
                src={"./pdfIcon.svg"}
                className="mb-2"
              />
              <span>Download PDF</span>
            </Label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default DownloadDialog;
