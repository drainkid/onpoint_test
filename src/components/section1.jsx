// eslint-disable-next-line react/prop-types
const Section1 = ({setCurrentPage}) => {
    return (
        <div>
            <div className="section">
                <div className="hello-container">
                    ПРИВЕТ,
                </div>
                <div className="title-container">
                    ЭТО
                    <div className='bold'>НЕ</div>
                    КОММЕРЧЕСКОЕ ЗАДАНИЕ
                    <img src='/btn.png'
                         alt='btn'
                         className='title-btn'
                         onClick={() =>
                             setCurrentPage((val) => val + 1)
                         }
                    />
                    <img src='/pink_sperm.png'
                         alt='pink_sperm'
                         className='pink-sperm'
                    />
                    <img src='/bac.png'
                         alt='bac'
                         className='bac'
                    />
                    <img src='/bac2.png'
                         alt='bac2'
                         className='bac2'
                    />
                    <img src='/bac3.png'
                         alt='bac3'
                         className='bac3'
                    />
                    <img src='/bac4.png'
                         alt='bac4'
                         className='bac4'
                    />
                    <img src='/bac5.png'
                         alt='bac5'
                         className='bac5'
                    />
                    <img src='/pink_sperm2.png'
                         alt='pink_sperm2'
                         className='pink-sperm2'
                    />
                    <img src='/bac6.png'
                         alt='bac6'
                         className='bac6'
                    />
                    <img src='/bac7.png'
                         alt='bac7'
                         className='bac7'
                    />
                </div>
            </div>
        </div>
    );
};

export default Section1;