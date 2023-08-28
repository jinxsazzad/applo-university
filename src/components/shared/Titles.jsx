export const SectionTitle =({title,subTitle})=>{
    return(
        <>
        <h1 className="mt-5 text-3xl leading-normal font-bold">{title}</h1>
        <p className="mt-3 break-words text-lg leading-normal text-slate-gray" >{subTitle}</p>
        </>
    )
}