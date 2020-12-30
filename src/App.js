import CurrencyInput from "./components/CurrencyInput";
import { AppWrapper } from "./components/styles";

export const USD_TO_EUR_RATE = 0.82;
export const EUR_TO_USD_RATE = 1.22;

const App = () => {
  return (
    <AppWrapper>
      <h2>Quickly convert between USD and EUR 💰</h2>

      <CurrencyInput icon="💵" />
      <CurrencyInput icon="💶" />
    </AppWrapper>
  );
};

export default App;
