
export const Appbar = () => {
    let firstname = localStorage.getItem("name");
    return <div className="shadow h-18 flex justify-between  bg-black rounder-md">
        <div className="flex flex-col justify-center h-full ml-6 sm:text-4xl font-bold text-white font-sans md:font-Helvectica p-4">
            Payment App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 text-white text-lg">
                Hello
            </div>
            <div className=" felx flex-col rounded-full h-9 w-9 bg-slate-200 flex justify-center  mt-4 mr-2">
                <div className="flex  justify-center h-full text-2xl font-bold">
                    {firstname[0]}
                </div>
            </div>
        </div>
    </div>
}