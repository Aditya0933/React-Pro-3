import React from "react";
const Filter =({filterdata})=>{
    return(
        <div>
            {filterdata.map((data)=>{
            return(
                <button>{data.tittle}</button>
            )
        })}
        </div>
    )
}
export default Filter;