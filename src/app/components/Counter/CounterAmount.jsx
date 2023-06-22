import { useSelector } from "react-redux"
import { selecTicketCount } from "@/redux/features/cart/selector"

export function CounterAmount() {
    const filmsAmount = useSelector((state) => 
    selecTicketCount(state, '123')
    );
    return (<div className=""> {filmsAmount} </div>)
}