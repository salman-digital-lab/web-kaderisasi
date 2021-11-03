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

        default:
            return 'Not Available'
    }
}

export default getUserRoleID
