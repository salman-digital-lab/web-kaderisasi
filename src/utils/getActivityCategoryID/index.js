const getActivityCategoryID = ({
    activityCategoryID,
    activityCategoryData,
}) => {
    const result = activityCategoryData.filter(
        (item) => item.id === activityCategoryID
    )

    return result
}

export default getActivityCategoryID
