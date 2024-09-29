import {useEffect, useRef, useState} from "react";
import Section2 from "./components/section2.jsx";
import Section1 from "./components/section1.jsx";
import Section3 from "./components/section3.jsx";

const App = () => {

    const containerRef = useRef(null);
    const [startX, setStartX] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [sectionKey, setSectionKey] = useState(0);



    useEffect(() => {
        const newPosition = currentPage * window.innerWidth;
        containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    }, [currentPage]);

    useEffect(() => {
        if (currentPage === 1) {
            setSectionKey(prevKey => prevKey + 1);
        }
    }, [currentPage]);


    const handleTouchSection = (e) => {
        const touch = e.touches[0];
        setStartX(touch.clientX);
    };


    const handleTouchEndSection = (e) => {
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - startX;

        if (deltaX > 50 && currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        } else if (deltaX < -50 && currentPage < 2) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };



    return (
        <div>

            <div className="img-container"
                 ref={containerRef}
                 onTouchStart={handleTouchSection}
                 onTouchEnd={handleTouchEndSection}
            >
                <img src="src/assets/bg.jpg"
                     alt="Global Image"
                     className='bg-image'
                />

                <div className="sections-container">
                    <Section1 setCurrentPage={setCurrentPage} />
                    <Section2 key={sectionKey}/>
                    <Section3/>
                </div>
            </div>

            <div className="global-container">
                <img src="src/assets/global.png"
                     alt="Global Image"
                     className="global-image"
                     onClick={()=> setCurrentPage(0)}
                />
                <img src="src/assets/Shape1.png"
                     alt="Shape1"
                     className="global-image2"/>
            </div>


        </div>
    );
};

export default App;