import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import { YOUTUBE_API_KEY } from './Constants';
import { SearchBar } from './components/SearchBar';
import { VideoList } from './components/VideoList';
import { VideoDetail } from './components/VideoDetail';

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: YOUTUBE_API_KEY, term }, videos => {
            const selectedVideo = videos ? videos[0] : null;
            this.setState({ videos, selectedVideo });
        });
    }

    render () {
        const videoSearch = _.debounce(term => {
            this.videoSearch(term)
        }, 375);
        
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
                    videos={this.state.videos}
                />
            </div>
        );
    }
}
