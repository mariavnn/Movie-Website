
function SearchBar() {
  return (
    <div className="mb-3 xl:w-96">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch gap-1">
            <input
                type="search"
                className="relative m-0 block flex-auto border border-solid rounded-xl border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-white transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-secondary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2" />
            <button type="reset" className="absolute inset-y-0 right-12 flex items-center px-4 py-2 z-10">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 12M4 4L12 12" stroke="#1E1E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            {/* <!--Search icon--> */}
            <span
                className="input-group-text flex items-center whitespace-nowrap rounded-3xl px-3 py-1.5 text-center text-base font-normal text-primary bg-secondary"
                id="basic-addon2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd" />
                </svg>
            </span>
        </div>
    </div>
  );
}

export { SearchBar }
