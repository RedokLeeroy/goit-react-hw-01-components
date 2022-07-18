import { Stats } from "components/Stats/Stats"
export const Stat = ({data}) => {
    return(
        <ul class="stat-list">
            {data.map(({id, label, percentage}) => <Stats key={id} label={label} percentage={percentage}/>)}
        </ul>
    )
}