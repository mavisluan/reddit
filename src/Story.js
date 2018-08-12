import React from 'react'
import moment from 'moment'
 
const Story = ({ story:{id, userName, title, img, link, time, vote, comment}, onUpVote, onDownVote }) => (
    <div className='story'>
        <div className='vote'>
            <button onClick={() => onUpVote(id)}><i className="fas fa-arrow-up"></i></button>
            <span>{vote}</span>
            <button onClick={() =>onDownVote(id)}><i className="fas fa-arrow-down"></i></button>
        </div>
        <div className='image'>
            <img src={img} width='100px' height='100px' alt={title}/>
        </div>
        <div className='story-info'>
            <a href={link}>{title}</a>
            <div>
                <span>
                    Submitted {moment(time).fromNow()} by <span style={{color: 'black'}}>{userName}</span>
                </span>
            </div>
            <div>
                <span style={{color: 'brown', fontWeight: 'bold'}}>{comment} comment </span>
                <span> share save hide report pocket </span>
            </div>
        </div>
    </div>
)
 
 

export default Story