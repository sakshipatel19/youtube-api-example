import React from 'react';
import {connect} from 'react-redux';
class Content extends React.Component{
  render(){
    console.log(this.props)
     const result=this.props.data.map((data,index) =>{
         return(
           <tr key={index}>
             <td>{data.title}</td>
             <td>{data.updated_at}</td>
             <td>{data.created_at}</td>
             <td>{data.status}</td>
           </tr>
         );
     });
     return(
       <tbody>
        {result}
       </tbody>
     );
    }
 }
 function mapStateToProps(state){
   return{
     data: state.activeData
   };

}
export default connect(mapStateToProps)(Content);
