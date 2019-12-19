export const fetchTrack = (trackId) => {
    debugger
    return $.ajax({
        method: 'GET',
        url: `/api/tracks/${trackId}`
    });
};

export const fetchTracks = () => {
    debugger;
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