const { useState } = React

import { mailService } from "../services/mail.service.js"

// onst { useState, useEffect } = React
// const { useNavigate, useParams, Link } = ReactRouterDOM
export function MailCompose({ onComposeMail }) {

    const [mailToCompose, setMailToCompose] = useState(mailService.getEmptyMail())

    // const navigate = useNavigate()
    // const { mailId } = useParams()

    // useEffect(() => {
    //     if (!mailId) return
    //     loadMail()
    // }, [])

    // function loadMail() {
    //     mailService.get(mailId)
    //         .then((mail) => setMailToEdit(mail))
    //         .catch((err) => {
    //             console.log('Had issues in mail details', err)
    //             navigate('/mail')
    //         })
    // }

    function handleChange(ev) {
        // if(ev.currentTarget) {
        //     var value = ev.currentTarget.textContent
        //     mailToCompose.txt = value
        //     var field = 'txt'
        // } else {
        var { value, name: field } = ev.target
        // }
        console.log('value:', value)
        setMailToCompose((prevMail) => {
            return { ...prevMail, [field]: value }
        })
    }

    return <section className="mail-compose">
        <header>New Message</header>
        <form className="compose-form" onSubmit={(ev) => onComposeMail(ev, mailToCompose)}>
            <label className="to-label">
                To
                <input className="to"
                    type="email"
                    name="to"
                    // value={mailToCompose.to}
                    onChange={handleChange}
                    required
                />
            </label>
            <hr />
            <label>
                <input className="subject"
                    type="text"
                    name="subject"
                    value={mailToCompose.subject}
                    placeholder="Subject"
                    onChange={handleChange}
                />
            </label>
            <hr />
            <label>
                <textarea className="txt"
                    type="text"
                    name="txt"
                    value={mailToCompose.txt}
                    onChange={handleChange}
                />
            </label>
            <hr />
            {/* <label className="compose txt">
                <div contentEditable
                // role="textbox"
                    name="txt"
                    // value={mailToCompose.txt}
                    onInput={handleChange}
                ></div>
            </label> */}

            <button>Send</button>
        </form>
    </section>
}