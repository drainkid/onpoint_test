import {useState} from "react";

const Section2 = () => {

    const [scrollPos, setScrollPos] = useState(238);
    const [textPos, setTextPos] = useState(0);
    const [isDragging, setIsDragging] = useState(false);




    const handleTouchStart = () => {
        setIsDragging(true);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleTouchMove = (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            const newY = touch.clientY - 50;

            // Ограничиваем перемещение кнопки в диапазоне 238 - 610
            const clampedY = Math.max(238, Math.min(newY, 610));

            setScrollPos(clampedY);

            // Пропорция перемещения кнопки от 238 до 610
            const scrollRange = 610 - 238;
            const moveRatio = (clampedY - 238) / scrollRange;

            const maxTextMove = -300; // Максимальное смещение текста
            const newTextTop = moveRatio * maxTextMove;
            setTextPos(newTextTop);
        }
    };

    return (
        <div>
            <div className="section2">

                <div className="txt-container">
                    ТЕКСТ СООБЩЕНИЯ
                </div>

                <img src='src/assets/pink_sperm3.png'
                     alt='pink_sperm3'
                     className='pink-sperm3'
                />

                <img src='src/assets/pink_sperm4.png'
                     alt='pink_sperm4'
                     className='pink-sperm4'
                />

                <img src='src/assets/pink_sperm5.png'
                     alt='pink_sperm5'
                     className='pink-sperm5'
                />

                <img src='src/assets/pink_sperm5.png'
                     alt='pink_sperm6'
                     className='pink-sperm6'
                />

                <img src='src/assets/pink_sperm5.png'
                     alt='pink_sperm7'
                     className='pink-sperm7'
                />

                <div className="textfield">
                    <div className='field1-text' style={{top: `${textPos}px`}}>
                        <strong>Lorem ipsum dolor sit amet </strong>, consectetur adipiscing elit. Maecenas commodo
                        augue magna, at posuere justo porttitor nec. Nam non risus eget mauris finibus ullamcorper
                        tempus at sapien. Nunc vitae libero quis urna volutpat ultrices eget nec velit. Suspendisse
                        imperdiet vitae ex ut ultrices. Quisque vehicula, dui nec malesuada imperdiet, lorem leo
                        condimentum metus, ac fermentum dolor mi sed tortor. Mauris tincidunt arcu orci, rutrum viverra
                        erat ullamcorper at. Donec eget ligula nulla. Integer in rhoncus purus. Aliquam quis justo a
                        felis aliquam cursus vitae eget metus. In consectetur venenatis ipsum. Vestibulum ut nisi metus.
                        Nulla nibh dolor, ultrices id dolor sit amet, interdum vehicula ex. Interdum et malesuada fames
                        ac ante ipsum primis in faucibus.

                        Mauris consectetur malesuada ligula, quis auctor est. Aliquam blandit, massa pretium pulvinar
                        consequat, nulla diam fermentum sem, eget porta libero lectus eget nibh. Aliquam vel laoreet
                        leo. Duis ac neque luctus, lobortis ex faucibus, efficitur tortor. Proin vitae imperdiet magna.
                        Sed massa lorem, imperdiet nec ultricies at, elementum eu magna. Proin ac neque libero.
                        Curabitur consequat, sem eu lacinia lobortis, diam mauris consequat neque, sed efficitur ante
                        orci sed libero. Nam mi metus, fringilla in porttitor nec, tempus sit amet leo. Phasellus ut
                        sapien varius, ultrices nulla quis, placerat sem. Curabitur dictum iaculis elit eu pretium.
                        Nulla facilisi. Etiam sed augue vel ligula auctor rhoncus. Phasellus ex nibh, feugiat sodales
                        posuere non, molestie eget arcu.
                    </div>
                </div>

                <div className="scroll-cntrl"
                     onTouchMove={handleTouchMove}
                     onTouchEnd={handleTouchEnd}
                >
                    <img src='src/assets/Rectangle.png'
                         alt='rectangle'
                         className='rectangle-btn'
                    />

                    <img src='src/assets/btn_scroll.png'
                         alt='btn_scroll'
                         className='scroll-btn'
                         style={{top: `${scrollPos}px`}} // Позиция кнопки
                         onTouchStart={handleTouchStart}
                    />


                </div>
            </div>
        </div>
    );
};

export default Section2;