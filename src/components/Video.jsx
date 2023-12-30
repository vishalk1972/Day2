const Video=(props)=>{
    return (
        <div className="w-96 p-10">
            <img className="w-full rounded-lg" src={props.url} alt="video"/>
            <h1 className="text-2xl font-semibold">{props.heading}</h1>
        </div>
    )
}
export default Video;