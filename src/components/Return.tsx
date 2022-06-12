import React from 'react';
import {Link} from 'react-router-dom';

const Return = () => {
    return (
        <div>
            <Link to="/">
                    <button>Return to home</button>
            </Link>
        </div>
    );
};

export default Return;