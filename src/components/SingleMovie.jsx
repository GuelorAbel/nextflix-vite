import React from 'react'

export default function SingleMovie({ item}) {
      return (
      <div className="relative group">
                  {/* le bloc de l'image */}
                  <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}
                        className="w-80 object-cover h-full"
                  />
                  {/* le contenu se trouve en dessous */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black flex items-center justify-center 
                  px-4 opacity-0 group-hover:opacity-100 cursor-pointer ease-in-out duration-300">
                        <h3 className="text-white text-center font-semibold">{item?.title}</h3>
                  </div>
      </div>
      )
}
