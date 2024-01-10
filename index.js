function App(){

    const [Expression,setExpression]= React.useState('');
    
    const[answer,setAnswer]=React.useState(0);
    const Display=(number)=>{
        setExpression( prev => prev + number)
        if(Expression(Expression.length -1) == "="){
        if(/[0-9.]/.test(symbol))
    {setExpression(symbol)}
     else {setExpression(answer + symbol)}
        }
}


    const Answer=()=>{
        setAnswer(eval(Expression))
        setExpression(prev => prev + "=")
    }


const clearDisplay=()=>{
setExpression("")
setAnswer(0)
}
    return (  
        <div>
     <div>
    
<input id="display"type="text"value={Expression} disabled></input>
     </div>
     <div id="Display" >{answer}</div>
    <button className="pad" onClick={()=>Display('0')} id="zero">0</button>
    <button className="pad" onClick={()=> Display("1")}id="one">1</button>
    <button className="pad" onClick={()=> Display("2")} id="two">2</button>
    <button className="pad" onClick={()=>Display("3")} id="three">3</button>
    <button className="pad" id="four" onClick={()=>Display('4')}>4</button>
    <button className="pad" id="five"onClick={()=>Display("5")}>5</button>
    <button className="pad" id="six" onClick={()=>Display("6")}>6</button>
    <button className="pad" id="seven" onClick={()=>Display("7")}>7</button>
    <button className="pad" id="eight"onClick={()=>Display("8")}>8</button>
    <button className="pad" id="nine"onClick={()=>Display("9")}>9</button>
    <button className="pad" id="multiply"onClick={()=>Display("*")}>*</button>
    <button className="pad" id="subtract"onClick={()=>Display("-")}>-</button>
    <button className="pad" id="add"onClick={()=>Display("+")}>+</button>
    <button className="pad" id="divide"onClick={()=>Display("/")}>/</button>
    <button className="pad" onClick={()=>clearDisplay("0")} id="clear">clear</button>
    <button className="pad" id="decimal"onClick={()=>Display(".")}>.</button>
    <button className="pad" id="equals"onClick={Answer}>=</button>
            
       </div> )
    }
    
    ReactDOM.render(<App />, document.getElementById("root"));