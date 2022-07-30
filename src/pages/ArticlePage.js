import React from 'react';
import { useParams } from 'react-router-dom';
import { articleContent } from './article-content';

const ArticlePage = () => {

    const article = articleContent.find((article) => article.name === name);
    const params = useParams();
    const name = name.find((p) => p.name === params.name);

    if (!article) return <h1>Article not exist!</h1>

    return (
    <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
    </>
);
}
export default ArticlePage;