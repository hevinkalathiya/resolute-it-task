export function Features() {
  return (
    <>
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNlOWYzZmQiPjxwYXRoIGQ9Ik0xMjgwIDg2Yy0xOS45LTE3LjIxLTQwLjA4LTM5LjY5LTc5Ljg5LTM5LjY5LTU3LjQ5IDAtNTYuOTMgNDYuNTktMTE1IDQ2LjU5LTUzLjYxIDAtNTkuNzYtMzkuNjItMTE1LjYtMzkuNjJDOTIzLjcgNTMuMjcgOTI0LjI2IDg3IDg1My44OSA4N2MtODkuMzUgMC03OC43NC04Ny0xODguMi04N0M1NTQgMCA1NDMuOTUgMTIxLjggNDIzLjMyIDEyMS44Yy0xMDAuNTIgMC0xMTcuODQtNTQuODgtMTkxLjU2LTU0Ljg4LTc3LjA2IDAtMTAwIDQ4LjU3LTE1MS43NSA0OC41Ny00MCAwLTYwLTEyLjIxLTgwLTI5LjUxdjU0SDEyODB6Ii8+PC9nPjwvc3ZnPg=="
        alt=""
        className="w-full"
      />
      <div className="bg-[#e9f3fd] mx-auto">
        <p className="text-3xl  text-center">
          Explore our awesome <span className="font-bold">Feature Set</span>
        </p>
        <img
          className=" flex items-center justify-center text-center  m-auto "
          src="https://re-pos.in/wp-content/uploads/2019/11/title_divider-1.png"
        />
      </div>
      <div className="mx-auto grid w-full items-center space-y-4 md:px-[150px] md:py-16 px-2 md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-4 bg-[#e9f3fd]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="shadow-2xl rounded-2xl border bg-white">
            <div className="p-4 pb-10">
              <img
                loading="lazy"
                src="https://re-pos.in/wp-content/uploads/2019/11/ftr_set_icon_01.png"
                alt=""
                width="70"
                height="70"
                className="mx-auto my-7"
              />
              <p className="mt-3 text-lg text-center text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur fugit ratione placeat repudiandae impedit? Temporibus.
              </p>
              <div className="mt-4 flex justify-center items-center">
                <button className="inline-flex items-center justify-center rounded-md p-3 px-5 bg-[#002365] border-[#002365] text-white text-sm  hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-2">
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
