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
                    </div>

                    <div className="textfield3">
                        <div className="field3-text">
                            A arcu <br />
                            cursus vitae
                        </div>
                    </div>

                    <img src="src/assets/bubble3.png" alt="bubble" className="bubble3" />
                    <img src="src/assets/bubble4.png" alt="bubble" className="bubble4" />
                    <img src="src/assets/bubble7.png" alt="bubble" className="bubble7" />
                    <img src="src/assets/bottle.png" alt="bottle" className="bottle" />

                    <img
                        src="src/assets/btn2.png"
                        alt="btn2"
                        className="btn2"
                        onClick={() => setIsOpen(true)} // Изменение состояния по клику
                    />

                    <img
                        src="src/assets/icon2.png"
                        alt="field2-icon"
                        className="field2-icon"
                    />

                    <img
                        src="src/assets/icon1.png"
                        alt="field3-icon"
                        className="field3-icon"
                    />

                    <div className="key-msg">КЛЮЧЕВОЕ СООБЩЕНИЕ</div>

                    <div className="title-copy">
                        BREND<strong>XY</strong>
                    </div>

                    <img src="src/assets/bubble1.png" alt="bubble" className="bubble1" />
                    <img src="src/assets/bubble2.png" alt="bubble" className="bubble2" />
                    <img src="src/assets/bubble5.png" alt="bubble" className="bubble5" />
                    <img src="src/assets/bubble6.png" alt="bubble" className="bubble6" />
                    <img src="src/assets/bubble8.png" alt="bubble" className="bubble8" />
                </div>
            ) : (
                <div>
                    <Pagination setIsOpen={setIsOpen}/>
                    <div className="key-msg">ПРЕИМУЩЕСТВА</div>
                    <div className="title-copy">
                        BREND<strong>XY</strong>
                    </div>
                    <img src="src/assets/bubble3.png" alt="bubble" className="bubble3"/>
                    <img src="src/assets/bubble4.png" alt="bubble" className="bubble4"/>
                    <img src="src/assets/bubble7.png" alt="bubble" className="bubble7"/>
                    <img src="src/assets/bottle.png" alt="bottle" className="bottle"/>
                    <img src="src/assets/bubble1.png" alt="bubble" className="bubble1"/>
                    <img src="src/assets/bubble2.png" alt="bubble" className="bubble2"/>
                    <img src="src/assets/bubble5.png" alt="bubble" className="bubble5"/>
                    <img src="src/assets/bubble6.png" alt="bubble" className="bubble6"/>
                    <img src="src/assets/bubble8.png" alt="bubble" className="bubble8"/>
                </div>
            )}
        </div>
    );
};

export default Section3;
