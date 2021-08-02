import React from 'react'
import { Link } from "react-router-dom";
import { bgColorHover } from '../utils/ColorChange';

const GoBack = () => {
    return (
        <div className=" flex flex-row items-start mb-4 ">
        <Link
          to="/portfolio"
          className={`cursor-pointer ${bgColorHover} hover:text-white font-bold rounded-lg border-2 px-4 py-2`}
        >
          Go Back
        </Link>
      </div>
    )
}

export default GoBack
