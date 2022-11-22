const getActivityCategoryID = ({
    activityCategoryID,
    activityCategoryData,
}) => {
    const result = activityCategoryData.filter(
        (item) => item.id === activityCategoryID
    )

    return result[0]?.name
}

export default getActivityCategoryID
