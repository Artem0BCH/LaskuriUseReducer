import { useContext } from "react";
import { LaskuriContext } from "../contexts/laskuriContext.jsx";

export default function Painikkeet() {
    const { dispatch } = useContext(LaskuriContext);

    return (
        <div>
            <button onClick={() => dispatch({ type: "KASVATA" })}>+1</button>
            <button onClick={() => dispatch({ type: "VAHENNA" })}>-1</button>
            <button onClick={() => dispatch({ type: "NOLLAA" })}>Nollaa</button>
        </div>
    );
}
