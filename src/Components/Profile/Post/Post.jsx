

import React from 'react';
import p from './Post.module.css'


const Post = (props)=> {
    return (
       
        <div className = {p.item}>
        <img src = 'https://thumbs.dreamstime.com/z/%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D1%81-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%BE%D0%BC-%D1%81%D0%B5%D1%80%D1%91%D0%B6%D0%B5%D0%BA-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%81%D0%B5%D1%80%D1%91%D0%B6%D0%BA%D0%B0%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-160846873.jpg' />
        {props.message}
        <div>
        <span>Like: {props.likesAmounts}</span>
       </div>
 </div>

          )
}

export default Post