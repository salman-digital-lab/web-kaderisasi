import DOMPurify from 'dompurify'

const sanitize = (html) => {
    return DOMPurify.sanitize(html)
}

export default sanitize
