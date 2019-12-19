export const fetchTrack = (trackId) => {
    debugger
    return $.ajax({
        method: 'GET',
        url: `/api/tracks/${trackId}`
    });
}

export const fetchTracks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/tracks'
    });
}

export const uploadTrack = (formData) => {
    return $.ajax({
        method: 'POST',
        url: '/api/tracks',
        data: formData,
        contentType: false,
        processData: false
    });
}