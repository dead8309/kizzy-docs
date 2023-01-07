export function Video({
  url
}) {
  return (
    <div style={{
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "0.50rem"}}>
      <img
        className='h-[calc(100vh/1.8)] max-h-[700px] rounded-2xl lg:h-fit lg:max-h-fit'
        src={url}/>
    </div>)
}

