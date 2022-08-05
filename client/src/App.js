import React, {Fragment} from "react"
import 'rbx/index.css';
import Rotas from './routes';
import './App.css';

function App() {

  // const[sent, setSent] = useState(false)
  // const[text, setText] = useState("")

  // const handleSend = async (e) => {
  //   e.preventDefault();
  //   setSent(true)
  //   try {
  //     await axios.post("http://localhost:3001/send_mail", {
  //       text: text
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <Fragment>
      <Rotas/>
    </Fragment>
  );
}

export default App;

// return (
//   <div className="App">
//     {!sent ? (
//       <form onSubmit={handleSend}>
//         <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
//         <button type="submit">Send Email</button>
//       </form>
//     ) : (
//       <h1>Email Sent</h1>
//     )}
//   </div>
// );