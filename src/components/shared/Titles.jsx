export const SectionTitle =({title,subTitle,style})=>{
    return(
        <div className={`flex flex-col justify-center items-${style} my-8`}>
        <h1 className="mt-5 text-4xl leading-normal font-bold">{title}</h1>
        <p className="mt-3 break-words text-lg leading-normal text-slate-gray" >{subTitle}</p>
        </div>
    )
}