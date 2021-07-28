import React from 'react'
import styleIndex from '../styles/index.module.scss'

const Index = (props) => {
    return (
        <div className={styleIndex.index}>

            {props.posts.posts.map((post, index) => {
                return (
                    <div key={index} className={styleIndex.container}>
                        <h1>{post.name}</h1>
                        <p>{JSON.stringify(post.category, null, 2)}</p>
                        <p>{post.description}</p>
                        <p>{post.vlt.pincode}</p>
                        <p>{post.vlt.city}</p>
                        <p>{post.vlt.state}</p>
                        <h3>Item Available</h3>
                        {post.content.map((item, index) => {
                            return (
                                <p key={index}> {item.detail} &nbsp;&nbsp; Qty-{item.qty} </p>
                            )
                        })}
                    </div>)
            })}
        </div>
    )
}

export default Index;
