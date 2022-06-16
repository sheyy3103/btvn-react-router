import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "./Data";


function Detail() {
    let { dcm } = useParams();
    useEffect(() => {
        console.log(dcm)
        // lấy id từ dcm  tìm trong Data và set vào state in ra HTML 
    })
    return (
        <>

            <div className="container">


                <h1 className="my-4">Page Heading 
                    <small> Secondary Text</small>
                </h1>


                <div>

                    {
                        Data.map((item,key)=>{
                            return Number(dcm) === item.id ?(
                                <div key={key} className="row">
                                    <div className="col-md-8">
                                        <img className="img-fluid" src={item.avatar} alt="" />
                                    </div>

                                    <div className="col-md-4">
                                        <h3 className="my-3">ID: {item.id}</h3>
                                        <h3 className="my-3">Name: {item.title}</h3>
                                            <p>{item.content}</p>
                                    </div>
                                </div>
                                )

                                :(
                                   <div key={key}></div> 
                                );

                            }
                        )
                    }

                </div>
            </div>

        </>
    );
}

export default Detail;