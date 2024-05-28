import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";

type TSearchProps = {
  handleSearch: (text: string) => void;
};

const Search: React.FC<TSearchProps> = ({ handleSearch }) => {
  const [search, setSearch] = useState<string>("");
  const [filterData, setFilteredData] = useState<string[]>();

  const searchSuggestions = useMemo(
    () => [
      "Who can use Mooyi?",
      "How much does each response cost?",
      "How do I create a survey on Mooyi?",
      "What are screening questions?",
    ],
    []
  );

  const handleFilter = useCallback(
    (searchTerm: string) => {
      const filteredData = searchSuggestions.filter((item) => {
        const content = item.toLowerCase();
        return searchTerm && content.includes(searchTerm.toLowerCase());
      });

      setFilteredData(filteredData);
    },
    [searchSuggestions]
  );

  useEffect(() => {
    handleFilter(search);
  }, [handleFilter, search]);

  const handleClick = (text: string) => {
    handleSearch(text)
  };

  return (
    <div className="w-full rounded-xl mt-10 p-5 bg-white">
      <div className="flex items-center space-x-2">
        <div>
          <CiSearch size={20} />
        </div>
        <div className="w-full">
          <input
            type="text"
            className="w-full text-black bg-white focus:outline-none placeholder:text-slate-400"
            placeholder="Search FAQs"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {search !== "" ? (
        <div className="bg-white rounded-b-lg w-full space-y-5 pt-5">
          {filterData?.map((items, i) => (
            <p
              key={i}
              onClick={() => handleClick(items)}
              className="cursor-pointer active:bg-slate-100"
            >
              {items}
            </p>
          ))}
          {search !== "" && filterData?.length === 0 ? (
            <p className="text-center">No result found</p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
