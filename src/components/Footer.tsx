import { ChevronRight } from "lucide-react";

const Footer = () => {
  const companies = [
    {
      name: "Application",
      items: [
        "FineDine POS",
        "Pizza POS",
        "Retail POS",
        "Cafe POS",
        "Food Truck POS",
        "Quick service POS",
        "Bar POS",
        "Bakery POS",
        "Ice Cream POS",
      ],
    },
    {
      name: "Products",
      items: [
        "ReANALYSE - Reporting App",
        "ReORDER - Inventory App",
        "ReSOLVE - Accounting App",
        "ReMARKET - Marketing App",
      ],
    },
    {
      name: "Get in touch",
      items: ["About us", "Contact us", "Careers", "Blog", "Help Center"],
    },
  ];
  return (
    <div className="">
      <footer className="w-full bg-[#002365] ">
        <div className="mx-auto flex justify-center p-2 md:p-10 flex-col items-start md:space-x-8 md:flex-row">
          <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
            {companies.map((Company, i) => (
              <div key={i} className="mb-8 lg:mb-0">
                <p className="mb-6 text-lg font-semibold  text-white">
                  {Company.name}
                </p>
                <ul className="flex flex-col space-y-4 text-[14px] text-gray-200 ">
                  {Company.items.map((item, j) => (
                    <li key={j} className="flex">
                      <ChevronRight className="w-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t flex flex-wrap  items-center justify-center gap-10 text-white p-4">
          <p>india</p>
          <p>Ahemdabad</p>
          <p>Goa</p>
          <p>Hydrabad</p>
          <p>Chennai</p>
          <p>Delhi</p>
          <p>Mumbai</p>
        </div>
        <div className="border-b flex-wrap  flex items-center justify-center gap-10 text-white p-4">
          <p>Saudi Arabia</p>
          <p>UAE</p>
          <p>Qatar</p>
          <p>Oman</p>
          <p>Bahrain</p>
          <p>Kuwait</p>
          <p>Lebanon</p>
          <p>Jordan</p>
          <p>Egypt</p>
          <p>Kenya</p>
          <p>Maldives</p>
        </div>
        <div className="border-t flex-wrap  flex items-center justify-center gap-10 text-white p-4">
          <p>©2022 All Rights Reserved by Me.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
