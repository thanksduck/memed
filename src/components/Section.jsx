import React from "react";

function Section(){
    return(
        <section className="main--app flex flex-col pl-7 pr-7 mt-4">
            <div className="flex items-center justify-between mt-4">
                <div>
                    <p>Top Text</p>
                    <input type="text" placeholder="Enter Top Text" className="border border-gray-300 p-2 rounded-lg "/>

                </div>
                <div>
                    <p>Bottom Text</p>
                    <input type="text" placeholder="Enter Top Text" className="border border-gray-300 p-2 rounded-lg "/>

                </div>
            
            </div>
            <button className="bg-gradient-to-r from-[#672280] to-[#A626D3] text-white p-2 rounded-lg mt-4">Get a new meme image  🖼</button>

            <img src="/image.png" alt="Meme" className="mt-8"/>

        </section>
    )
}

export default Section