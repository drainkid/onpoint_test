import { useState } from "react";
import Pagination from "./pagination.jsx";

const Section3 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {!isOpen ? (
                <div className="section3">
                    <div className="textfield2">
                        <div className="field2-text">
                            Ehicula Ipsum a arcu curlus vitae. Eu non diam phalellus vestibulum
                            lorem sed risus ultricies.
                        </div>
                        <img src= 'src/assets/icon2.png'
                        alt='icon2'
                        className= 'field2-icon'/>
                    </div>

                    <div className="textfield3">
                        <img src='src/assets/icon1.png'
                             alt='field3_icon'
                             className='field3-icon'
                        />
                        <div className="field3-text">
                            A arcu <br/>
                            cursus vitae
                        </div>
                    </div>

                    <img
                        src="src/assets/btn2.png"
                        alt="btn2"
                        className="btn2"
                        onClick={() => setIsOpen(true)}
                    />
                </div>
            ) : (
                <Pagination setIsOpen={setIsOpen} />
            )}

            <div className="key-msg">{!isOpen ? "КЛЮЧЕВОЕ СООБЩЕНИЕ" : "ПРЕИМУЩЕСТВА"}</div>

            <div className="title-copy">
                BREND<strong>XY</strong>
            </div>

            <img src="src/assets/bubble3.png" alt="bubble" className="bubble3" />
            <img src="src/assets/bubble4.png" alt="bubble" className="bubble4" />
            <img src="src/assets/bubble7.png" alt="bubble" className="bubble7" />
            <img src="src/assets/bottle.png" alt="bottle" className="bottle" />
            <img src="src/assets/bubble1.png" alt="bubble" className="bubble1" />
            <img src="src/assets/bubble2.png" alt="bubble" className="bubble2" />
            <img src="src/assets/bubble5.png" alt="bubble" className="bubble5" />
            <img src="src/assets/bubble6.png" alt="bubble" className="bubble6" />
            <img src="src/assets/bubble8.png" alt="bubble" className="bubble8" />
        </div>
    );
};

export default Section3;
