import React, { useState } from "react"
import Menu from "../menu-component/menu.component"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaAlignJustify } from "react-icons/fa";
import {burguerContainer} from './navigation.module.css'



const Navigation = () => {
  const [value, setValue] = useState(false);

  const toogleMenu = () => {
    console.log(value);
    setValue(!value);
  }
  return (
    <>
      <div className={burguerContainer}>
        <FaAlignJustify onClick={() => toogleMenu()} />
      </div>


      {value ? <Menu open={value} toggle={() => toogleMenu()} /> : <Menu />}
    </>
  )
}

export default Navigation