import React from 'react';
import {Table ,className,ButtonToolbar,DropdownButton,MenuItem} from 'react-bootstrap';
import Content from '../components/data-filter-content.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import selectAction from '../actions/index'
class DataFilterTable extends React.Component{

  handleSelect(e){
    this.props.selectAction(e);
  }

render(){
   return(
     <div style={{width:"700px",margin:"0 auto",marginTop:"50px"}}>
       <Table striped bordered condensed >
         <thead>
           <tr>
             <th>Title</th>
             <th>Updated At</th>
             <th>Created at</th>
             <th>
              <ButtonToolbar>
                <DropdownButton title="Status" id="dropdown-size-medium" onSelect={this.handleSelect.bind(this)}>
                  <MenuItem eventKey="Approved" >Approved</MenuItem>
                  <MenuItem eventKey="Denied">Denied</MenuItem>
                  <MenuItem eventKey="Pending">Pending</MenuItem>
                  <MenuItem eventKey="All" >All</MenuItem>
                </DropdownButton>
              </ButtonToolbar>
            </th>
           </tr>
         </thead>
         <Content/>
     </Table>
     </div>
   );
  }
 }

 function mapStateToProps(state){
   return{
     data: state.data
   };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({selectAction:selectAction},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(DataFilterTable);
