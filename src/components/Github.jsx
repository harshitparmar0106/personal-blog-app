import { useEffect, useState } from "react";

export default function Github(){

    const[data, setData] = useState();

    useEffect(() => {
       async function fetchData (){
            try{
                const response = await fetch("https://api.github.com/users/harshitparmar0106")
                const result = await response.json()
                setData(result); 
            } catch(err){
                console.log("error in getting the data",err)
            }
       }
       fetchData();
    },[])

    return(
        <div className="text-center text-4xl h-[50vh] flex  item-center justify-center bg-gray-200">
            <img src={data?.avatar_url} alt="" className="w-1/5 h-auto"/>
            {data?.bio}
            <br/>
            Public Repos :- {data?.public_repos}
        </div>
    );
}