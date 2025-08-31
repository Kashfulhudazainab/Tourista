import React ,{createContext,useState} from 'react'
export const dataContext = createContext();

function UserContext({children}) {
let [showcart,setshowcart]  = useState(false)   

    let data={
showcart,
setshowcart
    }

    return (
        <div>
            <dataContext.Provider value={data}>
            {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext