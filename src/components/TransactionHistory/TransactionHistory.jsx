import { Item } from "components/HistoryItem/Item"
export const TransactionHistory = ({history}) => {return <table class="transaction-history">
{history.map(({id, type, amount, currency}) => <Item key={id} type={type} amount={amount} currency={currency}/>)}
</table>
} 