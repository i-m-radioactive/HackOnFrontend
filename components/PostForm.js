import React, { useState } from 'react'
import TagInput from './TagInput'
import axios from 'axios'

const PostForm = () => {

    const [postData, setPostData] = useState({
        name: "",
        description: ""
    });

    const [content, setContent] = useState({
        detail: "",
        qty: ""
    })

    const [postCat, setPostCat] = useState([]);
    const [postContent, setPostContent] = useState([]);

    const inputHandler = (e) => {
        const newData = { ...postData };
        newData[e.target.name] = e.target.value;
        setPostData(newData);
    }

    const contentInputHandler = (e) => {
        const newData = { ...content };
        newData[e.target.name] = e.target.value;
        setContent(newData);
    }

    const categorySubmit = (e) => {
        if (e.key === "Enter") {
            const tagData = { key: postCat.length + 1, label: e.target.value };
            const tempTag = [...postCat];
            tempTag.push(tagData);
            setPostCat(tempTag);
            e.target.value = "";
        }
    };

    const categoryHandleDelete = (chipToDelete) => () => {
        setPostCat((postCat) => postCat.filter((chip) => chip.key !== chipToDelete.key));
    };

    const contentSubmit = () => {
        const contentData = { detail: content.detail, qty: content.qty };
        const tempContent = [...postContent];
        tempContent.push(contentData);
        setPostContent(tempContent);
        setContent({
            detail: "",
            qty: ""
        });
    }

    const contentDelete = (itemToDelete) => {
        console.log(itemToDelete);
        const temp = postContent.filter((item, index) => {
            return index != itemToDelete
        })
        console.log(temp);
        setPostContent(temp);
    }

    const PostFormSubmit = async () => {

        console.log({
            ...postData,
            postCat,
            postContent
        })

        const categories = postCat.map((item) => { return Object.values(item)[1] });

        const res = await axios({
            method: 'post',
            url: 'https://nostalgic-merciful-pedestrian.glitch.me/mutation',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("_token")
            },
            data: JSON.stringify({
                query: `mutation add($body:[PostContent]!,$cat:[String]!){
                createPost(data:{
                    title: "${postData.name}",
                    category: $cat,
                    description: "${postData.description}",
                    content: $body
                }){
                error
                msg
                }
            }`,
                variables: {
                    body: postContent,
                    cat: categories
                }
            })
        })

        console.log(res);

    }

    return (
        <form>
            <div className="div">
                <label>Title</label>
                <input name="name" value={postData.name} onChange={inputHandler} />
            </div>
            <div className="div">
                <label>Description</label>
                <textarea name="description" value={postData.description} onChange={inputHandler}></textarea>
            </div>
            <div className="div">
                <label>Category</label>
                <input type="text" id="category" onKeyDown={categorySubmit} name="category" />
                <TagInput chipData={postCat} handleDelete={categoryHandleDelete} />
            </div>
            <div className="post-detail">
                <label>Details</label>
                <div>
                    <label>
                        Detail:
                        <input name="detail" value={content.detail} onChange={contentInputHandler} />
                    </label>
                    <label>
                        Quantity:
                        <input name="qty" value={content.qty} onChange={contentInputHandler} />
                    </label>
                    <button type="button" onClick={contentSubmit}>Add</button>
                </div>
                <div>
                    {postContent.map((item, index) => {
                        return <div key={index}>
                            <p>
                                {item.detail}
                            </p>
                            <p>
                                {item.qty}
                            </p>
                            <button type="button" onClick={(e) => { return contentDelete(index) }}>Delete</button>
                        </div>
                    })}
                </div>
            </div>
            <div className="div">
                <button type="button" onClick={PostFormSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default PostForm
