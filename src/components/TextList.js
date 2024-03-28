const TextList = (props) => {

    const items = props.gifs.map((itemData,i) => {
        return <Item key={i} url = {itemData.url}/>
    })

    return (
        <div className="text-container">
            {items}
        </div>
    )
}

const Item = (props) => {
    return(
        <div>
            <img src={props.url} alt="gif"/>
        </div>
    )
}


export default TextList