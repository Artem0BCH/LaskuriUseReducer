import { useContext } from "react";
import { LaskuriContext } from "../contexts/laskuriContext.jsx";

export default function Naytto() {
    const { state } = useContext(LaskuriContext);

    return <h2>Laskurin arvo: {state.laskuri}</h2>;
}
