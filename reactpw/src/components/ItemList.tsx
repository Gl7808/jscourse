import box from "../assets/image/box.png"
import ChampionshipScroll from "../assets/image/ChampionshipScroll.png"
type itemList = {
    itemList : Array<item>
}
type item = {
    name : string,
    dropChance: number,
    img: string,
    cost: number,
    counter: number
}

export const ItemList = (props: itemList) => {
    return(
        <div>
            {props.itemList.map((item) => {
                return(
                    <div>
                        <p className={'title'}>
                            <img src={"../" + item.img}/>
                            {item.name}
                            <img src={ChampionshipScroll}></img>
                        </p>
                    </div>
                )
            })}
        </div>
    );
}