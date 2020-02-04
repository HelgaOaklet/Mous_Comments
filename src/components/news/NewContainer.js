import React from 'react';
import NewComponent from "./NewComponent";

const getComments = (newsIndex) => {
    const arrayComments = [];
    const isEven = !(newsIndex % 2);
    for (let i = 0; i < (isEven ? 5 : 3); i++) {
        arrayComments.push({
            author: isEven ? `Ann${i}${i}${i}` : `John${i}${i}${i}`,
            commentText: `This new is ${isEven ? 'good' : 'bad'}.`,
            likes: isEven ? isEven * 3 : isEven * 5
        });
    }
    return arrayComments;
};

const getNews = () => {
    const arrayNews = [];
    for (let i = 0; i < 10; i++) {
        arrayNews.push({
            title: `Title ${i}`,
            description: `${i} - Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
            comments: getComments(i)
        });
    }
    return arrayNews;
};

function NewContainer() {
    const currentArray = getNews();
    console.log(currentArray);
    return (
        <div className="centered new_container">
            {currentArray.map(item => (
                <NewComponent key={item.title}
                              newsInfo={item}
                />
            ))}
            </div>
    );
}

export default NewContainer;
