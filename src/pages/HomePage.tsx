import React, { useEffect, useState } from "react";
import { useSearchUsersQuery } from "../store/github/github.api";
import { useDebounce } from "../hooks/debounce";
import { useLazyGetUserReposQuery } from "../store/github/github.api";
import { RepoCard } from "../components/RepoCard";

export function HomePage() {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  })
  const [fetchRepos, { isLoading: areRepoLoading, data: repos }] = useLazyGetUserReposQuery()


  useEffect(() => {
    setDropdown(debounced.length >= 3 && data?.length! > 0);
  }, [debounced, data, search]);

  const clickHandler = (username: string) => {
    fetchRepos(username)
    setDropdown(false)
  };

  return (
     <div className="flex justify-center h-screen pt-10 mx-auto w-screen">
       {isError && (
          <p className="text-center text-red-600">Something wrong</p>
       )}

       <div className="relative w-[550px]">
         <input
            type="text"
            className="border px-2 py-4 w-full h-[40px] mb-2 outline-0"
            placeholder="Search Github username..."
            value={search}
            onChange={e => setSearch(e.target.value)}
         />

         {dropdown && (
            <ul className="list-none absolute top-[40px] left-0 right-0 m-h-[200px] overflow-y-scroll shadow-md bg-white">
              {isLoading && <p className="text-center">Loading...</p>}
              {data?.map((user) => (
                 <li
                    key={user.id}
                    className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                    onClick={() => clickHandler(user.login)}
                 >
                   {user.login}
                 </li>
              ))}
            </ul>
         )}

         <div className="container">
           {areRepoLoading && ( <p className="text-center">Repos are loading...</p> )}
           {repos?.map((repo) => ( <RepoCard repo={repo} key={repo.id} /> ))}
         </div>
       </div>
     </div>
  );
}
