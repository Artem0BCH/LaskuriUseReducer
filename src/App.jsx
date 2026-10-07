import { LaskuriProvider } from "./contexts/laskuriContext.jsx";
import Naytto from "./components/naytto";
import Painikkeet from "./components/painikkeet";

export default function App() {
    return (
        <LaskuriProvider>
            <h1>Laskuri</h1>
            <Naytto />
            <Painikkeet />
        </LaskuriProvider>
    );
}
