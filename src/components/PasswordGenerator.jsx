import { useState } from "react"

const PasswordGenerator=()=>{
    const[length,setLength] = useState(8)
    const[includeLowercase,setIncludeLowercase] = useState(true)
    const[includeUpperCase,setIncludeUpperCase] = useState(true)
    const[includeNumbers,setIncludeNumbers] = useState(true)
    const[includeSymbols,setIncludeSymbols] = useState(true)
    const[password,setPassword] = useState("")
    function handleLength(e)
    {
         setLength(parseInt(e.target.value))
    }
    
  const generatePassword=()=>{
     let charSet = ""
     if(includeUpperCase){
        charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     }if(includeLowercase){
        charSet += "abcdefghijklmnopqrstuvxxyz"

     }if(includeNumbers){
        charSet += "0123456789"
     }if(includeSymbols){
        charSet += `!@#$%^&*()_+=:;"'<>,.>?/|\}[{]`
     }
     let generatedPassword ="";
     for(let i=0;i<length;i++){
        const randIndex = Math.floor(Math.random()* charSet.length)
        generatedPassword += charSet[randIndex]
    }
     
     setPassword(generatedPassword)
  }

  const copy=()=>{
  navigator.clipboard.writeText(password)
  alert("Password Copied "+password)
  }

    return(
        <div className="password-generator">
             
            <h2>Strong Password Generator</h2>
            <div className="input-group">
                <label htmlFor="num">Password Length:</label>
                <input type="number" id="num" value={length} onChange={handleLength}/>

            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="upper" checked={includeUpperCase} onChange={(e)=>{setIncludeUpperCase(e.target.checked)}}/>
                <label htmlFor="upper">Include UpperCase</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="lower" checked={includeLowercase} onChange={(e)=>{setIncludeLowercase(e.target.checked)}}/>
                <label htmlFor="upper">Include LowerCase</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="numbers" checked={includeNumbers} onChange={(e)=>{setIncludeNumbers(e.target.checked)}}/>
                <label htmlFor="numbers">Include Numbers</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="symbol" checked={includeSymbols} onChange={(e)=>{setIncludeSymbols(e.target.checked)}}/>
                <label htmlFor="symbol">Include Symbol</label>
            </div>
            <button className="generate-btn" onClick={generatePassword}>Generated Password</button>
            <div className="generated-password">
                <input type="text" readOnly value={password}/>
                <button className="copybtn" onClick={copy}>Copy</button>

            </div>
        </div>
    )
}
export default PasswordGenerator