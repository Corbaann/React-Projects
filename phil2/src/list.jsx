function List(props){
const modelsType=props.model
const category=props.category
const power= props.power 
   
const modelItems=modelsType.map(Type => <li key={Type.id}>{Type.name}:&nbsp;
   <b>{Type.price}</b></li>);
return(<>
     <h3 className="category">{category}</h3>
    
    <ol className="list-items">{modelItems} </ol>
    </>
) ;
}

export default List;