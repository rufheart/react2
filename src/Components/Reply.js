
import { useState ,useEffect} from "react";


function Reply({value3,value4}){
    let [deyer, setDeyer] = useState(value3.number)
    let [re,setRe] = useState(false)
    function plus(){
        let pl = deyer+1
        setDeyer(pl)
    }
    function minus(){
        let mn = deyer-1
        if(mn<0){
            mn=0
        }
        setDeyer(mn)
    }
    function reply(){
        console.log(reply,)
        if(re==false){
            setRe(true)
        }
        else{
            setRe(false)
        }
    }
    console.log(value3,'zzzz')
    return(
        <div>
            <div className="zz">
                <div className="ee">
                    <div className="commentreply">
                        <div>
                            <div>
                                <button onClick={plus}>+</button>
                                <span>{value3.number}</span>
                                <button onClick={minus}>-</button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={require('../avatar-angela-gray.webp')} alt="" />
                                <p>{value3.username}</p>
                                <p>{value3.startdate}</p>
                                <i className="fa fa-reply" onClick={reply}><span>Reply</span></i>
                            </div>
                            <div>
                                {value3.comment}
                            </div>
                        </div>
                    </div>
                </div>
                <div >                                   
                    <div>
                    {re==false?null:
                        <div className="send2">            
                            {console.log('bu ki send 2 dir')}
                            <div>
                                <div>
                                    <img src={require('../ls.webp')} alt="" />
                                </div>
                                <div>
                                    <textarea />
                                </div>
                                <div>
                                    <button>Reply</button>
                                </div>
                            </div>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reply