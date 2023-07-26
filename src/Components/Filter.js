import React from "react";
const Filter =(props)=>{
    let filterdata = props.filterdata;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(tittle){
        setCategory(tittle);
    }
    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {filterdata.map((data)=>{
            return(
                <button className="bg-black text-white font-medium rounded-md py-1 px-2 text-lg hover:bg-opacity-50 border-2 transition-all duration-300" key={data.id} onClick={() => filterHandler(data.tittle)}>{data.tittle}</button>
            )
        })}
        </div>
    )
}
export default Filter;