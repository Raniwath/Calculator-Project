import React, { useState } from "react";
import { Button, Input } from 'antd'
import 'antd/dist/antd.min.css'
import './index.css'


export default function Calculator() {


    const [result, setResult] = useState("");


    // to render the value together
    const click_btn = (event) => {
        setResult(result + event.currentTarget.name)
          console.log(event.currentTarget.name);
    }


    // to clear all value of input field after clicking on (clear) button
    const clear_btn = () => {
        setResult("")
    }


    //to remove or delete the last value of result (one by one can remove) after pressing (C) btn
    const backSpace_btn = () => {
        setResult(result.slice(0, result.length - 1))
    }


    // to calculate the value after pressing (=) btn
    const calculation_btn = () => {
        setResult(eval(result).toString())
    }


    return (
        <>
            <div className="container_div">


                <div className="input_field_div">
                    <Input type='text' placeholder='0' value={result} />
                </div>


              {/* name attribute is used to render the value on the input field */}
                <div className="operator_div">
                    <Button onClick={clear_btn} className='clear_btn'> Clear </Button>

                    <Button onClick={backSpace_btn} className='back_btn'> C </Button>

                    <Button onClick={click_btn} name='/'> / </Button>
                    <Button onClick={click_btn} name='*'> * </Button>
                    <Button onClick={click_btn} name='-'> - </Button>
                    <Button onClick={click_btn} name='+'> + </Button>
                </div>

                <div className="digits_div">
                    <Button onClick={click_btn} name='7'> 7 </Button>
                    <Button onClick={click_btn} name='8'> 8 </Button>
                    <Button onClick={click_btn} name='9'> 9 </Button>
                    <Button onClick={click_btn} name='4'> 4 </Button>
                    <Button onClick={click_btn} name='5'> 5 </Button>
                    <Button onClick={click_btn} name='6'> 6 </Button>
                    <Button onClick={click_btn} name='1'> 1 </Button>
                    <Button onClick={click_btn} name='2'> 2 </Button>
                    <Button onClick={click_btn} name='3'> 3 </Button>
                    <Button onClick={click_btn} name='0'> 0 </Button>
                    <Button onClick={click_btn} name='.'> . </Button>

                    <Button onClick={calculation_btn} className='equalto_btn'> = </Button>
                </div>

            </div>
        </>
    )
}