import React from 'react';

const ApproveCard = props => {
    //console.log(props);
    return (

        <div className="ui card">

            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="two buttons">
                    <div className="ui basic green card">Approve</div>
                    <div className="ui basic red card">Reject</div>
                </div>
            </div>
        </div>

    );
};
export default ApproveCard;