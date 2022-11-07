import { useState } from "react";
import Comment from "./Comment";

function Comments({comment,reply}){
    let [deyer, setDeyer] = useState()
    console.log(comment[0],'Comentssssssssssssssssssssssssssssssssssssssssssssssssssss')
    // for(let i of reply[0]){
    //     console.log(i,'iiiiiiiiiii')
    // }
    return(
        <div>
            <div className="comments">
                {comment[0].map((value,index)=>{

                    return(
                        <div>

                            <Comment value1={value} value2={reply[0]} key={index} id={value.id} />
                           
                        </div>
                    )
                })}

            </div>
            <div>
                {comment.map((value,index)=>{
                    return(
                        <div>
                           <div className="send">
                               <div>
                                    <div>
                                        <img src={require('../ls.webp')} alt="" />
                                    </div>
                                    <div>
                                        <textarea/> 
                                    </div>
                                    <div>
                                        <button>Send</button>
                                    </div>
                                </div>    
                           </div>                           
                        </div>
                    )
                })}
            </div>
        </div>    
    )
}

export default Comments