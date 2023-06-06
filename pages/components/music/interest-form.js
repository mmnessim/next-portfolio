import {useState, useEffect} from 'react';
import axios from 'axios';

export function InterestForm() {
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [email, setEmail] = useState();
    const [instrument, setInstrument] = useState();

    function handleFirst(e) {
        setFirst(e.target.value)
    }
    function handleLast(e) {
        setLast(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handleInstrument(e) {
        setInstrument(e.target.value)
    }

    function handleSubmit() {
        axios.post('/api/mail', {
            first_name: first,
            last_name: last,
            email: email,
            instrument: instrument,
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                if (err) console.error(err.message)
            })
    }

    return(
        <div>
            <form>
                <input type="text" name="first_name" placeholder="First Name" required onChange={handleFirst}></input> <br />
                <input type="text" name="last_name" placeholder="Last Name" required onChange={handleLast}></input> <br />
                <input type="email" name="email" placeholder="Email" required onChange={handleEmail}></input> <br />
                <input type="text" name="instrument" placeholder="Instrument" required onChange={handleInstrument}></input> <br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}