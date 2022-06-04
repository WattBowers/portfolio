import styles from '../styles/Projects.module.css';
import ReactModal from 'react-modal';
import { useState } from 'react';



export const Projects = () => {
    
    const [showModal, setShowModal] = useState(false)
    const [boredomModal, setBoredomModal] = useState(false)

  
    return (
      <div className={styles.grid}>
        <div className={styles.popup}>Use the navbar up top to move around the website. There you will find more information about me and my work.</div>
        <div className={styles.container}>
        <h1 className={styles.title}>Face Finder</h1>
        <div className={styles.pill}>
          <div className={styles.pill1}>
            <div className={styles.recognizerbackground}></div>
          </div>
          <div className={styles.pill2}>
            <h5 className={styles.text}>Using the face detecton api from Clarify. Login to this tool to find a face in an image.</h5>
          </div>
          <div className={styles.pill3}>
          <button className={styles.button} onClick={() => setShowModal(true)}> More info</button>
        
        
        <ReactModal 
            isOpen={showModal}
            style={{
                overlay: {
                    backgroundColor: 'rgba(100, 100, 100, .4)'
                },
                content: {
                    margin: '0',
                    height: '400px',
                    width: '700px',
                    position: 'absolute',
                    left: '31.5%',
                    top: '25%'
                    
                }
            }}
            >
        <h3 className={styles.title}>Face Finder</h3>
        <p className={styles.padding}>This is my first big project using react that I completed front to back. The idea
             came from the great teachers at ZTM on Udemy. The project is straightforward, but 
             I learned a great deal about how React interacts with API's, external libraries, and 
             Node. This is a work in progress, as there are a couple more features I am looking to add in the next few months. 
             
             <br /><br />
             The Frontend is built using React, and the Clarifai Api. The backend is built with Node.js, MySQL 
             for the database, and hosted using Heroku. Feel free to checout the source code on Github,
             or the live site. </p>
            <a className={styles.marginRight} target="_blank" href='https://face-finding-project.herokuapp.com/'><button className={styles.modalButton}>Live site</button></a>
            <a className='ml1 mr1' target="_blank" href='https://github.com/WattBowers/facerecognizer-front'><button className={styles.modalButton}>Github Repo</button></a>
            <button className={ `${ styles.marginLeft } ${ styles.modalButton }` } onClick={() => setShowModal(false)}> Close</button>
        </ReactModal>



          </div>
        </div>
        <h1 className={styles.title}>The Boredom Butler</h1>
        <div className={styles.pill}>
          <div className={styles.pill1}>
            <div className={styles.butlerbackground}></div>
          </div>
          <div className={styles.pill2}>
            <h5 className={styles.text}>Dont know what movie or TV show to watch? Let The Boredom Butler help.</h5>
          </div>
          <div className={styles.pill3}>
          <button className={styles.button} onClick={() => setBoredomModal(true)}> More info</button>  
            <div className={styles.center}>         
              <ReactModal 
                isOpen={boredomModal}
                style={{
                  overlay: {
                    backgroundColor: 'rgba(100, 100, 100, .4)'
                },
                content: {
                    margin: '0',
                    height: '400px',
                    width: '700px',
                    position: 'absolute',
                    left: '31.5%',
                    top: '25%'
                    
                }
                }}
                >
                <h3 className={styles.title}>The Boredom Butler</h3>
                <p className={styles.padding}> 
                  This project is somehting that I built to hone my skills with react, and to get more aquainted with 
                  modern React syntax. My main focus when building this site was shifting from using Class based components
                  to to functional ones using Hooks. I also taught me a lot about using and editing SVG files to fit create 
                  well optimized experiances. I also find it to be a useful tool, and something I am planning on building upon to 
                  add functionality for different types of media, and a more fluent user expiriance. 
                  <br /><br />
                  The project is built using React, and the ImDb API.
                </p>
                <a className={styles.marginRight} target="_blank" href='https://the-boredom-butler.herokuapp.com/'><button className={styles.modalButton}>Live site</button></a>
                <a target="_blank" href='https://github.com/WattBowers/Boredom-Butler'><button className={styles.modalButton}>Github Repo</button></a>
                <button className={ `${ styles.marginLeft } ${ styles.modalButton }` } onClick={() => setBoredomModal(false)}> Close</button>
              </ReactModal>
            </div>   
         </div>
        </div>
    </div>
  </div>
  )
}

export default Projects