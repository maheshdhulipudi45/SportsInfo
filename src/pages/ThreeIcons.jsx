import React from "react"
import { GiChampions } from "react-icons/gi";
import {  FaUsers,FaFutbol } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";


import styles from '../module.css/ThreeIcons.module.css'



const Three =[
    {
       icon :<FaUsers />,
       numb : "50+",
       para :"sports Coverd"
    },
     {
       icon : <GiChampions/>,
       numb : "10M+",
       para :"Active Users"
    }, {
       icon : <RiGlobalLine />,
       numb : "150+",
       para :"Countries"
    },{
       icon : <FaFutbol/>,
       numb : "50+",
       para :" Daily Matches"
    }
]


const ThreeIcons =() => {
    return(
        <>
           <div className={styles.box1}>
                    {Three.map((item,index) => (
                      <div key={index}  className={styles.box2}>
                        <div className={styles.icons}>{item.icon}</div>
                        <h4>{item.numb}</h4>
                        <p>{item.para}</p>
                      </div> 
                    ))}
                    </div> 
    
                 
                 
        </>
    )
}
export default ThreeIcons