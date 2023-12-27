import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState<number>(0);
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress: number = window.scrollY;
      const scrollHeight: number =
        document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(
          Number(((currentProgress / scrollHeight) * 100).toFixed(2))
        );
      }
    };
    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);
  return completion;
};

export default useScrollProgress;
