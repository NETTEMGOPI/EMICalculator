import { useState } from "react"


export function EmiCalculator()
{
    const [changes,setChanges]= useState(50000);
    const [yChanges,setYChanges]=useState(1);
    const [xChanges,setXChanges]=useState(10.5);
    const [EMI,setEMI]=useState();
    function UpdateChanges(e)
    {
        setChanges(parseInt(e.target.value));  
    }
    function UpdateYChanges(e)
    {
        setYChanges(parseInt(e.target.value));
    }
    function UpdateXChanges(e)
    {
        setXChanges(parseFloat(e.target.value));
    }
    function Calculate()
    {
        const monthlyInterestRate = xChanges / 1200;
        const months = yChanges * 12;
        const powerFactor = Math.pow(1 + monthlyInterestRate, months);
        const emi = changes * monthlyInterestRate * powerFactor / (powerFactor - 1);
        setEMI(emi.toFixed(2));
    }
    return(
        <div className="container" style={{backgroundColor:'rgba(0,0,0,0.05)',height:'260px',width:'1000px',marginTop:'100px'}}>
            <div className="row p-4">
                <div className="col-md-4 ">
                    <span>Amount you need <input type="text" placeholder="50,000" value={changes} onChange={UpdateChanges}style={{width:'100px'}}/></span>
                    <br/>
                    <br/>
                    <input type="range" min="50000" max="4000000" step="1" onChange={UpdateChanges} style={{width:'85%'}}/>
                    <ol className="d-flex justify-content-between" style={{fontSize:'15px'}}>       
                        <dd>50,000</dd>
                        <dd>40,00,000</dd>
                    </ol>

                </div>
                <div className="col-md-4">
                  <span>for <input type="text" placeholder={yChanges} style={{width:'40px'}}/> years</span>
                  <br/>
                    <br/>
                    <input type="range" min="1" max="5"  onChange={UpdateYChanges} style={{width:'55%'}}/>
                    <ol className="d-flex justify-content-between" style={{fontSize:'15px'}}>       
                        <dd>1 Year</dd>
                        <dd>5 Year</dd>
                    </ol>

                </div>
                <div className="col-md-4">
                  <span>Interest rate <input type="text" placeholder={xChanges} style={{width:'50px'}}/> %</span>
                  <br/>
                    <br/>
                    <input type="range" min="10.5" max="21" step="0.1"onChange={UpdateXChanges}style={{width:'55%'}}/>
                    <ol className="d-flex justify-content-between" style={{fontSize:'15px'}}>       
                        <dd>10.5 %</dd>
                        <dd>21 %</dd>
                    </ol>

                </div>
            </div>
            <button className="btn btn-success" onClick={Calculate}>Calculate</button>
            <p>Your Monthly EMI will be {EMI} per month</p>
        </div>
    )
}