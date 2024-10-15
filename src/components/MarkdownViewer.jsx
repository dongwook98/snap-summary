/* eslint-disable react/prop-types */
import ReactMarkdown from 'react-markdown';

const MarkdownViewer = ({ markdown }) => {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default MarkdownViewer;
