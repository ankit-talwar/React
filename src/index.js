import React from 'react';
import reactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApproveCard from './ApproveCard';

const App = () => {
    return (
        <div className="ui container comments" >
            <ApproveCard>
                <CommentDetail author="sam" timeAgo="today  at 7:00pm" comm="nice blog!" avatar={faker.image.avatar()} />
            </ApproveCard>
            <ApproveCard>
                <CommentDetail author="romi" timeAgo="today at 7:30pm" comm="this is nice" avatar={faker.image.avatar()} />
            </ApproveCard>
            <ApproveCard>
                <CommentDetail author="helen" timeAgo="today at 8:00 pm" comm="this is actually amazing" avatar={faker.image.avatar()} />
            </ApproveCard>

        </div >
    );
};

reactDom.render(<App />, document.querySelector('#root'));