const Description = () => {
  return (
    <div className="max-w-5xl block md:flex mx-auto my-20 p-2">
      <div className="flex flex-col w-full md:w-7/12">
        <div className="mr-10">
          <div className="flex md:gap-16 md:mx-10  ">
            <div className=" w-1/2 rounded-xl flex justify-center items-center flex-col mx-4 h-[170px] bg-gradient-to-br from-blue-900 via-teal-500 to-green-400 via-sky-600  p-10">
              <h2 className="text-3xl text-bold text-white text-center">7+</h2>
              <p className="text-white text-center">Countries</p>
            </div>
            <div className=" w-1/2 rounded-xl flex justify-center items-center flex-col md:mt-10 h-[170px] bg-gradient-to-br from-blue-900 via-teal-500 to-green-400 via-sky-600  p-10">
              <h2 className="text-3xl text-bold text-white text-center">50+</h2>
              <p className="text-white text-center">Cities</p>
            </div>
          </div>
        </div>
        <div className="mr-10 mt-5">
          <div className="flex md:gap-16 md:mx-10  ">
            <div className=" w-1/2 rounded-xl flex justify-center items-center flex-col mx-4 h-[170px] bg-gradient-to-br from-blue-900 via-teal-500 to-green-400 via-sky-600  p-10">
              <h2 className="text-3xl text-bold text-white text-center">7+</h2>
              <p className="text-white text-center">Countries</p>
            </div>
            <div className=" w-1/2 rounded-xl flex justify-center items-center flex-col md:mt-10 h-[170px] bg-gradient-to-br from-blue-900 via-teal-500 to-green-400 via-sky-600  p-10">
              <h2 className="text-3xl text-bold text-white text-center">50+</h2>
              <p className="text-white text-center">Cities</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:mt-0 mt-5 md:w-5/12">
        <p className="text-3xl ">
          What Is <span className="font-bold">REPOS?</span>
        </p>
        <p className="text-sm text-slate-600">
          <img src="https://re-pos.in/wp-content/uploads/2019/11/title_divider-1.png" />
          <br />
          RePOS is much more than just any other POS Software. It has been
          conceived, designed and brought to reality by a team of software
          experts. It serves all the requirements a restaurant has in order to
          achieve its goal of customer satisfaction.{" "}
        </p>
        <p className="mt-5 text-sm text-slate-600">
          RePOS is a Full-featured POS software application that can handle
          counter sales, inventory tracking, customer data management, mobile
          connectivity, and robust integrations. It is a solution for Casual /
          Fine Dine Restaurants, Quick Serve Restaurants, Bakery, Cake Shops,
          Cafe / Coffee Shops, Ice Cream / Juice Centers, Food Chains, Pizza
          Chains, Delivery Kitchen, Food Trucks and so on!
        </p>
        <button className="inline-flex items-center justify-center rounded-md p-3 px-3 bg-[#002365] border-[#002365] text-white text-sm  hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-2">
          Know More
        </button>
      </div>
    </div>
  );
};

export default Description;
