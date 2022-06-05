import styles from '../styles/Contact.module.css';
import { useState, ChangeEvent } from 'react'; 
import axios from 'axios';

export const Contact = () => {
  
    const formId = 'iL7BUkVi'
    const formSparkUrl = `https://submit-form.com/${formId}`
    
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        await postSubmission();
    }

    const postSubmission = async () => {
        const payload = {
            message: message,
            email: email
        };

        try {
          if(email.includes('@') && email.includes('.')) {
            const result = await axios.post(formSparkUrl, payload)
            setEmail('')
            setMessage('')
          }
          else {
            window.alert('please enter a valid email address');
          }
        } catch(error) {
            console.log(error);
        }
    }

    const emailChange = (event: ChangeEvent<HTMLInputElement>) => {
        
        setEmail(event.currentTarget.value)
        
    }

    const messageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value);
        
    }

    return (
      <div className={styles.grid}>
        <div className={styles.popup}>Feel free to send me a messgae if you have any inquaries. I will send you a response within one buisness day.</div>
          <div className={styles.container}>
            <main className={styles.main}>
              <form className={styles.form}>
                <fieldset className={styles.fieldset}>
                  <legend className={styles.legend}>Contact Form</legend>
                  <div className={styles.marginTop}>
                    <label className={styles.label}>Return email</label>
                    <input onChange={emailChange} value={email} className={styles.input} type="email" name="email-address"  id="email-address"/>
                  </div>
                  <div className={styles.marginVertical}>
                  <label  className={styles.label}>Message</label>
                  <textarea onChange={messageChange} value={message} placeholder={'Feel free to send me a message about any inquiries.'} cols={55} rows={5} id="comment" name="comment" className={styles.textarea} aria-describedby="comment-desc"></textarea>
                  </div>
                  
                </fieldset>
                <div>
                  <input onClick={submitForm} 
                        className={styles.button} 
                        type="submit" value="Send"
                        />
                </div>
              </form>
            </main>
            </div>
          </div>
  )
}

export default Contact