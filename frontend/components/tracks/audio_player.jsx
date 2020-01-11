import React from 'react';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <audio className="audio-player" controls>
                <source src={this.props.track.trackUrl} type="audio/mpeg" />
            </audio>
        )
    }
}

export default AudioPlayer;
