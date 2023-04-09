import Image from 'next/image'

export default function Post({title}){
    return(
        <>
            <div>
                <div className="overflow-hidden rounded-xl">
                    <Image
                        src="https://placehold.co/1000x600/png"
                        alt="Blog post image"
                        width={1000}
                        height={600}
                    />
                </div>
                <div className="mt-5">
                    <span className="text-gray-400"> Mart 05, 2021 </span>
                    <h3 className="text-4xl font-semibold flex-1 mt-2 leading-[50px]">
                        Tentang
                        Creativity
                        Block pada
                        UI Designer
                    </h3>
                    <p className="text-gray-400 mt-3">
                        Beberapa cara yang saya lakuhan ketika tidak <br />
                        memilik ide atau bingung untuk memulai <br /> 
                        design
                    </p>
                </div>
            </div> 
        </> 
    )
}