

function  List(){

   const items = [{id: 1 , name : "toyota" , engine :4100 },
      { id: 2 ,name : "honda" , engine :800},
      { id: 3 ,name :"bentley" , engine:1000},
    { id: 4 ,name :"jagua" , engine:3500}];

    //items.sort((a,b) => a.name.localeCompare(b.name)); alphabetical
   // items.sort((a,b) => b.name.localeCompare(a.name)); reverse numerical
  //items.sort((a,b) =>a.engine - b.engine); numerical

  const LowPowers= items.filter(item => item.engine <1500);

items.sort((a,b) => b.engine - a.engine );
const caritems= LowPowers.map (LowPower => <li key={LowPower.id}>{LowPower.name}:&nbsp;
                 <b> { LowPower.engine }</b> </li>);

   return (
      <ol>{caritems}</ol>
   );
}

    
export default List;