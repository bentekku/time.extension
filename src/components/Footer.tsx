import { useState, useEffect } from "react";

const today: Date = new Date();
console.log(today);

const Footer = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date(); // Format time as a human-readable string
      setTime(now);
    };

    // Update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // h-[8rem]
  return (
    <div className="w-full flex flex-col items-center justify-center  bg-lightText gap-5">
      <h1 className="text-xl text-darkText font-medium">{time.toString()}</h1>
      <div className="text-sm flex items-center justify-center bg-darkMode text-lightText py-2 px-6 rounded-xl shadow-lg -mb-3 ">
        <p>
          Made with &lt;3 by{" "}
          <a
            href="http://www.github.com/bentekku"
            target="_blank"
            className="hover:underline"
          >
            Shadab Khan
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
