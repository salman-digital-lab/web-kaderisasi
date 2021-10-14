import moment from 'moment'

const formatDate = ({ date }) => {
    return moment(date).format('DD MMMM YYYY')
}

export default formatDate
