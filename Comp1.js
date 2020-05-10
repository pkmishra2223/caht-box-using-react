   import React from 'react';
    
    	const Comp1=(props)=>{
    		return(
    			
<div className=" ma4 bg-light-purple dib pa10  grow shadow-10">
   < div classname="textarea">
    	<div className="divisionn">
<img src={`https://joeschmoe.io/api/v1/${props.name}`} className="hey"/>
    	<p className="tc">{props.name} </p>
    	</div>
    	</div>
</div>

    )
}
export default Comp1;
