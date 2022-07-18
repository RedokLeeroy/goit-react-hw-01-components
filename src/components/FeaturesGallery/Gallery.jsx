import { Item } from "components/FeaturesGalleryItem/FeaturesGalleryItem"
export const FeaturesGallery = ({data}) => {
    return(
        <ul>
            {data.map(({title, text, id}) => <Item key={id} text={text} title={title} />)}
        </ul>
    )
}