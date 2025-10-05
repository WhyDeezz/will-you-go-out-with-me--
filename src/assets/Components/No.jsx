import { motion } from "motion/react"
import React from "react"

export default function No()
{
    let [pos , setpos]=React.useState({x:0,y:0})

    function moveonhover()
    {
        setpos({
            x :Math.floor(Math.random() * (500  + 1)-500),
            y : Math.floor(Math.random() * (500  + 1)-500)}
            
        )
        console.log(pos.x)
        console.log(pos.y)

    }
    
    return(
    <motion.button onMouseEnter={moveonhover} className="no"
    animate={{x:pos.x,y:pos.y}}
    >NOPE :( </motion.button>)

}