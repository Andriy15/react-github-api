import {IRepo} from "../models/models";
import React, {useEffect, useState} from "react";
import {useActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/redux";
// import { set, ref, onValue, remove } from 'firebase/database'
// import {db} from "../firebase";
// import {uid} from "uid";

// interface IAction {
//   id: number
//   url: string,
//   uuid: string
// }

export function RepoCard({ repo }: { repo: IRepo }) {
  const {addFavourite, removeFavourite} = useActions()
  const {favourites} = useAppSelector(state => state.github)
  // const uuid = uid()
  // const [fav, setFav] = useState<IAction[]>([])

  const [isFav, setIsFav] = useState(
     favourites.findIndex(f => f.id === repo.id && f.url === repo.html_url) !== -1
  )

  // const [action, setAction] = useState<IAction>({
  //   id: repo.id,
  //   url: repo.html_url,
  //   uuid
  // })

  // const handleDelete = (action: IAction) => {
  //   remove(ref(db, `/${action.uuid}`)).then(() => {
  //     setFav(prevFav => prevFav.filter(item => item.uuid !== action.uuid))
  //   }).catch(error => {
  //     console.error(error)
  //   })
  // }




  // const writeToDatabase = () => {
  //   const fav = { id: repo.id, url: repo.html_url }
  //   set(ref(db, `/${uuid}`), {
  //     action: fav,
  //     uuid,
  //   })
  // }

  // useEffect(() => {
  //   onValue(ref(db), snapshot => {
  //     const data = snapshot.val()
  //     if (data !== null) {
  //       const actionList: IAction[] = Object.values(data)
  //       setFav(actionList)
  //     } else {
  //       setFav([])
  //     }
  //   })
  // }, [])


  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const fav = { id: repo.id, url: repo.html_url }
    addFavourite(fav)
    // writeToDatabase()
    setIsFav(true)
  }

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const fav = { id: repo.id, url: repo.html_url }
    removeFavourite(fav)
    // handleDelete(action)
    setIsFav(false)
  }

  return (
     <div className='border rounded py-2 px-4 mb-2 hover:shadow-md hover:bg-gray-100 transition-all cursor-pointer'>
       <a href={repo.html_url} target='_blank' rel="noreferrer">
         <h2 className='text-lg font-bold'>{ repo.full_name }</h2>
         <p className='text-sm'>
           Forks: <span className='font-bold mr-2'>{ repo.forks },</span>
           Watchers: <span className='font-bold mr-2'>{ repo.watchers },</span>
           Git_url: <span className='font-bold'>{ repo.git_url }</span>
         </p>
         <p className='text-sm font-thin'>{repo.description}</p>

         {!isFav && <button
            className='py-2 px-4 bg-amber-400 mr-2 rounded hover:shadow-md transition-all'
            onClick={addToFavourite}
         >Add
         </button>}

         {isFav && <button
            className='py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all'
            onClick={removeFromFavourite}
         >Remove
         </button>}
       </a>
     </div>
  )
}