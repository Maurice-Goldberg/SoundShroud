export const fetchTrack = (trackId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/tracks/${trackId}`
    });
};

export const fetchTracks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/tracks'
    }).fail(
        () => console.log("I failed")
    )
};

export const uploadTrack = (formData) => {
    return $.ajax({
        method: 'POST',
        url: '/api/tracks',
        data: formData,
        contentType: false,
        processData: false
    });
}

export const updateTrack = (formData, id) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/tracks/${id}`,
        data: formData,
        contentType: false,
        processData: false
    })
}

export const deleteTrack = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/tracks/${id}`
    })
}