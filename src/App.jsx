import { Button } from "bootstrap";
import styles from "./App.module.css";
import BottonsContainer from "./components/BottonsContainer";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [calVal,setCalVal] = useState("");
const onButtonClick=(ButtonText)=>{
if(ButtonText==="c"){
setCalVal("");
}else if(ButtonText==="="){
const result=eval(calVal);
setCalVal(result);
}else{
  const newDisplayValue=calVal+ButtonText;
  setCalVal(newDisplayValue);
}
};

  return (
    <div className={styles.calculator}>
<Display displayValue={calVal}></Display>
<BottonsContainer onButtonClick={onButtonClick}></BottonsContainer>
    </div>

  );
}

export default App;
