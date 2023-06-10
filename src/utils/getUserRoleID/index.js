const getUserRoleID = (id) => {
    if (!id) {
        return 'Not Available'
    }

    switch (id) {
        case 4:
            return 'Jamaah'

        case 5:
            return 'Aktivis'

        case 6:
            return 'Kader'

        case 7:
            return 'Kader Lanjut'

        case 51:
            return 'Aktivis KK' 

        case 52:
            return 'Kader Inventra' 
        
        case 53:
            return 'Kader Komprof' 

        default:
            return 'Not Available'
    }
}

export default getUserRoleID
