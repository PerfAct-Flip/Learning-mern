const User = (props, children)=> {
    console.clear();
    console.log(props);
    return <>
    <section>Name : {props.name}</section>
    <section>Age : {props.age}</section>
    <section>Hobbies : {props.hobbies.map((hobby)=> (
       <ul key={Math.random()*10}>
       <li> {hobby} </li>
     </ul>
     
    ))}
    </section>
    <section> {props.children}</section>
    </>
  
  }
export default User;