import {useState} from "react";

// eslint-disable-next-line react/prop-types
const Pagination = ({setIsOpen}) => {

    const [page, setPage] = useState(false);

    return (
        <div>
            <div className="pagination">
                <img src='/bgpag.png'
                     alt='g'
                     className='bgpag'/>
                <div className="pgfield">
                    {(!page) ?
                        <div className='pgpages'>
                            <div className="pg-01">
                                01
                            </div>
                            <div className="dis-01">
                                Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit
                            </div>
                            <div className="pg-02">
                                02
                            </div>
                            <div className="dis-02">
                                Faucibus pulvinar elementum integer enim
                            </div>
                            <div className="pg-03">
                                03
                            </div>

                            <div className="dis-03">
                                Faucibus pulvinar elementum integer enim
                            </div>
                            <img src='/selected.png'
                                 alt='selected_btn'
                                 className='selected_btn'/>

                            <img src='/not_selected.png'
                                 alt='not_selected_btn'
                                 className='not_selected_btn'
                            />
                        </div>
                        :
                        <div className='pgpages'>
                            <div className="pg-01">
                                04
                            </div>
                            <div className="dis-01">
                                Mi bebendum neque egestas congue quisque egestas diam
                            </div>
                            <div className="pg-02">
                                05
                            </div>
                            <div className="dis-02">
                                Venetasis lectus magna fringilla urna
                            </div>
                            <div className="pg-03">
                                06
                            </div>

                            <div className="dis-03">
                                Venetasis lectus magna fringilla urna
                            </div>
                            <img src='/not_selected.png'
                                 alt='not_selected_btn'
                                 className='not_selected_btn2'
                            />

                            <img src='/selected.png'
                                 alt='selected_btn'
                                 className='selected_btn2'/>
                        </div>

                    }
                    <img src='/left.png'
                         alt='left_btn'
                         className='left_btn'
                         onClick={() => setPage(false)}
                    />
                    <img src='/right.png'
                         alt='right_btn'
                         className='right_btn'
                         onClick={() => setPage(true)}
                    />
                    <img src='/btn_close.png'
                         alt='close_btn'
                         className='close_btn'
                         onClick={() => setIsOpen(false)}
                    />
                </div>
            </div>

        </div>
    );
};

export default Pagination;