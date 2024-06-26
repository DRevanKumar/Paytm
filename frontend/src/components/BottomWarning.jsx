import { Link } from "react-router-dom"
export function BottomWarning({label,bottomText,to}){
    
     return <div className="py-2 text-sm flex justify-center">
          <div>
            {label}
          </div>
          <Link className="pointer underline pl-1 cursor-pointer text-blue-700 font-bold" to={to}> {bottomText}</Link>
        </div>
    
}