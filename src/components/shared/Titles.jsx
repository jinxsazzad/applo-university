export const SectionTitle =({title,subTitle,style})=>{
    return(
        <div className={`flex flex-col justify-center items-${style} my-8`}>
        <h1 className="uppercase mt-5 text-3xl md:text-4xl leading-normal font-semibold">{title}</h1>
        <p className={`mt-3 break-words w-[70%] text-${style} md:text-lg leading-normal text-slate-gray`} >{subTitle}</p>
        </div>
    )
}